import React from 'react';

import styles from '../styles/footer.module.css';
import Socials from './Socials';

const Footer = ({ email }) => {
  return (
    <footer id='contact' className={styles.footer}>
      <div>
        <h1>Contact Me</h1>
        <p>{email}</p>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
