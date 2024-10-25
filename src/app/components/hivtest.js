"use client";
import { useEffect, useRef } from "react";
import hivtesting from "../../assets/test.png";
import hand from "../../assets/hand.png";
import treat from "../../assets/treat.png";
import consultan from "../../assets/prevention.png";
import Image from "next/image";
import background from "../../assets/backgroundhiv.png";

const HivTest = () => {
  const scrollContainerRef = useRef(null);

  // useEffect(() => {
  //   const scrollContainer = scrollContainerRef.current;
  //   const scrollStep = 1;
  //   const scrollDelay = 30;

  //   const scrollInterval = setInterval(() => {
  //     if (scrollContainer) {
  //       scrollContainer.scrollTop += scrollStep;
        
  //       // Stop scrolling when reaching the end
  //       if (
  //         scrollContainer.scrollTop >=
  //         scrollContainer.scrollHeight - scrollContainer.clientHeight
  //       ) {
  //         clearInterval(scrollInterval); // Clear the interval to stop scrolling
  //       }
  //     }
  //   }, scrollDelay);

  //   return () => clearInterval(scrollInterval);
  // }, []);

  return (
    <div className="relative flex flex-col lg:flex-row justify-center lg:gap-32 gap-8 px-4 lg:px-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background.src})` }}
      />
      <div className="absolute inset-0 bg-[#000000B2] z-0" />

      {/* Cards */}
      <div className="flex justify-center items-center p-4 z-10 my-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
          {[
            { src: hivtesting, label1: "HIV", label2: "TESTING" },
            { src: consultan, label1: "HIV", label2: "PREVENTION" },
            { src: treat, label1: "HIV", label2: "TREATMENT" },
            { src: hand, label1: "HIV STIGMA", label2: "Discrimination" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between text-center p-2 rounded-md shadow-md w-full"
            >
              <Image
                src={item.src}
                alt={item.label1}
                width={208}
                height={208}
                className="bg-white object-contain h-52 w-full rounded-t-2xl shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
              />
              <div className="bg-red-800 w-full flex flex-col rounded-b-2xl p-2">
                <span className="text-white text-sm">{item.label1}</span>
                <span className="text-white text-sm">{item.label2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Content */}
      <div className="w-full lg:w-1/3 z-10 mt-8 lg:mt-16 lg:mr-28">
        <div className="flex gap-4 justify-center">
          <span className="bg-[#8B0000] px-4 lg:px-6 py-2 text-white text-lg lg:text-2xl rounded-t-[6px]">
            News
          </span>
          <span className="bg-[#8B0000] px-4 lg:px-6 py-2 text-white text-lg lg:text-2xl rounded-t-[6px]">
            Tenders
          </span>
          <span className="bg-[#8B0000] px-4 lg:px-6 py-2 text-white text-lg lg:text-2xl rounded-t-[6px]">
            Recruitment
          </span>
        </div>
        <div
          ref={scrollContainerRef}
          className="bg-[#f3f0f0] p-4 h-[300px] lg:h-[500px] overflow-y-auto"
        >
          {[...Array(8)].map((_, idx) => (
            <div key={idx} className="mx-4 lg:mx-10">
              <h1 className="font-bold">
                ADVERTISEMENT FOR NON-FACULTY POSITION
              </h1>
              <p className="text-sm text-gray-600">Uploaded on 21 Oct 2024</p>
              <div className="w-full border-b-[2px] my-5 border-black"></div>
            </div>
          ))}
          <div className="flex justify-end mt-10">
            <h1 className="bg-[#E0021C] px-2 py-2 text-white w-[50%] lg:w-[30%] text-center">
              All Recruitment
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HivTest;
