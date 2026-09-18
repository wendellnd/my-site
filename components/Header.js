import LangToggle from './LangToggle';

const Header = ({ t, lang, onLangChange }) => (
  <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md">
    <div className="shell flex items-center gap-7 py-[1.375rem] text-sm">
      <a
        href="#top"
        className="mr-auto text-base font-medium text-fg no-underline transition-colors hover:text-accent"
      >
        WND
      </a>

      <nav className="hidden items-center gap-7 md:flex">
        {[
          ['about', t.nav.about],
          ['skills', t.nav.skills],
          ['journey', t.nav.journey],
          ['contact', t.nav.contact],
        ].map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-fg no-underline transition-colors hover:text-accent"
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="md:ml-3">
        <LangToggle lang={lang} onChange={onLangChange} />
      </div>
    </div>
  </header>
);

export default Header;
