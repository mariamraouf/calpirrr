"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Check, Globe, BarChart3, Megaphone, Settings, 
  TrendingUp, Briefcase, Zap, Shield, Users, Clock
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import ROICalculator from '@/components/home/ROICalculator';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <Navbar />
      
      {/* Hero: Editorial Style */}
      <section className="pt-48 pb-32 px-6">
        <div className="container-custom">
          <div className="max-w-[900px]">
            <SectionLabel className="bg-[#064e3b]/5 text-[#064e3b] border border-[#064e3b]/10">
              Operational Excellence for Founders
            </SectionLabel>
            <h1 className="text-[3.5rem] md:text-[5.5rem] font-bold leading-[0.95] tracking-tighter mb-8 text-[#064e3b] text-balance">
              Build a business that <br className="hidden md:block" /> runs itself.
            </h1>
            <p className="text-xl md:text-2xl text-black/60 max-w-[650px] mb-12 leading-relaxed font-medium">
              We design and deploy the infrastructure your company needs to scale—from high-conversion websites to automated sales pipelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#064e3b] hover:bg-[#053f30] text-white px-10 h-16 rounded-full font-bold text-lg shadow-2xl shadow-[#064e3b]/20 transition-all hover:scale-105">
                <a href="#contact">Book a Strategy Call</a>
              </Button>
              <Button asChild variant="ghost" className="px-10 h-16 rounded-full font-bold text-lg hover:bg-black/5">
                <a href="#services" className="flex items-center gap-2">
                  Our Services <ArrowRight size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof: Minimalist */}
      <section className="py-12 border-y border-black/5 bg-white">
        <div className="container-custom flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale">
          <span className="text-xl font-bold tracking-tighter">FORBES</span>
          <span className="text-xl font-bold tracking-tighter">TECHCRUNCH</span>
          <span className="text-xl font-bold tracking-tighter">WIRED</span>
          <span className="text-xl font-bold tracking-tighter">FAST COMPANY</span>
          <span className="text-xl font-bold tracking-tighter">THE VERGE</span>
        </div>
      </section>

      {/* Services: Clean Cards */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-[600px]">
              <SectionLabel>Capabilities</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#064e3b]">The Full Stack of <br /> Business Growth.</h2>
            </div>
            <p className="text-lg text-black/50 max-w-[400px] mb-2">
              We don't just give advice. We build the actual systems that drive your revenue and free up your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Digital Presence",
                icon: <Globe size={24} />,
                desc: "High-performance websites that don't just look good—they convert visitors into customers.",
                features: ["Custom Architecture", "SEO Strategy", "Conversion Design"]
              },
              {
                title: "Sales Infrastructure",
                icon: <BarChart3 size={24} />,
                desc: "CRM setups and sales pipelines that ensure no lead ever falls through the cracks.",
                features: ["HubSpot/GHL Setup", "Lead Scoring", "Automated Follow-ups"]
              },
              {
                title: "Workflow Automation",
                icon: <Zap size={24} />,
                desc: "Eliminate manual work by connecting your tools into a single, cohesive ecosystem.",
                features: ["Tool Integration", "Custom Automations", "Process Audits"]
              },
              {
                title: "Brand Strategy",
                icon: <Shield size={24} />,
                desc: "Positioning your business as the authority in your market through premium design.",
                features: ["Visual Identity", "Market Positioning", "Messaging Framework"]
              },
              {
                title: "Operations & HR",
                icon: <Users size={24} />,
                desc: "The back-office systems required to manage a growing team without the chaos.",
                features: ["Hiring Workflows", "Internal Wikis", "Project Management"]
              },
              {
                title: "Growth Analytics",
                icon: <TrendingUp size={24} />,
                desc: "Real-time dashboards that show you exactly where your growth is coming from.",
                features: ["KPI Tracking", "Custom Dashboards", "ROI Reporting"]
              }
            ].map((s, i) => (
              <div key={i} className="group p-10 bg-white border border-black/5 rounded-3xl hover:border-[#064e3b]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#064e3b]/5">
                <div className="w-12 h-12 bg-[#064e3b]/5 text-[#064e3b] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#064e3b] group-hover:text-white transition-colors duration-500">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-black/50 mb-8 leading-relaxed">{s.desc}</p>
                <ul className="space-y-3">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm font-bold text-[#064e3b]/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#064e3b]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The "Anti-AI" Section: Focus on Human Results */}
      <section className="section-padding bg-[#064e3b] text-white rounded-[3rem] mx-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionLabel className="bg-white/10 text-white border-white/20">Our Philosophy</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Systems built for humans, <br /> not just algorithms.</h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                In a world of generic AI-generated noise, we focus on high-touch, high-impact systems that actually work for your team and your customers.
              </p>
              <div className="space-y-8">
                {[
                  { title: "Speed to Market", desc: "We launch full infrastructures in weeks, not months.", icon: <Clock /> },
                  { title: "Integrated Thinking", desc: "Your website, CRM, and marketing should be one single machine.", icon: <Settings /> },
                  { title: "Founder-Led", desc: "We've built companies ourselves. We know what matters.", icon: <Briefcase /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/5 rounded-full flex items-center justify-center p-12 border border-white/10">
                <div className="text-center">
                  <div className="text-[8rem] font-bold tracking-tighter leading-none mb-4">7</div>
                  <div className="text-2xl font-bold uppercase tracking-widest opacity-50">Days to Launch</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1a5d1a]/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator: Integrated into the clean design */}
      <ROICalculator />

      {/* Testimonials: Minimalist */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-20">
            <SectionLabel>Success Stories</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#064e3b]">Trusted by 1,000+ Founders.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                quote: "Calpir didn't just give us a website; they gave us a sales engine. Our conversion rate doubled in the first month.",
                author: "Alex Rivera",
                role: "Founder, Nexus"
              },
              {
                quote: "The automation setup saves my team 30 hours a week. It's the best investment we've made this year.",
                author: "Sarah Chen",
                role: "CEO, Bloom"
              },
              {
                quote: "Finally, a team that understands the technical side and the business side equally well. Highly recommended.",
                author: "James Wilson",
                role: "Founder, Forge"
              }
            ].map((t, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-medium mb-8 leading-relaxed text-black/80 italic">"{t.quote}"</p>
                <div className="font-bold text-lg">{t.author}</div>
                <div className="text-black/40 uppercase text-xs tracking-widest font-bold mt-1">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-32 px-6 bg-white">
        <div className="container-custom text-center">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#064e3b] mb-8">Ready to scale?</h2>
            <p className="text-xl text-black/50 mb-12 leading-relaxed">
              Stop fighting your systems and start growing your business. <br /> Book a free 30-minute strategy session today.
            </p>
            <Button asChild className="bg-[#064e3b] hover:bg-[#053f30] text-white px-12 h-20 rounded-full font-bold text-xl shadow-2xl shadow-[#064e3b]/20 transition-all hover:scale-105">
              <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer">Book Your Strategy Call</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;