"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { mockJobs, JobVacancy } from "@/lib/jobs-data";
import { Briefcase, Building2, Calendar, GraduationCap, ExternalLink, Search, Users } from "lucide-react";

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredJobs = mockJobs.filter((j) => {
    const matchesSearch =
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.organization.toLowerCase().includes(search.toLowerCase());

    if (categoryFilter === "LokSewa") return matchesSearch && j.category === "Lok Sewa";
    if (categoryFilter === "Banking") return matchesSearch && j.category === "Banking";
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-16">
      <Navbar />

      <main className="pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs text-blue-400 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Public Service & Career Opportunities</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">Jobs & Public Exam Notices</h1>
            <p className="text-slate-400 text-sm mt-1">
              Explore Lok Sewa Aayog notices, government banking jobs, and public enterprise vacancies in Nepal.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search job title or organization..."
              className="w-full bg-slate-900 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={() => setCategoryFilter("All")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                categoryFilter === "All"
                  ? "bg-blue-600 text-white border-blue-500"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              All Vacancies
            </button>
            <button
              onClick={() => setCategoryFilter("LokSewa")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                categoryFilter === "LokSewa"
                  ? "bg-blue-600 text-white border-blue-500"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              Lok Sewa Only
            </button>
            <button
              onClick={() => setCategoryFilter("Banking")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                categoryFilter === "Banking"
                  ? "bg-blue-600 text-white border-blue-500"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              Banking
            </button>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job: JobVacancy) => (
            <GlassCard key={job.id} className="flex flex-col justify-between hover:border-blue-500/30">
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{job.title}</h3>
                    <div className="flex items-center text-xs text-slate-400 gap-1 mt-1">
                      <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{job.organization}</span>
                    </div>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0 ${
                      job.status === "Closing Soon"
                        ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                        : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center space-x-3">
                    <Users className="w-5 h-5 text-blue-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Open Seats</span>
                      <span className="text-xs font-bold text-white">{job.totalPositions} Positions</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Deadline</span>
                      <span className="text-xs font-bold text-amber-300">{job.deadline}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-xs text-slate-300 gap-2 pt-1">
                  <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{job.qualification}</span>
                </div>
              </div>

              {/* Apply Button */}
              <div className="pt-6 mt-4 border-t border-white/10">
                <a
                  href={job.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-blue-600/20"
                >
                  <span>Apply via Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </main>
    </div>
  );
}