import React from 'react';
import Image from 'next/image';
import background from '../../assets/backaid.png';


const AidNumber = () => {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
        {/* Background Image */}
        <Image
          src={background}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 z-0"
        />
        <div className="relative z-10 text-center p-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#FE0300] font-bold mb-4">
            HIV AIDS BY NUMBERS
          </h1>
          <p className="text-xs sm:text-base md:text-lg mb-2" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            The pace of progress in reducing new HIV infections,
          </p>
          <p className="text-xs sm:text-base md:text-lg mb-8" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            increasing access to treatment and ending AIDS-related deaths is slowing down. See the latest data on HIV
          </p>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-center gap-10 mt-10 mb-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">1.7</h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              Million People
            </h1>
            <p className="text-xs sm:text-base md:text-lg" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              People were newly infected with HIV in 2019
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">39</h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              Million People
            </h1>
            <p className="text-xs sm:text-base md:text-lg" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              People were newly infected with HIV in 2019
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">690</h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              Thousand People
            </h1>
            <p className="text-xs sm:text-base md:text-lg" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              People were newly infected with HIV in 2019
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-[#000000D9] z-0"></div>
      </div>
    );
  };
  
export default AidNumber;
