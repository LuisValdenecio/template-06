import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface NotionMagicLinkEmailProps {
    loginCode?: string;
    assetsUrl?: string;
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_PURCHASE_ASSETS
    ? `https://${process.env.NEXT_PUBLIC_PURCHASE_ASSETS}`
    : "";
  
  export const NotionMagicLinkEmail = ({
    loginCode,
    assetsUrl
  }: NotionMagicLinkEmailProps) => (
    <Html>
      <Head />
      <Preview>Log in with this magic link</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thanks for Purchasing!</Heading>
          <Link
            href={assetsUrl}
            target="_blank"
            style={{
              ...link,
              display: "block",
              marginBottom: "16px",
            }}
          >
            Click here to download the ebook files
          </Link>
          <Text style={{ ...text, marginBottom: "14px" }}>
            Use the code bellow to access the book files on wetransfer:
          </Text>
          <code style={code}>{loginCode}</code>
          <Text
            style={{
              ...text,
              color: "#ababab",
              marginTop: "14px",
              marginBottom: "16px",
            }}
          >
            If you don&apos;t recognize this message, you can safely ignore this email.
          </Text>
          <Text
            style={{
              ...text,
              color: "#ababab",
              marginTop: "12px",
              marginBottom: "38px",
            }}
          >
            Tip: Tag this e-mail, you might need to come back to it later.
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  NotionMagicLinkEmail.PreviewProps = {
    loginCode: "sparo-ndigo-amurt-secan",
    assetsUrl: process.env.NEXT_PUBLIC_STRIPE_PRODUCT_PAYMENT_LINK
  } as NotionMagicLinkEmailProps;
  
  export default NotionMagicLinkEmail;
  
  const main = {
    backgroundColor: "#ffffff",
  };
  
  const container = {
    paddingLeft: "12px",
    paddingRight: "12px",
    margin: "0 auto",
  };
  
  const h1 = {
    color: "#333",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "40px 0",
    padding: "0",
  };
  
  const link = {
    color: "#2754C5",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    textDecoration: "underline",
  };
  
  const text = {
    color: "#333",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    margin: "24px 0",
  };
  
  const footer = {
    color: "#898989",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "12px",
    lineHeight: "22px",
    marginTop: "12px",
    marginBottom: "24px",
  };
  
  const code = {
    display: "inline-block",
    padding: "16px 4.5%",
    width: "90.5%",
    backgroundColor: "#f4f4f4",
    borderRadius: "5px",
    border: "1px solid #eee",
    color: "#333",
  };
  