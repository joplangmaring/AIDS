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
      <div className="flex flex-col md:flex-row items-center justify-between py-4 px-4 bg-white overflow-hidden">
        {/* Left Logo */}
        <div className="flex w-1/3 md:w-[10%] justify-center md:justify-start">
          <Image src={naco} alt="NACO Logo" className="h-auto w-full object-contain" />
        </div>

        {/* Center Text */}
        <div className="flex flex-col w-full md:w-[70%] text-center md:text-left mt-4 md:mt-0">
          <h1 className="text-xl md:text-4xl font-semibold">Department of Health and Family Welfare</h1>
          <h2 className="text-lg md:text-2xl font-semibold text-red-600">Government of Meghalaya</h2>
        </div>

        {/* Right Logos */}
        <div className="flex w-1/3 md:w-[6%] justify-center lg:justify-end gap-6 md:gap-10 mt-4 md:mt-0">
          <Image src={meglogo} alt="Meghalaya Government Logo" className="h-auto w-full object-contain" />
          <Image src={Meghalogo} alt="Meghalaya AIDS Logo" className="h-auto w-full object-contain" />
        </div>
      </div>

      <div className="border-b-[1px] border-gray-500"></div>

      {/* Chief Minister and Health Minister Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mx-7 my-3">
        <div className="flex items-center mb-6 md:mb-0">
          <Image src={conrad} alt="Chief Minister" className="w-16 h-16 md:w-28 md:h-28 object-cover rounded-full" />
          <div className="ml-4">
            <h1 className="font-bold">Chief Minister of Meghalaya</h1>
            <h1>Shri Conrad K. Sangma</h1>
          </div>
        </div>

        <div className="flex items-center mb-6 md:mb-0">
          <Image src={femaleboss} alt="Health Minister" className="w-16 h-16 md:w-28 md:h-28 object-cover rounded-full" />
          <div className="ml-4 md:text-left">
            <h1 className="font-bold">Minister of Health & Family Welfare</h1>
            <h1>Dr. Mazel Ampareen Lyngdoh</h1>
          </div>
        </div>

        <div className="flex items-center flex-col leading-none">
          <h1 className="text-[#FE0300] font-bold text-[36px] md:text-[64px] m-0 p-0">1092</h1>
          <h1 className="m-0 p-0 font-semibold text-center">Call for help</h1>
        </div>
      </div>

      {/* Navbar Section */}
      <header className="flex w-full justify-between items-center py-3 px-4 md:px-8 bg-[#FE0300] text-white">
        <div>
          <Link href="/" className="cursor-pointer">
            <Image
              src={Meghalogo}
              alt="Logo"
              height={40}
              width={40}
              className="hidden md:block"
            />
            <Image
              src={Meghalogo}
              alt="Logo"
              height={50}
              width={50}
              className="block md:hidden mx-3"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex text-sm space-x-6">
          {["ABOUT US", "NACP", "DIVISIONS", "LIVING WITH HIV/AIDS", "MACS IN ACTION", "HIV/AIDS ACTS", "TENDER AND ADVERTISEMENT"].map((item) => (
            <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} key={item} className="cursor-pointer font-playfair text-[14px] hover:text-gray-300 hover:scale-105 duration-100">
              {item}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden fixed inset-0 ${menuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-700 ease-in-out bg-red-800 z-30`}>
          <div className="flex justify-end p-6">
            <button onClick={() => setMenuOpen(false)} className="focus:outline-none">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col items-center space-y-5 mt-8">
            {["ABOUT US", "NACP", "DIVISIONS", "LIVING WITH HIV/AIDS", "MACS IN ACTION", "HIV/AIDS ACTS", "TENDER AND ADVERTISEMENT"].map((item) => (
              <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} key={item} onClick={() => setMenuOpen(false)} className="text-white text-lg font-playfair cursor-pointer">
                {item}
              </Link>
            ))}
          </div>
        </div>

      </header>
    </>
  );
};
export default Navbar;