// src/app/login/page.js
'use client';

// Images
import logo from "@/assets/aidlogo.png";

//Components
import Loading from "@/app/components/Loading"


import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from "next/link";


export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    //To verify admin jwt token using cookies
    const verifyUser = async () => {
      try {
        setIsLoading(true)
        const res = await fetch('/api/auth/verify', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
          router.push('/admin/dashboard');
          setIsLoading(false)
        } else {
          router.push('/admin/login');
          setIsLoading(false)
        }
      } catch (error) {
        setIsLoading(false)
        console.error('Failed to verify token', error);
        router.push('/admin/login');
      } finally {
        setIsLoading(false)
      }
    };
    verifyUser();
  }, [router]);



  async function handleSubmit(e) {
    e.preventDefault();
    
    setIsLoading(true)

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push('/admin/dashboard');
      setIsLoading(false)
    } else {
      setIsLoading(false)
      alert('Invalid username or password');
    }
  }

  if(isLoading) return <Loading />


  return (
    <section className="dark">
      <div className="flex flex-col items-center lg:justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <Image
            className="m-5"
            src={logo}
            width={150}
            height="auto"
            alt="MACS logo"
          />
        <div className="w-full bg-[#8b0000] rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className=" text-xl font-bold leading-tight tracking-tight text-center uppercase text-white">
              Admin Login
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2"
                  placeholder="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#00FF38] focus:border-[#00FF38] block w-full p-2.5 "
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                </div>
              </div>
              <button type="submit" className="w-full text-black dark:bg-green-500 bg-green-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
