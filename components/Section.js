/* The 16.25rem + content grid every section below the hero sits on. */
const Section = ({ id, title, note, className = '', children }) => (
  <section id={id}>
    <div
      className={`shell grid gap-12 py-16 lg:grid-cols-[16.25rem_minmax(0,1fr)] ${className}`}
    >
      <div>
        <h2 className="m-0 pt-1.5 text-[0.8125rem] font-medium tracking-[.1em] text-accent uppercase">
          {title}
        </h2>
        {note && (
          <p className="m-0 mt-2 max-w-[12.5rem] text-[0.8125rem] text-fg-dim">
            {note}
          </p>
        )}
      </div>
      {children}
    </div>
  </section>
);

export default Section;
