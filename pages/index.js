import Header from '../components/Header/Header'

import styles from '../styles/home.module.css'

const Home = () => {
  const options = [
    {
      label: 'Contact me',
      link: '/contact',
    },
    {
      label: 'About me',
      link: '/about',
    },
  ]
  return (
    <body className={styles.body}>
      <Header options={options} />
    </body>
  )
}

export default Home
