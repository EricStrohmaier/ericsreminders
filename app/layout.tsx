import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import LayoutPage from "@/components/app/LayoutPage"
import TimeProvider from "@/lib/time"
import { siteConfig } from "@/site-config"

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  title: {
    default: "let's be aware",
    template: "%s - Eric Strohmaier",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(", "),
  openGraph: {
    title: "let's be aware",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    siteName: "let's be aware again - Eric Strohmaier",
  },
  twitter: {
    card: "summary_large_image",
    title: "let's be aware again - Eric Strohmaier",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@EricStrohmaier",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="c5878337-6be0-492a-8387-b8be577fbb65"
        ></script>
      </head>
      <body>
        <ThemeProvider attribute="class">
          <TimeProvider>
            <LayoutPage>
              <main className="prose-xl m-4 mx-auto mt-8 w-full max-w-4xl px-4 dark:prose-invert md:px-0">
                {children}
              </main>
            </LayoutPage>
          </TimeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
