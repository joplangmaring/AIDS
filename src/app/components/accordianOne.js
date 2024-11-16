'use client'
import { useState } from 'react';

const AccordionItemOne = ({ title, content, isOpen, onClick }) => (
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

export default function AccordionOne() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionDataOne = [
    {
      title: 'Should I get tested for HIV?',
      content:
        "HIV testing is recommended for everyone, ideally at least once, to establish their status and take any needed precautions. Regular testing is especially important for those at higher risk, including individuals with multiple partners, those who have unprotected sex, people who share needles, and anyone with a history of STIs or other infections. Testing benefits include early detection, which allows for effective treatment, reducing the chance of transmission, and empowering individuals to make informed health decisions. Knowing your status helps protect both your health and the health of others.",
    },
    {
      title: 'What types of test are available, and how do they work?',
      content:
        "There are three types of HIV tests: antibody tests, antigen/antibody tests, and nucleic acid tests (NAT). Antibodies are produced by your immune system when you’re exposed to viruses like HIV. Antigens are foreign substances that cause your immune system to activate. If you have HIV, an antigen called p24 is produced even before antibodies develop. HIV tests are typically performed on blood or oral fluid. They may also be performed on urine.",
    },
    {
      title: 'What does a negative HIV test result mean?',
      content:
        "A negative result doesn't necessarily mean that you don't have HIV. That's because of the window period — the time between HIV exposure and when a test can detect HIV in your body. If you get an HIV test after a potential HIV exposure and the result is negative, get tested again after the window period for the test you took. If you test again after the window period, have no possible HIV exposure during that time, and the result is negative, you do not have HIV.If you're sexually active or use needles to inject drugs, continue to take actions to prevent HIV, like taking medicines to prevent HIV. If you have certain risk factors, you should continue getting tested at least once a year.",
    },
  ];

  return (
    <div className="w-full mx-auto md:mt-5 border rounded-lg shadow-md ">
      {accordionDataOne.map((item, index) => (
        <AccordionItemOne
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