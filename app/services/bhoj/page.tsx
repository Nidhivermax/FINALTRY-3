"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function bhojPage() {
  const [people, setPeople] = useState<number>(1);
  const [total, setTotal] = useState<number>(300);
  const router = useRouter();

  const handleCalculate = () => {
    setTotal(people * 300);
  };

  const handleConfirm = () => {
  // redirect to receipt page with total & people as query
  router.push(`/services/bhoj/receipt?people=${people}&total=${total}`);
};


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-red-800">Pind Daan Bhoj Booking</h1>
      
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <label className="block mb-2 text-gray-700 font-medium">Number of People:</label>
        <input
          type="number"
          min={1}
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        />
        <button
          onClick={handleCalculate}
          className="w-full bg-yellow-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 mb-4 transition"
        >
          Calculate Total
        </button>

        <p className="text-gray-800 mb-4 font-semibold">
          Total Amount: <span className="text-red-700">₹{total}</span>
        </p>

        <button
          onClick={handleConfirm}
          className="w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition"
        >
          Confirm & Get Receipt
        </button>
      </div>
    </div>
  );
}