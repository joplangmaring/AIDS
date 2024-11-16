import React from "react";
import STI from "../../../../assets/STI.jpg";
import Image from "next/image";

const page = () => {
  return (
    <div className="py-10 md:mx-auto md:w-3/4 px-5 space-y-5">
      <Image
        src={STI}
        alt="HIV Prevention STI"
        width="0"
        height="0"
        sizes="100vw"
        className=" w-full md:h-[50vh] object-cover object-center mx-auto"
      />
      <h1 className="text-4xl font-bold text-[#8B0000] mt-10">STI</h1>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      What are STIs?
      </h2>
      <p className="text-gray-700">
      An STI is a virus, bacteria, fungus, or parasite people can get through sexual contact. Sexually transmitted diseases (STDs) develop as a result of an STI. STD implies that the infection has led to some symptom of disease.
      </p>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      Risk factors
      </h2>
      <p className="text-gray-700">
      Several behaviors can increase your risk:
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Having anal, vaginal, or oral sex without a condom
        </li>
        <li>
        Having multiple sex partners
        </li>
        <li>Having anonymous sex partners</li>
        <li>Having sex while under the influence of drugs or alcohol can lower inhibitions and result in greater sexual risk-taking.</li>
      </ul>

      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      Prevention steps and strategies
      </h2>
      <p className="text-gray-700">
      Steps to reduce your STI exposure:
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
        Abstaining from vaginal, anal, or oral sex. This is the only way to completely avoid STIs.
        </li>
        <li>
        Getting vaccinated. Vaccines are recommended for some people to prevent hepatitis B and HPV.
        </li>
        <li>Reducing your number of sex partners.</li>
        <li>Regular testing. You and your partner should get tested and share your results.</li>
        <li>Being in a mutually monogamous relationship with a partner who has been tested and does not have an STI.</li>
        <li>Using condoms the right way every time you have sex.</li>
      </ul> 

      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
      Testing, diagnosis, and treatment
      </h2>
      <p className="text-gray-700">
      Knowing your STI status is a critical step in prevention. Ask your healthcare provider to test you. Asking is the only way to know if you are receiving the right tests. Make sure your partner asks a healthcare provider about testing as well. Many STIs can be easily diagnosed and treated. If you or your partner have an STI, both of you need treatment at the same time.
      </p>
    </div>
  );
};

export default page;
