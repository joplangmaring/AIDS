'use client'

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import activities1 from "../../assets/activities1.png";
import reel from "../../assets/reel.png";
import activities2 from "../../assets/actvities2.png";

const slides = [
  { src: activities1, caption: "Awareness Workshop & Community Outreach" },
  { src: reel, caption: "Reel Making Competition - August 2024" },
  { src: activities2, caption: "Health Camps & Public Engagement Events" },
];

const impactStats = [
  { number: "11", label: "Districts Covered" },
  { number: "438", label: "HIV Testing Facilities" },
  { number: "9", label: "TI Projects Active" },
];

const quickLinks = [
  { title: "Events", desc: "Workshops, summits & awareness drives", href: "/page/events" },
  { title: "Campaigns", desc: "State-wide outreach campaigns", href: "/page/campaigns" },
  { title: "IEC", desc: "Information, Education & Communication", href: "/page/iec" },
];

const Activities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <div className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto px-5 md:px-12">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Activities & Initiatives
          </h1>
          <div className="w-16 h-1 bg-brand mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-500 text-sm md:text-base mt-3 max-w-lg mx-auto">
            A glimpse into our ongoing efforts towards awareness, prevention and community empowerment.
          </p>
        </div>

        {/* 3-column layout */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left panel: Impact stats */}
          <div className="lg:w-[200px] xl:w-[220px] flex-shrink-0 flex lg:flex-col flex-row lg:gap-4 gap-3 order-2 lg:order-1">
            {impactStats.map((stat, i) => (
              <div
                key={i}
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl p-4 text-center lg:text-left"
              >
                <div className="text-2xl md:text-3xl font-black text-brand leading-none">{stat.number}</div>
                <div className="text-xs md:text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Center: Carousel */}
          <div
            className="flex-1 min-w-0 order-1 lg:order-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-3 md:p-4">
              {/* Image area */}
              <div className="relative rounded-xl overflow-hidden bg-gray-100">
                <div className="w-full h-[260px] sm:h-[340px] md:h-[440px] flex justify-center items-center relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="absolute inset-0 flex justify-center items-center"
                    >
                      <Image
                        src={slides[currentIndex].src}
                        alt={slides[currentIndex].caption}
                        className="object-contain w-auto h-full max-w-full"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Nav buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-white bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors duration-200"
                  aria-label="Previous"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-white bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors duration-200"
                  aria-label="Next"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Counter */}
                <div className="absolute top-2.5 right-2.5 z-20 bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                  {currentIndex + 1} / {slides.length}
                </div>
              </div>

              {/* Caption + dots */}
              <div className="flex flex-col sm:flex-row items-center justify-between mt-3 px-1 gap-2">
                <p className="text-sm text-gray-700 font-medium text-center sm:text-left">
                  {slides[currentIndex].caption}
                </p>
                <div className="flex gap-1.5 flex-shrink-0">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`rounded-full transition-all duration-300 ${
                        currentIndex === index
                          ? "w-7 h-2 bg-brand"
                          : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Quick links */}
          <div className="lg:w-[200px] xl:w-[220px] flex-shrink-0 flex lg:flex-col flex-col gap-3 lg:gap-4 order-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 lg:block hidden">Explore</div>
            {quickLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="group flex lg:flex-col flex-row lg:items-start items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-brand/30 hover:bg-brand/[0.02] transition-all duration-200"
              >
                <div>
                  <div className="text-sm font-semibold text-gray-900 group-hover:text-brand transition-colors">{link.title}</div>
                  <div className="text-xs text-gray-400 mt-0.5 leading-snug">{link.desc}</div>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-brand transition-colors flex-shrink-0 lg:hidden ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
