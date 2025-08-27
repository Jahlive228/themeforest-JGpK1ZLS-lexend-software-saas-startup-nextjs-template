import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <div className="container">
      <div className="text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Prêt à simplifier vos paiements ?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Rejoignez les milliers d'entreprises qui font confiance à GomboPay pour 
            leurs solutions de paiement. Commencez gratuitement dès aujourd'hui !
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="btn-white inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium bg-white text-primary hover:bg-gray-100 transition-colors"
            >
              Créer un compte gratuit
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="btn-outline-white inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium border-2 border-white text-white hover:bg-white hover:text-primary transition-colors"
            >
              Parler à un expert
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
