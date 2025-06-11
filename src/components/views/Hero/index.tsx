import React from 'react'

export const Hero = () => {
  return (
    <div className="font-nunito relative flex aspect-[1920/960] w-full items-center justify-center bg-gradient-to-b from-[#4A2C6B]/35 via-[#0D0E17]/35 via-50% to-transparent to-70%">
      <div className="flex flex-col gap-3">
        <h1 className="font-newRocker text-[1.75rem]">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-[#4A7AC1] to-[#4A2C6B] bg-clip-text text-transparent">
            Ader
          </span>
        </h1>
        <p className="max-w-2xl text-lg text-gray-400">
          My name is <St>Mohammed Reda Oulmadou</St> and I'm a{' '}
          <St>software engineer</St> specializing in <St>web</St> and{' '}
          <St>mobile development</St>, I transform ideas into fully working &
          lively code, I specialize in creating seamless and intuitive{' '}
          <St>UI/UX</St>.
        </p>
      </div>
    </div>
  )
}

const St = ({ children }: { children: React.ReactNode }) => (
  <span className="text-white">{children}</span>
)
