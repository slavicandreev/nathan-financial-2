import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      name: "Jessica Martin",
      role: "Planning for a New Child",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      name: "Michael Smith",
      role: "Switching to a New Career",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Sarah Albert",
      role: "Unexpected Job Loss",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  return (
    <div className="bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-brand-accent font-medium text-sm tracking-wide mb-2 block">Case Studies</span>
          <h2 className="font-serif text-4xl text-gray-900">Personal Testimonials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 shadow-sm rounded-sm relative mt-8">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-brand-accent rounded-full p-3 text-white shadow-md">
                <Quote size={20} fill="currentColor" />
              </div>
              <p className="text-gray-600 text-sm leading-7 mt-6 mb-8 text-center italic">
                "{t.text}"
              </p>
              
              <div className="flex items-center border-t border-gray-100 pt-6">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-serif text-lg text-gray-900 leading-none mb-1">{t.name}</h4>
                  <p className="text-brand-accent text-xs font-medium uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;