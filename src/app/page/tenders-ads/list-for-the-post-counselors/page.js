import React from 'react'
import Image from 'next/image'
import bg from '../../../../assets/tender-bg.jpg'

const page = () => {
  return (
    <div className='relative min-h-[100svh] w-screen py-20'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0'>
        <Image 
          src={bg} 
          alt="Background Image" 
          layout="fill" 
          objectFit="cover" 
          className="blur-sm" 
          priority 
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>

      {/* Content */}
      <div className='relative z-10'>
        <div className='px-20 py-10 text-center'>
          <a 
            href="../../../../../Documents/pdf/List-of-Counselors.pdf" 
            download="List-of-Counselors.pdf" 
            className='bg-[#8b0000] py-2 px-5 text-white text-xl font-bold rounded-md'
          >
            Download
          </a>
        </div>

        <object 
          type="application/pdf" 
          data="/Documents/pdf/List-of-Counselors.pdf" 
          width="600" 
          height="1000" 
          className='md:w-[80svw] w-[100svw] h-[90svh] mx-auto'
        ></object>
      </div>
    </div>
  )
}

export default page