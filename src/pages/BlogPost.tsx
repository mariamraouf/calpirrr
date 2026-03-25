' characters in JSX.">
"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import SectionLabel from '@/components/ui/SectionLabel';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  const articles: Record<string, any> = {
    'openclaw-vs-claude-cowork': {
      tag: "AI_TOOLS",
      title: "OpenClaw vs. Claude Cowork: Which AI Partner Wins?",
      date: "March 24, 2026",
      readTime: "8 min read",
      author: "Calpir Engineering",
      content: (
        <div className="space-y-8 mono text-white/60 leading-relaxed">
          <p>The landscape of autonomous AI agents has shifted dramatically in the last quarter. With the release of OpenClaw 4.0 and the major updates to Claude Cowork, founders are facing a difficult choice: which agent should actually run their operations?</p>
          <h2 className="text-3xl text-white font-black uppercase mt-12">The Performance Gap</h2>
          <p>OpenClaw excels in raw execution. If you need an agent to navigate complex web interfaces, handle multi-step browser tasks, and interact with legacy software that lacks APIs, OpenClaw is the undisputed champion. Its "Visual Reasoning Engine" allows it to see screens much like a human does.</p>
          <p>Claude Cowork, on the other hand, wins on nuance. For customer-facing roles, content creation, and strategic planning, Claude's superior linguistic reasoning and emotional intelligence make it feel less like a bot and more like a senior team member.</p>
          <div className="border border-[#064e3b] p-8 bg-[#064e3b]/5">
            <h3 className="text-xl text-white mb-4 font-bold">The Verdict</h3>
            <p>Use OpenClaw for back-office automation and data scraping. Use Claude Cowork for customer support, sales, and anything requiring a "human touch."</p>
          </div>
        </div>
      )
    },
    'setup-my-llc': {
      tag: "LEGAL",
      title: "The Founder's Guide to Setting Up Your LLC",
      date: "March 20, 2026",
      readTime: "6 min read",
      author: "Legal Ops Team",
      content: (
        <div className="space-y-8 mono text-white/60 leading-relaxed">
          <p>Don't let the paperwork paralyze your launch. Setting up an LLC is a solved problem, yet many founders spend thousands on lawyers for what is essentially a 30-minute filing process.</p>
          <h2 className="text-3xl text-white font-black uppercase mt-12">The 3-Step Protocol</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li><strong className="text-white">Choose Your State:</strong> For most, your home state is best. For high-growth startups, Delaware remains the gold standard for VC compatibility.</li>
            <li><strong className="text-white">File Articles of Organization:</strong> This is the birth certificate of your company. Most states allow online filing with immediate approval.</li>
            <li><strong className="text-white">Get Your EIN:</strong> The IRS provides this for free. Never pay a third party to get your Employer Identification Number.</li>
          </ol>
        </div>
      )
    },
    'clickup-setup': {
      tag: "OPERATIONS",
      title: "ClickUp Setup: Stop Drowning in Tasks",
      date: "March 15, 2026",
      readTime: "10 min read",
      author: "Ops Strategy",
      content: (
        <div className="space-y-8 mono text-white/60 leading-relaxed">
          <p>Most ClickUp workspaces are a graveyard of half-finished tasks and confusing notifications. The problem isn't the tool; it's the lack of a rigid architecture.</p>
          <div className="bg-white/5 border border-white/10 p-8">
            <p className="text-white font-bold mb-4">The 7-Figure Hierarchy</p>
            <p>
              The secret to a 7-figure workspace isn't the features—it's the hierarchy. 
              We build our clients' workspaces with a strict <span className="text-[#064e3b] font-bold">Space > Folder > List</span> structure that mirrors their actual business departments. 
              Marketing doesn't see Engineering's mess. Operations sees everything.
            </p>
          </div>
          <h2 className="text-3xl text-white font-black uppercase mt-12">Automation Rules</h2>
          <p>Every list should have at least three automations: one for status changes, one for due date warnings, and one for hand-offs between team members. If a human has to manually tell another human "I'm done, your turn," your system is broken.</p>
        </div>
      )
    },
    'how-to-not-waste-money': {
      tag: "STRATEGY",
      title: "Startup Burn: How to Not Waste Your First $50k",
      date: "March 10, 2026",
      readTime: "12 min read",
      author: "Finance Lead",
      content: (
        <div className="space-y-8 mono text-white/60 leading-relaxed">
          <p>The first $50,000 is the most dangerous money a founder will ever spend. It's enough to feel rich, but not enough to survive a single major mistake.</p>
          <h2 className="text-3xl text-white font-black uppercase mt-12">The "No-Buy" List</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>Custom-coded apps before validation</li>
            <li>Expensive office space (Remote is free)</li>
            <li>Full-time hires for part-time problems</li>
            <li>Premium PR agencies</li>
          </ul>
          <p>Invest instead in distribution and infrastructure. A system that captures and converts leads is an asset; a fancy logo is a decoration.</p>
        </div>
      )
    }
  };

  const article = articles[slug || ''] || articles['openclaw-vs-claude-cowork'];

  return (
    <div className="min-h-screen bg-black bg-grid">
      <Navbar />
      
      <main className="pt-48 pb-32 px-6">
        <div className="container-custom max-w-[900px]">
          <Link to="/blog" className="inline-flex items-center gap-2 mono text-[0.7rem] uppercase tracking-widest text-[#064e3b] mb-12 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft size={14} /> Back to Insights
          </Link>

          <article>
            <header className="mb-16">
              <SectionLabel>{article.tag}</SectionLabel>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap gap-8 border-y border-white/10 py-6">
                <div className="flex items-center gap-2 mono text-[0.6rem] uppercase tracking-widest text-white/40">
                  <Calendar size={14} className="text-[#064e3b]" /> {article.date}
                </div>
                <div className="flex items-center gap-2 mono text-[0.6rem] uppercase tracking-widest text-white/40">
                  <Clock size={14} className="text-[#064e3b]" /> {article.readTime}
                </div>
                <div className="flex items-center gap-2 mono text-[0.6rem] uppercase tracking-widest text-white/40">
                  <User size={14} className="text-[#064e3b]" /> {article.author}
                </div>
              </div>
            </header>

            <div className="prose prose-invert max-w-none">
              {article.content}
            </div>

            <footer className="mt-24 pt-12 border-t border-white/10">
              <div className="bg-[#064e3b] p-12 text-center">
                <h3 className="text-3xl mb-6">Want systems like this built for you?</h3>
                <p className="mono text-sm text-white/70 mb-8 max-w-[500px] mx-auto">
                  We deploy high-performance infrastructure for founders who don't have time to waste.
                </p>
                <Button asChild className="bg-white text-black hover:bg-black hover:text-white px-12 py-6 rounded-none font-black text-xl uppercase tracking-tighter transition-all">
                  <Link to="/contact">Book a Consultation</Link>
                </Button>
              </div>
            </footer>
          </article>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPost;