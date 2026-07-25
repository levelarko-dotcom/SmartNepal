"use client";

import React from "react";
import { Navbar } from "@/components/ui/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  Shield,
  User,
  FileCheck,
  Clock,
  CreditCard,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function CitizenDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-16">
      <Navbar />

      <main className="pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        {/* Citizen Profile Header */}
        <GlassCard className="p-6 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-900 border-blue-500/30">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
              <User className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">
                  माधव गौतम (Madhav Gautam)
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Verified Citizen
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                NIN: 102-849-2041 | Citizenship No: 27-01-79-12345
              </p>
            </div>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center flex-1 md:flex-initial min-w-[120px]">
              <span className="text-[10px] text-slate-400 block uppercase">
                Active Services
              </span>
              <span className="text-lg font-bold text-blue-400">
                3 Verified
              </span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center flex-1 md:flex-initial min-w-[120px]">
              <span className="text-[10px] text-slate-400 block uppercase">
                Pending App
              </span>
              <span className="text-lg font-bold text-amber-400">1 Review</span>
            </div>
          </div>
        </GlassCard>

        {/* Digital Wallet Documents */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-blue-400" />
            <span>Digital Government Wallet</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* National ID */}
            <GlassCard className="hover:border-blue-500/40">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-blue-400 uppercase">
                  National Identity Card
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-lg font-mono font-bold text-white mb-1">
                102-849-2041
              </p>
              <p className="text-xs text-slate-400">Status: Issued (Active)</p>
            </GlassCard>

            {/* Smart License */}
            <GlassCard className="hover:border-blue-500/40">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-blue-400 uppercase">
                  Driving License
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-lg font-mono font-bold text-white mb-1">
                01-08-0098412
              </p>
              <p className="text-xs text-slate-400">
                Category: A, B (Motorcycle, Car)
              </p>
            </GlassCard>

            {/* e-Passport Application */}
            <GlassCard className="hover:border-amber-500/40">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-amber-400 uppercase">
                  e-Passport Status
                </span>
                <Clock className="w-4 h-4 text-amber-400 animate-spin" />
              </div>
              <p className="text-lg font-mono font-bold text-white mb-1">
                APP-2026-9812
              </p>
              <p className="text-xs text-amber-300">
                Biometrics Completed (In Printing)
              </p>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  );
}
