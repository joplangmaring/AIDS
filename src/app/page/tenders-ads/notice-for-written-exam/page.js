import React from 'react'
import Image from 'next/image'

import bg from '../../../../assets/tender-bg.jpg'

const page = () => {
  return (
    <div className='relative w-full p-10 space-y-5'>
      {/* Background Image with blur effect */}
      <div className='absolute inset-0 z-0'>
        <Image 
          src={bg}
          alt='Tender Background' 
          layout='fill' 
          objectFit='cover' 
          className='blur-sm' 
        />
        {/* Transparent black overlay */}
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>
      
      {/* Content */}
      <div className='relative z-10'>
        <h1 className='text-center font-bold text-2xl text-white'>NOTICE</h1>
        <p className='text-4xl text-center text-white'>NOTICE FOR WRITTEN EXAM</p>
        <p className='text-white'>
          The Office of the Meghalaya AIDS Control Society, Shillong hereby inform that the written exam for the following posts will be held on the <strong>10th October 2024</strong> at <strong>Government Girl’s Higher Secondary School, Jail Road, Shillong.</strong>
        </p>
        <div className='space-y-0'>
          <p className='text-white'>Sd/-</p>
          <p className='text-white'>Project Director</p>
          <p className='text-white'>Meghalaya AIDS Control Society</p>
          <p className='text-white'>Shillong</p>
        </div>
        <div className='px-20 py-10'>
          <a href="../../../../../Documents/pdf/Notice-for-written-exam.pdf" download='Notice-for-written-exam.pdf' className='bg-[#8b0000] py-2 px-5 text-white text-xl font-bold rounded-md'>Download</a>
        </div>
        <object type="application/pdf" data="/Documents/pdf/Notice-for-written-exam.pdf" width="600" height="1000" className='md:w-[70svw] w-[90svw] h-[90svh] mx-auto'></object>
      </div>
    </div>
  )
}

export default page
