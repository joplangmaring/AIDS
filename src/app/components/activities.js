import React from 'react';
import Image from 'next/image';
import activities1 from '../../assets/activities1.png';
import reel from '../../assets/reel.png';
import activities2 from '../../assets/actvities2.png';
import aboutsm from '../../assets/activitiesmain.png';
import rebon from '../../assets/rebn2.png';
import smallrebon from '../../assets/circle.png'

const Helpline = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="flex">
          {/* Background Image */}
          <Image src={rebon} alt="Rebon background" className="w-[900%] md:w-[80%] h-[90vh] md:h-auto" />
        </div>

      {/* Content */}
      <div className=" absolute inset-0 z-10 mx-10 md:absolute md:inset-7 md:z-10 md:mt-[10%]">
       <div className='flex  flex-col items-center justify-center md:flex-row m-5'>
         <h1 className='text-3xl md:text-5xl font-bold  text-red-800'>Activities and</h1>
         <h1 className='text-3xl md:text-5xl font-bold  text-red-800'>Initiatives</h1>
       </div>
        {/* Mobile View Image */}
        <div className='block md:hidden'>
          <Image src={aboutsm} alt="" />
        </div>

        {/* Desktop View Images */}
        <div className='flex flex-col sm:flex-row justify-center items-center hidden md:flex'>
          {/* First Image */}
          <div className='flex justify-center items-center'>
            <Image
              src={activities1}
              alt="Activity 1"
              layout="intrinsic" // Switch to "intrinsic" for better control
              width='auto' // Set small width
              height='auto' // Set corresponding height for correct aspect ratio
              className="w-[80px] sm:w-[400px]" // Adjust the width according to the screen size
            />
          </div>

          {/* Second Image */}
          <div className='flex justify-center items-center'>
            <Image
              src={reel}
              alt="Reel"
              layout="intrinsic"
              width='auto'
              height='auto'
              className="w-[80px] sm:w-[400px]"
            />
          </div>

          {/* Third Image */}
          <div className='flex justify-center items-center'>
            <Image
              src={activities2}
              alt="Activity 2"
              layout="intrinsic"
              width='auto'
              height='auto'
              className="w-[80px] sm:w-[400px]"
            />
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-gray-500"></div>
    </div>
  );
};

export default Helpline;
