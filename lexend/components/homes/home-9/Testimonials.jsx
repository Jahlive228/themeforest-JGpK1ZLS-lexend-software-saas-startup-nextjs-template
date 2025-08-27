"use client";
import { testimonials5 } from "@/data/testimonials";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const [isViewAll, setIsViewAll] = useState(false);
  const isotopContainer = useRef();
  const isotope = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".isotop-element",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.current.layout();
    });
  };

  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);
  return (
    <div
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack gap-4 "
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div className="section-header vstack items-center gap-2 lg:gap-3">
                <span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                  Témoignages
                </span>
                <h2 className="h4 sm:h3 lg:h1 m-0 text-center max-w-650px mx-auto">
                  Ils nous font{" "}
                  <span className="text-tertiary dark:text-primary">
                    confiance
                  </span>
                </h2>
              </div>
              <div
                id="clients_feedback_area"
                className="panel w-100 max-w-lg mx-auto overflow-hidden"
              >
                <div
                  className="row child-cols-12 md:child-cols-6 g-4"
                  ref={isotopContainer}
                >
                  <div className="isotop-element">
                    <div className="px-4 py-4 panel vstack justify-between gap-3 dark:bg-gradient-45 from-tertiary to-transparent border border-dark dark:border-white dark:border-opacity-15 rounded-2">
                      <div className="panel vstack items-start gap-3">
                        <div className="hstack gap-2">
                          <Image
                            className="w-48px h-48px rounded-circle object-cover"
                            alt="Prof FOFANA HASSAN"
                            src="/assets/images/avatars/01.jpg"
                            width={150}
                            height={150}
                          />
                          <div className="vstack">
                            <span className="fw-bold text-dark dark:text-white">Prof FOFANA HASSAN</span>
                            <span className="fs-7 text-gray-600">DRH du Ministère de l'enseignement supérieur</span>
                          </div>
                        </div>
                        <p className="fs-6">
                          "Avec GomboPay, le paiement des frais de concours est devenu fluide et rapide. Nous avons réduit nos charges opérationnelles de jusqu'à 50%. Un véritable gain pour nos équipes et une expérience simplifiée pour les utilisateurs !"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="isotop-element">
                    <div className="px-4 py-4 panel vstack justify-between gap-3 dark:bg-gradient-45 from-tertiary to-transparent border border-dark dark:border-white dark:border-opacity-15 rounded-2">
                      <div className="panel vstack items-start gap-3">
                        <div className="hstack gap-2">
                          <Image
                            className="w-48px h-48px rounded-circle object-cover"
                            alt="Léopoldie Mathias"
                            src="/assets/images/avatars/02.jpg"
                            width={150}
                            height={150}
                          />
                          <div className="vstack">
                            <span className="fw-bold text-dark dark:text-white">Léopoldie Mathias</span>
                            <span className="fs-7 text-gray-600">PDG de Julaya</span>
                          </div>
                        </div>
                        <p className="fs-6">
                          "Avec GomboPay, nous pouvons encaisser les paiements digitaux de nos clients sans problème. Le service est fonctionnel et l'interface du backoffice très ergonomique. Le support client est très réactif."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="isotop-element">
                    <div className="px-4 py-4 panel vstack justify-between gap-3 dark:bg-gradient-45 from-tertiary to-transparent border border-dark dark:border-white dark:border-opacity-15 rounded-2">
                      <div className="panel vstack items-start gap-3">
                        <div className="hstack gap-2">
                          <Image
                            className="w-48px h-48px rounded-circle object-cover"
                            alt="Jean-Marc T"
                            src="/assets/images/avatars/03.jpg"
                            width={150}
                            height={150}
                          />
                          <div className="vstack">
                            <span className="fw-bold text-dark dark:text-white">Jean-Marc T</span>
                            <span className="fs-7 text-gray-600">Directeur Administratif du GSE</span>
                          </div>
                        </div>
                        <p className="fs-6">
                          "La collecte des frais de scolarité est désormais plus rapide. Les parents peuvent payer à tout moment via Mobile Money, cartes bancaires ou wallets. Le suivi en temps réel nous a permis de réduire les retards de paiement."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="isotop-element">
                    <div className="px-4 py-4 panel vstack justify-between gap-3 dark:bg-gradient-45 from-tertiary to-transparent border border-dark dark:border-white dark:border-opacity-15 rounded-2">
                      <div className="panel vstack items-start gap-3">
                        <div className="hstack gap-2">
                          <Image
                            className="w-48px h-48px rounded-circle object-cover"
                            alt="Yves DJEDJE"
                            src="/assets/images/avatars/04.jpg"
                            width={150}
                            height={150}
                          />
                          <div className="vstack">
                            <span className="fw-bold text-dark dark:text-white">Yves DJEDJE</span>
                            <span className="fs-7 text-gray-600">Fondateur de CHAPCHAP</span>
                          </div>
                        </div>
                        <p className="fs-6">
                          "GomboPay répond à nos ambitions. Ses outils s'interfacent via des API modernes à nos systèmes d'information. GomboPay nous libère du temps que nous pouvons consacrer aux interactions avec nos clients."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="clients-feedback-toggle-area"
                  onClick={() => setIsViewAll((pre) => !pre)}
                  className={
                    !isViewAll
                      ? "position-absolute bottom-0 start-0 end-0 h-300px vstack items-center justify-end bg-gradient-to-t from-white dark:from-tertiary-800 to-transparent z-1"
                      : "bottom-0 start-0 end-0 vstack items-center justify-end bg-gradient-to-t from-white dark:from-tertiary-800 to-transparent z-1 mt-8"
                  }
                >
                  <a
                    className={
                      !isViewAll
                        ? "btn btn-primary border border-dark dark:border-white dark:border-opacity-15 rounded-pill px-3"
                        : "btn border border-dark dark:border-white dark:border-opacity-15 rounded-pill px-3 btn-secondary"
                    }
                    data-uc-toggle="target: #clients_feedback_area; cls: uc-active"
                  >
                    {isViewAll ? "Close feedbacks" : " View all feedbacks"}
                  </a>
                </div>
              </div>
              <div className="panel max-w-900px mx-auto mt-8">
                <div
                  className="panel vstack gap-4 text-center"
                  data-anime="onview: -200; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
                >
                  <h3 className="h4 m-0">
                    Reconnu par les grandes marques d'Afrique
                  </h3>
                  <div className="panel">
                    <div className="row child-cols-6 md:child-cols-3 g-4 items-center justify-center">
                      <div>
                        <div className="panel p-4 bg-white dark:bg-tertiary-700 rounded-2 border border-dark dark:border-white dark:border-opacity-15">
                          <Image
                            className="w-auto h-32px"
                            alt="Decathlon"
                            src="/assets/images/brands/decathlon.svg"
                            width={120}
                            height={32}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="panel p-4 bg-white dark:bg-tertiary-700 rounded-2 border border-dark dark:border-white dark:border-opacity-15">
                          <Image
                            className="w-auto h-32px"
                            alt="Ministère du Commerce"
                            src="/assets/images/brands/ministere.svg"
                            width={120}
                            height={32}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="panel p-4 bg-white dark:bg-tertiary-700 rounded-2 border border-dark dark:border-white dark:border-opacity-15">
                          <Image
                            className="w-auto h-32px"
                            alt="Banque Atlantique"
                            src="/assets/images/brands/banque-atlantique.svg"
                            width={120}
                            height={32}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="panel p-4 bg-white dark:bg-tertiary-700 rounded-2 border border-dark dark:border-white dark:border-opacity-15">
                          <Image
                            className="w-auto h-32px"
                            alt="ANSUT"
                            src="/assets/images/brands/ansut.svg"
                            width={120}
                            height={32}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="panel p-4 bg-white dark:bg-tertiary-700 rounded-2 border border-dark dark:border-white dark:border-opacity-15">
                          <Image
                            className="w-auto h-32px"
                            alt="ACA Expertise"
                            src="/assets/images/brands/aca.svg"
                            width={120}
                            height={32}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="panel p-4 bg-white dark:bg-tertiary-700 rounded-2 border border-dark dark:border-white dark:border-opacity-15">
                          <Image
                            className="w-auto h-32px"
                            alt="Optimus"
                            src="/assets/images/brands/optimus.svg"
                            width={120}
                            height={32}
                          />
                        </div>
                      </div>
                    </div>
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
