'use client'

import gsap from 'gsap'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

import logo from '@/assets/logo.png'

export default function Header() {
  const menuContainer = useRef<HTMLDivElement | null>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    if (menuContainer.current) {
      tl.current = gsap.timeline({ paused: true }).to(menuContainer.current, {
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
    <header className="mb-6 flex flex-col items-center justify-between py-4">
      <div className="flex w-[98vw] items-center justify-between gap-2 px-10 md:px-20">
        <div className="flex items-center justify-center gap-2">
          <Image
            src={logo}
            alt=""
            className="h-8 w-8 rounded-full bg-white p-0.5"
          />
          <span className="font-bold text-white">João Pedro Giehl</span>
        </div>

        <button
          id="openMenuBtn"
          className="after:bg-custom-orange-500 relative flex gap-1 pb-2 pt-0.5 font-bold text-white transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
          onClick={() => openMenu()}
        >
          Menu
        </button>
      </div>

      <div
        ref={menuContainer}
        className="bg-custom-blue-900 fixed top-[-100%] flex h-screen w-screen place-content-center items-center justify-between gap-4 px-10 opacity-0"
      >
        <button
          onClick={() => closeMenu()}
          className="absolute right-4 top-4 -z-10"
        >
          <X className="hover:text-custom-gray-500 transition-colors duration-300" />
        </button>
        <div className="text-custom-menu absolute -z-10 text-[30vw]">Menu</div>

        <ul className="flex list-none flex-col gap-6">
          <li>
            <a
              href="#"
              className="hover:text-custom-gray-500 text-2xl font-bold transition-colors duration-300 md:text-3xl"
            >
              Home <span className="text-md:sm text-xs">01</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-custom-gray-500 text-2xl font-bold transition-colors duration-300 md:text-3xl"
            >
              Processo Terapêutico{' '}
              <span className="text-md:sm text-xs">02</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-custom-gray-500 text-2xl font-bold transition-colors duration-300 md:text-3xl"
            >
              Sobre mim <span className="text-md:sm text-xs">03</span>
            </a>
          </li>
        </ul>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h3 className="text-custom-orange-500 text-sm font-semibold md:text-xl">
              Atendimento Online
            </h3>
            <p className="text-xs">No conforto da sua casa</p>
            <p className="text-xs">No horário mais confortável para você</p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-custom-orange-500 text-sm font-semibold md:text-xl">
              Contatos
            </h3>
            <a
              href="mailto:cristiangiehl@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs"
            >
              jpgiehl@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-custom-orange-500 text-sm font-semibold md:text-xl">
              Me siga nas redes sociais
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
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-pedro-giehl/"
                target="_blank"
                className="hover:animate-colorChange"
                rel="noreferrer"
              >
                <FaLinkedin size={25} />
              </a>
              <a href="" target="_blank" className="hover:animate-colorChange">
                <FaTwitter size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
