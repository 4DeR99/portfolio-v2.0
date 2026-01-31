import { Container } from '@/components/system/Container'
import React, { useRef } from 'react'
import { aboutMe } from './data'
import { Title } from '@/components/system/Typography/Title'

export const About = () => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute left-0 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-600/10 to-purple-600/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 h-80 w-80 translate-x-1/2 rounded-full bg-gradient-to-br from-blue-600/10 to-cyan-600/5 blur-3xl" />

      <Container className="relative z-10 flex w-full flex-col items-center gap-12">
        <div
          className="flex flex-col items-center gap-4"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Get to know me
          </span>
          <Title>About Me</Title>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />
        </div>

        <div
          className="relative w-full max-w-4xl"
        >
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-600/50 via-indigo-500/50 to-purple-600/50 opacity-50 blur-sm" />
          
          <div className="relative rounded-2xl border border-blue-500/20 bg-[#0a0a12]/90 p-8 backdrop-blur-xl md:p-12">
            <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-blue-500/30" />
            <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-purple-500/30" />

            <div
              className="flex flex-col gap-6 text-justify"
              ref={ref}
            >
              {aboutMe.map((item, index) => (
                <p
                  key={index}
                  className="relative pl-6 text-base leading-relaxed text-gray-300 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-r before:from-blue-500 before:to-indigo-500 md:text-lg"
                >
                  {item}
                </p>
              ))}
            </div>

            <div
              className="mt-10 grid grid-cols-2 gap-4 border-t border-blue-500/20 pt-8 md:grid-cols-4"
            >
              {[
                { value: '4+', label: 'Years Coding' },
                { value: '10+', label: 'Projects Built' },
                { value: '2+', label: 'Years Professional' },
                { value: '∞', label: 'Curiosity' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-1 text-center"
                >
                  <span className="gradient-text font-novaSquare text-2xl font-bold md:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-500 md:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
