import React from "react";
import Image from "next/image";

import hiv_prevention from "../../../assets/hiv-prevention.jpg";
import condom_icon from '../../../assets/CONDOM.png'
import prep_icon from '../../../assets/PREP_ICON.png'
import pep_icon from '../../../assets/PEP_ICON.png'
import hiv_treatment_icon from '../../../assets/HIV_TREATMENT_ICON.png'
import hiv_testing_icon from '../../../assets/HIV_TESTING_ICON.png'
import drug_use_icon from '../../../assets/DRUG_USE_ICON.png'
import sti_prevention_icon from '../../../assets/STI_PREVENTION_ICON.png'
import mpox_icon from '../../../assets/MPOX_ICON.png'
import Link from "next/link";

const page = () => {
  return (
    <div className="py-10 md:mx-auto md:w-3/4 px-5 space-y-5">
      <Image
        src={hiv_prevention}
        alt="HIV PREVENTION"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full md:h-[60vh] object-cover object-center"
      />
      <h1 className="text-4xl font-bold text-[#8B0000] mt-10">
        HIV PREVENTION
      </h1>
      <p>
        Today, more tools than ever are available to prevent HIV, other STIs,
        and mpox and it starts with knowing your status.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6 p-4">
        {/* Card Wrapper */}
        <Link
          href="/page/hiv-prevention/condoms"
          className="w-full sm:w-[48%] md:w-[23%] p-4 border rounded-lg shadow-lg bg-white bg-opacity-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-md font-bold text-center mb-2 text-[#8B0000] uppercase">
              Condoms
            </h2>
            <div className="w-24 h-24rounded-full flex items-center justify-center mb-4">
              <Image
                src={condom_icon}
                alt="Condom Icon"
                className="w-20 h-20 object-cover"
              />
            </div>
          </div>
        </Link>

        {/* Repeat the above block for the other cards, updating the href and title accordingly */}
        <Link
          href="/page/hiv-prevention/PrEP"
          className="w-full sm:w-[48%] md:w-[23%] p-4 border rounded-lg shadow-lg bg-white bg-opacity-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-md font-bold text-center mb-2 text-[#8B0000]">
              PrEP
            </h2>
            <div className="w-24 h-24  rounded-full flex items-center justify-center mb-4">
            <Image
                src={prep_icon}
                alt="PrEP Icon"
                className="w-20 h-20 object-cover"
              />
            </div>
          </div>
        </Link>
        <Link
          href="/page/hiv-prevention/PEP"
          className="w-full sm:w-[48%] md:w-[23%] p-4 border rounded-lg shadow-lg bg-white bg-opacity-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-md font-bold text-center mb-2 text-[#8B0000]">
              PEP
            </h2>
            <div className="w-24 h-24  rounded-full flex items-center justify-center mb-4">
            <Image
                src={pep_icon}
                alt="PEP Icon"
                className="w-20 h-20 object-cover"
              />
            </div>
          </div>
        </Link>
        <Link
          href="/page/hiv-prevention/treatment"
          className="w-full sm:w-[48%] md:w-[23%] p-4 border rounded-lg shadow-lg bg-white bg-opacity-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-md font-bold text-center mb-2 text-[#8B0000]">
              TREATMENT
            </h2>
            <div className="w-24 h-24  rounded-full flex items-center justify-center mb-4">
            <Image
                src={hiv_treatment_icon}
                alt="HIV Treatment Icon"
                className="w-20 h-20 object-cover"
              />
            </div>
          </div>
        </Link> 
        <Link
          href="/page/hiv-prevention/testing-essentials"
          className="w-full sm:w-[48%] md:w-[23%] p-4 border rounded-lg shadow-lg bg-white bg-opacity-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-md font-bold text-center mb-2 text-[#8B0000] uppercase">
              Testing Essentials
            </h2>
            <div className="w-24 h-24  rounded-full flex items-center justify-center mb-4">
            <Image
                src={hiv_testing_icon}
                alt="Testing Essentials Icon"
                className="w-20 h-20 object-cover"
              />
            </div>
          </div>
        </Link>
        <Link
          href="/page/hiv-prevention/injection-drug-use"
          className="w-full sm:w-[48%] md:w-[23%] p-4 border rounded-lg shadow-lg bg-white bg-opacity-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-md font-bold text-center mb-2 text-[#8B0000] uppercase">
              Injection-Drug Use
            </h2>
            <div className="w-24 h-24  rounded-full flex items-center justify-center mb-4">
            <Image
                src={drug_use_icon}
                alt="Injection-Drug Use Icon"
                className="w-20 h-20 object-cover"
              />
            </div>
          </div>
        </Link>
        <Link
          href="/page/hiv-prevention/sti-prevention"
          className="w-full sm:w-[48%] md:w-[23%] p-4 border rounded-lg shadow-lg bg-white bg-opacity-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-md font-bold text-center mb-2 text-[#8B0000] uppercase">
              STI-Prevention
            </h2>
            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
            <Image
                src={sti_prevention_icon}
                alt="STI-Prevention Icon"
                className="w-20 h-20 object-cover"
              />
            </div>
          </div>
        </Link>
        <Link
          href="/page/hiv-prevention/mpox-prevention"
          className="w-full sm:w-[48%] md:w-[23%] p-4 border rounded-lg shadow-lg bg-white bg-opacity-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-md font-bold text-center mb-2 text-[#8B0000] uppercase">
              MPOX-Prevention
            </h2>
            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
            <Image
                src={mpox_icon}
                alt="MPOX Icon"
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
