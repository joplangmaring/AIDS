import React from "react";
import hiv_treatment from "../../../../assets/HIV_TREATMENT.jpg";
import Image from "next/image";

const page = () => {
  return (
    <div className="py-10 md:mx-auto md:w-3/4 px-5 space-y-5">
      <Image
        src={hiv_treatment}
        alt="HIV TREATMENT"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full md:h-[50vh] object-cover object-center mx-auto"
      />
      <h1 className="text-4xl font-bold text-[#8B0000] mt-10">HIV TREATMENT</h1>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      What is HIV treatment?
      </h2>
      <p className="text-gray-700">
      HIV treatment (antiretroviral therapy or ART) involves taking medicine as prescribed by a health care provider. HIV treatment reduces the amount of HIV in your body and helps you stay healthy.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        There is no cure for HIV, but you can control it with HIV treatment.
        </li>
        <li>
        Most people can get the virus under control within six months.
        </li>
        <li>HIV treatment does not prevent transmission of other sexually transmitted diseases.</li>
      </ul>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      When should I start HIV treatment?
      </h2>
      <p className="text-gray-700">
      Start HIV treatment as soon as possible after diagnosis.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        All people with HIV should take HIV treatment, no matter how long they’ve had HIV or how healthy they are.
        </li>
        <li>
        Talk to your health care provider about any medical conditions or other medicines you are taking.
        </li>
      </ul>

      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      What if I delay HIV treatment?
      </h2>
      <p className="text-gray-700">
      If you delay treatment, HIV will continue to harm your immune system. Delaying treatment will put you at higher risk for transmitting HIV to your partners, getting sick, and developing AIDS.
      </p>

      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      Are there different types of HIV treatment?
      </h2>
      <p className="text-gray-700">
      There are two types of HIV treatment: pills and shots.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Pills are recommended for people who are just starting HIV treatment. There are many FDA-approved single pill and combination medicines available.
        </li>
        <li>
        People who have had an undetectable viral load (or have been virally suppressed) for at least three months may consider shots.
        </li>
      </ul>

      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      What are HIV treatment shots?
      </h2>
      <p className="text-gray-700">
      HIV treatment shots are long-acting injections used to treat people with HIV. The shots are given by your health care provider and require routine office visits. HIV treatment shots are given once a month or once every other month, depending on your treatment plan.
      </p>

      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      Can I switch my HIV treatment from pills to shots?
      </h2>
      <p className="text-gray-700">
      Talk to your health care provider about changing your HIV treatment plan. Shots may be right for you if you are an adult with HIV who
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        has an undetectable viral load (or has achieved viral suppression),
        </li>
        <li>
        has no history of treatment failure, and
        </li>
        <li>has no known allergy to the medicines in the shot.</li>
      </ul>

      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      What are the benefits of taking HIV treatment as prescribed?
      </h2>
      <p className="text-gray-700">
      HIV treatment reduces the amount of HIV in the blood (viral load).  
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Taking your HIV medicine as prescribed will help keep your viral load low.
        </li>
        <li>
        HIV treatment can make the viral load very low (viral suppression). Viral suppression means having less than 200 copies of HIV per milliliter of blood.
        </li>
        <li>HIV treatment can make the viral load so low that a test can’t detect it (undetectable viral load).</li>
        <li>If your viral load goes down after starting HIV treatment, that means treatment is working. Continue to take your HIV treatment as prescribed.</li>
        <li>If you skip your HIV treatment, even now and then, you are giving HIV the chance to multiply rapidly. This could weaken your immune system, and you could become sick.</li>
        <li>Getting and keeping an undetectable viral load (or staying virally suppressed) is the best way to stay healthy and protect others.</li>
      </ul>
      <p className="text-gray-700">
      HIV treatment prevents transmission to others.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        If you have an undetectable viral load, you will not transmit HIV through sex. This is also known as Undetectable = Untransmittable.
        </li>
        <li>
        Having an undetectable viral load likely reduces the risk of HIV transmission through sharing needles, syringes, or other injection equipment (for example, cookers), but we don’t know by how much.
        </li>
        <li>Having an undetectable viral load also prevents perinatal transmission. If a person with HIV takes their HIV medicine as prescribed throughout pregnancy and childbirth and gives HIV treatment to their baby for 4 to 6 weeks after birth, the risk of transmission can be 1% or less.</li>
        <li>Having an undetectable viral load greatly reduces the risk of transmitting HIV through breastfeeding but doesn’t eliminate the risk. The current recommendation in the United States is that parents with HIV should not breastfeed their babies.</li>
      </ul>
      <p className="text-gray-700">
      Taking your HIV medicine as prescribed helps prevent drug resistance. 
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Drug resistance develops when people with HIV don't take their pills as prescribed or miss their shots. The virus can change (mutate) and may limit your options for successful HIV treatment.  
        </li>
        <li>
        If you develop drug resistance, it will limit your options for successful HIV treatment.    
        </li>
        <li>Drug-resistant strains of HIV can be transmitted to others.
        </li>
      </ul>

      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      Does HIV Treatment cause side effects?
      </h2>
      <p className="text-gray-700">
      HIV treatment can cause side effects in some people. However, not everyone experiences side effects. The most common side effects are
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Nausea and vomiting 
        </li>
        <li>
        Diarrhea    
        </li>
        <li>Difficulty sleeping</li>
        <li>Dry mouth</li>
        <li>Headache</li>
        <li>Rash</li>
        <li>Dizziness</li>
        <li>Fatigue</li>
        <li>Temporary pain at the injection site (for shots)</li>
      </ul>

      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      What if my HIV Treatment is not working?
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Your health care provider may change your type of HIV treatment. 
        </li>
        <li>
        A change is not unusual because the same HIV treatment does not affect everyone in the same way.   
        </li>
     </ul>   
    </div>
  );
};

export default page;
