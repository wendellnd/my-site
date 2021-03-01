import Header from '../components/Header/Header';
import ContactsContainer from '../components/ContactsContainer/ContactsContainer';
import styles from '../css/contact.module.css';
import { contactsInfo } from '../utils/constants';

const Contact = () => {
  return (
    <>
      <Header />

      <div className={styles.content}>
        <b>wendelldourado.wn@gmail.com</b>
        <hr></hr>

        <ContactsContainer contactsInfo={contactsInfo} />
      </div>
    </>
  );
};

export default Contact;
