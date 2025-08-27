import { paymentPartners } from "@/data/payment-partners";
import Image from "next/image";
import React from "react";

export default function Brands() {
  return (
    <div
      id="payment_partners"
      className="payment-partners section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10 bg-tertiary-50 dark:bg-tertiary-700">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="brands panel vstack gap-6 lg:gap-8"
              data-anime="onview: -200; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
            >
              <div className="text-center">
                <span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                  Partenaires
                </span>
                <h2 className="h3 lg:h2 mt-2 mb-3">
                  Moyens de paiement{" "}
                  <span className="text-tertiary dark:text-primary">
                    disponibles
                  </span>
                </h2>
                <p className="fs-5 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Acceptez tous les moyens de paiement populaires en Afrique
                </p>
              </div>

              <div className="vstack gap-6">
                <div className="partner-section">
                  <h3 className="h5 mb-4 text-center">Mobile Money</h3>
                  <div className="row child-cols-6 md:child-cols-3 g-4 items-center justify-center">
                    {paymentPartners.mobileMoneyProviders.map((partner, index) => (
                      <div key={index}>
                        <div className="panel p-4 bg-white dark:bg-tertiary-600 rounded-2 border border-dark dark:border-white dark:border-opacity-15">
                          <Image
                            className="w-auto h-40px mx-auto"
                            alt={partner.name}
                            src={partner.src}
                            width={partner.width}
                            height={partner.height}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="partner-section">
                  <h3 className="h5 mb-4 text-center">Cartes Bancaires</h3>
                  <div className="row child-cols-6 md:child-cols-3 g-4 items-center justify-center">
                    {paymentPartners.cardProviders.map((partner, index) => (
                      <div key={index}>
                        <div className="panel p-4 bg-white dark:bg-tertiary-600 rounded-2 border border-dark dark:border-white dark:border-opacity-15">
                          <Image
                            className="w-auto h-40px mx-auto"
                            alt={partner.name}
                            src={partner.src}
                            width={partner.width}
                            height={partner.height}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="partner-section">
                  <h3 className="h5 mb-4 text-center">Banques Partenaires</h3>
                  <div className="row child-cols-6 md:child-cols-3 g-4 items-center justify-center">
                    {paymentPartners.banks.map((partner, index) => (
                      <div key={index}>
                        <div className="panel p-4 bg-white dark:bg-tertiary-600 rounded-2 border border-dark dark:border-white dark:border-opacity-15">
                          <Image
                            className="w-auto h-40px mx-auto"
                            alt={partner.name}
                            src={partner.src}
                            width={partner.width}
                            height={partner.height}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="partner-section">
                  <h3 className="h5 mb-4 text-center">Wallets Électroniques</h3>
                  <div className="row child-cols-6 md:child-cols-3 g-4 items-center justify-center">
                    {paymentPartners.wallets.map((partner, index) => (
                      <div key={index}>
                        <div className="panel p-4 bg-white dark:bg-tertiary-600 rounded-2 border border-dark dark:border-white dark:border-opacity-15">
                          <Image
                            className="w-auto h-40px mx-auto"
                            alt={partner.name}
                            src={partner.src}
                            width={partner.width}
                            height={partner.height}
                          />
                        </div>
                      </div>
                    ))}
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
