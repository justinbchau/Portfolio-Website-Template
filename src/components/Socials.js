import React from 'react';
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Github,
} from '@icons-pack/react-simple-icons';

import { socialLinks } from '../data/info';

import styles from '../styles/socials.module.css';

const Socials = () => {
  const { instagram, github, youtube, twitter, linkedin } = socialLinks;
  return (
    <div className={styles.socials}>
      <a rel='noreferrer' href={instagram} target='blank'>
        <Instagram color='#E4405F' size={35} />
      </a>
      <a rel='noreferrer' href={twitter} target='blank'>
        <Twitter color='#1DA1F2' size={35} />
      </a>
      <a rel='noreferrer' href={linkedin} target='blank'>
        <Linkedin color='#0077B5' size={35} />
      </a>
      <a rel='noreferrer' href={youtube} target='blank'>
        <Youtube color='#FF0000' size={35} />
      </a>
      <a rel='noreferrer' href={github} target='blank'>
        <Github color='#000' size={35} />
      </a>
    </div>
  );
};

export default Socials;
