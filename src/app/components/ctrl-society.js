'use client'

import Image from 'next/image';
import person from '../../assets/OBJECTS.png';
import background from '../../assets/background-hero.png';
import { IoLocationSharp, IoLocationOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const SearchBar = () => {

  const [search, setSearch] = useState('');
  const [postOffices, setPostOffices] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Function to fetch post offices based on search input
  const handleSearch = async () => {
    if (!search) return;

    try {
      const response = await fetch(`/api/postoffices?search=${search}`);
      const data = await response.json();

      if (data.success) {
        setPostOffices(data.data); // Store the result in state
        setShowDropdown(true); // Show dropdown when results are available
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Failed to fetch post offices:', error);
    }
  };

  // Hide dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="mt-16 md:bottom-16 flex flex-col justify-center py-4 z-50">
      <div className='flex space-x-2 mb-4 items-center'>
        <div className="bg-red-600 rounded-full p-2 h-fit">
          <IoLocationOutline className="text-white text-3xl w-fit" />
        </div>
        <h1 className="text-white text-3xl font-bold mt-1 pl-2">Find your nearest testing centre</h1>
      </div>
      <div className='flex flex-col relative md:w-full z-50' ref={dropdownRef}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={handleSearch}
          className="p-2 rounded border border-gray-400 outline-none md:w-[100%] max-w-[100%] placeholder:text-base"
          placeholder="Enter Address or PIN Code."
        />

        {/* Dropdown for post offices */}
        {showDropdown && postOffices.length > 0 && (
          <ul className="absolute top-12 left-0 right-0 bg-white border border-gray-300 max-h-60 overflow-auto z-50 rounded shadow-lg">
            {postOffices.map((office) => (
              <li
                key={office._id}
                className="p-2 hover:bg-gray-200 cursor-pointer"
              >
                <Link
                  href={`/${office._id}`}
                  onClick={() => setShowDropdown(false)}
                >
                  {office.post_office_name} - {office.pin}, {office.district}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const Logos = () => {
  return (
    <div
      className="relative flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-xs bg-[#000000B2] z-0"></div>

      {/* Left Section */}
      <div className="flex flex-col z-10 px-5 md:px-0 py-20">
        <div className='overflow-hidden'>
          <h1 className="animate-riseUp font-bold text-5xl md:text-6xl lg:text-8xl text-white" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            MEGHALAYA AIDS
          </h1>
        </div>
        <div className='overflow-hidden'>
          <h1 className="animate-riseUp font-bold text-5xl md:text-6xl lg:text-8xl text-white" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            CONTROL SOCIETY
          </h1>
        </div>
        <div className="w-full md:w-full border-b-[2px] my-3 md:my-5 border-white"></div>

        <div className="text-white mt-2 md:mt-2 space-y-2" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          <p className="text-sm md:text-base lg:text-xl">NACO envisions an India where every person living with HIV has <span className='md:hidden inline'>access to quality care and is treated with dignity.</span></p>
          <p className="text-sm md:text-base lg:text-xl md:block hidden">access to quality care and is treated with dignity.</p>
        </div>

        <SearchBar />
      </div>

      {/* Right Section */}
      <div className="z-0 md:mt-64">
        <Image src={person} alt="Person" width={250} mdWidth={150} />
      </div>
    </div>
  );
};

export default Logos;
