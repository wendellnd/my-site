import Reveal from './Reveal';

const JourneyItem = ({ item, delay }) => (
  <Reveal delay={delay} className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-5">
    <div className="flex flex-col items-center">
      <span
        className="mt-[0.4375rem] h-[0.5625rem] w-[0.5625rem] flex-none rounded-full"
        style={{
          background: item.current ? 'var(--color-accent)' : '#595d6c',
          boxShadow: item.current ? '0 0 0.625rem var(--color-accent)' : 'none',
        }}
      />
      <span className="mt-1.5 w-px flex-1 bg-linear-to-b from-line to-transparent" />
    </div>

    <div className="flex flex-col gap-2 pb-8">
      <div className="flex flex-wrap items-baseline gap-3.5">
        <span className="text-[1.0625rem] font-medium">{item.org}</span>
        <span className="text-xs text-fg-dim">{item.period}</span>
      </div>

      {item.roles.length > 0 && (
        <div className="flex flex-col gap-1">
          {item.roles.map((role) => (
            <div
              key={role.title}
              className="flex flex-wrap gap-3.5 text-[0.8125rem]"
            >
              <span className="text-accent-light">{role.title}</span>
              {role.period && (
                <span className="text-fg-dim">{role.period}</span>
              )}
            </div>
          ))}
        </div>
      )}

      {item.text && (
        <p className="m-0 max-w-[38.75rem] text-pretty text-fg-muted">
          {item.text}
        </p>
      )}

      <div className="mt-0.5 flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-tag px-2.5 py-[0.1875rem] text-[0.6875rem] tracking-[.02em] text-tag-fg"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </Reveal>
);

const Journey = ({ groups }) => (
  <div className="-mt-2 flex flex-col gap-2">
    {groups.map((group) => (
      <div key={group.label} className="mt-2 flex flex-col gap-4">
        <div className="flex items-center gap-3 text-[0.8125rem] text-fg-dim">
          {group.label}
          <span className="rule-trail h-px flex-1" />
        </div>
        <div className="flex flex-col">
          {group.items.map((item, index) => (
            <JourneyItem key={item.org} item={item} delay={index * 90} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Journey;
