import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { companyInfo, siteSeo } from "@/lib/company";
import FloatingContactButton from "@/components/FloatingContactButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 상대 canonical 경로를 https://www.withbiochem.com/... 로 해석
  metadataBase: new URL(siteSeo.siteUrl),
  title: {
    default: siteSeo.titleDefault,
    template: `%s | ${companyInfo.nameKo}`,
  },
  description: siteSeo.description,
  keywords: [...siteSeo.keywords],
  authors: [{ name: companyInfo.displayName }],
  creator: companyInfo.displayName,
  publisher: companyInfo.displayName,
  applicationName: siteSeo.siteName,
  category: "Biotechnology",
  openGraph: {
    type: "website",
    locale: siteSeo.locale,
    siteName: siteSeo.siteName,
    title: siteSeo.openGraphTitle,
    description: siteSeo.openGraphDescription,
    url: siteSeo.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: siteSeo.openGraphTitle,
    description: siteSeo.openGraphDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "LkwS5QBPhz4_x_wAMnJWW71u5KOWtPk1KlrtgqDiT5A",
    other: {
      "naver-site-verification":
        "4fe9e1b152c143633fa284ce435c4080005ac06e",
    },
  },
  // 페이지별 canonical만 사용 (레이아웃 전역 "/" 지정 시 하위 페이지 혼선 방지)
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
        <FloatingContactButton />
      </body>
    </html>
  );
}
