"use client";

import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 bg-gray-50 rounded-xl p-5 md:p-8 border border-gray-200"
    >
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="w-full">
          <label htmlFor="firstname" className="block mb-1.5 text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="w-full bg-white text-gray-900 border border-gray-300 rounded-md py-2.5 px-3 outline-none text-sm focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all placeholder:text-gray-400"
            placeholder="Enter first name"
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="lastname" className="block mb-1.5 text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="w-full bg-white text-gray-900 border border-gray-300 rounded-md py-2.5 px-3 outline-none text-sm focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all placeholder:text-gray-400"
            placeholder="Enter last name"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block mb-1.5 text-sm font-medium text-gray-700">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-white text-gray-900 border border-gray-300 rounded-md py-2.5 px-3 outline-none text-sm focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all placeholder:text-gray-400"
          placeholder="Enter phone number"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1.5 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white text-gray-900 border border-gray-300 rounded-md py-2.5 px-3 outline-none text-sm focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all placeholder:text-gray-400"
          placeholder="Enter email address"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-1.5 text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-white text-gray-900 border border-gray-300 rounded-md py-2.5 px-3 outline-none text-sm h-[120px] resize-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all placeholder:text-gray-400"
          placeholder="Describe your complaint"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-brand hover:bg-brand-dark text-white font-semibold py-2.5 px-8 text-sm rounded-md w-full sm:w-auto transition-colors duration-200 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "SENDING..." : "SUBMIT"}
      </button>

      {error && <p className="text-red-600 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">{success}</p>}
    </form>
  );
};

export default Form;
