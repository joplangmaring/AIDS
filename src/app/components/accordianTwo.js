'use client'
import { useState } from 'react';

const AccordionItemTwo = ({ title, content, isOpen, onClick }) => (
  <div className="border-b">
    <h2 className="accordion-header">
      <button
        className="w-full text-left py-4 px-6 font-medium text-lg bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition-all"
        onClick={onClick}
      >
        {title}
        <span className="float-right">
          {isOpen ? '-' : '+'}
        </span>
      </button>
    </h2>
    {isOpen && (
      <div className="px-6 py-4 text-gray-700">
        {content}
      </div>
    )}
  </div>
);

export default function AccordionTwo() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionDataTwo = [
    {
      title: 'What is an HIV self-test?',
      content:
        "An HIV self-test (or rapid self-test) is an antibody test that can be used at home or in a private location. With an HIV self-test, you can get your test results within 20 minutes.",
    },
    {
      title: 'How do I use an HIV self-test?',
      content:
        "An HIV self-test is a convenient and private way to check your HIV status at home. To use an HIV self-test, you typically need to collect a sample of either blood (through a fingerstick) or oral fluid (from your gums using a swab). Follow the instructions provided with the test kit carefully, as each test may have slightly different steps. First, clean your hands and the area where you'll be testing. For a blood-based test, use the lancet to prick your finger and collect a small drop of blood on the test device. For an oral fluid test, swipe the swab along your gums as directed. After collecting the sample, apply it to the test device, and wait for the results, usually within 15-30 minutes. The result will typically show as a line or mark indicating whether you're HIV-negative or HIV-positive. It is important to remember that a positive result from a self-test should be followed by a confirmatory test at a healthcare facility. Additionally, a negative result doesn't rule out HIV if you tested during the 'window period', so it's recommended to test again after a few weeks or months, especially if you've had recent risk exposure.",
    },
    {
      title: 'What does a negative test result mean?',
      content:
        "A negative result doesn't necessarily mean that you don't have HIV. That's because of the window period — the time between HIV exposure and when a test can detect HIV in your body. If you get an HIV test after a potential HIV exposure and the result is negative, get tested again after the window period for the test you took. If you test again after the window period, have no possible HIV exposure during that time, and the result is negative, you do not have HIV.If you're sexually active or use needles to inject drugs, continue to take actions to prevent HIV, like taking medicines to prevent HIV. If you have certain risk factors, you should continue getting tested at least once a year.",
    },
    {
      title: 'If I have a negative result, does that mean my partner is HIV-negative also?',
      content:
        "No. Your HIV test result reveals only your HIV status. HIV is not necessarily transmitted every time you have sex or share needles, syringes, or other drug injection equipment (for example, cookers). And the chance of getting HIV varies depending on the type of exposure or behavior. Taking an HIV test is not a way to find out if your partner has HIV. Be open with your partners and ask them to tell you their HIV status. But keep in mind that your partners may not know, may be wrong, or may not tell you about their status. Consider getting tested together so you can both know your HIV status and take steps to keep yourselves healthy.",
    },
    {
        title: 'What does a positive test result mean?',
        content:
          "If you receive a positive result from any type of antibody test, it is essential to undergo a follow-up test to confirm the result. If you test positive in a community program or through an HIV self-test, it is important to visit a healthcare provider for confirmatory testing. On the other hand, if the test is conducted in a healthcare setting or a lab and the result is positive, the lab will typically perform the follow-up test using the same blood sample from the initial test. If the follow-up test is also positive, it confirms that you have HIV. It is crucial to seek medical care and support for further steps in managing the condition.",
      },
    {
        title: 'What is the window period for the HIV test I took?',
        content:
          "Antibody tests are typically able to detect HIV between 23 to 90 days after exposure. Most rapid tests and self-tests fall under the category of antibody tests. A rapid antigen/antibody test, which is done using blood from a finger stick, can usually detect HIV between 18 to 90 days after exposure. An antigen/antibody lab test, which uses blood drawn from a vein, can typically detect HIV within 18 to 45 days after exposure. On the other hand, a nucleic acid test (NAT), which is the most sensitive test, can detect HIV much earlier, usually within 10 to 33 days after exposure. It’s important to note that the accuracy of these tests depends on the timing of exposure, with the 'window period' being a crucial factor in determining when HIV can be detected.",
      },
  ];

  return (
    <div className="w-full mx-auto md:mt-5 border rounded-lg shadow-md ">
      {accordionDataTwo.map((item, index) => (
        <AccordionItemTwo
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
}