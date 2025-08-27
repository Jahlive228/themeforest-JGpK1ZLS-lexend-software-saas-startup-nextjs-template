import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg
        className="w-10 h-10 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 9L9 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 9L15 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Paiements sécurisés",
    description:
      "Vos transactions sont protégées par les dernières technologies de cryptage et de sécurité.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.4 15C19.1277 15.6171 19.0717 16.3081 19.2401 16.9584C19.4085 17.6087 19.7933 18.1869 20.3348 18.6065C20.8762 19.0262 21.5401 19.2608 22.2185 19.2754C22.8969 19.29 23.5711 19.0839 24.1309 18.6865L22 22H2L4.5 18.7C5.05987 19.0974 5.73414 19.3035 6.41254 19.2889C7.09094 19.2743 7.75479 19.0397 8.29624 18.62C8.83769 18.2004 9.22249 17.6222 9.39089 16.9719C9.55929 16.3216 9.50329 15.6306 9.23095 15.0135C8.95862 14.3964 8.49698 13.8927 7.91886 13.5749C7.34073 13.2571 6.67787 13.1416 6.02495 13.2461C5.37203 13.3506 4.76806 13.6695 4.30991 14.1552C3.85177 14.641 3.56491 15.2669 3.48975 15.934"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Intégration facile",
    description:
      "Intégrez notre solution en quelques minutes grâce à notre API simple et notre documentation détaillée.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Tableau de bord complet",
    description:
      "Suivez vos transactions en temps réel et accédez à des rapports détaillés depuis votre espace personnel.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 9L9.99998 16L6.99994 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Support réactif",
    description:
      "Notre équipe de support est disponible 24/7 pour vous accompagner et répondre à vos questions.",
  },
];

export default function Features() {
  return (
    <div className="container">
      <div className="text-center mb-15">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Des fonctionnalités conçues pour votre succès
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          GomboPay Collect vous offre tous les outils nécessaires pour gérer vos paiements 
          de manière efficace et professionnelle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="feature-card p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
