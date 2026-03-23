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
      "inline-block px-4 py-1.5 rounded-full text-[0.8rem] font-semibold uppercase tracking-wider mb-6",
      variant === 'light' 
        ? "bg-[#6c5ce71a] text-[#6c5ce7]" 
        : "bg-[#a29bfe33] text-[#a29bfe]",
      className
    )}>
      {children}
    </span>
  );
};

export default SectionLabel;