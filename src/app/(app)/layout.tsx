import { ReactNode } from 'react'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Whatsapp } from '@/components/whatssapp'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen grid-rows-[max-content_1fr_max-content] bg-slate-200">
      <Header />

      {children}

      <Whatsapp />
      <Footer />
    </div>
  )
}
