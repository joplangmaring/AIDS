import Link from 'next/link'
import React from 'react'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Tenders = () => {
  return (
    <div className='px-10 py-10 space-y-5 w-full min-h-[80vh]'>
        <h1 className='text-4xl font-bold text-[#8B0000]'>NOTICE</h1>
        <hr />
        <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 grid-cols-1 gap-10'>
          
          {/* Results for Driver */}
          <Link href="/page/tenders-ads/list-attendant" className=' text-black font-medium rounded-md text-lg h-full border-2 border-[#8B0000] flex flex-col justify-between mt-5 shadow-2xl hover:scale-[105%] transition duration-500'>
            <div className='py-5 px-5 min-h-[150px]'>
              <p>List Attendant</p>
            </div>
            <div className='bg-[#8B0000] flex flex-row items-center justify-center px-5'>
              <p className='py-1 text-sm mr-2 text-white'>View</p>
              <ArrowRightAltIcon sx={{"color": "white"}}/>
            </div>
          </Link>

          {/* Results for Driver */}
          <Link href="/page/tenders-ads/merit-list-driver" className=' text-black font-medium rounded-md text-lg h-full border-2 border-[#8B0000] flex flex-col justify-between mt-5 shadow-2xl hover:scale-[105%] transition duration-500'>
            <div className='py-5 px-5 min-h-[150px]'>
              <p>Merit List - Driver</p>
            </div>
            <div className='bg-[#8B0000] flex flex-row items-center justify-center px-5'>
              <p className='py-1 text-sm mr-2 text-white'>View</p>
              <ArrowRightAltIcon sx={{"color": "white"}}/>
            </div>
          </Link>

          {/* Results for Driver */}
          <Link href="/page/tenders-ads/list-for-the-post-driver" className=' text-black font-medium rounded-md text-lg h-full border-2 border-[#8B0000] flex flex-col justify-between mt-5 shadow-2xl hover:scale-[105%] transition duration-500'>
            <div className='py-5 px-5 min-h-[150px]'>
              <p>Result for for the Post of DRIVER</p>
            </div>
            <div className='bg-[#8B0000] flex flex-row items-center justify-center px-5'>
              <p className='py-1 text-sm mr-2 text-white'>View</p>
              <ArrowRightAltIcon sx={{"color": "white"}}/>
            </div>
          </Link>

          {/* Results for Driver */}
          <Link href="/page/tenders-ads/list-for-the-post-attendant" className=' text-black font-medium rounded-md text-lg h-full border-2 border-[#8B0000] flex flex-col justify-between mt-5 shadow-2xl hover:scale-[105%] transition duration-500'>
            <div className='py-5 px-5 min-h-[150px]'>
              <p>List for the Post of Attendant</p>
            </div>
            <div className='bg-[#8B0000] flex flex-row items-center justify-center px-5'>
              <p className='py-1 text-sm mr-2 text-white'>View</p>
              <ArrowRightAltIcon sx={{"color": "white"}}/>
            </div>
          </Link>

          <Link href="/page/tenders-ads/list-for-the-post-cpo" className=' text-black font-medium rounded-md text-lg h-full border-2 border-[#8B0000] flex flex-col justify-between mt-5 shadow-2xl hover:scale-[105%] transition duration-500'>
            <div className='py-5 px-5 min-h-[150px]'>
              <p>LIST FOR THE POST-CPO</p>
            </div>
            <div className='bg-[#8B0000] flex flex-row items-center justify-center px-5'>
              <p className='py-1 text-sm mr-2 text-white'>View</p>
              <ArrowRightAltIcon sx={{"color": "white"}}/>
            </div>
          </Link>

          <Link href="/page/tenders-ads/list-for-the-post-counselors" className=' text-black font-medium rounded-md text-lg h-full border-2 border-[#8B0000] flex flex-col justify-between mt-5 shadow-2xl hover:scale-[105%] transition duration-500'>
            <div className='py-5 px-5 min-h-[150px]'>
              <p>LIST FOR THE POST-COUNSELORS</p>
            </div>
            <div className='bg-[#8B0000] flex flex-row items-center justify-center px-5'>
              <p className='py-1 text-sm mr-2 text-white'>View</p>
              <ArrowRightAltIcon sx={{"color": "white"}}/>
            </div>
          </Link>

          <Link href="/page/tenders-ads/list-for-the-post-office-assistant" className=' text-black font-medium rounded-md text-lg h-full border-2 border-[#8B0000] flex flex-col justify-between mt-5 shadow-2xl hover:scale-[105%] transition duration-500'>
            <div className='py-5 px-5 min-h-[150px]'>
              <p>LIST FOR THE POST-OFFICE ASSISTANT</p>
            </div>
            <div className='bg-[#8B0000] flex flex-row items-center justify-center px-5'>
              <p className='py-1 text-sm mr-2 text-white'>View</p>
              <ArrowRightAltIcon sx={{"color": "white"}}/>
            </div>
          </Link>

          <Link href="/page/tenders-ads/list-for-the-post-to" className=' text-black font-medium rounded-md text-lg h-full border-2 border-[#8B0000] flex flex-col justify-between mt-5 shadow-2xl hover:scale-[105%] transition duration-500'>
            <div className='py-5 px-5 min-h-[150px]'>
              <p>LIST FOR THE POST-TECHNICAL OFFICER</p>
            </div>
            <div className='bg-[#8B0000] flex flex-row items-center justify-center px-5'>
              <p className='py-1 text-sm mr-2 text-white'>View</p>
              <ArrowRightAltIcon sx={{"color": "white"}}/>
            </div>
          </Link>

          <Link href="/page/tenders-ads/notice-for-written-exam" className=' text-black font-medium rounded-md text-lg h-full border-2 border-[#8B0000] flex flex-col justify-between mt-5 shadow-2xl hover:scale-[105%] transition duration-500'>
            <div className='py-5 px-5 min-h-[150px]'>
              <p>NOTICE FOR WRITTEN EXAM</p>
            </div>
            <div className='bg-[#8B0000] flex flex-row items-center justify-center px-5'>
              <p className='py-1 text-sm mr-2 text-white'>View</p>
              <ArrowRightAltIcon sx={{"color": "white"}}/>
            </div>
          </Link>

          <Link href="/page/tenders-ads/ad-for-appointment-of-staff" className=' text-black font-medium rounded-md text-lg h-full border-2 border-[#8B0000] flex flex-col justify-between mt-5 shadow-2xl hover:scale-[105%] transition duration-500'>
            <div className='py-5 px-5 min-h-[150px]'>
              <p>Advertisement for Appointment of Staff on Contract basis</p>
            </div>
            <div className='bg-[#8B0000] flex flex-row items-center justify-center px-5'>
              <p className='py-1 text-sm mr-2 text-white'>View</p>
              <ArrowRightAltIcon sx={{"color": "white"}}/>
            </div>
          </Link>

          <Link href="/page/tenders-ads/results-for-driver-position" className=' text-black font-medium rounded-md text-lg h-full border-2 border-[#8B0000] flex flex-col justify-between mt-5 shadow-2xl hover:scale-[105%] transition duration-500'>
            <div className='py-5 px-5 min-h-[150px]'>
              <p>Results for the selected candidate for the Driver position, following the interview held on August 8th, 2024</p>
            </div>
            <div className='bg-[#8B0000] flex flex-row items-center justify-center px-5'>
              <p className='py-1 text-sm mr-2 text-white'>View</p>
              <ArrowRightAltIcon sx={{"color": "white"}}/>
            </div>
          </Link>

        </div>
        {/* <ul className='list-disc list-inside md:text-xl font-medium text-blue-800 space-y-4 md:px-20 py-20'>
          <div className='flex flex-row justify-between gap-5'>
            <li><Link href="/page/tenders-ads/list-for-the-post-cpo">LIST FOR THE POST-CPO</Link></li>
            <Link href="/page/tenders-ads/list-for-the-post-cpo" className=' text-white rounded-md text-sm px-3 h-fit py-1 bg-[#8B0000]'>View</Link>
          </div>

          <div className='flex flex-row justify-between gap-5'>
            <li><Link href="/page/tenders-ads/list-for-the-post-counselors">LIST FOR THE POST-COUNSELORS</Link></li>
            <Link href="/page/tenders-ads/list-for-the-post-counselors" className=' text-white rounded-md text-sm px-3 h-fit py-1 bg-[#8B0000]'>View</Link>
          </div>

          <div className='flex flex-row justify-between gap-5'>
            <li><Link href="/page/tenders-ads/list-for-the-post-office-assistant">LIST FOR THE POST-OFFICE ASSISTANT</Link></li>
            <Link href="/page/tenders-ads/list-for-the-post-office-assistant" className=' text-white rounded-md text-sm px-3 h-fit py-1 bg-[#8B0000]'>View</Link>
          </div>

          <div className='flex flex-row justify-between gap-5'>
            <li><Link href="/page/tenders-ads/list-for-the-post-to">LIST FOR THE POST-TECHNICAL OFFICER</Link></li>
            <Link href="/page/tenders-ads/list-for-the-post-to" className=' text-white rounded-md text-sm px-3 h-fit py-1 bg-[#8B0000]'>View</Link>
          </div>

          <div className='flex flex-row justify-between gap-5'>
            <li><Link href="/page/tenders-ads/notice-for-written-exam">NOTICE FOR WRITTEN EXAM</Link></li>
            <Link href="/page/tenders-ads/notice-for-written-exam" className=' text-white rounded-md text-sm px-3 h-fit py-1 bg-[#8B0000]'>View</Link>
          </div>

          <div className='flex flex-row justify-between gap-5'>
            <li><Link href="/page/tenders-ads/ad-for-appointment-of-staff">Advertisement for Appointment of Staff on Contract basis</Link></li>
            <Link href="/page/tenders-ads/ad-for-appointment-of-staff" className=' text-white rounded-md text-sm px-3 h-fit py-1 bg-[#8B0000]'>View</Link>
          </div>

          <div className='flex flex-row justify-between gap-5'>
            <li><Link href="/page/tenders-ads/results-for-driver-position">Results for the selected candidate for the Driver position, following the interview held on August 8th, 2024.</Link></li>
            <Link href="/page/tenders-ads/results-for-driver-position" className=' text-white rounded-md text-sm px-3 h-fit py-1 bg-[#8B0000]'>View</Link>
          </div>
        </ul> */}
    </div>
  )
}

export default Tenders
