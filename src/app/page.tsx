"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  FileText,
  HeartPulse,
  AlertTriangle,
  Briefcase,
  GraduationCap,
  Sprout,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const modules = [
  {
    title: "Government Services",
    desc: "Passport, PAN, License & Citizenship applications.",
    icon: FileText,
    href: "/services/government",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Hospital Finder",
    desc: "Find real-time ICU beds and emergency services near you.",
    icon: HeartPulse,
    href: "/services/hospitals",
    color: "from-red-500 to-pink-600",
  },
  {
    title: "Disaster Alerts",
    desc: "Live flood, landslide, and earthquake warnings.",
    icon: AlertTriangle,
    href: "/services/disasters",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Jobs & Careers",
    desc: "Government exam notices & private sector vacancies.",
    icon: Briefcase,
    href: "/services/jobs",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Scholarships",
    desc: "National and international merit scholarships.",
    icon: GraduationCap,
    href: "/services/scholarships",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Agriculture Hub",
    desc: "Market rates, crop health guidance & seasonal advice.",
    icon: Sprout,
    href: "/services/agriculture",
    color: "from-green-500 to-emerald-600",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-red-600/20 via-blue-600/20 to-purple-600/20 blur-[120px] pointer-events-none rounded-full" />

        <div className="text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs sm:text-sm text-slate-300"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official Unified Citizen Gateway for Nepal</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          >
            Empowering Nepal with <br />
            <span className="bg-gradient-to-r from-red-500 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Smart Digital Infrastructure
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base sm:text-xl text-slate-400 leading-relaxed"
          >
            One account for all your government documents, healthcare needs,
            emergency alerts, and employment opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/citizen"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold flex items-center justify-center space-x-2 shadow-lg transition-all hover:scale-105"
            >
              <span>Explore Citizen Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/ai-assistant"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold flex items-center justify-center space-x-2 backdrop-blur-md transition-all"
            >
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span>Ask AI Assistant</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything You Need, Unified.
          </h2>
          <p className="mt-4 text-slate-400">
            Secure, accessible, and designed for every citizen of Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod, index) => {
            const Icon = mod.icon;
            return (
              <Link key={index} href={mod.href}>
                <GlassCard className="h-full hover:border-blue-500/40 transition-colors group">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${mod.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {mod.desc}
                  </p>
                </GlassCard>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
