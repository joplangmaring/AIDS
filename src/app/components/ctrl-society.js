'use client';

import Image from 'next/image';
import person from '../../assets/OBJECTS.png';
import background from '../../assets/background-hero.png';
import { IoLocationSharp, IoLocationOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [postOffices, setPostOffices] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleSearch = async () => {
    if (!search) return;

    try {
      const response = await fetch(`/api/postoffices?search=${search}`);
      const data = await response.json();

      if (data.success) {
        setPostOffices(data.data);
        setShowDropdown(true);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Failed to fetch post offices:', error);
    }
  };

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
    <motion.div
      className="mt-16 md:bottom-16 flex flex-col justify-center py-4 z-50 md:px-0 px-5"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <div className='flex space-x-2 mb-4 items-center'>
        <motion.div
          className="bg-red-600 rounded-full p-2 h-fit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoLocationOutline className="text-white text-3xl w-fit" />
        </motion.div>
        <h1 className="text-white text-xl md:text-3xl font-bold mt-1 pl-2">
          Find your nearest testing centre
        </h1>
      </div>
      <div className='flex flex-col relative md:w-full z-50' ref={dropdownRef}>
        <motion.input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={handleSearch}
          className="p-2 rounded border border-gray-400 outline-none md:w-[100%] max-w-[100%] placeholder:text-base"
          placeholder="Enter Address or PIN Code."
          whileFocus={{ scale: 1.05 }}
        />
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
    </motion.div>
  );
};

const Logos = () => {
  return (
    <div className="min-h-screen relative flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={background}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 backdrop-blur-xs bg-[#000000B2]"></div>
      </div>

      {/* Foreground Content */}
      <motion.div
        className="flex flex-col z-10 px-5 md:px-0 py-20"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h1
          className="text-white font-bold text-2xl md:text-4xl md:text-left text-center md:mt-0 mt-10"
          style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          variants={fadeInUp}
        >
          EDUCATE. PREVENT. SUPPORT.
        </motion.h1>
        <motion.div
          className="text-white mt-2 md:mt-2 space-y-2 md:text-left text-center"
          style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          variants={fadeInUp}
        >
          <p className="text-sm md:text-base lg:text-xl">
            NACO envisions an India where every person living with HIV has{' '}
            <span className="md:hidden inline">access to quality care and is treated with dignity.</span>
          </p>
          <p className="text-sm md:text-base lg:text-xl md:block hidden">
            access to quality care and is treated with dignity.
          </p>
        </motion.div>
        <SearchBar />
      </motion.div>

      {/* Foreground Image */}
      <motion.div
        className="z-10 md:mt-64"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image src={person} alt="Person" width={250} />
      </motion.div>
    </div>
  );
};

export default Logos;
