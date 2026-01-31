import React from 'react'
import { cn } from '@/lib/utils'

interface TimeLineCardProps {
  title: string
  companyName: string
  skills: string[]
  isCurrent: boolean
  children: React.ReactNode
  className?: string
  'data-index'?: number
}

export const TimeLineCard = ({
  title,
  companyName,
  skills,
  isCurrent = false,
  children,
  className,
  'data-index': dataIndex,
}: TimeLineCardProps) => {
  return (
    <div
      className={cn(
        'timeline-card-wrapper group relative flex min-h-[450px] w-[90%] max-w-2xl flex-col gap-4 overflow-hidden rounded-xl border border-blue-700/50 bg-gradient-to-br from-[#0D0E17] via-[#111827] to-[#0D0E17] px-8 py-6 backdrop-blur-sm transition-all duration-500',
        'before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-r before:from-blue-600/20 before:via-indigo-600/20 before:to-purple-600/20 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100',
        'after:absolute after:inset-[1px] after:-z-10 after:rounded-xl after:bg-gradient-to-br after:from-[#0D0E17] after:via-[#111827] after:to-[#0D0E17]',
        'shadow-[0_0_30px_rgba(30,64,175,0.15),inset_0_1px_0_rgba(255,255,255,0.05)]',
        'hover:border-blue-500/70 hover:shadow-[0_0_40px_rgba(59,130,246,0.25),inset_0_1px_0_rgba(255,255,255,0.1)]',
        className,
      )}
      data-index={dataIndex}
    >
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 -z-20 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-30" />

      {/* Header section */}
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex-1">
          <h1 className="mb-1 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text font-nunito font-bold tracking-tight text-transparent ~/md:~text-xl/2xl md:!text-3xl">
            {title}
          </h1>
          <h3 className="font-nunito font-medium text-gray-400 ~/md:~text-sm/base md:!text-lg">
            {companyName}
          </h3>
        </div>

        {/* Current position badge */}
        {isCurrent && (
          <div className="relative flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Current
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-700/50 to-transparent" />

      {/* Description content */}
      <div className="flex flex-1 flex-col gap-3 leading-relaxed text-gray-300 ~/md:~text-sm/base md:!text-base [&>p]:relative [&>p]:pl-4 [&>p]:before:absolute [&>p]:before:left-0 [&>p]:before:top-2 [&>p]:before:h-1.5 [&>p]:before:w-1.5 [&>p]:before:rounded-full [&>p]:before:bg-blue-500/60">
        {children}
      </div>

      {/* Skills section */}
      <div className="mt-auto space-y-3">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-700/30 to-transparent" />
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              className="group/skill relative cursor-default overflow-hidden rounded-lg border border-blue-600/30 bg-blue-600/10 px-3 py-1.5 text-sm font-medium text-blue-300 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-600/20 hover:text-blue-200 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              key={index}
            >
              <span className="relative z-10">{skill}</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 opacity-0 transition-opacity duration-300 group-hover/skill:opacity-100" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
