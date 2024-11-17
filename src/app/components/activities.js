'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import activities1 from "../../assets/activities1.png";
import reel from "../../assets/reel.png";
import activities2 from "../../assets/actvities2.png";
import bg from "../../assets/tender-bg.jpg"; // Import the background image

const images = [activities1, reel, activities2]; // Array of images

const Helpline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatically slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative min-h-[70svh] h-fit w-screen py-10 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-4 md:mx-10">
        <div className="flex flex-col items-center justify-center md:flex-row mt-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center p-3 md:p-5">
            Activities and Initiatives
          </h1>
        </div>

        {/* Image Slider */}
        <div className="relative flex justify-center items-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 z-20 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
          >
            &lt;
          </button>

          <div className="w-full h-[400px] md:h-[600px] flex justify-center items-center relative overflow-hidden">
            <AnimatePresence>
              <motion.div
                key={currentIndex}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute w-full h-full flex justify-center items-center"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Activity ${currentIndex + 1}`}
                  className="object-contain w-auto h-[80%]" // Ensures image scales with container
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 z-20 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
          >
            &gt;
          </button>
        </div>

        {/* Dots for navigation */}
        <div className="flex justify-center mt-5 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Helpline;
