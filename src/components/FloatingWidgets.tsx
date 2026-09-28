"use client";

import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";

export function FloatingWidgets() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded actions */}
      {isOpen && (
        <div className="flex flex-col gap-3 animate-fade-in">
          {/* Zalo */}
          <a
            href="https://zalo.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <span className="bg-white text-sm font-medium text-foreground px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Chat Zalo
            </span>
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:19000098"
            className="flex items-center gap-3 group"
          >
            <span className="bg-white text-sm font-medium text-foreground px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Gọi ngay
            </span>
            <div className="w-12 h-12 bg-sea-green rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-bounce-gentle">
              <Phone className="w-6 h-6 text-white" />
            </div>
          </a>
        </div>
      )}

      {/* Toggle button */}
      <button
        id="floating-chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
          isOpen
            ? "bg-ocean-800 rotate-90"
            : "bg-ocean-500 hover:bg-ocean-600 animate-pulse-glow"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </button>
    </div>
  );
}
