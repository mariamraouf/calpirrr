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
    <section className="py-24 px-6 bg-[#f8f9fa]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#6c5ce7] font-bold uppercase tracking-widest text-sm mb-4 block">Efficiency Logic</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Calculate Your <br /> Automation ROI.</h2>
            <p className="text-lg text-[#555] leading-relaxed">
              Our systems are designed to eliminate manual overhead. Input your current metrics to see the projected impact of our automation engine.
            </p>
          </div>
          
          <div className="bg-white p-10 md:p-12 rounded-[24px] shadow-xl border border-[#e2e8f0]">
            <div className="space-y-8">
              <div>
                <label className="text-sm font-bold text-[#1a1a2e] block mb-3">Weekly Manual Hours</label>
                <Input 
                  type="number" 
                  value={hours} 
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="h-14 text-xl font-bold border-[#e2e8f0] focus:border-[#6c5ce7] focus:ring-[#6c5ce710] rounded-[10px]"
                />
              </div>
              
              <div>
                <label className="text-sm font-bold text-[#1a1a2e] block mb-3">Hourly Rate ($)</label>
                <Input 
                  type="number" 
                  value={rate} 
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="h-14 text-xl font-bold border-[#e2e8f0] focus:border-[#6c5ce7] focus:ring-[#6c5ce710] rounded-[10px]"
                />
              </div>

              <div className="pt-8 border-t border-[#e2e8f0]">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#888] mb-2">Monthly Savings</div>
                    <div className="text-3xl font-bold text-[#6c5ce7]">${monthlySavings.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#888] mb-2">Annual Savings</div>
                    <div className="text-3xl font-bold text-[#6c5ce7]">${annualSavings.toLocaleString()}</div>
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