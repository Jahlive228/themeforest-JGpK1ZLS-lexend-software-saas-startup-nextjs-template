import React from "react";
import Link from "next/link";
import Accordion from "@/components/common/Accordion";
import { paymentLinksFaq } from "@/data/payment-links-faq";

export default function PaymentLinksFaqs() {
  return (
    <section id="payment_links_faqs" className="payment-links-faqs-section panel overflow-hidden">
      <div className="payment-links-faqs-outer">
        <div className="payment-links-faqs-content">
          <div className="container xl:max-w-xl">
            <div className="payment-links-faqs-inner vstack gap-6 lg:gap-8 xl:gap-10">
              <div className="payment-links-faqs-header panel text-center">
                <div className="vstack gap-4">
                  <div className="payment-links-faqs-tagline panel">
                    <span className="badge badge-primary fs-7 fw-bold px-3 py-2 rounded-pill">
                      FAQ
                    </span>
                  </div>
                  <div className="payment-links-faqs-title panel">
                    <h2 className="display-5 fw-bold text-dark dark:text-white mb-4">
                      Questions fréquentes
                    </h2>
                  </div>
                  <div className="payment-links-faqs-description panel">
                    <p className="fs-5 text-gray-600 dark:text-gray-300">
                      Tout ce que vous devez savoir sur GomboPay Liens de Paiement
                    </p>
                  </div>
                </div>
              </div>

              <div className="payment-links-faqs-main panel">
                <div className="row g-6 lg:g-8">
                  <div className="col-12 col-lg-8">
                    <div className="payment-links-faqs-accordion panel">
                      <Accordion data={paymentLinksFaq} />
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="payment-links-faqs-sidebar panel vstack gap-4">
                      <div className="payment-links-faqs-help panel p-6 bg-primary rounded-3 text-white">
                        <div className="vstack gap-4">
                          <h4 className="h5 fw-bold m-0">
                            Besoin d'aide ?
                          </h4>
                          <p className="fs-6 mb-0">
                            Notre équipe est là pour vous accompagner dans la création de vos liens
                          </p>
                          <Link
                            href="/contact"
                            className="btn btn-white text-primary rounded-pill"
                          >
                            Contactez-nous
                          </Link>
                        </div>
                      </div>
                      <div className="payment-links-faqs-demo panel p-6 bg-light dark:bg-tertiary-600 rounded-3">
                        <div className="vstack gap-4">
                          <h4 className="h5 fw-bold text-dark dark:text-white m-0">
                            Voir en action
                          </h4>
                          <p className="fs-6 text-gray-600 dark:text-gray-300 mb-0">
                            Découvrez comment créer et utiliser vos premiers liens de paiement
                          </p>
                          <Link
                            href="/demo"
                            className="btn btn-primary rounded-pill"
                          >
                            Voir la démo
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
