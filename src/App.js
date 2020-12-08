import React, { useState } from 'react';

import './App.css';

import Menu from './components/Menu';
import Header from './components/Header';
import Intro from './components/Intro';

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {isOpen && <Menu />}
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Intro />
    </div>
  );
};

export default App;
