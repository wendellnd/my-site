import styles from './styles.module.css'
import Link from 'next/link'

const Header = ({ options }) => {
  return (
    <header className={styles.header}>
      <div className={styles.menu}>WendellNascimentoDourado</div>
      <div>
        <ul className={styles.list}>
          {options.map((option, index) => (
            <li key={index}>
              <Link href={option.link}>
                <a>{option.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
