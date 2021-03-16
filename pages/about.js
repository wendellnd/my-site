import Header from '../components/Header';
import JourneyDiv from '../components/JourneyDiv';
import Sticky from '../components/Sticky';
import BackToTop from '../components/BackToTop';

import { useRef } from 'react';
import styles from '../css/about.module.css';
import {
  resumeContent,
  journeyContent,
  skillSetContent,
} from '../utils/constants';

const About = () => {
  /*
 I don't know why,
 but I can't just put a param named "ref" in a function
 and just call one function named scrollToSection
 */
  const resumeRef = useRef(null);
  const scrollToResume = () =>
    window.scrollTo({ top: resumeRef.current.offsetTop, behavior: 'smooth' });

  const journeyRef = useRef(null);
  const scrollToJourney = () =>
    window.scrollTo({ top: journeyRef.current.offsetTop, behavior: 'smooth' });

  const skillSetRef = useRef(null);
  const scrollToSkillSet = () =>
    window.scrollTo({ top: skillSetRef.current.offsetTop, behavior: 'smooth' });

  return (
    <>
      <Header />
      <div className={styles.about}>
        <h1>About me</h1>
        <hr></hr>
        <div className={styles.aboutOptions}>
          <div>
            <button onClick={scrollToResume}>Resume</button>
          </div>
          <div>
            <button onClick={scrollToJourney}>Journey</button>
          </div>
          <div>
            <button onClick={scrollToSkillSet}>Skill Set</button>
          </div>
        </div>
      </div>

      <div className={styles.sectionsContainer}>
        <div ref={resumeRef} className={styles.resumeSection}>
          <h1>Resume</h1>
          {resumeContent.map((paragraph, index) => (
            <div key={index}>
              <p key={index}>{paragraph}</p>
            </div>
          ))}
        </div>

        <div ref={journeyRef} className={styles.journeySection}>
          <h1>Journey</h1>
          {journeyContent.map((content, index) => (
            <div key={index}>
              <JourneyDiv content={content} />
            </div>
          ))}
        </div>

        <div ref={skillSetRef} className={styles.skillSetSection}>
          <h1>Skill Set</h1>
          <div className={styles.stickyContainer}>
            {skillSetContent.map((skillSet, index) => (
              <div key={index}>
                <Sticky content={skillSet} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default About;
