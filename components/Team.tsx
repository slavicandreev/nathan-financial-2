import React from 'react';
import { Mail, Twitter, Linkedin } from 'lucide-react';

const Team: React.FC = () => {
  const team = [
    { name: "Sarah Musk", role: "VICE PRESIDENT", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop&grayscale" },
    { name: "Laura Harris", role: "SENIOR ADVISOR", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=500&auto=format&fit=crop&grayscale" },
    { name: "Tesa Banks", role: "ASSOCIATE ADVISOR", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop&grayscale" },
    { name: "Emma Watts", role: "ASSOCIATE ADVISOR", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop&grayscale" },
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <span className="text-brand-accent font-medium text-sm tracking-wide mb-2 block">Our Experts</span>
          <h2 className="font-serif text-4xl text-gray-900">Meet the Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white group">
              <div className="overflow-hidden mb-6 h-80 bg-gray-200">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 transform group-hover:scale-105"
                />
              </div>
              <div className="pb-4 border-b border-brand-accent/20">
                <h3 className="font-serif text-2xl text-gray-900 mb-1">{member.name}</h3>
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">{member.role}</p>
                
                <div className="flex space-x-4 text-gray-300">
                   <a href="#" className="hover:text-brand-accent transition"><Mail size={16} /></a>
                   <a href="#" className="hover:text-brand-accent transition"><Twitter size={16} /></a>
                   <a href="#" className="hover:text-brand-accent transition"><Linkedin size={16} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;