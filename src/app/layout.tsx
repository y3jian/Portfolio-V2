import type { Metadata } from "next";
import { Inter, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Yolanda Jian",
  description:
    "Management engineering + AI student passionate about software development and data.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${openSans.variable} ${roboto.variable} scroll-smooth antialiased`}
    >
      <body className="bg-cream font-body text-black">{children}</body>
    </html>
  );
}
