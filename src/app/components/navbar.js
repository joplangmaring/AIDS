'use client'

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Meghalogo from '../../assets/aidlogo.png';
import Link from "next/link";
import naco_new from '../../assets/naco_logo_new.png';
import meglogo from '../../assets/meglogo.png';
import health_ministry from '../../assets/Ministry_of_Health_India.png';

import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [path, setPath] = useState('')
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setPath(getParentPath())
  }, [pathname])

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
    { name: "LIVING WITH HIV/AIDS", dropdown: ["How to achieve a healthy living by 'Care, Support & Treatment'", "Nutrition", "ART Treatment", "Importance of the treatment", "Involvement of PLHIV in the community"] },
    { name: "MACS IN ACTION", dropdown: ["Events", "Campaigns"] },
    { name: "HIV/AIDS ACTS", dropdown: ["HIV/AIDS ACT"] },
    { name: "TENDER AND ADVERTISEMENT", dropdown: ["Tenders & Ads"] },
    { name: "GRIEVANCE REDRESSAL", dropdown: ["Grievance Redressal"] },
  ];

  return (
    <div className={`sticky top-0 z-50 bg-white ${scrolled ? 'shadow-lg' : ''} transition-shadow duration-300`}>
      {/* Top bar with logos */}
      <div className="flex md:flex-row items-center justify-between py-3 px-5 md:px-12">
        <div className="flex w-1/2 md:w-[10%] justify-center md:justify-start">
          <Image src={naco_new} alt="NACO Logo" className="h-auto w-full object-contain" />
        </div>

        <div className="flex flex-col w-full md:w-[70%] md:text-left px-5">
          <h1 className="text-lg leading-5 md:text-2xl lg:text-3xl font-black uppercase tracking-tight">Meghalaya Aids Control Society</h1>
          <h1 className="text-xs md:text-sm lg:text-base font-medium mt-0.5 text-gray-700">Department of Health and Family Welfare</h1>
          <h2 className="text-xs text-brand font-semibold">Government of Meghalaya</h2>
        </div>

        <div className="md:flex hidden w-1/3 md:w-[6%] justify-center lg:justify-end gap-6 md:gap-10">
          <Image src={health_ministry} width='0' height='0' sizes="100vw" alt="Health Ministry Logo" className="md:h-auto md:w-[200%] scale-150 mr-4 h-1/2 w-1/2 object-contain" />
          <Image src={meglogo} alt="Meghalaya Government Logo" className="md:h-auto md:w-full h-1/2 w-1/2 object-contain" />
          <Image src={Meghalogo} alt="MACS Logo" className="md:h-auto md:w-full h-1/2 w-1/2 object-contain" />
        </div>
      </div>

      {/* Mobile logos row */}
      <div className="md:hidden flex w-full justify-between px-5 items-center gap-6 my-1.5 border-t border-gray-200 pt-2 md:px-12">
        <Image src={health_ministry} width='0' height='0' sizes="100vw" alt="Health Ministry Logo" className="h-[36px] w-auto object-contain" />
        <div className="flex flex-row gap-4">
          <Image src={meglogo} alt="Meghalaya Government Logo" className="h-[44px] w-auto object-contain" />
          <Image src={Meghalogo} alt="MACS Logo" className="h-[44px] w-auto object-contain" />
        </div>
      </div>

      {/* Navigation bar */}
      <header className="flex w-full md:justify-center justify-between items-center px-5 md:px-12 bg-brand text-white">
        <div className="md:hidden">
          <Image
            src={Meghalogo}
            alt="Logo"
            height={44}
            width={44}
            className="block md:hidden mx-2 py-1.5"
          />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex text-sm z-50 items-center">
          <Link href='/' className={`h-[42px] w-[56px] flex items-center justify-center transition-colors duration-200 ${path == '/' ? "bg-black/80" : "hover:bg-black/40"}`}>
            <HomeIcon fontSize="small" />
          </Link>
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group dropdown-area scrollbar-none"
              onMouseEnter={() => handleDropdownToggle(item.name)}
              onMouseLeave={() => setDropdownOpen("")}
            >
              <button
                className={`cursor-pointer text-[13px] font-medium tracking-wide duration-200 h-[42px] px-4 transition-colors ${dropdownOpen === item.name || path === sanitizeLinkName(item.name.toLowerCase()) ? 'bg-black/80 text-white' : 'hover:bg-black/40 hover:text-white'}`}
              >
                {item.name}
              </button>
              {dropdownOpen === item.name && (
                <div className="absolute z-10 mt-0 w-56 bg-gray-900 text-white shadow-xl rounded-b-md overflow-hidden">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={`/page/${sanitizeLinkName(subItem.title || subItem)}`}
                      className="block px-5 py-2.5 text-sm hover:bg-brand hover:text-white transition-colors duration-150 border-b border-gray-800 last:border-b-0"
                      style={{ color: subItem.color || 'white' }}
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

        {/* Mobile hamburger */}
        <div className="md:hidden flex mx-3">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none p-1">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 z-30 bg-black/40" onClick={() => setMenuOpen(false)}>
            <div
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-brand p-6 pt-16 overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex justify-end mb-6">
                <button onClick={() => setMenuOpen(false)} className="focus:outline-none p-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <Link href='/' className="text-white text-lg font-semibold block py-3 border-b border-white/20" onClick={() => setMenuOpen(false)}>HOME</Link>

              {navItems.map((item, index) => (
                <div key={index} className="border-b border-white/20">
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="block text-white text-base font-medium py-3 w-full text-left"
                  >
                    {item.name}
                  </button>
                  {dropdownOpen === item.name && (
                    <div className="bg-black/30 rounded-md mb-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={`/page/${sanitizeLinkName(subItem.title || subItem)}`}
                          className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-black/20"
                          onClick={() => { setDropdownOpen(""); setMenuOpen(false); }}
                        >
                          {subItem.title || subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
