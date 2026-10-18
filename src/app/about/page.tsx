import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import AboutExtra from "@/components/AboutExtra";
import Facility from "@/components/Facility";
import { siteSeo, ogImages } from "@/lib/company";
import { breadcrumbLd } from "@/lib/jsonld";

const title = "위드바이오캠 회사 소개 · 연구 시설";
const description =
  "위드바이오캠(WithBioChem)은 유기화학 박사 연구진이 직접 합성을 설계·관리하는 화장품 펩타이드 원료 B2B 파트너입니다. 고려대학교 PhD급 연구진, 자체 연구 시설(합성실·반응실·분석)을 소개합니다.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | 위드바이오캠`,
    description,
    type: "website",
    locale: "ko_KR",
    url: `${siteSeo.siteUrl}/about`,
    images: ogImages(title),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteSeo.ogImage],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const breadcrumb = breadcrumbLd([
    { name: "홈", path: "/" },
    { name: "회사 소개", path: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Header />
      <main className="flex-1 pt-32 sm:pt-36">
        <About standalone />
        <AboutExtra />
        <Facility />
      </main>
      <Footer />
    </>
  );
}
