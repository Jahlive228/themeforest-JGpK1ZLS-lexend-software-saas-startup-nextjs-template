import Accordion from "@/components/common/Accordion";
import { gombopayFaq } from "@/data/gombopay-faq";
import React from "react";
import Link from "next/link";

export default function Faqs() {
  return (
    <div id="faq" className="faq section panel">
      <div className="section-outer panel py-6 lg:py-8 xl:py-10">
        <div className="container">
          <div
            className="section-inner panel max-w-5xl mx-auto"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="text-center mb-6 lg:mb-8">
              <span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                FAQ
              </span>
              <h2 className="h3 lg:h2 mt-2 mb-3">
                Questions{" "}
                <span className="text-tertiary dark:text-primary">
                  fréquentes
                </span>
              </h2>
              <p className="fs-5 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Tout ce que vous devez savoir sur GomboPay et les paiements en ligne en Afrique
              </p>
            </div>

            <div className="row g-4 lg:g-6">
              <div className="col-12 lg:col-8">
                <div className="panel">
                  <ul
                    className="uc-accordion uc-accordion-divider gap-4 lg:gap-6"
                    data-uc-accordion="targets: > li; multiple: false;"
                  >
                    <Accordion faqData={gombopayFaq} />
                  </ul>
                </div>
              </div>
              <div className="col-12 lg:col-4">
                <div className="vstack gap-4">
                  <div className="p-4 bg-primary bg-opacity-5 rounded-2 border border-primary">
                    <h4 className="h5 mb-3">Besoin d'aide ?</h4>
                    <p className="fs-6 mb-3">Notre équipe de support est disponible 24/7 pour répondre à vos questions.</p>
                    <Link href="/contact" className="btn btn-primary w-100">
                      Contactez-nous
                    </Link>
                  </div>
                  <div className="p-4 bg-light rounded-2 border border-dark dark:border-white dark:border-opacity-15">
                    <h4 className="h5 mb-3">Documentation</h4>
                    <p className="fs-6 mb-3">Consultez notre documentation technique détaillée pour l'intégration.</p>
                    <Link href="/docs" className="btn btn-outline-primary w-100">
                      Voir la documentation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
