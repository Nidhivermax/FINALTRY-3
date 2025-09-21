"use client";

import { useState } from "react";

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Payment successful for ${formData.name}!`);
    // 👉 Later: integrate real payment gateway here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-red-700 text-center mb-6">
          Payment
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name on Card */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name on Card</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm"
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              maxLength={16}
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm"
            />
          </div>

          {/* Expiry and CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Expiry</label>
              <input
                type="month"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="password"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                maxLength={4}
                className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}