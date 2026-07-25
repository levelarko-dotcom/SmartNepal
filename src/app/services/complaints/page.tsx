"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { AlertCircle, MessageSquare, Send, CheckCircle } from "lucide-react";

export default function ComplaintsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [department, setDepartment] = useState("Traffic & Transport");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-16">
      <Navbar />

      <main className="pt-28 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-8">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-xs text-amber-400 mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Hello Sarkar / Grievance Portal</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Citizen Grievance & Complaints
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Submit issues regarding road damage, delayed government services, or
            public utility problems.
          </p>
        </div>

        <GlassCard className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto" />
              <h2 className="text-xl font-bold text-white">
                गुनासो सफलतापुर्वक दर्ता भयो!
              </h2>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                तपाईंको गुनासो सम्बन्धित निकायमा पठाइएको छ। Tracking ID:{" "}
                <span className="font-mono text-amber-400">NEP-2026-9041</span>
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                variant="primary"
                className="text-xs"
              >
                अर्कै गुनासो दर्ता गर्नुहोस्
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Select Department (सम्बन्धित निकाय)
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                >
                  <option>Traffic & Transport (यातायात)</option>
                  <option>Municipality / Local Ward (नगरपालिका / वडा)</option>
                  <option>
                    Electricity & Water Supply (विद्युत् / खानेपानी)
                  </option>
                  <option>Nepal Police (प्रहरी)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Complaint Details (समस्याको विवरण)
                </label>
                <textarea
                  rows={4}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="तपाईंको समस्या विस्तारमा लेख्नुहोस्..."
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full justify-center py-3"
              >
                <Send className="w-4 h-4 mr-2" />
                <span>Submit Grievance</span>
              </Button>
            </form>
          )}
        </GlassCard>
      </main>
    </div>
  );
}
