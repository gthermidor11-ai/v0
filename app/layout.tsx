import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "CADD - Canada-Afrique pour le Développement Durable",
  description:
    "Organisation humanitaire multiculturelle soutenant les immigrants et réfugiés africains au Canada. Aide alimentaire, programmes jeunesse et intégration communautaire.",
  keywords: [
    "CADD",
    "développement durable",
    "immigrants",
    "réfugiés",
    "Afrique",
    "Canada",
    "aide humanitaire",
    "Montréal",
  ],
  openGraph: {
    title: "CADD - Canada-Afrique pour le Développement Durable",
    description: "Organisation humanitaire multiculturelle soutenant les immigrants et réfugiés africains au Canada.",
    siteName: "CADD",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CADD - Canada-Afrique pour le Développement Durable",
      },
    ],
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CADD - Canada-Afrique pour le Développement Durable",
    description: "Organisation humanitaire multiculturelle soutenant les immigrants et réfugiés africains au Canada.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.jpg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
