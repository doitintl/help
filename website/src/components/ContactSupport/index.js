import React from 'react';
import styles from './styles.module.css';

const ContactSupport = () => {
  return (
    <section className={styles.contact_support}>
      <div className="container">
        <div className="row">
          <div className={`col ${styles.contact_support_cta}`}>
            <h1>Get in touch</h1>
            <p>
              Our technical support team and cloud reliability engineers are
              standing by,{' '}
              <a href="https://doit-intl.com/stats/" target="_blank">
                24 hours a day
              </a>
            </p>
            <p>
              <a href="https://app.doit-intl.com/support" target="_blank">
                <button className={styles.contact_button}>
                  Open a ticket
                </button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
