import { Container } from '@/components/system/Container'
import React, { useEffect, useRef } from 'react'
import { aboutMe } from './data'
import useTextHighlighter from '@/hooks/useHighlightText'
import { Title } from '@/components/system/Typography/Title'

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
    <Container className="~gap-5/10 ~py-4/6 flex w-full flex-col items-center">
      <Title>About me</Title>
      <div
        className="flex w-[85%] max-w-3xl flex-col gap-5 text-justify"
        ref={ref}
      >
        {aboutMe.map((item, index) => (
          <p
            key={index}
            className="~text-base/xl"
          >
            {item}
          </p>
        ))}
      </div>
    </Container>
  )
}
