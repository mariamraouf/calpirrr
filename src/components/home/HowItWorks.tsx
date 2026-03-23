"use client";

import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Technical Audit",
      desc: "We analyze your current stack, identify bottlenecks, and map out your ideal automation architecture."
    },
    {
      num: "02",
      title: "Rapid Deployment",
      desc: "Our engineers build your website, CRM, and AI agents in parallel using our proprietary 7-day framework."
    },
    {
      num: "03",
      title: "AI Training",
      desc: "We feed your business data into our custom LLM agents, ensuring they speak your brand voice perfectly."
    },
    {
      num: "04",
      title: "Scale & Optimize",
      desc: "We launch, monitor performance, and continuously refine your workflows for maximum efficiency."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#1a1a1a] text-white overflow-hidden relative">
      <div className="absolute inset-0 neural-pattern" />
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#f97316] font-bold uppercase tracking-widest text-sm mb-4 block">The Process</span>
          <h2 className="text-4xl md:text-5xl font-bold">How We Launch in 7 Days.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-black text-[#f9731615] absolute -top-8 -left-4 select-none">{s.num}</div>
              <h3 className="text-xl font-bold mb-4 relative z-10">{s.title}</h3>
              <p className="text-white/60 leading-relaxed text-[0.95rem]">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-gradient-to-r from-[#f97316] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;