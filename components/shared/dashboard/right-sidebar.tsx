"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

const RightSidebar = () => {
  return (
    //  <!-- Right Sidebar -->
    <div>
      <div className="bg-slate-900/60"></div>
      <div className="h-full w-full sm:w-80">
        <div>
          <div className="flex items-center justify-between py-2 px-4">
            <p className="flex shrink-0 items-center space-x-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs">25 May, 2022</span>
            </p>
          </div>

          <div className="is-scrollbar-hidden overflow-y-auto overscroll-contain pt-1">
            <div className="mt-3 ml-3">
              <h2 className="px-3 mb-4 text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
                Banking cards
              </h2>
              <Swiper spaceBetween={100} slidesPerView={2}>
                <SwiperSlide>
                  <div className="relative flex h-28 w-48 flex-col overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 p-3">
                    <div className="grow">
                      <Image
                        className="h-3"
                        src="/images/payments/cc-visa-white.svg"
                        alt="image"
                        width="70"
                        height="21"
                      />
                    </div>
                    <div className="text-white">
                      <p className="text-lg font-semibold tracking-wide">
                        $2,139.22
                      </p>
                      <p className="mt-1 text-xs font-medium">
                        **** **** **** 8945
                      </p>
                    </div>
                    <div className="mask is-reuleaux-triangle absolute top-0 right-0 -m-3 h-16 w-16 bg-white/20"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="relative flex h-28 w-48 flex-col overflow-hidden rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 p-3">
                    <div className="grow">
                      <Image
                        className="h-3"
                        src="/images/payments/cc-visa-white.svg"
                        alt="image"
                        width="70"
                        height="21"
                      />
                    </div>
                    <div className="text-white">
                      <p className="text-lg font-semibold tracking-wide">
                        $2,139.22
                      </p>
                      <p className="mt-1 text-xs font-medium">
                        **** **** **** 8945
                      </p>
                    </div>
                    <div className="mask is-diamond absolute bottom-0 right-0 -m-3 h-16 w-16 bg-white/20"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative flex h-28 w-48 flex-col overflow-hidden rounded-xl bg-gradient-to-br from-info to-info-focus p-3">
                    <div className="grow">
                      <Image
                        className="h-3"
                        src="/images/payments/cc-visa-white.svg"
                        alt="image"
                        width="70"
                        height="21"
                      />
                    </div>
                    <div className="text-white">
                      <p className="text-lg font-semibold tracking-wide">
                        $2,139.22
                      </p>
                      <p className="mt-1 text-xs font-medium">
                        **** **** **** 8945
                      </p>
                    </div>
                    <div className="mask is-hexagon-2 absolute top-0 right-0 -m-3 h-16 w-16 bg-white/20"></div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="mt-4 px-3">
              <h2 className="text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
                Pinned Apps
              </h2>
              <div className="mt-3 flex space-x-3">
                <a href="apps-kanban.html" className="w-12 text-center">
                  <div className="avatar h-10 w-10">
                    <div className="is-initial mask is-squircle bg-success text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
                    Kanban
                  </p>
                </a>
                <a
                  href="dashboards-crm-analytics.html"
                  className="w-12 text-center"
                >
                  <div className="avatar h-10 w-10">
                    <div className="is-initial mask is-squircle bg-warning text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
                    Analytics
                  </p>
                </a>
                <a href="apps-chat.html" className="w-12 text-center">
                  <div className="avatar h-10 w-10">
                    <div className="is-initial mask is-squircle bg-info text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
                    Chat
                  </p>
                </a>
                <a href="apps-filemanager.html" className="w-12 text-center">
                  <div className="avatar h-10 w-10">
                    <div className="is-initial mask is-squircle bg-error text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
                    Files
                  </p>
                </a>
                <a
                  href="dashboards-banking-1.html"
                  className="w-12 text-center"
                >
                  <div className="avatar h-10 w-10">
                    <div className="is-initial mask is-squircle bg-secondary text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
                    Banking
                  </p>
                </a>
              </div>
            </div>

            <div className="mt-4">
              <div className="grid grid-cols-2 gap-3 px-3">
                <div className="rounded-lg bg-slate-150 px-2.5 py-2 dark:bg-navy-600">
                  <div className="flex items-center justify-between space-x-1">
                    <p>
                      <span className="text-lg font-medium text-slate-700 dark:text-navy-100">
                        11.3
                      </span>
                      <span className="text-xs">hr</span>
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4.5 w-4.5 text-secondary dark:text-secondary-light"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <p className="mt-0.5 text-tiny+ uppercase">Working Hours</p>

                  <div className="progress mt-3 h-1.5 bg-secondary/15 dark:bg-secondary-light/25">
                    <div className="is-active relative w-8/12 overflow-hidden rounded-full bg-secondary dark:bg-secondary-light"></div>
                  </div>

                  <div className="mt-1.5 flex items-center justify-between text-xs text-slate-400 dark:text-navy-300">
                    <button className="btn -ml-1 h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                    <span> 71%</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-150 px-2.5 py-2 dark:bg-navy-600">
                  <div className="flex items-center justify-between space-x-1">
                    <p>
                      <span className="text-lg font-medium text-slate-700 dark:text-navy-100">
                        13
                      </span>
                      <span className="text-xs">/22</span>
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4.5 w-4.5 text-success"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <p className="mt-0.5 text-tiny+ uppercase">Completed tasks</p>

                  <div className="progress mt-3 h-1.5 bg-success/15 dark:bg-success/25">
                    <div className="relative w-6/12 overflow-hidden rounded-full bg-success"></div>
                  </div>

                  <div className="mt-1.5 flex items-center justify-between text-xs text-slate-400 dark:text-navy-300">
                    <button className="btn -ml-1 h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                    <span> 49%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h2 className="px-3 text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
                Stock Market
              </h2>
              <div className="mt-3 grid grid-cols-2 gap-3 px-3">
                <div className="rounded-lg bg-slate-100 p-2.5 dark:bg-navy-600">
                  <div className="flex items-center space-x-2">
                    <Image
                      className="h-10 w-10"
                      src="/images/100x100.png"
                      alt="image"
                      height={100}
                      width={100}
                    />
                    <div>
                      <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                        BTC
                      </h2>
                      <p className="text-xs">Bitcoin</p>
                    </div>
                  </div>

                  <div className="ax-transparent-gridline">
                    <div x-init="$nextTick(() => { $el._x_chart = new ApexCharts($el,pages.charts.stockMarket1); $el._x_chart.render() });"></div>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                      60.33$
                    </p>
                    <p className="text-xs font-medium tracking-wide text-success">
                      +3.3%
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-100 p-2.5 dark:bg-navy-600">
                  <div className="flex items-center space-x-2">
                    <Image
                      className="h-10 w-10"
                      src="/images/100x100.png"
                      alt="image"
                      height={100}
                      width={100}
                    />
                    <div>
                      <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                        SOL
                      </h2>
                      <p className="text-xs">Solana</p>
                    </div>
                  </div>

                  <div className="ax-transparent-gridline">
                    <div x-init="$nextTick(() => { $el._x_chart = new ApexCharts($el,pages.charts.stockMarket2); $el._x_chart.render() });"></div>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                      20.56$
                    </p>
                    <p className="text-xs font-medium tracking-wide text-success">
                      +4.11%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h2 className="px-3 text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
                Latest News
              </h2>
              <div className="mt-3 space-y-3 px-2">
                <div className="flex justify-between space-x-2 rounded-lg bg-slate-100 p-2.5 dark:bg-navy-700">
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="line-clamp-2">
                      <a
                        href="#"
                        className="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                      >
                        What is Tailwind CSS?
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="avatar h-7 w-7">
                          <Image
                            className="rounded-full"
                            src="/images/200x200.png"
                            alt="avatar"
                            width={200}
                            height={200}
                          />
                        </div>
                        <div>
                          <p className="text-xs font-medium line-clamp-1">
                            John D.
                          </p>
                          <p className="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300">
                            2 min read
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                          </svg>
                        </button>
                        <button className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/images/800x600.png"
                    className="h-20 w-20 rounded-lg object-cover object-center"
                    alt="image"
                    width={800}
                    height={600}
                  />
                </div>

                <div className="flex justify-between space-x-2 rounded-lg bg-slate-100 p-2.5 dark:bg-navy-700">
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="line-clamp-2">
                      <a
                        href="#"
                        className="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                      >
                        Tailwind CSS Card Example
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="avatar h-7 w-7">
                          <Image
                            className="rounded-full"
                            src="/images/200x200.png"
                            alt="avatar"
                            height={200}
                            width={200}
                          />
                        </div>
                        <div>
                          <p className="text-xs font-medium line-clamp-1">
                            Travis F.
                          </p>
                          <p className="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300">
                            5 min read
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                          </svg>
                        </button>
                        <button className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/images/800x600.png"
                    className="h-20 w-20 rounded-lg object-cover object-center"
                    alt="image"
                    width={800}
                    height={600}
                  />
                </div>

                <div className="flex justify-between space-x-2 rounded-lg bg-slate-100 p-2.5 dark:bg-navy-700">
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="line-clamp-2">
                      <a
                        href="#"
                        className="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                      >
                        10 Tips for Making a Good Camera Even Better
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="avatar h-7 w-7">
                          <Image
                            height={200}
                            width={200}
                            className="rounded-full"
                            src="/images/200x200.png"
                            alt="avatar"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-medium line-clamp-1">
                            Alfredo E .
                          </p>
                          <p className="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300">
                            4 min read
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                          </svg>
                        </button>
                        <button className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/images/800x600.png"
                    className="h-20 w-20 rounded-lg object-cover object-center"
                    alt="image"
                    height={600}
                    width={800}
                  />
                </div>
              </div>
            </div>

            <div className="mt-3 px-3">
              <div className="rounded-lg bg-slate-100 p-3 dark:bg-navy-600">
                <div className="flex items-center justify-between">
                  <p>
                    <span className="font-medium text-slate-600 dark:text-navy-100">
                      35GB
                    </span>
                    of 1TB
                  </p>
                  <a
                    href="#"
                    className="text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
                  >
                    Upgrade
                  </a>
                </div>

                <div className="progress mt-2 h-2 bg-slate-150 dark:bg-navy-500">
                  <div className="w-7/12 rounded-full bg-info"></div>
                </div>
              </div>
            </div>
            <div className="h-18"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
