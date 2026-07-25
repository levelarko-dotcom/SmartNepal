"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Heart, Search, Phone, MapPin, Droplet, UserPlus } from "lucide-react";

interface Donor {
  id: string;
  name: string;
  bloodGroup: string;
  location: string;
  phone: string;
  lastDonated: string;
  status: "Available" | "Recently Donated";
}

const mockDonors: Donor[] = [
  {
    id: "1",
    name: "रोशन श्रेष्ठ (Roshan Shrestha)",
    bloodGroup: "O+",
    location: "Koteshwor, Kathmandu",
    phone: "9841234567",
    lastDonated: "4 months ago",
    status: "Available",
  },
  {
    id: "2",
    name: "सुमन कार्की (Suman Karki)",
    bloodGroup: "A+",
    location: "Lagankhel, Lalitpur",
    phone: "9801987654",
    lastDonated: "2 months ago",
    status: "Recently Donated",
  },
  {
    id: "3",
    name: "अञ्जली शर्मा (Anjali Sharma)",
    bloodGroup: "AB-",
    location: "Suryabinayak, Bhaktapur",
    phone: "9860112233",
    lastDonated: "6 months ago",
    status: "Available",
  },
];

export default function BloodDonorPage() {
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [search, setSearch] = useState("");

  const bloodGroups = ["All", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  const filteredDonors = mockDonors.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.location.toLowerCase().includes(search.toLowerCase());
    if (selectedGroup !== "All") return matchesSearch && d.bloodGroup === selectedGroup;
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
              <Heart className="w-3.5 h-3.5 fill-red-500" />
              <span>Emergency Blood Donors Directory</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">Emergency Blood Finder</h1>
            <p className="text-slate-400 text-sm mt-1">
              Connect with volunteer blood donors and Red Cross blood banks across Nepal.
            </p>
          </div>

          <button className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/30">
            <UserPlus className="w-4 h-4" />
            <span>Register as Donor</span>
          </button>
        </div>

        {/* Blood Group Quick Filters */}
        <div className="flex flex-wrap gap-2 pt-2">
          {bloodGroups.map((group) => (
            <button
              key={group}
              onClick={() => setSelectedGroup(group)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedGroup === group
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search location or donor name..."
            className="w-full bg-slate-900 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
          />
        </div>

        {/* Donors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredDonors.map((donor) => (
            <GlassCard key={donor.id} className="flex flex-col justify-between hover:border-red-500/30">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 font-extrabold text-lg">
                    {donor.bloodGroup}
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      donor.status === "Available"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    }`}
                  >
                    {donor.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">{donor.name}</h3>
                  <div className="flex items-center text-xs text-slate-400 gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <span>{donor.location}</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 font-mono">
                  Last Donated: {donor.lastDonated}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10">
                <a
                  href={`tel:${donor.phone}`}
                  className="w-full py-2 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {donor.phone}</span>
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </main>
    </div>
  );
}