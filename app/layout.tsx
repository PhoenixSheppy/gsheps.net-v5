import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contact Card',
  description: 'Personal contact card website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen flex items-center justify-center p-4">
        {children}
      </body>
    </html>
  )
}