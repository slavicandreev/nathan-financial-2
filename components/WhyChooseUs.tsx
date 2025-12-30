import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row min-h-[600px]">
      {/* Left Content */}
      <div className="md:w-1/2 bg-[#0F212E] p-12 lg:p-24 flex flex-col justify-center">
        <span className="text-white font-medium text-sm tracking-wide mb-4 opacity-80">
          Why Choose Us
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-8">
          Fee-Only, Experienced Advisors Committed to Your Goals.
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mb-10">
          The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.
        </p>
        <div>
            <button className="border border-brand-teal text-white hover:bg-brand-teal hover:text-white transition-colors duration-300 px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-sm">
            Chat with an Advisor
            </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 relative min-h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop" 
          alt="Row boats on water" 
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
      </div>
    </div>
  );
};

export default WhyChooseUs;