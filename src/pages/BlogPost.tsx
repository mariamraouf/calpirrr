"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Calendar, User, Clock, 
  Bot, Brain, Zap, CheckCircle2, 
  AlertTriangle, TrendingUp, Code, 
  Layers, Shield, DollarSign, Target,
  Cpu, Network, Terminal, Workflow,
  Scale, FileText, Landmark, Briefcase,
  BarChart, PieChart, Activity, Mail,
  TrendingDown
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
              But here's the secret most "AI influencers" won't tell you: choosing one over the other is a rookie mistake. The elite 1% of founders are building orchestration layers where these two titans work in tandem. This guide breaks down the technical architecture, the cost-benefit analysis, and the exact deployment strategy for your startup.
            </p>
          </section>

          <section className="space-y-12">
            <div className="border border-[#064e3b] p-12 bg-[#064e3b]/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Bot size={120} />
              </div>
              <h2 className="text-4xl font-black text-[#064e3b] mb-8 uppercase">01 // OpenClaw: The Technical Brute</h2>
              <p className="mb-8">
                OpenClaw isn't designed to be your friend. It's designed to be your most efficient engineer. Built on the "Claw-V4" architecture, it excels at raw computational logic, native code execution, and complex mathematical modeling.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-black/40 p-8 border border-white/5">
                  <Cpu className="text-[#064e3b] mb-4" size={32} />
                  <h4 className="text-white font-bold uppercase text-sm tracking-widest mb-4">Architecture</h4>
                  <p className="text-sm opacity-60">Utilizes a dynamic MoE (Mixture of Experts) model specifically tuned for algorithmic efficiency and low-latency response times.</p>
                </div>
                <div className="bg-black/40 p-8 border border-white/5">
                  <Network className="text-[#064e3b] mb-4" size={32} />
                  <h4 className="text-white font-bold uppercase text-sm tracking-widest mb-4">Connectivity</h4>
                  <ul className="space-y-2 text-xs opacity-60">
                    <li>• Native Webhook Listeners</li>
                    <li>• Direct SQL/NoSQL Interfacing</li>
                    <li>• Multi-cloud Deployment Hooks</li>
                  </ul>
                </div>
              </div>

              <div className="bg-black p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-4 text-[#064e3b]">
                  <Terminal size={16} /> <span className="text-[0.6rem] uppercase font-bold tracking-widest">Agent_Log // OpenClaw_V4</span>
                </div>
                <pre className="text-[0.7rem] text-white/40 overflow-x-auto">
                  {`> Initializing Data_Scrub_Module...
> Sandbox Environment: SECURE
> Processing 50,000 rows...
> Logic Error detected in Row 432. Auto-correcting...
> Optimizing Query Path...
> Task Complete. Efficiency: 99.8%
> Resources Released.`}
                </pre>
              </div>
            </div>

            <div className="border border-white/10 p-12 bg-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Brain size={120} />
              </div>
              <h2 className="text-4xl font-black text-white mb-8 uppercase">02 // Claude Cowork: The Creative Strategist</h2>
              <p className="mb-8">
                If OpenClaw is your lead dev, Claude Cowork is your Chief of Staff. It possesses a level of nuance and "human-like" reasoning that remains unmatched. It understands brand voice, emotional intelligence, and complex strategic trade-offs that require more than just logic.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { title: "Nuance", icon: <Target />, desc: "Detects subtle shifts in customer sentiment." },
                  { title: "Strategy", icon: <TrendingUp />, desc: "Evaluates long-term market impact." },
                  { title: "Vision", icon: <Layers />, desc: "Analyzes visual assets for brand consistency." }
                ].map((item, i) => (
                  <div key={i} className="p-6 border border-white/5 bg-black/20">
                    <div className="text-white mb-4">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}</div>
                    <h5 className="text-xs font-black uppercase mb-2">{item.title}</h5>
                    <p className="text-[0.7rem] opacity-50">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="border-l-4 border-white/20 pl-8 py-4">
                <p className="text-sm italic opacity-60">
                  "Claude Cowork doesn't just follow instructions; it anticipates the 'why' behind the request. When I asked it to draft a response to a difficult investor, it didn't just write an email—it analyzed our previous 6 months of updates to ensure the tone was perfectly aligned with our current trajectory."
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">The Orchestration Strategy</h2>
            <p>
              The "Calpir Way" involves building a bridge between these two. We deploy a central "Router Agent" that analyzes incoming tasks and delegates them based on the specific requirements. This is the "Agentic Workflow" that separates the winners from the losers in 2026.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-black uppercase">The Delegation Logic</h3>
                <div className="space-y-4">
                  <div className="p-6 bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#064e3b]">Task: Code Generation</span>
                      <span className="text-[0.6rem] bg-[#064e3b] text-white px-2 py-0.5">OPENCLAW</span>
                    </div>
                    <p className="text-xs opacity-50">High precision, zero hallucination in syntax, native testing.</p>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-white">Task: Content Strategy</span>
                      <span className="text-[0.6rem] bg-white text-black px-2 py-0.5">CLAUDE</span>
                    </div>
                    <p className="text-xs opacity-50">Nuanced tone, audience empathy, creative hooks.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#064e3b]/10 border border-[#064e3b]/30 p-8">
                <Workflow className="text-[#064e3b] mb-6" size={40} />
                <h3 className="text-2xl font-black uppercase mb-4">The Feedback Loop</h3>
                <p className="text-sm opacity-70 mb-6">
                  We implement a "Cross-Agent Verification" system. OpenClaw generates the technical output, and Claude reviews it for "Human Readability" and "Strategic Alignment." This reduces error rates by 87% compared to single-agent workflows.
                </p>
                <div className="flex items-center gap-4 text-[0.6rem] font-black uppercase tracking-widest">
                  <div className="flex items-center gap-2"><CheckCircle2 size={14} /> Verified</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={14} /> Optimized</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={14} /> Deployed</div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Conclusion: Speed is the Only Metric</h2>
            <p>
              In the startup world, the only thing that matters is the time between an idea and its execution. By leveraging both OpenClaw and Claude Cowork, you aren't just "using AI"—you're building an autonomous workforce that scales with your ambition. The question isn't which one to use, but how fast you can integrate both into your core operations.
            </p>
            <div className="bg-[#064e3b] p-12 text-center">
              <h3 className="text-3xl font-black mb-6">Ready to Deploy Your AI Team?</h3>
              <p className="mb-8 opacity-80">We specialize in building custom orchestration layers for high-growth startups. Stop chatting, start deploying.</p>
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
              Most founders treat legal setup like a trip to the dentist: something painful that you put off as long as possible. This is a fatal mistake. Your legal structure is the "operating system" of your business. If you build on a buggy OS, your entire company will eventually crash. This guide covers the 2026 landscape of digital-first formation.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-white/10 p-10 bg-white/5 relative group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Landmark size={60} />
              </div>
              <h3 className="text-2xl font-black text-[#064e3b] mb-6 uppercase">Delaware: The VC Standard</h3>
              <p className="text-sm mb-6">If you plan on raising venture capital, don't overthink it. Delaware is the only choice. Their "Chancery Court" is the most sophisticated business court in the world, providing predictable outcomes for complex disputes.</p>
              <div className="space-y-4">
                <div className="flex justify-between text-[0.6rem] font-bold uppercase tracking-widest border-b border-white/10 pb-2">
                  <span>Investor Trust</span>
                  <span className="text-[#064e3b]">MAXIMUM</span>
                </div>
                <div className="flex justify-between text-[0.6rem] font-bold uppercase tracking-widest border-b border-white/10 pb-2">
                  <span>Annual Cost</span>
                  <span className="text-white">$300 - $500+</span>
                </div>
                <div className="flex justify-between text-[0.6rem] font-bold uppercase tracking-widest border-b border-white/10 pb-2">
                  <span>Privacy</span>
                  <span className="text-white/40">MODERATE</span>
                </div>
              </div>
            </div>
            
            <div className="border border-white/10 p-10 bg-white/5 relative group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Shield size={60} />
              </div>
              <h3 className="text-2xl font-black text-white mb-6 uppercase">Wyoming: The Bootstrapper's King</h3>
              <p className="text-sm mb-6">If you're building a profitable, bootstrapped business and value privacy and low overhead, Wyoming is your best friend. No state income tax and minimal reporting requirements make it the leanest option.</p>
              <div className="space-y-4">
                <div className="flex justify-between text-[0.6rem] font-bold uppercase tracking-widest border-b border-white/10 pb-2">
                  <span>Investor Trust</span>
                  <span className="text-white/40">MODERATE</span>
                </div>
                <div className="flex justify-between text-[0.6rem] font-bold uppercase tracking-widest border-b border-white/10 pb-2">
                  <span>Annual Cost</span>
                  <span className="text-[#064e3b]">MINIMAL ($50)</span>
                </div>
                <div className="flex justify-between text-[0.6rem] font-bold uppercase tracking-widest border-b border-white/10 pb-2">
                  <span>Privacy</span>
                  <span className="text-[#064e3b]">MAXIMUM</span>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">The 4-Step Deployment</h2>
            <div className="grid grid-cols-1 gap-8">
              {[
                { step: "01", title: "Articles of Organization", icon: <FileText />, desc: "The birth certificate of your company. In 2026, ensure your 'Business Purpose' is broad enough to allow for AI-driven pivots without re-filing." },
                { step: "02", title: "The EIN Myth", icon: <Landmark />, desc: "Formation services will try to charge you $200 for an EIN. It takes 5 minutes on the IRS website and it's free. Don't pay for what's already yours." },
                { step: "03", title: "Operating Agreement", icon: <Scale />, desc: "This is the most important document you'll sign. It defines ownership, voting rights, and what happens if a founder leaves. Don't use a generic template." },
                { step: "04", title: "Foreign Qualification", icon: <Landmark />, desc: "If you live in Texas but file in Delaware, you must 'Foreign Qualify' in your home state. Skipping this will block your bank account setup." }
              ].map((item) => (
                <div key={item.step} className="flex gap-8 items-start border border-white/10 p-8 bg-black/40 hover:border-[#064e3b] transition-colors">
                  <div className="text-5xl font-black text-[#064e3b] shrink-0">{item.step}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-[#064e3b]">{item.icon}</div>
                      <h4 className="text-xl font-black text-white uppercase">{item.title}</h4>
                    </div>
                    <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-red-900/10 border border-red-900/30 p-12 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <AlertTriangle className="text-red-900 shrink-0" size={64} />
            <div>
              <h3 className="text-2xl font-black text-red-900 uppercase mb-4">The "Piercing the Veil" Trap</h3>
              <p className="text-sm mb-6">If you pay for your personal Netflix with your business card, your LLC is useless. This is called "commingling funds," and it allows lawyers to sue YOU personally instead of just the company. In 2026, automated accounting tools make this easier to avoid, but the responsibility is still yours.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-black/40 p-4 border border-red-900/20 text-[0.6rem] font-bold uppercase tracking-widest text-red-900">
                  X Personal Expenses on Biz Card
                </div>
                <div className="bg-black/40 p-4 border border-[#064e3b]/20 text-[0.6rem] font-bold uppercase tracking-widest text-[#064e3b]">
                  ✓ Separate Bank Accounts
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Formation Checklist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Choose State (DE or WY)",
                "Check Name Availability",
                "Appoint Registered Agent",
                "File Articles of Organization",
                "Obtain EIN from IRS",
                "Draft Operating Agreement",
                "Open Business Bank Account",
                "Apply for Local Licenses"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10">
                  <CheckCircle2 className="text-[#064e3b]" size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">{item}</span>
                </div>
              ))}
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
              Most ClickUp workspaces are a mess of "To-Do" lists that haven't been updated in three months. This isn't a tool problem; it's a hierarchy problem. At Calpir, we've built systems for 7-figure companies, and they all follow the same "Departmental Isolation" model. This guide shows you how to build a workspace that actually drives work forward.
            </p>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">The Hierarchy of Needs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-white/10 p-8 bg-white/5 relative group">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#064e3b] flex items-center justify-center font-black text-white">01</div>
                <Layers className="text-[#064e3b] mb-6" size={32} />
                <h4 className="font-black uppercase mb-4">Spaces</h4>
                <p className="text-xs opacity-60 leading-relaxed">High-level departments (e.g., Marketing, Engineering, Ops). Never mix these. Isolation prevents cognitive overwhelm and keeps permissions clean.</p>
              </div>
              <div className="border border-white/10 p-8 bg-white/5 relative group">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#064e3b] flex items-center justify-center font-black text-white">02</div>
                <Target className="text-[#064e3b] mb-6" size={32} />
                <h4 className="font-black uppercase mb-4">Folders</h4>
                <p className="text-xs opacity-60 leading-relaxed">Specific projects or recurring cycles (e.g., Q1 Campaigns, Sprint 24, Client Onboarding). Folders group related work within a department.</p>
              </div>
              <div className="border border-white/10 p-8 bg-white/5 relative group">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#064e3b] flex items-center justify-center font-black text-white">03</div>
                <CheckCircle2 className="text-[#064e3b] mb-6" size={32} />
                <h4 className="font-black uppercase mb-4">Lists</h4>
                <p className="text-xs opacity-60 leading-relaxed">The actual action items. Use custom statuses to track the exact stage of every task. This is where the work lives and dies.</p>
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">3 Automation Recipes You Need</h2>
            <p className="text-sm opacity-60">Automations are the "secret sauce" that turn a list into a system. Here are the three we deploy for every client.</p>
            
            <div className="space-y-6">
              <div className="p-8 bg-black border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Workflow size={80} />
                </div>
                <div className="text-[#064e3b] font-bold text-xs mb-4 uppercase tracking-widest flex items-center gap-2">
                  <Zap size={14} /> Recipe 01 // The Hand-off
                </div>
                <p className="text-sm mb-4">"When Status changes to 'Ready for Review' > Assign to [Manager] > Post Comment in Slack."</p>
                <div className="text-[0.6rem] font-bold uppercase tracking-widest text-white/20">Impact: Eliminates "Is this done?" messages.</div>
              </div>
              
              <div className="p-8 bg-black border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Clock size={80} />
                </div>
                <div className="text-[#064e3b] font-bold text-xs mb-4 uppercase tracking-widest flex items-center gap-2">
                  <Zap size={14} /> Recipe 02 // The Stale Task
                </div>
                <p className="text-sm mb-4">"When Task is overdue by 48 hours > Change Priority to 'Urgent' > Notify Owner."</p>
                <div className="text-[0.6rem] font-bold uppercase tracking-widest text-white/20">Impact: Prevents projects from stalling silently.</div>
              </div>
              
              <div className="p-8 bg-black border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Mail size={80} />
                </div>
                <div className="text-[#064e3b] font-bold text-xs mb-4 uppercase tracking-widest flex items-center gap-2">
                  <Zap size={14} /> Recipe 03 // The Client Sync
                </div>
                <p className="text-sm mb-4">"When Status changes to 'Complete' > Send Email to Client via ClickUp Email Module."</p>
                <div className="text-[0.6rem] font-bold uppercase tracking-widest text-white/20">Impact: Automates client communication and reporting.</div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Custom Statuses</h2>
              <div className="space-y-2">
                {[
                  { name: "Backlog", color: "bg-white/20" },
                  { name: "In Progress", color: "bg-blue-500" },
                  { name: "Internal Review", color: "bg-orange-500" },
                  { name: "Client Review", color: "bg-purple-500" },
                  { name: "Complete", color: "bg-[#064e3b]" }
                ].map((status, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10">
                    <div className={cn("w-3 h-3 rounded-full", status.color)} />
                    <span className="text-xs font-bold uppercase tracking-widest">{status.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#064e3b]/10 border border-[#064e3b]/30 p-10">
              <Briefcase className="text-[#064e3b] mb-6" size={40} />
              <h3 className="text-2xl font-black uppercase mb-4">The "Golden Rule" of Ops</h3>
              <p className="text-sm italic opacity-70 leading-relaxed mb-8">
                "If it's not in ClickUp, it doesn't exist. No Slack tasks. No 'quick favors' via DM. If you want it done, it needs a ticket, a deadline, and an owner. This discipline is what separates hobbyists from professionals."
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                  <CheckCircle2 className="text-[#064e3b]" size={16} /> Centralized Truth
                </div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                  <CheckCircle2 className="text-[#064e3b]" size={16} /> Clear Accountability
                </div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                  <CheckCircle2 className="text-[#064e3b]" size={16} /> Scalable Processes
                </div>
              </div>
            </div>
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
              I've seen founders raise $100k and spend $40k of it on a "brand strategy" before they even had a landing page. This is ego-driven spending, and it's the fastest way to the startup graveyard. Your first $50k should be spent on only two things: **Learning** and **Leverage**. This guide breaks down the "Burn Hierarchy" for 2026.
            </p>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">The "Burn" Hierarchy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-red-900/30 p-10 bg-red-900/5 relative group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <TrendingDown size={60} />
                </div>
                <h3 className="text-2xl font-black text-red-900 uppercase mb-6">Bad Burn (Avoid)</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-3"><X className="text-red-900" size={16} /> Custom Office Furniture</li>
                  <li className="flex items-center gap-3"><X className="text-red-900" size={16} /> High-End PR Agencies</li>
                  <li className="flex items-center gap-3"><X className="text-red-900" size={16} /> "Stealth Mode" Legal Fees</li>
                  <li className="flex items-center gap-3"><X className="text-red-900" size={16} /> Over-engineered Tech Stacks</li>
                </ul>
                <p className="mt-8 text-[0.6rem] font-bold uppercase tracking-widest text-red-900/60">Result: High overhead, zero traction.</p>
              </div>
              
              <div className="border border-[#064e3b]/30 p-10 bg-[#064e3b]/5 relative group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <TrendingUp size={60} />
                </div>
                <h3 className="text-2xl font-black text-[#064e3b] uppercase mb-6">Good Burn (Invest)</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-[#064e3b]" size={16} /> Conversion-Optimized Web</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-[#064e3b]" size={16} /> Automated Lead Gen Systems</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-[#064e3b]" size={16} /> Customer Acquisition Testing</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-[#064e3b]" size={16} /> AI-Powered Operations</li>
                </ul>
                <p className="mt-8 text-[0.6rem] font-bold uppercase tracking-widest text-[#064e3b]/60">Result: Scalable growth, high leverage.</p>
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">The "Logo Trap"</h2>
            <p>
              Founders love logos. They love business cards. They love feeling like a "CEO." But a logo doesn't get you customers. A high-converting landing page that solves a real problem does. In 2026, branding is about **Trust** and **Utility**, not just aesthetics.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-8 border border-white/10 text-center">
                <BarChart className="mx-auto mb-4 text-[#064e3b]" size={32} />
                <h5 className="text-xs font-black uppercase mb-2">Data Over Ego</h5>
                <p className="text-[0.7rem] opacity-50">Spend on tools that show you where users are dropping off.</p>
              </div>
              <div className="bg-white/5 p-8 border border-white/10 text-center">
                <PieChart className="mx-auto mb-4 text-[#064e3b]" size={32} />
                <h5 className="text-xs font-black uppercase mb-2">ROI Focus</h5>
                <p className="text-[0.7rem] opacity-50">Every dollar spent must have a clear path to revenue.</p>
              </div>
              <div className="bg-white/5 p-8 border border-white/10 text-center">
                <Activity className="mx-auto mb-4 text-[#064e3b]" size={32} />
                <h5 className="text-xs font-black uppercase mb-2">Agile Spend</h5>
                <p className="text-[0.7rem] opacity-50">Keep your fixed costs low so you can pivot fast.</p>
              </div>
            </div>
          </section>

          <section className="bg-white/5 p-12 border border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#064e3b]/5 blur-3xl rounded-full -z-10" />
            <DollarSign className="mx-auto mb-6 text-[#064e3b]" size={48} />
            <h4 className="text-2xl font-black uppercase mb-4">The 10x Rule</h4>
            <p className="text-sm opacity-60 max-w-[600px] mx-auto leading-relaxed">
              "Before spending $1,000 on anything, ask yourself: Will this help me get 10x that amount back in revenue or time saved? If the answer isn't a clear 'Yes,' don't buy it. This simple filter will save you more money than any accountant."
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Infrastructure as Leverage</h2>
            <p>
              The best way to spend your first $50k is on **Infrastructure**. This means setting up your CRM, your automations, and your AI agents so that you can operate like a team of 10 while you're still a team of 1. This is how you survive the "Valley of Death" and reach profitability before your bank account hits zero.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-white/10 bg-black/40">
                <h5 className="text-lg font-black uppercase mb-4">Phase 1: Foundation</h5>
                <ul className="space-y-2 text-xs opacity-60">
                  <li>• High-Conversion Landing Page</li>
                  <li>• Basic CRM Configuration</li>
                  <li>• Core Legal & Financial Setup</li>
                </ul>
              </div>
              <div className="p-8 border border-white/10 bg-black/40">
                <h5 className="text-lg font-black uppercase mb-4">Phase 2: Scale</h5>
                <ul className="space-y-2 text-xs opacity-60">
                  <li>• Advanced Workflow Automation</li>
                  <li>• AI Support & Sales Agents</li>
                  <li>• Multi-channel Marketing Engine</li>
                </ul>
              </div>
            </div>
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