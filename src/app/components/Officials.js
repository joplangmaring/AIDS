import Image from 'next/image'
import React from 'react'
import conrad from '../../assets/conrad.png';
import maleboss from '../../assets/wailad.JPEG';

const Officials = () => {
    return (
        <div className='bg-gray-50 border-b border-gray-200'>
            <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-screen-xl px-5 md:px-12 py-3 md:py-4 gap-4 md:gap-0">
                {/* Chief Minister */}
                <div className="flex items-center">
                    <Image
                        src={conrad}
                        alt="Chief Minister"
                        className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-full ring-2 ring-brand/30 shadow-md"
                    />
                    <div className="ml-3">
                        <h1 className="font-bold text-sm md:text-base text-gray-900">Chief Minister of Meghalaya</h1>
                        <h1 className="text-xs md:text-sm text-gray-600">Shri Conrad K. Sangma</h1>
                    </div>
                </div>

                {/* Helpline */}
                <div className="flex items-center gap-3 bg-brand-50 border border-brand-100 rounded-full px-5 py-2 md:px-6 md:py-2.5">
                    <span className="text-brand font-black text-3xl md:text-5xl leading-none tracking-tight">1097</span>
                    <span className="text-xs md:text-sm font-semibold text-gray-700 leading-tight">Helpline<br/>Call for help</span>
                </div>

                {/* Health Minister */}
                <div className="flex items-center">
                    <div className="mr-3 md:text-right">
                        <h1 className="font-bold text-sm md:text-base text-gray-900">Minister of Health & Family Welfare</h1>
                        <h1 className="text-xs md:text-sm text-gray-600">Shri Wailadmiki Shylla</h1>
                    </div>
                    <Image
                        src={maleboss}
                        alt="Health Minister"
                        className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-full ring-2 ring-brand/30 shadow-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default Officials
