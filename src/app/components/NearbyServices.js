'use client'

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Assets
import google_map from "../../assets/google_map.png";

// MUI Icons
import { IoLocationSharp, IoLocationOutline } from "react-icons/io5";

const NearbyServices = () => {
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
    <div className="relative md:h-[60vh] h-[70vh] flex flex-col items-center justify-center z-50 md:px-0 px-10">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={google_map}
          alt="Google Map"
          layout="fill"
          objectFit="cover"
          className="blur-sm"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-center py-4 z-50 text-center">
        <div className="flex space-x-2 mb-4 items-center">
          <div className="bg-red-600 rounded-full p-2 h-fit">
            <IoLocationOutline className="text-white text-xl w-fit" />
          </div>
          <h1 className="text-white md:text-3xl text-md font-bold pl-2">
            Find Nearest Testing Centre
          </h1>
        </div>
        <div className="flex flex-col relative md:w-full z-50" ref={dropdownRef}>
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
                  className="p-2 hover:bg-gray-200 cursor-pointer text-left"
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
    </div>
  );
};

export default NearbyServices;
