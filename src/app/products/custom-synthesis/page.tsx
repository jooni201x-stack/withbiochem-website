import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomSynthesisPage from "@/components/CustomSynthesisPage";
import { getProductBySlug } from "@/lib/products";
import { productLd, breadcrumbLd, faqLd } from "@/lib/jsonld";
import { siteSeo, ogImages } from "@/lib/company";

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
    images: ogImages("맞춤 합성 · Custom Synthesis | 위드바이오캠"),
  },
  twitter: {
    card: "summary_large_image",
    title: "맞춤 합성 · Custom Synthesis | 위드바이오캠",
    description:
      "위드바이오캠 맞춤 합성 서비스 — 펩타이드 제조·유기합성·화장품 펩타이드 원료. 공정 개선, 고순도, Scale-up.",
    images: [siteSeo.ogImage],
  },
  alternates: {
    canonical: "/products/custom-synthesis",
  },
};

const faqs = [
  {
    question: "최소 주문량(MOQ)은 얼마인가요?",
    answer:
      "50g부터 주문 가능하며, 제품별로 협의 가능합니다. 신규 거래처는 샘플 제공도 협의합니다.",
  },
  {
    question: "COA를 제공하나요?",
    answer:
      "네, 순수 분말(96% 순도) 기준으로 제품별 COA(분석성적서)를 기본 제공합니다.",
  },
  {
    question: "5-mer 이상도 합성 가능한가요?",
    answer:
      "5-mer 이하 짧은 펩타이드는 LPPS 공정으로 대량 합성이 가능합니다. 더 긴 펩타이드는 구조 검토 후 합성을 지원하며, 핵심 서열(core peptide) 부분 제공으로 대응하는 경우도 있습니다.",
  },
  {
    question: "결제 조건은 어떻게 되나요?",
    answer:
      "발주 시 50%, 출고 시 50% 결제가 기본이며(또는 협의), VAT는 별도입니다. 납기는 주문 확정 후 수량에 따라 협의합니다.",
  },
];

export default function Page() {
  const product = getProductBySlug("custom-synthesis");
  const breadcrumb = breadcrumbLd([
    { name: "홈", path: "/" },
    { name: "주요 제품", path: "/products" },
    { name: "맞춤 합성", path: "/products/custom-synthesis" },
  ]);
  const faq = faqLd(faqs.map((f) => ({ question: f.question, answer: f.answer })));

  return (
    <>
      {product && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productLd(product)),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <Header />
      <CustomSynthesisPage />
      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-lg font-bold text-navy">자주 묻는 질문</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <div
                key={f.question}
                className="rounded-xl border border-border bg-slate-50/80 p-5"
              >
                <p className="text-sm font-bold text-navy">{f.question}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
