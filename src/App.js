import React, { useState } from 'react';

import './App.css';

import Menu from './components/Menu';
import Header from './components/Header';
import Intro from './pages/Intro';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';

import { info } from './data/info';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='relative'>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        <Header Name={info.name} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <Intro Name={info.name} />
      <About Copy={info.copy} />
      <Projects />
      <Footer email={info.email} />
    </div>
  );
};

export default App;
