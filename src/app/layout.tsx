import React from 'react';
import type { Metadata } from "next";
import { Roboto, Open_Sans, Archivo } from "next/font/google";
import "./globals.css";

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-roboto',
});

const open_sans_init = Open_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-open-sans',
});

const archivo_init = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  title: "NKD Studio",
  description: "Neil Kelsey Development Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_init.variable} ${open_sans_init.variable} ${archivo_init.variable}`}>{children}</body>
    </html>
  );
}
