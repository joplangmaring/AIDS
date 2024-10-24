import React from 'react';
import Image from 'next/image';
import rebon3 from '../../assets/rebon3.jpg';
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

const HivPoints = () => {
    return (
        <div className='flex items-center justify-center gap-10 m-20'>
            {/* First section */}
            <div className="flex flex-col items-center">
                <div className='flex items-center'>
                    <Image
                        src={rebon3}
                        alt="logo"
                        width={10} 
                        height={10}
                        className="mr-2"
                    />
                    <h1 className="text-lg text-[#FE0300] font-bold">Directory of HIV Data</h1>
                </div>
                <div className='ml-9'>
                    <h1 className='flex items-center font-bold my-2'style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                        <VscDebugBreakpointLogUnverified /> Annual Report
                    </h1>
                    <h1 className='flex items-center font-bold my-2'style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                        <VscDebugBreakpointLogUnverified /> HIV Facts and Figures
                    </h1>
                    <h1 className='flex items-center font-bold my-2'style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                        <VscDebugBreakpointLogUnverified /> Surveillance & Epidemiology
                    </h1>
                    <h1 className='flex items-center font-bold my-2'style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                        <VscDebugBreakpointLogUnverified /> Newsletter
                    </h1>
                </div>
            </div>

        
            {Array(3).fill(null).map((_, index) => (
                <div className="flex flex-col items-center" key={index}>
                    <div className='flex items-center'>
                        <Image
                            src={rebon3}
                            alt="logo"
                            width={10}
                            height={10}
                            className="mr-2"
                        />
                        <h1 className="text-lg text-[#FE0300] font-bold"style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Directory of HIV Data</h1>
                    </div>
                    <div className='ml-9'>
                        <h1 className='flex items-center font-bold my-2'style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                            <VscDebugBreakpointLogUnverified /> Annual Report
                        </h1>
                        <h1 className='flex items-center font-bold my-2'style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                            <VscDebugBreakpointLogUnverified /> HIV Facts and Figures
                        </h1>
                        <h1 className='flex items-center font-bold my-2'style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                            <VscDebugBreakpointLogUnverified /> Surveillance & Epidemiology
                        </h1>
                        <h1 className='flex items-center font-bold my-2'style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                            <VscDebugBreakpointLogUnverified /> Newsletter
                        </h1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HivPoints;
