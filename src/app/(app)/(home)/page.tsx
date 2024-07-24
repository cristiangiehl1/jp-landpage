import { Metadata } from 'next'
import Image from 'next/image'

import jpPhoto from '@/assets/jp-photo.png'

import { HomeContent } from './home-content'
import { HomeIcons } from './home-icons'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <section className="grid grid-cols-2 place-content-end bg-slate-200 px-2 pt-10 sm:px-10">
        <div className="flex items-end">
          <Image
            src={jpPhoto}
            height={500}
            width={500}
            alt="Dr. João Pedro com blusa social branca."
            quality={80}
            className=""
          />
        </div>

        <div className="mb-10 rounded-lg bg-custom-skin-500 p-2 shadow-lg md:mb-24 md:px-10">
          <div className="mb-4 py-4">
            <h1 className="font-greatVibes text-2xl font-bold tracking-widest text-custom-blue-900 md:text-3xl lg:text-5xl">
              João Pedro Giehl
            </h1>

            <p className="text-xs font-semibold text-custom-blue-900 lg:text-lg">
              Psicólogo Clínico (CRP: 05/72305)
            </p>
          </div>

          <div className="mb-10">
            <h2 className="mb-2 text-base font-semibold leading-none tracking-wide text-custom-orange-500 md:text-2xl lg:text-4xl">
              Transformando vidas e promovendo bem estar através da psicoterapia
            </h2>
            <p className="text-xs text-custom-blue-900 md:text-lg">
              Para você que está em busca de formas melhores de viver, alívio
              para seus sofrimentos, crescimento pessoal e autoconhecimento.
            </p>
          </div>

          <HomeIcons />
        </div>
      </section>

      <HomeContent />
    </div>
  )
}
