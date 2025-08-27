import Image from "next/image";
import React from "react";

export default function Process() {
  const processSteps = [
    {
      icon: "/assets/images/common/icons/register.png",
      title: "1. Créez votre compte",
      description: "Inscrivez-vous gratuitement et complétez votre profil marchand en quelques minutes"
    },
    {
      icon: "/assets/images/common/icons/integration.png",
      title: "2. Choisissez votre intégration",
      description: "API, plugins e-commerce ou liens de paiement - sélectionnez la solution qui vous convient"
    },
    {
      icon: "/assets/images/common/icons/payment.png",
      title: "3. Acceptez les paiements",
      description: "Commencez à recevoir des paiements via Mobile Money, cartes bancaires et wallets"
    },
    {
      icon: "/assets/images/common/icons/receive.png",
      title: "4. Recevez vos fonds",
      description: "Vos fonds sont reversés automatiquement sur votre compte bancaire sous demande"
    }
  ];

  return (
    <div id="how_it_works" className="how-it-works section panel">
      <div className="section-outer panel py-6 lg:py-8">
        <div className="container">
          <div className="section-inner panel">
            <div className="text-center mb-6 lg:mb-8">
              <span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                Comment ça marche
              </span>
              <h2 className="h3 lg:h2 mt-2 mb-3">
                Commencez à accepter les paiements en{" "}
                <span className="text-tertiary dark:text-primary">4 étapes simples</span>
              </h2>
              <p className="fs-5 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                GomboPay simplifie l'acceptation des paiements en ligne pour votre entreprise
              </p>
            </div>
            
            <div
              className="row child-cols-12 md:child-cols-6 lg:child-cols-3 g-4"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
            >
              {processSteps.map((step, index) => (
                <div key={index}>
                  <div className="vstack items-center text-center gap-3 p-4 h-100 border border-dark dark:border-white dark:border-opacity-15 text-dark dark:text-white dark:bg-gradient-45 from-tertiary-600 to-transparent rounded-2">
                    <span className="icon mb-2 w-64px h-64px cstack bg-primary border border-dark dark:border-white dark:border-opacity-15 rounded-circle">
                      <Image
                        className="w-32px"
                        alt={step.title}
                        src={step.icon}
                        width={32}
                        height={32}
                      />
                    </span>
                    <h4 className="h5 mb-2">{step.title}</h4>
                    <p className="fs-6 text-gray-600 dark:text-gray-300 m-0">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
