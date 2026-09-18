'use client';

import { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Section from './Section';
import Rule from './Rule';
import Skills from './Skills';
import Journey from './Journey';
import Contact from './Contact';
import { getContent } from '@/lib/content';

const Site = () => {
  const [lang, setLang] = useState('en');
  const { t, skills, groups } = getContent(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-dvh bg-surface">
      <Header t={t} lang={lang} onLangChange={setLang} />

      <main>
        <Hero t={t} />
        <Rule />

        <Section id="about" title={t.nav.about}>
          <div className="flex max-w-[680px] flex-col gap-3.5">
            <p className="m-0 text-[17px] text-pretty text-fg">{t.about1}</p>
            <p className="m-0 text-[17px] text-pretty text-fg-muted">
              {t.about2}
            </p>
          </div>
        </Section>
        <Rule />

        <Section id="skills" title={t.nav.skills} note={t.skillsNote}>
          <Skills t={t} skills={skills} />
        </Section>
        <Rule />

        <Section id="journey" title={t.nav.journey}>
          <Journey groups={groups} />
        </Section>
        <Rule />

        <Section id="contact" title={t.nav.contact} className="pb-20">
          <Contact t={t} />
        </Section>
      </main>
    </div>
  );
};

export default Site;
