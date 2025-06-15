import { Container } from '@/components/system/Container'
import React from 'react'
import './index.css'
import { Niftables } from '@/components/shared/Niftables'
import { OraTechnologies } from '@/components/shared/OraTechnologies'
import { Title } from '@/components/system/Typography/Title'
import { useAnimateTimeline } from '@/hooks/useAnimateTimeline'

export const TimeLine = () => {
  useAnimateTimeline()

  return (
    <>
      <Container className="~py-4/6 mt-6 sm:h-[200vh]">
        <div className="timeline-container relative hidden h-screen w-full sm:block">
          <div className="timeline-trigger relative flex size-full flex-col items-center gap-10">
            <Title className="~my-5/10 2xl:hidden">My Experience</Title>
            <div className="~2xl/3xl:~max-w-2xl/3xl absolute left-1/2 top-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2">
              <div className="font-novaSquare absolute -left-[15%] top-0 h-full w-2 rounded-full bg-[#301D98]/20">
                <div className="ora-date absolute left-0 top-0 flex h-full -translate-x-[120%] flex-col items-center justify-between text-nowrap">
                  <span className="date-1">10-2024</span>
                  <span className="date-2">03-2025</span>
                </div>
                <div className="niftables-date absolute left-0 top-0 flex h-full -translate-x-[120%] flex-col items-center justify-between text-nowrap opacity-0">
                  <span className="date-3">05-2025</span>
                  <span className="date-4">Present</span>
                </div>
                <div className="timeline absolute inset-0 origin-top scale-y-0 rounded-full bg-[#301D98]"></div>
              </div>
              <Title className="absolute left-1/2 top-0 hidden -translate-x-1/2 -translate-y-[400%] 2xl:block">
                My Experience
              </Title>
              <OraTechnologies className="ora ~2xl/3xl:~min-h-[28.125rem]/[32rem] w-full max-w-none" />
              <Niftables className="niftables ~2xl/3xl:~min-h-[28.125rem]/[32rem] absolute inset-0 w-full max-w-none scale-75 opacity-0" />
            </div>
          </div>
        </div>
      </Container>
      <div className="flex flex-col items-center gap-10 sm:hidden">
        <Title className="~my-5/10">My Experience</Title>
        <OraTechnologies />
        <Niftables />
      </div>
    </>
  )
}
