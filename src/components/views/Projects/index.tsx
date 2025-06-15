import { ProjectCard } from '@/components/shared/ProjectCard'
import { Container } from '@/components/system/Container'
import { Title } from '@/components/system/Typography/Title'
import React from 'react'
import { projects } from './data'

export const Projects = () => {
  return (
    <Container className="~py-5/10 flex flex-col items-center gap-10">
      <Title>Projects</Title>
      <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </Container>
  )
}
