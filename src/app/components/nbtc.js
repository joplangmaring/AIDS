import React from 'react';
import Image from 'next/image';
import scanner1 from '../../assets/scanner1.png';
import scanner2 from '../../assets/scanner2.png';
import frame from '../../assets/Frame.png';
import appSectionBg from '../../assets/app_section.jpg'; // Import background image
import Link from 'next/link';

const Helpline = () => {
  return (
    <div
      className="relative bg-[#8B0000] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${appSectionBg.src})`,
        backdropFilter: 'blur(4px)', // Applies a small blur effect
      }}
    >
      {/* Overlay for better contrast */}
      <div className="bg-black/60">
        {/* Main container with responsive padding */}
        <div className="md:h-[30vh] flex flex-col md:flex-row justify-around px-6 py-10 md:px-32">
          {/* Text Section */}
          <div className="mt-8 md:text-left">
            <h1 className="font-black text-white text-2xl md:text-4xl">
              National Blood Transfusion
            </h1>
            <h1 className="text-2xl md:text-4xl text-white font-black mt-2">
              Council (NBTC)
            </h1>
            <div className="mt-4">
              <p className="text-white text-sm md:text-base lg:w-[50%] mb-5">
                Blood Transfusion Services have to ensure that Blood/Components
                (Whole Blood/ Packed Red Cells/ Plasma/ Platelets) are Available
                (Adequate Blood Collection to fulfill need), Accessible (Enough
                reach where it is needed), Affordable (At reasonable costs), Safe
                (Not cause harm, especially TTI), and Of standard quality (Provide
                clinical...
              </p>
              <Link href='http://naco.gov.in/national-blood-transfusion-council-nbtc-0' className="text-white mt-3 text-sm md:text-base bg-[#8b0000] py-2 px-4 rounded-md">Read more</Link>
            </div>
          </div>

          {/* Download App Section */}
          <div className="mt-5 md:mt-10 flex flex-col md:flex-row justify-center items-center gap-10 p-20">
            <Image
              src={scanner1}
              alt="Scanner 1"
              className="w-[200px] h-auto md:w-[200px] md:h-auto bg-white"
            />
            <Image
              src={scanner2}
              alt="Scanner 2"
              className="w-[200px] h-auto md:w-[200px] md:h-auto"
            />
          </div>
        </div>

        {/* Frame Image Section */}
        <div className="flex items-center justify-center -mt-10 md:mt-10">
          <Image
            src={frame}
            width={300}
            height={150}
            alt="Frame"
            className="w-[300px] md:w-[300px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Helpline;
