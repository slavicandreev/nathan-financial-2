import React from 'react';
import { PieChart, PiggyBank, Sailboat, FileSpreadsheet, GraduationCap, Home, Umbrella, Banknote } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { icon: <PieChart size={40} strokeWidth={1} />, title: 'Financial Planning' },
    { icon: <PiggyBank size={40} strokeWidth={1} />, title: 'Retirement' },
    { icon: <Sailboat size={40} strokeWidth={1} />, title: 'Lifestyle' },
    { icon: <FileSpreadsheet size={40} strokeWidth={1} />, title: 'Investing' },
    { icon: <GraduationCap size={40} strokeWidth={1} />, title: 'College Planning' },
    { icon: <Home size={40} strokeWidth={1} />, title: 'Estate Management' },
    { icon: <Umbrella size={40} strokeWidth={1} />, title: 'Insurance' },
    { icon: <Banknote size={40} strokeWidth={1} />, title: 'Tax Management' },
  ];

  return (
    <div className="bg-[#05080f] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <span className="text-gray-400 font-medium text-xs uppercase tracking-widest mb-2 block">Our Services</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium">What We Do</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="mb-6 p-4 rounded-full border border-brand-teal/30 text-brand-teal group-hover:bg-brand-teal group-hover:text-black transition duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                It is a paradisematic country, in which roasted parts of sentences.
              </p>
              {idx % 2 !== 0 && (
                <p className="text-gray-500 text-xs mt-2 italic">
                   The Big Oxmox advised her not to do so, because there were bad.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;