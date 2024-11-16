import React from "react";
import PrEP from "../../../../assets/PrEP.jpg";
import Image from "next/image";

const page = () => {
  return (
    <div className="py-10 md:mx-auto md:w-3/4 px-5 space-y-5">
      <Image
        src={PrEP}
        alt="HIV Prevention PrEP"
        width="0"
        height="0"
        sizes="100vw"
        className=" w-full md:h-[50vh] object-cover object-center mx-auto"
      />
      <h1 className="text-4xl font-bold text-[#8B0000] mt-10">
        PrEP (pre-exposure prophylaxis)
      </h1>
      <p>
        PrEP (pre-exposure prophylaxis) is medicine that reduces your chances of
        getting HIV from sex or injection drug use. When taken as prescribed,
        PrEP is highly effective for preventing HIV.
      </p>
      <p>
        Talk to your partners and friends about pre-exposure prophylaxis (PrEP).
        PrEP is a medicine that when taken as prescribed, can greatly reduce
        your risk of getting HIV from sex and injection drug use.
      </p>
      <p>
        PrEP can stop HIV from taking hold and spreading throughout your body.
        It is highly effective for preventing HIV if used as prescribed. And
        remember, PrEP protects you against HIV but not against other sexual
        transmitted diseases (STDs).
      </p>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
        How effective is PrEP?
      </h2>
      <p className="text-gray-700">
        PrEP is highly effective for preventing HIV.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          PrEP reduces the risk of getting HIV from sex by about 99% when taken
          as prescribed.
        </li>
        <li>
          Although there is less information about how effective PrEP pills are
          among people who inject drugs, we know that PrEP pills reduce the risk
          of getting HIV by at least 74% when taken as prescribed.
        </li>
        <li>PrEP is less effective when not taken as prescribed.</li>
      </ul>

      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      How long does PrEP take to work?  
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        For receptive anal sex (bottoming), PrEP pills reach maximum protection from HIV at about 7 days of daily use.
        </li>
        <li>
        For receptive vaginal sex and injection drug use, PrEP pills reach maximum protection at about 21 days of daily use.
        </li>
        <li>No data are available for PrEP pill effectiveness for insertive anal sex (topping) or insertive vaginal sex.</li>
        <li>We don’t know how long it takes for PrEP shots to reach maximum protection during sex.</li>
      </ul>

      <h2 className="text-lg font-bold  md:text-left text-[#8B0000]">
      Are there different types of PrEP?
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Daily Oral PrEP: A daily pill, highly effective when taken consistently.
        </li>
        <li>
        Event-Driven PrEP: Taken around periods of potential exposure, mainly for men who have sex with men.
        </li>
        <li>Long-Acting Injectable PrEP: A bimonthly injection, ideal for those who find daily pills challenging.</li>
        <li>Vaginal Ring: A monthly ring, still experimental, releases an HIV-preventive drug internally</li>
      </ul>

      <h2 className="text-lg font-bold  md:text-left text-[#8B0000]">
      How can I pay for PrEP?
      </h2>
      <p className="text-gray-700">
      Most insurance plans and state Medicaid programs cover PrEP. Under the Affordable Care Act, PrEP must be free under almost all health insurance plans. That means you can't be charged for your PrEP medication or the clinic visits and lab tests you need to maintain your prescription.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Insurance and Medicaid: Most insurance plans and state Medicaid programs cover PrEP under the Affordable Care Act, making it free.
        </li>
        <li>
        Co-pay Assistance Programs: Reduce costs of PrEP medications without considering income eligibility.
        </li>
        <li>ViiVConnect: Provides financial assistance specifically for PrEP shots.</li>
        <li>State PrEP Assistance Programs: Cover medication, clinical visits, lab tests, or a combination of these, depending on the state.</li>
      </ul>
    </div>
  );
};

export default page;