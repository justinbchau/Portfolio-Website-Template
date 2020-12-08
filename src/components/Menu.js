import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../styles/menu.module.css';

const Menu = () => {
  return ReactDOM.createPortal(
    <div className={styles.menu}>
      <ul className={'mobile-header'}>
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
    </div>,
    document.querySelector('#modal')
  );
};

export default Menu;
