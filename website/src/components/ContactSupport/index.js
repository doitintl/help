import React from 'react';
import styles from './styles.module.css';

const ContactSupport = () => {
  return (
    <section className={styles.contact_container}>
      <div className={styles.contact}>
        <h1 className={styles.contact_title}>Get in touch</h1>
        <p>
          Our technical support team and cloud reliability engineers are
          standing by,{' '}
          <a href="https://www.doit-intl.com/stats/" target="_blank">
            24 hours a day
          </a>
        </p>
        <button href="#" className={styles.contact_button}>
          Open a ticket
        </button>
      </div>
    </section>
  );
};

export default ContactSupport;
