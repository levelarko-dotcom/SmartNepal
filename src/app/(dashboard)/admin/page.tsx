"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Users, FileCheck, AlertOctagon, TrendingUp, ShieldAlert, Activity } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 sm:p-10 space-y-8">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">System Admin Console</h1>
          <p className="text-slate-400 text-sm">Real-time platform metrics and citizen request oversight.</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 animate-pulse" /> All Systems Operational
        </span>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Total Citizens</p>
              <h3 className="text-2xl font-bold text-white mt-1">1,248,920</h3>
            </div>
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Users className="w-5 h-5" />
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Processed Apps</p>
              <h3 className="text-2xl font-bold text-white mt-1">84,310</h3>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <FileCheck className="w-5 h-5" />
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Pending Complaints</p>
              <h3 className="text-2xl font-bold text-amber-400 mt-1">142</h3>
            </div>
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <AlertOctagon className="w-5 h-5" />
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Active Alerts</p>
              <h3 className="text-2xl font-bold text-red-400 mt-1">3</h3>
            </div>
            <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
              <ShieldAlert className="w-5 h-5" />
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Verification Queue Section */}
      <GlassCard className="p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Government Identity Applications</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900/80 text-slate-400 uppercase text-xs border-b border-white/10">
              <tr>
                <th className="p-3">Applicant Name</th>
                <th className="p-3">Service Type</th>
                <th className="p-3">Submitted Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="p-3 font-medium text-white">Aarav Sharma</td>
                <td className="p-3">National ID Verification</td>
                <td className="p-3">2026-07-24</td>
                <td className="p-3"><span className="px-2 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs">Pending</span></td>
                <td className="p-3"><button className="text-blue-400 hover:underline">Review</button></td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white">Sita Shrestha</td>
                <td className="p-3">Passport Renewal</td>
                <td className="p-3">2026-07-25</td>
                <td className="p-3"><span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs">Approved</span></td>
                <td className="p-3"><button className="text-slate-400 cursor-not-allowed">Completed</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}