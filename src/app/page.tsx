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

export default function Home() {
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
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Fixed navigation */}
      <div className="fixed left-0 top-0 z-50 w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#050508]/80 to-transparent" />
        <Container className="relative py-4">
          <div className="flex items-center justify-between">
            <Image
              src={Logo}
              alt="logo"
              width={Logo.width / 2}
              height={Logo.height / 2}
              className="h-12 w-auto md:h-14"
            />
            <nav className="hidden items-center gap-8 md:flex">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </Container>
      </div>

      {/* Main content */}
      <div className="flex flex-col font-nunito">
        <Hero />
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <TimeLine />
        </div>
        <Projects />
        <div id="contact">
          <Contact />
        </div>
      </div>
    </main>
  )
}
