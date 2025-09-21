"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking request submitted for ${formData.name}`);
    // 👉 Later: send data to your backend / Firebase here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-red-800 text-center mb-6">
          Hotel Booking Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
            />
          </div>

          {/* Check-in / Check-out */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Check-in</label>
              <input
                type="date"
                name="checkin"
                value={formData.checkin}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Check-out</label>
              <input
                type="date"
                name="checkout"
                value={formData.checkout}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Guests</label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <Link
            href="/payment"
            className="w-full block bg-red-700 text-white text-center py-2 px-4 rounded-lg hover:bg-green-800 transition"
           >
             Pay Now
            </Link>
        </form>
      </div>
    </div>
  );
}