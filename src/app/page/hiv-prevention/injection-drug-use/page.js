    import React from "react";
    import STI from "../../../../assets/STI.jpg";
    import Image from "next/image";

    const page = () => {
    return (
        <div className="py-10 md:w-3/4 md:mx-auto px-5 space-y-5">
        <Image
            src={STI}
            alt="HIV Prevention, Injection Drug Use"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full md:h-[50vh] object-cover object-center mx-auto"
        />
        <h1 className="text-4xl font-bold text-[#8B0000] mt-10 uppercase">
            Injection-Drug Use
        </h1>
        <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
            Overview
        </h2>
        <p className="text-gray-700">
            Most people who get HIV get it through anal or vaginal sex, or sharing
            needles, syringes, or other drug injection equipment (for example,
            cookers). However, there are powerful tools that can help prevent
            getting or transmitting HIV.
        </p>

        <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
            Prevention steps and strategies
        </h2>
        <p className="text-gray-700">
            Choose sexual activities with little to no chance of transmitting HIV.
        </p>
        <ul className="list-disc list-inside text-gray-700">
            <li>There is little to no chance of getting HIV through oral sex</li>
            <li>
            You can't get HIV from sexual activities that don't involve contact
            with semen, vaginal fluid, or blood.
            </li>
        </ul>

        <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
            Use condoms the right way every time you have sex
        </h2>
        <ul className="list-disc list-inside text-gray-700">
            <li>
            Most condoms are highly effective in preventing HIV and other STIs,
            like gonorrhea and chlamydia.
            </li>
            <li>
            Condoms are less effective at preventing STIs that can be transmitted
            through sores or cuts, like genital herpes and syphilis.
            </li>
            <li>
            You can buy condoms online, in-store, or get them for free at your
            local clinic.
            </li>
        </ul>

        <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
            Take PrEP
        </h2>
        <ul className="list-disc list-inside text-gray-700">
            <li>
            PrEP (pre-exposure prophylaxis) is medicine people take to prevent
            getting HIV.
            </li>
            <li>
            PrEP is highly effective for preventing HIV from sex and injection
            drug use when taken as prescribed.
            </li>
        </ul>
        <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
            Don't have sex
        </h2>
        <ul className="list-disc list-inside text-gray-700">
            <li>
            Not having sex (being abstinent) is a 100% effective way to make sure
            you won't get HIV through sex.
            </li>
            <li>
            You can be abstinent at different times in your life for different
            reasons.
            </li>
            <li>Not having sex also prevents other STIs and pregnancy.</li>
        </ul>
        <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
            Get tested and treated for other STIs
        </h2>
        <ul className="list-disc list-inside text-gray-700">
            <li>If you have another STI, you are more likely to get HIV.</li>
            <li>
            Many people with an STI may not know they have one because they don't
            have symptoms.
            </li>
        </ul>
        <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
            If you inject drugs, never share needles, syringes, or other drug
            injection equipment
        </h2>
        <ul className="list-disc list-inside text-gray-700">
            <li>
            Use new, clean syringes and injection equipment every time you inject.
            </li>
            <li>
            You can get new needles and syringes and safely dispose of used at
            syringe services programs (SSPs).
            </li>
            <li>Some pharmacies sell needles without a prescription.</li>
            <li>
            If you do share syringes, use bleach to clean them. A disinfected
            syringe is not as good as a new, sterile syringe, but it can greatly
            reduce your chances for HIV and viral hepatitis.
            </li>
        </ul>
        <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
            Don't inject drugs
        </h2>
        <ul className="list-disc list-inside text-gray-700">
            <li>
            Not injecting drugs is a 100% effective way to make sure you won't get
            HIV through injection drug use.
            </li>
            <li>
            Talk with a counselor, doctor, or other health care provider about
            treatment for substance use disorder, including medication-assisted
            treatment.
            </li>
        </ul>
        <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
            Ask about PEP if you think you may have recently been exposed to HIV
        </h2>
        <ul className="list-disc list-inside text-gray-700">
            <li>
            PEP (post-exposure prophylaxis) is medicine people take to prevent HIV
            after a possible exposure.
            </li>
            <li>
            If you think you may have been exposed to HIV in the last 72 hours,
            talk to your health care provider, an emergency room doctor, or an
            urgent care provider right away about PEP.
            </li>
        </ul>

        <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
            If you or your partner has HIV, get and stay in treatment
        </h2>
        <ul className="list-disc list-inside text-gray-700">
            <li>
            This is the most important thing people with HIV can do to stay
            healthy
            </li>
            <li>
            People with HIV who take HIV medicine and get and keep an undetectable
            viral load will not transmit HIV to their sex partners.
            </li>
        </ul>
        <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
            If you or your partner has HIV, get and stay in treatment
        </h2>
        <ul className="list-disc list-inside text-gray-700">
            <li>
            This is the most important thing people with HIV can do to stay
            healthy
            </li>
            <li>
            People with HIV who take HIV medicine and get and keep an undetectable
            viral load will not transmit HIV to their sex partners.
            </li>
        </ul>
        <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
            If you are pregnant, get tested for HIV as soon as possible to prevent
            transmitting HIV to your baby
        </h2>
        <ul className="list-disc list-inside text-gray-700">
            <li>
            If your test result is negative and you or your partner engage in
            behaviors that increase your chances of getting or transmitting HIV,
            get tested again in your third trimester.
            </li>
            <li>
            If your test result is positive, you can reduce the chances of
            transmitting HIV to your baby by taking HIV medicine as prescribed
            throughout pregnancy, labor, and delivery, getting and keeping a
            suppressed viral load, and giving HIV preventive medicine to your baby
            after giving birth.
            </li>
            <li>
            If you have a partner with HIV and are considering getting pregnant,
            talk to your health care provider about PrEP.
            </li>
        </ul>

        <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
            Talk to your health care provider about male circumcision
        </h2>
        <p className="text-gray-700">
            Male circumcision may decrease the chance of HIV transmission in some
            situations, but less than some other prevention options. Talk to your
            health care provider about the benefits and drawbacks of male
            circumcision.
        </p>
        </div>
    );
    };

    export default page;
