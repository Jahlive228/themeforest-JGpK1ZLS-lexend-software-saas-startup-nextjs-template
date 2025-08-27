import Footer8 from "@/components/footers/Footer8";
import Header8 from "@/components/headers/Header8";
import Breadcumb from "@/components/innerpages/Breadcumb";
import PaymentLinksHero from "@/components/payment-links/PaymentLinksHero";
import PaymentLinksProcess from "@/components/payment-links/PaymentLinksProcess";
import PaymentLinksFeatures from "@/components/payment-links/PaymentLinksFeatures";
import PaymentLinksPricing from "@/components/payment-links/PaymentLinksPricing";
import PaymentLinksFaqs from "@/components/payment-links/PaymentLinksFaqs";
import PaymentLinksCta from "@/components/payment-links/PaymentLinksCta";
import React from "react";

export const metadata = {
  title: "Liens de Paiement - GomboPay | Créez des liens de paiement sécurisés",
  description: "Découvrez GomboPay Liens de Paiement, la solution simple pour créer des liens de paiement sécurisés sans code.",
};

export default function PaymentLinksPage() {
  return (
    <>
      <div className="theme-5">
        <div className="bp-xs bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-tertiary-800 text-tertiary-200 overflow-x-hidden disable-cursor uc-dark">
          <Header8 />
          <div id="wrapper" className="wrap">
            <div style={{ marginTop: "150px" }}></div>
            <PaymentLinksHero />
            <PaymentLinksProcess />
            <PaymentLinksFeatures />
            <PaymentLinksPricing />
            <PaymentLinksFaqs />
            <PaymentLinksCta />
          </div>
          <Footer8 />
        </div>
      </div>
    </>
  );
}
