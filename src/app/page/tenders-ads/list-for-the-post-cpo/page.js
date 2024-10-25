import React from 'react'

const page = () => {
  return (
    <div className='min-h-[100svh]'>
        <object type="application/pdf" data="/Documents/pdf/List-of-CPO.pdf" width="600" height="1000" className='md:w-[80svw] w-[100svw] h-[90svh]'></object>
        <div className=' px-20 py-10'>
            <a href="../../../../../Documents/pdf/List-of-CPO.pdf" className='bg-[#8b0000] py-2 px-5 text-white text-xl font-bold rounded-md'>Download</a>
        </div>
    </div>
  )
}

export default page