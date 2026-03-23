"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { CheckCircle2 } from 'lucide-react';
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
            Complete business launch packages that save you 40-60% compared to hiring separate vendors.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((p, i) => (
              <div key={i} className={cn(
                "bg-white p-10 rounded-[32px] border border-gray-100 flex flex-col",
                p.featured && "border-[#6c5ce7] shadow-2xl shadow-[#6c5ce715] scale-105 z-10"
              )}>
                <div className="text-[#6c5ce7] font-bold text-sm uppercase tracking-widest mb-4">{p.badge}</div>
                <h3 className="text-3xl font-bold mb-2">{p.name}</h3>
                <div className="text-5xl font-black mb-6">{p.price}</div>
                <p className="text-[#555] mb-8">{p.desc}</p>
                <div className="space-y-4 mb-10 flex-grow">
                  {p.features.map((f, j) => (
                    <div key={j} className="flex gap-3">
                      <CheckCircle2 className="text-[#6c5ce7] shrink-0" size={20} />
                      <span className="text-sm font-medium text-[#555]">{f}</span>
                    </div>
                  ))}
                </div>
                <Button className={cn(
                  "w-full py-7 rounded-[16px] font-bold text-lg",
                  p.featured ? "bg-[#6c5ce7] hover:bg-[#5b4cdb]" : "bg-gray-100 text-[#1a1a2e] hover:bg-gray-200"
                )}>
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Packages;