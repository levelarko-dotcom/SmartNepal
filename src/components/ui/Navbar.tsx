"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Menu,
  X,
  Bot,
  Hospital,
  FileText,
  AlertTriangle,
  Briefcase,
  User,
  AlertCircle,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "AI Assistant", href: "/ai-assistant", icon: Bot },
    { name: "Hospitals", href: "/services/hospitals", icon: Hospital },
    { name: "Govt Services", href: "/services/government", icon: FileText },
    { name: "Disasters", href: "/services/disasters", icon: AlertTriangle },
    { name: "Jobs", href: "/services/jobs", icon: Briefcase },
    { name: "Complaints", href: "/services/complaints", icon: AlertCircle },
    { name: "Blood Donor", href: "/services/blood-donor", icon: Heart },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white block leading-none">
                SMART<span className="text-blue-500">NEPAL</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                DIGITAL CITIZEN PORTAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  <Icon className="w-4 h-4 text-blue-400" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Login / Profile Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/login">
              <Button
                variant="primary"
                className="py-2 px-4 text-xs flex items-center space-x-2"
              >
                <User className="w-4 h-4" />
                <span>Citizen Login</span>
              </Button>
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 text-slate-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5"
              >
                <Icon className="w-5 h-5 text-blue-400" />
                <span>{link.name}</span>
              </Link>
            );
          })}

          <div className="pt-2">
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                variant="primary"
                className="w-full justify-center py-2.5 text-sm"
              >
                <User className="w-4 h-4 mr-2" />
                <span>Citizen Login</span>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
