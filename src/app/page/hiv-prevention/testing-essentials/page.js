import Image from "next/image";
import React from "react";
import testing_essentials from "../../../../assets/testing-essentials.jpg";
import AccordianItemOne from '../../../components/accordianOne.js'

const Page = () => {
  return (
    <div className="py-10 md:mx-auto md:w-3/4 px-5 space-y-5">
      <Image
        src={testing_essentials}
        alt="Testing Essentials"
        sizes="100vw"
        className="w-full h-[50vh] object-cover object-center mx-auto"
      />
      <h1 className="text-4xl font-bold text-[#8B0000] mt-10 text-center md:text-left">TESTING ESSENTIALS</h1>
      <AccordianItemOne/>
    </div>
  );
};

export default Page;
