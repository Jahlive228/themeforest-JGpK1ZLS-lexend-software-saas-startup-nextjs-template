import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CollectFeatures() {
  const collectFeatures = [
    {
      title: "API RESTful",
      description: "Intégration simple et rapide avec nos API bien documentées",
      image: "/assets/images/template/api-docs.png",
      link: "/docs",
      linkText: "Documentation"
    },
    {
      title: "SDK & Plugins",
      description: "Bibliothèques prêtes à l'emploi pour les plateformes populaires",
      image: "/assets/images/template/sdk-plugins.png", 
      link: "/sdk",
      linkText: "Télécharger"
    },
    {
      title: "Dashboard Analytique",
      description: "Suivez vos transactions en temps réel avec des rapports détaillés",
      image: "/assets/images/template/dashboard-analytics.png",
      link: "/dashboard",
      linkText: "Voir le dashboard"
    },
    {
      title: "Sécurité Avancée",
      description: "Protection PCI DSS et cryptage SSL pour vos transactions",
      image: "/assets/images/template/security.png",
      link: "/security",
      linkText: "En savoir plus"
    }
  ];

  return (
    <section id="collect_features" className="collect-features-section panel overflow-hidden">
      <div className="collect-features-outer">
        <div className="collect-features-content">
          <div className="container xl:max-w-xl">
            <div className="collect-features-inner vstack gap-6 lg:gap-8 xl:gap-10">
              <div className="collect-features-header panel text-center">
                <div className="vstack gap-4">
                  <div className="collect-features-tagline panel">
                    <span className="badge badge-primary fs-7 fw-bold px-3 py-2 rounded-pill">
                      Fonctionnalités
                    </span>
                  </div>
                  <div className="collect-features-title panel">
                    <h2 className="display-5 fw-bold text-dark dark:text-white mb-4">
                      Tout ce dont vous avez besoin pour collecter
                    </h2>
                  </div>
                  <div className="collect-features-description panel">
                    <p className="fs-5 text-gray-600 dark:text-gray-300">
                      Des outils puissants et faciles à utiliser pour optimiser vos encaissements
                    </p>
                  </div>
                </div>
              </div>

              <div className="collect-features-main panel">
                <div className="row g-6 lg:g-8">
                  {collectFeatures.map((feature, index) => (
                    <div key={index} className="col-12 col-lg-6">
                      <div className="collect-feature-card panel h-100 p-6 lg:p-8 bg-white dark:bg-tertiary-700 rounded-3 border border-light dark:border-tertiary-600">
                        <div className="row align-items-center g-4">
                          <div className="col-12 col-md-6">
                            <div className="collect-feature-content panel vstack gap-4">
                              <h3 className="h4 fw-bold text-dark dark:text-white">
                                {feature.title}
                              </h3>
                              <p className="fs-6 text-gray-600 dark:text-gray-300">
                                {feature.description}
                              </p>
                              <div className="collect-feature-action panel">
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
                            <div className="collect-feature-visual panel">
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

              <div className="collect-features-cta panel">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8">
                    <div className="panel p-6 lg:p-8 bg-primary rounded-3 text-center text-white">
                      <div className="vstack gap-4">
                        <h3 className="h3 fw-bold m-0">
                          Prêt à commencer ?
                        </h3>
                        <p className="fs-5 mb-0">
                          Rejoignez des milliers d'entreprises qui font confiance à GomboPay
                        </p>
                        <div className="hstack gap-4 justify-content-center flex-wrap">
                          <Link
                            href="/contact"
                            className="btn btn-lg btn-white text-primary rounded-pill"
                          >
                            Contactez-nous
                          </Link>
                          <Link
                            href="/docs"
                            className="btn btn-lg btn-outline-white rounded-pill"
                          >
                            Documentation
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
