export const EMAIL = 'wendelldourado.wn@gmail.com';
export const GITHUB = 'https://github.com/wendellnd';
export const LINKEDIN =
  'https://www.linkedin.com/in/wendell-nascimento-dourado-0760a3202/';
export const NAME = 'Wendell Dourado';

export const LANGS = ['en', 'pt'];

const copy = {
  pt: {
    role: 'Engenheiro de Software · Consumidor Positivo',
    nav: {
      about: 'Sobre',
      skills: 'Skills',
      journey: 'Jornada',
      contact: 'Contato',
    },
    lead: 'Engenheiro de Software pleno na Consumidor Positivo, focado em backend: GoLang, AWS, Serverless e Kubernetes.',
    about1:
      'Tenho 23 anos e programo desde os 15, quando descobri a área no curso técnico do CEAP. Entrei na Red Ventures como estagiário em 2020 e hoje trabalho na plataforma interna de engajamento da Consumidor Positivo.',
    about2:
      'Cursando Análise e Desenvolvimento de Sistemas na FIAP, com pós-graduação Go Expert pela Full Cycle. Sempre buscando aprender.',
    resume: 'Baixar currículo',
    skillsNote: 'Tempo de experiência e onde usei cada uma.',
    th: { skill: 'Skill', exp: 'Exp.', where: 'Onde usei' },
    footer: 'São Paulo, Brasil · Aberto a conversas sobre backend e Go.',
    copy: 'Copiar',
    copied: 'Copiado',
  },
  en: {
    role: 'Software Engineer · Consumidor Positivo',
    nav: {
      about: 'About',
      skills: 'Skills',
      journey: 'Journey',
      contact: 'Contact',
    },
    lead: 'Mid-level developer at Consumidor Positivo, focused on backend: GoLang, AWS, Serverless and Kubernetes.',
    about1:
      "I'm 23 and have been coding since 15, when I found the field in CEAP's technical course. I joined Red Ventures as an intern in 2020 and now work on the internal customer engagement platform at Consumidor Positivo.",
    about2:
      'Studying Systems Analysis and Development at FIAP, with a Go Expert postgraduate from Full Cycle. Always learning.',
    resume: 'Download resume',
    skillsNote: 'Years of experience and where I used each one.',
    th: { skill: 'Skill', exp: 'Exp.', where: 'Where I used it' },
    footer: 'São Paulo, Brazil · Open to conversations about backend and Go.',
    copy: 'Copy',
    copied: 'Copied',
  },
};

const skillsData = [
  {
    name: 'GoLang',
    years: 6,
    where: 'Consumidor Positivo, Red Ventures, Full Cycle (Go Expert)',
  },
  {
    name: 'Serverless',
    years: 6,
    where: 'Consumidor Positivo, Red Ventures',
    note: 'Lambda, DynamoDB, SQS',
  },
  { name: 'AWS', years: 6, where: 'Consumidor Positivo, Red Ventures' },
  {
    name: 'MySQL',
    years: 3,
    where: 'Consumidor Positivo, Red Ventures, FIAP, CEAP',
  },
  { name: 'Kubernetes', years: 2, where: 'Consumidor Positivo' },
];

