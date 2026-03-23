"use client";

import React from 'react';

const SectionLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-[#6c5ce7] font-bold uppercase tracking-widest text-sm mb-4 block">
      {children}
    </span>
  );
};

export default SectionLabel;