import { Metadata } from 'next'

import { ContactForm } from './contact-form'

export const metadata: Metadata = {
  title: 'Contato',
}

export default function Schedule() {
  return (
    <div className="bg-schedule flex flex-col items-center bg-cover bg-fixed py-6">
      <ContactForm />
    </div>
  )
}
