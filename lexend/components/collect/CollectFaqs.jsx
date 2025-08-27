import React from "react";
import Link from "next/link";
import Accordion from "@/components/common/Accordion";
import { collectFaq } from "@/data/collect-faq";

export default function CollectFaqs() {
  return (
    <section id="collect_faqs" className="collect-faqs-section panel overflow-hidden">
      <div className="collect-faqs-outer">
        <div className="collect-faqs-content">
          <div className="container xl:max-w-xl">
            <div className="collect-faqs-inner vstack gap-6 lg:gap-8 xl:gap-10">
              <div className="collect-faqs-header panel text-center">
                <div className="vstack gap-4">
                  <div className="collect-faqs-tagline panel">
                    <span className="badge badge-primary fs-7 fw-bold px-3 py-2 rounded-pill">
                      FAQ
                    </span>
                  </div>
                  <div className="collect-faqs-title panel">
                    <h2 className="display-5 fw-bold text-dark dark:text-white mb-4">
                      Questions fréquentes
                    </h2>
                  </div>
                  <div className="collect-faqs-description panel">
                    <p className="fs-5 text-gray-600 dark:text-gray-300">
                      Tout ce que vous devez savoir sur GomboPay Collect
                    </p>
                  </div>
                </div>
              </div>

              <div className="collect-faqs-main panel">
                <div className="row g-6 lg:g-8">
                  <div className="col-12 col-lg-8">
                    <div className="collect-faqs-accordion panel">
                      <Accordion data={collectFaq} />
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="collect-faqs-sidebar panel vstack gap-4">
                      <div className="collect-faqs-help panel p-6 bg-primary rounded-3 text-white">
                        <div className="vstack gap-4">
                          <h4 className="h5 fw-bold m-0">
                            Besoin d'aide ?
                          </h4>
                          <p className="fs-6 mb-0">
                            Notre équipe est là pour vous accompagner dans votre intégration
                          </p>
                          <Link
                            href="/contact"
                            className="btn btn-white text-primary rounded-pill"
                          >
                            Contactez-nous
                          </Link>
                        </div>
                      </div>
                      <div className="collect-faqs-docs panel p-6 bg-light dark:bg-tertiary-600 rounded-3">
                        <div className="vstack gap-4">
                          <h4 className="h5 fw-bold text-dark dark:text-white m-0">
                            Documentation
                          </h4>
                          <p className="fs-6 text-gray-600 dark:text-gray-300 mb-0">
                            Consultez nos guides d'intégration et exemples de code
                          </p>
                          <Link
                            href="/docs"
                            className="btn btn-primary rounded-pill"
                          >
                            Voir la documentation
                          </Link>
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
    </section>
  );
}
