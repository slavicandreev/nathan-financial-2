import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Team from './components/Team';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <Testimonials />
        <WhyChooseUs />
        <Services />
        <Team />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;