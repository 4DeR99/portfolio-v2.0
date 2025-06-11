import type { Metadata } from 'next'
import { Inter, New_Rocker, Nunito } from 'next/font/google'
import '../styles/globals.css'
import { cn } from '@/lib/utils'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const nicoMoji = localFont({
  src: './fonts/nico-moji.ttf',
  display: 'swap',
  variable: '--font-nico',
})

const newRocker = New_Rocker({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-new-rocker',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: '4DeR',
  description: "4der's Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          nicoMoji.variable,
          newRocker.variable,
          nunito.variable,
          'antialiased',
        )}
      >
        {children}
      </body>
    </html>
  )
}
