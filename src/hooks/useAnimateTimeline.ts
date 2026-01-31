import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export function useAnimateTimeline(itemCount: number) {
  useGSAP(() => {
    if (itemCount < 1) return

    gsap.registerPlugin(ScrollTrigger)

    const container = document.querySelector('.timeline-container')
    const trigger = document.querySelector('.timeline-trigger')
    if (!container || !trigger) return

    const containerHeight = trigger.clientHeight || 0
    const segmentPercent = 100 / itemCount

    // Pin the timeline container
    gsap.to('.timeline-container', {
      scrollTrigger: {
        trigger: '.timeline-container',
        start: 'top top',
        end: `${containerHeight}px`,
        pin: true,
      },
    })

    // Animate each transition between cards
    for (let i = 0; i < itemCount; i++) {
      const hasNext = i < itemCount - 1
      const startPercent = segmentPercent * i
      const currentDateGroup = document.querySelector(
        `.timeline-date-group[data-index="${i}"]`,
      )
      const nextDateGroup = document.querySelector(
        `.timeline-date-group[data-index="${i + 1}"]`,
      )

      // Timeline progress animation for this segment
      const progressTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.timeline-trigger',
          start: `${startPercent}% top`,
          end: `${startPercent + segmentPercent}%`,
          scrub: 0.5,
        },
      })

      progressTl.to('.timeline-progress', {
        scaleY: 1,
        transformOrigin: 'top',
        ease: 'none',
      })

      gsap.to('.timeline-progress', {
        scaleY: 0,
        transformOrigin: 'top',
        scrollTrigger: {
          trigger: '.timeline-trigger',
          start: `${startPercent}% top`,
          end: `${startPercent + segmentPercent}%`,
          toggleActions: 'none play reverse none',
        },
      })

      if (hasNext) {
        const currentCard = document.querySelector(
          `.timeline-card[data-index="${i}"]`,
        )
        const nextCard = document.querySelector(
          `.timeline-card[data-index="${i + 1}"]`,
        )
        if (!currentCard || !nextCard) continue

        // Card transition animation
        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.timeline-trigger',
            start: `${startPercent + segmentPercent - 5}%`,
            end: `${startPercent + segmentPercent + 5}%`,
            scrub: 0.5,
          },
        })

        // Animate current card out with a nice 3D effect
        cardTl.to(
          currentCard,
          {
            xPercent: 80,
            yPercent: -30,
            scale: 0.5,
            filter: 'blur(10px)',
            opacity: 0.3,
            duration: 1,
            ease: 'power2.inOut',
          },
          0,
        )

        // Animate next card in
        cardTl.to(
          nextCard,
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.5',
        )
      }

      // Date group transition
      if (currentDateGroup && nextDateGroup) {
        const dateTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.timeline-trigger',
            start: `${startPercent}% top`,
            end: `${startPercent + segmentPercent}%`,
            scrub: 0.5,
          },
        })

        dateTl.to(
          currentDateGroup,
          {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
          },
          0,
        )

        dateTl.to(
          nextDateGroup,
          {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
          },
          0.1,
        )
      }
    }

    // Animate date colors as timeline progresses
    for (let i = 0; i < itemCount; i++) {
      const segmentStart = segmentPercent * i
      const segmentEnd = segmentStart + segmentPercent * 0.8

      // Start date color animation
      gsap.to(`.timeline-date-start[data-index="${i}"]`, {
        color: 'rgb(96 165 250)', // blue-400
        scrollTrigger: {
          trigger: '.timeline-trigger',
          start: `${segmentStart}% top`,
          end: `${segmentStart + 5}%`,
          scrub: true,
        },
      })

      // End date color animation
      gsap.to(`.timeline-date-end[data-index="${i}"]`, {
        color: 'rgb(96 165 250)', // blue-400
        scrollTrigger: {
          trigger: '.timeline-trigger',
          start: `${segmentEnd}% top`,
          end: `${segmentEnd + 5}%`,
          scrub: true,
        },
      })
    }

    // Final timeline fill animation
    gsap.to('.timeline-progress', {
      scaleY: 1,
      transformOrigin: 'top',
      scrollTrigger: {
        trigger: '.timeline-trigger',
        start: `${100 - segmentPercent}% top`,
        end: '100%',
        scrub: 0.5,
      },
    })
  }, [itemCount])
}
