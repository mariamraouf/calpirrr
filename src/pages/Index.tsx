"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Terminal, Cpu, Activity, Layers, 
  Code2, Zap, CheckCircle2, Rocket, MousePointer2,
  MessageSquare, BarChart3
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import ROICalculator from '@/components/home/ROICalculator';

const Index = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  return (
    <div className="min-h-screen bg-black bg-grid relative">
      <div className="scanline" />
      <Navbar />
      
      {/* Hero: The 7-Day Promise */}
      <section className="pt-64 pb-32 px-6 border-b border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <motion.div {...reveal}>
                <div className="mono text-[#064e3b] mb-6 font-bold tracking-[0.4em] text-sm flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#064e3b] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#064e3b]"></span>
                  </span>
                  [ READY_FOR_DEPLOYMENT ]
                </div>
                <h1 className="text-5xl md:text-[8rem] leading-[0.9] mb-12 font-black uppercase tracking-tighter">
                  Your Entire <br /> <span className="text-[#064e3b]">Business Stack</span> <br /> in 7 Days.
                </h1>
                <p className="text-xl md:text-2xl text-white/50 max-w-[650px] mb-12 mono leading-relaxed">
                  Stop stitching together separate tools. We build your high-conversion website, CRM, AI agents, and automation workflows into a single, high-performance engine.
                </p>
                <div className="flex flex-wrap gap-6">
                  <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer" className="btn-pro group">
                    Launch My Business <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <div className="flex items-center gap-4 px-8 border border-white/10 mono text-[0.7rem] font-bold tracking-widest uppercase text-white/40">
                    <Rocket size={14} className="text-[#064e3b]" /> 100% Bespoke Code
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="border border-white/10 p-8 bg-white/5 backdrop-blur-sm relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#064e3b]" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#064e3b]" />
                <div className="mono text-[0.65rem] text-white/30 space-y-2">
                  <div className="flex justify-between"><span>MODULE_01:</span> <span className="text-[#064e3b]">WEBSITE</span></div>
                  <div className="flex justify-between"><span>MODULE_02:</span> <span className="text-[#064e3b]">CRM_SYNC</span></div>
                  <div className="flex justify-between"><span>MODULE_03:</span> <span className="text-[#064e3b]">AI_AGENTS</span></div>
                  <div className="flex justify-between"><span>MODULE_04:</span> <span className="text-[#064e3b]">WORKFLOWS</span></div>
                  <div className="pt-4 border-t border-white/10 mt-4">
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-[#064e3b]"
                      />
                    </div>
                    <div className="mt-2 text-right text-[#064e3b]">DEPLOYMENT_COMPLETE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The "What We Do" Grid */}
      <section id="services" className="section-padding border-b border-white/10">
        <div className="container-custom">
          <SectionLabel>The Full Stack</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[
              { 
                title: "High-Conversion Web", 
                icon: <MousePointer2 />, 
                desc: "Not just a pretty site. A technical masterpiece built for speed, SEO, and turning visitors into customers.",
                features: ["Custom React/Next.js", "Edge Delivery", "SEO Optimized"]
              },
              { 
                title: "Integrated CRM", 
                icon: <BarChart3 />, 
                desc: "We set up and sync your sales pipeline so you never lose a lead. Every click is tracked and managed.",
                features: ["Lead Scoring", "Pipeline Automation", "Data Sync"]
              },
              { 
                title: "24/7 AI Agents", 
                icon: <MessageSquare />, 
                desc: "Autonomous agents that handle support, qualify leads, and book meetings while you sleep.",
                features: ["Natural Language", "Instant Response", "Auto-Booking"]
              },
              { 
                title: "Workflow Automation", 
                icon: <Zap />, 
                desc: "We eliminate your manual busywork. If it's repetitive, we automate it. Save 20+ hours every week.",
                features: ["Email Sequences", "Invoice Automation", "Task Routing"]
              }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                {...reveal}
                className="bg-black p-12 hover:bg-[#064e3b]/5 transition-all group"
              >
                <div className="text-[#064e3b] mb-8 group-hover:scale-110 transition-transform">
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-3xl mb-6 font-black uppercase tracking-tighter">{s.title}</h3>
                <p className="text-white/40 mono text-sm leading-relaxed mb-8">{s.desc}</p>
                <ul className="space-y-3">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-3 mono text-[0.65rem] text-white/60 uppercase tracking-widest">
                      <CheckCircle2 size={12} className="text-[#064e3b]" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The "Why Calpir" Section */}
      <section className="section-padding border-b border-white/10 bg-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionLabel>The Advantage</SectionLabel>
              <h2 className="text-5xl md:text-7xl mb-8 font-black uppercase tracking-tighter">Why Founders <br /> Choose Us.</h2>
              <p className="text-white/40 mono text-lg leading-relaxed mb-12">
                Traditional agencies take 3 months to build a site that doesn't talk to your CRM. We build your entire operational engine in 7 days.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 border border-[#064e3b] flex items-center justify-center shrink-0">
                    <span className="text-[#064e3b] font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase">Speed to Market</h4>
                    <p className="text-white/40 mono text-sm">Launch in days, not months. We use a proven technical framework to deploy fast.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 border border-[#064e3b] flex items-center justify-center shrink-0">
                    <span className="text-[#064e3b] font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase">Unified Systems</h4>
                    <p className="text-white/40 mono text-sm">Your website, CRM, and AI work as one. No more manual data entry or lost leads.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 border border-[#064e3b] flex items-center justify-center shrink-0">
                    <span className="text-[#064e3b] font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase">Pro Execution</h4>
                    <p className="text-white/40 mono text-sm">Built by senior engineers. Clean code, extreme performance, and zero technical debt.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square border border-white/10 bg-black p-12 flex flex-col justify-center">
                <div className="space-y-12">
                  <div className="text-center">
                    <div className="text-6xl font-black text-[#064e3b] mb-2">7 DAYS</div>
                    <div className="mono text-[0.7rem] uppercase tracking-[0.3em] text-white/40">Average Deployment</div>
                  </div>
                  <div className="blueprint-line" />
                  <div className="text-center">
                    <div className="text-6xl font-black text-[#064e3b] mb-2">20+ HRS</div>
                    <div className="mono text-[0.7rem] uppercase tracking-[0.3em] text-white/40">Weekly Time Saved</div>
                  </div>
                  <div className="blueprint-line" />
                  <div className="text-center">
                    <div className="text-6xl font-black text-[#064e3b] mb-2">24/7</div>
                    <div className="mono text-[0.7rem] uppercase tracking-[0.3em] text-white/40">Autonomous Growth</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#064e3b]/10 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ROI: The Logic */}
      <ROICalculator />

      {/* CTA: The Final Command */}
      <section id="contact" className="section-padding bg-[#064e3b] text-white">
        <div className="container-custom text-center">
          <motion.div {...reveal}>
            <h2 className="text-6xl md:text-[10rem] mb-12 leading-none font-black uppercase tracking-tighter">Ready to <br /> Initialize?</h2>
            <p className="mono text-xl mb-16 opacity-80 max-w-[600px] mx-auto">
              Stop managing tools. Start managing growth. Book your 30-minute technical strategy session.
            </p>
            <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-16 py-8 text-2xl font-black uppercase tracking-tighter hover:bg-black hover:text-white transition-all inline-block">
              Execute Strategy
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;