const journeyData = {
  pt: [
    {
      org: 'Consumidor Positivo',
      period: 'jul 2023 – atual · 3 anos 3 meses · São Paulo, híbrido',
      roles: [
        {
          title: 'Engenheiro de Software',
          period: 'jan 2025 – atual · 1 ano 9 meses',
        },
        {
          title: 'Engenheiro de Software Júnior',
          period: 'jul 2023 – jan 2025 · 1 ano 7 meses',
        },
      ],
      text: 'O iq foi vendido pela Red Ventures e renomeado Consumidor Positivo. Trabalho na plataforma interna de engajamento do cliente.',
      tags: [
        'GoLang',
        'AWS',
        'Serverless',
        'MySQL',
        'DynamoDB',
        'SQS',
        'Kubernetes',
      ],
      current: true,
    },
    {
      org: 'Red Ventures',
      period: 'ago 2020 – jul 2023 · 3 anos · São Paulo',
      roles: [
        {
          title: 'Engenheiro de Software Júnior',
          period: 'dez 2021 – jul 2023 · 1 ano 8 meses',
        },
        {
          title: 'Engenheiro de Software Assistente',
          period: 'jan 2021 – dez 2021 · 1 ano',
        },
        { title: 'Estagiário', period: 'ago 2020 – dez 2020 · 5 meses' },
      ],
      text: 'Início da carreira no setor de startups (iq), com NodeJS, Go, AWS e Serverless Framework.',
      tags: ['GoLang', 'NodeJS', 'MySQL', 'AWS', 'Serverless Framework'],
    },
  ],
  en: [
    {
      org: 'Consumidor Positivo',
      period: 'Jul 2023 – present · 3 yrs 3 mos · São Paulo, hybrid',
      roles: [
        {
          title: 'Software Engineer',
          period: 'Jan 2025 – present · 1 yr 9 mos',
        },
        {
          title: 'Junior Software Engineer',
          period: 'Jul 2023 – Jan 2025 · 1 yr 7 mos',
        },
      ],
      text: 'iq was sold by Red Ventures and renamed Consumidor Positivo. I work on the internal customer engagement platform.',
      tags: [
        'GoLang',
        'AWS',
        'Serverless',
        'MySQL',
        'DynamoDB',
        'SQS',
        'Kubernetes',
      ],
      current: true,
    },
    {
      org: 'Red Ventures',
      period: 'Aug 2020 – Jul 2023 · 3 yrs · São Paulo',
      roles: [
        {
          title: 'Junior Software Engineer',
          period: 'Dec 2021 – Jul 2023 · 1 yr 8 mos',
        },
        {
          title: 'Assistant Software Engineer',
          period: 'Jan 2021 – Dec 2021 · 1 yr',
        },
        { title: 'Intern', period: 'Aug 2020 – Dec 2020 · 5 mos' },
      ],
      text: 'Started my career in the startup sector (iq), working with NodeJS, Go, AWS and the Serverless Framework.',
      tags: ['GoLang', 'NodeJS', 'MySQL', 'AWS', 'Serverless Framework'],
    },
  ],
};

const educationData = {
  pt: [
    {
      org: 'FIAP',
      period: 'ago 2024 – ago 2026',
      roles: [
        {
          title:
            'Curso Superior de Tecnologia (CST), Análise e Desenvolvimento de Sistemas',
        },
      ],
      tags: ['Java', 'SQL'],
      current: true,
    },
    {
      org: 'Full Cycle',
      period: 'jul 2024 – dez 2024',
      roles: [{ title: 'Pós-graduação Lato Sensu — Go Expert' }],
      tags: ['Go', 'Clean Architecture'],
    },
    {
      org: 'CEAP',
      period: '2017 – 2019',
      roles: [{ title: 'Colegial Técnico, Informática' }],
      text: 'Centro Educacional Assistencial Profissionalizante. Onde descobri programação, aos 15 anos.',
      tags: ['Java', 'JavaScript', 'HTML5', 'CSS'],
    },
  ],
  en: [
    {
      org: 'FIAP',
      period: 'Aug 2024 – Aug 2026',
      roles: [
        { title: 'Associate degree (CST), Systems Analysis and Development' },
      ],
      tags: ['Java', 'SQL'],
      current: true,
    },
    {
      org: 'Full Cycle',
      period: 'Jul 2024 – Dec 2024',
      roles: [{ title: 'Postgraduate (Lato Sensu) — Go Expert' }],
      tags: ['Go', 'Clean Architecture'],
    },
    {
      org: 'CEAP',
      period: '2017 – 2019',
      roles: [{ title: 'Technical high school, Informatics' }],
      text: 'Centro Educacional Assistencial Profissionalizante. Where I discovered programming, at 15.',
      tags: ['Java', 'JavaScript', 'HTML5', 'CSS'],
    },
  ],
};

const groupLabels = {
  pt: ['Experiência profissional', 'Formação acadêmica'],
  en: ['Professional experience', 'Education'],
};

export const getContent = (lang) => {
  const t = copy[lang] ?? copy.en;
  const suffix = lang === 'pt' ? 'anos' : 'years';

  const skills = skillsData.map((skill) => ({
    ...skill,
    years: skill.years ? `${skill.years} ${suffix}` : '—',
    note: skill.note ?? null,
  }));

  const groups = [
    { label: groupLabels[lang][0], items: journeyData[lang] },
    { label: groupLabels[lang][1], items: educationData[lang] },
  ];

  return { t, skills, groups };
};
