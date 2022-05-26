import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const ContactSupport = () => {
  return (
    <section className={styles.contact_support}>
      <div className="container">
        <div className="row">
          <div className={`col ${styles.contact_support_cta}`}>
            <h2>Talk to an expert</h2>
            <p>
              Our technical support team and cloud reliability engineers are
              available 24 hours a day.
              <wbr /> We publish our{' '}
              <Link to="https://doit-intl.com/stats/">live stats</Link> so
              you can see how we're doing.
            </p>
            <Link to="https://app.doit-intl.com/support">
              <button className="clean-btn button button--primary">
                OPEN A TICKET
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
