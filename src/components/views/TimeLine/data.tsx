import Link from 'next/link'
import React from 'react'

export interface TimelineEntry {
  id: string
  title: string
  companyName: string
  location: string
  startDate: string
  endDate: string
  skills: string[]
  description: React.ReactNode
}

export const timelineData: TimelineEntry[] = [
  {
    id: 'ora',
    title: 'Full Stack Developer',
    companyName: 'Ora Technologies',
    location: 'Morocco',
    startDate: '10-2023',
    endDate: '03-2024',
    skills: ['Flutter', 'Dart', 'Node.js', 'NestJs', 'PostgreSQL', 'Jest'],
    description: (
      <>
        <p>
          I was brought to Ora as a backend developer at first, however it
          turned out that there isn't much to work on for the backend, only
          tasks was updating endpoints and adding tests for the existing code.
        </p>
        <p>
          After few months of working as a backend developer doing barely an
          average of 2 tasks per week, they decided to move me to work on the
          rebuilding of the mobile app using flutter, so I started learning it
          and working on the app.
        </p>
        <p>
          After a month my contract ended and the company had a big layoff
          sending off multiple employees and us interns.
        </p>
      </>
    ),
  },
  {
    id: 'niftables',
    title: 'Full Stack Developer',
    companyName: 'Niftables',
    location: 'Estonia',
    startDate: '05-2024',
    endDate: '08-2025',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'GSAP',
      'wagmi',
      'Node.js',
      'NestJs',
    ],
    description: (
      <>
        <p>
          I joined Niftables initially as an intern, I worked on{' '}
          <Link
            href="https://childrenofthesky.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-400 transition-colors hover:text-blue-300"
          >
            COTS
          </Link>{' '}
          project that was heavily focused on frontend and animations. It was a
          unique project that required a different approach to develop.
        </p>
        <p>
          After that, I was offered a full time position, I worked on multiple
          projects for different clients, mainly landing pages for crypto
          projects.
        </p>
        <p>
          We are currently working on{' '}
          <Link
            href="https://thr3.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-400 transition-colors hover:text-blue-300"
          >
            Thr3
          </Link>{' '}
          a platform that helps users create a fully customizable landing page
          for their crypto project.
        </p>
      </>
    ),
  },
  {
    id: 'lcmh',
    title: 'Full Stack Developer',
    companyName: 'LCMH',
    location: 'Australia',
    startDate: '04-2025',
    endDate: 'Present',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'TurboRepo',
      'PostgreSQL',
      'DrizzleORM',
      'Inngest',
    ],
    description: (
      <>
        <p>
          I joined LCMH as a full stack developer, I worked on the{' '}
          <Link
            href="https://lcmh.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-400 transition-colors hover:text-blue-300"
          >
            LCMH
          </Link>{' '}
          project fine-tuning and enhancing the frontend and backend.
        </p>
        <p>
          I've also worked on the{' '}
          <Link
            href="https://nulla.lcmh.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-400 transition-colors hover:text-blue-300"
          >
            Nulla
          </Link>{' '}
          project which is an AI powered mapping tool for carbon embodied emissions.
        </p>
      </>
    ),
  },
]
