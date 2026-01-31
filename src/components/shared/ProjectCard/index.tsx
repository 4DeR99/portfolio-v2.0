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
  collection?: string[]
}

export const ProjectCard = ({
  title,
  description,
  link,
  github,
  skills,
}: ProjectCardProps) => {

  return (
    <div className="group relative h-full">
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-600/0 via-indigo-500/0 to-purple-600/0 opacity-0 blur-md transition-all duration-500 group-hover:from-blue-600/50 group-hover:via-indigo-500/50 group-hover:to-purple-600/50 group-hover:opacity-100" />

      <div className="project-card relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-2xl border border-blue-500/10 bg-[#0a0a14]/80 p-6 backdrop-blur-sm transition-all duration-500 group-hover:border-blue-500/30">
        <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-novaSquare text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300">
              {title}
            </h2>
            <div className="h-0.5 w-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-full" />
          </div>

          <div className="flex items-center gap-3">
            {github && (
              <Link
                href={github}
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700/50 bg-gray-800/50 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                <Image
                  src={GithubIcon}
                  alt="GitHub"
                  width={18}
                  height={18}
                  className="opacity-70 transition-opacity duration-300 hover:opacity-100"
                />
              </Link>
            )}
            {link && (
              <Link
                href={link}
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700/50 bg-gray-800/50 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                <Image
                  src={LinkIcon}
                  alt="Live Link"
                  width={18}
                  height={18}
                  className="opacity-70 transition-opacity duration-300 hover:opacity-100"
                />
              </Link>
            )}
            {/* {collection && (
              <button
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700/50 bg-gray-800/50 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                <Image
                  src={LinkIcon}
                  alt="Collection"
                  width={18}
                  height={18}
                  className="opacity-70 transition-opacity duration-300 hover:opacity-100"
                />
              </button>
            )} */}
          </div>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
          {description}
        </p>

        <div className="mt-4 border-t border-gray-800/50 pt-4">
          <div className="flex flex-wrap gap-2">
            {skills.map((tech, index) => (
              <span
                key={index}
                className="rounded-md border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-300 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-3 right-3 h-6 w-6 border-b border-r border-blue-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute left-3 top-3 h-6 w-6 border-l border-t border-blue-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </div>
  )
}
