import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { companyInfo, siteSeo } from "@/lib/company";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://withbiochem.com"),
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
  alternates: {
    canonical: "/",
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
