import React from 'react';
import styles from './styles.module.css';

const ContactSupport = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.contact_title}>Contact support</h1>
      <p>
        If you need additional support, one of our knowledgeble support team
        will be happy to assist.
      </p>
      <button href="#" className={styles.contact_button}>
        raise a ticket
      </button>
    </div>
  );
};

export default ContactSupport;
