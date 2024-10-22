import hivtesting from '../../assets/test.png';
import hand from '../../assets/hand.png';
import treat from '../../assets/treat.png';
import consultan from '../../assets/prevention.png';
import Image from 'next/image';
import rebon from './../../assets/rebn.png';

const HivTest = () => {
  return (
    <div className='relative'>
      {/* Background image container */}
      <div className="relative">
        <div className="flex justify-end">
          {/* Background Image */}
          <Image src={rebon} alt="Rebon background" className="w-[80%] md:w-[30%] h-auto" />
        </div>

        {/* Content with Absolute positioning */}
        <div className="absolute inset-0 z-10">
          {/* Text section */}
          <div className="ml-36 mt-36 hidden md:flex">
            <h1 className="text-lg md:text-2xl w-[90%] md:w-[60%]">
              NACO envisions an India where every person living with HIV has access to quality care and is treated with dignity. Effective prevention, care, and support for HIV/AIDS is possible in an environment where human rights are respected and where those infected or affected by HIV/AIDS live a life without stigma and discrimination.
            </h1>
          </div>
          <div className="border-b-[1px] border-gray-500 md:hidden"></div>
          {/* Grid for Images and Descriptions */}
          <div className="grid grid-cols-2 gap-2 m-10 md:mt-40 md:grid-cols-4 md:gap-0 md:mx-36">
            {/* HIV Testing */}
            <div className="w-[100%] md:w-[300px] md:h-[250px] flex flex-col items-center justify-between text-center bg-white">
              <Image src={hivtesting} alt="HIV Testing" className="w-full h-[100%] object-cover shadow-[0_4px_10px_rgba(0,0,0,0.5)]" />
              <div className='bg-red-800 w-full flex flex-col md:flex-row md:justify-center p-4 rounded-b-2xl'>
                <span className="text-white">HIV</span>
                <span className="text-white">TESTING</span>
              </div>
            </div>

            {/* HIV Prevention */}
            <div className="w-[100%] md:w-[300px] md:h-[250px] flex flex-col items-center justify-between text-center bg-white">
              <Image src={consultan} alt="HIV Prevention" className="w-full h-[100%] object-cover shadow-[0_4px_10px_rgba(0,0,0,0.5)]" />
              <div className='bg-red-800 w-full flex flex-col md:flex-row md:justify-center p-4 rounded-b-2xl'>
                <span className="text-white">HIV</span>
                <span className="text-white">PREVENTION</span>
              </div>
            </div>

            {/* HIV Treatment */}
            <div className="w-[100%] md:w-[300px] md:h-[250px] flex flex-col items-center justify-between text-center bg-white">
              <Image src={treat} alt="HIV Treatment" className="w-full h-[100%] object-cover shadow-[0_4px_10px_rgba(0,0,0,0.5)]" />
              <div className='bg-red-800 w-full flex flex-col md:flex-row md:justify-center p-4 rounded-b-2xl'>
                <span className="text-white">HIV</span>
                <span className="text-white">TREATMENT</span>
              </div>
            </div>

            {/* HIV Stigma & Discrimination */}
            <div className="w-[100%] md:w-[300px] md:h-[250px] flex flex-col items-center justify-between text-center bg-white rounded-b-2xl">
              <Image src={hand} alt="HIV Stigma & Discrimination" className="w-full h-[100%] object-cover shadow-[0_4px_10px_rgba(0,0,0,0.5)]" />
              <div className='bg-red-800 w-full flex flex-col md:flex-row md:justify-center p-4 rounded-b-2xl'>
                <span className="text-white">HIV STIGMA and</span>
                <span className="text-white">Discrimination</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HivTest;
