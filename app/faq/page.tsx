"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is Pind Daan?",
      answer:
        "Pind Daan is a Hindu ritual performed for the salvation of ancestors’ souls. It helps them attain peace and liberation.",
    },
    {
      question: "Why is Gaya Ji famous for Pind Daan?",
      answer:
        "Gaya Ji is mentioned in Garuda Purana, Mahabharata, and Vishnu Purana. It is believed that performing rituals here ensures moksha for ancestors.",
    },
    {
      question: "When should Pind Daan be performed?",
      answer:
        "The most auspicious time is during Pitru Paksha (Shraddh Paksha), but it can also be done on other occasions like Amavasya or death anniversaries.",
    },
    {
      question: "Can I book Pandits and services online?",
      answer:
        "Yes, through our website you can easily book Pandits and required samagri for performing rituals at Gaya Ji.",
    },
    {
      question: "Do I need to visit Gaya Ji personally?",
      answer:
        "Traditionally, it is preferred to visit Gaya Ji, but in special cases, rituals can be arranged on your behalf through authorized Pandits.",
    },
  ];

  const [userQuestion, setUserQuestion] = useState("");
  const [submittedQuestions, setSubmittedQuestions] = useState<string[]>([]);

  const handleSubmit = () => {
    if (userQuestion.trim() !== "") {
      setSubmittedQuestions([...submittedQuestions, userQuestion]);
      setUserQuestion("");
    }
  };

  const handleSend = () => {
    if (userQuestion.trim() === "") {
      alert("Please enter a question before sending!");
    } else {
      alert("✅ Your question has been sent!");
      setUserQuestion(""); // clear input after sending
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="font-semibold text-lg">{faq.question}</h2>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* User Question Input */}
      <div className="mt-8 border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Have a Question?</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="flex-1 border rounded p-2"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
          <button
            onClick={handleSend}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </div>

        {/* Display submitted questions */}
        {submittedQuestions.length > 0 && (
          <div className="mt-6 space-y-2">
            <h3 className="font-semibold">Your Submitted Questions:</h3>
            {submittedQuestions.map((q, i) => (
              <p key={i} className="text-gray-800">
                • {q}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}