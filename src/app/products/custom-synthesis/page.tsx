import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomSynthesisPage from "@/components/CustomSynthesisPage";

export const metadata: Metadata = {
  title: "Custom Synthesis · 맞춤 합성 서비스 | WITHBIOCHEM",
  description:
    "유기화합물 및 맞춤형 합성 서비스. 공정 개선·원가 절감, 고순도 펩타이드·합성 유기물 신속 공급. Research Use Only. Expertise & Facility.",
  keywords: [
    "Custom Synthesis",
    "맞춤 합성",
    "유기합성",
    "펩타이드 합성",
    "Research Use Only",
    "클릭 화학",
    "WITHBIOCHEM",
  ],
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
