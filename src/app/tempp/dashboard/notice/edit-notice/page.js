'use client';
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

const Page = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [updatedFields, setUpdatedFields] = useState({
    title: "",
    description: "",
    date: "",
  });
  const [updatedFile, setUpdatedFile] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/notice/get-notice");
        setNotices(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error occurred while fetching notices:", error);
        setError("Unable to fetch notices. Please try again later.");
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  const handleEdit = (notice) => {
    setSelectedNotice(notice);
    setUpdatedFields({
      title: notice.title,
      description: notice.description,
      date: new Date(notice.date).toISOString().split("T")[0], 
    });
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFields({ ...updatedFields, [name]: value });
  };

  const handleFileChange = (e) => {
    setUpdatedFile(e.target.files[0]);
  };

  const handleSave = async () => {
    if (!selectedNotice) return;

    try {
      const formData = new FormData();
      formData.append("title", updatedFields.title);
      formData.append("description", updatedFields.description);
      formData.append("date", updatedFields.date);
      if (updatedFile) {
        formData.append("file", updatedFile);
      }

      await axios.put(
        `http://localhost:3000/api/notice/update-notice/${selectedNotice._id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      log(selectedNotice)
      // Update local state
      setNotices((prevNotices) =>
        prevNotices.map((notice) =>
          notice._id === selectedNotice._id ? { ...notice, ...updatedFields } : notice
        )
      );
      setSelectedNotice(null); // Close modal
    } catch (error) {
      console.error("Error occurred while updating notice:", error);
      setError("Unable to update notice. Please try again.");
    }
  };

  const closeModal = () => {
    setSelectedNotice(null);
    setUpdatedFile(null); // Reset file input
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <div className="flex-1 lg:ml-64 p-4">
        <div className="p-4 bg-gray-800 text-white rounded mb-6 shadow">
          <Link href="/tempp/dashboard" className="text-2xl font-bold">
            Edit Notice
          </Link>
        </div>

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
                  <button
                    onClick={() => handleEdit(notice)}
                    className="mt-2 bg-yellow-600 hover:bg-yellow-700 text-white py-1 px-3 rounded"
                  >
                    Edit Notice
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No notices available</p>
          )}
        </div>
      </div>

      {selectedNotice && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Notice</h2>
            <label className="block mb-2">
              Title:
              <input
                type="text"
                name="title"
                value={updatedFields.title}
                onChange={handleFieldChange}
                className="w-full p-2 bg-gray-700 rounded mt-1 text-white"
              />
            </label>
            <label className="block mb-2">
              Description:
              <textarea
                name="description"
                value={updatedFields.description}
                onChange={handleFieldChange}
                className="w-full p-2 bg-gray-700 rounded mt-1 text-white"
              />
            </label>
            <label className="block mb-2">
              Date:
              <input
                type="date"
                name="date"
                value={updatedFields.date}
                onChange={handleFieldChange}
                className="w-full p-2 bg-gray-700 rounded mt-1 text-white"
              />
            </label>
            <label className="block mb-2">
              File:
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-2 bg-gray-700 rounded mt-1 text-white"
              />
            </label>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Page;
