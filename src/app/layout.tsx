import './globals.css'

import type { Metadata } from 'next'
import {
  Lato,
  Manrope,
  Montserrat,
  Nova_Mono,
  Nunito_Sans,
  Poppins,
} from 'next/font/google'

const mont = Montserrat({ subsets: ['latin'] })
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['500'],
})
const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['500'],
})
const nova = Nova_Mono({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400'],
})
const lato = Lato({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Psicólogo João Pedro',
    default: 'Psicólogo João Pedro',
  },
  icons: 'http://localhost:3000/logo.png',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lato.className} ${manrope.variable}`}>
      <body className="text-white">{children}</body>
    </html>
  )
}
