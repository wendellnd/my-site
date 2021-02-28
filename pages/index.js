import Header from '../components/Header/Header'
import Image from 'next/image'
import { useState } from 'react'
import * as utils from '../utils/constants'
import styles from '../styles/home.module.css'

const Home = () => {
  const [speechIndex, setSpeechIndex] = useState(0)
  const speechs = [
    'Hello! if you’re here, I think you wanna know about me',
    'Fortunately,  I will share it with you ;)',
    'So, click here and let’s start!',
  ]

  const changeSpeech = () => {
    if (speechIndex < 2) {
      setSpeechIndex(speechIndex + 1)
    }
  }

  return (
    <body className={styles.body}>
      <Header options={utils.options} />

      <div className={styles.speechAlign}>
        <Image
          src="/speech-balloon_1.png"
          width={400}
          height={500}
          className={styles.me}
        />
        <div className={styles.speechBalloon}>
          <button onClick={changeSpeech}>
            <p>{speechs[speechIndex]}</p>
          </button>
        </div>
      </div>
    </body>
  )
}

export default Home
