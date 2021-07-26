import Image from 'next/image';

import Header from '../components/Header';
import ContactsContainer from '../components/ContactsContainer';
import styles from '../css/contact.module.css';
import { email, contactsInfo, options } from '../utils/constants';

const Contact = () => {
  return (
    <>
      <Header options={options} />
      <div className={styles.content}>
        <div className={styles.me}>
          <Image src="/me.gif" width={250} height={250} />
        </div>
        <b>{email}</b>
        <hr></hr>

        <ContactsContainer contactsInfo={contactsInfo} />
      </div>
    </>
  );
};

export default Contact;
