"use client";

import React, { useState } from "react";
import Image from "next/image";
import ribbon from "../../assets/ribbon.jpg";
import axios from "axios";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "700"], // Include weights you're using, adjust as needed
  subsets: ["latin"],
});

const IntouchImage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post("/api/sendEmail", formData);
      setSuccess("Email sent successfully!");
    } catch (error) {
      setError(error.response?.data?.error || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row">
        {/* Left Image Section */}
        <div className="relative w-full lg:w-[70%] h-[200px] sm:h-[300px] lg:h-auto hidden md:block">
          <Image src={ribbon} alt="Intouch" layout="fill" objectFit="cover" />
        </div>

        {/* Right Form Section */}
        <div className="relative w-full h-[auto] lg:h-auto">
          <Image
            src={ribbon}
            alt="Intouch Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative bg-black bg-opacity-60 w-full flex items-center justify-center min-h-full md:min-h-[400px]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-4 sm:p-8 bg-black bg-opacity-60 text-white w-full max-w-4xl"
            >
              <div className="w-full p-3">
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  {/* First Name Input */}
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="firstname"
                      className="block mb-1 font-playfair"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      className="bg-transparent text-white border-b border-white w-full outline-none"
                      required
                    />
                  </div>

                  {/* Last Name Input */}
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="lastname"
                      className="block mb-1 font-playfair"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      className="bg-transparent text-white border-b border-white w-full outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="flex flex-col mt-5 w-full">
                  <div className="mb-4 w-full">
                    <label htmlFor="email" className="block mb-1 font-playfair">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-transparent text-white border-b border-white w-full outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="flex flex-col w-full mt-5 sm:mt-8">
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="message"
                      className="block mb-1 font-playfair"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-transparent border-b border-white text-white p-2 w-full h-[100px] resize-none outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-white text-black font-playfair p-2 px-20 text-lg w-full sm:w-auto"
                  disabled={loading}
                >
                  {loading ? "SENDING..." : "SUBMIT"}
                </button>

                {/* Error and Success Messages */}
                {error && <p className="mt-4 text-red-500">{error}</p>}
                {success && <p className="mt-4 text-green-500">{success}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntouchImage;
