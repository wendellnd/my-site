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
          {content.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <br></br>
          <p>{content.apprenticeship.title}</p>
          <div className={styles.languagesContainer}>
            {content.apprenticeship.list.map((item, index) => (
              <LanguageIcon key={index} label={item.text} color={item.color} />
            ))}
          </div>
          {content.project && (
            <div className={styles.project}>
              <br></br>
              <p>{content.project.title}</p>

              <Image src={content.project.icon} height={80} width={80} />
            </div>
          )}
        </div>
        <br></br>
      </div>
      <div className={styles.journeyLine}></div>
    </>
  );
};

export default JourneyDiv;
