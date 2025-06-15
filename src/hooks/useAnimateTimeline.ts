import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export function useAnimateTimeline() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const containerHeight =
      document.querySelector('.timeline-trigger')?.clientHeight || 0

    gsap.to('.timeline-container', {
      scrollTrigger: {
        trigger: '.timeline-container',
        start: 'top top',
        end: `${containerHeight * 1}px`,
        pin: true,
      },
    })

    gsap.to('.timeline', {
      scaleY: 1,
      transformOrigin: 'top',
      scrollTrigger: {
        trigger: '.timeline-trigger',
        start: 'top top',
        end: '+=50%',
        scrub: true,
      },
    })

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.timeline-trigger',
        start: 'top top',
        end: '+=50%',
        toggleActions: 'none play reverse none',
      },
    })

    tl1.to(
      '.ora',
      {
        xPercent: 80,
        yPercent: -30,
        scale: 0.5,
        filter: 'blur(10px)',
        duration: 1,
      },
      0,
    )

    tl1.to(
      '.niftables',
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
      },
      '-=0.5',
    )

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.timeline-trigger',
        start: 'top top',
        end: '+=50%',
        toggleActions: 'none play reverse none',
      },
    })

    tl2.to(
      '.timeline',
      {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 0.3,
      },
      0,
    )
    tl2.to(
      '.ora-date',
      {
        opacity: 0,
        duration: 0.15,
      },
      0,
    )
    tl2.to(
      '.niftables-date',
      {
        opacity: 1,
        duration: 0.15,
      },
      '0.1',
    )

    gsap.to('.date-1', {
      color: 'rgb(29 78 216)',
      scrollTrigger: {
        trigger: '.timeline-trigger',
        start: 'top top',
        end: `${containerHeight * 0.05}px`,
        scrub: true,
      },
    })
    gsap.to('.date-2', {
      color: 'rgb(29 78 216)',
      scrollTrigger: {
        trigger: '.timeline-trigger',
        start: `${containerHeight * 0.4}px`,
        end: `${containerHeight * 0.45}px`,
        scrub: true,
      },
    })

    gsap.to('.timeline', {
      scaleY: 1,
      transformOrigin: 'top',
      scrollTrigger: {
        trigger: '.timeline-trigger',
        start: '55% top',
        end: '+=45%',
        scrub: true,
      },
    })

    gsap.to('.date-3', {
      color: 'rgb(29 78 216)',
      scrollTrigger: {
        trigger: '.timeline-trigger',
        start: `${containerHeight * 0.53}px`,
        end: `${containerHeight * 0.58}px`,
        scrub: true,
      },
    })
    gsap.to('.date-4', {
      color: 'rgb(29 78 216)',
      scrollTrigger: {
        trigger: '.timeline-trigger',
        start: `${containerHeight * 0.95}px`,
        end: `${containerHeight * 1}px`,
        scrub: true,
      },
    })
  }, [])
}
