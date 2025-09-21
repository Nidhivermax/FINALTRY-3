"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function PujaBookContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const name = searchParams.get("name") || "";
  const date = searchParams.get("date") || "";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
        <h1 className="text-2xl font-bold text-center mb-4">Booking Details</h1>
        <p className="text-lg">
          <span className="font-medium">Name:</span> {name}
        </p>
        <p className="text-lg">
          <span className="font-medium">Date:</span> {date}
        </p>
        <button
          onClick={() => router.push("/services/puja")}
          className="mt-6 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg transition"
        >
          ⬅ Back to Booking
        </button>
      </div>
    </div>
  );
}

export default function PujaBookPage() {
  return (
    <Suspense fallback={<div className="text-center p-6">Loading booking info...</div>}>
      <PujaBookContent />
    </Suspense>
  );
}
