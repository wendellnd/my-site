import LanguageIcon from '../LanguageIcon';

import Image from 'next/image';
import styles from './styles.module.css';

const JourneyDiv = ({ content }) => {
  return (
    <>
      <div className={styles.journeyDiv}>
        <div className={styles.journeyDivIcon}>
          <Image src={content.icon} height={80} width={80} />
          <b>{content.title}</b>
        </div>
        <div className={styles.journeyDivContent}>
          {content.paragraphs.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
          <br></br>
          <p>{content.apprenticeship.title}</p>
          {content.apprenticeship.list.map((item) => (
            <LanguageIcon label={item.text} color={item.color} />
          ))}
        </div>
      </div>
      <div className={styles.journeyLine}></div>
    </>
  );
};

export default JourneyDiv;
