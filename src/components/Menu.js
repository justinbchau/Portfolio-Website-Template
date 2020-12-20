import React from 'react';
import useWindowSize from '../hooks/useWindowSize';

import styles from '../styles/menu.module.css';

const Menu = ({ isOpen }) => {
  const appliedStyles = isOpen
    ? styles.show + ' ' + styles.menu
    : styles.exit + ' ' + styles.menu;

  const size = useWindowSize();

  const fadeStyles = isOpen ? 'mobile-header fadeIn' : 'mobile-header';
  return (
    <>
      {size.width < 1025 && (
        <div className={appliedStyles}>
          <ul className={fadeStyles}>
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
        </div>
      )}
    </>
  );
};

export default Menu;
