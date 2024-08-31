import { getAge } from './utils';

export const options = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About me',
    link: '/about',
  },
  {
    label: 'Contact me',
    link: '/contact',
  },
];

export const speechs = [
  'Hello! if you’re here, I think you wanna know about me',
  'Fortunately,  I will share it with you :)',
  'So, click on ABOUT ME, and let’s start!',
];

export const email = 'wendelldourado.wn@gmail.com';

export const contactsInfo = [
  {
    iconSrc: '/github-icon.svg',
    href: 'https://github.com/wendellnd',
  },
  {
    iconSrc: '/linkedin-icon.svg',
    href: 'https://www.linkedin.com/in/wendell-nascimento-dourado-0760a3202/',
  },
];

export const resumeContent = [
  `Hello, I’m Wendell Nascimento Dourado, I’m ${getAge()} years old, and I’m Software Engineer aways searching for learning.`,
  'I’ve been studying since 15 years old, with courses and by myself, actually working with GoLang, NodeJS, MySQL and AWS at Consumidor Positivo as a Junior Software Engineer.',
];

export const journeyContent = [
  {
    icon: '/ceap-icon.svg',
    title: 'CEAP',
    paragraphs: [
      'CEAP is a non-governamental organization with courses on a tecnical level.',
      'There was when I discovered my passion, with 15 years old, and learned a lot about programming during 3 years.',
    ],
    apprenticeship: {
      title: 'What I learned there',
      list: [
        {
          text: 'Java',
          color: '#D40000',
        },
        {
          text: 'JavaScript',
          color: '#CCCC1F',
        },
        {
          text: 'HTML5',
          color: '#E19200',
        },
        {
          text: 'CSS',
          color: '#2965F1',
        },
      ],
    },
    project: undefined,
  },
  {
    icon: '/empty-icon.svg',
    title: 'Solo Times',
    paragraphs: [
      'During 6 mounths, I studied by myself, and learned a lot about web programming, with some events and opportunities.',
    ],
    apprenticeship: {
      title: 'What I learned',
      list: [
        {
          text: 'ReactJS',
          color: '#00B0E8',
        },
        {
          text: 'NodeJS',
          color: '#1BBD1B',
        },
        {
          text: 'MongoDB',
          color: '#008000',
        },
      ],
    },
    project: undefined,
  },
  {
    icon: '/red-ventures-icon.svg',
    title: 'Red Ventures',
    paragraphs: [
      'There is where I started my career, as a Intern, working with NodeJS, Go, AWS at iq startup sector, learning a lot with another professionals.',
    ],
    apprenticeship: {
      title: 'What I am working with',
      list: [
        {
          text: 'GoLang',
          color: '#00ACD7',
        },
        {
          text: 'NodeJS',
          color: '#1BBD1B',
        },
        {
          text: 'MySQL',
          color: '#37618A',
        },
        {
          text: 'AWS',
          color: '#F7981F',
        },
      ],
    },
    project: {
      title: 'Project',
      icon: '/iq.svg',
    },
  },
  {
    icon: '/cp.svg',
    title: 'Consumidor Positivo',
    paragraphs: [
      'Red Ventures sold IQ to another company, and I was transferred to that organization. The project has since been renamed ’Consumidor Positivo’.',
      'There is where I’m currently working, on the authentication system, as a Junior Software Engineer.',
    ],
    apprenticeship: {
      title: 'What I am working with',
      list: [
        {
          text: 'GoLang',
          color: '#00ACD7',
        },
        {
          text: 'MySQL',
          color: '#37618A',
        },
        {
          text: 'DynamoDB',
          color: '#2272BA',
        },
        {
          text: 'Kubernetes',
          color: '#326DE6',
        },
        {
          text: 'Serverless',
          color: '#D40000',
        },
      ],
    },
  },
];

export const skillSetContent = [
  {
    color: '#00ACD7',
    title: 'GoLang',
    text:
      'That’s the language made by Google that I’m actually working with, coding RESTful APIs.',
  },
  {
    color: '#F7981F',
    title: 'AWS',
    text:
      'AWS(Amazon Web Service) is the plataform that I’m using to provide applications',
  },
  {
    color: '#37618A',
    title: 'MySQL',
    text:
      'MySQL is the most popular open source database, and I’m using it to contruct databases.',
  },
  {
    color: '#2272BA',
    title: 'DynamoDB',
    text: 'DynamoDB is a NoSQL database, I’m using it to store some data.',
  },
  {
    color: '#326DE6',
    title: 'Kubernetes',
    text:
      'Kubernetes is a plataform to automate the deployment, scaling, and operations of application containers.',
  },
  {
    color: '#D40000',
    title: 'Serverless',
    text:
      'Serverless is a cloud computing execution model, I’m using it to run some functions.',
  },
];
