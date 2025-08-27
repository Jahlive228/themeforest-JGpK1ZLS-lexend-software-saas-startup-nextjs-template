import Footer8 from "@/components/footers/Footer8";
import Header8 from "@/components/headers/Header8";
import Breadcumb from "@/components/innerpages/Breadcumb";
import CollectHero from "@/components/collect/CollectHero";
import CollectFeatures from "@/components/collect/CollectFeatures";
import CollectProcess from "@/components/collect/CollectProcess";
import CollectPricing from "@/components/collect/CollectPricing";
import CollectFaqs from "@/components/collect/CollectFaqs";
import CollectCta from "@/components/collect/CollectCta";
import React from "react";

export const metadata = {
  title: "Collect - GomboPay | Solution de collecte de paiements",
  description: "Découvrez GomboPay Collect, la solution simple et sécurisée pour collecter vos paiements en ligne via Mobile Money, cartes bancaires et wallets.",
};

export default function CollectPage() {
  return (
    <>
      <div className="theme-5">
        <div className="bp-xs bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-tertiary-800 text-tertiary-200 overflow-x-hidden disable-cursor uc-dark">
          <Header8 />
          <div id="wrapper" className="wrap">
            <div style={{ marginTop: "150px" }}></div>
            <CollectHero />
            <CollectProcess />
            <CollectFeatures />
            <CollectPricing />
            <CollectFaqs />
            <CollectCta />
          </div>
          <Footer8 />
        </div>
      </div>
    </>
  );
}
