"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

const Blog = () => {
  const posts = [
    {
      slug: "ai-agents-for-startups",
      title: "5 AI Agents Every Startup Should Deploy in 2026",
      tag: "AI for Startups",
      readTime: "8 min read",
      date: "March 23, 2026",
      excerpt: "If you're launching a startup in 2026 and you're not using AI agents, you're competing with one hand tied behind your back."
    },
    {
      slug: "automate-small-business",
      title: "The Complete Guide to Automating Your Small Business",
      tag: "Automation",
      readTime: "10 min read",
      date: "March 23, 2026",
      excerpt: "You didn't start your business to spend half your day on data entry and manual follow-up emails. Here is how to fix it."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="hero-gradient pt-40 pb-24 px-6 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-[#555] max-w-[800px] mx-auto">
            Practical strategies for launching, growing, and automating your business with AI. New articles every Monday and Thursday.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                <div className="bg-[#f8f9fa] aspect-video rounded-[24px] mb-8 overflow-hidden border border-gray-100">
                  <div className="w-full h-full brand-gradient opacity-10 group-hover:opacity-20 transition-opacity" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="bg-[#6c5ce71a] text-[#6c5ce7] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{post.tag}</span>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{post.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold group-hover:text-[#6c5ce7] transition-colors">{post.title}</h2>
                  <p className="text-[#555] leading-relaxed">{post.excerpt}</p>
                  <div className="text-[#6c5ce7] font-bold text-sm uppercase tracking-widest">Read Article →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;