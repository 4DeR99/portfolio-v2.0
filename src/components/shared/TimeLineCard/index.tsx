import React from 'react'
import { cn } from '@/lib/utils'

interface TimeLineCardProps {
  title: string
  companyName: string
  skills: string[]
  isCurrent: boolean
  children: React.ReactNode
  className?: string
}

export const TimeLineCard = ({
  title,
  companyName,
  skills,
  isCurrent = false,
  children,
  className,
}: TimeLineCardProps) => {
  return (
    <div
      className={cn(
        'radial-gradient flex min-h-[450px] w-[90%] max-w-2xl flex-col gap-3 border border-blue-700 px-8 py-5',
        className,
      )}
    >
      <h1 className="font-nunito ~/md:~text-xl/2xl font-bold text-blue-700 md:!text-3xl">
        {title}
      </h1>
      <h3 className="font-nunito ~/md:~text-base/lg mb-3 font-bold text-gray-300 md:!text-lg">
        {companyName}
      </h3>
      {children}
      <div className="mt-auto flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            className="cursor-pointer rounded-lg bg-blue-700/40 px-2.5 py-1.5 text-sm transition-all duration-200 hover:scale-110 hover:bg-blue-700/80"
            key={index}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
