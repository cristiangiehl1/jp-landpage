'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { useRef } from 'react'
import { FaLock } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

export function HomeContent() {
  const container = useRef(null)

  useGSAP(
    () => {
      const text1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.gsap__text1',
          start: 'center bottom',
          end: 'bottom center',
          scrub: 1,
        },
      })

      text1.to('.gsap__text1', {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: 'power2.inOut',
      })

      const box2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.gsap__box2',
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
        },
      })

      box2.to('.gsap__box2', {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: 'power2.inOut',
      })

      const text2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.gsap__text2',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1,
        },
      })

      text2.to('.gsap__text2', {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: 'power2.inOut',
      })

      const box3 = gsap.timeline({
        scrollTrigger: {
          trigger: '.gsap__box3',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
      })

      box3.to('.gsap__box3', {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
      })

      const text3 = gsap.timeline({
        scrollTrigger: {
          trigger: '.gsap__text3',
          start: 'center bottom',
          end: 'bottom center',
          scrub: 1,
        },
      })

      text3.to('.gsap__text3', {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: 'power2.inOut',
      })
    },
    { scope: container },
  )

  return (
    <main ref={container} className="grid grid-rows-[repeat(6_min-content)]">
      <section className="flex min-h-[500px] flex-col gap-6 bg-parallax1 bg-cover bg-fixed px-10 py-6 md:px-16 lg:min-h-screen">
        <h2 className="gsap__text1 -translate-x-full text-3xl font-bold leading-tight tracking-tighter text-custom-orange-500 opacity-0 md:text-4xl">
          Serviços
        </h2>
        <div className="flex flex-col gap-2 overflow-hidden rounded-lg bg-custom-content-bg p-6">
          <h3 className="gsap__text1 translate-x-full font-semibold text-custom-orange-500 opacity-0 md:text-xl">
            Psicoterapia online (Análise)
          </h3>
          <p className="gsap__text1 translate-x-full font-semibold text-custom-blue-900 opacity-0 md:text-xl">
            Fico feliz em saber que você tem interesse em iniciar esse processo
            de “olhar para si” comigo, será um prazer iniciar nossas sessões.
          </p>
        </div>

        <div className="flex flex-col gap-2 overflow-hidden rounded-lg bg-custom-content-bg p-6">
          <h3 className="gsap__text1 -translate-x-full font-semibold text-custom-orange-500 opacity-0 md:text-xl">
            Supervisão Clínica Individual (Online)
          </h3>
          <p className="gsap__text1 -translate-x-full font-semibold text-custom-blue-900 opacity-0 md:text-xl">
            A supervisão tem por objetivo auxiliar analistas com casos que
            estejam apresentando dificuldade com o manejo transferencial. Sendo
            um dos pilares essências para qualquer analista segundo o tripé
            analítico proposto por Freud.
          </p>
        </div>
      </section>

      {/* <section className="gsap__box1 mx-10 my-10 max-w-[800px] -translate-x-full rounded-full bg-custom-skin-500 px-10 py-16 opacity-0 shadow-md md:p-16 lg:mx-auto">
        <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-custom-blue-900 drop-shadow-sm md:text-4xl">
          Supervisão clínica individual
        </h2>
        <p className="text-custom-blue-900 md:text-xl">
          A supervisão tem por objetivo auxiliar analistas com casos que estejam
          apresentando dificuldade com o manejo transferencial. Sendo um dos
          pilares essências para qualquer analista segundo o tripé analítico
          proposto por Freud.
        </p>
      </section> */}

      <section className="gsap__box3 flex max-w-[800px] translate-x-full flex-col items-center p-6 opacity-0 lg:mx-auto">
        <FaLock size={50} className="text-custom-blue-900" />
        <div className="m-10 rounded-3xl bg-custom-skin-500 p-5 shadow-md md:p-16">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-custom-blue-900 md:text-4xl">
            Consulta sob sigilo
          </h2>
          <div className="flex flex-col gap-4 rounded-lg p-2">
            <p className="text-custom-blue-900 md:text-xl">
              O trabalho é desenvolvido em um contexto totalmente confidencial,
              garantindo ao paciente pleno sigilo.
            </p>
            <p className="text-custom-blue-900 md:text-xl">
              A psicoterapia online é um procedimento validado pelo CFP
              (Conselho Federal de Psicologia) desde 2018. Essa modalidade de
              tratamento é uma realidade cada vez mais presente no nosso dia a
              dia.
            </p>
          </div>
        </div>
        <FaLock size={50} className="text-custom-blue-900" />
      </section>

      <section className="flex min-h-[500px] gap-6 bg-slate-200 bg-parallax2 bg-cover bg-top bg-no-repeat p-10 md:px-16 lg:min-h-screen lg:bg-parallax22">
        <div className="flex flex-col gap-6">
          <div className="gsap__box2 -translate-x-full opacity-0">
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-custom-blue-900 md:text-4xl">
              Sobre mim
            </h2>
            <div className="flex flex-col gap-4 rounded-lg bg-custom-content-bg p-6">
              <p className="text-left leading-relaxed text-custom-blue-900 md:text-xl">
                Formado pela IBMR e psicanalista clínico em constante formação
                no Colégio Freudiano do Rio de Janeiro. Sempre fui apaixonado
                por processos de autoconhecimento e desenvolvimento pessoal,
                dedicando grande parte da minha adolescência e infância para
                formas de se conectar com si, onde acabei me deparando com a
                psicologia e a psicanálise, foi quando essa paixão só aumentou.
                Atualmente me dedico a levar este processo o qual estudo e
                também continuo praticando, para as pessoas que queriam se
                entender cada vez mais e transformar seus sintomas psíquicos
                (ansiedade, depressão, estresse excessivo e etc) em novas
                possibilidades. Como diz Magno:
              </p>
              <p className="text-left italic leading-relaxed text-custom-blue-900 md:text-xl">
                {`"A Psicanálise portanto é um exercício de liberdade."`}
              </p>
            </div>
          </div>

          <div className="gsap__box2 translate-x-full opacity-0">
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-custom-blue-900 md:text-4xl">
              Atuação
            </h2>
            <ul className="list-inside list-disc rounded-lg bg-custom-content-bg p-6">
              <li className="text-left leading-relaxed text-custom-blue-900 md:text-xl">
                Formação em Psicanálise – Colégio Freudiano do Rio de Janeiro.
              </li>
              <li className="text-left leading-relaxed text-custom-blue-900 md:text-xl">
                Supervisor do setor de psicologia – Clínica Santa Teresinha
                (SEMAV).
              </li>
              <li className="text-left leading-relaxed text-custom-blue-900 md:text-xl">
                Graduado em psicologia - IBMR.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex min-h-[500px] gap-4 bg-slate-200 bg-parallax3 bg-cover bg-center bg-no-repeat py-6 md:px-16 lg:min-h-screen">
        <div className="px-10 md:px-16">
          <h2 className="gsap__text2 mb-4 -translate-x-full text-3xl font-bold leading-tight tracking-tighter text-custom-orange-500 opacity-0 md:text-4xl">
            Faça uma consulta online
          </h2>
          <div className="flex flex-col gap-4 rounded-lg bg-custom-content-bg p-6">
            <p className="gsap__text2 translate-x-full overflow-hidden font-semibold text-custom-blue-900 opacity-0 md:text-xl">
              Os atendimentos são ao vivo, ou seja, as sessões entre paciente e
              psicanalista acontecem em tempo real, usando um programa que
              permite o uso de voz e imagem. Essa é uma escolha super eficiente,
              pois permite o acolhimento de pessoas em qualquer lugar, desde que
              tenham privacidade e acesso a recursos audiovisuais via Internet.
            </p>
            <p className="gsap__text2 translate-x-full font-semibold text-custom-blue-900 opacity-0 md:text-xl">
              Usamos aplicativos como Google Meets ou Zoom.
            </p>
            <p className="gsap__text2 -translate-x-full font-semibold text-custom-blue-900 opacity-0 md:text-xl">
              Ofereço psicoterapia individual, com encontros semanais
              previamente agendados, cada sessão dura em torno de 40 minutos.
            </p>
          </div>
        </div>
      </section>

      <section className="flex min-h-[500px] flex-col items-start gap-6 bg-custom-menu bg-schedule bg-cover bg-fixed px-10 py-6 md:px-16 lg:min-h-screen">
        <div className="flex w-full flex-col rounded-sm">
          <h2 className="gsap__text3 -translate-x-full text-3xl font-semibold leading-tight tracking-tighter text-custom-orange-500 opacity-0 md:text-4xl">
            Vamos conversar?
          </h2>

          <h3 className="gsap__text3 mb-4 translate-x-full text-center font-semibold text-white opacity-0 md:text-xl">
            Me enviei uma mensagem e entrarei em contato assim que possível.
          </h3>

          <div className="overflow-hidden rounded-lg bg-custom-content-bg p-6">
            <p className="gsap__text3 mb-4 translate-x-full font-semibold text-custom-blue-900 opacity-0 md:text-xl">
              No primeiro contato é feito uma entrevista inicial para esclarecer
              dúvidas e saber mais detalhes sobre a consulta online.
            </p>
          </div>
        </div>

        <Link
          href={'/contact'}
          className="gsap__text3 translate-x-full whitespace-nowrap rounded-full bg-custom-blue-900 p-3 opacity-0 transition-colors duration-500 hover:bg-custom-orange-500"
        >
          Entre em contato
        </Link>
      </section>
    </main>
  )
}
