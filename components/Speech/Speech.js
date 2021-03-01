import Image from 'next/image';
import { useState } from 'react';
import { speechs } from '../../utils/constants';
import styles from './styles.module.css';

const Speech = () => {
  const [speechIndex, setSpeechIndex] = useState(0);

  const changeSpeech = () => {
    if (speechIndex < speechs.length - 1) {
      setSpeechIndex(speechIndex + 1);
    }
  };
  return (
    <div className={styles.speechAlign}>
      <div className={styles.me}>
        <Image src="/speech-balloon_1.png" width={400} height={400} />
      </div>
      <div className={styles.speechBalloon}>
        <Image
          src="/speech-balloon_g.gif"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className={styles.ImageBalloon}
        />
        <button onClick={changeSpeech}>
          <p>{speechs[speechIndex]}</p>
        </button>
      </div>
    </div>
  );
};

export default Speech;
