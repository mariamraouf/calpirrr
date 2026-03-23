"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

const ROICalculator = () => {
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(50);

  const efficiency = 65;
  const hoursSaved = (hours * (efficiency / 100)).toFixed(1);
  const monthlySavings = Math.round(Number(hoursSaved) * 4 * rate);
  const annualSavings = monthlySavings * 12;

  return (
    <section className="py-24 px-6 bg-[#fffcf9]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#f97316] font-bold uppercase tracking-widest text-sm mb-4 block">Efficiency Logic</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#1a1a1a]">Calculate Your <br /> Automation ROI.</h2>
            <p className="text-lg text-[#555] leading-relaxed">
              Our systems are designed to eliminate manual overhead. Input your current metrics to see the projected impact of our AI-driven automation engine.
            </p>
          </div>
          
          <div className="bg-white p-10 md:p-12 rounded-[32px] shadow-2xl border border-[#f9731610] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f9731605] rounded-full -mr-16 -mt-16" />
            <div className="space-y-8 relative z-10">
              <div>
                <label className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest block mb-3">Weekly Manual Hours</label>
                <Input 
                  type="number" 
                  value={hours} 
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="h-16 text-2xl font-black border-[#e5e7eb] focus:border-[#f97316] focus:ring-[#f9731610] rounded-[16px]"
                />
              </div>
              
              <div>
                <label className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest block mb-3">Hourly Rate ($)</label>
                <Input 
                  type="number" 
                  value={rate} 
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="h-16 text-2xl font-black border-[#e5e7eb] focus:border-[#f97316] focus:ring-[#f9731610] rounded-[16px]"
                />
              </div>

              <div className="pt-8 border-t border-[#f9731610]">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-[#888] mb-2">Monthly Savings</div>
                    <div className="text-4xl font-black text-[#f97316]">${monthlySavings.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-[#888] mb-2">Annual Savings</div>
                    <div className="text-4xl font-black text-[#f97316]">${annualSavings.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;