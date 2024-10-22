import Meghalogo from '../../assets/meghalogo.png';
import Aidlog0 from '../../assets/aidlogo.png';
import Nacologo from '../../assets/naco.png';
import Image from 'next/image';
import person from '../../assets/person.png';
import object from '../../assets/OBJECTS.png';
import { IoLocationSharp } from "react-icons/io5";
import smalllogos from '../../assets/smalllogos.png'

const Logos = () => {
    return (
        <div>
            {/* <Image src={smalllogos} alt="" className='md:hidden mt-32' /> */}
            <div className="flex justify-center md:justify-around items-end"> {/* Ensure items are aligned at the bottom */}
                <div className="flex flex-row md:flex-row items-end md:gap-0"> {/* Stack items vertically on small screens */}
                    {/* Left Image */}
                    <div className='w-[130px] h-[100px] md:h-[385px] md:w-[230px] hidden md:flex  flex items-end'> {/* Align bottom */}
                        <Image
                            src={object}
                            alt=""
                            height={560}
                            width={230}
                            className="self-end"
                        />
                    </div>

                    {/* Center Content */}
                    <div className="text-center justify-center md:mx-16 flex flex-col">
                        <div className='flex items-center justify-center md:flex-col mt-32 md:mt-32'>
                            <h1 className='font-bold text-[12px] md:text-xl text-black text-center'>
                                GOVERNMENT OF MEGHALAYA<br />MINISTRY OF HEALTH & FAMILY WELFARE
                            </h1>
                        </div>

                        <div className='flex md:flex-row justify-around items-center gap-4 md:gap-10 mt-6 mx-5'>
                            {/* Logos */}
                            <div>
                                <Image src={Meghalogo} height={80} width={80} alt="" />
                            </div>
                            <div>
                                <Image src={Aidlog0} height={80} width={80} alt="" />
                            </div>
                            <div>
                                <Image src={Nacologo} height={90} width={90} alt="" />
                            </div>
                        </div>
                        <div className='flex items-center mx-4 justify-center flex-col mt-6 md:mt-8'>
                            <h1 className='font-black text-[15px] md:text-3xl text-black text-center'>
                                MEGHALAYA AIDS CONTROL SOCIETY
                            </h1>
                            <p className='md:text-xl text-[15px] mb-10'>
                                Pasteur Hills, Shillong - 793001
                            </p>
                        </div>

                        <div className='flex md:hidden'>
                            <div className='w-[100px] mt-20 h-[100px] md:h-[385px] md:w-[230px]  md:hidden  flex items-end'> {/* Align bottom */}
                                <Image
                                    src={object}
                                    alt=""
                                    height='auto'
                                    width='auto'
                                    className="self-end"
                                />
                            </div>
                            <div className='flex  flex-col md:hidden'>
                                <h1 className=' text-[#B32323] font-bold text-[20px]'>Join the fight</h1>
                                <h1 className=' text-[#B32323] font-bold text-[20px]'>against</h1>
                                <h1 className=' text-[#B32323] font-bold text-[20px]'>HIV/AIDS</h1>
                            </div>
                            <div className='w-[100px] mt-20 h-[100px] md:h-[385px] md:w-[230px]  md:hidden flex items-end'> {/* Align bottom */}
                                <Image
                                    src={person}
                                    alt=""
                                    height='auto'
                                    width='auto'
                                    className="self-end"
                                />
                            </div>
                        </div>
                        <div className='flex flex-col items-center  hidden md:flex'>
                            <h1 className='text-[18px] md:text-[45px] font-bold text-[#B32323]  '>JOIN THE FIGHT</h1>
                            <h1 className='text-[18px] md:text-[45px] font-bold text-[#B32323] '>AGAINST HIV/AIDS</h1>
                        </div>
                        <div className='flex justify-center items-center mb-2 mt-6 md:mt-10 hidden md:flex'>
                            <IoLocationSharp className="text-[#B32323] text-[20px] md:text-2xl" />
                            <h1 className="text-[#B32323] text-[13px] md:text-[16px] font-bold">
                                Find this service near you
                            </h1>
                        </div>
                        <div className='flex items-center justify-center hidden md:flex mb-16'>
                            <input
                                type="text"
                                className="p-2 md:p-4 rounded-full border border-red-800 outline-none md:w-[450px] w-[250px] placeholder:text-base"
                                placeholder="Enter location..."
                            />
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className='w-[100px] h-[100px] md:h-[385px] md:w-[230px] hidden md:flex flex items-end'> {/* Align bottom */}
                        <Image
                            src={person}
                            alt=""
                            height={560}
                            width={230}
                            className="self-end"
                        />
                    </div>
                </div>
            </div>
            <div className="border-b-[1px] border-gray-500"></div>
            <div className='flex justify-center items-center mb-2  md:mt-10 md:hidden md:flex mt-16'>
                <IoLocationSharp className="text-[#B32323] text-[20px] md:text-2xl" />
                <h1 className="text-[#B32323] text-[13px] md:text-[16px] font-bold">
                    Find this service near you
                </h1>
            </div>
            <div className='flex items-center justify-center md:hidden md:flex mb-16'>
                <input
                    type="text"
                    className="p-2 md:p-4 rounded-full border-2 border-red-800 outline-none md:w-[450px] w-[280px] placeholder:text-base"
                    placeholder="Enter location..."
                />
            </div>
            <div className="m-5 mt-16 md:hidden flex  justify-center mb-16">
                <h1 className="text-lg md:text-2xl w-[90%] md:w-[50%]">
                    NACO envisions an India where every person living with HIV has access to quality care and is treated with dignity. Effective prevention, care, and support for HIV/AIDS is possible in an environment where human rights are respected and where those infected or affected by HIV/AIDS live a life without stigma and discrimination.
                </h1>
            </div>
        </div>
    );
}

export default Logos;
