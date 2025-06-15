import { timeLineData } from '@/components/views/TimeLine/data'
import Link from 'next/link'
import React from 'react'
import { TimeLineCard } from '../TimeLineCard'

export const Niftables = ({ className }: { className?: string }) => {
  return (
    <TimeLineCard
      title="Full Stack Developer"
      companyName="Niftables - Estonia"
      skills={timeLineData.niftables.skills}
      isCurrent={false}
      className={className}
    >
      <div className="~/md:~text-sm/base flex flex-col gap-3 text-gray-300 md:!text-base">
        <p>
          I joined Niftables initially as an intern, I worked on{' '}
          <Link
            href="https://childrenofthesky.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-500"
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
          we are currently working on{' '}
          <Link
            href="https://thr3.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-500"
          >
            Thr3
          </Link>{' '}
          a platform that helps users create a fully customizable landing page
          for their crypto project.
        </p>
      </div>
    </TimeLineCard>
  )
}
