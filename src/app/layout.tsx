import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Shreya | Portfolio',
  description: "Shreya's Portfolio Website",
  keywords:
    "Shreya ",
  icons: [
    { rel: "icon", url: "/icons/favicon/favicon.ico" },
    { rel: "apple-touch-icon", url: "/icons/favicon/apple-touch-icon.png" },
    { rel: "icon", sizes: "32x32", url: "/icons/favicon/favicon-32x32.png" },
    { rel: "icon", sizes: "16x16", url: "/icons/favicon/favicon-16x16.png" },
  ],
  manifest: "/icons/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-indigo-50/30 dark:bg-indigo-950/20`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen">
            <header className="bg-background shadow-md">
              <NavBar />
            </header>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
