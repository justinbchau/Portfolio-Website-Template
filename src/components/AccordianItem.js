import React from 'react';

import styles from '../styles/accordian.module.css';

const AccordianItem = () => {
  return (
    <section className={styles.accordian}>
      <div className={styles.accordianItem}>
        <h1>Title</h1>
        <div className={styles.accordianItemContent}>
          <p>content</p>
        </div>
      </div>
    </section>
  );
};

export default AccordianItem;
