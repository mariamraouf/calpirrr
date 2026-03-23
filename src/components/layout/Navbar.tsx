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
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4",
      scrolled ? "pt-4" : "pt-8"
    )}>
      <div className={cn(
        "container-custom h-16 flex items-center justify-between px-8 rounded-full transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-lg shadow-purple-100/20 border border-white/20" : "bg-transparent"
      )}>
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#6c5ce7] rounded-lg flex items-center justify-center text-white font-black">C</div>
          <span className="text-xl font-black tracking-tighter uppercase text-[#1a1a2e]">Calpir</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-bold transition-colors",
                location.pathname === link.href ? "text-[#6c5ce7]" : "text-gray-500 hover:text-[#6c5ce7]"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer" className="bg-[#6c5ce7] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#5b4cdb] transition-all shadow-md shadow-purple-100">
            Get Started
          </a>
        </div>

        <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-6 right-6 mt-4 bg-white rounded-[2rem] shadow-2xl border border-gray-50 transition-all duration-300 overflow-hidden",
        isOpen ? "max-h-[400px] opacity-100 p-8" : "max-h-0 opacity-0 p-0"
      )}>
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-900">
              {link.name}
            </Link>
          ))}
          <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer" className="bg-[#6c5ce7] text-white px-6 py-4 rounded-2xl text-center font-bold">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;