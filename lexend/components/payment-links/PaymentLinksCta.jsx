import React from "react";
import Link from "next/link";

export default function PaymentLinksCta() {
  return (
    <section id="payment_links_cta" className="payment-links-cta-section panel overflow-hidden">
      <div className="payment-links-cta-outer">
        <div className="payment-links-cta-content">
          <div className="container xl:max-w-xl">
            <div className="payment-links-cta-inner">
              <div className="payment-links-cta-main panel p-8 lg:p-12 bg-primary rounded-3 text-center text-white">
                <div className="vstack gap-6 lg:gap-8">
                  <div className="payment-links-cta-header panel">
                    <h2 className="display-4 fw-bold m-0 mb-4">
                      Prêt à créer votre premier lien de paiement ?
                    </h2>
                    <p className="fs-5 mb-0">
                      Rejoignez des milliers d'entreprises qui utilisent GomboPay Liens de Paiement pour simplifier leurs encaissements
                    </p>
                  </div>
                  
                  <div className="payment-links-cta-actions panel">
                    <div className="hstack gap-4 justify-content-center flex-wrap">
                      <Link
                        href="/dashboard"
                        className="btn btn-lg btn-white text-primary rounded-pill px-6"
                      >
                        Créer un lien gratuitement
                      </Link>
                      <Link
                        href="/contact"
                        className="btn btn-lg btn-outline-white rounded-pill px-6"
                      >
                        Parler à un expert
                      </Link>
                    </div>
                  </div>

                  <div className="payment-links-cta-features panel">
                    <div className="row g-4 justify-content-center">
                      <div className="col-12 col-md-4">
                        <div className="d-flex align-items-center gap-3">
                          <i className="icon icon-2 unicon-shield-check text-white"></i>
                          <span className="fs-6 fw-semibold">Liens sécurisés</span>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="d-flex align-items-center gap-3">
                          <i className="icon icon-2 unicon-clock text-white"></i>
                          <span className="fs-6 fw-semibold">Création rapide</span>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="d-flex align-items-center gap-3">
                          <i className="icon icon-2 unicon-mobile text-white"></i>
                          <span className="fs-6 fw-semibold">Mobile friendly</span>
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
