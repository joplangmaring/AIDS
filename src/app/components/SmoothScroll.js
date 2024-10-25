'use client'
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scrollEl = scrollRef.current;

      const locomotiveScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        lerp: 0.1, // Adjust for smoothness (0 to 1)
      });

      // Update the scroll when window resizes
      window.addEventListener("resize", () => {
        locomotiveScroll.update();
      });

      // Clean up on component unmount
      return () => {
        if (locomotiveScroll) locomotiveScroll.destroy();
      };
    }
  }, []);

  return <div ref={scrollRef}>{children}</div>;
};

export default SmoothScroll;