"use client"; // Make the whole page a client component

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

function ReceiptContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const samagri = searchParams.get("samagri") || "basic";
  const people = searchParams.get("people") || "0";
  const total = searchParams.get("total") || "0";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
        <div className="bg-gradient-to-r from-red-800 to-red-600 text-white p-4 rounded-xl mb-6">
          <h1 className="text-2xl font-bold text-center">Pind Daan Bhoj Receipt</h1>
        </div>

        <div className="space-y-4 text-gray-800">
          <p className="flex justify-between text-lg">
            <span className="font-medium">Samagri:</span> {samagri}
          </p>
          <p className="flex justify-between text-lg">
            <span className="font-medium">Number of People:</span> {people}
          </p>
          <p className="flex justify-between text-lg">
            <span className="font-medium">Total Amount:</span> <span className="text-red-700 font-bold">₹{total}</span>
          </p>
          <p className="flex justify-between text-lg">
            <span className="font-medium">Date:</span> {date}
          </p>
          <p className="flex justify-between text-lg">
            <span className="font-medium">Time:</span> {time}
          </p>
        </div>

        <p className="text-green-700 font-semibold text-center mt-6">
          ✅ Booking Confirmed! <br />Please follow further instructions.
        </p>

        <button
          onClick={() => router.push("/services/bhoj")}
          className="mt-6 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg transition"
        >
          ⬅ Back to Booking
        </button>
      </div>
    </div>
  );
}

export default function ReceiptPage() {
  return (
    <Suspense fallback={<div className="text-center p-6">Loading receipt...</div>}>
      <ReceiptContent />
    </Suspense>
  );
}
