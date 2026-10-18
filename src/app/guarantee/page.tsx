import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Guarantee from "@/components/Guarantee";
import { siteSeo, ogImages } from "@/lib/company";
import { breadcrumbLd } from "@/lib/jsonld";

const title = "순도 96% 보장 · 최저가 납품 보장제";
const description =
  "위드바이오캠 보장제 상세 · 조건. 업계 최초 순도 96% 보장(제품별 COA 기본 제공), 동일 규격 기준 더 낮은 정식 견적이 있으면 그 가격에 맞춰 납품하는 최저가 납품 보장제를 운영합니다.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | 위드바이오캠`,
    description,
    type: "website",
    locale: "ko_KR",
    url: `${siteSeo.siteUrl}/guarantee`,
    images: ogImages(title),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteSeo.ogImage],
  },
  alternates: {
    canonical: "/guarantee",
  },
};

export default function GuaranteePage() {
  const breadcrumb = breadcrumbLd([
    { name: "홈", path: "/" },
    { name: "보장제", path: "/guarantee" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Header />
      <main className="flex-1 pt-32 sm:pt-36">
        <Guarantee standalone />
      </main>
      <Footer />
    </>
  );
}
