import Footer from "@/components/footer"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Supachat",
  description: "Built with Supabase + Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
