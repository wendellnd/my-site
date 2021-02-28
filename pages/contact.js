import Header from '../components/Header/Header';
import Image from 'next/image';
import styles from '../css/contact.module.css';

const Contact = () => {
  return (
    <>
      <Header />

      <div className={styles.content}>
        <b>wendelldourado.wn@gmail.com</b>
        <hr></hr>

        <div className={styles.contacts}>
          <a href="https://github.com/wendellnd" target="_blank">
            <Image src="/github-icon.svg" width={35} height={35} />
          </a>

          <a
            href="https://www.linkedin.com/in/wendell-nascimento-0760a3202/"
            target="_blank"
          >
            <Image src="/linkedin-icon.svg" width={35} height={35} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
