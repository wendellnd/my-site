import Header from '../components/Header/Header'
import Image from 'next/image'
import {useState} from 'react'
import * as utils from '../utils/constants'
import styles from '../styles/home.module.css'

const Home = () => {
  const [speechIndex, setSpeechIndex] = useState(0)
  const speechs = ['Hello! if you’re here, I think you wanna know about me','Fortunately,  I will share it with you ;)','So, click here and let’s start!'
  ]

  const changeSpeech = () => {
    if(speechIndex < 2){
      setSpeechIndex(speechIndex+1) 
    }
  }

  return (
    <body className={styles.body}>
      <Header options={utils.options} />
      <Image 
        src='/speech-balloon_1.png'
        width={500}
        height={500}
      />

      <div className={styles.speechBalloon}>
        <button onClick={changeSpeech}>
        </button>
        <p>{speechs[speechIndex]}</p>
      </div>
    </body>
  )
}

export default Home
