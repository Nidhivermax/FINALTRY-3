// services/bhoj/receipt/page.tsx
"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function ReceiptPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const people = searchParams.get("people") || "0";
  const total = searchParams.get("total") || "0";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-red-800 to-red-600 text-white p-4 rounded-xl mb-6">
          <h1 className="text-2xl font-bold text-center">Pind Daan Bhoj Receipt</h1>
        </div>

        {/* Receipt Details */}
        <div className="space-y-4 text-gray-800">
          <p className="flex justify-between text-lg">
            <span className="font-medium">Number of People:</span>
            <span className="font-mono">{people}</span>
          </p>
          <p className="flex justify-between text-lg border-b pb-2">
            <span className="font-medium">Total Amount:</span>
            <span className="font-mono text-red-700 font-bold">₹{total}</span>
          </p>
        </div>

        {/* Confirmation */}
        <p className="text-green-700 font-semibold text-center mt-6">
          ✅ Booking Confirmed!  
          <br />Please follow further instructions.
        </p>

        {/* Back Button */}
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