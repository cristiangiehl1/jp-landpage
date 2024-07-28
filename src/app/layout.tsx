import './globals.css'

import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Lato, Poppins } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
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
    <html lang="en" className={`${lato.className} ${poppins.variable}`}>
      <body className="text-white">{children}</body>
    </html>
  )
}
