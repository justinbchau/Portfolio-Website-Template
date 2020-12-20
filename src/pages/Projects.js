import React from 'react';
import Accordian from '../components/Accordian';

import styles from '../styles/projects.module.css';

const Projects = () => {
  return (
    <div id='projects' className={styles.section}>
      <h1 className={styles.title}>Projects</h1>
      <div>
        <Accordian />
      </div>
    </div>
  );
};

export default Projects;
