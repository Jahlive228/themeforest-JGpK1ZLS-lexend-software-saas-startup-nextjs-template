import { useCases } from "@/data/use-cases";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Solutions() {
  return (
    <div
      id="use_cases"
      className="use-cases section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 md:py-8 xl:py-10">
        <div className="container">
          <div className="section-inner panel vstack items-center gap-6 lg:gap-8">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 max-w-3xl mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                Cas d'usage
              </span>
              <h2 className="h3 lg:h1 m-0">
                Une solution adaptée à{" "}
                <span className="text-tertiary dark:text-primary">
                  chaque secteur
                </span>
              </h2>
              <p className="fs-5 text-gray-600 dark:text-gray-300">
                Découvrez comment GomboPay peut répondre aux besoins spécifiques de votre activité
              </p>
            </div>

            <div
              className="row g-4"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
            >
              {useCases.map((useCase, index) => (
                <div key={index} className="col-12 md:col-6 lg:col-4">
                  <div className={`h-100 p-4 lg:p-5 bg-white dark:bg-tertiary-800 border border-${useCase.color} dark:border-white dark:border-opacity-15 rounded-2`}>
                    <div className="vstack gap-4">
                      <div className="hstack gap-3">
                        <div className={`cstack w-48px h-48px rounded-circle bg-${useCase.color} bg-opacity-10`}>
                          <Image
                            className={`w-24px h-24px text-${useCase.color}`}
                            alt={useCase.title}
                            src={useCase.icon}
                            width={24}
                            height={24}
                          />
                        </div>
                        <h3 className="h5 m-0">{useCase.title}</h3>
                      </div>
                      
                      <p className="fs-6 text-gray-600 dark:text-gray-300 m-0">
                        {useCase.description}
                      </p>

                      <ul className="nav-y gap-2 fs-6 mb-4">
                        {useCase.features.map((feature, i) => (
                          <li key={i} className="hstack gap-2">
                            <i className={`icon icon-narrow unicon-checkmark-circle text-${useCase.color}`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={`/solutions#${useCase.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`btn btn-sm btn-outline-${useCase.color} mt-auto`}
                      >
                        En savoir plus
                        <i className="icon icon-narrow unicon-arrow-up-right fw-bold rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="btn btn-lg btn-primary border border-dark dark:border-white dark:border-opacity-15 px-5 rounded-pill"
              >
                <span>Discuter de votre projet</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
