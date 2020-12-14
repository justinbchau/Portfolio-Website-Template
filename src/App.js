import React, { useState } from 'react';

import './App.css';

import Menu from './components/Menu';
import Header from './components/Header';
import Intro from './components/Intro';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <Menu isOpen={isOpen} />
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <Intro />
    </div>
  );
};

export default App;
