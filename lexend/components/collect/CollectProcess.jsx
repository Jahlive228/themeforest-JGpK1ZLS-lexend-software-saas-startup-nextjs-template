import React from "react";
import Image from "next/image";

export default function CollectProcess() {
  const collectSteps = [
    {
      icon: "/assets/images/common/icons/user-plus.svg",
      title: "1. Créez votre compte",
      description: "Inscrivez-vous en quelques minutes et configurez votre profil marchand"
    },
    {
      icon: "/assets/images/common/icons/settings.svg", 
      title: "2. Configurez votre intégration",
      description: "Choisissez entre API, SDK ou plugins selon vos besoins techniques"
    },
    {
      icon: "/assets/images/common/icons/credit-card.svg",
      title: "3. Acceptez les paiements",
      description: "Vos clients paient via Mobile Money, cartes bancaires ou wallets"
    },
    {
      icon: "/assets/images/common/icons/bank.svg",
      title: "4. Recevez vos fonds",
      description: "Les fonds sont reversés sur votre compte bancaire sous 72h"
    }
  ];

  return (
    <section id="collect_process" className="collect-process-section panel overflow-hidden">
      <div className="collect-process-outer">
        <div className="collect-process-content">
          <div className="container xl:max-w-xl">
            <div className="collect-process-inner vstack gap-6 lg:gap-8 xl:gap-10">
              <div className="collect-process-header panel text-center">
                <div className="vstack gap-4">
                  <div className="collect-process-tagline panel">
                    <span className="badge badge-primary fs-7 fw-bold px-3 py-2 rounded-pill">
                      Comment ça marche
                    </span>
                  </div>
                  <div className="collect-process-title panel">
                    <h2 className="display-5 fw-bold text-dark dark:text-white mb-4">
                      Commencez à collecter en 4 étapes simples
                    </h2>
                  </div>
                  <div className="collect-process-description panel">
                    <p className="fs-5 text-gray-600 dark:text-gray-300">
                      GomboPay Collect simplifie l'acceptation des paiements en ligne pour votre entreprise
                    </p>
                  </div>
                </div>
              </div>

              <div className="collect-process-main panel">
                <div className="row g-4 lg:g-6">
                  {collectSteps.map((step, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-3">
                      <div className="collect-process-card panel h-100 p-4 lg:p-6 bg-white dark:bg-tertiary-700 rounded-3 border border-light dark:border-tertiary-600 text-center">
                        <div className="collect-process-card-icon panel mb-4">
                          <div className="d-inline-flex align-items-center justify-content-center w-80px h-80px bg-primary bg-opacity-10 rounded-3">
                            <Image
                              src={step.icon}
                              alt={step.title}
                              width={40}
                              height={40}
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="collect-process-card-content panel vstack gap-3">
                          <h4 className="h5 fw-bold text-dark dark:text-white m-0">
                            {step.title}
                          </h4>
                          <p className="fs-6 text-gray-600 dark:text-gray-300 m-0">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
