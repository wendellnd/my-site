const LangToggle = ({ lang, onChange, size = 'sm' }) => {
  const padding =
    size === 'sm'
      ? 'px-[0.6875rem] py-[0.3125rem] text-xs'
      : 'px-3 py-1.5 text-[0.8125rem]';

  const buttonClass = (value) =>
    [
      padding,
      'cursor-pointer border-0 bg-transparent transition-colors',
      value === lang
        ? 'text-accent shadow-[inset_0_0_0_1px_var(--color-accent)]'
        : 'text-fg-dim hover:text-fg',
    ].join(' ');

  return (
    <div className="inline-flex overflow-hidden rounded-lg border border-[rgba(233,233,237,.16)]">
      <button
        type="button"
        onClick={() => onChange('en')}
        aria-pressed={lang === 'en'}
        className={buttonClass('en')}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onChange('pt')}
        aria-pressed={lang === 'pt'}
        className={`${buttonClass('pt')} border-l border-[rgba(233,233,237,.16)]`}
      >
        PT
      </button>
    </div>
  );
};

export default LangToggle;
