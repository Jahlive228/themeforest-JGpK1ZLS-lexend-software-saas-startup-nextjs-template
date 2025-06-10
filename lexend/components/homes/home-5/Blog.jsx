"use client";

import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "15 features of TeamOB to increase your business efficiency",
      excerpt: "TeamOB helps team members to manage their work, increase work efficiency. TeamOB can track time of team members efficiently to increase productivity, whether your team is in office or working from remote places.",
      image: "/assets/images/template/image.png",
      alt: "Business Efficiency Features",
      readMoreLink: "Features-of-TeamOB"
    },
    {
      id: 2,
      title: "Is it ethical to monitor employee computer usage?",
      excerpt: "Monitoring practice that is considered unethical, is monitoring employees without their knowledge or consent. To avoid this, always make sure your employees are aware of employee monitoring software. Create a monitoring policy with detailed consent forms.",
      image: "/assets/images/template/ethical-to-monitor.jpg",
      alt: "Ethical Monitoring",
      readMoreLink: "Computer-Usage"
    },
    {
      id: 3,
      title: "Future of Remote Work in India",
      excerpt: "Research firm Gartner suggests that India will produce one of the largest number of remote workers with one-third employees working remotely by 2022. By the end of 2021, 51% of all knowledge workers worldwide are expected to be working remotely.",
      image: "/assets/images/template/future-remote-work.png",
      alt: "Remote Work Future",
      readMoreLink: "Remote-Work"
    },
    {
      id: 4,
      title: "How to use TeamOB BI Report to increase productivity?",
      excerpt: "The TeamOB Business Intelligence Report is the use of your data to make intelligent business decisions. Learn how to leverage BI reports for better productivity and decision making.",
      image: "/assets/images/template/bi-blog1.jpg",
      alt: "BI Report Usage",
      readMoreLink: "TeamOB-BI-Report"
    },
    {
      id: 5,
      title: "Time tracking in hybrid work culture",
      excerpt: "Hybrid work means that employees split their workdays between home and office space. Over the past year, many leading businesses announced that hybrid and remote work is here to stay, becoming a permanent fixture in the business world.",
      image: "/assets/images/template/co-operate-office.jpg",
      alt: "Hybrid Work Culture",
      readMoreLink: "Tracking-in-hybrid-work-culture"
    }
  ];

  const swiperOptions = {
    slidesPerView: 1.1,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: ".swiper-nav-next",
      prevEl: ".swiper-nav-prev",
    },
    modules: [Navigation],
    breakpoints: {
      640: {
        slidesPerView: 2.3,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3.22,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3.22,
        spaceBetween: 32,
      },
    },
  };

  return (
    <div
      id="blog_posts"
      className="blog-posts section panel overflow-hidden gap-3 bg-secondary dark:bg-white dark:bg-opacity-5 rounded-1-5 lg:rounded-2 swiper-parent"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="row child-cols-12 g-4 sm:g-6 xl:g-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div>
                <div
                  className="heading vstack sm:hstack gap-4 justify-between md:items-end panel section-heading-2"
                  data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <div className="vstack gap-2">
                    <span className="fw-bold text-primary dark:text-secondary">
                      Latest posts
                    </span>
                    <h2 className="title h3 xl:h2 m-0">Select Process Management System For Your Business</h2>
                    <p className="desc fs-6 sm:fs-5 xl:fs-4 opacity-70">
                      Stay updated with our latest insights on remote work, productivity monitoring, and business intelligence.
                    </p>
                  </div>
                  <div className="d-none sm:d-block">
                    <Link
                      href={`/blog`}
                      className="btn btn-sm lg:btn-md btn-primary rounded-default"
                    >
                      View all posts
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="content panel expand-container ltr:ms-0 rtl:me-0">
                  <Swiper {...swiperOptions} className="swiper">
                    {posts.map((post, index) => (
                      <SwiperSlide className="swiper-slide" key={index}>
                        <article className="post type-post panel overflow-hidden vstack gap-3">
                          <figure className="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                            <Image
                              className="media-cover image uc-transition-scale-up uc-transition-opaque"
                              src={post.image}
                              width={768}
                              height={560}
                              alt={post.alt}
                            />
                            <Link
                              href={`/blog/${post.readMoreLink}`}
                              className="position-cover"
                              data-caption={post.title}
                            ></Link>
                          </figure>
                          <div className="panel vstack gap-1">
                            <Link
                              className="text-none"
                              href={`/blog/${post.readMoreLink}`}
                            >
                              <h3 className="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4">
                                <span>{post.title}</span>
                              </h3>
                            </Link>
                            <p className="post-excrept fs-7 xl:fs-6 opacity-70">
                              {post.excerpt}
                            </p>
                            <Link
                              href={`/blog/${post.readMoreLink}`}
                              className="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2"
                            >
                              <span>Read More</span>
                              <i className="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px" />
                            </Link>
                          </div>
                        </article>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div>
                <div className="panel hstack justify-between gap-2">
                  <div className="panel hstack items-end gap-narrow xl:gap-1 rtl:flex-row-reverse">
                    <a
                      href="#"
                      className="swiper-nav swiper-nav-prev btn w-40px xl:w-48px h-40px xl:h-48px rounded-circle text-primary dark:text-white hover:text-white bg-white dark:bg-gray-700 hover:bg-primary shadow-xs order-1"
                    >
                      <span className="icon-1 xl:icon-2 unicon-arrow-left" />
                    </a>
                    <a
                      href="#"
                      className="swiper-nav swiper-nav-next btn w-40px xl:w-48px h-40px xl:h-48px rounded-circle text-primary dark:text-white hover:text-white bg-white dark:bg-gray-700 hover:bg-primary shadow-xs order-2 rtl:order-0"
                    >
                      <span className="icon-1 xl:icon-2 unicon-arrow-right" />
                    </a>
                  </div>
                  <div className="sm:d-none">
                    <Link
                      href={`/blog`}
                      className="btn btn-sm lg:btn-md btn-primary rounded-default"
                    >
                      View all posts
                    </Link>
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
