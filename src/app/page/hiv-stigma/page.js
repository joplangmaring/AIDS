import React from "react";
import hiv_stigma from "../../../assets/HIV_STIGMA.jpg";
import stop_stigma from '../../../assets/STOP_STIGMA.png'
import stigma_scenarios from '../../../assets/STIGMA_SCENARIOS.png'
import stigma_educate from '../../../assets/STIGMA_EDUCATE.png'
import stop_hiv_stigma from '../../../assets/STOP_HIV_STIGMA.png'
import Image from "next/image";
import Link from "next/link";


const page = () => {
  return (
    <div className="py-10 md:mx-auto md:w-3/4 px-5 space-y-5">
      <Image
        src={hiv_stigma}
        alt="HIV STIGMA"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full md:h-[50vh] object-cover object-center mx-auto"
      />
      <h1 className="text-4xl font-bold text-[#8B0000] mt-10">HIV STIGMA</h1>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      What is HIV STIGMA?
      </h2>
      <p className="text-gray-700">
      HIV stigma is negative attitudes and beliefs about people with HIV. It is the prejudice that comes with labeling an individual as part of a group that is believed to be socially unacceptable.
      </p>
      <p className="text-gray-700">Here are a few examples:</p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Believing that only certain groups of people can get HIV
        </li>
        <li>
        Making moral judgments about people who take steps to prevent HIV transmission
        </li>
        <li>Feeling that people deserve to get HIV because of their choices</li>
      </ul>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      What is discrimination?
      </h2>
      <p className="text-gray-700">
      While stigma refers to an attitude or belief, discrimination is the behaviors that result from those attitudes or beliefs. HIV discrimination is the act of treating people living with HIV differently than those without HIV.
      </p>
      <p className="text-gray-700">
      Here are a few examples:
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        A health care professional refusing to provide care or services to a person living with HIV
        </li>
        <li>
        Refusing casual contact with someone living with HIV
        </li>
        <li>Socially isolating a member of a community because they are HIV positive.</li>
        <li>Referring to people as HIVers or Positives</li>
      </ul>

      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      What are the effects of HIV stigma and discrimination?
      </h2>
      <p className="text-gray-700">
      HIV stigma and discrimination affect the emotional well-being and mental health of people living with HIV. People living with HIV often internalize the stigma they experience and begin to develop a negative self-image. They may fear they will be discriminated against or judged negatively if their HIV status is revealed. 
      </p>
      <p className="text-gray-700">
      “Internalized stigma” or “self-stigma” happens when a person takes in the negative ideas and stereotypes about people living with HIV and start to apply them to themselves. HIV internalized stigma can lead to feelings of shame, fear of disclosure, isolation, and despair. These feelings can keep people from getting tested and treated for HIV.
      </p>

      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      What can be done about HIV stigma?    
      </h2>
      <p className="text-gray-700">
      Talk About HIV
      </p>
      <p className="text-gray-700">
      Talking openly about HIV can help normalize the subject. It also provides opportunities to correct misconceptions and help others learn more about HIV. But be mindful of how you talk about HIV and people living with HIV. 
      </p>
      
    {/* Cards */}
    <div className="flex flex-wrap justify-center items-center gap-6 p-4">
        <Link
          href="/page/hiv-stigma/ways-to-stop"
          className="w-full sm:w-[48%] md:w-[23%] p-4 border rounded-lg shadow-lg bg-white bg-opacity-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-md font-bold text-center mb-2 text-[#8B0000] uppercase">
              Ways To Stop
            </h2>
            <div className="w-24 h-24  rounded-full flex items-center justify-center mb-4">
            <Image
                src={stop_stigma}
                alt="Ways to stop Icon"
                className="w-20 h-20 object-cover"
              />
            </div>
          </div>
        </Link>

        <Link
          href="/page/hiv-stigma/stigma-scenarios"
          className="w-full sm:w-[48%] md:w-[23%] p-4 border rounded-lg shadow-lg bg-white bg-opacity-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-md font-bold text-center mb-2 text-[#8B0000] uppercase">
              Stigma scenarios
            </h2>
            <div className="w-24 h-24  rounded-full flex items-center justify-center mb-4">
            <Image
                src={stigma_scenarios}
                alt="Stigma Scenarios Icon"
                className="w-20 h-20 object-cover"
              />
            </div>
          </div>
        </Link>
        <Link
          href="/page/hiv-stigma/educate-others "
          className="w-full sm:w-[48%] md:w-[23%] p-4 border rounded-lg shadow-lg bg-white bg-opacity-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-md font-bold text-center mb-2 text-[#8B0000] uppercase">
              EDUCATE OTHERS
            </h2>
            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
            <Image
                src={stigma_educate}
                alt="Educate Others Icon"
                className="w-20 h-20 object-cover"
              />
            </div>
          </div>
        </Link>
        <Link
          href="/page/hiv-stigma/hiv-stigma"
          className="w-full sm:w-[48%] md:w-[23%] p-4 border rounded-lg shadow-lg bg-white bg-opacity-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-md font-bold text-center mb-2 text-[#8B0000] uppercase">
              HIV STIGMA
            </h2>
            <div className="w-24 h-24rounded-full flex items-center justify-center mb-4">
            <Image
                src={stop_hiv_stigma}
                alt="HIV Stigma Icon"
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
