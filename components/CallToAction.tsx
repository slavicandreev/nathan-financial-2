import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <div className="relative py-32 md:py-40">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
          alt="Road trip" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="font-serif text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
            Enjoy <br/>
            the ride.
          </h2>
          <p className="text-lg text-gray-200 mb-10 max-w-lg">
            Let us take the mystery out of financial planning so you can focus on what matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-teal text-brand-dark px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition duration-300 rounded-sm">
              Chat with an Advisor
            </button>
            <button className="border border-white/50 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition duration-300 rounded-sm">
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;