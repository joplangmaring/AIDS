'use client'

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Meghalogo from '../../assets/aidlogo.png'; // Adjust the path as necessary
import Link from "next/link";
import naco from '../../assets/naco1.png';
import naco_new from '../../assets/naco_logo_new.png';
import meglogo from '../../assets/meglogo.png';
import health_ministry from '../../assets/Ministry_of_Health_India.png';
import conrad from '../../assets/conrad.png';
import femaleboss from '../../assets/femaleboss.png';



// MUI Icons
import HomeIcon from '@mui/icons-material/Home';


const Navbar = () => {



  const pathname = usePathname()


  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [path, setPath] = useState('')

  const handleDropdownToggle = (item) => {
    if (window.innerWidth < 768) {
      setDropdownOpen((prev) => (prev === item ? "" : item));
    } else {
      setDropdownOpen(item);
    }
  };

  const getParentPath = () => {
    const parentMap = {
      "/": "/",
      "/page/vision-and-value": "about-us",
      "/page/policies-and-guidelines": "about-us",
      "/page/whos-who": "about-us",
      "/page/annual-reports": "about-us",
      "/page/nacp-i": "nacp",
      "/page/nacp-ii": "nacp",
      "/page/nacp-iii": "nacp",
      "/page/nacp-iv-extended": "nacp",
      "/page/nacp-v": "nacp",
      "/page/basic-services": "divisions",
      "/page/ictc-in-the-state": "divisions",
      "/page/blood-safety": "divisions",
      "/page/blood-transfusion": "divisions",
      "/page/licensed-blood-banks": "divisions",
      "/page/sti": "divisions",
      "/page/care-support-and-treatment": "divisions",
      "/page/status": "divisions",
      "/page/art-centres": "divisions",
      "/page/iec": "divisions",
      // "/page/iec-resource-material": "divisions",
      "/page/youth": "divisions",
      "/page/mainstreaming": "divisions",
      "/page/targeted-intervention": "divisions",
      "/page/list-of-tis": "divisions",
      "/page/lab-services": "divisions",
      "/page/strategic-information": "divisions",
      "/page/how-to-achieve-a-healthy-living-by-care-support-treatment": "living-with-hivaids",
      "/page/nutrition": "living-with-hivaids",
      "/page/art-treatment": "living-with-hivaids",
      "/page/importance-of-the-treatment": "living-with-hivaids",
      "/page/involvement-of-plhiv-in-the-community": "living-with-hivaids",
      "/page/events": "macs-in-action",
      "/page/campaigns": "macs-in-action",
      "/page/hivaids-acts": "hivaids-act",
      "/page/tenders-ads": "tender-and-advertisement",
      "/page/contact-us": "contact",
    };
    return parentMap[pathname] || "";
  };

  useEffect(() => {
    let value = getParentPath()
    setPath(value)
  }, [pathname])



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
    {
      name: "NACP", dropdown: [
        { title: "NACP I" },
        { title: "NACP II" },
        { title: "NACP III" },
        { title: "NACP IV Extended" },
        { title: "NACP V" }
      ]
    },
    { name: "DIVISIONS", dropdown: ["Basic Services", "ICTC in the state", "Blood Safety", "Blood Transfusion", "Licensed Blood Banks", "STI", "Care, Support and Treatment", "STATUS", "ART centres", "IEC", "Youth", "Mainstreaming", "Targeted Intervention", "List of TIs", "Lab Services", "Strategic Information"] },
    { name: "LIVING WITH HIV/AIDS", dropdown: ["How to achieve a healthy living by ‘Care, Support & Treatment’", "Nutrition", "ART Treatment", "Importance of the treatment", "Involvement of PLHIV in the community"] },
    { name: "MACS IN ACTION", dropdown: ["Events", "Campaigns"] },
    { name: "HIV/AIDS ACTS", dropdown: ["HIV/AIDS ACT"] },
    { name: "TENDER AND ADVERTISEMENT", dropdown: ["Tenders & Ads"] },
    { name: "GRIEVANCE REDRESSAL", dropdown: ["Grievance Redressal"] },
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
          <h1 className="text-lg leading-5 md:text-3xl font-black uppercase">Meghalaya Aids Control Society</h1>
          <h1 className="text-xs md:text-lg font-medium mt-1">Department of Health and Family Welfare</h1>
          <h2 className="text-xs md:text-xs -mt-1 text-red-600">Government of Meghalaya</h2>
        </div>

        {/* Right Logos */}
        <div className="md:flex hidden w-1/3 md:w-[6%] justify-center lg:justify-end gap-6 md:gap-10 mt-4 md:mt-0">
          <Image src={health_ministry} width='0' height='0' sizes="100vw" alt="Meghalaya Government Logo" className="md:h-auto md:w-[200%] scale-150 mr-4 h-1/2 w-1/2 object-contain" />
          <Image src={meglogo} alt="Meghalaya Government Logo" className="md:h-auto md:w-full h-1/2 w-1/2 object-contain" />
          <Image src={Meghalogo} alt="Meghalaya AIDS Control Society Logo" className="md:h-auto md:w-full h-1/2 w-1/2 object-contain" />
        </div>
      </div>

      <div className="border-b-[1px] border-gray-500"></div>

      <div className="md:hidden flex w-screen justify-between px-5 lg:justify-end items-center gap-6 md:gap-10 my-2 md:mt-0">
          <Image src={health_ministry} width='0' height='0' sizes="100vw" alt="Meghalaya Government Logo" className="h-[40px] w-auto object-contain" />
          <div className="flex flex-row gap-5">
            <Image src={meglogo} alt="Meghalaya Government Logo" className="h-[50px] w-auto object-contain" />
            <Image src={Meghalogo} alt="Meghalaya AIDS Control Society Logo" className="h-[50px] w-auto object-contain" />
          </div>
      </div>

      <header className={`flex w-full md:justify-center justify-between items-center px-4 md:px-8 transition-colors duration-500 bg-[#8B0000] text-white`}>
        {/* <div>
          <Link href="/" className="cursor-pointer">
            <Image
              src={Meghalogo}
              alt="Logo"
              height={35}
              width={35}
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
        </div> */}
        <div className="md:hidden">
          <Image
            src={Meghalogo}
            alt="Logo"
            height={50}
            width={50}
            className="block md:hidden mx-3 py-2"
          />
        </div>
        <div className="hidden md:flex text-sm z-50 items-center">
          <Link href='/' className={`h-[40px] w-[60px] flex items-center justify-center ${path == '/' ? "bg-black" : "bg-none"}`}>
            <HomeIcon />
          </Link>
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group dropdown-area scrollbar-none"
              onMouseLeave={handleMouseLeave}
            >
              <button
                onMouseEnter={() => window.innerWidth >= 768 && handleDropdownToggle(item.name)}
                onClick={() => window.innerWidth < 768 && handleDropdownToggle(item.name)}
                className={`cursor-pointer font-playfair text-[14px] duration-100 text-md hover:bg-black h-[40px] px-5 ${dropdownOpen === item.name || path === sanitizeLinkName(item.name.toLowerCase()) ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
              >
                {item.name}
              </button>
              {dropdownOpen === item.name && (
                <div className="absolute z-10 mt-0 w-48 bg-black text-white shadow-lg">
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
        <div className="md:hidden flex mx-3">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden fixed inset-0 bg-red-800 z-30 p-6 px-20 pt-20 flex flex-col items-center space-y-5">
            {/* Close Button */}
            <div className="w-full flex justify-end mb-4">
              <button onClick={() => setMenuOpen(false)} className="focus:outline-none">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <Link href='/' className="text-white text-xl font-medium text-left w-full">HOME</Link>

            {navItems.map((item, index) => (
              <div key={index} className="w-full">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="block text-white text-lg font-medium text-left"
                >
                  {item.name}
                </button>
                {dropdownOpen === item.name && (
                  <div className="w-full max-h-[50vh] overflow-scroll bg-black text-white shadow-lg">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={`/page/${sanitizeLinkName(subItem.title || subItem)}`}
                        className="block px-4 py-2 text-left hover:bg-gray-800"
                        onClick={() => {
                          setDropdownOpen("");
                          setMenuOpen(false);
                        }}
                      >
                        {subItem.title || subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </header>
    </>
  );
};

export default Navbar;

