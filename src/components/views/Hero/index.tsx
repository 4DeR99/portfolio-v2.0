import ScrollIndicator from '@/components/shared/ScrollIndicator'
import React from 'react'

export const Hero = () => {
  return (
    <div className="relative flex aspect-[375/467] w-full items-center justify-center bg-gradient-to-b from-[#4A2C6B]/15 via-[#0D0E17] via-50% to-transparent to-70% sm:aspect-[640/500] lg:aspect-[1920/980]">
      <div className="mx-auto flex w-[85%] max-w-2xl flex-col gap-3 px-4">
        <h1 className="font-newRocker ~/sm:~text-[1.25rem]/[1.375rem] sm:~sm/2xl:~text-[1.55rem]/[1.75rem]">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-[#4A7AC1] to-[#4A2C6B] bg-clip-text text-transparent">
            Ader
          </span>
        </h1>
        <p className="~/sm:~text-[0.875rem]/[1rem] sm:~sm/2xl:~text-[1rem]/lg text-gray-400">
          I'm a <St>software engineer</St> specializing in <St>web</St> and{' '}
          <St>mobile development</St>, I transform ideas into fully working &
          lively code, I specialize in creating seamless and intuitive{' '}
          <St>UI/UX</St>.
        </p>
      </div>
      <ScrollIndicator className="!absolute bottom-[5%] left-1/2 hidden -translate-x-1/2 md:block" />
    </div>
  )
}

const St = ({ children }: { children: React.ReactNode }) => (
  <span className="text-white">{children}</span>
)
