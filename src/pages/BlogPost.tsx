"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Calendar, User, Clock, 
  Bot, Brain, Zap, CheckCircle2, 
  AlertTriangle, TrendingUp, Code, 
  Layers, Shield, DollarSign, Target
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams();

  const posts: any = {
    'openclaw-vs-claude-cowork': {
      tag: "AI_TOOLS",
      title: "OpenClaw vs. Claude Cowork: The 2026 AI Agent Showdown",
      author: "Abdullah Mustafa",
      date: "March 23, 2026",
      readTime: "15 min read",
      content: (
        <div className="space-y-16 mono text-lg leading-relaxed text-white/70">
          <section className="space-y-8">
            <p className="text-2xl text-white font-black uppercase tracking-tighter">
              The era of "chatting" with AI is over. In 2026, we deploy agents.
            </p>
            <p>
              As a founder, your time is your most expensive asset. If you're still manually summarizing meetings, drafting basic emails, or cleaning CSV files, you're operating at a massive disadvantage. The market has consolidated into two primary powerhouses: **OpenClaw** and **Claude Cowork**. 
            </p>
            <p>
              But here's the secret most "AI influencers" won't tell you: choosing one over the other is a rookie mistake. The elite 1% of founders are building orchestration layers where these two titans work in tandem.
            </p>
          </section>

          <section className="space-y-12">
            <div className="border border-[#064e3b] p-12 bg-[#064e3b]/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Bot size={120} />
              </div>
              <h2 className="text-4xl font-black text-[#064e3b] mb-8 uppercase">01 // OpenClaw: The Technical Brute</h2>
              <p className="mb-8">
                OpenClaw isn't designed to be your friend. It's designed to be your most efficient engineer. Built on the "Claw-V4" architecture, it excels at raw computational logic and native code execution.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h4 className="text-white font-bold uppercase text-sm tracking-widest">Core Strengths</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#064e3b]" /> Native Python/Rust Sandbox</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#064e3b]" /> 2M Token Context Window</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#064e3b]" /> Real-time API Interfacing</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-bold uppercase text-sm tracking-widest">Best Use Cases</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><Zap size={16} className="text-[#064e3b]" /> Complex Data Migration</li>
                    <li className="flex items-center gap-2"><Zap size={16} className="text-[#064e3b]" /> Automated QA Testing</li>
                    <li className="flex items-center gap-2"><Zap size={16} className="text-[#064e3b]" /> Infrastructure Monitoring</li>
                  </ul>
                </div>
              </div>
              <div className="bg-black p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-4 text-[#064e3b]">
                  <Code size={16} /> <span className="text-[0.6rem] uppercase font-bold tracking-widest">Agent_Log // OpenClaw</span>
                </div>
                <pre className="text-[0.7rem] text-white/40 overflow-x-auto">
                  {`> Initializing Data_Scrub_Module...
> Sandbox Environment: SECURE
> Processing 50,000 rows...
> Logic Error detected in Row 432. Auto-correcting...
> Task Complete. Efficiency: 99.8%`}
                </pre>
              </div>
            </div>

            <div className="border border-white/10 p-12 bg-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Brain size={120} />
              </div>
              <h2 className="text-4xl font-black text-white mb-8 uppercase">02 // Claude Cowork: The Creative Strategist</h2>
              <p className="mb-8">
                If OpenClaw is your lead dev, Claude Cowork is your Chief of Staff. It possesses a level of nuance and "human-like" reasoning that remains unmatched in the industry. It understands brand voice, emotional intelligence, and complex strategic trade-offs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h4 className="text-white font-bold uppercase text-sm tracking-widest">Core Strengths</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-white" /> Nuanced Brand Alignment</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-white" /> Strategic Decision Support</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-white" /> Multi-modal Vision Analysis</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-bold uppercase text-sm tracking-widest">Best Use Cases</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><Zap size={16} className="text-white" /> Content Strategy & Copy</li>
                    <li className="flex items-center gap-2"><Zap size={16} className="text-white" /> Investor Pitch Refinement</li>
                    <li className="flex items-center gap-2"><Zap size={16} className="text-white" /> Customer Sentiment Analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">The Orchestration Strategy</h2>
            <p>
              The "Calpir Way" involves building a bridge between these two. We deploy a central "Router Agent" that analyzes incoming tasks and delegates them based on the specific requirements.
            </p>
            <div className="border-l-4 border-[#064e3b] pl-8 py-8 bg-white/5">
              <h4 className="text-white font-black uppercase mb-4">Pro Tip: The "Double-Check" Loop</h4>
              <p className="text-sm italic">
                "Have OpenClaw write the code for your new feature, then pass that code to Claude Cowork to review it for readability and documentation. This ensures your technical debt stays low while your speed stays high."
              </p>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Conclusion: Speed is the Only Metric</h2>
            <p>
              In the startup world, the only thing that matters is the time between an idea and its execution. By leveraging both OpenClaw and Claude Cowork, you aren't just "using AI"—you're building an autonomous workforce that scales with your ambition.
            </p>
            <div className="bg-[#064e3b] p-12 text-center">
              <h3 className="text-3xl font-black mb-6">Ready to Deploy Your AI Team?</h3>
              <p className="mb-8 opacity-80">We specialize in building custom orchestration layers for high-growth startups.</p>
              <Button asChild className="bg-white text-black hover:bg-black hover:text-white px-12 py-8 rounded-none font-black uppercase tracking-tighter text-xl">
                <Link to="/contact">Book an AI Audit</Link>
              </Button>
            </div>
          </section>
        </div>
      )
    },
    'setup-my-llc': {
      tag: "LEGAL",
      title: "The Founder's Guide to Setting Up Your LLC (2026 Edition)",
      author: "Abdullah Mustafa",
      date: "March 20, 2026",
      readTime: "12 min read",
      content: (
        <div className="space-y-16 mono text-lg leading-relaxed text-white/70">
          <section className="space-y-8">
            <p className="text-2xl text-white font-black uppercase tracking-tighter">
              Legal is a feature, not a bug.
            </p>
            <p>
              Most founders treat legal setup like a trip to the dentist: something painful that you put off as long as possible. This is a fatal mistake. Your legal structure is the "operating system" of your business. If you build on a buggy OS, your entire company will eventually crash.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-white/10 p-10 bg-white/5">
              <h3 className="text-2xl font-black text-[#064e3b] mb-6 uppercase">Delaware: The VC Standard</h3>
              <p className="text-sm mb-6">If you plan on raising venture capital, don't overthink it. Delaware is the only choice. Their "Chancery Court" is the most sophisticated business court in the world.</p>
              <ul className="space-y-2 text-xs uppercase tracking-widest opacity-60">
                <li>+ Investor Friendly</li>
                <li>+ Established Case Law</li>
                <li>- Higher Annual Fees</li>
              </ul>
            </div>
            <div className="border border-white/10 p-10 bg-white/5">
              <h3 className="text-2xl font-black text-white mb-6 uppercase">Wyoming: The Bootstrapper's King</h3>
              <p className="text-sm mb-6">If you're building a profitable, bootstrapped business and value privacy and low overhead, Wyoming is your best friend. No state income tax and minimal reporting.</p>
              <ul className="space-y-2 text-xs uppercase tracking-widest opacity-60">
                <li>+ Maximum Privacy</li>
                <li>+ Lowest Fees</li>
                <li>- Less "Prestige" for VCs</li>
              </ul>
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">The 4-Step Deployment</h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Articles of Organization", desc: "The birth certificate of your company. Keep your 'Business Purpose' broad so you don't have to re-file if you pivot." },
                { step: "02", title: "The EIN Myth", desc: "Services will try to charge you $200 for an EIN. It takes 5 minutes on the IRS website and it's free. Don't get scammed." },
                { step: "03", title: "Operating Agreement", desc: "This is where you define who owns what and what happens if someone leaves. This is the most important document you'll sign." },
                { step: "04", title: "Foreign Qualification", desc: "If you live in Texas but file in Delaware, you need to 'Foreign Qualify' in Texas. Don't skip this or you can't open a bank account." }
              ].map((item) => (
                <div key={item.step} className="flex gap-8 items-start border-b border-white/10 pb-8">
                  <div className="text-5xl font-black text-[#064e3b]">{item.step}</div>
                  <div>
                    <h4 className="text-xl font-black text-white uppercase mb-2">{item.title}</h4>
                    <p className="text-sm opacity-60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-red-900/10 border border-red-900/30 p-12 flex gap-8 items-start">
            <AlertTriangle className="text-red-900 shrink-0" size={48} />
            <div>
              <h3 className="text-2xl font-black text-red-900 uppercase mb-4">The "Piercing the Veil" Trap</h3>
              <p className="text-sm">If you pay for your personal Netflix with your business card, your LLC is useless. This is called "commingling funds," and it allows lawyers to sue YOU personally instead of just the company. Keep your accounts 100% separate.</p>
            </div>
          </section>
        </div>
      )
    },
    'clickup-setup': {
      tag: "OPERATIONS",
      title: "ClickUp Setup: The 7-Figure Hierarchy",
      author: "Abdullah Mustafa",
      date: "March 15, 2026",
      readTime: "18 min read",
      content: (
        <div className="space-y-16 mono text-lg leading-relaxed text-white/70">
          <section className="space-y-8">
            <p className="text-2xl text-white font-black uppercase tracking-tighter">
              Your project management tool is either a cockpit or a graveyard.
            </p>
            <p>
              Most ClickUp workspaces are a mess of "To-Do" lists that haven't been updated in three months. This isn't a tool problem; it's a hierarchy problem. At Calpir, we've built systems for 7-figure companies, and they all follow the same "Departmental Isolation" model.
            </p>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">The Hierarchy of Needs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-white/10 p-8 bg-white/5">
                <Layers className="text-[#064e3b] mb-6" size={32} />
                <h4 className="font-black uppercase mb-4">Spaces</h4>
                <p className="text-xs opacity-60">High-level departments (e.g., Marketing, Engineering, Ops). Never mix these. Isolation prevents overwhelm.</p>
              </div>
              <div className="border border-white/10 p-8 bg-white/5">
                <Target className="text-[#064e3b] mb-6" size={32} />
                <h4 className="font-black uppercase mb-4">Folders</h4>
                <p className="text-xs opacity-60">Specific projects or recurring cycles (e.g., Q1 Campaigns, Sprint 24, Client Onboarding).</p>
              </div>
              <div className="border border-white/10 p-8 bg-white/5">
                <CheckCircle2 className="text-[#064e3b] mb-6" size={32} />
                <h4 className="font-black uppercase mb-4">Lists</h4>
                <p className="text-xs opacity-60">The actual action items. Use custom statuses to track the exact stage of every task.</p>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">3 Automation Recipes You Need</h2>
            <div className="space-y-4">
              <div className="p-6 bg-black border border-white/10">
                <div className="text-[#064e3b] font-bold text-xs mb-2 uppercase tracking-widest">Recipe 01 // The Hand-off</div>
                <p className="text-sm">"When Status changes to 'Ready for Review' > Assign to [Manager] > Post Comment in Slack."</p>
              </div>
              <div className="p-6 bg-black border border-white/10">
                <div className="text-[#064e3b] font-bold text-xs mb-2 uppercase tracking-widest">Recipe 02 // The Stale Task</div>
                <p className="text-sm">"When Task is overdue by 48 hours > Change Priority to 'Urgent' > Notify Owner."</p>
              </div>
              <div className="p-6 bg-black border border-white/10">
                <div className="text-[#064e3b] font-bold text-xs mb-2 uppercase tracking-widest">Recipe 03 // The Client Sync</div>
                <p className="text-sm">"When Status changes to 'Complete' > Send Email to Client via ClickUp Email Module."</p>
              </div>
            </div>
          </section>

          <section className="border-l-4 border-[#064e3b] pl-8 py-8 bg-white/5">
            <h4 className="text-white font-black uppercase mb-4">The "Golden Rule" of Ops</h4>
            <p className="text-sm italic">
              "If it's not in ClickUp, it doesn't exist. No Slack tasks. No 'quick favors' via DM. If you want it done, it needs a ticket, a deadline, and an owner."
            </p>
          </section>
        </div>
      )
    },
    'how-to-not-waste-money': {
      tag: "STRATEGY",
      title: "Startup Burn: How to Not Waste Your First $50k",
      author: "Abdullah Mustafa",
      date: "March 10, 2026",
      readTime: "20 min read",
      content: (
        <div className="space-y-16 mono text-lg leading-relaxed text-white/70">
          <section className="space-y-8">
            <p className="text-2xl text-white font-black uppercase tracking-tighter">
              Most startups don't die from lack of ideas; they die from lack of cash.
            </p>
            <p>
              I've seen founders raise $100k and spend $40k of it on a "brand strategy" before they even had a landing page. This is ego-driven spending, and it's the fastest way to the startup graveyard. Your first $50k should be spent on only two things: **Learning** and **Leverage**.
            </p>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">The "Burn" Hierarchy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-red-900/30 p-10 bg-red-900/5">
                <h3 className="text-2xl font-black text-red-900 uppercase mb-6">Bad Burn (Avoid)</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-3"><X className="text-red-900" size={16} /> Custom Office Furniture</li>
                  <li className="flex items-center gap-3"><X className="text-red-900" size={16} /> High-End PR Agencies</li>
                  <li className="flex items-center gap-3"><X className="text-red-900" size={16} /> "Stealth Mode" Legal Fees</li>
                  <li className="flex items-center gap-3"><X className="text-red-900" size={16} /> Over-engineered Tech Stacks</li>
                </ul>
              </div>
              <div className="border border-[#064e3b]/30 p-10 bg-[#064e3b]/5">
                <h3 className="text-2xl font-black text-[#064e3b] uppercase mb-6">Good Burn (Invest)</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-[#064e3b]" size={16} /> Conversion-Optimized Web</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-[#064e3b]" size={16} /> Automated Lead Gen Systems</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-[#064e3b]" size={16} /> Customer Acquisition Testing</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-[#064e3b]" size={16} /> AI-Powered Operations</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">The "Logo Trap"</h2>
            <p>
              Founders love logos. They love business cards. They love feeling like a "CEO." But a logo doesn't get you customers. A high-converting landing page that solves a real problem does. 
            </p>
            <div className="bg-white/5 p-12 border border-white/10 text-center">
              <DollarSign className="mx-auto mb-6 text-[#064e3b]" size={48} />
              <h4 className="text-2xl font-black uppercase mb-4">The 10x Rule</h4>
              <p className="text-sm opacity-60 max-w-[600px] mx-auto">
                "Before spending $1,000 on anything, ask yourself: Will this help me get 10x that amount back in revenue or time saved? If the answer isn't a clear 'Yes,' don't buy it."
              </p>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Infrastructure as Leverage</h2>
            <p>
              The best way to spend your first $50k is on **Infrastructure**. This means setting up your CRM, your automations, and your AI agents so that you can operate like a team of 10 while you're still a team of 1. This is how you survive the "Valley of Death" and reach profitability before your bank account hits zero.
            </p>
          </section>
        </div>
      )
    }
  };

  const post = posts[slug || ''];

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-black bg-grid">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-64 pb-24 px-6 border-b border-white/10">
        <div className="container-custom max-w-[1000px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Link to="/blog" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <ArrowLeft size={20} />
              </Link>
              <SectionLabel>{post.tag}</SectionLabel>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-8 py-8 border-y border-white/10 mono text-[0.7rem] uppercase tracking-widest text-white/40">
              <div className="flex items-center gap-2">
                <User size={14} className="text-[#064e3b]" /> WRITTEN BY: <span className="text-white font-bold">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#064e3b]" /> {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#064e3b]" /> {post.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="container-custom max-w-[900px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {post.content}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-white/10">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-6xl mb-12 font-black uppercase tracking-tighter">Want More Insights?</h2>
          <Button asChild className="bg-[#064e3b] hover:bg-[#053e2f] text-white px-12 py-8 rounded-none font-black text-xl uppercase tracking-tighter btn-hover">
            <Link to="/contact">Book a Strategy Call</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

const X = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    className={className} 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
);

const NotFound = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-9xl font-black text-[#064e3b] mb-4">404</h1>
      <p className="mono uppercase tracking-widest mb-8">Article not found</p>
      <Button asChild className="bg-white text-black px-8 py-4 rounded-none font-black uppercase">
        <Link to="/blog">Back to Blog</Link>
      </Button>
    </div>
  </div>
);

export default BlogPost;