import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import ProductCombos from "@/components/ProductCombos";
import { siteSeo, ogImages } from "@/lib/company";
import { breadcrumbLd } from "@/lib/jsonld";

const title = "화장품 펩타이드 원료 제품";
const description =
  "위드바이오캠 화장품 펩타이드 원료 제품 목록. Palmitoyl Tripeptide-5, GHK-Cu, Palmitoyl Tripeptide-1, Dipeptide-2, 맞춤 합성. 추천 조합 — 듀얼 펩타이드, 리커버리 라인, 아이컨투어.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | 위드바이오캠`,
    description,
    type: "website",
    locale: "ko_KR",
    url: `${siteSeo.siteUrl}/products`,
    images: ogImages(title),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteSeo.ogImage],
  },
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  const breadcrumb = breadcrumbLd([
    { name: "홈", path: "/" },
    { name: "주요 제품", path: "/products" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Header />
      <main className="flex-1 pt-32 sm:pt-36">
        <Products standalone />
        <ProductCombos />
      </main>
      <Footer />
    </>
  );
}
