import Header from '../components/Header/Header'

import * as utils from '../utils/constants'
import styles from '../styles/home.module.css'

const Home = () => {
  return (
    <body className={styles.body}>
      <Header options={utils.options} />
    </body>
  )
}

export default Home
