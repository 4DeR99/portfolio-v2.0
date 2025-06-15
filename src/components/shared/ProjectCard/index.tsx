import React from 'react'
import './index.css'
import Link from 'next/link'
import GithubIcon from '@/assets/icons/github.svg'
import LinkIcon from '@/assets/icons/link.svg'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  link?: string
  github?: string
  skills: string[]
}

export const ProjectCard = ({
  title,
  description,
  link,
  github,
  skills,
}: ProjectCardProps) => {
  return (
    <div className="project-card my-4 min-h-[300px] p-6 transition-all duration-150 hover:scale-105">
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h1 className="text-2xl font-medium">{title}</h1>
            <div className="flex gap-2">
              {github && (
                <Link
                  href={github}
                  target="_blank"
                >
                  <Image
                    src={GithubIcon}
                    alt={title}
                    width={20}
                    height={20}
                    className="h-[20px] w-[20px] object-contain"
                  />
                </Link>
              )}
              {link && (
                <Link
                  href={link}
                  target="_blank"
                >
                  <Image
                    src={LinkIcon}
                    alt={title}
                    width={20}
                    height={20}
                    className="h-[20px] w-[20px] object-contain"
                  />
                </Link>
              )}
            </div>
          </div>
          <p className="text-secondaryText text-base opacity-70">
            {description}
          </p>
        </div>
        <div className="flex">
          <div className="mt-2 flex flex-wrap justify-start gap-1 text-sm">
            {skills.map((tech, index) => (
              <span
                key={index}
                className="rounded-lg bg-blue-900 px-2 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
