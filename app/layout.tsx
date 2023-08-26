import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, NavBar } from '@components'
import {ScrollUp} from '@components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Goho',
  description: 'Next Generation Membership App.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
        <ScrollUp></ScrollUp>
      </body>
    </html>
  )
}
