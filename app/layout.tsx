import { Urbanist } from 'next/font/google'

// import { ClerkProvider } from '@clerk/nextjs';

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Spiral Staircase Memberships',
  description: 'The Spriral Staircase - The place for luxury and relaxation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    //  <ClerkProvider
    //    appearance={{
    //       variables: { colorPrimary: "#000000" },
    //       elements: {
    //         formButtonPrimary:
    //           "bg-black border border-black border-solid hover:bg-white hover:text-black",
    //         socialButtonsBlockButton:
    //           "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
    //         socialButtonsBlockButtonText: "font-semibold",
    //         formButtonReset:
    //           "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
    //         membersPageInviteButton:
    //           "bg-black border border-black border-solid hover:bg-white hover:text-black",
    //         card: "bg-[#fafafa]",
    //       },
    //     }}>
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
    // </ClerkProvider>
  )
}
