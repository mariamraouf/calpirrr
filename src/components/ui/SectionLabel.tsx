"use client";

import React from 'react';
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
}

const SectionLabel = ({ children, className, variant = 'light' }: SectionLabelProps) => {
  return (
    <span className={cn(
      "inline-block px-5 py-2 rounded-full text-[0.75rem] font-bold uppercase tracking-[0.15em] mb-8 border",
      variant === 'light' 
        ? "bg-[#064e3b]/5 text-[#064e3b] border-[#064e3b]/10" 
        : "bg-white/10 text-white border-white/20",
      className
    )}>
      {children}
    </span>
  );
};

export default SectionLabel;