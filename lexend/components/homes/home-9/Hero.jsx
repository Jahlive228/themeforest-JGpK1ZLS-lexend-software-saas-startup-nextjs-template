import TyperComponent from "@/components/common/TyperComponent";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer py-6 lg:py-8 xl:py-10 min-h-700px">
        <div className="w-750px h-750px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed border-tertiary-100 dark:border-tertiary-600" />
        <div className="w-1000px h-1000px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed border-tertiary-100 dark:border-tertiary-600" />
        <div className="w-1280px h-1280px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed border-tertiary-100 dark:border-tertiary-600" />
        <div className="position-cover bg-gradient-to-b from-white dark:from-tertiary-700 via-transparent to-white dark:to-tertiary-800" />
        <div className="position-absolute top-0 start-50 translate-middle w-1000px h-500px bg-secondary-300 dark:bg-white rounded-circle blur-10 dark:blend-overlay" />
        <div className="container">
          <div className="section-inner panel">
            <div
              className="d-none xl:d-block"
              data-anime="targets: >*; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
            >
              <div
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "10%", right: "10.5%" }}
                data-anime="translateY: [0, 15]; easing: linear; loop: true; direction: alternate; delay: 50;"
              >
                <Image
                  className="p-2"
                  alt="payment-method"
                  src="/assets/images/common/icons/icons8-visa.svg"
                  width={1000}
                  height={1000}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "-5%", left: "24%" }}
                data-anime="translateY: [0, 5]; easing: linear; loop: true; direction: alternate; delay: 25;"
              >
                <Image
                  className="p-2"
                  alt="payment-method"
                  src="/assets/images/common/icons/tmoney.svg"
                  width={800}
                  height={800}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "30%", left: "-1.5%" }}
                data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 0;"
              >
                <Image
                  className="p-2"
                  alt="payment-method"
                  src="/assets/images/common/icons/Moov_Money_Flooz.png"
                  width={800}
                  height={800}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "45%", right: "-1.5%" }}
                data-anime="translateY: [0, 5]; easing: linear; loop: true; direction: alternate; delay: 50;"
              >
                <Image
                  className="p-2"
                  alt="payment-method"
                  src="/assets/images/common/icons/MTN_Logo.svg.png"
                  width={800}
                  height={800}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "75%", right: "21%" }}
                data-anime="translateY: [0, 15]; easing: linear; loop: true; direction: alternate; delay: 25;"
              >
                <Image
                  className="p-2"
                  alt="payment-method"
                  src="/assets/images/common/icons/Orange_logo.svg"
                  width={800}
                  height={800}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "85%", left: "11.5%" }}
                data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 50;"
              >
                <Image
                  className="p-2"
                  alt="payment-method"
                  src="/assets/images/common/icons/stripe.png"
                  width={800}
                  height={800}
                />
              </div>
            </div>
            <div
              className="panel vstack items-center gap-2 max-w-md mx-auto text-center px-4 lg:px-0 mt-6"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                La solution de paiement africaine
              </span>
              <h2
                className="h2 xl:display-5 m-0 text-center"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                Acceptez les paiements{" "}
                <span
                  className="text-tertiary dark:text-primary"
                  data-uc-typed="typeSpeed: 80; backSpeed: 50; backDelay: 1500; loop: true;"
                >
                  <TyperComponent
                    strings={[
                      "Mobile Money",
                      "Cartes bancaires",
                      // "Wallets",
                      // "QR Code",
                    ]}
                  />
                </span>
                <span className="typed-cursor" aria-hidden="true">
                  |
                </span>
              </h2>

              <p className="fs-5 lg:fs-4">
                Simplifiez vos encaissements avec une solution tout-en-un sécurisée et adaptée à l'Afrique.
              </p>
              <div className="panel vstack items-center gap-1 max-w-400px lg:max-w-750px mx-auto text-center mt-2 xl:mt-4">
                <div className="mb-2 lg:mb-3">
                  <a
                    href="#"
                    className="btn btn-md xl:btn-lg btn-primary border border-dark dark:border-white dark:border-opacity-15 px-3 lg:px-5 w-auto rounded-pill"
                  >
                    <span>Commencer gratuitement</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
