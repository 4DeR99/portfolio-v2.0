import { ProjectCard } from '@/components/shared/ProjectCard'
import { Container } from '@/components/system/Container'
import { Title } from '@/components/system/Typography/Title'
import React from 'react'
import { projects } from './data'

export const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-20 md:py-32 border-t z-20 border-blue-500/10 bg-[#050508]">
      {/* <div className="absolute inset-0 grid-pattern opacity-30" /> */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-br from-purple-600/10 to-blue-600/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-br from-blue-600/10 to-cyan-600/5 blur-3xl" />

      <Container className="relative z-10 flex flex-col items-center gap-16">
        <div
          className="flex flex-col items-center gap-4"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            My Work
          </span>
          <Title>Featured Projects</Title>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />
          <p className="mt-2 max-w-xl text-center text-gray-400">
            A selection of projects I&apos;ve built, from full-stack web applications to mobile apps and low-level systems.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
