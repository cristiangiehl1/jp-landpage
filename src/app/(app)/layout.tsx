import { ReactNode } from 'react'

import { Footer } from '../components/footer'
import Header from '../components/header'
import Whatsapp from '../components/whatssapp'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    // <div className="min-h-screen animate-gradient bg-gradient-to-br from-custom-gray-800 via-custom-blue-900 to-custom-gray-800 bg-[length:200%_200%]">
    <div className="grid min-h-screen grid-rows-[max-content_1fr_max-content] bg-custom-blue-900">
      <Header />
      {children}

      <Whatsapp />
      <Footer />
    </div>
  )
}
