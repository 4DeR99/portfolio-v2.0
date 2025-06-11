import { Container } from '@/components/system/Container'
import React, { useEffect, useRef } from 'react'
import { aboutMe } from './data'
import useTextHighlighter from '@/hooks/useHighlightText'

export const About = () => {
  const ref = useRef<HTMLDivElement>(null)
  const scrollHandler = useTextHighlighter(ref)

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [scrollHandler])

  return (
    <Container className="flex w-full flex-col items-center gap-10 py-6">
      <h1 className="font-novaSquare ~text-2xl/5xl text-center font-bold">
        About me
      </h1>
      <div
        className="flex w-[85%] max-w-3xl flex-col gap-5"
        ref={ref}
      >
        {aboutMe.map((item, index) => (
          <p
            key={index}
            className="~text-lg/xl"
          >
            {item}
          </p>
        ))}
      </div>
    </Container>
  )
}
