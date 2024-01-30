import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Header from "@/app/components/layout/Header"
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight:['400','500','700','900'] })

export const metadata: Metadata = {
  title: 'Học Viện IMO - Marketing Online 4.0',
  description: 'Chuyên đào tạo & Cung cấp nguồn nhân lực trong lĩnh vực Digital Marketing cho doanh nghiệp vừa và nhỏ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={roboto.className}>
        <Header />
        <main className='container px-3 mx-auto pt-7'>
        {children}
        </main>
      </body>
    </html>
  )
}
