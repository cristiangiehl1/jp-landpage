import { ReactNode } from 'react'

import { Footer } from '../components/footer'
import Header from '../components/header'
import Whatsapp from '../components/whatssapp'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="from-custom-gray-500 via-custom-blue-900 animate-gradient to-custom-gray-800 min-h-screen bg-gradient-to-br bg-[length:200%_200%]">
      <Header />
      {children}
      <Whatsapp />
      <Footer />
    </div>
  )
}
