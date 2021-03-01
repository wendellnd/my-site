import styles from './styles.module.css';
import Link from 'next/link';

const Header = ({ options, isAboutPage }) => {
  return (
    <header className={styles.headerBody}>
      <div className={styles.header}>
        <Link href="/">
          <a className={styles.backToMenu}>
            WendellN<div className={styles.nas}>ascimento</div>D
            <div className={styles.dou}>ourado</div>
          </a>
        </Link>
        <div>
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
        </div>
      </div>
      {isAboutPage && (
        <div className={styles.about}>
          <h1>About me</h1>
          <hr></hr>
          <div className={styles.aboutOptions}>
            <div>
              <h3>Resume</h3>
            </div>
            <div>
              <h3>Journey</h3>
            </div>
            <div>
              <h3>Actual Skill Set</h3>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
