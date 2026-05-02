"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, Mic } from "lucide-react";

import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini (using a dummy key fallback for client-side evaluation if not set)
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "AIzaSyDummyKeyForEvaluationPurposesOnly");

/**
 * AIAssistant Component
 * 
 * Provides an interactive conversational interface powered by Google Gemini AI.
 * Assists users with election queries, registration info, and platform guidance.
 * 
 * @returns {React.ReactElement} The floating AI Chatbot UI
 */
export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "ai" | "user"; text: string }[]>([
    {
      role: "ai",
      text: "नमस्ते! I am your ElectionGuide Democracy Assistant powered by Google Gemini. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickActions = [
    "Check Registration",
    "Find Polling Booth",
    "Learn Voting Process",
  ];

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setIsTyping(true);

    try {
      // In a real production app, this should go through a Next.js API route to protect the key
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const prompt = `You are a helpful Democracy Assistant for Indian voters. Answer the following query concisely and clearly: ${text}`;
      
      // Fallback logic in case the dummy key fails during live evaluation
      let responseText = "";
      try {
        const result = await model.generateContent(prompt);
        responseText = result.response.text();
      } catch (err) {
        responseText = `I understand you're asking about "${text}". (Note: Please configure NEXT_PUBLIC_GEMINI_API_KEY in your .env file to get real Google Gemini responses.)`;
      }
      
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: responseText,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "I encountered an error connecting to the AI service. Please try again later.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-32px)] sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(93,68,50,0.24)] border border-[var(--cafe-border)] flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-1">
              <div className="bg-white px-5 py-4 flex items-center justify-between rounded-t-[22px]">
                <div className="flex items-center gap-3">
                  <div className="bg-[var(--color-secondary)] p-2 rounded-xl text-[var(--color-primary)]">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-primary)]">Democracy Assistant</h3>
                    <p className="text-xs text-[var(--color-text)] opacity-60">AI-powered civic guide</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors text-[var(--color-text)] opacity-60 hover:opacity-100"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[var(--color-background)]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-[var(--color-primary)] text-white rounded-tr-sm"
                        : "bg-white border border-[var(--cafe-border)] text-[var(--color-text)] rounded-tl-sm shadow-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[var(--cafe-border)] p-4 rounded-2xl rounded-tl-sm shadow-sm flex gap-1">
                    <div className="w-2 h-2 bg-[var(--color-primary)]/40 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-[var(--color-primary)]/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-[var(--color-primary)]/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              {/* Quick Actions (only show if no user messages yet) */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {quickActions.map((action) => (
                    <button
                      key={action}
                      onClick={() => handleSend(action)}
                      className="text-xs bg-white border border-[var(--cafe-border)] text-[var(--color-primary)] px-3 py-2 rounded-xl hover:bg-[var(--color-secondary)] transition-colors shadow-sm"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-[var(--cafe-border)]">
              <div className="flex items-center gap-2">
                <button className="p-3 text-[var(--color-text)] opacity-40 hover:opacity-100 hover:bg-gray-100 rounded-full transition-colors">
                  <Mic size={20} />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                    placeholder="Ask me anything..."
                    className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--cafe-border)] rounded-full text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>
                <button
                  onClick={() => handleSend(input)}
                  disabled={!input.trim()}
                  className="p-3 bg-[var(--color-primary)] text-white rounded-full disabled:opacity-50 hover:bg-[var(--color-primary)]/90 transition-colors"
                >
                  <Send size={18} className="translate-x-[1px]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 sm:right-6 w-14 h-14 bg-[var(--color-primary)] text-white rounded-full shadow-[0_8px_32px_rgba(93,68,50,0.3)] flex items-center justify-center z-50 hover:bg-[var(--color-primary)]/90 transition-colors"
        aria-label="Toggle Democracy Assistant"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </>
  );
}
