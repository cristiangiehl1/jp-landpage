import { Metadata } from 'next'
import Image from 'next/image'

import jpPhoto from '@/assets/jp-photo-1.jpeg'

import { HomeContent } from './home-content'
import { HomeIcons } from './home-icons'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="flex flex-col gap-4 overflow-x-hidden">
      <div className="mb-48 flex flex-col gap-6 px-10 md:flex-row md:justify-between md:px-20">
        <div className="w-[100%] md:w-[50vw]">
          <div className="mb-4 border-y-2 border-white py-4">
            <h1 className="font-bold tracking-widest text-custom-skin-500 md:text-2xl">
              Dr. João Pedro
            </h1>

            <p className="text-xs font-semibold text-white lg:text-sm">
              Psicólogo Clínico (CRP: 05/72305)
            </p>
          </div>

          <div className="mb-4">
            <h2 className="mb-2 text-xl font-semibold tracking-tighter text-custom-skin-500 md:text-2xl">
              Transformando vidas e promovendo bem estar através da psicoterapia
            </h2>
            <p className="font-semibold">
              Para você que está em busca de formas melhores de viver, alívio
              para seus sofrimentos, crescimento pessoal e autoconhecimento.
            </p>
          </div>

          <HomeIcons />
        </div>

        <div className="flex place-content-center">
          <Image
            src={jpPhoto}
            width={400}
            alt="Dr. João Pedro com blusa social branca."
            quality={80}
          />
        </div>
      </div>

      <HomeContent />
    </div>
  )
}
