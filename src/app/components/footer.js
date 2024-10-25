import React from 'react';
import Image from 'next/image';
import meghalayaicon from '../../assets/aidlogo.png';
import footerlogo from '../../assets/footerlogo.png';


const Footer = () => {
  return (
    <>
      <div className="bg-[#8B0000] text-white py-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5">
          
          {/* Left Section - Icon and Text */}
          <div className="flex items-center mb-5 md:mb-0">
            <Image src={meghalayaicon} alt="Meghalaya AIDS Control Society logo" width={100} height={100} />
            <div className="ml-4">
              <h1 className="text-2xl md:text-3xl font-bold">MEGHALAYA AIDS</h1>
              <h1 className="text-2xl md:text-3xl font-bold">CONTROL SOCIETY</h1>
              <p className="text-xs md:text-sm">Pasteur Hills, Shillong - 793001</p>
            </div>
          </div>

          {/* Right Section - Footer Logo */}
          <div className="flex items-center justify-center">
            <div className="p-2 bg-white">
              <Image src={footerlogo} alt="Footer logo" width={200} height={200} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-black">
        <p className="text-white text-center text-xs md:text-[10px] p-2">
          Copyright © 2024. Meghalaya Aids Control Society
        </p>
      </div>
    </>
  );
};

// export default Footer;

export default Footer;
