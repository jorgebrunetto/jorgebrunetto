import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import Script from "next/script";

import { LanguageProvider } from "@/components/language-provider";
import LanguageToggle from "@/components/language-toggle";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SideBar } from "@/components/side-bar";
import { ModeToggle } from "@/components/toggle-mode";
import { Toaster } from "@/components/ui/sonner";
import { WhatsappMsg } from "@/components/whatsapp-msg";
import Head from "next/head";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Jorge Brunetto | Personal Portfolio",
  description:
    "Desenvolvedor sênior especializado em React, Next.js e TypeScript. Criação de aplicações escaláveis, SSR/SSG, API integration e arquitetura front-end moderna.",
  keywords:
    "Jorge Brunetto, desenvolvedor front-end, React, Next.js, TypeScript, especialista React, aplicações web, front-end performance, SSR, SSG, frontend freelancer, arquitetura front-end, Tech Lead Front-end, desenvolvimento web escalável",
  openGraph: {
    title: "Jorge Brunetto - criação e desenvolvimento",
    description:
      "Desenvolvedor sênior especializado em React, Next.js e TypeScript. Criação de aplicações escaláveis, SSR/SSG, API integration e arquitetura front-end moderna.",
    url: "https://jorgebrunetto.com.br",
    siteName: "jorgebrunetto",
    locale: "pt_BR",
    type: "website",
    countryName: "Brasil",
    images: [
      {
        url: "https://jorgebrunetto.com.br/share.png",
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
      "Desenvolvedor sênior especializado em React, Next.js e TypeScript. Criação de aplicações escaláveis, SSR/SSG, API integration e arquitetura front-end moderna.",
    title: "Jorge Brunetto - criação e desenvolvimento",
    creator: "@jorgebrunetto",
    site: "https://jorgebrunetto.com.br",
    card: "summary_large_image",
    images: "https://jorgebrunetto.com.br/share.png",
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
      <Head>
        <link
          rel="canonical"
          href="https://jorgebrunetto.com.br"
          key="canonical"
        />
        <meta
          property="og:logo"
          content="https://jorgebrunetto.com.br/share.png"
        />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XH15NPKBG0" />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XH15NPKBG0');
        `}
        </Script>

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
                <WhatsappMsg />
              </section>

              <SideBar />

              {children}
            </main>
            <Toaster
              position="top-center"
              toastOptions={{
                duration: 3000,
                className: "max-w-md",
              }}
            />
          </LanguageProvider>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
