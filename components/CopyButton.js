'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from '@phosphor-icons/react';
import { EMAIL } from '@/lib/content';

const CopyButton = ({ t }) => {
  const [copied, setCopied] = useState(false);
  const timeout = useRef(null);

  useEffect(() => () => clearTimeout(timeout.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* clipboard blocked — still flash the confirmation */
    }
    setCopied(true);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={t.copy}
      className={`inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border border-[rgba(233,233,237,.16)] bg-transparent px-2.5 text-xs font-medium transition-colors hover:bg-[rgba(233,233,237,.07)] ${
        copied ? 'text-accent' : 'text-fg-soft'
      }`}
    >
      {copied ? <Check size="1em" /> : <Copy size="1em" />}
      {copied ? t.copied : t.copy}
    </button>
  );
};

export default CopyButton;
