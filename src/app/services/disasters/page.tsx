"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { mockDisasterAlerts, DisasterAlert } from "@/lib/disaster-data";
import { AlertTriangle, ShieldAlert, PhoneCall, MapPin, Clock, Search, Waves, Mountain, Wind } from "lucide-react";

export default function DisasterAlertsPage() {
  const [search, setSearch] = useState("");
  const [severityFilter, setSeverityFilter] = useState("All");

  const filteredAlerts = mockDisasterAlerts.filter((a) => {
    const matchesSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.location.toLowerCase().includes(search.toLowerCase()) ||
      a.affectedDistricts.some((d) => d.toLowerCase().includes(search.toLowerCase()));

    if (severityFilter === "Critical") return matchesSearch && a.severity === "Critical";
    return matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Flood":
        return <Waves className="w-5 h-5 text-blue-400" />;
      case "Landslide":
        return <Mountain className="w-5 h-5 text-amber-400" />;
      default:
        return <Wind className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-16">
      <Navbar />

      <main className="pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-xs text-amber-400 mb-3">
              <AlertTriangle className="w-3.5 h-3.5 animate-pulse" />
              <span>National Early Warning Portal</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">Live Disaster & Hazard Alerts</h1>
            <p className="text-slate-400 text-sm mt-1">
              Real-time updates on floods, landslides, weather hazards, and emergency control rooms in Nepal.
            </p>
          </div>
        </div>

        {/* National Emergency Hotline Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/60 via-slate-900 to-slate-950 border border-red-500/30 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
              <ShieldAlert className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">आपतकालीन राष्ट्रिय हटलाइन नम्बरहरू (Emergency Helplines)</h4>
              <p className="text-xs text-slate-400">नेपाल प्रहरी: १०० | सशस्त्र प्रहरी: १०१ | एम्बुलेन्स: १०२ | बाढी सूचना: ११५५</p>
            </div>
          </div>
          <a
            href="tel:100"
            className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-lg shadow-red-600/30 shrink-0"
          >
            Call Nepal Police (100)
          </a>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search district, river, or highway..."
              className="w-full bg-slate-900 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={() => setSeverityFilter("All")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                severityFilter === "All"
                  ? "bg-amber-600 text-white border-amber-500"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              All Alerts
            </button>
            <button
              onClick={() => setSeverityFilter("Critical")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                severityFilter === "Critical"
                  ? "bg-red-600 text-white border-red-500"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              Critical Only
            </button>
          </div>
        </div>

        {/* Alerts List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAlerts.map((alert: DisasterAlert) => (
            <GlassCard
              key={alert.id}
              className={`flex flex-col justify-between ${
                alert.severity === "Critical" ? "border-red-500/40 bg-red-950/10" : "hover:border-amber-500/30"
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      {getTypeIcon(alert.type)}
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest block">{alert.type} Alert</span>
                      <h3 className="text-lg font-bold text-white">{alert.title}</h3>
                    </div>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0 ${
                      alert.severity === "Critical"
                        ? "bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse"
                        : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    }`}
                  >
                    {alert.severity}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">{alert.description}</p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{alert.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{alert.issuedAt}</span>
                  </div>
                </div>

                {/* Affected Districts */}
                <div className="pt-2">
                  <span className="text-[10px] uppercase text-slate-400 block mb-1.5 font-semibold">Affected Districts:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {alert.affectedDistricts.map((dist, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-slate-300">
                        {dist}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Helplines */}
              <div className="pt-4 mt-4 border-t border-white/10">
                <span className="text-[10px] uppercase text-slate-400 block mb-1.5 font-semibold flex items-center gap-1">
                  <PhoneCall className="w-3 h-3 text-emerald-400" /> Control Room Helplines:
                </span>
                <div className="flex flex-wrap gap-2">
                  {alert.helpline.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.split(" ")[0]}`}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-xs font-mono text-emerald-300 transition-colors cursor-pointer"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </main>
    </div>
  );
}