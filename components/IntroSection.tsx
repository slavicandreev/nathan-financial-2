import React from 'react';
import { Landmark, FileText, Glasses } from 'lucide-react';

const IntroSection: React.FC = () => {
  return (
    <div className="bg-white pt-24 pb-16 relative">
      <div className="container mx-auto px-4">
        {/* Top Part: Text and Image */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          
          <div className="lg:w-1/2">
            <span className="text-brand-accent font-medium text-sm tracking-wide mb-4 block">
              Meet with an Advisor to get Started
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-8">
              It’s Your Future: <br/>
              Build a Financial <br/>
              Picture That Fits <br/>
              Your Goals
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
               It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
            <button className="bg-brand-dark text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition rounded-sm">
              Develop My Financial Picture
            </button>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative p-6 bg-white shadow-2xl rotate-2 hover:rotate-0 transition duration-500">
               {/* Frame Effect */}
               <div className="border-[16px] border-[#8B5E3C] shadow-inner w-full max-w-md">
                   <div className="border-4 border-[#D4AF37] relative">
                       <img 
                         src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop" 
                         alt="Person looking at mountains" 
                         className="w-full h-auto object-cover aspect-[4/5]"
                       />
                   </div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Part: 3 Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="flex flex-col items-start">
                <div className="mb-4 text-gray-400">
                    <Landmark size={48} strokeWidth={1} />
                </div>
                <h3 className="font-serif text-2xl mb-3 text-gray-900">Fiduciary</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    It is a prismatic country, in which roasted parts of sentences fly into your mouth.
                </p>
            </div>
            <div className="flex flex-col items-start">
                <div className="mb-4 text-gray-400">
                    <FileText size={48} strokeWidth={1} />
                </div>
                <h3 className="font-serif text-2xl mb-3 text-gray-900">Fee-Only</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    She packed her seven versalia, put her initial into the belt and made her way.
                </p>
            </div>
            <div className="flex flex-col items-start">
                <div className="mb-4 text-gray-400">
                    <Glasses size={48} strokeWidth={1} />
                </div>
                <h3 className="font-serif text-2xl mb-3 text-gray-900">Certified Advisors</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    And if she hasn’t been rewritten, then they are still using her for far away.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default IntroSection;