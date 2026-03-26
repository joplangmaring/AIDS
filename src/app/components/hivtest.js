"use client";
import { useInView } from "react-intersection-observer";
import hivtesting from "../../assets/test.png";
import hand from "../../assets/hand.png";
import treat from "../../assets/treat.png";
import consultan from "../../assets/prevention.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HivTest = () => {
  const animationVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex justify-center items-center w-full section-padding bg-gray-50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-screen-xl">
        {[
          { src: hivtesting, label1: "HIV", label2: "TESTING", link: "/page/hiv-testing" },
          { src: consultan, label1: "HIV", label2: "PREVENTION", link: "/page/hiv-prevention" },
          { src: treat, label1: "HIV", label2: "TREATMENT", link: "/page/hiv-treatment" },
          { src: hand, label1: "HIV STIGMA", label2: "& Discrimination", link: "/page/hiv-stigma" },
        ].map((item, index) => {
          const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

          return (
            <Link href={item.link} key={index} passHref>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={index}
                variants={animationVariant}
                className="flex flex-col items-center text-center rounded-xl overflow-hidden cursor-pointer bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-full overflow-hidden bg-white p-3 md:p-4">
                  <Image
                    src={item.src}
                    alt={item.label1}
                    width={208}
                    height={208}
                    className="bg-white object-contain md:h-56 h-36 w-full"
                  />
                </div>
                <div className="bg-brand w-full py-3 md:py-4">
                  <span className="text-white text-sm md:text-base font-semibold block leading-tight">{item.label1}</span>
                  <span className="text-white/90 text-xs md:text-sm font-medium">{item.label2}</span>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HivTest;
