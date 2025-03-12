import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dynamo - The Future of Communication",
  description:
    "Project Dynamo is reimagining communication for the modern era, bringing back what you loved about Skype with enhanced features and security."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'
