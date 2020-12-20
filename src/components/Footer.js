import React from 'react';

import styles from '../styles/footer.module.css';
import Socials from './Socials';

const Footer = ({ email }) => {
  return (
    <footer id='contact' className={styles.footer}>
      <div>
        <h1>Contact Me</h1>
        <div className='flex flex-jc-c email'>
          <a href='mailto:#'>{email}</a>
        </div>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
