import React from "react";
import PEP from "../../../../assets/PEP.jpg";
import Image from "next/image";

const page = () => {
  return (
    <div className="py-10 md:mx-auto md:w-3/4 px-5 space-y-5">
      <Image
        src={PEP}
        alt="HIV Prevention PEP"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full md:h-[50vh] object-cover object-center mx-auto"
      />
      <h1 className="text-4xl font-bold text-[#8B0000] mt-10">PEP</h1>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      What is PEP?
      </h2>
      <p className="text-gray-700">
      PEP (post-exposure prophylaxis) means taking medicine to prevent HIV after a possible exposure.
      </p>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      PEP Must Be Started Within 72 Hours of Possible Exposure to HIV
      </h2>
      <p className="text-gray-700">
      Talk right away (within 72 hours) to your health care provider, an emergency room doctor, or an urgent care provider about PEP if you think you've recently been exposed to HIV:
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        during sex (for example, if the condom broke),
        </li>
        <li>
        through sharing needles, syringes, or other equipment to inject drugs (for example, cookers), or
        </li>
        <li>if you’ve been sexually assaulted.</li>
      </ul>

      <h2 className="text-lg font-bold  md:text-left text-[#8B0000]">
      PEP is for Emergency Situations
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        PEP is given after a possible exposure to HIV.
        </li>
        <li>
        PEP is not a substitute for regular use of other HIV prevention.
        </li>
        <li>PEP is not the right choice for people who may be exposed to HIV frequently.</li>
        <li>If you are at ongoing risk for HIV, such as through repeated exposures to HIV, talk to your health care provider about PrEP (pre-exposure prophylaxis).</li>
      </ul>

      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      How can I pay for PEP?
      </h2>
      <p className="text-gray-700">
      Depending on the reason you are prescribed PEP, you may qualify for free or low-cost PEP medicines.
      </p>

      <h2 className="text-lg md:text-left text-[#8B0000]">
      Paying for PEP After a Sexual Assault
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        You may qualify for partial or total reimbursement for medicines and clinical care costs.
        </li>
      </ul>
      <h2 className="text-lg md:text-left text-[#8B0000]">
      Paying for PEP After an Exposure at Work
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
       Your workplace health insurance or workers' compensation will usually pay for PEP.
        </li>
      </ul>
        <h2 className="text-lg md:text-left text-[#8B0000]">
        Paying for PEP for Another Reason
        </h2>
        <ul className="list-disc list-inside text-gray-700">
            <li>
            If you cannot get insurance coverage, your health care provider can apply for free PEP medicines through the medication assistance programs run by the manufacturers.
            </li>
            <li>These requests for assistance can be handled urgently in many cases to avoid a delay in getting medicine.</li>
        </ul>
    </div>
  );
};

export default page;
