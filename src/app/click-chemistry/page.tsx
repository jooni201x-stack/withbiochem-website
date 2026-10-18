import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClickChemistry from "@/components/ClickChemistry";
import { siteSeo, ogImages } from "@/lib/company";
import { breadcrumbLd } from "@/lib/jsonld";

const title = "아지도 아미노산 · 클릭 화학 빌딩블록 합성";
const description =
  "위드바이오캠의 아지도(azide) 화합물·클릭 화학 빌딩블록 맞춤 합성. Azidoalanine, Azidohomoalanine(Aha), p-Azido-L-phenylalanine(pAzF), Lys(N₃), 펩타이드 컨주게이션 링커 공급.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | 위드바이오캠`,
    description,
    type: "website",
    locale: "ko_KR",
    url: `${siteSeo.siteUrl}/click-chemistry`,
    images: ogImages(title),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteSeo.ogImage],
  },
  alternates: {
    canonical: "/click-chemistry",
  },
};

export default function ClickChemistryPage() {
  const breadcrumb = breadcrumbLd([
    { name: "홈", path: "/" },
    { name: "클릭 화학", path: "/click-chemistry" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Header />
      <main className="flex-1 pt-32 sm:pt-36">
        <ClickChemistry />
      </main>
      <Footer />
    </>
  );
}
