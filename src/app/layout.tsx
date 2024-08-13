import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
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
      <body className={`${roboto_init.variable} ${open_sans_init.variable}`}>{children}</body>
    </html>
  );
}
