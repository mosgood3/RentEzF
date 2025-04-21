// app/page.tsx or pages/index.tsx
"use client";
import Head from "next/head";
import Header from "../components/landing/header";
import HeroSection from "../components/landing/herosection";
import FeaturesSection from "../components/landing/featuressection";
import PricingSection from "../components/landing/pricingsection";
import ContactSection from "../components/landing/contactsection";
import Footer from "../components/landing/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rentez - Property Management Software</title>
        <meta
          name="description"
          content="Simplify your property management with Rentez: streamline tenant management, track finances, and more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
