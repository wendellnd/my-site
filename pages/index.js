import Header from '../components/Header/Header'
import Speech from '../components/Speech/Speech'
import * as utils from '../utils/constants'
import styles from '../styles/home.module.css'

const Home = () => {

  return (
    <body className={styles.body}>
      <Header options={utils.options} />

      <Speech />
    </body>
  )
}

export default Home
