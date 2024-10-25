import React from 'react';
import Image from 'next/image';
import scanner1 from '../../assets/scanner1.png';
import scanner2 from '../../assets/scanner2.png';
import frame from '../../assets/Frame.png';


const Helpline = () => {
  return (
    <div className="bg-[#FE0300]">
      {/* Main container with responsive padding */}
      <div className="bg-[#FE0300] md:h-[30vh] flex flex-col md:flex-row justify-around px-6 md:px-32">
        {/* Text Section */}
        <div className="mt-8 text-center md:text-left">
          <h1 className="font-bold text-white text-2xl md:text-4xl">
            National Blood Transfusion
          </h1>
          <h1 className="text-2xl md:text-4xl text-white font-bold mt-2">
            Council (NBTC)
          </h1>
          <div className="mt-4">
            <p className="text-white text-sm md:text-base lg:w-[50%]">
              Blood Transfusion Services have to ensure that Blood/Components
              (Whole Blood/ Packed Red Cells/ Plasma/ Platelets) are Available
              (Adequate Blood Collection to fulfill need), Accessible (Enough
              reach where it is needed), Affordable (At reasonable costs), Safe
              (Not cause harm, especially TTI), and Of standard quality (Provide
              clinical...
            </p>
            <p className="text-white mt-3 text-sm md:text-base">read more...</p>
          </div>
        </div>

        {/* Download App Section */}
        <div className="mt-5 md:mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
          <Image
            src={scanner1}
            alt="Scanner 1"
            className="w-[100px] h-[100px] md:w-[120px] md:h-[100px] bg-white"
          />
          <Image
            src={scanner2}
            alt="Scanner 2"
            className="w-[100px] h-[100px] md:w-[120px] md:h-[100px]"
          />
        </div>
      </div>

      {/* Frame Image Section */}
      <div className="flex items-center justify-center mt-8 md:mt-10">
        <Image
          src={frame}
          width={300}
          height={150}
          alt="Frame"
          className="w-[150px] md:w-[300px] h-auto"
        />
      </div>
    </div>
  );
};


export default Helpline;
