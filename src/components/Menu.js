import React from 'react';

import styles from '../styles/menu.module.css';

const Menu = ({ isOpen }) => {
  const appliedStyles = isOpen
    ? styles.show + ' ' + styles.menu
    : styles.exit + ' ' + styles.menu;

  const fadeStyles = isOpen ? 'mobile-header fadeIn' : 'mobile-header';
  return (
    <div className={appliedStyles}>
      <ul className={fadeStyles}>
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
    </div>
  );
};

export default Menu;
