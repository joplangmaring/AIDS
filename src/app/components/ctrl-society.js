import Image from 'next/image';
import person from '../../assets/OBJECTS.png';
import background from '../../assets/background-hero.png';
import { IoLocationSharp } from "react-icons/io5";

const Logos = () => {
    return (
        <div
            className="relative flex justify-center gap-20 bg-cover bg-center"
            style={{
                backgroundImage: `url(${background.src})`,
            }}
        >
            <div className="flex flex-col items-start z-10 mt-32">
                <h1 className="font-bold text-7xl text-white" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                    MEGHALAYA AIDS
                </h1>
                <h1 className="font-bold text-7xl text-white" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                    CONTROL SOCIETY
                </h1>
                <div className="w-[90%] border-b-[2px] my-5 border-white"></div>

                <div className="text-white mt-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                    <p className='text-[15px]'>NACO envisions an India where every person living with HIV has</p>
                    <p className='text-[15px]'>access to quality care and is treated with dignity.</p>
                </div>
                <div className='mt-10'>
                    <h1 className="text-white flex items-center  text-[15px] " style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}> <IoLocationSharp className='mr-1' />
                        FIND THE NEAREST TESTING CENTRE</h1>

                    <div className='flex items-center mt-4 border-b border-white'>
                        <input
                            type="text"
                            className="bg-transparent w-full text-white focus:outline-none focus:border-white placeholder-[#FFFFFF59]"
                            placeholder="Enter location or pincode"
                        />
                        <IoLocationSharp className="text-white" />
                    </div>
                </div>
            </div>

            <div className="z-10 mt-56">
                <Image src={person} alt="Person" width={250} />
            </div>

            {/* Adding overlay to improve text readability */}
            <div className="absolute inset-0 bg-[#000000B2] z-0"></div>
        </div>
    );
};

export default Logos;
