import React from "react";
import Image from "next/image";

export default function PaymentLinksProcess() {
  const paymentLinkSteps = [
    {
      icon: "/assets/images/common/icons/plus-circle.svg",
      title: "1. Créez votre lien",
      description: "Configurez le montant, la description et les options de paiement"
    },
    {
      icon: "/assets/images/common/icons/share.svg", 
      title: "2. Partagez le lien",
      description: "Envoyez le lien par email, SMS ou partagez-le sur les réseaux sociaux"
    },
    {
      icon: "/assets/images/common/icons/credit-card.svg",
      title: "3. Client paie",
      description: "Votre client clique sur le lien et paie avec son moyen préféré"
    },
    {
      icon: "/assets/images/common/icons/check-circle.svg",
      title: "4. Confirmation",
      description: "Recevez une notification et les fonds sont reversés automatiquement"
    }
  ];

  return (
    <section id="payment_links_process" className="payment-links-process-section panel overflow-hidden">
      <div className="payment-links-process-outer">
        <div className="payment-links-process-content">
          <div className="container xl:max-w-xl">
            <div className="payment-links-process-inner vstack gap-6 lg:gap-8 xl:gap-10">
              <div className="payment-links-process-header panel text-center">
                <div className="vstack gap-4">
                  <div className="payment-links-process-tagline panel">
                    <span className="badge badge-primary fs-7 fw-bold px-3 py-2 rounded-pill">
                      Comment ça marche
                    </span>
                  </div>
                  <div className="payment-links-process-title panel">
                    <h2 className="display-5 fw-bold text-dark dark:text-white mb-4">
                      Créez et partagez en 4 étapes simples
                    </h2>
                  </div>
                  <div className="payment-links-process-description panel">
                    <p className="fs-5 text-gray-600 dark:text-gray-300">
                      GomboPay Liens de Paiement simplifie la collecte de paiements sans intégration technique
                    </p>
                  </div>
                </div>
              </div>

              <div className="payment-links-process-main panel">
                <div className="row g-4 lg:g-6">
                  {paymentLinkSteps.map((step, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-3">
                      <div className="payment-links-process-card panel h-100 p-4 lg:p-6 bg-white dark:bg-tertiary-700 rounded-3 border border-light dark:border-tertiary-600 text-center">
                        <div className="payment-links-process-card-icon panel mb-4">
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
                        <div className="payment-links-process-card-content panel vstack gap-3">
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
