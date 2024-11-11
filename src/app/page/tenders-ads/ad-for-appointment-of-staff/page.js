import React from 'react'
import Image from 'next/image'
import bg from '../../../../assets/tender-bg.jpg'

const page = () => {
  return (
    <div className='relative w-full p-10 space-y-5'>
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
        <h1 className='text-center font-bold text-2xl text-white'>NOTICE</h1>
        <p className='text-4xl text-center text-white'>Advertisement for Appointment of Staff on Contract basis</p>
        <p className='text-white'>
          The Office of the Meghalaya AIDS Control Society, Shillong invites applications from eligible candidates who are citizens of India for appointment of the following posts on a contractual basis for a period of 1 (one) year (which may be extended based on performance).
        </p>
        
        <div className='space-y-0 text-white'>
          <p>Sd/-</p>
          <p>Project Director</p>
          <p>Meghalaya AIDS Control Society</p>
          <p>Shillong</p>
        </div>
        
        <div className='px-20 py-10 text-center'>
          <a 
            href="../../../../../Documents/pdf/Advertisement-of-Posts.pdf" 
            download="Advertisement-of-Posts.pdf"  
            className='bg-[#8b0000] py-2 px-5 text-white text-xl font-bold rounded-md'
          >
            Download
          </a>
        </div>
        
        <object 
          type="application/pdf" 
          data="/Documents/pdf/Advertisement-of-Posts.pdf" 
          width="600" 
          height="1000" 
          className='md:w-[70svw] mx-auto w-[90svw] h-[90svh]'
        ></object>
      </div>
    </div>
  )
}

export default page
