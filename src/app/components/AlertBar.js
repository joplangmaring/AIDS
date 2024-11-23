'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

// Notices with links
const notices = [
  { text: "List for the Post-Driver", link: "/page/tenders-ads/list-for-the-post-driver" },
  { text: "List for the Post-Attendant", link: "/page/tenders-ads/list-for-the-post-attendant" },
  { text: "List for the Post-CPO", link: "/page/tenders-ads/list-for-the-post-cpo" },
  { text: "List for the Post-Counselors", link: "/page/tenders-ads/list-for-the-post-counselors" },
  { text: "List for the Post-Office Assistant", link: "/page/tenders-ads/list-for-the-post-office-assistant" },
  { text: "List for the Post-Technical Officer", link: "/page/tenders-ads/list-for-the-post-to" },
  { text: "Notice for Written Exam", link: "/page/tenders-ads/notice-for-written-exam" },
];

const AlertBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to switch to the next notice
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % notices.length);
  };

  // Automatically slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-[#f5deb3] text-black w-full py-2">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
        {/* Notice Text Slider */}
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.42, 0, 0.58, 1], // Smooth cubic-bezier easing
              }}
              className="text-xs md:text-sm font-semibold text-center whitespace-nowrap"
            >
              <Link href={notices[currentIndex].link} className="hover:underline">
                {notices[currentIndex].text} <ArrowOutwardIcon sx={{"fontSize": "1rem", "marginBottom": "2px"}}/>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View More Button */}
        {/* <motion.a
          href={notices[currentIndex].link}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="ml-4 text-xs md:text-sm font-bold hover:underline"
        >
          View
        </motion.a> */}
      </div>
    </div>
  );
};

export default AlertBar;
