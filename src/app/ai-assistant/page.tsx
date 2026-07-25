"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Send, Sparkles, Bot, User, Loader2 } from "lucide-react";

interface Message {
  sender: "user" | "ai";
  text: string;
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "नमस्ते! म स्मार्ट नेपाल AI सहायक हुँ। म तपाईंलाई नेपाल सरकारका सेवाहरू, राहदानी, लाइसेन्स, अस्पताल वा विपद् व्यवस्थापन सम्बन्धी सहयोग गर्न सक्छु। म कसरी सहयोग गरौँ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input;
    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setLoading(true);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: data.reply || "कुनै प्राविधिक समस्या आयो।" },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "नेपाल सर्भरसँग सम्पर्क हुन सकेन।" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full flex flex-col">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Smart Nepal AI Assistant</h1>
            <p className="text-xs text-slate-400">
              Government services & Citizen Help Portal
            </p>
          </div>
        </div>

        {/* Chat Window */}
        <GlassCard className="flex-1 flex flex-col min-h-[500px] p-4 sm:p-6 mb-4 overflow-hidden">
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "ai" && (
                  <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white rounded-tr-none"
                      : "bg-slate-800/80 border border-white/10 text-slate-200 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>

                {msg.sender === "user" && (
                  <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-slate-800/80 border border-white/10 rounded-2xl rounded-tl-none px-4 py-3 text-sm flex items-center space-x-2 text-slate-400">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>सोच्दैछ...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSend}
            className="pt-4 flex gap-2 border-t border-white/10"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="सोध्नुहोस्: e.g. Passport कसरी बनाउने?"
              className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
            />
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={loading}
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </GlassCard>
      </main>
    </div>
  );
}
