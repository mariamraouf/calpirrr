"use client";

import React, { useState } from 'react';
import SectionLabel from '../ui/SectionLabel';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ROICalculator = () => {
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(50);
  const [efficiency, setEfficiency] = useState(65);

  const hoursSaved = (hours * (efficiency / 100)).toFixed(1);
  const monthlySavings = Math.round(Number(hoursSaved) * 4 * rate);
  const annualSavings = monthlySavings * 12;
  const annualHoursSaved = Math.round(Number(hoursSaved) * 52);

  return (
    <section id="roi" className="section-padding bg-white">
      <div className="max-w-[600px] mx-auto text-center">
        <SectionLabel>Calculate</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12">See How Much You Could Save</h2>

        <div className="bg-white p-8 md:p-10 rounded-[16px] border border-[#e8e8e8] text-left shadow-sm">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-bold mb-3">Hours per week on manual tasks</label>
              <Input 
                type="number" 
                value={hours} 
                onChange={(e) => setHours(Number(e.target.value))}
                className="rounded-[10px] border-[#e8e8e8] focus:ring-[#6c5ce7]"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-3">Your hourly rate (or team member's)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <Input 
                  type="number" 
                  value={rate} 
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="pl-7 rounded-[10px] border-[#e8e8e8] focus:ring-[#6c5ce7]"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <label className="text-sm font-bold">Automation efficiency</label>
                <span className="text-sm font-bold text-[#6c5ce7]">{efficiency}%</span>
              </div>
              <Slider 
                value={[efficiency]} 
                onValueChange={(val) => setEfficiency(val[0])} 
                min={50} 
                max={80} 
                step={1}
                className="py-4"
              />
            </div>

            <div className="pt-6 border-t border-[#e8e8e8] space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Hours saved per week:</span>
                <span className="font-bold">{hoursSaved} hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Monthly savings:</span>
                <span className="text-2xl font-extrabold text-[#6c5ce7]">${monthlySavings.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Annual savings:</span>
                <span className="font-bold">${annualSavings.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Time saved per year:</span>
                <span className="font-bold">{annualHoursSaved.toLocaleString()} hours</span>
              </div>
            </div>
          </div>

          <p className="mt-8 text-[0.9rem] text-gray-500 italic text-center">
            Most Calpir clients save 15-25 hours per week within the first month.
          </p>

          <Button asChild className="w-full mt-8 bg-[#6c5ce7] hover:bg-[#5b4cdb] text-white rounded-[10px] py-6 font-bold text-lg transition-transform hover:-translate-y-1">
            <Link to="/#contact">See If Automation Is Right for You</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;