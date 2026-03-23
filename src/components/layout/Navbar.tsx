"use client";

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6",
      scrolled ? "py-4 bg-white/90 backdrop-blur-xl border-b border-[#f9731615]" : "py-6 bg-transparent"
    )}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#f97316] rounded-[12px] flex items-center justify-center text-white shadow-lg shadow-[#f9731633] group-hover:rotate-12 transition-transform">
            <Sparkles size={20} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#1a1a1a]">Calpir</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-[0.95rem] font-bold transition-colors uppercase tracking-widest",
                location.pathname === link.href ? "text-[#f97316]" : "text-[#555] hover:text-[#f97316]"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/#contact" className="bg-[#f97316] text-white px-8 py-3 rounded-[10px] text-sm font-black uppercase tracking-widest hover:bg-[#ea580c] transition-all shadow-lg shadow-[#f9731622]">
            Initialize
          </Link>
        </div>

        <button className="md:hidden text-[#1a1a1a]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#e5e7eb] transition-all duration-300 overflow-hidden shadow-2xl",
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className="text-xl font-black text-[#1a1a1a] uppercase tracking-widest">
              {link.name}
            </Link>
          ))}
          <Link to="/#contact" onClick={() => setIsOpen(false)} className="bg-[#f97316] text-white text-center py-5 rounded-[12px] font-black uppercase tracking-widest">
            Initialize
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;