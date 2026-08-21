"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Phone,
  MessageSquare,
  User,
  Bot,
  ChevronRight,
  HeadphonesIcon
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Namaste! 🙏 Welcome to Sands Of Kashi. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const originalInput = inputValue;
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: originalInput }),
      });

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply || "I'm sorry, I'm having trouble connecting right now. Please try calling us directly.",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "System error. Please use the WhatsApp or Call options for immediate assistance.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickLinks = [
    { name: "Room Prices", icon: "💰" },
    { name: "Distance to Temple", icon: "🏛️" },
    { name: "Food Menu", icon: "🍕" },
    { name: "Check In Time", icon: "⏰" },
    { name: "Ghat Distance", icon: "🌊" },
    { name: "Contact Detail", icon: "📞" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="pointer-events-auto mb-4 w-[380px] h-[620px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#1a2b4b] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <Bot size={24} className="text-blue-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">SOK AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] text-gray-300">Online & Ready to Help</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Support Options Section */}
            <div className="p-3 bg-gray-50 border-b border-gray-100 space-y-2">
              {/* Restaurant Support */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 px-1">Restaurant Support (Masala Mist)</span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://wa.me/917522801563"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2 bg-[#25D366] text-white rounded-xl text-[10px] font-bold hover:bg-[#20bd5a] transition-all shadow-sm uppercase"
                  >
                    <MessageSquare size={12} />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+917522801563"
                    className="flex items-center justify-center gap-2 p-2 bg-[#1a2b4b] text-white rounded-xl text-[10px] font-bold hover:opacity-90 transition-all shadow-sm uppercase"
                  >
                    <Phone size={12} />
                    Call
                  </a>
                </div>
              </div>

              {/* Hotel Support */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 px-1">Hotel Support (Sands Of Kashi)</span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://wa.me/917522801564"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2 bg-[#25D366] text-white rounded-xl text-[10px] font-bold hover:bg-[#20bd5a] transition-all shadow-sm uppercase"
                  >
                    <MessageSquare size={12} />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+917522801564"
                    className="flex items-center justify-center gap-2 p-2 bg-[#e67e22] text-white rounded-xl text-[10px] font-bold hover:opacity-90 transition-all shadow-sm uppercase"
                  >
                    <Phone size={12} />
                    Call
                  </a>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 bg-gray-50/50 space-y-4 scroll-smooth"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} items-start gap-2`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-[#1a2b4b] flex items-center justify-center shrink-0 border border-blue-900/10">
                      <Bot size={16} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${msg.sender === "user"
                      ? "bg-[#1a2b4b] text-white rounded-tr-none shadow-md"
                      : "bg-white text-gray-800 rounded-tl-none shadow border border-gray-100"
                      }`}
                  >
                    {msg.text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={i}>{part.slice(2, -2)}</strong>;
                      }
                      return part;
                    })}
                    <div className={`mt-1 text-[9px] ${msg.sender === "user" ? "text-blue-100" : "text-gray-400"}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  {msg.sender === "user" && (
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200">
                      <User size={16} className="text-blue-600" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#1a2b4b] flex items-center justify-center border border-blue-900/10">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Links */}
            {!isLoading && messages.length < 3 && (
              <div className="px-4 py-2 border-t border-gray-100 bg-white overflow-x-auto no-scrollbar">
                <div className="flex gap-2 min-w-max pb-1">
                  {quickLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => {
                        setInputValue(link.name);
                      }}
                      className="whitespace-nowrap px-3 py-1.5 rounded-full border border-blue-100 text-[11px] text-[#1a2b4b] hover:bg-[#1a2b4b] hover:text-white transition-all bg-blue-50/30"
                    >
                      <span className="mr-1.5">{link.icon}</span>
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 bg-white border-t border-gray-100 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask anything..."
                className="flex-1 bg-gray-50 text-black border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 outline-none transition-shadow"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="w-10 h-10 bg-[#1a2b4b] text-white rounded-xl flex items-center justify-center hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto w-16 h-16 bg-[#1a2b4b] text-white rounded-full flex items-center justify-center shadow-2xl relative border-4 border-white"
        aria-label="Toggle Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="flex items-center justify-center"
            >
              <MessageCircle size={32} />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-[10px] font-bold">1</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <style dangerouslySetInnerHTML={{
        __html: `
              input {
                color: black;
              }
        `}}
      />
    </div>
  );
};

export default ChatBot;
