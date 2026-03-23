"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Website & Branding', href: '/services/website-development' },
    { name: 'CRM & Sales Systems', href: '/services/crm-sales' },
    { name: 'Marketing & Social', href: '/services/marketing-branding' },
    { name: 'Operations & HR', href: '/services/operations-hr' },
    { name: 'AI Agent Development', href: '/services/ai-agents' },
    { name: 'Workflow Automation', href: '/services/ai-automation' },
    { name: 'AI Strategy Consulting', href: '/services/ai-consulting' },
  ];

  const navLinks = [
    { name: 'Packages', href: '/packages' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Assessment', href: '/assessment' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="glass-nav">
      <div className="container-custom h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-[800] tracking-tighter flex items-center">
          <span className="text-[#0a0a0a]">cal</span>
          <span className="text-[#6c5ce7]">pir</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-[0.95rem] font-medium text-[#1a1a2e] hover:text-[#6c5ce7] transition-colors py-8">
              Services <ChevronDown size={16} className={cn("transition-transform", isServicesOpen && "rotate-180")} />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl p-2 animate-in fade-in slide-in-from-top-2">
                {services.map((s) => (
                  <Link 
                    key={s.name} 
                    to={s.href} 
                    className="block px-4 py-3 text-sm font-medium text-[#555] hover:text-[#6c5ce7] hover:bg-[#f8f9fa] rounded-lg transition-all"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[0.95rem] font-medium text-[#1a1a2e] hover:text-[#6c5ce7] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <a href="/#contact" className="bg-[#6c5ce7] text-white px-6 py-2.5 rounded-[10px] text-sm font-bold hover:bg-[#5b4cdb] transition-all shadow-lg shadow-[#6c5ce722]">
            Free Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#1a1a2e]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 transition-all duration-300 overflow-hidden shadow-xl",
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col p-6 gap-4">
          <div className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">Services</div>
          {services.map((s) => (
            <Link key={s.name} to={s.href} onClick={() => setIsOpen(false)} className="text-lg font-bold text-[#1a1a2e]">
              {s.name}
            </Link>
          ))}
          <div className="h-px bg-gray-100 my-2" />
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className="text-lg font-bold text-[#1a1a2e]">
              {link.name}
            </Link>
          ))}
          <a href="/#contact" onClick={() => setIsOpen(false)} className="bg-[#6c5ce7] text-white text-center py-4 rounded-[12px] font-bold mt-4">
            Free Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;