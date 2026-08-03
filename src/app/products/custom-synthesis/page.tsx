import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomSynthesisPage from "@/components/CustomSynthesisPage";

export const metadata: Metadata = {
  title: "맞춤 합성 · Custom Synthesis",
  description:
    "위드바이오캠 맞춤 합성(Custom Synthesis) 서비스. 유기화합물 및 펩타이드 제조, 공정 개선·원가 절감, 고순도 화장품 펩타이드 원료·합성 유기물 신속 공급. Research Use Only · B2B.",
  keywords: [
    "위드바이오캠",
    "맞춤 합성",
    "Custom Synthesis",
    "펩타이드 제조",
    "화장품 펩타이드 원료",
    "유기합성",
    "LPPS",
    "Research Use Only",
    "클릭 화학",
    "WithBioChem",
  ],
  openGraph: {
    title: "맞춤 합성 · Custom Synthesis | 위드바이오캠",
    description:
      "위드바이오캠 맞춤 합성 서비스 — 펩타이드 제조·유기합성·화장품 펩타이드 원료. 공정 개선, 고순도, Scale-up.",
    type: "website",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/products/custom-synthesis",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <CustomSynthesisPage />
      <Footer />
    </>
  );
}
