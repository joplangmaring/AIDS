import React from 'react';
import Image from 'next/image';
import rebon3 from '../../assets/rebon3.jpg';
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

const HivPoints = () => {
    return (
        <div className='flex flex-wrap items-center justify-center gap-6 md:gap-10 p-5 md:m-20'>
            {/* First section */}
            <div className="flex flex-col items-center w-full md:w-auto text-center md:text-left">
                <div className='flex items-center justify-center md:justify-start'>
                    <Image
                        src={rebon3}
                        alt="logo"
                        width={20} 
                        height={20}
                        className="mr-2"
                    />
                    <h1 className="text-md md:text-lg text-[#FE0300] font-bold">Directory of HIV Data</h1>
                </div>
                <div className='mt-2'>
                    {["Annual Report", "HIV Facts and Figures", "Surveillance & Epidemiology", "Newsletter"].map((item, index) => (
                        <h1
                            key={index}
                            className='flex items-center  md:justify-start font-bold my-2 text-sm md:text-base'
                            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                        >
                            <VscDebugBreakpointLogUnverified className="mr-1" /> {item}
                        </h1>
                    ))}
                </div>
            </div>

            {/* Repeat Sections */}
            {Array(3).fill(null).map((_, index) => (
                <div className="flex flex-col items-center w-full md:w-auto text-center md:text-left" key={index}>
                    <div className='flex items-center  md:justify-start'>
                        <Image
                            src={rebon3}
                            alt="logo"
                            width={20}
                            height={20}
                            className="mr-2"
                        />
                        <h1 className="text-md md:text-lg text-[#FE0300] font-bold" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Directory of HIV Data</h1>
                    </div>
                    <div className='mt-2'>
                        {["Annual Report", "HIV Facts and Figures", "Surveillance & Epidemiology", "Newsletter"].map((item, idx) => (
                            <h1
                                key={idx}
                                className='flex items-center md:justify-start font-bold my-2 text-sm md:text-base'
                                style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                            >
                                <VscDebugBreakpointLogUnverified className="mr-1" /> {item}
                            </h1>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default HivPoints;
