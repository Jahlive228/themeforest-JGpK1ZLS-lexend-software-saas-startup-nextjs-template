import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Créez votre compte",
    description:
      "Inscrivez-vous gratuitement et configurez votre compte GomboPay en quelques minutes.",
  },
  {
    number: "02",
    title: "Intégrez la solution",
    description:
      "Choisissez votre méthode d'intégration : API, liens de paiement ou QR codes.",
  },
  {
    number: "03",
    title: "Personnalisez vos collectes",
    description:
      "Définissez vos paramètres de paiement, montants, et options de collecte selon vos besoins.",
  },
  {
    number: "04",
    title: "Commencez à recevoir",
    description:
      "Recevez vos paiements instantanément et gérez-les depuis votre tableau de bord.",
  },
];

export default function HowItWorks() {
  return (
    <div className="container">
      <div className="text-center mb-15">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Comment ça marche ?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Démarrez avec GomboPay Collect en quelques étapes simples et commencez 
          à recevoir vos paiements immédiatement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Ligne de connexion entre les étapes */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 transform translate-y-4"></div>
            )}
            
            <div className="step-card relative z-10 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-4xl font-bold text-primary mr-3">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
