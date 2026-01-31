import ScrollIndicator from '@/components/shared/ScrollIndicator'
import React from 'react'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="spotlight absolute inset-0" />
      
      <motion.div
        className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/10 blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[10%] h-96 w-96 rounded-full bg-gradient-to-br from-purple-600/15 to-cyan-600/10 blur-3xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute left-[40%] top-[60%] h-48 w-48 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-2xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 mx-auto flex w-[90%] max-w-4xl flex-col items-center gap-8 px-4 text-center">
        <div
          className="space-y-4"
        >
          <h1 className="font-novaSquare text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m{' '}
            <span className="gradient-text">Ader</span>
          </h1>
          <h2 className="font-nunito text-xl font-medium text-gray-400 sm:text-2xl md:text-3xl">
            Software Engineer & Creative Developer
          </h2>
        </div>

        <p
          className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl"
        >
          I specialize in crafting{' '}
          <Highlight>beautiful web experiences</Highlight> and{' '}
          <Highlight>mobile applications</Highlight>. I transform ideas into
          seamless, intuitive interfaces with a focus on{' '}
          <Highlight>stunning UI/UX</Highlight>.
        </p>

        <div
          className="flex flex-wrap justify-center gap-3"
        >
          {['React', 'Next.js', 'TypeScript', 'Flutter', 'Node.js'].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>

      <ScrollIndicator className="!absolute bottom-[5%] left-1/2 hidden -translate-x-1/2 md:block" />

      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#050508] to-transparent" />
    </div>
  )
}

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="font-medium text-white">{children}</span>
)
