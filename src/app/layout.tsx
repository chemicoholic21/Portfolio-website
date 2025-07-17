import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taniya Souza - Portfolio",
  description:
    "This is a portfolio of my work, including both personal and production projects.",
  openGraph: {
    title: "Taniya Souza - Portfolio",
    description:
      "This is a portfolio of my work, including both personal and production projects.",
    images: [
      "/devfolioSnip.png"
    ],
    url: "https://taniyasouza.github.io/devfolio/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taniya Souza - Portfolio",
    description:
      "This is a portfolio of my work, including both personal and production projects.",
    images: [
      "/devfolioSnip.png"
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
