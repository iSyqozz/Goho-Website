import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, NavBar } from '@components'
import {ScrollUp} from '@components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://goho.club'),
  title: 'Goho',
  description: 'Next Generation Membership App.',
  alternates:{
    canonical:'/',
  },
  authors:[{name:'iSy',url:'https://github.com/iSyqozz/'}],
  applicationName:'Goho',
  generator:'Next.js',
  keywords:['Goho','Presale','Club', 'solana'],
  viewport:{ width: "device-width", initialScale: 1 },
  openGraph:{
    type:'website',
    title:'Goho Presale',
    description:'Goho Private Presale',
    siteName:'Goho Presale',
    images:[
      {
        url:'public/logo-goho.png'
      }
    ]
  },
  twitter:{

  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className=' scroll-smooth'  lang="en">
      <head>
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
