import React from 'react';

import styles from '../styles/about.module.css';

const About = ({ Copy }) => {
  return (
    <div id='about' className={styles.section}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.aboutMe}>{Copy}</p>
    </div>
  );
};

export default About;
