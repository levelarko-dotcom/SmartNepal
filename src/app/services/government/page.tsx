"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FileText, ExternalLink, Clock, Banknote, CheckCircle2, Search, RefreshCw } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  fee: string;
  processingTime: string;
  lastUpdated: string;
  requiredDocuments: string[];
  applyUrl: string;
}

export default function GovernmentServicesPage() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Live Sync Functionality
  const fetchLiveServices = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/services");
      const data = await res.json();
      if (data.success) {
        setServices(data.data);
      }
    } catch (err) {
      console.error("Failed to sync with live government services", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveServices();
  }, []);

  const filteredServices = services.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-16">
      <Navbar />

      <main className="pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs text-blue-400 mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Unified Live Government Portal</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">Government Citizen Services</h1>
            <p className="text-slate-400 text-sm mt-1">
              Real-time updated official fees, documents, and online application links in Nepal.
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <button
              onClick={fetchLiveServices}
              disabled={loading}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors flex items-center gap-2 text-xs cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-blue-400" : ""}`} />
              <span className="hidden sm:inline">Sync Live Fees</span>
            </button>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search services..."
                className="w-full bg-slate-900 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        {loading ? (
          <div className="py-20 text-center text-slate-400 text-sm flex flex-col items-center gap-3">
            <RefreshCw className="w-6 h-6 animate-spin text-blue-500" />
            <span>नेपाल सरकारको आधिकारिक डाटाबेससँग Sync हुँदैछ...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredServices.map((service) => (
              <GlassCard key={service.id} className="flex flex-col justify-between hover:border-blue-500/30">
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <span className="text-[10px] text-emerald-400 font-mono">
                        Auto-Synced: {service.lastUpdated}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                      {service.category}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300">{service.description}</p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center space-x-3">
                      <Banknote className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">Official Fee</span>
                        <span className="text-xs font-bold text-emerald-300">{service.fee}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">Processing Time</span>
                        <span className="text-xs font-bold text-slate-200">{service.processingTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Document List */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-slate-400 block mb-2">Required Documents:</span>
                    <ul className="space-y-1">
                      {service.requiredDocuments.map((doc, idx) => (
                        <li key={idx} className="flex items-center text-xs text-slate-300 space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="pt-6 mt-4 border-t border-white/10">
                  <a href={service.applyUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="w-full justify-center">
                      <span>Apply Official Portal</span>
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}