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

  return (<div className="mt-16 md:bottom-16 flex flex-col items-center justify-center p-4">
    <div className='flex space-x-2 mb-4'>
      {/* Icon with red background */}
      <div className="bg-red-600 rounded-full p-2 -ml-2">
        <IoLocationOutline className="text-white text-3xl" />
      </div>
      {/* White h1 text */}
      <h1 className="text-white text-lg font-bold mt-2">Find your nearest testing centre</h1>
    </div>
    <div className='flex flex-col relative' ref={dropdownRef}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={handleSearch} // Trigger search on key up
        className="p-2 rounded border border-gray-400 outline-none md:w-[350px] max-w-[100%] placeholder:text-base"
        placeholder="Enter Address or PIN Code."
      />

      {/* Dropdown for post offices */}
      {showDropdown && postOffices.length > 0 && (
        <ul className="absolute top-12 left-0 right-0 bg-white border border-gray-300 max-h-60 overflow-auto z-10 rounded shadow-lg">
          {postOffices.map((office) => (
            <li
              key={office._id}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              <Link
                href={`/${office._id}`} // Adjust the URL to your route
                onClick={() => setShowDropdown(false)} // Close the dropdown on click
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
}






const Logos = () => {
  return (
    <div
      className="relative flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      {/* Left Section */}
      <div className="flex flex-col  z-10 px-4 md:px-0">
        <div className='overflow-hidden'>
          <h1 className="animate-riseUp font-bold text-4xl md:text-6xl lg:text-7xl text-white" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            MEGHALAYA AIDS
          </h1>
        </div>
        <div className='overflow-hidden'>
          <h1 className="animate-riseUp font-bold text-4xl md:text-6xl lg:text-7xl text-white" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            CONTROL SOCIETY
          </h1>
        </div>
        <div className="w-full md:w-full border-b-[2px] my-3 md:my-5 border-white"></div>

        <div className="text-white mt-2 md:mt-2 space-y-2" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          <p className="text-sm md:text-base lg:text-xl">NACO envisions an India where every person living with HIV has</p>
          <p className="text-sm md:text-base lg:text-xl">access to quality care and is treated with dignity.</p>
        </div>

        <SearchBar />

        {/* <div className="mt-6 md:mt-20">
          <h1
            className="text-white flex items-center text-sm md:text-[15px]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            <IoLocationSharp className="mr-1" />
            FIND THE NEAREST TESTING CENTRE
          </h1>

          <div className="flex items-center mt-2 md:mt-4 border-b border-white">
            <input
              type="text"
              className="bg-transparent px-2 py-1 w-full text-white focus:outline-none focus:border-white placeholder-[#FFFFFF59] text-sm md:text-base"
              placeholder="Enter location or pincode"
            />
            <IoLocationSharp className="text-white" />
          </div>
        </div> */}
      </div>

      {/* Right Section */}
      <div className="z-10 mt-10 md:mt-56">
        <Image src={person} alt="Person" width={250} mdWidth={150} />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#000000B2] z-0"></div>
    </div>
  );
};


export default Logos;
