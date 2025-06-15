import { timeLineData } from '@/components/views/TimeLine/data'
import React from 'react'
import { TimeLineCard } from '../TimeLineCard'

export const OraTechnologies = ({ className }: { className?: string }) => {
  return (
    <TimeLineCard
      title="Full Stack Developer"
      companyName="Ora Technologies - Morocco"
      skills={timeLineData.ora.skills}
      isCurrent={false}
      className={className}
    >
      <div className="~/md:~text-sm/base flex flex-col gap-3 text-gray-300 md:!text-base">
        <p>
          I was brought to Ora as a backend developer at first, however it
          turned out that there isn't much to work on for the backend, only
          tasks was updating endpoints and adding tests for the existing code.
        </p>
        <p>
          after few months of working as a backend developer doing barely an
          average of 2 tasks per week, they decided to move me to work on the
          rebuilding of the mobile app using flutter, so I started learning it
          and working on the app.
        </p>
        <p>
          after a month my contract ended and the company had a big layoff
          sending off multiple employees and us interns.
        </p>
      </div>
    </TimeLineCard>
  )
}
