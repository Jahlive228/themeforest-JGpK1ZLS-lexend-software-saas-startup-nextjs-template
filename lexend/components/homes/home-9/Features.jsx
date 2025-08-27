import { features10 } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Features() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 md:py-8 xl:py-10 bg-secondary dark:bg-tertiary-700 dark:text-white dark:text-opacity-70 mx-2 border border-secondary dark:border-white dark:border-opacity-15 rounded-1-5 lg:rounded-2">
        <div className="position-absolute top-0 start-50 translate-middle w-1000px h-500px bg-white rounded-circle blur-10 blend-overlay d-none dark:d-block" />
        <div className="position-absolute top-100 start-50 translate-middle w-1000px h-500px bg-white rounded-circle blur-10 blend-overlay d-none dark:d-block" />
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                Nos Solutions
              </span>
              <h2 className="h3 lg:h1 m-0">
                Une plateforme complète pour{" "}
                <span className="text-tertiary dark:text-primary">
                  tous vos besoins de paiement
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8">
                Des solutions adaptées pour chaque type d'entreprise en Afrique
              </p>
            </div>
            <div
              className="row child-cols-12 md:child-cols-6 col-match g-2 lg:g-4"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div>
                <div className="panel vstack lg:hstack gap-2 p-2 overflow-hidden bg-secondary-300 text-gray-900 dark:bg-tertiary-700 dark:bg-gradient-45 from-tertiary to-transparent dark:text-white rounded-2 lg:rounded-3 border border-dark dark:border-white dark:border-opacity-15">
                  <div className="panel lg:max-w-300px lg:min-w-300px">
                    <Image
                      className="rounded-1-5 border border-dark dark:border-white dark:border-opacity-15"
                      alt="Collect"
                      src="/assets/images/template/payment-collect.jpg"
                      width={680}
                      height={680}
                    />
                  </div>
                  <div className="panel vstack items-start gap-2 p-2">
                    <h4 className="h4 m-0 text-inherit">Collect</h4>
                    <p className="m-0">Encaissez des paiements en ligne via Mobile Money, cartes bancaires et wallets en toute sécurité.</p>
                    <Link
                      href="/collect"
                      className="btn btn-sm btn-primary border border-dark px-2 mt-2"
                    >
                      <span>En savoir plus</span>
                      <i className="icon icon-narrow unicon-arrow-up-right fw-bold rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div>
                <div className="panel vstack lg:hstack gap-2 p-2 overflow-hidden bg-secondary-300 text-gray-900 dark:bg-tertiary-700 dark:bg-gradient-45 from-tertiary to-transparent dark:text-white rounded-2 lg:rounded-3 border border-dark dark:border-white dark:border-opacity-15">
                  <div className="panel lg:max-w-300px lg:min-w-300px">
                    <Image
                      className="rounded-1-5 border border-dark dark:border-white dark:border-opacity-15"
                      alt="Mass Payout"
                      src="/assets/images/template/mass-payout.jpg"
                      width={680}
                      height={680}
                    />
                  </div>
                  <div className="panel vstack items-start gap-2 p-2">
                    <h4 className="h4 m-0 text-inherit">Mass Payout</h4>
                    <p className="m-0">Effectuez des transferts groupés vers des comptes Mobile Money et wallets en quelques clics.</p>
                    <Link
                      href="/mass-payout"
                      className="btn btn-sm btn-primary border border-dark px-2 mt-2"
                    >
                      <span>En savoir plus</span>
                      <i className="icon icon-narrow unicon-arrow-up-right fw-bold rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </div> */}

              <div>
                <div className="panel vstack lg:hstack gap-2 p-2 overflow-hidden bg-secondary-300 text-gray-900 dark:bg-tertiary-700 dark:bg-gradient-45 from-tertiary to-transparent dark:text-white rounded-2 lg:rounded-3 border border-dark dark:border-white dark:border-opacity-15">
                  <div className="panel lg:max-w-300px lg:min-w-300px">
                    <Image
                      className="rounded-1-5 border border-dark dark:border-white dark:border-opacity-15"
                      alt="Payment Links"
                      src="/assets/images/template/payment-links.jpg"
                      width={680}
                      height={680}
                    />
                  </div>
                  <div className="panel vstack items-start gap-2 p-2">
                    <h4 className="h4 m-0 text-inherit">Liens de Paiement</h4>
                    <p className="m-0">Créez des liens de paiement uniques et sécurisés pour vos clients, sans compétences techniques.</p>
                    <Link
                      href="/payment-links"
                      className="btn btn-sm btn-primary border border-dark px-2 mt-2"
                    >
                      <span>En savoir plus</span>
                      <i className="icon icon-narrow unicon-arrow-up-right fw-bold rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                  <div className="panel vstack lg:hstack gap-2 p-2 overflow-hidden bg-secondary-300 text-gray-900 dark:bg-tertiary-700 dark:bg-gradient-45 from-tertiary to-transparent dark:text-white rounded-2 lg:rounded-3 border border-dark dark:border-white dark:border-opacity-15">
                    <div className="panel lg:max-w-300px lg:min-w-300px">
                      <Image
                        className="rounded-1-5 border border-dark dark:border-white dark:border-opacity-15"
                      alt="API Integration"
                      src="/assets/images/template/api-integration.jpg"
                        width={680}
                        height={680}
                      />
                    </div>
                    <div className="panel vstack items-start gap-2 p-2">
                    <h4 className="h4 m-0 text-inherit">API Direct</h4>
                    <p className="m-0">Intégrez nos solutions de paiement directement dans votre application avec nos API RESTful.</p>
                    <Link
                      href="/api"
                        className="btn btn-sm btn-primary border border-dark px-2 mt-2"
                      >
                      <span>Documentation</span>
                        <i className="icon icon-narrow unicon-arrow-up-right fw-bold rtl:rotate-180" />
                    </Link>
                    </div>
                  </div>
                </div>
            </div>
            <div
              className="pre-cta vstack items-center gap-1 max-w-400px lg:max-w-750px mx-auto text-center mt-6 xl:mt-10"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="vstack gap-4">
                <div className="hstack justify-center gap-4">
                <Link
                    href="/contact"
                  className="btn btn-md xl:btn-lg btn-primary border border-dark dark:border-white dark:border-opacity-15 px-3 lg:px-5 w-auto rounded-pill"
                >
                    <span>Contactez-nous</span>
                  </Link>
                  <Link
                    href="/docs"
                    className="btn btn-md xl:btn-lg btn-outline-primary border border-dark dark:border-white dark:border-opacity-15 px-3 lg:px-5 w-auto rounded-pill"
                  >
                    <span>Documentation</span>
                </Link>
              </div>
                <div className="hstack justify-center gap-4 fs-6 text-gray-900 dark:text-white">
                  <div className="hstack gap-2">
                    <i className="icon unicon-shield-check fs-4 text-success"></i>
                    <span>Paiements sécurisés</span>
                    </div>
                  <div className="hstack gap-2">
                    <i className="icon unicon-wallet fs-4 text-primary"></i>
                    <span>Reversement sous 72h</span>
                  </div>
                  <div className="hstack gap-2">
                    <i className="icon unicon-percentage fs-4 text-warning"></i>
                    <span>Commission compétitive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
