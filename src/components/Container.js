import React from 'react';

import styles from '../styles/intro.module.css';

const Container = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export default Container;
