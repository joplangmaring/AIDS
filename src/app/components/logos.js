import Meghalogo from '../../assets/meghalogo.png';
import Aidlog0 from '../../assets/aidlogo.png';
import Nacologo from '../../assets/naco.png';
import Image from 'next/image';
import person from '../../assets/person.png';
import object from '../../assets/OBJECTS.png';
import { IoLocationSharp } from "react-icons/io5";

const Logos = () => {
    return (
        <div className=''>
            <div className='flex items-center md:mx-10 mx-5 justify-center flex-col mt-32'>
                <h1 className='font-bold md:text-xl text-md text-black text-center'>
                    GOVERNMENT OF MEGHALAYA<br />MINISTRY OF HEALTH & FAMILY WELFARE
                </h1>
            </div>
            <div className='flex md:hidden mt-5 items-center flex-col text-center'>
                <h1 className='text-8xl text-md font-black text-red-800' style={{ margin: 0, lineHeight: 1 }}>
                    1097
                </h1>
                <p className='md:text-xl text-[25px]' style={{ margin: 0, lineHeight: 1 }}>
                    Call for Help
                </p>
            </div>
            <div className='flex md:flex-row justify-around items-center gap-10 mt-8 mx-5'>
                <div className='hidden md:flex items-center flex-col text-center'>
                    {/* <h1 className='text-8xl text-md font-black text-red-800' style={{ margin: 0, lineHeight: 1 }}>
                        1097
                    </h1> */}
                    {/* <p className='md:text-xl text-[25px]' style={{ margin: 0, lineHeight: 1 }}>
                        Call for Help
                    </p> */}
                </div>

                <div>
                    <Image src={Meghalogo} height="auto" width={100} alt="" />
                </div>
                <div>
                    <Image src={Aidlog0} height="auto" width={100} alt="" />
                </div>
                <div>
                    <Image src={Nacologo} height="auto" width={120} alt="" />
                </div>
                <div className='hidden md:flex items-center flex-col text-center'>
                    {/* <h1 className='text-8xl text-md font-black text-red-800' style={{ margin: 0, lineHeight: 1 }}>
                        1097
                    </h1> */}
                    {/* <p className='md:text-xl text-[25px]' style={{ margin: 0, lineHeight: 1 }}>
                        Call for Help
                    </p> */}
                </div>
            </div>
            <div className='flex items-center mx-4 justify-center flex-col mt-8'>
                <h1 className='font-black text-3xl md:text-3xl text-black text-center'>
                    MEGHALAYA AIDS CONTROL SOCIETY
                </h1>
                <p className='md:text-xl text-lg font-light'>Pasteur Hills, Shillong - 793001</p>
            </div>


            <div className="flex justify-around items-center">
                <div className="flex items-center">
                    <Image
                        src={object}
                        alt=""
                        height={960}
                        width={350}
                        className=""
                    />
                    <div className="text-center  justify-center mx-16 flex flex-col">
                        <h1 className='text-[45px] font-bold text-[#B32323]'>JOIN THE FIGHT</h1>
                        <h1 className='text-[45px] font-bold text-[#B32323]'>AGAINST HIV/AIDS</h1>
                        <div className='flex justify-center items-center mb-2 mt-10'>
                            <IoLocationSharp className="text-[#B32323] md:text-2xl" />

                            <h1 className="text-[#B32323] text-[20px] md:text-[16px] font-bold">Find this service near you</h1>
                        </div>
                        <div className='flex'>
                            <input
                                type="text"
                                className=" p-3 md:p-4 rounded-full border border-gray-400 outline-none md:w-[450px] max-w-[100%] placeholder:text-base"
                                placeholder="Enter location..."
                            />
                        </div>
                    </div>


                    <Image
                        src={person}
                        alt=""
                        height={950}
                        width={350}
                        className=""
                    />
                </div>
            </div>
            <div class="border-b-[1px] border-gray-500"></div>

        </div>
    );
}

export default Logos;
