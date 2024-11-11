import Link from 'next/link'
import React from 'react'

const Tenders = () => {
  return (
    <div className='px-10 py-10 space-y-5 w-full'>
        <h1 className='text-4xl font-bold text-[#8B0000]'>NOTICE</h1>
        <hr />
        <ul className='list-disc list-inside md:text-xl font-medium text-blue-800 space-y-4 md:px-20 py-20'>
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
        </ul>
    </div>
  )
}

export default Tenders
