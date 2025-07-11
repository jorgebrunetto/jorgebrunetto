import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

import { LanguageProvider } from "@/components/language-provider";
import LanguageToggle from "@/components/language-toggle";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SideBar } from "@/components/side-bar";
import { ModeToggle } from "@/components/toggle-mode";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Jorge Brunetto || Personal Portfolio",
  description:
    "Site profissional de Jorge Brunetto. Freelancer Frontend, com VueJS, React/Native, Angular, criação de sites, designer ux/ui, mail marketing, SEO para seus sites e sistemas em geral.",
  keywords:
    "Jorge Brunetto, Frontend, VueJS, React/Native, Angular, criação de sites, designer ux/ui, mail marketing, SEO",
  openGraph: {
    title: "Jorge Brunetto - criação e desenvolvimento",
    description:
      "Site profissional de Jorge Brunetto. Freelancer Frontend, com VueJS, React/Native, Angular, criação de sites, designer ux/ui, mail marketing, SEO para seus sites e sistemas em geral.",
    url: "https://jorgebrunetto.com.br",
    siteName: "jorgebrunetto",
    locale: "pt_BR",
    type: "website",
    countryName: "Brasil",
    images: [
      {
        url: "https://jorgebrunetto.com.br/share-jorgebrunetto.jpg",
        width: 200,
        height: 200,
        alt: "Jorge Brunetto - criação e desenvolvimento",
      },
    ],
    phoneNumbers: "+55 15 98137-6495",
    emails: "jorgebrunetto@hotmail.com",
  },
  twitter: {
    description:
      "Site profissional de Jorge Brunetto. Freelancer Frontend, com VueJS, React/Native, Angular, criação de sites, designer ux/ui, mail marketing, SEO para seus sites e sistemas em geral.",
    title: "Jorge Brunetto - criação e desenvolvimento",
    creator: "@jorgebrunetto",
    site: "https://jorgebrunetto.com.br",
    card: "summary_large_image",
    images: "https://jorgebrunetto.com.br/share-jorgebrunetto.jpg",
  },
  robots: "index, follow",
  authors: [{ name: "Jorge Brunetto", url: "https://jorgebrunetto.com.br" }],
  appleWebApp: true,
  applicationName: "Jorge Brunetto",
  publisher: "Jorge Brunetto - Vercel",
  creator: "Jorge Brunetto",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>Jorge Brunetto - criação e desenvolvimento</title>
        <meta
          name="description"
          content="Site profissional de Jorge Brunetto. Freelancer Frontend, com VueJS, React/Native, Angular, criação de sites, designer ux/ui, mail marketing, SEO para seus sites e sistemas em geral."
        />

        <meta property="og:url" content="https://jorgebrunetto.com.br" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Jorge Brunetto - criação e desenvolvimento"
        />
        <meta
          property="og:description"
          content="Site profissional de Jorge Brunetto. Freelancer Frontend, com VueJS, React/Native, Angular, criação de sites, designer ux/ui, mail marketing, SEO para seus sites e sistemas em geral."
        />
        <meta
          property="og:image"
          content="https://jorgebrunetto.com.br/share-jorgebrunetto.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jorgebrunetto.com.br" />
        <meta property="twitter:url" content="https://jorgebrunetto.com.br" />
        <meta
          name="twitter:title"
          content="Jorge Brunetto - criação e desenvolvimento"
        />
        <meta
          name="twitter:description"
          content="Site profissional de Jorge Brunetto. Freelancer Frontend, com VueJS, React/Native, Angular, criação de sites, designer ux/ui, mail marketing, SEO para seus sites e sistemas em geral."
        />
        <meta
          name="twitter:image"
          content="https://jorgebrunetto.com.br/share-jorgebrunetto.jpg"
        />
      </head>

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <main className="flex flex-col min-h-screen pb-20 md:pb-0">
              <section className="fixed right-2 top-2 z-40 flex space-x-1">
                <ModeToggle />
                <LanguageToggle />
                <ScrollToTop />
              </section>

              <SideBar />

              {children}
            </main>
          </LanguageProvider>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
