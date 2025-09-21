"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function BookPage() {
  const searchParams = useSearchParams();
  const samagri = searchParams.get("samagri") || "basic";
  const people = searchParams.get("people") || "0";
  const total = searchParams.get("total") || "0";

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);

  const handleConfirm = () => {
    if (!date || !time) {
      alert("Please select date and time.");
      return;
    }
    setShowReceipt(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">📅 Book Your Puja</h1>

        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Samagri Package:</span> {samagri}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">People for Bhoj:</span> {people}
        </p>
        <p className="text-gray-700 mb-6">
          <span className="font-semibold">Total Amount:</span> ₹{total}
        </p>

        {/* Date & Time Picker */}
        <label className="block mb-2 font-medium">Select Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-2 rounded-lg mb-4"
        />

        <label className="block mb-2 font-medium">Select Time:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full border p-2 rounded-lg mb-6"
        />

        <button
          onClick={handleConfirm}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Confirm Booking
        </button>
      </div>

      {/* Receipt Popup */}
      {showReceipt && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-700">✅ Booking Confirmed</h2>
            <p className="mb-2">
              <span className="font-semibold">Samagri:</span> {samagri}
            </p>
            <p className="mb-2">
              <span className="font-semibold">People:</span> {people}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Total:</span> ₹{total}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Date:</span> {date}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Time:</span> {time}
            </p>
            <button
              onClick={() => setShowReceipt(false)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}