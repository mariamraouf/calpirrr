"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Section 1: Hero */}
      <section className="hero-gradient pt-40 pb-20 px-6 text-center">
        <div className="container-custom">
          <h1 className="text-[2.5rem] md:text-[3rem] font-[800] mb-6">Built by Founders, for Founders</h1>
          <p className="text-lg md:text-[1.2rem] text-[#555] max-w-[600px] mx-auto leading-relaxed">
            We've been in your shoes. That's why we built the system we wished existed when we were starting out.
          </p>
        </div>
      </section>

      {/* Section 2: Stats Bar */}
      <section className="brand-gradient py-12 px-6 text-white">
        <div className="max-w-[1100px] mx-auto flex flex-wrap justify-center gap-12 md:gap-20">
          <div className="text-center">
            <div className="text-3xl md:text-[2.5rem] font-[800] mb-1">1,000+</div>
            <div className="text-[0.9rem] text-white/90">Businesses Launched</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-[2.5rem] font-[800] mb-1">7 Days</div>
            <div className="text-[0.9rem] text-white/90">Fastest Full Launch</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-[2.5rem] font-[800] mb-1">40-60%</div>
            <div className="text-[0.9rem] text-white/90">Savings vs. Separate Vendors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-[2.5rem] font-[800] mb-1">24/7</div>
            <div className="text-[0.9rem] text-white/90">AI Systems Running</div>
          </div>
        </div>
      </section>

      {/* Section 3: Story */}
      <section className="section-padding bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-[2rem] font-[800] mb-6">The Problem We Solve</h2>
            <p className="text-[1.05rem] text-[#555] leading-relaxed mb-6">
              Starting a business should be exciting. Instead, most founders spend their first months drowning in decisions: which website builder, which CRM, which payment processor, which HR tool. By the time everything is "set up," they've burned through months and thousands of dollars — and half their tools don't even talk to each other.
            </p>
            <p className="text-[1.05rem] text-[#555] leading-relaxed">
              <strong className="text-[#1a1a2e]">We built Calpir to fix that.</strong> One team, one package, one integrated system — launched in days, not months. We handle the website, CRM, operations, branding, marketing, and now AI automations and intelligent agents. Everything connected, everything working together from day one.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-[2rem] font-[800] mb-6">Why AI Changes Everything</h2>
            <p className="text-[1.05rem] text-[#555] leading-relaxed mb-6">
              In 2026, launching a business without AI is like launching one without a website in 2010 — technically possible, but a massive disadvantage. AI agents can handle your customer support at 2 AM. Workflow automation can eliminate 20+ hours of manual work per week. AI-powered lead qualification can double your sales team's efficiency.
            </p>
            <p className="text-[1.05rem] text-[#555] leading-relaxed">
              Most founders know they should be using AI, but they don't know where to start. That's where we come in. <strong className="text-[#1a1a2e]">We don't just set up your business — we set it up with AI baked into every layer.</strong> Your chatbot talks to your CRM, your CRM triggers automated follow-ups, your analytics dashboard shows you what's working in real time.
            </p>
          </div>

          <div>
            <h2 className="text-[2rem] font-[800] mb-6">How We Work</h2>
            <p className="text-[1.05rem] text-[#555] leading-relaxed mb-6">
              We speak plainly, set honest expectations, and deliver exactly what we promise. No inflated timelines, no surprise fees, no excuses. Every engagement starts with a free 30-minute consultation where we listen, ask the right questions, and map out what your business actually needs — not what generates the biggest invoice.
            </p>
            <p className="text-[1.05rem] text-[#555] leading-relaxed">
              Once we start, you get a dedicated team: developers building your website, designers crafting your brand, automation specialists wiring up your AI agents and workflows. You stay in the loop with regular updates, but you don't have to manage a thing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Values */}
      <section className="section-padding bg-[#f8f9fa]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-[800] mb-4">What We Believe</h2>
            <p className="text-[#555] text-lg">These aren't corporate values on a wall. This is how we actually operate.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Speed Over Perfection", text: "A good business launched today beats a perfect one launched in six months. We ship fast, then iterate." },
              { title: "Integration Over Isolation", text: "Tools that don't talk to each other create more work, not less. Everything we build is connected." },
              { title: "AI-First Thinking", text: "Every process we set up gets the AI question: can this be automated, assisted, or accelerated?" },
              { title: "Radical Transparency", text: "Fixed pricing, clear timelines, no hidden fees. You always know what you're paying and what you're getting." }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[14px] border border-[#e8e8e8] shadow-sm">
                <h3 className="text-[1.15rem] font-bold mb-4">{v.title}</h3>
                <p className="text-[0.95rem] text-[#555] leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="py-20 px-6 bg-[#0a0a0a] text-white text-center">
        <div className="container-custom">
          <h2 className="text-[2.2rem] font-[800] mb-6">Let's Build Something Together</h2>
          <p className="text-lg text-white/80 max-w-[500px] mx-auto mb-10 leading-relaxed">
            Book a free 30-minute call. No pitch, no pressure — just a real conversation about your business and how we can help.
          </p>
          <Button asChild className="bg-[#6c5ce7] hover:bg-[#5b4cdb] text-white px-10 py-7 rounded-[10px] font-bold text-lg transition-transform hover:-translate-y-1">
            <Link to="/#contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;