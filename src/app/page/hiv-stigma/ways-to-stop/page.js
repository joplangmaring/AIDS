import React from "react";
import hiv_stigma from "../../../../assets/PEP.jpg";
import Image from "next/image";



const page = () => {
  return (
    <div className="py-10 md:mx-auto md:w-3/4 px-5 space-y-5">
      <Image
        src={hiv_stigma}
        alt="HIV STIGMA"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full md:h-[60vh] object-cover  object-center mx-auto"
      />
      <h1 className="text-4xl font-bold text-[#8B0000] mt-10">WAYS TO STOP HIV STIGMA</h1>

      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      Education and Awareness
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Educate the public about HIV and how it is transmitted to reduce misconceptions.
        </li>
        <li>
        Provide accurate information about HIV treatment and how it allows people to live long, healthy lives.
        </li>
        <li>Promote awareness campaigns that address the stigma associated with HIV.</li>
      </ul>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      Supportive and Inclusive Language
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Encourage the use of respectful language when discussing HIV and those living with it.
        </li>
        <li>
        Avoid derogatory terms and stigmatizing language that perpetuate negative stereotypes.
        </li>
        <li>Promote person-first language, such as "people living with HIV," instead of labeling individuals by their HIV status.</li>
      </ul>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      Encourage Open Dialogue
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Create safe spaces where people can openly talk about HIV without fear of discrimination.   
        </li>
        <li>
        Facilitate discussions in communities, schools, and workplaces to normalize HIV conversations.
        </li>
        <li>Involve people living with HIV in awareness campaigns to share their experiences and reduce stigma.</li>
      </ul>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      Fight Discrimination in Healthcare Settings
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Train healthcare professionals on the importance of treating people with HIV with dignity and respect.
        </li>
        <li>
        Address issues of HIV-related discrimination in healthcare settings and promote equality in patient care.
        </li>
        <li>Ensure healthcare policies are inclusive and sensitive to the needs of people living with HIV.</li>
      </ul>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      Policy and Legal Reform
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Advocate for laws and policies that protect people living with HIV from discrimination in employment, education, and healthcare.
        </li>
        <li>
        Push for the decriminalization of HIV transmission, as criminalization exacerbates stigma and discourages testing.
        </li>
        <li>Support laws that ensure the right to privacy for individuals living with HIV.</li>
      </ul>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      Community Engagement and Support
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Establish community support groups where people living with HIV can receive emotional and social support.
        </li>
        <li>
        Build peer networks that promote solidarity and shared experiences among people living with HIV.
        </li>
        <li>Empower communities to become allies in ending stigma through outreach programs and events.</li>
      </ul>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      Promote HIV Testing and Early Diagnosis
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Encourage voluntary HIV testing to normalize the process and reduce the fear of being tested.
        </li>
        <li>
        Implement routine HIV testing in healthcare settings to reduce the stigma associated with seeking a test.
        </li>
        <li>Raise awareness about the importance of early diagnosis and treatment in managing HIV effectively.</li>
      </ul>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      Media and Social Media Engagement
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Use media platforms to highlight positive stories of people living with HIV and how they manage their condition.
        </li>
        <li>
        Combat negative portrayals of people living with HIV by sharing accurate, humanizing stories.
        </li>
        <li>Leverage social media influencers and celebrities to speak out against HIV stigma and support HIV education.</li>
      </ul>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      Address Myths and Misconceptions
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Challenge myths about HIV, such as the belief that it can be contracted through casual contact, and clarify the actual modes of transmission.
        </li>
        <li>
        Provide resources that debunk false information and offer scientifically accurate knowledge about HIV.
        </li>
        <li>Educate on the impact of HIV treatment (ART), which reduces viral load to undetectable levels, making transmission unlikely.    </li>
      </ul>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      Support HIV Prevention Programs
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Promote preventive measures, such as pre-exposure prophylaxis (PrEP), to reduce the spread of HIV and shift the focus from stigma to prevention.
        </li>
        <li>
        Encourage people to take proactive steps in protecting themselves and others from HIV.
        </li>
      </ul>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      Advocacy and Leadership
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Empower individuals living with HIV to take on leadership roles in advocating for the end of stigma.
        </li>
        <li>
        Support organizations and leaders who are dedicated to combating HIV-related stigma at local, national, and global levels.
        </li>
        <li>Advocate for inclusion in policies and programs that address HIV, ensuring people living with HIV have a seat at the table.</li>
      </ul>
      
    </div>
  );
};

export default page;
