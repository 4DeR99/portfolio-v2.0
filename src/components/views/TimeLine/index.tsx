import { Title } from '@/components/system/Typography/Title'
import { TimeLineCard } from '@/components/shared/TimeLineCard'
import { useAnimateTimeline } from '@/hooks/useAnimateTimeline'
import { timelineData } from './data'
import { cn } from '@/lib/utils'
import './index.css'

export const TimeLine = () => {
  useAnimateTimeline(timelineData.length)

  return (
    <>
      <div className="mt-6 ~py-4/6 sm:h-[200vh]">
        <div className="timeline-container relative grid-pattern hidden h-screen w-full sm:block">
          <div className="timeline-trigger relative flex size-full flex-col items-center gap-10">
            <Title className="~my-5/10 2xl:hidden">My Experience</Title>
            <div className="absolute left-1/2 top-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 ~2xl/3xl:~max-w-2xl/3xl">
              {/* Timeline bar */}
              <div className="timeline-bar absolute -left-[15%] top-0 h-full w-2 rounded-full bg-[#301D98]/20 font-novaSquare">
                {/* Date groups - one for each entry */}
                {timelineData.map((entry, index) => (
                  <div
                    key={`date-group-${entry.id}`}
                    className={cn(
                      'timeline-date-group absolute left-0 top-0 flex h-full -translate-x-[120%] flex-col items-center justify-between text-nowrap',
                      index > 0 && 'opacity-0',
                    )}
                    data-index={index}
                  >
                    <span
                      className="timeline-date-start text-sm font-medium text-gray-400 transition-colors"
                      data-index={index}
                    >
                      {entry.startDate}
                    </span>
                    <span
                      className="timeline-date-end text-sm font-medium text-gray-400 transition-colors"
                      data-index={index}
                    >
                      {entry.endDate}
                    </span>
                  </div>
                ))}
                {/* Timeline progress indicator */}
                <div className="timeline-progress absolute inset-0 origin-top scale-y-0 rounded-full bg-gradient-to-b from-blue-600 via-blue-500 to-indigo-600 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
                {/* Timeline nodes */}
                {timelineData.map((_, index) => (
                  <div
                    key={`node-${index}`}
                    className={cn(
                      'timeline-node absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-blue-600 bg-[#0D0E17] transition-all duration-300',
                      index === 0
                        ? 'top-0 -translate-y-1/2'
                        : 'bottom-0 translate-y-1/2',
                    )}
                    data-index={index}
                  />
                ))}
              </div>

              <Title className="absolute left-1/2 top-0 hidden -translate-x-1/2 -translate-y-[400%] 2xl:block">
                My Experience
              </Title>

              {/* Timeline cards */}
              {timelineData.map((entry, index) => (
                <TimeLineCard
                  key={entry.id}
                  title={entry.title}
                  companyName={`${entry.companyName} - ${entry.location}`}
                  skills={entry.skills}
                  isCurrent={entry.endDate === 'Present'}
                  className={cn(
                    'timeline-card w-full max-w-none ~2xl/3xl:~min-h-[28.125rem]/[32rem]',
                    index === 0 ? '' : 'absolute inset-0 scale-75 opacity-0',
                  )}
                  data-index={index}
                >
                  {entry.description}
                </TimeLineCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view - stacked cards */}
      <div className="flex flex-col items-center gap-10 sm:hidden">
        <Title className="~my-5/10">My Experience</Title>
        {timelineData.map((entry) => (
          <TimeLineCard
            key={`mobile-${entry.id}`}
            title={entry.title}
            companyName={`${entry.companyName} - ${entry.location}`}
            skills={entry.skills}
            isCurrent={entry.endDate === 'Present'}
          >
            <div className="mb-2 text-xs font-medium text-blue-400">
              {entry.startDate} — {entry.endDate}
            </div>
            {entry.description}
          </TimeLineCard>
        ))}
      </div>
    </>
  )
}
