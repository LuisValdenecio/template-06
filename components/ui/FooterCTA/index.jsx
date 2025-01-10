import DarkWrapper from "../../DarkWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => {
    return (
        <DarkWrapper>
            <div className="custom-screen  gap-x-12 justify-between md:flex">
                <div className="max-w-xl">
                    <h2 className="text-white text-3xl font-semibold sm:text-4xl">
                        {process.env.NEXT_PUBLIC_CTA_FOOTER_MAIN_TITLE}
                    </h2>
                    <p className="mt-3 text-gray-300">
                        {process.env.NEXT_PUBLIC_CTA_FOOTER_MAIN_DESCRIPTION}
                    </p>
                </div>
                <div className="flex-none mt-4 md:mt-0">
                    <NavLink
                        href={process.env.NEXT_PUBLIC_STRIPE_PRODUCT_PAYMENT_LINK}
                        className="inline-flex items-center gap-x-2 font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 "
                    >
                        {process.env.NEXT_PUBLIC_CTA_LABEL}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                    </NavLink>
                </div>
            </div>
        </DarkWrapper>
    )
}

export default FooterCTA