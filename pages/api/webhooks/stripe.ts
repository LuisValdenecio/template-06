// pages/api/webhooks.ts
import { buffer, text } from 'micro';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { Resend } from 'resend';
import NotionMagicLinkEmail from '../../../emails/welcome';

// This part is necessary so that NextJS doesn't parse the request body
// Otherwise it will manipulate it and stripe will reject it    
export const config = {
  api: {
    bodyParser: false,
  },
};

const resend = new Resend(process.env.RESEND_API_KEY);

// the handler
const handleWebhook = async (
  req: NextApiRequest, 
  res: NextApiResponse
  ) => {
  if (req.method === 'POST') {
    try {
      // get the stripe signature
      const sig = req.headers['stripe-signature'];
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2024-12-18.acacia",
        typescript: true,
      });
      const buf = await buffer(req);
      const stripeEvent = stripe.webhooks.constructEvent(
        buf,
        sig!,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
      // now you have access to the stripe event

      switch (stripeEvent.type) {
        // this is where we are going to add our logic 
        // depending on the event type
            case 'checkout.session.completed': {
                const session = await stripe.checkout.sessions.retrieve(
                  (stripeEvent.data.object as Stripe.Checkout.Session).id,
                  {
                    expand: ["line_items"],
                  }
                );
				        const customerDetails = session.customer_details;

				        if (customerDetails?.email) {
                    await resend.emails.send({
                        from: 'welcome@selfhostedebook.com',
                        to: customerDetails?.email,
                        subject: `Hello ${customerDetails?.name}`,
                        react: NotionMagicLinkEmail({ loginCode : process.env.NEXT_PUBLIC_PURCHASE_ASSETS_PASSWORD, assetsUrl: process.env.NEXT_PUBLIC_PURCHASE_ASSETS }),
                    });
                }    

                // update your database with the subscription id or status, ...

                break;
              }
            default:
              console.log("this event type is not handled");
        // ...
      }

      // just inform stripe that you received the event
      res.send({ status: 'success' });
      return;
    } catch (error: any) {
      // lets handle any errors coming from stripe
      console.log(error);
      res.status(500).json({ error: error.message });
      return;
    }
  }

  // if the request is not a POST request, we return a 404
  res.status(404).json({
    error: {
      code: 'not_found',
      message:
        "The requested endpoint was not found",
    },
  });
}

export default handleWebhook;
