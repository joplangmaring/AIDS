import React from "react";
import Image from "next/image";
import hiv_testing_icon from '../../../assets/HIV_TESTING_ICON.png'
import hiv_self_testing_icon from '../../../assets/HIV_SELF_TESTING_ICON.png'
import hiv_testing from "../../../assets/hiv-testing.jpg";

import self_testing from "../../../assets/self-testing.jpg"
import Link from "next/link";

const page = () => {
  return (
    <div className="py-10 md:mx-auto md:w-3/4 px-5 space-y-5">
      <Image
        src={hiv_testing}
        alt="HIV Testing"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full md:h-[50vh] object-cover object-top mx-auto"
      />
      <h1 className="text-4xl font-bold text-[#8B0000] mt-10">HIV TESTING</h1>
      <p>
        The only way to know your HIV status is to get tested. Knowing your
        status provides important information to help keep both you and your
        partner healthy.
      </p>
      <p>
        It is recommended that everyone between the ages of 13 and 64 get tested
        for HIV at least once as part of routine health care, and more
        frequently if engaging in activities that may increase the risk of
        contracting HIV.
      </p>
      <p>
        Even if you and your partner are only having sex with each other, it's
        still important for both of you to know your HIV status.
      </p>

      

      <div className="flex flex-wrap justify-center items-center gap-6 p-4">
        <Link
          href="/page/hiv-testing/testing-essentials"
          className="w-full sm:w-[48%] md:w-[23%] p-4 border rounded-lg shadow-lg bg-white bg-opacity-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-md font-bold text-center mb-1 text-[#8B0000] uppercase">
              Testing Essentials
            </h2>
            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
            <Image
                src={hiv_testing_icon}
                alt="Testing Essentials Icon"
                className="w-20 h-20 object-cover"
              />
            </div>
          </div>
        </Link>

        <Link
          href="/page/hiv-testing/self-testing"
          className="w-full sm:w-[48%] md:w-[23%] p-4 border rounded-lg shadow-lg bg-white bg-opacity-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-md font-bold text-center mb-2 text-[#8B0000] uppercase">
              Self Testing
            </h2>
            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
            <Image
                src={hiv_self_testing_icon}
                alt="Self-Testing Icon"
                className="w-20 h-20 object-cover"
              />
            </div>
          </div>
        </Link>
      </div>  
    </div>
  );
};

export default page;
