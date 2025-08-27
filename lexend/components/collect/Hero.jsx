import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="container">
      <div className="row items-center">
        <div className="col-12 col-lg-6">
          <div className="hero-content">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
              Simplifiez vos <span className="text-primary">collectes de paiement</span>
            </h1>
            <p className="hero-text text-lg text-gray-600 dark:text-gray-300 mb-8">
              Avec GomboPay Collect, recevez vos paiements en toute simplicité et sécurité. 
              Une solution adaptée à tous vos besoins de collecte, que vous soyez une entreprise, 
              une association ou un particulier.
            </p>
            <div className="hero-btns flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-colors"
              >
                Commencer maintenant
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
                href="/demo"
                className="btn-outline inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Voir la démo
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 mt-10 lg:mt-0">
          <div className="hero-image relative">
            <Image
              src="/assets/images/collect-hero.svg"
              alt="GomboPay Collect Interface"
              width={600}
              height={500}
              className="w-full h-auto"
            />
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
