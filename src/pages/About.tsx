"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Zap, Shield, Users, Brain } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="hero-gradient pt-40 pb-24 px-6 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Built by Founders, for Founders</h1>
          <p className="text-xl text-[#555] max-w-[800px] mx-auto">
            We've been in your shoes. That's why we built the system we wished existed when we were starting out.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container-custom">
          <div className="brand-gradient rounded-[24px] p-12 text-white grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-24">
            <div>
              <div className="text-3xl md:text-4xl font-black mb-2">1,000+</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-80">Businesses Launched</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black mb-2">7 Days</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-80">Fastest Launch</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black mb-2">40-60%</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-80">Average Savings</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black mb-2">24/7</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-80">AI Systems Running</div>
            </div>
          </div>

          <div className="max-w-[800px] mx-auto space-y-16 mb-32">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">The Problem We Solve</h2>
              <p className="text-lg text-[#555] leading-relaxed">
                Starting a business should be exciting. Instead, most founders spend their first months drowning in decisions: which website builder, which CRM, which payment processor, which HR tool. By the time everything is "set up," they've burned through months and thousands of dollars — and half their tools don't even talk to each other.
              </p>
              <p className="text-lg text-[#555] leading-relaxed">
                We built Calpir to fix that. One team, one package, one integrated system — launched in days, not months. We handle the website, CRM, operations, branding, marketing, and now AI automations and intelligent agents. Everything connected, everything working together from day one.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Why AI Changes Everything</h2>
              <p className="text-lg text-[#555] leading-relaxed">
                In 2026, launching a business without AI is like launching one without a website in 2010 — technically possible, but a massive disadvantage. AI agents can handle your customer support at 2 AM. Workflow automation can eliminate 20+ hours of manual work per week. AI-powered lead qualification can double your sales team's efficiency.
              </p>
              <p className="text-lg text-[#555] leading-relaxed">
                Most founders know they should be using AI, but they don't know where to start. That's where we come in. We don't just set up your business — we set it up with AI baked into every layer.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">How We Work</h2>
              <p className="text-lg text-[#555] leading-relaxed">
                We speak plainly, set honest expectations, and deliver exactly what we promise. No inflated timelines, no surprise fees, no excuses. Every engagement starts with a free 30-minute consultation where we listen, ask the right questions, and map out what your business actually needs.
              </p>
              <p className="text-lg text-[#555] leading-relaxed">
                Once we start, you get a dedicated team: developers building your website, designers crafting your brand, automation specialists wiring up your AI agents and workflows. You stay in the loop with regular updates, but you don't have to manage a thing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { title: "Speed Over Perfection", icon: <Zap />, desc: "We launch fast so you can start learning and earning immediately." },
              { title: "Integration Over Isolation", icon: <Users />, desc: "Every tool we set up is connected to your broader business engine." },
              { title: "AI-First Thinking", icon: <Brain />, desc: "We look for AI opportunities in every process to give you an edge." },
              { title: "Radical Transparency", icon: <Shield />, desc: "Clear pricing, clear timelines, and clear communication always." }
            ].map((v, i) => (
              <div key={i} className="bg-[#f8f9fa] p-10 rounded-[24px] text-center border border-gray-50">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#6c5ce7] mx-auto mb-6 shadow-sm">
                  {React.cloneElement(v.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{v.desc}</p>
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

export default About;