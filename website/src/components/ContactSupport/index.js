import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

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
              <Link to="https://doit-intl.com/stats/">24 hours a day</Link>
            </p>
            <p>
              <Link to="https://app.doit-intl.com/support">
                <button className={styles.contact_button}>
                  Open a ticket
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
