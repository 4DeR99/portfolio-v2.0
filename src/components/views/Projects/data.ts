export interface Project {
  title: string
  description: string
  skills: string[]
  github?: string
  link?: string
  collection?: string[]
}

export const projects: Project[] = [
  {
    title: 'PongYo',
    description:
      'PongYo is a web-site platform that allows you to play pong with your friends online, as well as chat with them.',
    skills: [
      'NextJs',
      'TailwindCSS',
      'Socket.io',
      'TypeScript',
      'NestJs',
      'PostgreSQL',
    ],
    github: 'https://github.com/4DeR99/PongYo',
  },
  {
    title: 'Landing Pages Collection',
    description:
      'A collection of landing pages built with NextJs, TailwindCSS and Gsap.',
    skills: ['NextJs', 'TailwindCSS', 'TypeScript', 'GSAP'],
    collection: [
      'https://www.ajn.news/',
      'https://www.mojomeme.xyz/',
      'https://sentigen.vercel.app/',
      'https://trump-it-website.vercel.app/',
      'https://frensofelon.com/',
      'https://swarmintel.io/',
      'https://www.spookiesol.xyz/',
      'https://www.sunkey.world/',
      'https://dargonsun-website.vercel.app/',
      'https://hydra-website.vercel.app/',
      'https://creon-liart.vercel.app/',
    ],
  },
  // {
  //   title: 'Hydra',
  //   description:
  //     'A landing page built with nextJs Tailwind and Gsap scrolltriggers.',
  //   skills: ['NextJs', 'TailwindCSS', 'TypeScript', 'GSAP'],
  //   github: 'https://github.com/4DeR99/hydra-website',
  //   link: 'https://hydra-website.vercel.app/',
  // },
  {
    title: 'wibi-todo',
    description: 'A dashboard app to manage tasks and todos.',
    skills: ['NextJs', 'TailwindCSS', 'TypeScript', 'Zustand'],
    github: 'https://github.com/4DeR99/wibi-todo',
    link: 'https://wibi-todo.vercel.app/',
  },
  // {
  //   title: 'Creon',
  //   description: 'A landing page built with nextJs and TailwindCSS.',
  //   technologies: ['NextJs', 'TailwindCSS', 'TypeScript'],
  //   github: 'https://github.com/4DeR99/Creon',
  //   demo: 'https://creon-liart.vercel.app/',
  // },
  {
    title: 'Meals App',
    description:
      'Meals App is a mobile application that helps you find the best meals around you, built with Flutter and Bloc pattern for state management.',
    skills: ['Flutter', 'Dart', 'Bloc'],
    github: 'https://github.com/4DeR99/Meals_app',
  },
  {
    title: 'Webserv',
    description:
      'Webserv is a custom web server built from scratch using C++ and C. It supports GET, POST, PUT, DELETE, and more HTTP methods.',
    skills: ['C', 'C++', 'HTTP 1.1'],
    github: 'https://github.com/4DeR99/webserv',
  },
]
