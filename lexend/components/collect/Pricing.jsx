import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Parfait pour démarrer avec les paiements en ligne",
    features: [
      "Jusqu'à 100 transactions par mois",
      "Tableau de bord basique",
      "Support par email",
      "Intégration API simple",
      "Liens de paiement",
    ],
    cta: "Commencer gratuitement",
    popular: false,
  },
  {
    name: "Business",
    price: "29",
    description: "Pour les entreprises en croissance",
    features: [
      "Transactions illimitées",
      "Tableau de bord avancé",
      "Support prioritaire 24/7",
      "API complète",
      "Personnalisation avancée",
      "Rapports détaillés",
    ],
    cta: "Essai gratuit de 14 jours",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Sur mesure",
    description: "Solutions personnalisées pour grandes entreprises",
    features: [
      "Volume illimité",
      "Account manager dédié",
      "SLA garantis",
      "API personnalisée",
      "Intégration sur mesure",
      "Support technique dédié",
    ],
    cta: "Contactez-nous",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="container">
      <div className="text-center mb-15">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Des tarifs adaptés à vos besoins
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Choisissez le plan qui correspond le mieux à votre activité. 
          Pas de frais cachés, changez ou annulez à tout moment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`pricing-card relative p-8 rounded-2xl ${
              plan.popular
                ? "bg-primary text-white"
                : "bg-white dark:bg-gray-800"
            } shadow-xl`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-secondary text-white text-sm font-medium px-4 py-1 rounded-full">
                  Plus populaire
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold">
                  {typeof plan.price === "number" ? plan.price + "€" : plan.price}
                </span>
                {typeof plan.price === "number" && (
                  <span className="ml-2 text-sm opacity-80">/mois</span>
                )}
              </div>
              <p className={`${
                plan.popular ? "text-white/80" : "text-gray-600 dark:text-gray-300"
              }`}>
                {plan.description}
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={`${
                    plan.popular ? "text-white/80" : "text-gray-600 dark:text-gray-300"
                  }`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href={plan.name === "Enterprise" ? "/contact" : "/register"}
              className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                plan.popular
                  ? "bg-white text-primary hover:bg-gray-100"
                  : "bg-primary text-white hover:bg-primary-dark"
              }`}
            >
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
