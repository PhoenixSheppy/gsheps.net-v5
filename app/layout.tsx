import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Phoenix',
  description: 'Rhythm Games, Tech, and Photography!',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen flex items-center justify-center p-4" style={{background: 'linear-gradient(to bottom right, #0f172a, #33416a, #1e293b)'}}>
        {children}
      </body>
    </html>
  )
}