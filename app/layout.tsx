import { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Container, Theme } from "@radix-ui/themes"
import NavBar from "./NavBar"
import AuthProvider from "./auth/Provider"
import QueryClientProvider from "./QueryClientProvider"
import "@radix-ui/themes/styles.css"
import "./theme-config.css"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: "Issues Dashboard",
  description: "Dashboard for managing issues"
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <QueryClientProvider>
          <AuthProvider>
            <Theme accentColor="violet">
              <NavBar />
              <main className="p-5">
                <Container>{children}</Container>
              </main>
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}