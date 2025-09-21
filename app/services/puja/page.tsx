"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WholePackagePage() {
  // State
  const [samagri, setSamagri] = useState("basic");
  const [people, setPeople] = useState(1);
  const router = useRouter();

  // Prices (you can edit as needed)
  const panditPrice = 2000; // fixed price for Pandit booking
  const samagriOptions: Record<string, number> = {
    basic: 1500,
    standard: 3000,
    premium: 5000,
  };
  const bhojPricePerPerson = 300; // fixed price per person

  // Calculate total
  const total =
    panditPrice + samagriOptions[samagri] + people * bhojPricePerPerson;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect with query params
    router.push(
      `/services/puja/book?samagri=${samagri}&people=${people}&total=${total}`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">🎁 Whole Package Booking</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 space-y-6"
      >
        {/* Pandit Booking */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">📿 Pandit Booking</h2>
          <p className="text-gray-600">Fixed Price: ₹{panditPrice}</p>
        </div>

        {/* Samagri Options */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">🪔 Samagri Package</h2>
          <select
            value={samagri}
            onChange={(e) => setSamagri(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="basic">Basic - ₹{samagriOptions.basic}</option>
            <option value="standard">
              Standard - ₹{samagriOptions.standard}
            </option>
            <option value="premium">Premium - ₹{samagriOptions.premium}</option>
          </select>
        </div>

        {/* Bhoj Booking */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">🍽 Bhoj Booking</h2>
          <p className="text-gray-600 mb-2">
            Price per Person: ₹{bhojPricePerPerson}
          </p>
          <input
            type="number"
            min={1}
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Total Price */}
        <div className="text-center border-t pt-4">
          <h2 className="text-xl font-bold">
            💰 Total: <span className="text-yellow-600">₹{total}</span>
          </h2>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}