const row =
  'grid grid-cols-[1fr_auto] gap-4 lg:grid-cols-[160px_90px_minmax(0,1fr)]';

const Skills = ({ t, skills }) => (
  <div className="flex flex-col text-sm">
    <div
      className={`${row} rule-under px-2 pb-2 text-[11px] tracking-[.08em] text-fg-dim uppercase`}
    >
      <span>{t.th.skill}</span>
      <span>{t.th.exp}</span>
      <span className="hidden lg:block">{t.th.where}</span>
    </div>

    {skills.map((skill) => (
      <div
        key={skill.name}
        className={`${row} rule-under-soft items-center px-2 py-3.5 transition-colors hover:bg-[rgba(233,233,237,.04)]`}
      >
        <span className="text-base font-medium">{skill.name}</span>
        <span className="text-fg-muted">{skill.years}</span>
        <span className="col-span-2 text-fg-muted lg:col-span-1">
          {skill.where}
          {skill.note && <span className="text-fg-dim"> · {skill.note}</span>}
        </span>
      </div>
    ))}
  </div>
);

export default Skills;
