'use client'

import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export function Whatsapp() {
  const whatsContainer = useRef<HTMLDivElement | null>(null)
  const whatsText = useRef<HTMLSpanElement | null>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    if (whatsContainer.current) {
      tl.current = gsap
        .timeline({ paused: true })
        .to(whatsContainer.current, {
          width: 250,
          duration: 0.3,
        })
        .to(whatsText.current, {
          opacity: 1,
          duration: 0.3,
          display: 'inline-block',
          font: 16,
        })
    }
  }, [])

  function showText() {
    tl.current?.play()
  }

  function hiddenText() {
    tl.current?.reverse()
  }

  return (
    <div
      onMouseEnter={showText}
      onMouseLeave={hiddenText}
      ref={whatsContainer}
      className="fixed bottom-2 right-2 z-20 w-[55px] overflow-hidden rounded-full bg-green-500 p-3 text-white shadow-lg"
    >
      <a
        href="https://wa.me/5521999520216?text=Bem-vindo!%20Clique%20no%20ícone%20para%20iniciar%20uma%20conversa%20comigo."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2"
      >
        <span ref={whatsText} className="hidden text-[0px] opacity-0">
          Agende uma consulta!
        </span>
        <FaWhatsapp size={30} />
      </a>
    </div>
  )
}
