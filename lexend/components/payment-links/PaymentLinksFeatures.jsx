import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PaymentLinksFeatures() {
  const paymentLinkFeatures = [
    {
      title: "Création Rapide",
      description: "Générez des liens de paiement en quelques clics avec notre interface intuitive",
      image: "/assets/images/template/create-link.png",
      link: "/dashboard",
      linkText: "Créer maintenant"
    },
    {
      title: "Personnalisation Avancée",
      description: "Personnalisez vos liens avec votre logo, couleurs et messages personnalisés",
      image: "/assets/images/template/customize-link.png", 
      link: "/customization",
      linkText: "Personnaliser"
    },
    {
      title: "Suivi en Temps Réel",
      description: "Suivez les clics, les paiements et les conversions de vos liens en temps réel",
      image: "/assets/images/template/analytics-link.png",
      link: "/analytics",
      linkText: "Voir les stats"
    },
    {
      title: "Multi-Devises",
      description: "Acceptez les paiements en FCFA, EUR, USD et autres devises africaines",
      image: "/assets/images/template/multi-currency.png",
      link: "/currencies",
      linkText: "Voir les devises"
    }
  ];

  return (
    <section id="payment_links_features" className="payment-links-features-section panel overflow-hidden">
      <div className="payment-links-features-outer">
        <div className="payment-links-features-content">
          <div className="container xl:max-w-xl">
            <div className="payment-links-features-inner vstack gap-6 lg:gap-8 xl:gap-10">
              <div className="payment-links-features-header panel text-center">
                <div className="vstack gap-4">
                  <div className="payment-links-features-tagline panel">
                    <span className="badge badge-primary fs-7 fw-bold px-3 py-2 rounded-pill">
                      Fonctionnalités
                    </span>
                  </div>
                  <div className="payment-links-features-title panel">
                    <h2 className="display-5 fw-bold text-dark dark:text-white mb-4">
                      Tout ce dont vous avez besoin pour vos liens
                    </h2>
                  </div>
                  <div className="payment-links-features-description panel">
                    <p className="fs-5 text-gray-600 dark:text-gray-300">
                      Des outils puissants pour créer, personnaliser et optimiser vos liens de paiement
                    </p>
                  </div>
                </div>
              </div>

              <div className="payment-links-features-main panel">
                <div className="row g-6 lg:g-8">
                  {paymentLinkFeatures.map((feature, index) => (
                    <div key={index} className="col-12 col-lg-6">
                      <div className="payment-links-feature-card panel h-100 p-6 lg:p-8 bg-white dark:bg-tertiary-700 rounded-3 border border-light dark:border-tertiary-600">
                        <div className="row align-items-center g-4">
                          <div className="col-12 col-md-6">
                            <div className="payment-links-feature-content panel vstack gap-4">
                              <h3 className="h4 fw-bold text-dark dark:text-white">
                                {feature.title}
                              </h3>
                              <p className="fs-6 text-gray-600 dark:text-gray-300">
                                {feature.description}
                              </p>
                              <div className="payment-links-feature-action panel">
                                <Link
                                  href={feature.link}
                                  className="btn btn-primary rounded-pill"
                                >
                                  {feature.linkText}
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="payment-links-feature-visual panel">
                              <Image
                                src={feature.image}
                                alt={feature.title}
                                width={400}
                                height={250}
                                className="img-fluid rounded-3 shadow-sm"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="payment-links-features-cta panel">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8">
                    <div className="panel p-6 lg:p-8 bg-primary rounded-3 text-center text-white">
                      <div className="vstack gap-4">
                        <h3 className="h3 fw-bold m-0">
                          Prêt à créer votre premier lien ?
                        </h3>
                        <p className="fs-5 mb-0">
                          Rejoignez des milliers d'entreprises qui utilisent GomboPay Liens de Paiement
                        </p>
                        <div className="hstack gap-4 justify-content-center flex-wrap">
                          <Link
                            href="/dashboard"
                            className="btn btn-lg btn-white text-primary rounded-pill"
                          >
                            Commencer gratuitement
                          </Link>
                          <Link
                            href="/demo"
                            className="btn btn-lg btn-outline-white rounded-pill"
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
