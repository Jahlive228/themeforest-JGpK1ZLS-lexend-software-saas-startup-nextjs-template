import React from "react";
import Link from "next/link";
import Image from "next/image";
import TyperComponent from "@/components/common/TyperComponent";

export default function CollectHero() {
  return (
    <section id="hero" className="hero-section panel overflow-hidden">
      <div className="hero-outer">
        <div className="hero-content">
          <div className="container xl:max-w-xl">
            <div className="hero-inner vstack gap-6 lg:gap-8 xl:gap-10">
              <div className="hero-main panel">
                <div className="row align-items-center g-6 lg:g-8 xl:g-10">
                  <div className="col-12 lg:col-6">
                    <div className="hero-text panel vstack gap-4 lg:gap-6">
                      <div className="hero-tagline panel">
                        <span className="badge badge-primary fs-7 fw-bold px-3 py-2 rounded-pill">
                          Solution de Collecte
                        </span>
                      </div>
                      <div className="hero-title panel">
                        <h1 className="display-4 fw-bold text-dark dark:text-white mb-4">
                          Collectez vos paiements en ligne avec{" "}
                          <span className="text-primary">
                            <TyperComponent
                              strings={[
                                "Mobile Money",
                                "Cartes bancaires", 
                                "Wallets",
                                "QR Code"
                              ]}
                            />
                          </span>
                        </h1>
                      </div>
                      <div className="hero-description panel">
                        <p className="fs-5 text-gray-600 dark:text-gray-300 mb-6">
                          Simplifiez vos encaissements avec notre solution de collecte tout-en-un. 
                          Acceptez tous les moyens de paiement populaires en Afrique en une seule intégration.
                        </p>
                      </div>
                      <div className="hero-actions panel">
                        <div className="hstack gap-4 flex-wrap">
                          <Link
                            href="/contact"
                            className="btn btn-lg btn-primary rounded-pill"
                          >
                            Commencer maintenant
                          </Link>
                          <Link
                            href="/docs"
                            className="btn btn-lg btn-outline-primary rounded-pill"
                          >
                            Voir la documentation
                          </Link>
                        </div>
                      </div>
                      <div className="hero-trust panel">
                        <div className="hstack gap-6">
                          <div className="d-flex align-items-center gap-2">
                            <i className="icon icon-2 unicon-shield-check text-success"></i>
                            <span className="fs-7 fw-semibold">Paiements sécurisés</span>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <i className="icon icon-2 unicon-clock text-primary"></i>
                            <span className="fs-7 fw-semibold">Intégration rapide</span>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <i className="icon icon-2 unicon-headphones text-info"></i>
                            <span className="fs-7 fw-semibold">Support 24/7</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 lg:col-6">
                    <div className="hero-visual panel">
                      <div className="position-relative">
                        <Image
                          src="/assets/images/template/dashboard-1.png"
                          alt="GomboPay Collect Dashboard"
                          width={600}
                          height={400}
                          className="img-fluid rounded-3 shadow-lg"
                        />
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary bg-opacity-10 rounded-3"></div>
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
