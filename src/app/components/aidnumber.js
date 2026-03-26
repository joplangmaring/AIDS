'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import background from '../../assets/backaid.png';

const AidNumber = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const animateCount = (target, setCount) => {
    const duration = 2000;
    const increment = target / (duration / 10);

    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount + increment >= target) {
          clearInterval(interval);
          return target;
        }
        return prevCount + increment;
      });
    }, 10);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount(1.7, setCount1);
          animateCount(39, setCount2);
          animateCount(690, setCount3);
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    { value: count1.toFixed(1), unit: "Million", label: "People were newly infected with HIV in 2019" },
    { value: Math.floor(count2), unit: "Million", label: "People were living with HIV in 2019" },
    { value: Math.floor(count3), unit: "Thousand", label: "AIDS-related deaths in 2019" },
  ];

  return (
    <div ref={sectionRef} className="relative py-20 md:py-28 flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background image - this is the ONLY section with one */}
      <Image
        src={background}
        alt="Background"
        fill
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-brand/80 z-0"></div>

      <div className="relative z-10 text-center px-5 md:px-12 max-w-screen-lg mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight">
          HIV AIDS <span className="italic">by the</span> Numbers
        </h1>
        <p className="text-sm md:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
          The pace of progress in reducing new HIV infections,
          increasing access to treatment and ending AIDS-related deaths is slowing down.
        </p>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-center gap-10 md:gap-20 mt-12 md:mt-16 px-5 md:px-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">{stat.value}</h1>
            <h2 className="text-lg sm:text-xl font-semibold mt-1 text-white/90">{stat.unit} People</h2>
            <p className="text-xs sm:text-sm mt-2 text-white/60 max-w-[200px] mx-auto">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AidNumber;
