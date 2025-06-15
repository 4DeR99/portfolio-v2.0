'use client'

import { About } from '@/components/views/About'
import { TimeLine } from '@/components/views/TimeLine'
import { Contact } from '@/components/views/Contact'
import { Projects } from '@/components/views/Projects'
import { Hero } from '@/components/views/Hero'
import Logo from '@/assets/images/logo.png'
import Image from 'next/image'
import { Container } from '@/components/system/Container'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { useRefreshOnResize } from '@/hooks/useRefreshOnResize'

export default () => {
  useRefreshOnResize()
  const animationRequestRef = useRef<number>(null)

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      animationRequestRef.current = requestAnimationFrame(raf)
    }

    animationRequestRef.current = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationRequestRef.current!)
      lenis.destroy()
    }
  }, [])

  return (
    <main className="relative min-h-screen w-full">
      <div className="absolute left-0 top-0 z-10 w-full">
        <Container>
          <Image
            src={Logo}
            alt="logo"
            width={Logo.width / 2}
            height={Logo.height / 2}
            className="~/md:~w-[4rem]/[6.5rem]"
          />
        </Container>
      </div>
      <div className="font-nunito flex flex-col">
        <Hero />
        <About />
        <TimeLine />
        <Projects />
      </div>
    </main>
  )
}
