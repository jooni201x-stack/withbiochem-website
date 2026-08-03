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
  title: "WITHBIOCHEM | Custom Organic Synthesis & Peptide Manufacturing",
  description:
    "위드바이오캠 — 맞춤 유기합성 · 펩타이드 제조 · 화장품 기능성 원료. LPPS 기반 고순도 합성, COA 제공, mg→kg Scale-up, B2B/ODM.",
  keywords: [
    "WITHBIOCHEM",
    "위드바이오캠",
    "맞춤 유기합성",
    "펩타이드",
    "LPPS",
    "화장품 원료",
    "클릭 화학",
    "아지도",
    "Palmitoyl Tripeptide-5",
    "GHK-Cu",
    "B2B",
    "국내 합성",
  ],
  openGraph: {
    title: "WITHBIOCHEM | Custom Synthesis & Peptide Manufacturing",
    description:
      "Research-driven Custom Synthesis Partner. 고순도 · LPPS · COA · mg→kg Scale-up",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
