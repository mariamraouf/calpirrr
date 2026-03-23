"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Rocket, MousePointer2, 
  MessageSquare, BarChart3, Zap, CheckCircle2,
  Clock, Shield, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';

const Index = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  } as const;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-40 pb-24 px-6">
        <div className="container-custom text-center">
          <motion.div {...reveal}>
            <div className="inline-flex items-center gap-2 bg-purple-50 text-[#6c5ce7] px-4 py-2 rounded-full text-sm font-bold mb-8">
              <Star size={16} fill="currentColor" />
              <span>The #1 Business Launch Partner</span>
            </div>
            <h1 className="text-[2.5rem] md:text-[4.5rem] leading-[1.1] font-[800] mb-8 text-[#1a1a2e]">
              Launch Your Business <br /> <span className="text-[#6c5ce7]">In Just 7 Days.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-[700px] mx-auto mb-12 leading-relaxed">
              We build your high-conversion website, integrated CRM, and AI automation into a single, high-performance engine. Stop managing tools, start managing growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer" className="btn-premium">
                Get Started Now <ArrowRight size={18} />
              </a>
              <Link to="/services" className="px-8 py-4 rounded-full font-bold text-gray-600 hover:text-[#6c5ce7] transition-colors">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-gray-50">
        <div className="container-custom">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by founders worldwide</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
            <div className="text-2xl font-black">STRIPE</div>
            <div className="text-2xl font-black">LINEAR</div>
            <div className="text-2xl font-black">VERCEL</div>
            <div className="text-2xl font-black">NOTION</div>
          </div>
        </div>
      </section>

      {/* The Pillars */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6">The Full-Stack Solution</h2>
            <p className="text-gray-500 max-w-[600px] mx-auto">Everything you need to run a modern, automated business from day one.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "High-Conversion Web", 
                icon: <MousePointer2 className="text-[#6c5ce7]" />, 
                desc: "A technical masterpiece built for speed, SEO, and turning visitors into loyal customers.",
                features: ["Custom React/Next.js", "SEO Optimized", "Mobile First"]
              },
              { 
                title: "Integrated CRM", 
                icon: <BarChart3 className="text-[#6c5ce7]" />, 
                desc: "We sync your sales pipeline so you never lose a lead. Every click is tracked and managed.",
                features: ["Lead Scoring", "Pipeline Sync", "Data Analytics"]
              },
              { 
                title: "24/7 AI Agents", 
                icon: <MessageSquare className="text-[#6c5ce7]" />, 
                desc: "Autonomous agents that handle support, qualify leads, and book meetings while you sleep.",
                features: ["Natural Language", "Auto-Booking", "Instant Support"]
              },
              { 
                title: "Workflow Automation", 
                icon: <Zap className="text-[#6c5ce7]" />, 
                desc: "We eliminate manual busywork. If it's repetitive, we automate it. Save 20+ hours weekly.",
                features: ["Email Sequences", "Invoice Automation", "Task Routing"]
              }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                {...reveal}
                className="card-premium group"
              >
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h3 className="text-2xl mb-4 font-bold">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">{s.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {s.features.map(f => (
                    <span key={f} className="bg-gray-50 text-gray-500 text-[0.75rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">Why Founders <br /> Choose Calpir.</h2>
              <div className="space-y-8">
                {[
                  { title: "Speed to Market", icon: <Clock />, desc: "Launch in 7 days, not 3 months. We use a proven framework to deploy your entire stack fast." },
                  { title: "Unified Systems", icon: <Shield />, desc: "Your website, CRM, and AI work as one. No more manual data entry or lost leads." },
                  { title: "Senior Execution", icon: <Rocket />, desc: "Built by senior engineers. Clean code, extreme performance, and zero technical debt." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-[#6c5ce7]">
                      {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-purple-100 border border-purple-50">
                <div className="space-y-10">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-400 uppercase tracking-widest text-sm">Deployment Time</span>
                    <span className="text-3xl font-black text-[#6c5ce7]">7 Days</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#6c5ce7] w-full" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-400 uppercase tracking-widest text-sm">Weekly Time Saved</span>
                    <span className="text-3xl font-black text-[#6c5ce7]">20+ Hrs</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#6c5ce7] w-[85%]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-400 uppercase tracking-widest text-sm">Efficiency Gain</span>
                    <span className="text-3xl font-black text-[#6c5ce7]">40%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#6c5ce7] w-[70%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="brand-gradient rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl shadow-purple-200">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Initialize?</h2>
            <p className="text-xl opacity-90 max-w-[600px] mx-auto mb-12">
              Stop managing tools. Start managing growth. Book your 30-minute technical strategy session today.
            </p>
            <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer" className="bg-white text-[#6c5ce7] px-12 py-6 rounded-full text-xl font-black hover:bg-gray-50 transition-all inline-block shadow-xl">
              Book My Strategy Session
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;