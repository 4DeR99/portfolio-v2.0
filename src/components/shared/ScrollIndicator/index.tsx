import React, { useEffect, useRef } from 'react'
import './index.css'
import { cn } from '@/lib/utils'

interface ScrollIndicatorProps {
  className?: string
}

function ScrollIndicator({ className }: ScrollIndicatorProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = React.useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { top } = scrollRef.current.getBoundingClientRect()
        setHidden(top < 400)
      }
    }

    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={cn('mouse-scroll transition-opacity duration-150', className, {
        'opacity-0': hidden,
      })}
      ref={scrollRef}
    />
  )
}

export default ScrollIndicator
