import Header from '../components/Header';
import ContactsContainer from '../components/ContactsContainer';
import styles from '../css/contact.module.css';
import { email, contactsInfo } from '../utils/constants';

const Contact = () => {
  return (
    <>
      <Header />

      <div className={styles.content}>
        <b>{email}</b>
        <hr></hr>

        <ContactsContainer contactsInfo={contactsInfo} />
      </div>
    </>
  );
};

export default Contact;
