import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

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
  },
  twitter: {
    title: "Jorge Brunetto - criação e desenvolvimento",
    creator: "@jorgebrunetto",
    site: "https://jorgebrunetto.com.br",
    card: "summary_large_image",
  },
  robots: "index, follow",
  authors: [{ name: "Jorge Brunetto", url: "https://jorgebrunetto.com.br" }],
  appleWebApp: true,
  applicationName: "Jorge Brunetto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
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
              <section className="fixed right-2 top-2 z-50 flex space-x-1">
                <ModeToggle />
                <LanguageToggle />
              </section>

              <SideBar />
              <ScrollToTop />

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
