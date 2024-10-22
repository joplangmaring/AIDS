import React from 'react';
import Image from 'next/image';
import scanner1 from '../../assets/scanner1.png';
import scanner2 from '../../assets/scanner2.png';
import frame from '../../assets/Frame.png';

const Helpline = () => {
  return (
    <div className='bg-red-800'>
      {/* Main container with responsive padding */}
      <div className='bg-red-800 md:h-[30vh] flex flex-col md:flex-row justify-around px-4 md:px-60'>
        {/* Text Section */}
        <div className='mt-8 md:text-left'>
          <h1 className='font-bold text-white text-2xl md:text-5xl'>
            National Blood Transfusion
          </h1>
          <h1 className='text-2xl md:text-5xl text-white font-bold mt-2'>
            Council (NBTC)
          </h1>
          <div className=' md:w-[50%] mt-4'>
            <p className='text-white text-sm md:text-base  md:px-0'>
              Blood Transfusion Services have to ensure that Blood/Components
              (Whole Blood/ Packed Red Cells/ Plasma/ Platelets) are Available
              (Adequate Blood Collection to fulfill need) Accessible (Enough
              reach where it is needed) Affordable (At reasonable costs) Safe
              (Not cause harm, especially TTI) Of standard quality (Provide
              clinical...
            </p>
            <p className='text-white mt-3 text-sm md:text-base'>read more...</p>
          </div>
        </div>

        {/* Download App Section */}
        <div className='mt-5 md:mt-10 gap-2 md:gap-2 flex flex-row justify-center md:flex-row items-center'>
          <Image src={scanner1} alt="Scanner 1" className='w-[120px] h-[120px] md:w-[150px] md:h-[140px] bg-white'/>
          <Image src={scanner2} alt="Scanner 2" className='w-[120px] h-[120px] md:w-[220px] md:h-[140px]'/>
        </div>
      </div>

      {/* Frame Image Section */}
      <div className='flex items-center justify-center mt-8 md:mt-10'>
        <Image
          src={frame}
          width={300}
          height={150}
          alt="Frame"
          className='w-[200px] md:w-[400px] h-auto'
        />
      </div>
    </div>
  );
};

export default Helpline;
