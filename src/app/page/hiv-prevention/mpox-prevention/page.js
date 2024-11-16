import React from "react";
import MPOX from "../../../../assets/MPOX.jpeg";
import Image from "next/image";

const page = () => {
  return (
    <div className="py-10 md:w-3/4 md:mx-auto px-5 space-y-5">
      <Image
        src={MPOX}
        alt="MPOX PREVENTION"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full md:h-[50vh] object-cover object-center mx-auto"
      />
      <h1 className="text-4xl font-bold text-[#8B0000] mt-10">MPOX-PREVENTION</h1>
      <p>
      Mpox prevention focuses on minimizing close contact with infected individuals or contaminated objects. Avoid direct skin-to-skin contact with anyone showing symptoms like rashes, sores, or lesions. Practicing good hygiene, such as frequent handwashing with soap and water or using hand sanitizer, can significantly reduce the risk of transmission.
      </p>
      <p>
      Vaccination is a key strategy in preventing Mpox. High-risk individuals, including those with close exposure to confirmed cases, are encouraged to get vaccinated. Vaccines not only provide protection but can also lessen the severity of symptoms if administered shortly after exposure.
      </p>
      <p>
      Sharing personal items like towels, bedding, or utensils should be avoided to prevent Mpox spread. If someone in your household is infected, isolate them and regularly disinfect commonly touched surfaces. Educating yourself and others about Mpox symptoms and prevention methods can further reduce the risk of outbreaks in your community.
      </p>
    </div>
  );
};

export default page;
