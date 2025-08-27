import React from "react";
import Link from "next/link";

export default function PaymentLinksPricing() {
  const paymentLinkPricingPlans = [
    {
      title: "Gratuit",
      description: "Parfait pour tester et commencer",
      commission: "2,5%",
      features: [
        "Jusqu'à 10 liens/mois",
        "Liens de base",
        "Notifications email",
        "Support communautaire",
        "Paiements sécurisés"
      ],
      buttonText: "Commencer gratuitement",
      buttonClass: "btn-outline-primary",
      highlight: false
    },
    {
      title: "Pro",
      description: "Idéal pour les entreprises actives",
      commission: "2%",
      features: [
        "Liens illimités",
        "Personnalisation avancée",
        "Analytics détaillées",
        "Support prioritaire",
        "Liens récurrents",
        "Intégrations API",
        "Rapports personnalisés"
      ],
      buttonText: "Choisir Pro",
      buttonClass: "btn-primary",
      highlight: true
    },
    {
      title: "Business",
      description: "Solutions sur mesure pour grandes entreprises",
      commission: "Sur mesure",
      features: [
        "Liens illimités",
        "Personnalisation complète",
        "Support dédié",
        "Gestionnaire de compte",
        "API personnalisée",
        "Branding personnalisé",
        "SLA garanti"
      ],
      buttonText: "Contactez-nous",
      buttonClass: "btn-outline-primary",
      highlight: false
    }
  ];

  return (
    <section id="payment_links_pricing" className="payment-links-pricing-section panel overflow-hidden">
      <div className="payment-links-pricing-outer">
        <div className="payment-links-pricing-content">
          <div className="container xl:max-w-xl">
            <div className="payment-links-pricing-inner vstack gap-6 lg:gap-8 xl:gap-10">
              <div className="payment-links-pricing-header panel text-center">
                <div className="vstack gap-4">
                  <div className="payment-links-pricing-tagline panel">
                    <span className="badge badge-primary fs-7 fw-bold px-3 py-2 rounded-pill">
                      Tarification
                    </span>
                  </div>
                  <div className="payment-links-pricing-title panel">
                    <h2 className="display-5 fw-bold text-dark dark:text-white mb-4">
                      Des tarifs adaptés à vos besoins
                    </h2>
                  </div>
                  <div className="payment-links-pricing-description panel">
                    <p className="fs-5 text-gray-600 dark:text-gray-300">
                      Commission par transaction, sans frais cachés ni engagement
                    </p>
                  </div>
                </div>
              </div>

              <div className="payment-links-pricing-main panel">
                <div className="row g-4 lg:g-6 justify-content-center">
                  {paymentLinkPricingPlans.map((plan, index) => (
                    <div key={index} className="col-12 col-lg-4">
                      <div className={`payment-links-pricing-card panel h-100 p-6 lg:p-8 bg-white dark:bg-tertiary-700 rounded-3 border ${
                        plan.highlight 
                          ? 'border-primary shadow-lg' 
                          : 'border-light dark:border-tertiary-600'
                      }`}>
                        {plan.highlight && (
                          <div className="text-center mb-4">
                            <span className="badge badge-primary fs-7 fw-bold px-3 py-2 rounded-pill">
                              Recommandé
                            </span>
                          </div>
                        )}
                        <div className="payment-links-pricing-card-header panel text-center mb-6">
                          <h3 className="h4 fw-bold text-dark dark:text-white mb-2">
                            {plan.title}
                          </h3>
                          <p className="fs-6 text-gray-600 dark:text-gray-300 mb-4">
                            {plan.description}
                          </p>
                          <div className="payment-links-pricing-commission panel">
                            <div className="d-flex align-items-baseline justify-content-center gap-2">
                              <span className="display-4 fw-bold text-primary">
                                {plan.commission}
                              </span>
                              {plan.commission !== "Sur mesure" && (
                                <span className="fs-6 text-gray-600 dark:text-gray-300">
                                  par transaction
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="payment-links-pricing-card-features panel mb-6">
                          <ul className="nav-y gap-3">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="d-flex align-items-center gap-3">
                                <i className="icon icon-2 unicon-check text-success"></i>
                                <span className="fs-6 text-gray-600 dark:text-gray-300">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="payment-links-pricing-card-action panel">
                          <Link
                            href={plan.title === "Business" ? "/contact" : "/signup"}
                            className={`btn btn-lg w-100 rounded-pill ${plan.buttonClass}`}
                          >
                            {plan.buttonText}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="payment-links-pricing-footer panel">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8">
                    <div className="panel p-6 bg-light dark:bg-tertiary-600 rounded-3 text-center">
                      <div className="hstack gap-6 justify-content-center flex-wrap">
                        <div className="d-flex align-items-center gap-2">
                          <i className="icon icon-2 unicon-shield-check text-success"></i>
                          <span className="fs-7 fw-semibold">Liens sécurisés</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <i className="icon icon-2 unicon-clock text-primary"></i>
                          <span className="fs-7 fw-semibold">Création rapide</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <i className="icon icon-2 unicon-mobile text-info"></i>
                          <span className="fs-7 fw-semibold">Mobile friendly</span>
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
