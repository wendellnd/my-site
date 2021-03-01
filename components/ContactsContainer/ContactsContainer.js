import Image from 'next/image';
import styles from './styles.module.css';

const ContactsContainer = ({ contactsInfo }) => {
  return (
    <div className={styles.contacts}>
      {contactsInfo.map((contactInfo, index) => (
        <a key={index} href={contactInfo.href} target="_blank">
          <Image src={contactInfo.iconSrc} width={35} height={35} />
        </a>
      ))}
    </div>
  );
};

export default ContactsContainer;
