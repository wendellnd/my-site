'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  DownloadSimple,
  GithubLogo,
  LinkedinLogo,
} from '@phosphor-icons/react';
import wendell from '@/public/wendell.jpg';
import { GITHUB, LINKEDIN, NAME } from '@/lib/content';

const outlineLink =
  'inline-flex items-center gap-1.5 rounded-lg border border-[rgba(233,233,237,.16)] px-3.5 py-2 text-sm font-medium text-fg no-underline transition-colors hover:bg-[rgba(233,233,237,.07)]';

const Hero = ({ t }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  // A cached image is already complete by the time React hydrates, so onLoad
  // never fires and the photo would stay faded out.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <section id="top">
      <div className="shell grid gap-12 pt-16 pb-16 lg:grid-cols-[16.25rem_minmax(0,1fr)] lg:items-center lg:pt-24 lg:pb-22">
        <div
          className="rise relative h-[12.5rem] w-[12.5rem] overflow-hidden rounded-[0.875rem] shadow-[0_0_0_1px_var(--color-line)] sm:h-[16.25rem] sm:w-[16.25rem]"
          style={{ animationDelay: '120ms' }}
        >
          <Image
            ref={imgRef}
            src={wendell}
            alt={NAME}
            placeholder="blur"
            priority
            sizes="(min-width: 640px) 16.25rem, 12.5rem"
            data-loaded={loaded || undefined}
            onLoad={() => setLoaded(true)}
            className="photo h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-[1.375rem]">
          <p
            className="rise m-0 text-[0.8125rem] tracking-[.1em] text-accent uppercase"
            style={{ animationDelay: '0ms' }}
          >
            {t.role}
          </p>
          <h1
            className="rise m-0 max-w-[56.25rem] text-[2.5rem] leading-[1.02] font-medium tracking-[-.025em] sm:text-[3.5rem] lg:text-[4.5rem]"
            style={{ animationDelay: '80ms' }}
          >
            {NAME}
          </h1>
          <p
            className="rise m-0 max-w-[40rem] text-lg leading-[1.45] text-pretty text-fg-muted sm:text-xl"
            style={{ animationDelay: '160ms' }}
          >
            {t.lead}
          </p>

          <div
            className="rise mt-2 flex flex-wrap gap-2"
            style={{ animationDelay: '240ms' }}
          >
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg border border-accent px-3.5 py-2 text-sm font-medium text-accent no-underline transition-colors hover:bg-[rgba(145,132,217,.12)]"
            >
              <DownloadSimple size="1em" />
              {t.resume}
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className={outlineLink}
            >
              <GithubLogo size="1em" />
              GitHub
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className={outlineLink}
            >
              <LinkedinLogo size="1em" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
