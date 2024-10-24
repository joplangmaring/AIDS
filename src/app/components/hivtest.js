'use client';
import { useEffect, useRef } from 'react';
import hivtesting from '../../assets/test.png';
import hand from '../../assets/hand.png';
import treat from '../../assets/treat.png';
import consultan from '../../assets/prevention.png';
import Image from 'next/image';
import background from '../../assets/backgroundhiv.png';

const HivTest = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollDelay = 30;

    const scrollInterval = setInterval(() => {
      scrollAmount += scrollStep;
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollAmount;
        if (scrollAmount >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
          scrollAmount = 0;
        }
      }
    }, scrollDelay);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="relative flex justify-center gap-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background.src})` }}
      />
      <div className="absolute inset-0 bg-[#000000B2] z-0" />
      
      <div className="grid grid-cols-2 gap-4 p-4 z-10 my-10">
        {/* Left Side: Images Grid */}
        <div className="flex flex-col items-center justify-between text-center p-2 rounded-md  shadow-md">
          <Image
            src={hivtesting}
            alt="HIV Testing"
            width={208}
            height={208}
            className="bg-white h-52 rounded-t-2xl shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
          />
          <div className="bg-red-800 w-full flex flex-col rounded-b-2xl">
            <span className="text-white">HIV</span>
            <span className="text-white">TESTING</span>
          </div>
        </div>

        {/* HIV Prevention */}
        <div className="flex flex-col items-center justify-between text-center p-2 rounded-md shadow-md">
          <Image
            src={consultan}
            alt="HIV Prevention"
            width={208}
            height={208}
            className="bg-white h-52 rounded-t-2xl shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
          />
          <div className="bg-red-800 w-full flex flex-col rounded-b-2xl">
            <span className="text-white">HIV</span>
            <span className="text-white">PREVENTION</span>
          </div>
        </div>

        {/* HIV Treatment */}
        <div className="flex flex-col items-center justify-between text-center p-2 rounded-md shadow-md">
          <Image
            src={treat}
            alt="HIV Treatment"
            width={208}
            height={208}
            className="bg-white h-52 rounded-t-2xl shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
          />
          <div className="bg-red-800 w-full flex flex-col rounded-b-2xl">
            <span className="text-white">HIV</span>
            <span className="text-white">TREATMENT</span>
          </div>
        </div>

        {/* HIV Stigma & Discrimination */}
        <div className="flex flex-col items-center justify-between text-center p-2 rounded-md shadow-md">
          <Image
            src={hand}
            alt="HIV Stigma & Discrimination"
            width={208}
            height={208}
            className="bg-white h-52 rounded-t-2xl shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
          />
          <div className="bg-red-800 w-full flex flex-col rounded-b-2xl">
            <span className="text-white">HIV STIGMA and</span>
            <span className="text-white">Discrimination</span>
          </div>
        </div>
      </div>

      {/* Scrolling Content */}
      <div className="w-1/3 z-10 mt-16">
        <div className="flex gap-4 justify-center">
          <span className="bg-[#E0021C] px-6 py-2 text-white text-2xl rounded-t-[6px] ">News</span>
          <span className="bg-[#E0021C] px-6 py-2 text-white text-2xl rounded-t-[6px]">Tenders</span>
          <span className="bg-[#E0E0E0] px-6 py-2 text-black text-2xl rounded-t-[6px]">Recruitment</span>
        </div>
        <div ref={scrollContainerRef} className="bg-[#f3f0f0] p-4 h-[500px] overflow-y-auto">
          <div className="mx-10">
            <h1 className="font-bold">ADVERTISEMENT FOR INTERNSHIP POSITION IN THE SERB-DSF FUNDED PROJECT</h1>
            <p className="text-sm text-gray-600">Uploaded on 21 Oct 2024</p>
            <div className="w-full border-b-[2px] my-5 border-black"></div>
          </div>
          {/* Repeatable sections */}
          <div className="mx-10">
            <h1 className="font-bold">ADVERTISEMENT FOR NON-FACULTY POSITION</h1>
            <p className="text-sm text-gray-600">Uploaded on 21 Oct 2024</p>
            <div className="w-full border-b-[2px] my-5 border-black"></div>
          </div>
          <div className="mx-10">
            <h1 className="font-bold">ADVERTISEMENT FOR NON-FACULTY POSITION</h1>
            <p className="text-sm text-gray-600">Uploaded on 21 Oct 2024</p>
            <div className="w-full border-b-[2px] my-5 border-black"></div>
          </div>
          <div className="mx-10">
            <h1 className="font-bold">ADVERTISEMENT FOR NON-FACULTY POSITION</h1>
            <p className="text-sm text-gray-600">Uploaded on 21 Oct 2024</p>
            <div className="w-full border-b-[2px] my-5 border-black"></div>
          </div>
          <div className="mx-10">
            <h1 className="font-bold">ADVERTISEMENT FOR NON-FACULTY POSITION</h1>
            <p className="text-sm text-gray-600">Uploaded on 21 Oct 2024</p>
            <div className="w-full border-b-[2px] my-5 border-black"></div>
          </div>
          <div className="mx-10">
            <h1 className="font-bold">ADVERTISEMENT FOR NON-FACULTY POSITION</h1>
            <p className="text-sm text-gray-600">Uploaded on 21 Oct 2024</p>
            <div className="w-full border-b-[2px] my-5 border-black"></div>
          </div>
          <div className="mx-10">
            <h1 className="font-bold">ADVERTISEMENT FOR NON-FACULTY POSITION</h1>
            <p className="text-sm text-gray-600">Uploaded on 21 Oct 2024</p>
            <div className="w-full border-b-[2px] my-5 border-black"></div>
          </div>
          <div className="mx-10">
            <h1 className="font-bold">ADVERTISEMENT FOR NON-FACULTY POSITION</h1>
            <p className="text-sm text-gray-600">Uploaded on 21 Oct 2024</p>
            <div className="w-full border-b-[2px] my-5 border-black"></div>
          </div>
          <div className="mx-10">
            <h1 className="font-bold">ADVERTISEMENT FOR NON-FACULTY POSITION</h1>
            <p className="text-sm text-gray-600">Uploaded on 21 Oct 2024</p>
            <div className="w-full border-b-[2px] my-5 border-black"></div>
          </div>
          {/* End of Repeat */}
          <div className="flex justify-end mt-10">
            <h1 className="bg-[#E0021C] px-2 py-2 text-white w-[30%]">All Recruitment</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HivTest;
