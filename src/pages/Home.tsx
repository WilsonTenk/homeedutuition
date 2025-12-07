
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Process from '../components/Process';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Quote from '../components/Quote';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <About />
      <Process />
      <Testimonials />
      <Blog />
      <Quote />
      <Contact />
    </>
  );
};

export default Home;
