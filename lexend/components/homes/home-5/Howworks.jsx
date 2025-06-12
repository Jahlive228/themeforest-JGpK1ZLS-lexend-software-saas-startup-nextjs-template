import React from "react";
import Image from "next/image";
import Accordion2 from "@/components/common/Accordion2";

export default function Howworks() {
  const challenges = [
    {
      title: "NO REAL-TIME VISIBILITY",
      description: "Managers have no idea who's working on what, where, and how effectively.",
      icon: "/assets/images/common/icons/database.svg"
    },
    {
      title: "TIME THEFT & ATTENDANCE GAPS",
      description: "Late logins, ghost attendance, and missed shifts go unnoticed.",
      icon: "/assets/images/common/icons/line-chart.svg"
    },
    {
      title: "EXCEL-BASED OPERATIONS",
      description: "Manual reporting, approvals, and tracking slow down every decision.",
      icon: "/assets/images/common/icons/database.svg"
    }
  ];

  const additionalChallenges = [
    {
      title: "SCATTERED TOOLS & ZERO INTEGRATION",
      description: "Different apps for attendance, tasks, assets — none talking to each other.",
      icon: "/assets/images/common/icons/database.svg"
    },
    {
      title: "NO INSIGHT INTO PRODUCTIVITY",
      description: "Effort is logged, but outcomes remain a mystery.",
      icon: "/assets/images/common/icons/line-chart.svg"
    },
    {
      title: "DELAYED COMPLIANCE & HR RECONCILIATION",
      description: "Timesheets, shift records, and performance audits are a nightmare.",
      icon: "/assets/images/common/icons/database.svg"
    }
  ];

  return (
    <div
      id="how_it_works"
      className="how-it-works section panel overflow-hidden rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800 dark:text-white"
    >
      <div className="section-outer panel">
        <div className="container container-full">
          <div className="section-inner panel">
            <div className="row child-cols-12 col-match g-0">
              <div>
                <div className="panel">
                  <div className="row child-cols-12 lg:child-cols-6 col-match items-center g-0">
                    <div data-anime="onview: -100; translateX: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;">
                      <figure className="featured-image m-0 rounded ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-bottom-end-0">
                        <Image
                          className="media-cover image"
                          alt="Unified Platform Dashboard"
                          src="/assets/images/template/work3.jpg"
                          width="1200"
                          height="1200"
                        />
                      </figure>
                    </div>
                    <div data-anime="onview: -100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;">
                      <div
                        className="panel vstack items-start gap-2 lg:gap-3 p-3 md:p-4 lg:p-6 xl:p-8 xl:px-9 my-2 lg:my-0"
                        data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                      >
                        <h3 className="h3 lg:h2 m-0">
                          Tired of scattered tools, delayed reporting, and low visibility?
                        </h3>
                        <p className="fs-6 lg:fs-5">
                          You're not alone. Many teams struggle with juggling multiple platforms that don't integrate well, leading to slow, fragmented reporting and poor insight into operations.
                        </p>
                        <div className="panel w-100 mt-2 lg:mt-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {challenges.map((challenge, index) => (
                              <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                                <div className="flex flex-col items-center text-center gap-3">
                                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Image
                                      src={challenge.icon}
                                      alt={challenge.title}
                                      width={32}
                                      height={32}
                                      className="icon icon-1 text-white image-filter-white"
                                    />
                                  </div>
                                  <h4 className="h6 m-0">{challenge.title}</h4>
                                  <p className="fs-7 text-gray-600 dark:text-gray-300 m-0">{challenge.description}</p>
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
              <div>
                <div className="panel">
                  <div className="row child-cols-12 lg:child-cols-6 col-match items-center g-0">
                    <div
                      className="lg:order-2"
                      data-anime="onview: -100; translateX: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 300;"
                    >
                      <figure className="featured-image m-0 rounded ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-top-start-0">
                        <Image
                          className="media-cover image"
                          alt="TeamOB Platform Features"
                          src="/assets/images/template/work1.jpg"
                          width="1200"
                          height="1200"
                        />
                      </figure>
                    </div>
                    <div
                      className="order-1"
                      data-anime="onview: -100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 400;"
                    >
                      <div
                        className="panel vstack items-start gap-2 lg:gap-3 p-3 md:p-4 lg:p-6 xl:p-8 xl:px-9 my-2 lg:my-0"
                        data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                      >
                        <h3 className="h3 lg:h2 m-0">
                          A unified platform that tracks work, automates flows, and adapts to your process
                        </h3>
                        <p className="fs-6 lg:fs-5">
                          TeamOB brings everything — people, data, tasks, and tools — onto one platform. These inefficiencies cost time, reduce productivity, and prevent proactive decision-making.
                        </p>
                        <div className="panel mt-2 lg:mt-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {additionalChallenges.map((challenge, index) => (
                              <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                                <div className="flex flex-col items-center text-center gap-3">
                                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Image
                                      src={challenge.icon}
                                      alt={challenge.title}
                                      width={32}
                                      height={32}
                                      className="icon icon-1 text-white image-filter-white"
                                    />
                                  </div>
                                  <h4 className="h6 m-0">{challenge.title}</h4>
                                  <p className="fs-7 text-gray-600 dark:text-gray-300 m-0">{challenge.description}</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}
