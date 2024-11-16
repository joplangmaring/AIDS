import React from "react";
import condom from "../../../../assets/condom.jpg";
import Image from "next/image";

const page = () => {
  return (
    <div className="py-10 md:w-3/4 md:mx-auto px-5 space-y-5">
      <Image
        src={condom}
        alt="HIV Prevention Use Condom"
        width="0"
        height="0"
        sizes="100vw"
        className=" w-full md:h-[50vh] object-cover object-center mx-auto"
      />
      <h1 className="text-4xl font-bold text-[#8B0000] mt-10">CONDOMS</h1>
      <p>
        Talk to your partners and friends about condoms. There are more HIV
        prevention options than ever before, and condoms are still a highly
        effective option to prevent both HIV and other sexually transmitted
        diseases (STDs).
      </p>
      <p>
        If you use them the right way every time you have sex, condoms are
        highly effective in preventing HIV infection. But it’s important to
        educate yourself about how to use them the right way.
      </p>
      <p>
        Condoms can also help prevent other STDs you can get through body
        fluids, like gonorrhea and chlamydia. However, they provide less
        protection against STDs spread through skin-to-skin contact, like human
        papillomavirus or HPV (genital warts), genital herpes, and syphilis.
      </p>
    </div>
  );
};

export default page;
