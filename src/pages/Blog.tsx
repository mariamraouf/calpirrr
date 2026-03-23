"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Zap } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { cn } from '@/lib/utils';

const Blog = () => {
  const posts = [
    {
      tag: "AI for Startups",
      title: "5 AI Agents Every Startup Should Deploy in 2026",
      excerpt: "The AI agents that are giving early-stage companies an unfair advantage in customer support, sales, and operations.",
      date: "March 23, 2026",
      link: "/blog/ai-agents-for-startups",
      gradient: "from-[#6c5ce7] to-[#0a0a2e]",
      icon: <Bot size={48} />
    },
    {
      tag: "Automation",
      title: "The Complete Guide to Automating Your Small Business",
      excerpt: "How to identify, prioritize, and implement automations that save 20+ hours per week — without technical expertise.",
      date: "March 23, 2026",
      link: "/blog/automate-small-business",
      gradient: "from-[#74b9ff] to-[#6c5ce7]",
      icon: <Zap size={48} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="hero-gradient pt-40 pb-16 px-6 text-center">
        <div className="container-custom">
          <h1 className="text-[3rem] font-[800] mb-6">Blog</h1>
          <p className="text-[1.15rem] text-[#555] max-w-[600px] mx-auto leading-relaxed">
            Practical strategies for launching, growing, and automating your business with AI. New articles every Monday and Thursday.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link key={i} to={post.link} className="group bg-white rounded-[16px] border border-[#e8e8e8] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={cn("h-[200px] bg-gradient-to-br flex items-center justify-center text-white", post.gradient)}>
                {post.icon}
              </div>
              <div className="p-8">
                <span className="inline-block bg-[#6c5ce71a] text-[#6c5ce7] px-3 py-1 rounded-full text-[0.75rem] font-bold mb-4">{post.tag}</span>
                <h3 className="text-[1.15rem] font-bold mb-3 group-hover:text-[#6c5ce7] transition-colors">{post.title}</h3>
                <p className="text-[#555] text-[0.95rem] leading-relaxed mb-6">{post.excerpt}</p>
                <div className="text-[0.85rem] text-[#555] font-medium">{post.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;