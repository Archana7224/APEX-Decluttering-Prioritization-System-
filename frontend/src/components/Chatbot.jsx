// ChatbotButton.jsx
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chatbot Modal */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 max-w-full bg-white shadow-lg rounded-lg flex flex-col overflow-hidden z-50">
          <div className="flex justify-between items-center bg-[#4F8CFD] text-white px-4 py-2">
            <span>APEX Assistant</span>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto h-60">
            
            {/* Chat messages will go here */}
            <div className="text-gray-500 text-sm">Hi! How can I help you?</div>
          </div>
          <div className="p-2 border-t border-gray-300 flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#4F8CFD]"
            />
            <button className="bg-[#4F8CFD] px-3 py-2 rounded-r-lg text-white">Send</button>
          </div>
        </div>
      )}

      {/* Floating Chatbot Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-[#4F8CFD] text-white p-4 rounded-full shadow-lg hover:opacity-90 transition"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </>
  );
}
