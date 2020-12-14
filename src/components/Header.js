import React, { useState, useEffect } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

import '../styles/header.css';
import Menu from './Menu';

const Header = ({ isOpen, setIsOpen }) => {
  //New Hook for resizing
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      //   height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          //   height: window.innerHeight,
        });
      }
      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
  }

  // Click handler function
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const size = useWindowSize();

  return (
    <header>
      <nav id='outer-container' className='flex flex-jc-sb'>
        <h1 id='page-wrap'>Sarah</h1>
        {/* Checking to see if size is less than 1025px */}
        {size.width < 1025 && (
          <div>
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={handleClick}
              width={25}
              height={20}
              strokeWidth={1}
              rotate={0}
              color='black'
              borderRadius={0}
              animationDuration={0.5}
              className='burger'
            />
          </div>
        )}
        <ul className={'hidden mobile-header'}>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Projects</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
