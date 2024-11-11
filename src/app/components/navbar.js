'use client'

import React, { useState } from "react";
import Image from "next/image";
import Meghalogo from '../../assets/aidlogo.png'; // Adjust the path as necessary
import Link from "next/link";
import naco from '../../assets/naco1.png';
import naco_new from '../../assets/naco_logo_new.png';
import meglogo from '../../assets/meglogo.png';
import conrad from '../../assets/conrad.png';
import femaleboss from '../../assets/femaleboss.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");

  const handleDropdownToggle = (item) => {
    if (window.innerWidth < 768) {
      setDropdownOpen((prev) => (prev === item ? "" : item));
    } else {
      setDropdownOpen(item);
    }
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!document.querySelector('.dropdown-area:hover')) {
        setDropdownOpen("");
      }
    }, 100);
  };

  const sanitizeLinkName = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
  };

  const navItems = [
    { name: "ABOUT US", dropdown: ["Vision and Value", "Policies and Guidelines", "Who's Who", "Annual Reports"] },
    { name: "NACP", dropdown: [
      { title: "NACP I", color: "#FFCCCC" },
      { title: "NACP II", color: "#CCFFCC" },
      { title: "NACP III", color: "#CCCCFF" },
      { title: "NACP IV Extended", color: "#FFD700" }
    ]},
    { name: "DIVISIONS", dropdown: ["Basic Services", "ICTC in the state", "Blood Safety", "Blood Transfusion", "Licensed Blood Banks", "STI", "Care, Support and Treatment", "STATUS", "ART centres", "IEC", "IEC Resource Material", "Youth", "Mainstreaming", "Targeted Intervention", "List of TIs", "Lab Services", "Strategic Information"] },
    { name: "LIVING WITH HIV/AIDS", dropdown: ["How to achieve a healthy living by ‘Care, Support & Treatment’", "Nutrition", "Healthy Diet", "ART Treatment", "Importance of the treatment", "Involvement of PLHIV in the community", "Grievance Redressal"] },
    { name: "MACS IN ACTION", dropdown: ["Events", "Campaigns", "Stories"] },
    { name: "HIV/AIDS ACTS", dropdown: ["HIV/AIDS Acts"] },
    { name: "TENDER AND ADVERTISEMENT", dropdown: ["Tenders & Ads"] },
    { name: "CONTACT", dropdown: ["Contact Us"] },
  ];

  return (
    <>
      <div className="flex md:flex-row items-center justify-between py-4 px-4 bg-white overflow-hidden">
        {/* Left Logo */}
        <div className="flex w-1/2 md:w-[10%] justify-center md:justify-start">
          <Image src={naco_new} alt="NACO Logo" className="h-auto w-full object-contain" />
        </div>

        {/* Center Text */}
        <div className="flex flex-col w-full md:w-[70%] md:text-left md:mt-0 px-5">
          <h1 className="text-md md:text-4xl font-bold">Department of Health and Family Welfare</h1>
          <h2 className="text-sm md:text-2xl font-semibold text-red-600">Government of Meghalaya</h2>
        </div>

        {/* Right Logos */}
        <div className="md:flex hidden w-1/3 md:w-[6%] justify-center lg:justify-end gap-6 md:gap-10 mt-4 md:mt-0">
          <Image src={meglogo} alt="Meghalaya Government Logo" className="md:h-auto md:w-full h-1/2 w-1/2 object-contain" />
          <Image src={Meghalogo} alt="Meghalaya AIDS Logo" className="md:h-auto md:w-full h-1/2 w-1/2 object-contain" />
        </div>
      </div>

      <div className="border-b-[1px] border-gray-500"></div>

      <header className={`flex w-full justify-between items-center py-1 px-4 md:px-8 transition-colors duration-500 bg-[#8B0000] text-white`}>
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
        <div className="hidden md:flex text-sm space-x-10 z-50">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group dropdown-area"
              onMouseLeave={handleMouseLeave}
            >
              <button
                onMouseEnter={() => window.innerWidth >= 768 && handleDropdownToggle(item.name)}
                onClick={() => window.innerWidth < 768 && handleDropdownToggle(item.name)}
                className="cursor-pointer font-playfair text-[16px] hover:text-gray-300 hover:scale-105 duration-100 text-md"
              >
                {item.name}
              </button>
              {dropdownOpen === item.name && (
                <div className="absolute z-10 mt-2 w-48 bg-black max-h-[50vh] overflow-scroll text-white shadow-lg">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={`/page/${sanitizeLinkName(subItem.title || subItem)}`}
                      className="block px-4 py-2 hover:bg-[#8B0000]"
                      style={{
                        color: subItem.color || 'white'
                      }}
                      onClick={() => setDropdownOpen("")}
                    >
                      {subItem.title || subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
      </header>
    </>
  );
};

export default Navbar;
