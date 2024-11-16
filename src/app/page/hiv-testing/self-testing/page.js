import Image from "next/image";
import React from "react";
import AccordianItemTwo from '../../../components/accordianTwo.js'
import self_testing from "../../../../assets/self-testing.jpg"
const Page = () => {
  return (
    <div className="py-10 md:mx-auto md:w-3/4 px-5 space-y-5">
      <Image
        src={self_testing}
        alt="Self Testing"
        sizes="100vw"
        className="w-full md:h-[50vh] object-cover object-center mx-auto"
      />
      <h1 className="text-4xl font-bold text-[#8B0000] mt-10 text-center md:text-left">SELF TESTING </h1>
      <AccordianItemTwo/>
    </div>
  );
};

export default Page;