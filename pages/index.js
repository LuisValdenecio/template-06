import Head from "next/head";
import CenteredCTAText from "../components/ui/CenteredCTAText";
import CTA from "../components/ui/CTA";
import FAQs from "../components/ui/FAQs";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Stats from "../components/ui/Stats";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Navbar />
      <Hero />
      {
        process.env.NEXT_PUBLIC_LOGO_SECTION_SHOW === "1" && (
          <LogoGrid />
        )
      }
      {/*<CenteredCTAText />*/}
      {
        process.env.NEXT_PUBLIC_CTA_SECTION_SHOW === "1" && (
          <CTA />
        )
      }
      {
        process.env.NEXT_PUBLIC_FEATURES_SECTION_SHOW === "1" && (
          <Features />
        )
      }
      {
        process.env.NEXT_PUBLIC_STATS_SECTION_SHOW === "1" && (
          <Stats />
        ) 
      }
      {
        process.env.NEXT_PUBLIC_FAQ_SHOW === "1" && (
          <FAQs />
        )
      }
      {
        process.env.NEXT_PUBLIC_CTA_FOOTER_SHOW === "1" && (
          <FooterCTA />
        )
      }
      {
        process.env.NEXT_PUBLIC_FOOTER_SHOW === "1" && (
          <Footer />
        )
      }
    </>
  );
}
