"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Users, Zap } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      company: "Nexus Logistics",
      title: "70% Reduction in Support Tickets",
      desc: "We deployed a custom AI agent that handles 85% of tracking inquiries autonomously, freeing up the human team for complex logistics.",
      stat: "85%",
      statLabel: "Auto-Resolved",
      icon: <Zap className="text-[#f97316]" />
    },
    {
      company: "GrowthFlow SaaS",
      title: "40% Increase in Lead Conversion",
      desc: "By integrating a real-time lead qualification agent and CRM sync, GrowthFlow stopped losing leads to slow response times.",
      stat: "+40%",
      statLabel: "Conversion",
      icon: <TrendingUp className="text-[#f97316]" />
    },
    {
      company: "SwiftLaunch",
      title: "From Zero to $2M Seed in 3 Months",
      desc: "We built their entire technical infrastructure in 7 days, allowing the founders to focus entirely on fundraising and product-market fit.",
      stat: "7 Days",
      statLabel: "To Launch",
      icon: <Users className="text-[#f97316]" />
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-[600px]">
            <span className="text-[#f97316] font-bold uppercase tracking-widest text-sm mb-4 block">Proven Results</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">Case Studies.</h2>
          </div>
          <p className="text-[#666] text-lg max-w-[400px]">
            Real impact for real companies. We don't just build tools; we drive measurable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#fff7ed] p-10 rounded-[24px] border border-[#f9731610] hover:border-[#f9731633] transition-all hover:shadow-xl"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-white rounded-[12px] flex items-center justify-center shadow-sm">
                  {c.icon}
                </div>
                <ArrowUpRight className="text-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-sm font-bold text-[#f97316] mb-2 uppercase tracking-wider">{c.company}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#f97316] transition-colors">{c.title}</h3>
              <p className="text-[#666] leading-relaxed mb-8 text-[0.95rem]">{c.desc}</p>
              <div className="pt-6 border-t border-[#f9731610] flex items-center gap-4">
                <div className="text-3xl font-black text-[#f97316]">{c.stat}</div>
                <div className="text-xs font-bold uppercase text-[#888] tracking-widest">{c.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;