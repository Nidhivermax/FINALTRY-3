"use client";

import { useState } from "react";

export default function AIAssistantPage() {
  const [question, setQuestion] = useState("");

  const handleAskAI = () => {
    if (!question.trim()) return;
    alert(`You asked: ${question}\n\n(This is where AI response will show)`);
    setQuestion("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <h1 className="text-3xl font-bold text-yellow-700 mb-6">🤖 AI Assistant</h1>

      <p className="text-gray-700 text-center max-w-2xl mb-8">
        Welcome! I’m your virtual guide for <strong>Pind Daan Seva</strong>.  
        Ask me about rituals, packages, bookings, or anything else related to your journey.
      </p>

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
        <textarea
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 outline-none mb-4"
          rows={4}
        />

        <button
          onClick={handleAskAI}
          className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition"
        >
          Ask AI
        </button>
      </div>
    </div>
  );
}
