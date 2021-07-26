import styles from './styles.module.css';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
const BurguerStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '2rem',
    height: '1.8rem',
    right: '1.5rem',
    top: '1rem',
  },
  bmBurgerBars: {
    background: 'white',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenu: {
    background: '#1a1a1f',
    fontSize: '1.15rem',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: 'white',
    paddingTop: '2rem',
    paddingLeft: '0.8rem',
    paddingRight: '0.8rem',
    paddingBottom: '0',
    height: '2rem',
  },
  bmItem: {
    display: 'flex',
    marginBottom: '0.6rem',
    alignItems: 'center',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};
const Header = ({ options, shouldShowOptions = false }) => {
  return (
    <>
      {options && (
        <div className={styles.burger}>
          <Menu styles={BurguerStyles} right>
            {options &&
              options.map((option, index) => (
                <nav key={index}>
                  <Link href={option.link}>
                    <a>{option.label}</a>
                  </Link>
                </nav>
              ))}
          </Menu>
        </div>
      )}

      <header className={styles.header}>
        <Link href="/">
          <a className={styles.backToMenu}>
            WendellN<div className={styles.nas}>ascimento</div>D
            <div className={styles.dou}>ourado</div>
          </a>
        </Link>

        {options && shouldShowOptions && (
          <ul className={styles.list}>
            {options
              .filter((option) => !option.label.includes('Home'))
              .map((option, index) => (
                <li key={index}>
                  <Link href={option.link}>
                    <a>{option.label}</a>
                  </Link>
                </li>
              ))}
          </ul>
        )}
      </header>
    </>
  );
};

export default Header;
