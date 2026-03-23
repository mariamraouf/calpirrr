"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, BarChart3, Megaphone, Settings, Bot, Zap, Brain, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Services = () => {
  const services = [
    { title: "Website & Branding", icon: <Globe />, color: "bg-purple-50 text-purple-600", href: "/services/website-development", desc: "Custom, conversion-optimized websites and professional branding. From single landing pages to full multi-page sites." },
    { title: "CRM & Sales Systems", icon: <BarChart3 />, color: "bg-blue-50 text-blue-600", href: "/services/crm-sales", desc: "Battle-tested CRM implementation and sales automation. Never lose a lead, automate follow-ups, and scale your sales pipeline." },
    { title: "Marketing & Social", icon: <Megaphone />, color: "bg-amber-50 text-amber-600", href: "/services/marketing-branding", desc: "Build your digital presence with SEO, social media content, email marketing, and growth strategies that actually drive results." },
    { title: "Operations & HR", icon: <Settings />, color: "bg-emerald-50 text-emerald-600", href: "/services/operations-hr", desc: "Streamline your operations with integrated tools, SOP creation, payroll setup, and HR systems that grow with your team." },
    { title: "AI Agent Development", icon: <Bot />, color: "bg-violet-50 text-violet-600", href: "/services/ai-agents", desc: "Custom AI agents that handle customer support, qualify leads, book appointments, and answer questions — working 24/7." },
    { title: "Workflow Automation", icon: <Zap />, color: "bg-cyan-50 text-cyan-600", href: "/services/ai-automation", desc: "Eliminate manual, repetitive work with intelligent automations that connect all your tools and trigger the right actions." },
    { title: "AI Strategy Consulting", icon: <Brain />, color: "bg-pink-50 text-pink-600", href: "/services/ai-consulting", desc: "Not sure where AI fits? We audit your operations and build a roadmap to implement AI where it actually drives ROI." },
  ];

  const addOns = [
    { name: "SEO Optimization", price: "$199", desc: "One-time setup" },
    { name: "Design & Branding", price: "$499", desc: "Full package" },
    { name: "Social Media Content", price: "$99+", desc: "5-15 posts" },
    { name: "Email System Setup", price: "$299", desc: "Full configuration" },
    { name: "Analytics & Reporting", price: "$299", desc: "GA4 & Dashboards" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="hero-gradient pt-40 pb-24 px-6 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-[#555] max-w-[800px] mx-auto">
            Complete business launch packages or individual services tailored to your needs. We handle the full stack so you can focus on what matters.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {services.map((s, i) => (
              <Link key={i} to={s.href} className="bg-white p-10 rounded-[24px] border border-gray-100 hover-lift group">
                <div className={cn("w-16 h-16 rounded-[16px] flex items-center justify-center mb-8 transition-transform group-hover:scale-110", s.color)}>
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-[#555] leading-relaxed mb-8">{s.desc}</p>
                <div className="text-[#6c5ce7] font-bold flex items-center gap-2">
                  View Details <ArrowRight size={18} />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Individual Add-Ons</h2>
            <p className="text-[#555]">Need just one specific thing? We offer individual services too.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24">
            {addOns.map((a, i) => (
              <div key={i} className="bg-[#f8f9fa] p-8 rounded-[20px] text-center border border-gray-50">
                <div className="text-2xl font-bold text-[#1a1a2e] mb-1">{a.price}</div>
                <div className="font-bold text-[#6c5ce7] text-sm mb-4">{a.name}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">{a.desc}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="bg-[#6c5ce7] hover:bg-[#5b4cdb] text-white px-10 py-7 rounded-[12px] font-bold text-lg">
              <Link to="/assessment">Take the Free Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;