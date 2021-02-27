import Header from '../components/Header/Header'

import styles from '../styles/home.module.css'

const Home = () => {
  const options = [
    {
      label: 'Contact me',
      link: 'https://github.com',
    },
    {
      label: 'About me',
      link: 'https://github.com',
    },
  ]
  return (
    <body className={styles.body}>
      <Header options={options} />
    </body>
  )
}

export default Home
