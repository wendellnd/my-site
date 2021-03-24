import { useWindowScroll } from 'react-use';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

const BackToTop = () => {
  const { y: pageYOffset } = useWindowScroll();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    pageYOffset >= 250 ? setVisible(true) : setVisible(false);
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`${styles.backToTop} ${!visible ? styles.visibility : ''}`}
      onClick={scrollToTop}
    >
      <Image src="/arrow_up.svg" width={20} height={25} />
    </button>
  );
};

export default BackToTop;
