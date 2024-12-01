
'use client';
import { useState } from "react"; 
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls the sidebar visibility
  const [isNoticeOpen, setIsNoticeOpen] = useState(false); // Controls the visibility of notice sub-links

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed z-20 top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Home</h1>
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
            {/* Notice Section */}
            <li>
              <button
                onClick={() => setIsNoticeOpen(!isNoticeOpen)}
                className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
              >
                Notice
              </button>
              {isNoticeOpen && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      href="dashboard/notice/add-notice"
                      className="block px-4 py-2 rounded hover:bg-gray-700"
                    >
                      Add Notice
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="dashboard/edit-notice"
                      className="block px-4 py-2 rounded hover:bg-gray-700"
                    >
                      Edit Notice
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="dashboard/delete-notice"
                      className="block px-4 py-2 rounded hover:bg-gray-700"
                    >
                      Delete Notice
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Logout */}
            <li>
              <Link href="/logout" className="block px-4 py-2 rounded hover:bg-gray-700">
                Logout
              </Link>
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
      <div className="flex-1 w-full min-h-screen bg-gray-800"> 
        {/* Top Navigation */}
        <div className="p-4 bg-gray-800 text-white flex justify-between lg:hidden w-full">
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
