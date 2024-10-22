import React from 'react';
import Image from 'next/image';
// import activities1 from '../../assets/activities1.png';
// import reel from '../../assets/reel.png';
// import activities2 from '../../assets/actvities2.png';
// import aboutsm from '../../assets/activitiesmain.png';
// import rebon from '../../assets/rebn2.png';
import activitiesall from '../../assets/activitiesll.png';
import smallactivities from '../../assets/smallactivities.png'

const Helpline = () => {
  return (
    <>
     <Image src={activitiesall} alt="" className='hidden md:flex'/>
     <Image src={smallactivities} alt="" className='md:hidden'/>
    </>
    // <div className="">
    //   {/* Background Image */}
    //   <div className="absolute inset-0">
    //     <Image src={rebon} alt="background image" width={700} height={900}/>
    //   </div>

    //   {/* Content */}
    //   <div className="relative z-10">
    //     <h1 className='text-center text-black text-3xl md:text-5xl font-bold m-5'>ACTIVITIES & INITIATIVE</h1>

    //     {/* Mobile View Image */}
    //     <div className='block md:hidden'>
    //       <Image src={aboutsm} alt="" />
    //     </div>

    //     {/* Desktop View Images */}
    //     <div className='flex flex-col sm:flex-row justify-center items-center hidden md:flex'>
    //       {/* First Image */}
    //       <div className='flex justify-center items-center'>
    //         <Image
    //           src={activities1}
    //           alt="Activity 1"
    //           layout="intrinsic" // Switch to "intrinsic" for better control
    //           width='auto' // Set small width
    //           height='auto' // Set corresponding height for correct aspect ratio
    //           className="w-[80px] sm:w-[400px]" // Adjust the width according to the screen size
    //         />
    //       </div>

    //       {/* Second Image */}
    //       <div className='flex justify-center items-center'>
    //         <Image
    //           src={reel}
    //           alt="Reel"
    //           layout="intrinsic"
    //           width='auto'
    //           height='auto'
    //           className="w-[80px] sm:w-[400px]"
    //         />
    //       </div>

    //       {/* Third Image */}
    //       <div className='flex justify-center items-center'>
    //         <Image
    //           src={activities2}
    //           alt="Activity 2"
    //           layout="intrinsic"
    //           width='auto'
    //           height='auto'
    //           className="w-[80px] sm:w-[400px]"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Helpline;
