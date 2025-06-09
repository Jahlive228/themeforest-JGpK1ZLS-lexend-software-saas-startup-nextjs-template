'use client';

import React, { useState } from "react";
import Image from "next/image";

export default function Features() {
  const [activeTab, setActiveTab] = useState(1);

  const steps = [
    {
      id: 1,
      title: "3 Reasons to Embrace Time Tracking Software",
      description: "Are you a business owner dwindling with the idea of whether or not to purchase the right Time tracking software for your business? Although using employee productivity monitoring software is often seen as a tool for managers, it is far from being solely that! Your employees no longer need to dread such software and instead should embrace it.",
      image: "/assets/images/template/feature-image-01.jpg",
      readMoreLink: "Time-Tracking-Software"
    },
    {
      id: 2,
      title: "Time Tracking in Hybrid Work Culture",
      description: "Hybrid work means that employees split their workdays between home and office space. Over the past year, many leading businesses announced that hybrid and remote work is here to stay. Although the pandemic served as the biggest factor in this shift, remote and hybrid work settings are increasingly becoming a permanent fixture.",
      image: "/assets/images/template/feature-image-02.jpg",
      readMoreLink: "Tracking-in-hybrid-work-culture"
    },
    {
      id: 3,
      title: "The Perfect Way to Manage Remote Teams",
      description: "With remote work taking precedence over the last year and a half, there's been plenty of room for the fluidity of work. However, with this day in and out subjecting oneself to remote working, it can be hard to ascertain one's productivity and keeping a steady head on deadlines and meeting them.",
      image: "/assets/images/template/feature-image-03.jpg",
      readMoreLink: "Attendance-Management-Systems"
    },
    {
      id: 4,
      title: "Employee Analytics & Productivity in BPO",
      description: "Businesses all across the world have been forced to participate in the world's largest work-from-home experiment. For long-term viability, enabling high productivity and performance among a workforce that is still adjusting to the concept of remote working has become important.",
      image: "/assets/images/template/feature-image-04.jpg",
      readMoreLink: "Productivity-Insight-In-bpo"
    },
    {
      id: 5,
      title: "Business Intelligence & Visual Analytics",
      description: "Companies have depended on business intelligence reporting (BI)— the tools and activities used to evaluate company data and turn it into actionable insights—increasingly in recent years to make better-informed and more valued decisions. This method necessitates gathering as much data as possible through analytical reporting.",
      image: "/assets/images/template/feature-image-05.jpg",
      readMoreLink: "Visual-Analytics-Reporting"
    }
  ];

  return (
    <div id="main_features" className="main-features section panel overflow-hidden">
      <div className="section-outer panel pb-6 xl:pb-9">
        <div className="container max-w-xl lg:max-w-lg">
          <div className="section-inner panel" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});">
            <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 sm:max-w-600px xl:max-w-700px mx-auto text-center">
              <h2 className="h3 lg:h2 xl:h1 m-0">
                TeamOB Cloud Services <span className="text-primary">Latest News</span>
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                Discover insights about remote work, employee monitoring, and productivity enhancement.
              </p>
            </div>
            <div className="panel vstack gap-4 xl:gap-6">
              <div className="panel px-3 rounded-2 bg-secondary dark:bg-gray-800">
                <ul className="main-features-nav hstack text-center overflow-auto" role="tablist">
                  {steps.map((step) => (
                    <li
                      key={step.id}
                      className={`${activeTab === step.id ? "uc-active" : ""}`}
                      onClick={() => setActiveTab(step.id)}
                      role="presentation"
                    >
                      <a className="h6 lg:h5 text-nowrap m-0">Step {step.id}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="main-features-switcher uc-switcher overflow-hidden" role="presentation">
                {steps.map((step) => (
                  activeTab === step.id && (
                    <div key={step.id} className="uc-active">
                      <div className="feature-item panel">
                        <div className="row child-cols col-match justify-between g-4">
                          <div className="col-12 sm:col-6">
                            <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                              <Image
                                className="media-cover image"
                                alt={step.title}
                                src={step.image}
                                width="1200"
                                height="1200"
                              />
                            </figure>
                          </div>
                          <div className="col-12 sm:col-6">
                            <div className="panel">
                              <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                                <div>
                                  <div className="panel vstack gap-2">
                                    <h3 className="h4 sm:h3 lg:h2 m-0">
                                      {step.title}
                                    </h3>
                                    <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                      {step.description}
                                    </p>
                                    <a href={`/blog/${step.readMoreLink}`} className="uc-link fw-bold hstack gap-narrow mt-2">
                                      <span>Read More</span>
                                      <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
