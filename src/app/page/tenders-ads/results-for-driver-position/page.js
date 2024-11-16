import React from 'react'
import Image from 'next/image'
import bg from '../../../../assets/tender-bg.jpg'

const page = () => {
  return (
    <div className='relative min-h-[100svh] w-screen py-10'>
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
      <div className='relative z-10 w-full p-10 space-y-5'>
        <h1 className='text-center font-bold text-2xl'>NOTICE</h1>
        <p>Results for the selected candidate for the Driver position, following the interview held on August 8th, 2024.</p>
        <div className='space-y-0'>
          <p>Sd/-</p>
          <p>Project Director</p>
          <p>Meghalaya AIDS Control Society</p>
          <p>Shillong</p>
        </div>
        <div className='px-20 py-10 text-center'>
          <a 
            href="../../../../../Documents/pdf/Result-for-the-post-of-Driver-3.pdf" 
            download="Result-for-the-post-of-Driver-3.pdf" 
            className='bg-[#8b0000] py-2 px-5 text-white text-xl font-bold rounded-md'
          >
            Download
          </a>
        </div>
        
        <div className='mx-auto bg-white w-fit'>
          <object 
            type="application/pdf" 
            data="/Documents/pdf/Result-for-the-post-of-Driver-3.pdf" 
            width="600" 
            height="1000" 
            className='md:w-[70svw] w-[90svw] h-[90svh] mx-auto'
          ></object>
        </div>
      </div>
    </div>
  )
}

export default page
