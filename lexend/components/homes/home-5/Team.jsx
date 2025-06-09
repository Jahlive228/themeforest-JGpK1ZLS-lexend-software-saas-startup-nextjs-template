import React from "react";

export default function Features() {
  const features = [
    {
      title: "Modular + Customizable",
      description: "Start with plug-and-play modules, then build what's missing using our Creator Module.",
      icon: "unicon-apps"
    },
    {
      title: "Live Dashboards + AI Insights",
      description: "Get actionable data, not just screen captures. Spot gaps, trends, and exceptions instantly.",
      icon: "unicon-chart-line"
    },
    {
      title: "On-Premise or Cloud Deployment",
      description: "You control your data. Choose how and where to deploy — without vendor lock-in.",
      icon: "unicon-cloud-computing"
    },
    {
      title: "Field, Remote, and Office Ready",
      description: "One platform works for everyone — mobile GPS check-ins, desktop agents, or shift dashboards.",
      icon: "unicon-users-alt"
    },
    {
      title: "Custom App Integration",
      description: "Need an approval app or CRM? Build it without developers, right inside TeamOB.",
      icon: "unicon-setting"
    },
    {
      title: "Enterprise Grade. SMB Friendly.",
      description: "Whether you're a startup or a 5000-employee BPO, TeamOB scales with you — affordably.",
      icon: "unicon-chart-growth"
    }
  ];

  return (
    <div id="features" className="features section panel overflow-hidden">
      <div className="section-outer panel pb-4 md:pb-6 xl:pb-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack items-center gap-2 panel max-w-650px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <h2 className="title h3 lg:h2 xl:h1 m-0 dark:text-white">
                  More Than Monitoring — Built for Smart Operations
                </h2>
                <p className="fs-6 xl:fs-5 dark:text-white text-opacity-70">
                  TeamOB is not just a tool. It's a modular, customizable platform that adapts to your business — with AI insights, on-premise deployment, and full automation capabilities.
                </p>
              </div>
              <div className="content panel w-full">
                <div
                  className="row child-cols-12 lg:child-cols-4 col-match g-2 lg:g-3"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
                >
                  {features.map((feature, index) => (
                    <div key={index}>
                      <div className="panel vstack gap-2 p-3 lg:p-4 rounded-2 bg-secondary dark:bg-white dark:bg-opacity-5 h-full">
                        <div className="panel">
                          <i className={`icon icon-2xl ${feature.icon} text-primary dark:text-secondary`}></i>
                        </div>
                        <div className="panel vstack items-start gap-1">
                          <h6 className="h6 xl:h5 m-0 dark:text-white">
                            {feature.title}
                          </h6>
                          <p className="fs-6 xl:fs-5 opacity-70 m-0">
                            {feature.description}
                          </p>
                        </div>
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
  );
}
