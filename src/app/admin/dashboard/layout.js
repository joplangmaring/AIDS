// src/app/dashboard/page.js
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

//React icons
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard, MdEventNote } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { IoTicketSharp } from "react-icons/io5";


// Components
// import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';
import Loading from '@/app/components/Loading';
import Sidebar from '../components/Sidebar';


export default function DashboardPage({ children }) {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {

    //To verify admin jwt token using cookies
    const verifyUser = async () => {
      try {
        const res = await fetch('/api/auth/verify', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
          setLoading(false);
        } else {
          router.push('/admin/login');
        }
      } catch (error) {
        console.error('Failed to verify token', error);
        router.push('/admin/login');
      }
    };

    verifyUser();


    //For the dashboard template script
    // const script = document.createElement('script');
    // script.src = "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js";
    // script.defer = true;

    // document.body.appendChild(script);

    // return () => {
    //   document.body.removeChild(script);
    // };


  }, [router]);


  if (loading) {
    return <Loading />
  }

  
  return (
    <div
      className={`flex bg-[#e0e0e0] md:flex-row flex-col`}
    >
      <Sidebar />
      <div className="w-full min-h-screen md:pt-0 pt-20">
        {children}

      </div>
    </div>
  )
}
