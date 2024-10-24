import React from 'react';
import Image from 'next/image';
import meghalayaicon from '../../assets/aidlogo.png';
import footerlogo from '../../assets/footerlogo.png';

const Footer = () => {
  return (
    <>
    <div className='bg-[#E0021C] text-white py-3'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-5'>
        
        {/* Left Section - Icon and Text */}
        <div className='flex items-center mb-5 md:mb-0'>
          <Image src={meghalayaicon} alt="Meghalaya AIDS Control Society logo" width={100} height={100} />
          <div className='ml-4'>
            <h1 className='text-3xl font-bold'>MEGHALAYA AIDS</h1>
            <h1 className='text-3xl font-bold'>CONTROL SOCIETY</h1>
            <p className='text-sm'>Pasteur Hills, Shillong - 793001</p>
          </div>
        </div>

        {/* Right Section - Footer Logo */}
        <div className='flex items-center'>
          <div className='p-2 bg-white '>
            <Image src={footerlogo} alt="Footer logo" width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
    <div className='bg-black'>
    <p className='text-white text-center text-[10px] p-2'>Copyright © 2024. Meghalaya Aids Control Society</p>
    </div>

    </>
  );
};

export default Footer;
