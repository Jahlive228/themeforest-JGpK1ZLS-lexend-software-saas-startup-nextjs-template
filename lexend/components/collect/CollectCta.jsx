import React from "react";
import Link from "next/link";

export default function CollectCta() {
  return (
    <section id="collect_cta" className="collect-cta-section panel overflow-hidden">
      <div className="collect-cta-outer">
        <div className="collect-cta-content">
          <div className="container xl:max-w-xl">
            <div className="collect-cta-inner">
              <div className="collect-cta-main panel p-8 lg:p-12 bg-primary rounded-3 text-center text-white">
                <div className="vstack gap-6 lg:gap-8">
                  <div className="collect-cta-header panel">
                    <h2 className="display-4 fw-bold m-0 mb-4">
                      Prêt à commencer avec GomboPay Collect ?
                    </h2>
                    <p className="fs-5 mb-0">
                      Rejoignez des milliers d'entreprises qui font confiance à GomboPay pour leurs paiements en ligne
                    </p>
                  </div>
                  
                  <div className="collect-cta-actions panel">
                    <div className="hstack gap-4 justify-content-center flex-wrap">
                      <Link
                        href="/signup"
                        className="btn btn-lg btn-white text-primary rounded-pill px-6"
                      >
                        Commencer gratuitement
                      </Link>
                      <Link
                        href="/contact"
                        className="btn btn-lg btn-outline-white rounded-pill px-6"
                      >
                        Parler à un expert
                      </Link>
                    </div>
                  </div>

                  <div className="collect-cta-features panel">
                    <div className="row g-4 justify-content-center">
                      <div className="col-12 col-md-4">
                        <div className="d-flex align-items-center gap-3">
                          <i className="icon icon-2 unicon-shield-check text-white"></i>
                          <span className="fs-6 fw-semibold">Paiements sécurisés</span>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="d-flex align-items-center gap-3">
                          <i className="icon icon-2 unicon-clock text-white"></i>
                          <span className="fs-6 fw-semibold">Intégration rapide</span>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="d-flex align-items-center gap-3">
                          <i className="icon icon-2 unicon-headphones text-white"></i>
                          <span className="fs-6 fw-semibold">Support 24/7</span>
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
