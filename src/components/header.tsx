'use client'

import gsap from 'gsap'
import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
import { FaInstagram } from 'react-icons/fa'

import logo from '@/assets/logo.png'

export function Header() {
  const menuContainer = useRef<HTMLDivElement | null>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    if (menuContainer.current) {
      tl.current = gsap
        .timeline({ paused: true })
        .to(menuContainer.current, {
          zIndex: 5,
          duration: 0.1,
        })
        .to(menuContainer.current, {
          opacity: 1,
          duration: 1,
          top: 0,
        })
    }
  }, [])

  function openMenu() {
    tl.current?.play()
  }

  function closeMenu() {
    tl.current?.reverse()
  }

  return (
    <header className="flex flex-col items-center justify-between bg-custom-blue-900">
      <div className="flex w-[98vw] items-center justify-between gap-2 px-10 md:px-20">
        <div className="flex items-center justify-center gap-2">
          <Image
            src={logo}
            alt=""
            className="h-8 w-8 rounded-full bg-white p-0.5"
          />
          <span className="font-greatVibes font-bolder tracking-widest text-custom-skin-500">
            João Pedro Giehl
          </span>
        </div>

        <button
          id="openMenuBtn"
          className="relative flex gap-1 px-2 py-6 font-bold uppercase text-white transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-left after:scale-x-0 after:bg-custom-orange-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
          onClick={() => openMenu()}
        >
          Menu
        </button>
      </div>

      <div
        ref={menuContainer}
        className="fixed top-[-100%] -z-10 flex h-screen w-screen place-content-center items-center justify-between gap-6 bg-custom-blue-900 px-[8vw] opacity-0"
      >
        <button
          onClick={() => closeMenu()}
          className="absolute right-4 top-4 -z-10"
        >
          <X className="transition-colors duration-300 hover:text-custom-orange-500" />
        </button>

        <div className="absolute -z-10 text-[30vw] text-custom-menu">Menu</div>

        <ul className="flex list-none flex-col gap-10">
          <li>
            <Link
              onClick={() => closeMenu()}
              href="/"
              className="text-3xl font-bold leading-none tracking-tighter transition-colors duration-300 hover:text-custom-orange-500 md:text-5xl"
            >
              Home <span className="text-xs md:text-base">01</span>
            </Link>
          </li>

          <li>
            <a
              href="/documents/manual-consulta-online.pdf"
              download
              className="text-3xl font-bold leading-none tracking-tighter transition-colors duration-300 hover:text-custom-orange-500 md:text-5xl"
            >
              Processo Terapêutico{' '}
              <span className="text-xs md:text-base">02</span>
            </a>
          </li>

          <li>
            <Link
              onClick={() => closeMenu()}
              href="/contact"
              className="text-3xl font-bold leading-none tracking-tighter transition-colors duration-300 hover:text-custom-orange-500 md:text-5xl"
            >
              Agende um horário <span className="text-xs md:text-base">03</span>
            </Link>
          </li>
        </ul>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold text-custom-skin-500 md:text-2xl">
              Atendimento Online
            </h3>
            <p className="text-xs md:text-base">No conforto da sua casa</p>
            <p className="text-xs md:text-base">
              No horário mais confortável para você
            </p>
          </div>

          <div className="flex flex-col items-start justify-center gap-1">
            <h3 className="text-sm font-semibold text-custom-skin-500 md:text-2xl">
              Contatos
            </h3>
            <a
              href="mailto:joao.pedrogiehl@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs transition-colors duration-300 hover:text-custom-orange-500 md:text-base"
            >
              joao.pedrogiehl@gmail.com
            </a>
            <span className="text-xs transition-colors duration-300 md:text-base">
              (21) 99952-0216
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-custom-skin-500 md:text-2xl">
              Me siga no instagram
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/psi.jogiehl/"
                target="_blank"
                className="hover:animate-colorChange"
                rel="noreferrer"
              >
                <FaInstagram size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
