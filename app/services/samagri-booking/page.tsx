"use client";

import { useState } from "react";

export default function SamagriBookingPage() {
  const packages = [
    { name: "Basic", price: 1500 },
    { name: "Standard", price: 3000 },
    { name: "Premium", price: 5000 },
  ];

  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [customItems, setCustomItems] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = () => {
    // For now just showing alert; later connect to backend
    console.log("Selected Package:", selectedPackage);
    console.log("Custom Items:", customItems);
    setSubmitted(true);
  };

  const selectedPrice = packages.find(p => p.name === selectedPackage)?.price;

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-12 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Samagri Booking</h1>
      <p className="text-gray-600 mb-8 max-w-2xl text-center">
        Choose a ready-made package or type your custom list of items. We will source them from local vendors for your Pind Daan rituals.
      </p>

      {/* Package Selection */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6">
        <label className="block mb-2 font-medium">Select a Package</label>
        <select
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          value={selectedPackage}
          onChange={(e) => setSelectedPackage(e.target.value)}
        >
          <option value="">-- Choose Package --</option>
          {packages.map((pkg) => (
            <option key={pkg.name} value={pkg.name}>
              {pkg.name} (₹{pkg.price})
            </option>
          ))}
        </select>

        {selectedPackage && (
          <p className="text-gray-800 font-semibold mb-2">
            Price: ₹{selectedPrice}
          </p>
        )}
      </div>

      {/* Custom Items Input */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6">
        <label className="block mb-2 font-medium">
          Or Enter Your Custom Items
        </label>
        <textarea
          className="w-full border border-gray-300 rounded-md p-2"
          rows={6}
          placeholder="Enter items separated by commas..."
          value={customItems}
          onChange={(e) => setCustomItems(e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <button
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition mb-4"
        onClick={handleSubmit}
      >
        Submit Booking
      </button>

      {submitted && (
        <div className="mt-3 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-center w-full max-w-md">
          ✅ Booking submitted successfully! We will contact you soon.
        </div>
      )}
    </div>
  );
}
