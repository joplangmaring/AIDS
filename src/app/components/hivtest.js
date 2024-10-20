import hivtesting from '../../assets/hivtest.jpg';
import hand from '../../assets/hand.jpg';
import treat from '../../assets/treat.jpg';
import consultan from '../../assets/consultan.jpg';
import Image from 'next/image';
import rebon from './../../assets/rebn.png'

const HivTest = () => {
  return (
    <>
      {/* Parent container set to relative to control the positioning of the absolute div */}
      <div className="relative">
        <div className="flex items-end justify-end">
          <Image src={rebon} alt="" className="w-[30%] h-[40%] flex" />
        </div>

        {/* This div is absolutely positioned, and z-index ensures it's on top */}
        <div className="absolute inset-0 mt-12 z-10">
          <div className=' ml-28 mt-16'>
          <h1 className='text-2xl w-[50%] '>NACO envisions an India where every person living with HIV has access to quality care and is treated with dignity. Effective prevention, care and support for HIV/AIDS is possible in an environment where human rights are respected and where those infected or affected by HIV/AIDS live a life without stigma and discrimination.</h1>
          </div>
        
          <div className="flex justify-center gap-3 items-center mt-36">
            <div className="flex flex-col items-center bg-white w-[50%] max-w-xs  custom-side-shadow md:rounded-b-2xl rounded-b-lg">
              <Image src={hivtesting} alt="HIV Testing" className="object-cover w-full h-[300px] mx-auto  md:rounded-b-2xl" />
              <span className="p-3 text-center bg-red-800 w-full h-auto flex flex-col justify-center text-white font-bold md:text-xl text-md leading-5 md:rounded-b-2xl rounded-b-lg">
                HIV TESTING
              </span>
            </div>
            <div className="flex flex-col items-center bg-white w-[50%] max-w-xs  custom-side-shadow md:rounded-b-2xl rounded-b-lg">
              <Image src={consultan} alt="HIV Prevention" className="object-cover w-full h-[300px] mx-auto" />
              <span className="p-3 text-center bg-red-800 w-full h-auto flex flex-col justify-center text-white font-bold md:text-xl text-md leading-5 md:rounded-b-2xl rounded-b-lg">
                HIV PREVENTION
              </span>
            </div>
            <div className="flex flex-col items-center bg-white w-[50%] max-w-xs  custom-side-shadow md:rounded-b-2xl rounded-b-lg">
              <Image src={treat} alt="HIV Treatment" className="object-cover w-full h-[300px] mx-auto" />
              <span className="p-3 text-center bg-red-800 w-full h-auto flex flex-col justify-center text-white font-bold md:text-xl text-md leading-5 md:rounded-b-2xl rounded-b-lg">
                HIV TREATMENT
              </span>
            </div>
            <div className="flex flex-col items-center bg-white w-[50%] max-w-xs custom-side-shadowmd:rounded-b-2xl rounded-b-lg ">
              <Image src={hand} alt="HIV Stigma & Discrimination" className="object-cover w-full h-[300px] mx-auto"/>
              <span className="p-3 text-center bg-red-800 w-full text-[10px] h-auto flex flex-col justify-center text-white font-bold md:text-xl text-md leading-5 md:rounded-b-2xl rounded-b-lg">
                HIV STIGMA
              </span>
            </div>

          </div>




        </div>
      </div>
    </>
  );
};

export default HivTest;
