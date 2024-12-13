'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


const AlertBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch("/api/notice/get-notice");
        const result = await response.json();

        if (result.success) {
          const fetchedNotices = result.data.map((notice) => ({
            text: notice.title.length > 30 ? `${notice.title.slice(0, 30)}...` : notice.title,
            link: notice.link || "/page/tenders-ads/", // Default link if not provided
          }));
          setNotices(fetchedNotices);
        }
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

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
  }, [notices]);

  useEffect( ()=> {
    console.log(notices)
  }, [notices])

  if(!notices.length>0) return null

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
              { notices.length>0 && <Link href="/page/tenders-ads/" className="hover:underline">
                {notices[currentIndex].text} <ArrowOutwardIcon sx={{ "fontSize": "1rem", "marginBottom": "2px" }} />
              </Link>}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AlertBar;
