import React from 'react';
import Image from 'next/image';
import meghalayaicon from '../../assets/aidlogo.png';
import footerlogo from '../../assets/footerlogo.png';

const Footer = () => {
  return (
    <>
      <div className="bg-brand text-white py-6 md:py-8">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-5 md:px-12 gap-5">
          {/* Left Section */}
          <div className="flex items-center">
            <Image src={meghalayaicon} alt="Meghalaya AIDS Control Society logo" width={80} height={80} />
            <div className="ml-4">
              <h1 className="text-xl md:text-2xl font-bold leading-tight">MEGHALAYA AIDS</h1>
              <h1 className="text-xl md:text-2xl font-bold leading-tight">CONTROL SOCIETY</h1>
              <p className="text-xs md:text-sm text-white/70 mt-1">Pasteur Hills, Shillong - 793001</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center">
            <div className="p-2 bg-white rounded-md">
              <Image src={footerlogo} alt="Footer logo" width={180} height={180} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-950">
        <p className="text-white/60 text-center text-xs py-2.5">
          Copyright &copy; {new Date().getFullYear()}. Meghalaya Aids Control Society
        </p>
      </div>
    </>
  );
};

export default Footer;
