"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white/70 pt-16 pb-8 px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        {/* Column 1 */}
        <div className="space-y-4">
          <div className="text-2xl font-bold text-white">Calpir</div>
          <p className="text-[0.95rem] leading-relaxed">
            AI-powered business launch and automation. Built by founders, for founders.
          </p>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase text-xs tracking-widest">Services</h4>
          <ul className="space-y-2 text-[0.9rem]">
            <li><Link to="/#services" className="hover:text-[#6c5ce7] transition-colors">Website Development</Link></li>
            <li><Link to="/#services" className="hover:text-[#6c5ce7] transition-colors">CRM & Sales</Link></li>
            <li><Link to="/#services" className="hover:text-[#6c5ce7] transition-colors">Marketing & Branding</Link></li>
            <li><Link to="/#ai" className="hover:text-[#6c5ce7] transition-colors">AI Agents</Link></li>
            <li><Link to="/#ai" className="hover:text-[#6c5ce7] transition-colors">Workflow Automation</Link></li>
            <li><Link to="/#ai" className="hover:text-[#6c5ce7] transition-colors">AI Consulting</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase text-xs tracking-widest">Company</h4>
          <ul className="space-y-2 text-[0.9rem]">
            <li><Link to="/about" className="hover:text-[#6c5ce7] transition-colors">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-[#6c5ce7] transition-colors">Blog</Link></li>
            <li><Link to="/#packages" className="hover:text-[#6c5ce7] transition-colors">Pricing</Link></li>
            <li><Link to="/#contact" className="hover:text-[#6c5ce7] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase text-xs tracking-widest">Connect</h4>
          <div className="flex flex-col gap-3">
            <a href="https://twitter.com/calpir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#6c5ce7] transition-colors">
              <Twitter size={18} /> <span>Twitter / X</span>
            </a>
            <a href="https://linkedin.com/company/calpir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#6c5ce7] transition-colors">
              <Linkedin size={18} /> <span>LinkedIn</span>
            </a>
            <a href="mailto:hello@calpir.com" className="flex items-center gap-2 hover:text-[#6c5ce7] transition-colors">
              <Mail size={18} /> <span>hello@calpir.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto pt-8 border-t border-white/10 text-center text-[0.85rem]">
        <p>© 2026 Calpir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;