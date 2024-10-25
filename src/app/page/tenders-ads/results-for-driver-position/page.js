import React from 'react'

const page = () => {
  return (
    <div className='w-full p-10 space-y-5'>
        <h1 className='text-center font-bold text-2xl'>NOTICE</h1>
        {/* <p className='text-4xl text-center'>Advertisement for Appointment of Staff on Contract basis</p> */}
        <p>Results for the selected candidate for the Driver position, following the interview held on August 8th, 2024.</p>
        <div className='space-y-0'>
          <p>Sd/-</p>
          <p>Project Director</p>
          <p>Meghalaya AIDS Control Society</p>
          <p>Shillong</p>
        </div>
        <object type="application/pdf" data="/Documents/pdf/Result-for-the-post-of-Driver-3.pdf" width="600" height="1000" className='md:w-[70svw] w-[90svw] h-[90svh]'></object>
        <div className=' px-20 py-10'>
            <a href="../../../../../Documents/pdf/Result-for-the-post-of-Driver-3.pdf" className='bg-[#8b0000] py-2 px-5 text-white text-xl font-bold rounded-md'>Download</a>
        </div>
    </div>
  )
}

export default page