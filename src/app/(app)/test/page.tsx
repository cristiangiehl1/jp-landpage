'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function Test() {
  const boxA = useRef(null)
  const boxB = useRef(null)
  const boxC = useRef(null)

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      /*
        toggleActions: default --> play none none none
        Values can be: play, pause, resume, reverse, restart, reset, complete, 
        none.
        Positions: 
        - 1º (enter in the viewport)
        - 2º (foward past the end point)
        - 3º (comeback the viewport)
        - 4º (all the way back to the start)
      */
      scrollTrigger: {
        trigger: boxB.current,
        // First value related to the trigger element.
        // Second value related to the scroller (viewport)
        start: 'top center',
        end: 'top 200px',
        scrub: 2,
        markers: true,
      },
    })

    tl.to(boxB.current, {
      x: '100vw',
      //   rotation: 360,
      duration: 10,
      ease: 'power2.inOut',
    })

    gsap.to(boxA.current, {
      x: 400,
      //   rotation: 360,
      duration: 3,
    })
  }, [])

  return (
    <div className="flex flex-col gap-80 p-20">
      <h1>Teste</h1>
      <div className="h-[100px] w-[100px] bg-purple-500" ref={boxA}></div>
      <div
        className="-ml-[190px] mt-[200px] h-[200px] w-[100px] bg-yellow-500"
        ref={boxB}
      ></div>
      <div
        className="mt-[200px] h-[100px] w-[100px] bg-green-500"
        ref={boxC}
      ></div>
    </div>
  )
}
