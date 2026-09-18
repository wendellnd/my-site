import CopyButton from './CopyButton';
import { EMAIL, GITHUB, LINKEDIN } from '@/lib/content';

const Contact = ({ t }) => (
  <div className="flex flex-col items-start gap-4">
    <div className="flex flex-wrap items-center gap-2.5">
      <a
        href={`mailto:${EMAIL}`}
        className="text-[22px] font-medium tracking-[-.01em] break-all text-fg no-underline transition-colors hover:text-accent-hover"
      >
        {EMAIL}
      </a>
      <CopyButton t={t} />
    </div>

    <div className="flex gap-5 text-sm">
      <a
        href={GITHUB}
        target="_blank"
        rel="noreferrer"
        className="text-accent underline-offset-[3px] transition-colors hover:text-accent-hover"
      >
        GitHub
      </a>
      <a
        href={LINKEDIN}
        target="_blank"
        rel="noreferrer"
        className="text-accent underline-offset-[3px] transition-colors hover:text-accent-hover"
      >
        LinkedIn
      </a>
    </div>

    <p className="m-0 text-[13px] text-fg-dim">{t.footer}</p>
  </div>
);

export default Contact;
