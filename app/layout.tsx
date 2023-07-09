import '@/styles/globals.css'
import { Metadata } from 'next'

export const metadata = {
    title: 'LinkTree',
    description: 'Personla Linktree built with Next.js & Tailwind CSS',
  };
export default function RootLayout({

    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }