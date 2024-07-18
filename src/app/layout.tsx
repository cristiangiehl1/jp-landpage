import './globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'] })

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
    <html lang="en" className={inter.className}>
      <body className="text-white">{children}</body>
    </html>
  )
}
