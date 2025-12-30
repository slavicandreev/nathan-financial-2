import React, { useState, useEffect } from 'react';
import { Phone, Mail, Facebook, Twitter, MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full absolute top-0 left-0 z-50">
      {/* Top Bar */}
      <div className="bg-brand-dark/90 text-gray-300 text-xs py-2 border-b border-gray-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-2 md:mb-0">
            <span className="flex items-center space-x-2">
              <span className="text-gray-400 text-xs">📍</span>
              <span>435 Wandering Ct Sonoma, CA 93632</span>
            </span>
            <span className="flex items-center space-x-2">
              <Phone size={12} />
              <span>1-800-123-4567</span>
            </span>
            <span className="flex items-center space-x-2">
              <Mail size={12} />
              <span>contact@aeso-site.com</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition"><Facebook size={14} /></a>
            <a href="#" className="hover:text-white transition"><Twitter size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-brand-dark py-3 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-white font-serif text-3xl font-bold tracking-wider">AESO</a>
          
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-200">
            <a href="#" className="hover:text-brand-teal transition">Home</a>
            <a href="#" className="hover:text-brand-teal transition">Who We Are</a>
            <a href="#" className="hover:text-brand-teal transition">Financial Services</a>
            <a href="#" className="hover:text-brand-teal transition">News & Press</a>
            <a href="#" className="hover:text-brand-teal transition">Contact</a>
          </nav>

          <a href="#" className="hidden md:flex items-center space-x-2 border border-gray-500 text-white px-4 py-2 text-xs uppercase tracking-wide hover:bg-white hover:text-brand-dark transition rounded-sm">
            <MessageSquare size={14} />
            <span>Chat with an Advisor</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;