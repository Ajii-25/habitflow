import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HabitFlow — Build better habits',
  description: 'Track your habits, understand your patterns, and build a routine that flows.',
  generator: 'HabitFlow',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f7fb',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
