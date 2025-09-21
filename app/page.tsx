"use client";
import { useState } from "react";
import Image from "next/image";
import { respond } from "../lib/chatbot";

export default function HomePage() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<string[]>([
    "👋 Hi! How can I assist you with Pind Daan services?",
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === "") return;

    setMessages((prev) => [...prev, `🧑 You: ${input}`]);
    const query = input;
    setInput("");
    setLoading(true);

    try {
      const reply = await respond(query);
      setMessages((prev) => [...prev, `🤖 AI: ${reply}`]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        "❌ AI: Sorry, something went wrong. Please try again.",
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full">
      {/* Full Image as Home Page */}
      <div className="w-full">
        <Image
          src="/images/homepage.jpg"
          alt="Homepage"
          width={1920}       // original width of the image
          height={1080}      // original height of the image
          className="w-full h-auto"
        />
      </div>

      {/* Floating AI Help Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 bg-yellow-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-700 transition z-50"
      >
        {showChat ? "Close Chat" : "May I help you?"}
      </button>

      {/* Chatbox */}
      {showChat && (
        <div className="fixed bottom-20 right-6 w-80 bg-white border shadow-lg rounded-lg flex flex-col z-50">
          <h2 className="font-bold text-lg p-3 border-b">AI Assistant</h2>
          <div className="flex-1 h-40 overflow-y-auto p-3 space-y-2 text-sm text-gray-700">
            {messages.map((msg, i) => (
              <div key={i} className="bg-gray-100 p-2 rounded-md">
                {msg}
              </div>
            ))}
            {loading && (
              <div className="text-gray-500 italic">🤖 AI is typing...</div>
            )}
          </div>
          <div className="flex items-center border-t p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 border px-3 py-2 rounded-lg text-sm mr-2"
            />
            <button
              onClick={handleSend}
              className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition text-sm"
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
