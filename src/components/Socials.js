import React from 'react';
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Github,
} from '@icons-pack/react-simple-icons';

import styles from '../styles/socials.module.css';

const Socials = () => {
  return (
    <div className={styles.socials}>
      <a
        rel='noreferrer'
        href='https://instagram.com/chau_codes'
        target='blank'
      >
        <Instagram color='#E4405F' size={35} />
      </a>
      <a
        rel='noreferrer'
        href='https://instagram.com/chau_codes'
        target='blank'
      >
        <Twitter color='#1DA1F2' size={35} />
      </a>
      <a
        rel='noreferrer'
        href='https://instagram.com/chau_codes'
        target='blank'
      >
        <Linkedin color='#0077B5' size={35} />
      </a>
      <a
        rel='noreferrer'
        href='https://instagram.com/chau_codes'
        target='blank'
      >
        <Youtube color='#FF0000' size={35} />
      </a>
      <a
        rel='noreferrer'
        href='https://instagram.com/chau_codes'
        target='blank'
      >
        <Github color='#000' size={35} />
      </a>
    </div>
  );
};

export default Socials;
