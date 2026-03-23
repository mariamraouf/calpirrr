"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { CheckCircle2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Packages = () => {
  const packages = [
    {
      name: "Starter",
      price: "$1,499",
      badge: "Launch in 7 days",
      desc: "Perfect for founders who need the essentials to get online and start selling.",
      features: [
        "Professional website (up to 3 pages)",
        "Basic CRM setup",
        "Accounting system setup",
        "HR basics & compliance",
        "Brand identity starter kit",
        "Google Analytics setup",
        "1 AI chatbot (FAQ support)",
        "2 weeks support"
      ]
    },
    {
      name: "Growth",
      price: "$3,499",
      badge: "Most Popular — 14 days",
      featured: true,
      desc: "The all-in-one package for ambitious startups scaling fast.",
      features: [
        "Everything in Starter, plus:",
        "Website up to 6 pages",
        "Advanced CRM & sales pipeline",
        "Project management tools",
        "5 automated workflows",
        "Full brand identity package",
        "AI lead qualification agent",
        "30 days support"
      ]
    },
    {
      name: "Ultimate",
      price: "$6,999",
      badge: "Launch in 28 days",
      desc: "Complete business infrastructure with unlimited AI. Built to scale.",
      features: [
        "Everything in Growth, plus:",
        "Website up to 10 pages",
        "Unlimited custom automations",
        "Payroll system setup",
        "Full AI agent ecosystem",
        "AI strategy roadmap",
        "Team training sessions",
        "90 days support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="hero-gradient pt-40 pb-24 px-6 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Packages</h1>
          <p className="text-xl text-[#555] max-w-[800px] mx-auto">
            Complete business launch packages that save you 40-60% compared to hiring separate vendors. Start with what you need, upgrade when you're ready.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {packages.map((p, i) => (
              <div key={i} className={cn(
                "bg-white p-10 rounded-[24px] border border-[#e8e8e8] flex flex-col relative",
                p.featured && "border-[#6c5ce7] shadow-2xl shadow-[#6c5ce715] scale-105 z-10"
              )}>
                {p.featured && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6c5ce7] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</span>}
                <div className="text-[#6c5ce7] font-bold text-sm uppercase tracking-widest mb-4">{p.badge}</div>
                <h3 className="text-3xl font-bold mb-2">{p.name}</h3>
                <div className="text-5xl font-black mb-6">{p.price}</div>
                <p className="text-[#555] mb-8 text-sm leading-relaxed">{p.desc}</p>
                <div className="space-y-4 mb-10 flex-grow">
                  {p.features.map((f, j) => (
                    <div key={j} className="flex gap-3">
                      <CheckCircle2 className="text-[#6c5ce7] shrink-0" size={18} />
                      <span className="text-sm font-medium text-[#555]">{f}</span>
                    </div>
                  ))}
                </div>
                <Button className={cn(
                  "w-full py-7 rounded-[10px] font-bold text-lg btn-hover",
                  p.featured ? "bg-[#6c5ce7] hover:bg-[#5b4cdb]" : "bg-gray-100 text-[#1a1a2e] hover:bg-gray-200"
                )}>
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Full Feature Comparison</h2>
          </div>
          <div className="bg-white rounded-[24px] border border-[#e8e8e8] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8f9fa] border-b border-[#e8e8e8]">
                  <th className="p-6 font-bold text-sm uppercase tracking-widest text-gray-400">Feature</th>
                  <th className="p-6 font-bold text-sm uppercase tracking-widest text-gray-400">Starter</th>
                  <th className="p-6 font-bold text-sm uppercase tracking-widest text-gray-400">Growth</th>
                  <th className="p-6 font-bold text-sm uppercase tracking-widest text-gray-400">Ultimate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { f: "Website Pages", s: "3", g: "6", u: "10" },
                  { f: "CRM Setup", s: "Basic", g: "Advanced", u: "Custom" },
                  { f: "AI Agents", s: "1 FAQ Bot", g: "Support + Lead Qual", u: "Full Ecosystem" },
                  { f: "Automations", s: "—", g: "5 Workflows", u: "Unlimited" },
                  { f: "Payroll Setup", s: "—", g: "—", u: "✓" },
                  { f: "Support Period", s: "2 Weeks", g: "30 Days", u: "90 Days" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0">
                    <td className="p-6 font-bold text-[#1a1a2e]">{row.f}</td>
                    <td className="p-6 text-sm text-[#555]">{row.s}</td>
                    <td className="p-6 text-sm text-[#555]">{row.g}</td>
                    <td className="p-6 text-sm text-[#555]">{row.u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Packages;