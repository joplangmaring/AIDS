import React from "react";
import Image from "next/image";
import activities1 from "../../assets/activities1.png";
import reel from "../../assets/reel.png";
import activities2 from "../../assets/actvities2.png";
import aboutsm from "../../assets/activitiesmain.png";
import rebon from "../../assets/rebn2.png";
import smallrebon from "../../assets/circle.png";


const Helpline = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="flex">
        <Image
          src={rebon}
          alt="Rebon background"
          className="w-full h-[90vh] object-cover"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 mx-4 md:mx-10">
        <div className="flex flex-col items-center justify-center md:flex-row mt-10">
          <h1 className="text-3xl md:text-5xl font-bold text-red-800 text-center p-3 md:p-5">
            Activities and
            <br className="hidden md:block" />{" "}
            {/* Line break for larger screens */}
            Initiatives
          </h1>
        </div>

        <div className="block md:hidden mt-8 w-full ">
          <Image
            src={aboutsm}
            alt="About small"
            className="w-3/4 sm:w-1/2 max-h-96 sm:max-h-72 object-contain mx-auto"
          />
        </div>

        {/* Desktop View Images */}
        <div className="hidden md:flex flex-col sm:flex-row justify-center items-center mt-5">
          {/* First Image */}
          <div className="flex justify-center items-center mx-2">
            <Image
              src={activities1}
              alt="Activity 1"
              layout="intrinsic"
              width={400}
              height={300}
              className="w-[80px] sm:w-[200px] md:w-[300px] lg:w-[400px]" 
            />
          </div>

          {/* Second Image */}
          <div className="flex justify-center items-center mx-2">
            <Image
              src={reel}
              alt="Reel"
              layout="intrinsic"
              width={400}
              height={300}
              className="w-[80px] sm:w-[200px] md:w-[300px] lg:w-[400px]"
            />
          </div>

          {/* Third Image */}
          <div className="flex justify-center items-center mx-2 ">
            <Image
              src={activities2}
              alt="Activity 2"
              layout="intrinsic"
              width={400}
              height={300}
              className="w-[80px] sm:w-[200px] md:w-[300px] lg:w-[400px]"
            />
          </div>
        </div>
      </div>

      <div className="border-b-[1px] border-gray-500"></div>
    </div>
  );
};

export default Helpline;
