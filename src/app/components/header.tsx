'use client'

import gsap from 'gsap'
import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

import logo from '@/assets/logo.png'

export default function Header() {
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
    <header className="flex flex-col items-center justify-between bg-custom-menu py-6">
      <div className="flex w-[98vw] items-center justify-between gap-2 px-10 md:px-20">
        <div className="flex items-center justify-center gap-2">
          <Image
            src={logo}
            alt=""
            className="h-8 w-8 rounded-full bg-white p-0.5"
          />
          <span className="font-manrope font-bold text-white">
            João Pedro Giehl
          </span>
        </div>

        <button
          id="openMenuBtn"
          className="relative flex gap-1 pb-2 pt-0.5 font-bold uppercase text-white transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-custom-skin-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
          onClick={() => openMenu()}
        >
          Menu
        </button>
      </div>

      <div
        ref={menuContainer}
        className="fixed top-[-100%] -z-10 flex h-screen w-screen place-content-center items-center justify-between gap-4 bg-custom-blue-900 px-[8vw] opacity-0"
      >
        <button
          onClick={() => closeMenu()}
          className="absolute right-4 top-4 -z-10"
        >
          <X className="transition-colors duration-300 hover:text-custom-gray-500" />
        </button>

        <div className="absolute -z-10 text-[30vw] text-custom-menu">Menu</div>

        <ul className="flex list-none flex-col gap-6">
          <li>
            <Link
              onClick={() => closeMenu()}
              href="/"
              className="text-2xl font-bold transition-colors duration-300 hover:text-custom-gray-500 md:text-4xl"
            >
              Home <span className="text-xs md:text-sm">01</span>
            </Link>
          </li>

          <li>
            <a
              onClick={() => closeMenu()}
              href="#"
              className="text-2xl font-bold transition-colors duration-300 hover:text-custom-gray-500 md:text-4xl"
            >
              Processo Terapêutico{' '}
              <span className="text-xs md:text-sm">02</span>
            </a>
          </li>

          <li>
            <Link
              onClick={() => closeMenu()}
              href="/schedule"
              className="text-2xl font-bold transition-colors duration-300 hover:text-custom-gray-500 md:text-4xl"
            >
              Agende um horário <span className="text-xs md:text-sm">03</span>
            </Link>
          </li>
        </ul>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold text-custom-skin-500 md:text-xl">
              Atendimento Online
            </h3>
            <p className="text-xs md:text-sm">No conforto da sua casa</p>
            <p className="text-xs md:text-sm">
              No horário mais confortável para você
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold text-custom-skin-500 md:text-xl">
              Contatos
            </h3>
            <a
              href="mailto:cristiangiehl@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs transition-colors duration-300 hover:text-custom-gray-400 md:text-sm"
            >
              jpgiehl@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-custom-skin-500 md:text-xl">
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
