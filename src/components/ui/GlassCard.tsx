import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 p-6 shadow-xl transition-all hover:bg-slate-900/60 hover:border-white/20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
