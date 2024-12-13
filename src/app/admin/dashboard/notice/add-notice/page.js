"use client";

import { useState } from "react";
import Image from "next/image";

//Components
import Loading from "@/app/components/Loading"

export default function AddNotice() {
  const currentDate = Date.now();

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: currentDate,
    file: "",
    fileExtension: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64File = reader.result.split(",")[1]; // Get base64 string (without "data:image/png;base64," part)
      const fileExtension = file.name.split(".").pop();
      setForm((prevForm) => ({ ...prevForm, file: base64File, fileExtension }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const payload = {
      title: form.title,
      description: form.description,
      date: form.date,
      file: form.file, // Send the base64-encoded file
      fileExtension: form.fileExtension,
    };

    try {
      const res = await fetch("/api/notice/add-notice/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setLoading(false);
        alert("Notice added successfully!");
      } else {
        setLoading(false);
        alert("Error adding notice!");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Error adding notice!");
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="flex min-h-screen md:p-10 ">
      <div className="flex-1 lg:ml-64 p-4">
        <div className="p-4 bg-gradient-to-br from-red-800 to-red-400 backdrop-blur-lg text-white rounded shadow-lg mb-6">
          <h2 className="text-2xl font-bold">Add Notice</h2>
        </div>

        <div className="p-6 bg-white text-black rounded shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="flex md:flex-row flex-col w-full gap-6">
              <div className="flex flex-col w-full">
                <label htmlFor="title" className="font-semibold mb-1">
                  Title
                </label>
                <input
                  className="p-2 rounded bg-gray-100 text-black border-gray-300 border-b-2"
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Notice Title"
                  required
                />

                <label
                  htmlFor="description"
                  className="font-semibold mt-4 mb-1"
                >
                  Description
                </label>
                <textarea
                  className="p-2 rounded bg-gray-100 text-black border-gray-300 border-b-2"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Description"
                  rows={10}
                  required
                ></textarea>

                <label htmlFor="date" className="font-semibold mt-4 mb-1">
                  Date
                </label>
                <input
                  className="p-2 rounded bg-gray-100 text-black border-gray-300 border-b-2"
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="file" className="font-semibold mb-1">
                  Attach File
                </label>
                <Image
                  src={
                    form.file !== ""
                      ? "https://img.freepik.com/free-photo/check-mark-button-right-side-white-background_187299-40283.jpg?t=st=1733076729~exp=1733080329~hmac=226d5ef4a9a31c1ea27b2df35ce7d1e714be43b7d52ce6fe3df709cedfcd4399&w=1380"
                      : "https://img.freepik.com/free-vector/file-folder-concept-illustration_114360-206.jpg"
                  }
                  loading="lazy"
                  width={300}
                  height={300}
                  alt="Attach File"
                  className="rounded shadow"
                />
                <input
                  className="mt-4 text-blue-400 cursor-pointer"
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <button
              className="mt-6 px-6 py-2 bg-[#f04a48] text-white rounded shadow hover:bg-red-700 transition duration-200"
              type="submit"
            >
              Add Notice
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
