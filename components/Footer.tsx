import React from 'react';
import { Facebook, Twitter, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 py-16 text-sm">
      <div className="container mx-auto px-4">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-12 mb-12">
           <div className="mb-6 md:mb-0">
             <span className="text-white font-serif text-3xl font-bold tracking-wider">AESO</span>
           </div>
           <div className="flex flex-wrap gap-8 items-center">
             <div className="flex items-center gap-2 text-gray-300">
               <Phone size={14} /> 1-800-123-4567
             </div>
             <div className="flex items-center gap-2 text-gray-300">
               <Mail size={14} /> contact@aeso-site.com
             </div>
             <div className="flex items-center gap-4">
               <a href="#" className="p-2 border border-gray-600 rounded-full hover:border-white hover:text-white transition"><Facebook size={16} /></a>
               <a href="#" className="p-2 border border-gray-600 rounded-full hover:border-white hover:text-white transition"><Twitter size={16} /></a>
             </div>
           </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand-teal transition">News & Press</a></li>
              <li><a href="#" className="hover:text-brand-teal transition">Who We Work With</a></li>
              <li><a href="#" className="hover:text-brand-teal transition">Our Approach</a></li>
              <li><a href="#" className="hover:text-brand-teal transition">Leadership</a></li>
              <li><a href="#" className="hover:text-brand-teal transition">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand-teal transition">Financial Planning</a></li>
              <li><a href="#" className="hover:text-brand-teal transition">Lifestyle</a></li>
              <li><a href="#" className="hover:text-brand-teal transition">College Planning</a></li>
              <li><a href="#" className="hover:text-brand-teal transition">Retirement</a></li>
              <li><a href="#" className="hover:text-brand-teal transition">Estate Management</a></li>
              <li><a href="#" className="hover:text-brand-teal transition">Life Insurance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Locations</h4>
            <div className="mb-6">
              <p className="font-bold text-white mb-2">Northern California</p>
              <p className="mb-2">435 Wandering Ct. Suite 101, <br/> Sonoma, CA 93632</p>
              <a href="#" className="text-gray-500 underline text-xs">Get Directions</a>
            </div>
            <div>
              <p className="font-bold text-white mb-2">Northern California</p>
              <p className="mb-2">435 Wandering Ct. Suite 101, <br/> Sonoma, CA 93632</p>
              <a href="#" className="text-gray-500 underline text-xs">Get Directions</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Newsletter</h4>
            <p className="mb-4 text-xs leading-relaxed">Join our Weekly Newsletter! We promise we won't spam.</p>
            <div className="flex">
               <input type="email" placeholder="Your email address" className="bg-white text-gray-900 px-4 py-3 w-full outline-none text-xs rounded-l-sm" />
               <button className="bg-brand-teal text-white px-4 py-3 text-xs font-bold uppercase rounded-r-sm hover:bg-cyan-400 transition">Sign Up</button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center md:text-left text-[10px] leading-relaxed text-gray-600">
           <p>
             COPYRIGHT ALL RIGHTS RESERVED. AESO, LIKE ALL PROVIDERS OF PERSONAL FINANCIAL SERVICES IS REQUIRED BY LAW TO INFORM THEIR CLIENTS OF THEIR POLICIES REGARDING PRIVACY OF CLIENT INFORMATION. THE INFORMATION IN THIS MATERIAL IS NOT INTENDED AS TAX OR LEGAL ADVICE. AESO IS A REGISTERED BUSINESS IN CALIFORNIA (LICENSE #123560) PROVIDED CONTENT IS FOR INFORMATIONAL PURPOSES ONLY AND IS COMPLETELY FICTIONAL.
           </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;