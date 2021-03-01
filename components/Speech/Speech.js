import Image from 'next/image';
import { useState } from 'react';
import { speechs } from '../../utils/constants';
import styles from './styles.module.css';

const Speech = () => {
  const [speechIndex, setSpeechIndex] = useState(0);

  const changeSpeech = () => {
    if (speechIndex < 2) {
      setSpeechIndex(speechIndex + 1);
    }
  };
  return (
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
  );
};

export default Speech;
