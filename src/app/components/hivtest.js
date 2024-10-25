"use client";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import hivtesting from "../../assets/test.png";
import hand from "../../assets/hand.png";
import treat from "../../assets/treat.png";
import consultan from "../../assets/prevention.png";
import Image from "next/image";
import background from "../../assets/backgroundhiv.png";
import { useAnimation, motion } from 'framer-motion';

const HivTest = () => {
  const animationVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row justify-center lg:gap-32 gap-8 px-4 lg:px-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background.src})` }}
      />
      <div className="absolute inset-0 bg-[#000000B2] z-0" />

      {/* Cards */}
      <div className="flex justify-center items-center p-4 z-10 my-10 w-full px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          {[
            { src: hivtesting, label1: "HIV", label2: "TESTING" },
            { src: consultan, label1: "HIV", label2: "PREVENTION" },
            { src: treat, label1: "HIV", label2: "TREATMENT" },
            { src: hand, label1: "HIV STIGMA", label2: "Discrimination" },
          ].map((item, index) => {
            const controls = useAnimation();
            const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

            useEffect(() => {
              if (inView) {
                controls.start('visible');
              }
            }, [controls, inView]);

            return (
              <motion.div
                key={index}
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={animationVariant}
                className="flex flex-col items-center justify-between text-center p-2 rounded-md shadow-md w-full"
              >
                <Image
                  src={item.src}
                  alt={item.label1}
                  width={208}
                  height={208}
                  className="bg-white object-contain h-52 w-full rounded-t-2xl shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                />
                <div className="bg-red-800 w-full flex flex-col rounded-b-2xl p-2">
                  <span className="text-white text-sm">{item.label1}</span>
                  <span className="text-white text-sm">{item.label2}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HivTest;
