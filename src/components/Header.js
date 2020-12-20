import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';

import useWindowSize from '../hooks/useWindowSize';

import '../styles/header.css';

const Header = ({ isOpen, setIsOpen, Name }) => {
  // Click handler function
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const size = useWindowSize();

  return (
    <header>
      <nav id='outer-container' className='flex flex-jc-sb'>
        <h1 className='header'>{Name}</h1>
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
              animationDuration={0.4}
              className='burger'
            />
          </div>
        )}
        {size.width > 1025 && (
          <ul className={'desktop-menu'}>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
