import styles from './styles.module.css';
import Link from 'next/link';

const Header = ({ options }) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.backToMenu}>
          WendellN<div className={styles.nas}>ascimento</div>D
          <div className={styles.dou}>ourado</div>
        </a>
      </Link>

      <ul className={styles.list}>
        {options &&
          options.map((option, index) => (
            <li key={index}>
              <Link href={option.link}>
                <a>{option.label}</a>
              </Link>
            </li>
          ))}
      </ul>
    </header>
  );
};

export default Header;
