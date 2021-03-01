import styles from './styles.module.css';
import Image from 'next/image';

const BackToTop = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button className={styles.backToTop} onClick={scrollToTop}>
      <Image src="/arrow_up.svg" width={20} height={25} />
    </button>
  );
};

export default BackToTop;
