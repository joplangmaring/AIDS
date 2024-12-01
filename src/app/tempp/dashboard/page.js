
'use client';

import Sidebar from "../components/Sidebar";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

const Page = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/notice/get-notice');
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

  const openModal = (notice) => {
    setSelectedNotice(notice);
  };

  const closeModal = () => {
    setSelectedNotice(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar */}
      

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-4">
        {/* Top Bar */}
        <div className="p-4 bg-gray-800 text-white rounded mb-6 shadow">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        {/* Notices Section */}
        <div className="p-4 bg-gray-800 text-white rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Notices</h2>
          {loading ? (
            <p className="text-gray-400">Loading notices...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : notices.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {notices.map((notice) => (
                <div
                  key={notice._id}
                  className="p-4 bg-gray-700 rounded shadow hover:shadow-lg transition-shadow duration-200"
                >
                  <h3 className="text-lg font-bold mb-2">{notice.title}</h3>
                  <p className="mb-2 text-gray-300">
                    {notice.description.substring(0, 50)}...
                  </p>
                  <p className="text-sm text-gray-400">
                    {new Date(notice.date).toLocaleDateString()}
                  </p>
                  {/* View File Button */}
                  {notice.fileLink && (
                    <Link
                      href={notice.fileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 text-blue-400 hover:underline"
                    >
                      View File
                    </Link>
                  )}
                  {/* View Details Button */}
                  <button
                    onClick={() => openModal(notice)}
                    className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No notices available</p>
          )}
        </div>
      </div>

      {/* Modal for Full Notice */}
      {selectedNotice && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedNotice.title}</h2>
            <p className="mb-4">{selectedNotice.description}</p>
            <p className="text-sm text-gray-400 mb-4">
              {new Date(selectedNotice.date).toLocaleDateString()}
            </p>
            {selectedNotice.fileLink && (
              <Link
                href={selectedNotice.fileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View Attached File
              </Link>
            )}
            <button
              onClick={closeModal}
              className="mt-4 ml-5 bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
