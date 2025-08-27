"use client";
import Link from "next/link";
import React from "react";

export default function Pricing() {
  const pricingPlans = [
    {
      title: "Starter",
      description: "Pour les petites entreprises et les startups",
      commission: "2,5%",
      features: [
        "Paiements Mobile Money",
        "Paiements par Carte Bancaire",
        "Liens de paiement",
        "Dashboard de gestion",
        "Support par email",
        "Reversement sous 72h"
      ],
      buttonText: "Commencer gratuitement",
      buttonClass: "btn btn-lg btn-outline-primary w-100 rounded-pill",
      highlight: false
    },
    {
      title: "Business",
      description: "Pour les entreprises en croissance",
      commission: "2%",
      features: [
        "Tout du plan Starter",
        "API & plugins e-commerce",
        "Paiements récurrents",
        "Tableau de bord avancé",
        "Support prioritaire",
        "Reversement sous 48h"
      ],
      buttonText: "Contacter l'équipe commerciale",
      buttonClass: "btn btn-lg btn-primary w-100 rounded-pill",
      highlight: true
    },
    {
      title: "Enterprise",
      description: "Solutions sur mesure pour grandes entreprises",
      commission: "Sur mesure",
      features: [
        "Tout du plan Business",
        "Commission personnalisée",
        "API dédiée",
        "Support 24/7",
        "Account manager dédié",
        "Reversement personnalisé"
      ],
      buttonText: "Contacter l'équipe commerciale",
      buttonClass: "btn btn-lg btn-outline-primary w-100 rounded-pill",
      highlight: false
    }
  ];

  return (
    <div id="pricing" className="pricing section panel overflow-hidden">
      <div className="section-outer panel py-6 lg:py-8 xl:py-10 lg:mx-2 lg:rounded-2 bg-tertiary-50 dark:bg-tertiary-700 border border-tertiary-50 dark:border-white dark:border-opacity-15">
        <div className="position-absolute top-0 start-50 translate-middle w-1000px h-500px bg-white rounded-circle blur-10 blend-overlay d-none dark:d-block" />
        <div className="position-absolute top-100 start-50 translate-middle w-1000px h-500px bg-white rounded-circle blur-10 blend-overlay d-none dark:d-block" />
        <div className="container">
          <div className="section-inner panel">
            <div
              className="pricing-tables panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="section-header vstack items-center gap-2 lg:gap-3"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                  Tarification
                </span>
                <h2 className="h4 sm:h3 lg:h1 m-0 text-center max-w-650px mx-auto">
                  Des tarifs{" "}
                  <span className="text-tertiary dark:text-primary">
                    adaptés à votre activité
                  </span>
                </h2>
                <p className="fs-5 text-center text-gray-600 dark:text-gray-300">
                  Commission par transaction, sans frais cachés ni engagement
                </p>
              </div>
                <div className="panel w-100 max-w-5xl mx-auto">
                  <div className="row g-4">
                    {pricingPlans.map((plan, index) => (
                      <div key={index} className="col-12 md:col-4">
                        <div className={`pricing-box panel p-4 xl:p-5 vstack items-start rounded-2 border ${plan.highlight ? 'border-primary bg-primary bg-opacity-5' : 'border-dark dark:border-white dark:border-opacity-15'} text-dark dark:text-white dark:bg-gradient-45 from-tertiary-600 to-transparent h-100`}>
                          <div className="vstack items-start gap-2 w-100">
                            <div className="vstack items-start gap-1">
                              <span className={`pricing-box-title fs-7 fw-medium py-narrow px-2 ${plan.highlight ? 'bg-primary text-white' : 'bg-dark text-white dark:bg-primary dark:text-dark'} rounded-pill`}>
                                {plan.title}
                              </span>
                              <p className="pricing-box-desc fs-6 text-gray-600 dark:text-gray-300">
                                {plan.description}
                              </p>
                            </div>
                            <div className="pricing-box-price mt-2">
                              <div className="hstack gap-2 items-baseline">
                                <h3 className="price h2 fw-bold m-0 text-primary">
                                  {plan.commission}
                                </h3>
                                <span className="fs-6 text-gray-600">par transaction</span>
                              </div>
                            </div>
                          </div>
                          <hr className="w-100 my-4" />
                          <ul className="nav-y gap-3 fs-6 mb-4">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="hstack gap-2">
                                <i className="icon icon-narrow unicon-checkmark-circle text-success" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="pricing-box-cta vstack gap-2 justify-center text-center mt-auto w-100">
                            <Link
                              href={plan.highlight ? "/contact" : "/sign-up"}
                              className={plan.buttonClass}
                            >
                              {plan.buttonText}
                            </Link>
                            {!plan.highlight && (
                              <span className="fs-7 text-gray-600">
                                Pas de frais d'installation
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center mt-8">
                  <div className="hstack justify-center gap-2 fs-6 text-gray-600">
                    <i className="icon unicon-shield-check text-success"></i>
                    <span>Paiements sécurisés</span>
                    <span className="mx-2">•</span>
                    <i className="icon unicon-wallet text-primary"></i>
                    <span>Reversement rapide</span>
                    <span className="mx-2">•</span>
                    <i className="icon unicon-24-support text-info"></i>
                    <span>Support local</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
