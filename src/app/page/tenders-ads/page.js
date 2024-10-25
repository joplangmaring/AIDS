import Link from 'next/link'
import React from 'react'

const Tenders = () => {
  return (
    <div className='px-10 py-10 space-y-5 w-full'>
        <h1 className='text-4xl font-bold text-[#8B0000]'>NOTICE</h1>
        <hr />
        <ul className='list-disc list-inside md:text-xl font-medium underline text-blue-800 space-y-4'>
          <li><Link href="/page/tenders-ads/list-for-the-post-cpo">LIST FOR THE POST-CPO</Link></li>
          <li><Link href="/page/tenders-ads/list-for-the-post-counselors">LIST FOR THE POST-COUNSELORS</Link></li>
          <li><Link href="/page/tenders-ads/list-for-the-post-office-assistant">LIST FOR THE POST-OFFICE ASSISTANT</Link></li>
          <li><Link href="/page/tenders-ads/list-for-the-post-office-assistant">LIST FOR THE POST-TECHNICAL OFFICER</Link></li>
          <li><Link href="/page/tenders-ads/notice-for-written-exam">NOTICE FOR WRITTEN EXAM</Link></li>
          <li><Link href="/page/tenders-ads/ad-for-appointment-of-staff">Advertisement for Appointment of Staff on Contract basis</Link></li>
          <li><Link href="/page/tenders-ads/results-for-driver-position">Results for the selected candidate for the Driver position, following the interview held on August 8th, 2024.</Link></li>
        </ul>

    </div>
  )
}

export default Tenders