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
            text: notice.title.length > 70 ? `${notice.title.slice(0, 70)}...` : notice.title,
            link: notice.link || "/page/tenders-ads/",
          }));
          setNotices(fetchedNotices);
        }
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  useEffect(() => {
    if (notices.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % notices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [notices]);

  if (!notices.length > 0) return null;

  return (
    <div className="bg-brand-50 border-b border-brand-100 text-gray-900 w-full py-2">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center gap-3 px-5 md:px-12">
        <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-brand bg-brand-100 px-2.5 py-0.5 rounded-full whitespace-nowrap">
          Notice
        </span>
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.42, 0, 0.58, 1],
              }}
              className="text-xs md:text-sm font-medium text-center whitespace-nowrap"
            >
              {notices.length > 0 && (
                <Link href="/page/tenders-ads/" className="hover:text-brand transition-colors duration-200">
                  {notices[currentIndex].text}
                  <ArrowOutwardIcon sx={{ fontSize: "0.85rem", marginLeft: "4px", marginBottom: "1px" }} />
                </Link>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AlertBar;
