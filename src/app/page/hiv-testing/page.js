import React from 'react'
import Image from 'next/image'

import hiv_testing from '../../../assets/hiv-testing.jpg'

const page = () => {
  return (
    <div className='py-10 md:px-10 px-5 space-y-5'>
        <Image
            src={hiv_testing}
            alt="HIV Testing"
            width="0"
            height="0"
            sizes='100vw'
            className='md:w-3/4 w-full md:h-[50vh] object-cover object-top mx-auto'
        />
        <h1 className='text-4xl font-bold text-[#8B0000] mt-10'>HIV TESTING</h1>
        <p>The only way to know your HIV status is to get tested. Knowing your status provides important information to help keep both you and your partner healthy.</p>
        <p>It is recommended that everyone between the ages of 13 and 64 get tested for HIV at least once as part of routine health care, and more frequently if engaging in activities that may increase the risk of contracting HIV.</p>
        <p>Even if you and your partner are only having sex with each other, it's still important for both of you to know your HIV status.</p>
    </div>
  )
}

export default page