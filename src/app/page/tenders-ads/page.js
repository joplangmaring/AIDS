'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

//Commponents



const Tenders = () => {

  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('/api/notice/get-notice');
        setNotices(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error occurred while fetching notices:', error);
        setError("Unable to fetch notices. Please try again later.");
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);


  return (
    <div className={`px-10 py-10 space-y-5 w-full ${loading ? "" : "min-h-[80vh]"} `}>
      <h1 className='text-4xl font-bold text-[#8B0000]'>NOTICE</h1>
      <hr />
      {loading
        ? <div className="flex justify-center items-center h-[20svh]">
          <div className="loader-2"></div>
        </div>
        : <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 grid-cols-1 gap-10'>

          {notices.map((notice) => (
            <Link key={notice._id} href={`/page/tenders-ads/${notice._id}`} className=' text-black font-medium rounded-md text-lg h-full border-2 border-[#8B0000] flex flex-col justify-between mt-5 shadow-2xl hover:scale-[105%] transition duration-500'>
              <div className='py-5 px-5 min-h-[150px]'>
                <p>{notice.title}</p>
              </div>
              <div className='bg-[#8B0000] flex flex-row items-center justify-center px-5'>
                <p className='py-1 text-sm mr-2 text-white'>View</p>
                <ArrowRightAltIcon sx={{ "color": "white" }} />
              </div>
            </Link>
          ))}

        
        </div>}
    </div>
  )
}

export default Tenders
