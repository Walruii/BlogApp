import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import type { Metadata } from 'next'
import Header from './header'
import Footer from './footer'

export const metadata: Metadata = {
  title: 'dev blog',
  description: 'this is a dev blog website to share own thoughts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="container bg-body-tertiary rounded-3">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
