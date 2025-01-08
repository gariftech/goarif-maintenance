import './globals.css'

import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

const NunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'This Website is under construction',
  description: 'This Website is maintenance mode, please come back later.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${NunitoSans.className} antialiased`}>{children}</body>
    </html>
  )
}
