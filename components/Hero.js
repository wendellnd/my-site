import Image from 'next/image';
import {
  DownloadSimple,
  GithubLogo,
  LinkedinLogo,
} from '@phosphor-icons/react';
import { GITHUB, LINKEDIN, NAME } from '@/lib/content';

const outlineLink =
  'inline-flex items-center gap-1.5 rounded-lg border border-[rgba(233,233,237,.16)] px-3.5 py-2 text-sm font-medium text-fg no-underline transition-colors hover:bg-[rgba(233,233,237,.07)]';

const Hero = ({ t }) => (
  <section id="top">
    <div className="shell grid gap-12 pt-16 pb-16 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-center lg:pt-24 lg:pb-22">
      <Image
        src="/wendell.jpg"
        alt={NAME}
        width={260}
        height={260}
        priority
        className="h-[200px] w-[200px] rounded-[14px] object-cover shadow-[0_0_0_1px_var(--color-line)] sm:h-[260px] sm:w-[260px]"
      />

      <div className="flex flex-col gap-[22px]">
        <p className="m-0 text-[13px] tracking-[.1em] text-accent uppercase">
          {t.role}
        </p>
        <h1 className="m-0 max-w-[900px] text-[40px] leading-[1.02] font-medium tracking-[-.025em] sm:text-[56px] lg:text-[72px]">
          {NAME}
        </h1>
        <p className="m-0 max-w-[640px] text-lg leading-[1.45] text-pretty text-fg-muted sm:text-xl">
          {t.lead}
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-1.5 rounded-lg border border-accent px-3.5 py-2 text-sm font-medium text-accent no-underline transition-colors hover:bg-[rgba(145,132,217,.12)]"
          >
            <DownloadSimple size={16} />
            {t.resume}
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className={outlineLink}
          >
            <GithubLogo size={16} />
            GitHub
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className={outlineLink}
          >
            <LinkedinLogo size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
