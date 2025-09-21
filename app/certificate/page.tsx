"use client";

import { useState } from "react";

export default function CertificatePage() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && rating !== null) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-50">
      {!submitted ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Submit Your Review</h1>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />

            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-3xl ${
                    rating && rating >= star
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
            {!rating && (
              <p className="text-red-500 text-sm text-center">
                Please select a rating
              </p>
            )}

            <textarea
              placeholder="Your Review (Optional)"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              Submit Review
            </button>
          </form>
        </>
      ) : (
        <div className="w-full max-w-2xl bg-white shadow-2xl rounded-xl p-10 text-center border-8 border-yellow-500 relative">
          {/* Logo */}
          <img
            src="/images/logo.png"
            alt="PitrPath Logo"
            className="mx-auto w-20 h-20 mb-4"
          />

          <h1 className="text-4xl font-extrabold text-yellow-600">PitrPath</h1>
          <p className="text-lg italic text-gray-600 mb-8">
            "Where Tradition Meets Trust"
          </p>

          <h2 className="text-2xl font-bold mb-4">Certificate of Appreciation</h2>
          <p className="text-gray-700 mb-4">
            This certificate is proudly presented in honor of the successful completion of the sacred Pind Daan rituals with PitrPath to
          </p>
          <h3 className="text-2xl font-semibold text-yellow-600 mb-6">{name}</h3>

          {review && <p className="italic text-gray-600 mb-6">"{review}"</p>}

          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-3xl ${
                  rating && rating >= star ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          <div className="mt-12 flex justify-end">
            <div className="text-right">
              {/* Signature Image */}
              <img
                src="/images/sign.png"
                alt="Signature"
                className="w-40 h-auto mb-1"
              />
              <p className="text-sm text-gray-500 italic">Authorized Signature</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
