'use client';

import React, { useState } from "react";
import Image from "next/image";
import Meghalogo from '../../assets/aidlogo.png'; // Adjust the path as necessary
import Link from "next/link";
import naco from '../../assets/naco1.png';
import meglogo from '../../assets/meglogo.png';
import conrad from '../../assets/conrad.png';
import femaleboss from '../../assets/femaleboss.png'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between py-4 px-4 bg-white">
        {/* Left Logo */}
        <div className="flex w-[10%]">
          <Image src={naco} alt="NACO Logo" className="h-auto w-full object-contain" />
        </div>

        {/* Center Text */}
        <div className="flex  flex-col w-[70%] ">
          <div>
            <h1 className="text-4xl font-semibold">Department of Health and Family Welfare</h1>
            <h2 className="text-md font-semibold text-2xl text-red-600">Government of Meghalaya</h2>
          </div>
        </div>

        {/* Right Logos */}
        <div className="flex w-[6%] justify-end gap-10">
          <Image src={meglogo} alt="Meghalaya Government Logo" className="h-auto w-full object-contain" />
          <Image src={Meghalogo} alt="Meghalaya AIDS Logo" className="h-auto w-full object-contain" />
        </div>
      </div>
      <div className="border-b-[1px] border-gray-500"></div>


      <div className="flex justify-between mx-7 my-3">
        <div className="flex items-center">
          <Image src={conrad} alt="" className="w-28 h-28 object-cover rounded-full" />
          <div className="ml-4">
            <h1 className="font-bold">Chief Minister of Meghalaya</h1>
            <h1>Shri Conrad K. Sangma</h1>
          </div>
        </div>

        <div className="flex items-center mr-[25%]">
          <Image src={femaleboss} alt="" className="w-28 h-28 object-cover rounded-full" />
          <div className="ml-4">
            <h1 className="font-bold">Minister of Health & Family</h1>
            <h1 className='font-bold'>Welfare, Meghalaya</h1>
            <h1>Dr. Mazel Ampareen Lyngdoh</h1>
          </div>
        </div>


        <div className="flex items-center flex-col leading-none">
          <h1 className="text-[#8B0000] font-bold text-[64px] m-0 p-0">1092</h1>
          <h1 className="m-0 p-0 font-semibold">Call for help</h1>
        </div>


      </div>



      <header className={`flex w-full justify-between items-center py-1 px-4 md:px-8 transition-colors duration-500 bg-[#8B0000] text-white`}>
        <div>
          <Link href="/" className="cursor-pointer">
            <Image
              src={Meghalogo}
              alt="Logo"
              height={60}
              width="auto"
              className="hidden md:block"
            />
            <Image
              src={Meghalogo}
              alt="Logo"
              height={70}
              width="auto"
              className="block md:hidden mx-3"
            />
          </Link>
        </div>
        <div className="hidden md:flex text-sm space-x-10">
          <Link href="/about" className="cursor-pointer font-playfair text-[16px] hover:text-gray-300 hover:scale-105 duration-100 text-md">
            ABOUT US
          </Link>
          <Link href="/nacp" className="cursor-pointer font-playfair text-[16px] hover:text-gray-300 hover:scale-105 duration-100 text-md">
            NACP
          </Link>
          <Link href="/divisions" className="cursor-pointer font-playfair text-[16px] hover:text-gray-300 hover:scale-105 duration-100 text-md">
            DIVISIONS
          </Link>
          <Link href="/living-with-hiv" className="cursor-pointer font-playfair text-[16px] hover:text-gray-300 hover:scale-105 duration-100 text-md">
            LIVING WITH HIV/AIDS
          </Link>
          <Link href="/macs-in-action" className="cursor-pointer font-playfair text-[16px] hover:text-gray-300 hover:scale-105 duration-100 text-md">
            MACS IN ACTION
          </Link>
          <Link href="/hiv-aids-acts" className="cursor-pointer font-playfair text-[16px] hover:text-gray-300 hover:scale-105 duration-100 text-md">
            HIV/AIDS ACTS
          </Link>
          <Link href="/tender-and-advertisement" className="cursor-pointer font-playfair text-[16px] hover:text-gray-300 hover:scale-105 duration-100 text-md">
            TENDER AND ADVERTISEMENT
          </Link>
          <Link href="/tender-and-advertisement" className="cursor-pointer font-playfair text-[16px] hover:text-gray-300 hover:scale-105 duration-100 text-md">
            CONTACT
          </Link>
        </div>
        <div className="md:hidden flex my-auto mx-5">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className={`w-6 h-6 text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className={`md:hidden fixed inset-0 ${menuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out bg-red-800 z-30`}>
          <div className="flex justify-end p-11">
            <button onClick={() => setMenuOpen(false)} className="focus:outline-none">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center space-y-5 mt-8">
            <Link href="/about" className="text-white text-lg font-playfair cursor-pointer" onClick={() => setMenuOpen(false)}>
              ABOUT US
            </Link>
            <Link href="/nacp" className="text-white text-lg font-playfair cursor-pointer" onClick={() => setMenuOpen(false)}>
              NACP
            </Link>
            <Link href="/divisions" className="text-white text-lg font-playfair cursor-pointer" onClick={() => setMenuOpen(false)}>
              DIVISIONS
            </Link>
            <Link href="/living-with-hiv" className="text-white text-lg font-playfair cursor-pointer" onClick={() => setMenuOpen(false)}>
              LIVING WITH HIV/AIDS
            </Link>
            <Link href="/macs-in-action" className="text-white text-lg font-playfair cursor-pointer" onClick={() => setMenuOpen(false)}>
              MACS IN ACTION
            </Link>
            <Link href="/hiv-aids-acts" className="text-white text-lg font-playfair cursor-pointer" onClick={() => setMenuOpen(false)}>
              HIV/AIDS ACTS
            </Link>
            <Link href="/tender-and-advertisement" className="text-white text-lg font-playfair cursor-pointer" onClick={() => setMenuOpen(false)}>
              TENDER AND ADVERTISEMENT
            </Link>
            <Link href="/tender-and-advertisement" className="text-white text-lg font-playfair cursor-pointer" onClick={() => setMenuOpen(false)}>
              CONTACT
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;