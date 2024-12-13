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
  const [newAttachment, setNewAttachment] = useState(null);
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [editModal, setEditModal] = useState(false);


  const fetchNotices = async () => {
    try {
      const response = await axios.get("/api/notice/get-notice");
      setNotices(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error occurred while fetching notices:", error);
      setError("Unable to fetch notices. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const handleEdit = (notice) => {
    setEditModal(true)
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

  const handleSave = async () => {
    if (!selectedNotice) return;
    const payload = {
      title: updatedFields.title,
      description: updatedFields.description,
      date: updatedFields.date,
    };

    try {
      const res = await fetch(`/api/notice/edit-notice?id=${selectedNotice._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setLoading(false);
        alert("Notice has been updated successfully!");
        closeModal();
        fetchNotices();
      } else {
        setLoading(false);
        alert("Error updating notice!");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Error updating notice!");
    }

  };

  const closeModal = () => {
    setSelectedNotice(null);
    setEditModal(false)
  };

  const openAttachmentModal = (notice) => {
    setSelectedNotice(notice);
    setAttachmentModal(true);
  };


  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64File = reader.result.split(",")[1]; // Get base64 string (without "data:image/png;base64," part)
      const fileExtension = file.name.split(".").pop();
      setNewAttachment({ file: base64File, fileExtension });
    };
    reader.readAsDataURL(file);
  };

  const saveAttachment = async () => {
    if (!selectedNotice || !newAttachment) return;

    const payload = {
      file: newAttachment.file, // Send the base64-encoded file
      fileExtension: newAttachment.fileExtension,
    };

    try {
      const res = await fetch(`/api/notice/edit-notice/replace-file?id=${selectedNotice._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setLoading(false);
        alert("Attachment replaced successfully!");
        setAttachmentModal(false)
        fetchNotices();
      } else {
        setLoading(false);
        alert("Error replacing attachment notice!");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Error replacing attachment notice!");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 lg:ml-64 p-4">
        <div className="p-4 bg-gradient-to-br from-red-800 to-red-400 backdrop-blur-lg text-white rounded shadow-lg mb-6">
          <p className="text-2xl font-bold">
            Edit Notice
          </p>
        </div>

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
                  className="p-4 bg-white rounded shadow-xl hover:shadow-sm border transition-shadow duration-200"
                >
                  <h3 className="text-lg font-bold mb-2">{notice.title}</h3>
                  <p className="mb-2">
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
                      View Attachment
                    </Link>
                  )}
                  <div className="flex md:flex-col flex-row justify-between">
                    <button
                      onClick={() => handleEdit(notice)}
                      className="mt-2 bg-yellow-600 hover:bg-yellow-700 text-white py-1 px-3 rounded"
                    >
                      Edit Notice
                    </button>
                    <button
                      onClick={() => openAttachmentModal(notice)}
                      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded"
                    >
                      Replace Attachment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No notices available</p>
          )}
        </div>
      </div>

      {editModal && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-full max-w-5xl">
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
                rows={10}
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
            {/* <label className="block mb-2">
              File:
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-2 bg-gray-700 rounded mt-1 text-white"
              />
            </label> */}
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


      {attachmentModal && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Replace Attachment</h2>
            <input
              type="file"
              onChange={handleAttachmentChange}
              className="block w-full text-sm text-gray-300 bg-gray-700 rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setAttachmentModal(false)}
                className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded"
              >
                Cancel
              </button>
              <button
                onClick={saveAttachment}
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
