"use client";

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
      scrolled ? "py-4 bg-white/80 backdrop-blur-lg border-b border-[#e2e8f0]" : "py-6 bg-transparent"
    )}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#6c5ce7] rounded-[10px] flex items-center justify-center text-white font-bold text-xl">C</div>
          <span className="text-2xl font-bold tracking-tight text-[#1a1a2e]">Calpir</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-[0.95rem] font-medium transition-colors",
                location.pathname === link.href ? "text-[#6c5ce7]" : "text-[#555] hover:text-[#6c5ce7]"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/#contact" className="bg-[#6c5ce7] text-white px-6 py-2.5 rounded-[8px] text-sm font-bold hover:bg-[#5b4cdb] transition-all shadow-md shadow-[#6c5ce722]">
            Get Started
          </Link>
        </div>

        <button className="md:hidden text-[#1a1a2e]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#e2e8f0] transition-all duration-300 overflow-hidden shadow-xl",
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className="text-xl font-bold text-[#1a1a2e]">
              {link.name}
            </Link>
          ))}
          <Link to="/#contact" onClick={() => setIsOpen(false)} className="bg-[#6c5ce7] text-white text-center py-4 rounded-[10px] font-bold">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;