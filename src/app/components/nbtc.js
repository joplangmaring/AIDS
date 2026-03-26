import React from 'react';
import Image from 'next/image';
import scanner1 from '../../assets/scanner1.png';
import scanner2 from '../../assets/scanner2.png';
import frame from '../../assets/Frame.png';
import Link from 'next/link';

const Nbtc = () => {
  return (
    <div className="bg-gray-50 py-14 md:py-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-5 md:px-12">
        {/* Top row: Text + QR codes */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Text */}
          <div className="flex-1">
            <h1 className="font-bold text-gray-900 text-2xl md:text-3xl lg:text-4xl leading-tight">
              National Blood Transfusion{' '}
              Council <span className="text-brand">(NBTC)</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed max-w-xl">
              Blood Transfusion Services have to ensure that Blood/Components
              (Whole Blood/ Packed Red Cells/ Plasma/ Platelets) are Available
              (Adequate Blood Collection to fulfill need), Accessible (Enough
              reach where it is needed), Affordable (At reasonable costs), Safe
              (Not cause harm, especially TTI), and Of standard quality.
            </p>
            <Link
              href='http://naco.gov.in/national-blood-transfusion-council-nbtc-0'
              className="inline-block mt-5 text-white text-sm md:text-base bg-brand hover:bg-brand-dark py-2.5 px-6 rounded-md transition-colors duration-200"
            >
              Read more
            </Link>

            {/* QR Codes - inline with text on desktop */}
            <div className="flex flex-row items-start gap-5 mt-8">
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 w-[120px] h-[120px] md:w-[130px] md:h-[130px] flex items-center justify-center">
                  <Image
                    src={scanner1}
                    alt="Android App QR"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-gray-500 text-[11px] mt-1.5">Android App</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 w-[120px] h-[120px] md:w-[130px] md:h-[130px] flex items-center justify-center">
                  <Image
                    src={scanner2}
                    alt="iOS App QR"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-gray-500 text-[11px] mt-1.5">iOS App</span>
              </div>
            </div>
          </div>

          {/* Illustration - anchored to bottom right on desktop */}
          <div className="hidden lg:block flex-shrink-0 self-end mb-[-100px]">
            <Image
              src={frame}
              alt="People standing together"
              className="w-[420px] xl:w-[500px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Illustration - mobile/tablet, anchored to bottom */}
        <div className="lg:hidden flex justify-center mt-6 mb-[-56px]">
          <Image
            src={frame}
            alt="People standing together"
            className="w-[280px] sm:w-[360px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Nbtc;
