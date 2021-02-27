import styles from './styles.module.css'

const Header = ({options} = props) => {
  return (
    <header className={styles.header}>
      <div className={styles.menu}>WendellNascimentoDourado</div>
      <div>
        <ul className={styles.list}>
          {options.map((option, index) => (
            <li key={index}>
              <a href={option.link}>{option.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
