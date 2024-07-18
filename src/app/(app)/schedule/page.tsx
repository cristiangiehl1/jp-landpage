import { Metadata } from 'next'

import { SchedulingForm } from './scheduling-form'

export const metadata: Metadata = {
  title: 'Agendamento',
}

export default function Schedule() {
  return (
    <div className="bg-schedule flex flex-col items-center bg-cover bg-fixed py-6">
      <h1 className="mb-6 px-2 text-xl md:text-2xl">
        Deixe aqui suas informações para agendarmos uma sessão
      </h1>
      <SchedulingForm />
    </div>
  )
}
