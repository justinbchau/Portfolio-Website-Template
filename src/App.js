import React, { useState } from 'react';

import './App.css';

import Menu from './components/Menu';
import Header from './components/Header';
import Intro from './pages/Intro';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='relative'>
        <Menu isOpen={isOpen} />
        <Header Name='Sarah' isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <Intro Name='Sarah' />
      <About />
      <Projects />
      <Footer email='hello@sarahevans.com' />
    </div>
  );
};

export default App;
