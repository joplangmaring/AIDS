import Image from 'next/image'
import React from 'react'
import Link from "next/link";
import conrad from '../../assets/conrad.png';
import femaleboss from '../../assets/femaleboss.png';
import maleboss from '../../assets/wailad.JPEG';

const Officials = () => {
    return (
        <div className='md:block hidden'>
            {/* Chief Minister and Health Minister Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mx-7 my-3">
                <div className="flex items-center mb-6 md:mb-0">
                    <Image src={conrad} alt="Chief Minister" className="w-16 h-16 md:w-28 md:h-28 object-cover rounded-full" />
                    <div className="ml-4">
                        <h1 className="font-bold">Chief Minister of Meghalaya</h1>
                        <h1>Shri Conrad K. Sangma</h1>
                    </div>
                </div>


                <div className="flex items-center flex-col leading-none">
                    <h1 className="text-[#8B0000] font-bold text-[64px] m-0 p-0">1097</h1>
                    <h1 className="m-0 p-0 font-semibold">Call for help</h1>
                </div>

                <div className="flex items-center mb-6 md:mb-0">
                    <div className="mr-4 md:text-right">
                        <h1 className="font-bold">Minister of Health & Family Welfare</h1>
                        <h1>Shri Wailadmiki Shylla</h1>
                    </div>
                    <Image src={maleboss} alt="Health Minister" className="w-16 h-16 md:w-28 md:h-28 object-cover rounded-full" />
                </div>

            </div>
        </div>
    )
}

export default Officials