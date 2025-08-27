import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/footer-links";

export default function Footer8() {
  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden">
      <div className="footer-outer py-6 lg:py-8 xl:py-9 lg:m-2 lg:rounded-2 bg-secondary dark:bg-tertiary-700 border border-secondary dark:border-white dark:border-opacity-15">
        <div className="uc-footer-content">
          <div className="container xl:max-w-xl">
            <div className="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
              <div className="uc-footer-widgets panel">
                <div className="row g-4 lg:g-6">
                  <div className="col-12 lg:col-4">
                    <div className="panel vstack gap-4">
                      <div className="vstack gap-3">
                        <Link href="/" className="d-inline-flex items-center gap-2">
                          <Image
                            className="h-40px w-auto dark:d-none"
                            alt="GomboPay"
                            src="/assets/images/logo/logo-removebg-preview.png"
                            width={60}
                            height={40}
                          />
                          <Image
                            className="h-40px w-auto d-none dark:d-block"
                            alt="GomboPay"
                            src="/assets/images/logo/logo-removebg-preview.png"
                            width={60}
                            height={40}
                          />
                          <span className="fs-4 fw-semibold text-dark dark:text-white">gomboPay</span>
                        </Link>
                        <p className="fs-6 text-gray-600 dark:text-gray-300">
                          La solution de paiement qui simplifie vos encaissements en Afrique. Acceptez les paiements Mobile Money, cartes bancaires et wallets en toute sécurité.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 lg:col-8">
                    <div className="row g-4">
                      {footerLinks.map((section, index) => (
                        <div key={index} className="col-6 lg:col-4">
                          <div className="vstack gap-3">
                            <h4 className="h6 fw-bold text-dark dark:text-white m-0">
                              {section.title}
                            </h4>
                            <ul className="nav-y gap-2">
                              {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  {link.isLink ? (
                                    <Link href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-primary">
                                      {link.text}
                                    </Link>
                                  ) : (
                                    <a href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-primary">
                                      {link.text}
                                    </a>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-between items-center pt-6 border-t border-dark dark:border-white dark:border-opacity-15">
                <p className="fs-6 text-gray-600 dark:text-gray-300 m-0">
                  © {new Date().getFullYear()} GomboPay. Tous droits réservés.
                </p>
                <div className="hstack gap-4">
                  <ul className="nav-x gap-3">
                    <li>
                      <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                        <i className="icon icon-2 unicon-logo-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                        <i className="icon icon-2 unicon-logo-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                        <i className="icon icon-2 unicon-logo-x-filled" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                        <i className="icon icon-2 unicon-logo-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                        <i className="icon icon-2 unicon-logo-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
