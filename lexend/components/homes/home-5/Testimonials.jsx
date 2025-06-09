'use client';

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Testimonials() {
  const testimonials = [
    {
      text: "I run online business. I found it difficult to manage my remote and inhouse teams. Thank you very much TeamOB.",
      author: "Prashant Agrawal",
      position: "Myweb, India",
      image: "/assets/images/testimonial-2.jpg"
    },
    {
      text: "One of the best employee monitoring system with Attractive pricing and an efficient user interface make Teamob a solid employee monitoring and analytics tool that's squarely focused on worker productivity.",
      author: "Sanjivani Gautam Sanyal",
      position: "SGSites, India",
      image: "/assets/images/testimonial-1.jpg"
    },
    {
      text: "Absolutely love this! TeamOB helped us to monitor the team. Our productivity has doubled.",
      author: "Bjorn Ov",
      position: "Egoria, Norw",
      image: "/assets/images/testimonial-3.jpg"
    },
    {
      text: "TeamOB is one of the best time saving tool that we have ever used in the long time. Now it is easy for us to get crucial informations easily. Their support is also excellent.",
      author: "Prabha Associates",
      position: "Axxisinfomix, India",
      image: "/assets/images/testimonial-4.jpg"
    }
  ];

  return (
    <div
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="w-full">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet !bg-primary dark:!bg-white',
                    bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary dark:!bg-white',
                  }}
                  className="testimonials-slider"
              >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                  <div className="panel vstack justify-center gap-3 rounded-2 bg-secondary dark:bg-white dark:bg-opacity-5 overflow-hidden text-center">
                    <div className="panel vstack justify-center gap-3 px-3 py-4 lg:px-5 lg:py-6">
                      <div className="panel vstack items-center gap-2">
                        <div className="panel">
                              <div className="h-48px w-48px rounded-full overflow-hidden">
                            <Image
                                  src={testimonial.image}
                                  alt={testimonial.author}
                                  width={48}
                                  height={48}
                                  className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <p className="fs-5 lg:fs-4 xl:fs-3 fw-medium text-dark dark:text-white lg:px-6">
                              "{testimonial.text}"
                        </p>
                      </div>
                      <div className="panel mt-2 lg:mt-4">
                        <div className="panel vstack items-center gap-0 lg:gap-1">
                              <h6 className="h6 lg:h5 m-0">{testimonial.author}</h6>
                          <span className="fs-7 lg:h6 opacity-70">
                                {testimonial.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <a
                href="#"
                className="uc-link dark:text-secondary fw-bold d-inline-flex items-center gap-narrow"
              >
                <span>See all feedbacks</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
