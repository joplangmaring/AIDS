'use client';

import Image from 'next/image';
import person from '../../assets/OBJECTS.png';
import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
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
    <motion.div className="mt-8 md:mt-10" variants={fadeInUp}>
      <div className="flex items-center gap-2.5 mb-3">
        <div className="bg-brand/10 rounded-full p-2">
          <IoLocationOutline className="text-brand text-xl" />
        </div>
        <h2 className="text-gray-900 text-sm md:text-base font-semibold">
          Find your nearest testing centre
        </h2>
      </div>
      <div className="relative" ref={dropdownRef}>
        <div className="relative">
          <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={handleSearch}
            className="w-full py-3 pl-11 pr-4 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 outline-none text-sm md:text-base focus:ring-2 focus:ring-brand/20 focus:border-brand shadow-sm transition-all duration-200"
            placeholder="Enter Address or PIN Code"
          />
        </div>
        {showDropdown && postOffices.length > 0 && (
          <ul className="absolute top-14 left-0 right-0 bg-white border border-gray-200 max-h-60 overflow-auto z-50 rounded-xl shadow-xl">
            {postOffices.map((office) => (
              <li key={office._id} className="hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0">
                <Link
                  href={`/${office._id}`}
                  onClick={() => setShowDropdown(false)}
                  className="block p-3 text-sm text-gray-700"
                >
                  <span className="font-medium text-gray-900">{office.post_office_name}</span> - {office.pin}, {office.district}
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
    <div className="relative bg-white overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-brand/[0.03] -skew-x-12 translate-x-20 hidden md:block"></div>
      <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] bg-brand/[0.05] rounded-full translate-y-1/2 hidden md:block"></div>

      <div className="max-w-screen-xl mx-auto px-5 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center min-h-[80vh] py-16 md:py-0">

          {/* Left: Content */}
          <motion.div
            className="flex-1 md:pr-10 lg:pr-16 md:text-left text-center"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block bg-brand/10 text-brand text-xs md:text-sm font-semibold px-3 py-1 rounded-full mb-5">
                Meghalaya AIDS Control Society
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight"
              variants={fadeInUp}
            >
              <span className="text-brand">EDUCATE.</span><br />
              PREVENT.<br />
              SUPPORT.
            </motion.h1>

            <motion.p
              className="text-gray-500 text-sm md:text-base lg:text-lg mt-5 leading-relaxed max-w-lg md:mx-0 mx-auto"
              variants={fadeInUp}
            >
              NACO envisions an India where every person living with HIV has
              access to quality care and is treated with dignity.
            </motion.p>

            <SearchBar />

            {/* Helpline pill */}
            <motion.div className="flex md:justify-start justify-center mt-6" variants={fadeInUp}>
              <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
                <span className="text-brand font-black text-lg">1097</span>
                <span className="text-gray-500 text-xs">National AIDS Helpline</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            className="flex-shrink-0 self-end mt-10 md:mt-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Image
              src={person}
              alt="People with HIV awareness ribbon"
              className="w-[200px] md:w-[280px] lg:w-[320px] h-auto object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom brand accent line */}
      <div className="h-1 bg-gradient-to-r from-brand via-brand-light to-transparent"></div>
    </div>
  );
};

export default Logos;
