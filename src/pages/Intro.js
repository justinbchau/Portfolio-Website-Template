import React from 'react';

import styles from '../styles/intro.module.css';

const Intro = ({ Name }) => {
  return (
    <div className={styles.content}>
      <h1>Hi 👋🏼</h1>
      <h1>
        I'm <span>{Name}</span>,
      </h1>

      <div className='fadeIn'>
        <h2>
          A <span>Web Developer</span> & <span>UI Designer</span>
        </h2>
      </div>
    </div>
  );
};

export default Intro;
