"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [error, setError] = useState(null);

  const openModal = (notice) => {
    setSelectedNotice(notice);
  };

  const closeModal = () => {
    setSelectedNotice(null);
  };

  // Fetch notices
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get(
          "/api/notice/get-notice"
        );
        setNotices(response.data.data);
      } catch (err) {
        console.error("Error fetching notices:", err);
        setError("Unable to fetch notices. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);

  // Delete notice
  const deleteNotice = async () => {
    
    const id = selectedNotice._id

    try {
      
      const response = await axios.delete(
        `/api/notice/delete-notice?id=${encodeURIComponent(id)}`
      );


      // Update the UI by removing the deleted notice from the state
      setNotices((prevNotices) =>
        prevNotices.filter((notice) => notice._id !== id)
      );
      alert("Notice deleted successfully!");
      setSelectedNotice(null)
    } catch (err) {
      console.error("Error deleting notice:", err.response || err.message);
      alert("Failed to delete the notice. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 lg:ml-64 p-4">
        {/* Top Bar */}
        <div className="p-4 bg-gradient-to-br from-red-800 to-red-400 backdrop-blur-lg text-white rounded shadow-lg mb-6">
          <Link href="/tempp/dashboard" className="text-2xl font-bold">
            Delete Notice
          </Link>
        </div>

        {/* Notices Section */}
        <div className="p-4 bg-white text-black rounded shadow">
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
                  className="p-4 bg-white rounded shadow-xl border hover:shadow-sm transition-shadow duration-200"
                >
                  <h3 className="text-lg font-bold mb-2">{notice.title}</h3>
                  <p className="mb-2">
                    {notice.description.substring(0, 100)}...
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
                  {/* Delete Button */}
                  <button
                    onClick={() => openModal(notice)}
                    className="mt-2 bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded"
                  >
                    Delete
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
            <p className="mb-4">{selectedNotice.description.substring(0, 500)}...</p>
            <p className="text-sm text-gray-400 mb-4">
              {new Date(selectedNotice.date).toLocaleDateString()}
            </p>
            <div className="flex md:flex-row justify-between items-center">
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
              <div className="space-x-4">
                <button
                  onClick={closeModal}
                  className=" bg-gray-600 hover:bg-gray-700 text-white py-1 px-3 rounded"
                >
                  Close
                </button>
                <button
                  onClick={deleteNotice}
                  className=" bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded"
                >
                  Confirm Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
