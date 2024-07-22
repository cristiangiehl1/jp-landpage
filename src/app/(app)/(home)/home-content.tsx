'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'

import mind from '@/assets/mind.svg'

gsap.registerPlugin(ScrollTrigger)

export function HomeContent() {
  const box1 = useRef(null)
  const box2 = useRef(null)
  const box3 = useRef(null)
  const box4 = useRef(null)
  const box5 = useRef(null)
  const box6 = useRef(null)

  const text1 = useRef(null)
  const text2 = useRef(null)
  const text3 = useRef(null)
  const text4 = useRef(null)
  const text5 = useRef(null)
  const text6 = useRef(null)

  useLayoutEffect(() => {
    const boxes = [box1, box2, box3, box4, box5, box6]
    const texts = [text1, text2, text3, text4, text5, text6]

    boxes.forEach((box) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: box.current,
          start: 'top bottom',
          end: 'top 300px',
          scrub: 1,
        },
      })

      tl.to(box.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
      })
    })

    texts.forEach((text) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: text.current,
          start: 'top bottom',
          end: 'top 300px',
          scrub: 1,
        },
      })

      tl.to(text.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
      })
    })
  }, [])

  return (
    <main className="grid grid-rows-[repeat(6_min-content)] gap-5">
      <section className="bg-parallax1 min-h-[500px] bg-cover bg-fixed px-16 py-6 lg:min-h-[500px]">
        <h2
          ref={text1}
          className="mb-4 -translate-x-full text-3xl font-bold leading-tight tracking-tighter text-custom-orange-500 opacity-0 md:text-4xl"
        >
          Psicoterapia
        </h2>
        <div className="bg-custom-form overflow-hidden rounded-lg">
          <p
            className="translate-x-full px-2 py-6 font-semibold text-custom-blue-900 opacity-0 md:text-xl"
            ref={text2}
          >
            Fico feliz em saber que você tem interesse em iniciar esse processo
            de “olhar para si” comigo, será um prazer iniciar nossas sessões.
          </p>
        </div>
      </section>

      <section className="flex min-h-[500px] flex-col gap-6 bg-slate-200 px-16 py-6 lg:min-h-[500px]">
        <div ref={box2} className="-translate-x-full opacity-0">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-custom-blue-900 md:text-4xl">
            Sobre mim
          </h2>
          <div className="bg-custom-form flex flex-col gap-4 rounded-lg p-6">
            <p className="text-left leading-relaxed text-custom-blue-900">
              Formado pela IBMR e psicanalista clínico em constante formação no
              Colégio Freudiano do Rio de Janeiro. Sempre fui apaixonado por
              processos de autoconhecimento e desenvolvimento pessoal, dedicando
              grande parte da minha adolescência e infância para formas de se
              conectar com si, onde acabei me deparando com a psicologia e a
              psicanálise, foi quando essa paixão só aumentou. Atualmente me
              dedico a levar este processo o qual estudo e também continuo
              praticando, para as pessoas que queriam se entender cada vez mais
              e transformar seus sintomas psíquicos (ansiedade, depressão,
              estresse excessivo e etc) em novas possibilidades. Como diz Magno:
            </p>
            <p className="text-left italic leading-relaxed text-custom-blue-900">
              {`"A Psicanálise portanto é um exercício de liberdade."`}
            </p>
          </div>
        </div>
        <div ref={box3} className="translate-x-full opacity-0">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-custom-blue-900 md:text-4xl">
            Minha formação
          </h2>

          <ul className="bg-custom-form list-inside list-disc rounded-lg p-2">
            <li className="text-left leading-relaxed text-custom-blue-900">
              Formação em Psicanálise – Colégio Freudiano do Rio de Janeiro.
            </li>
            <li className="text-left leading-relaxed text-custom-blue-900">
              Supervisor do setor de psicologia – Clínica Santa Teresinha
              (SEMAV).
            </li>
            <li className="text-left leading-relaxed text-custom-blue-900">
              Psicoterapia de abordagem analítica – On-line.
            </li>
          </ul>
        </div>
      </section>

      <section
        ref={box1}
        className="min-h-[500px] translate-x-full bg-slate-200 px-16 py-6 opacity-0 lg:min-h-[500px]"
      >
        <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-custom-orange-500 md:text-4xl">
          Supervisão clínica individual
        </h2>
        <p className="text-custom-blue-900">
          A supervisão tem por objetivo auxiliar analistas com casos que estejam
          apresentando dificuldade com o manejo transferencial. Sendo um dos
          pilares essências para qualquer analista segundo o tripé analítico
          proposto por Freud.
        </p>
      </section>

      <section className="bg-parallax2 min-h-[500px] bg-cover bg-fixed px-16 py-6 lg:min-h-[500px]">
        <h2
          ref={text3}
          className="mb-4 -translate-x-full text-3xl font-bold leading-tight tracking-tighter text-custom-orange-500 opacity-0 md:text-4xl"
        >
          Consulta sob sigilo
        </h2>
        <p
          ref={text4}
          className="bg-custom-form translate-x-full px-2 py-6 font-semibold text-custom-blue-900 opacity-0 md:text-xl"
        >
          O trabalho é desenvolvido em um contexto totalmente confidencial,
          garantindo ao paciente pleno sigilo. A psicoterapia online é um
          procedimento validado pelo CFP (Conselho Federal de Psicologia) desde
          2018. Essa modalidade de tratamento é uma realidade cada vez mais
          presente no nosso dia a dia.
        </p>
      </section>

      <section
        ref={box4}
        className="flex min-h-[500px] translate-x-full gap-4 bg-slate-200 px-16 py-6 opacity-0 lg:min-h-[500px]"
      >
        <div>
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-custom-orange-500 md:text-4xl">
            Faça uma consulta online
          </h2>
          <p className="text-custom-blue-900">
            Os atendimentos são ao vivo, ou seja, as sessões entre paciente e
            psicanalista acontecem em tempo real, usando um programa que permite
            o uso de voz e imagem. Essa é uma escolha super eficiente, pois
            permite o acolhimento de pessoas em qualquer lugar, desde que tenham
            privacidade e acesso a recursos audiovisuais via Internet. Usamos
            aplicativos como WhatsApp ou plataformas de video-chamada. Ofereço
            psicoterapia individual, com encontros semanais previamente
            agendados, cada sessão dura de 45 a 50 minutos
          </p>
        </div>
        <Image src={mind} width={300} alt="" className="" />
      </section>

      <section className="bg-parallax4 flex min-h-[500px] flex-col items-start justify-between bg-custom-menu bg-cover bg-fixed px-16 py-6 lg:min-h-[500px]">
        <div className="bg-custom-form flex flex-col rounded-sm">
          <h2
            ref={text5}
            className="mb-4 -translate-x-full text-3xl font-semibold leading-tight tracking-tighter text-custom-orange-500 opacity-0 md:text-4xl"
          >
            Teleconsulta
          </h2>
          <p
            ref={text6}
            className="bg-custom-form mb-4 translate-x-full px-2 py-6 font-semibold text-custom-blue-900 opacity-0 md:text-xl"
          >
            O primeiro contato, uma entrevista inicial para esclarecer dúvidas e
            saber mais detalhes sobre a consulta online, é gratuito.
          </p>
        </div>
        <Link
          href={'/schedule'}
          className="whitespace-nowrap rounded-full bg-custom-blue-900 p-3 hover:animate-pulse"
        >
          Agende aqui
        </Link>
      </section>
    </main>
  )
}
