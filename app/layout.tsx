import './globals.css'
import { Inter } from 'next/font/google'
import  Navigation  from '@/components/Navigation'
import Provider from './Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Co.Found',
  description: 'Connect founders with technical co-founders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
        <Provider>
            <div className="group">
              <Navigation />
            </div>
            {children}
        </Provider>
        </body>
      </html>
  )
}

