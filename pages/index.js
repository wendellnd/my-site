import Header from '../components/Header/Header'

import * as constants from '../commons/constants'
import styles from '../styles/home.module.css'

const Home = () => {
  return (
    <body className={styles.body}>
      <Header options={constants.options} />
    </body>
  )
}

export default Home
