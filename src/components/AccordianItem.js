import React from 'react';

import styles from '../styles/accordian.module.css';

const AccordianItem = ({ title, description, link }) => {
  return (
    <>
      <section className={styles.accordian}>
        <div className={styles.accordianItem}>
          <h1>{title}</h1>
          <div className={styles.accordianItemContent}>
            <br />
            <p>{description}</p>
            <br />
            <a href={link}>{link}</a>
          </div>
        </div>
      </section>
      <br />
    </>
  );
};

export default AccordianItem;
