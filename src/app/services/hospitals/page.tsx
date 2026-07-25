"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { mockHospitals, Hospital } from "@/lib/hospitals-data";
import { HeartPulse, Search, Phone, AlertCircle, MapPin } from "lucide-react";

export default function HospitalFinderPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredHospitals = mockHospitals.filter((h) => {
    const matchesSearch =
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.location.toLowerCase().includes(search.toLowerCase()) ||
      h.district.toLowerCase().includes(search.toLowerCase());

    if (filter === "ICU") return matchesSearch && h.availableIcu > 0;
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-16">
      <Navbar />

      <main className="pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 text-xs text-red-400 mb-3">
              <HeartPulse className="w-3.5 h-3.5" />
              <span>Real-Time Emergency Bed & Contact Tracker</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">Hospital & ICU Finder</h1>
            <p className="text-slate-400 text-sm mt-1">
              Find emergency medical services, available ICU beds, and direct multiple contact numbers in Nepal.
            </p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search hospital, city, or district..."
              className="w-full bg-slate-900 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={() => setFilter("All")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                filter === "All"
                  ? "bg-blue-600 text-white border-blue-500"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              All Hospitals
            </button>
            <button
              onClick={() => setFilter("ICU")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                filter === "ICU"
                  ? "bg-blue-600 text-white border-blue-500"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              Available ICU Only
            </button>
          </div>
        </div>

        {/* Hospitals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHospitals.map((hospital: Hospital) => (
            <GlassCard key={hospital.id} className="flex flex-col justify-between hover:border-red-500/30">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-white line-clamp-1">{hospital.name}</h3>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      hospital.emergencyStatus === "Available"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : hospital.emergencyStatus === "Busy"
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}
                  >
                    {hospital.emergencyStatus}
                  </span>
                </div>

                <div className="flex items-center text-xs text-slate-400 gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{hospital.location}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 block uppercase">ICU Beds</span>
                    <span className={`text-xl font-extrabold ${hospital.availableIcu > 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {hospital.availableIcu}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 block uppercase">General Beds</span>
                    <span className="text-xl font-extrabold text-blue-400">
                      {hospital.availableBeds}
                    </span>
                  </div>
                </div>
              </div>

              {/* Multiple Phone Numbers List */}
              <div className="pt-6 mt-4 border-t border-white/10 space-y-3">
                {/* Hospital Desk Numbers */}
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold flex items-center gap-1.5 mb-1.5">
                    <Phone className="w-3 h-3 text-emerald-400" />
                    Hospital Desk Contacts:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {hospital.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone}`}
                        className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-emerald-500/20 border border-white/10 text-xs font-mono text-slate-200 hover:text-emerald-400 transition-colors cursor-pointer"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Ambulance Numbers */}
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold flex items-center gap-1.5 mb-1.5">
                    <AlertCircle className="w-3 h-3 text-red-400" />
                    Ambulance Hotline:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {hospital.ambulance.map((amb, idx) => (
                      <a
                        key={idx}
                        href={`tel:${amb}`}
                        className="px-2.5 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600/40 border border-red-500/30 text-xs font-mono text-red-300 hover:text-white transition-colors cursor-pointer"
                      >
                        {amb}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </main>
    </div>
  );
}