import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ricarodo, Personal portfolio',
  description: 'Ricardo ist an full stack developoert with 8 years of experience',
}

export default function RootLayout({children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-30 text-gray-950 relative h-[5000px]`}>
        <div className="background_blue_left bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11em] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.7rem]"></div>
        <div className="background_blue_left bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.7rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem]"></div>
        <Header/>
        {children}
      </body>
    </html>
  )
}
