'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export function HomeContent() {
  const box1 = useRef(null)
  const box2 = useRef(null)
  const box3 = useRef(null)
  const box4 = useRef(null)
  const box5 = useRef(null)
  const box6 = useRef(null)

  useLayoutEffect(() => {
    const boxes = [box1, box2, box3, box4, box5, box6]

    boxes.forEach((box) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: box.current,
          start: 'top bottom',
          end: 'top bottom',
          scrub: 1,
          markers: true,
        },
      })

      tl.to(box.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
      })
    })
  }, [])

  return (
    <section className="mb-10 grid grid-rows-6 gap-8">
      <div
        ref={box1}
        className="-translate-x-full bg-white opacity-0 lg:h-[400px]"
      >
        <h2 className="mb-4 text-xl font-bold leading-tight tracking-tighter text-orange-500 md:text-2xl">
          Psicoterapia
        </h2>
        <p className="">
          Fico feliz em saber que você tem interesse em iniciar esse processo de
          “olhar para si” comigo, será um prazer iniciar nossas sessões.
        </p>
      </div>

      <div
        ref={box2}
        className="translate-x-full bg-white opacity-0 lg:h-[400px]"
      >
        <h2 className="mb-4 text-xl font-bold leading-tight tracking-tighter text-orange-500 md:text-2xl">
          Supervisão clínica individual
        </h2>
        <p className="">
          A supervisão tem por objetivo auxiliar analistas com casos que estejam
          apresentando dificuldade com o manejo transferencial. Sendo um dos
          pilares essências para qualquer analista segundo o tripé analítico
          proposto por Freud.
        </p>
      </div>

      <div
        ref={box3}
        className="-translate-x-full bg-white opacity-0 lg:h-[400px]"
      >
        <h2 className="mb-4 text-xl font-bold leading-tight tracking-tighter text-orange-500 md:text-2xl">
          Consulta sob sigilo
        </h2>
        <p className="">
          O trabalho é desenvolvido em um contexto totalmente confidencial,
          garantindo ao paciente pleno sigilo. A psicoterapia online é um
          procedimento validado pelo CFP (Conselho Federal de Psicologia) desde
          2018. Essa modalidade de tratamento é uma realidade cada vez mais
          presente no nosso dia a dia.
        </p>
      </div>

      <div
        ref={box4}
        className="translate-x-full bg-white opacity-0 lg:h-[400px]"
      >
        <h2 className="mb-4 text-xl font-bold leading-tight tracking-tighter text-orange-500 md:text-2xl">
          Faça uma consulta online
        </h2>
        <p className="">
          Os atendimentos são ao vivo, ou seja, as sessões entre paciente e
          psicanalista acontecem em tempo real, usando um programa que permite o
          uso de voz e imagem. Essa é uma escolha super eficiente, pois permite
          o acolhimento de pessoas em qualquer lugar, desde que tenham
          privacidade e acesso a recursos audiovisuais via Internet. Usamos
          aplicativos como WhatsApp ou plataformas de video-chamada. Ofereço
          psicoterapia individual, com encontros semanais previamente agendados,
          cada sessão dura de 45 a 50 minutos
        </p>
      </div>

      <div
        ref={box5}
        className="-translate-x-full bg-white opacity-0 lg:h-[400px]"
      >
        <h2 className="mb-4 text-xl font-bold leading-tight tracking-tighter text-orange-500 md:text-2xl">
          Conheça minha formação
        </h2>
        <p className="text-left leading-relaxed">
          Dr. João Giehl Formado pela IBMR e psicanalista clínico em constante
          formação no Colégio Freudiano do Rio de Janeiro. Sempre fui apaixonado
          por processos de autoconhecimento e desenvolvimento pessoal, dedicando
          grande parte da minha adolescência e infância para formas de se
          conectar com si, onde acabei me deparando com a psicologia e a
          psicanálise, foi quando essa paixão só aumentou. Atualmente me dedico
          a levar este processo o qual estudo e também continuo praticando, para
          as pessoas que queriam se entender cada vez mais e transformar seus
          sintomas psíquicos (ansiedade, depressão, estresse excessivo e etc) em
          novas possibilidades. Como diz Magno: “A Psicanálise portanto é um
          exercício de liberdade
        </p>
      </div>

      <div
        ref={box6}
        className="translate-x-full bg-white opacity-0 lg:h-[400px]"
      >
        <h2 className="mb-4 text-xl font-bold leading-tight tracking-tighter text-orange-500 md:text-2xl">
          Agende sua consulta!
        </h2>
        <p className="">
          O primeiro contato, uma entrevista inicial para esclarecer dúvidas e
          saber mais detalhes sobre a consulta online, é gratuito.
        </p>
      </div>
    </section>
  )
}
