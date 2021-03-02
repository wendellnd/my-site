import Header from '../components/Header';
import BackToTop from '../components/BackToTop';

import { useRef } from 'react';
import styles from '../css/about.module.css';

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

      <div ref={resumeRef} className={styles.resumeSection}>
        <h1>Resume</h1>
        <p>
          <h3>
            Hello, I’m Wendell Nascimento Dourado, I’m 17 years old, and I’m a
            web programmer starting the career.
          </h3>
        </p>

        <p>
          <h3>
            I’ve been studying since 15 years old, with courses and by myself,
            actually studying GoLang, MySQL and AWS. I’m currently working at
            Red Ventures company, inside the IQ’s startup sector.
          </h3>
        </p>
      </div>
      <div ref={journeyRef}></div>
      <div ref={skillSetRef}></div>
      <BackToTop />
    </>
  );
};

export default About;
