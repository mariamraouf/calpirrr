"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Zap } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  const cases = [
    {
      id: "01",
      client: "NovaBright",
      industry: "E-commerce",
      title: "Scaling to $50k MRR in 90 Days",
      challenge: "NovaBright was managing orders via Instagram DMs and spreadsheets with zero technical infrastructure.",
      solution: "Deployed a high-conversion architecture, integrated CRM for retention, and automated fulfillment logic.",
      results: [
        { label: "Growth", value: "450%", icon: <TrendingUp size={20} /> },
        { label: "Saved", value: "25h/wk", icon: <Clock size={20} /> }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "02",
      client: "UrbanStack",
      industry: "SaaS",
      title: "60% Support Cost Reduction",
      challenge: "Overwhelmed with basic tickets, leading to 24-hour response times and high customer churn.",
      solution: "Built and trained a custom AI support agent on internal documentation with instant escalation rules.",
      results: [
        { label: "Deflection", value: "78%", icon: <TrendingUp size={20} /> },
        { label: "Response", value: "< 5s", icon: <Clock size={20} /> }
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "03",
      client: "GreenLoop",
      industry: "Services",
      title: "Automated Sales Pipeline",
      challenge: "Sales team spending 70% of time on data entry instead of closing high-value deals.",
      solution: "Implemented end-to-end automated pipeline from lead capture to contract generation.",
      results: [
        { label: "Lead Vol", value: "+120%", icon: <TrendingUp size={20} /> },
        { label: "ROI", value: "12x", icon: <Zap size={20} /> }
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-black bg-grid">
      <Navbar />
      
      <section className="pt-64 pb-32 px-6 border-b border-white/10">
        <div className="container-custom">
          <motion.div {...reveal}>
            <SectionLabel>Proof of Concept</SectionLabel>
            <h1 className="text-6xl md:text-[8rem] leading-[0.85] mb-16 font-black uppercase tracking-tighter">
              Case <br /> <span className="text-[#064e3b]">Studies.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-40">
            {cases.map((c, i) => (
              <motion.div key={c.id} {...reveal} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="mono text-[#064e3b] text-xs font-bold mb-6 tracking-widest">
                    [{c.id}] // {c.industry}
                  </div>
                  <h2 className="text-4xl md:text-6xl mb-8">{c.title}</h2>
                  <div className="space-y-6 mb-12">
                    <p className="text-white/60 mono text-sm leading-relaxed"><span className="text-white font-bold">CHALLENGE:</span> {c.challenge}</p>
                    <p className="text-white/60 mono text-sm leading-relaxed"><span className="text-white font-bold">SOLUTION:</span> {c.solution}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-8 mb-12">
                    {c.results.map((res, idx) => (
                      <div key={idx} className="border border-white/10 p-6 bg-white/5">
                        <div className="text-3xl font-black text-[#064e3b] mb-1">{res.value}</div>
                        <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40">{res.label}</div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="border-white/10 rounded-none px-8 py-6 font-black uppercase tracking-tighter hover:bg-white hover:text-black">
                    View Full Report <ArrowRight className="ml-2" />
                  </Button>
                </div>
                <div className={`aspect-video bg-white/5 border border-white/10 overflow-hidden relative group ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <img src={c.image} alt={c.client} className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8">
                    <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40 mb-1">Client</div>
                    <div className="text-2xl font-black uppercase">{c.client}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CaseStudies;