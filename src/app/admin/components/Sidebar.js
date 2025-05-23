
'use client';

import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import Link from "next/link";

//Components
import Loading from '@/app/components/Loading';
import LogoutConfirmation from "./LogoutConfirmation";

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false); // Controls the sidebar visibility
  const [isNoticeOpen, setIsNoticeOpen] = useState(false); // Controls the visibility of notice sub-links
  const [loading, setLoading] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const router = useRouter();

  const handleSetLogoutModal = () => {
    setLogoutModal(true);
  }

  const handleLogout = async () => {
    setLogoutModal(false);
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) {
        router.push('/admin/login');
      }
    } catch (error) {
      console.log(error)
      alert("Failed to logout user!")
    }
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      {logoutModal && <LogoutConfirmation
        title="Logout Account"
        message="Are you sure you want to logout? Click confirm to logout"
        handleCancel={() => {
          setLogoutModal(false);
        }}
        handleConfirm={handleLogout}
      />}
      <div
        className={`fixed z-20 top-0 left-0 h-full w-64 shadow-lg shadow-gray-600 bg-gradient-to-br from-red-800 to-red-400 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded bg-gray-700"
            >
              {isOpen ? (
                // Cross icon when sidebar is open
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon when sidebar is closed
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul className="space-y-4 mt-6">
            <li className='w-full'>
              <Link href='/admin/dashboard' className="block font-bold text-left text-md px-4 py-2 rounded hover:bg-white hover:bg-opacity-15">Dashboard</Link>
            </li>
            {/* Notice Section */}
            <li>
              <button
                onClick={() => setIsNoticeOpen(!isNoticeOpen)}
                className="w-full font-bold text-left px-4 py-2 rounded hover:bg-white hover:bg-opacity-15"
              >
                Notice
              </button>
              {isNoticeOpen && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      href="/admin/dashboard/notice/add-notice"
                      className="block px-4 py-2 rounded hover:bg-white hover:bg-opacity-15"
                    >
                      Add Notice
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/dashboard/notice/edit-notice"
                      className="block px-4 py-2 rounded hover:bg-white hover:bg-opacity-15"
                    >
                      Edit Notice
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/dashboard/notice/delete-notice"
                      className="block px-4 py-2 rounded hover:bg-white hover:bg-opacity-15"
                    >
                      Delete Notice
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Logout */}
            <li>
              <button onClick={handleSetLogoutModal} className="block w-full text-left font-bold px-4 py-2 rounded hover:bg-white hover:bg-opacity-15">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Content */}
      <div className="flex-1 fixed w-full hover:bg-white hover:bg-opacity-15 z-10">
        {/* Top Navigation */}
        <div className="p-4 bg-gradient-to-br from-red-400 to-red-800 text-white flex justify-between lg:hidden w-full">
          {/* <h1 className="text-lg font-semibold">Dashboard</h1> */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded"
          >
            {isOpen ? (
              // Cross icon when sidebar is open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon when sidebar is closed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
