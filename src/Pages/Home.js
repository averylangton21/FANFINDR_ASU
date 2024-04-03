import React, { useState } from 'react'
import Hero from '../Components/Hero/Hero';
import Navbar from '../Components/Navbar/Navbar';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <Contact />
    </>
  );
}

export default Home;