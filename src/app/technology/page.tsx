import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Technology from "@/components/Technology";
import { siteSeo, ogImages } from "@/lib/company";
import { breadcrumbLd, faqLd } from "@/lib/jsonld";

const title = "LPPS 용액상 펩타이드 합성 기술";
const description =
  "위드바이오캠의 국내 독자 LPPS(Liquid-Phase Peptide Synthesis) 기술. 레진 없이 용액상에서 합성해 원가를 절감하고, 단계별 품질관리로 96%+ 고순도를 구현합니다. SPPS 고체상 합성과의 비교.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | 위드바이오캠`,
    description,
    type: "website",
    locale: "ko_KR",
    url: `${siteSeo.siteUrl}/technology`,
    images: ogImages(title),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteSeo.ogImage],
  },
  alternates: {
    canonical: "/technology",
  },
};

const faqs = [
  {
    question: "5-mer 이상도 합성 가능한가요?",
    answer:
      "5-mer 이하 짧은 펩타이드는 LPPS 공정으로 대량 합성이 가능합니다. 더 긴 펩타이드는 구조를 검토한 뒤 합성을 지원하며, 핵심 서열(core peptide) 부분 제공으로 대응하는 경우도 있습니다.",
  },
  {
    question: "COA를 제공하나요?",
    answer:
      "제품별로 HPLC·LC-MS·NMR 분석 기반 COA(분석성적서)를 기본 제공합니다. 요청 시 안정성·중금속 시험 데이터도 추가로 지원합니다.",
  },
  {
    question: "LPPS가 고체상 합성(SPPS)보다 저렴한 이유는?",
    answer:
      "고가의 특수 레진(Resin)을 사용하지 않고 용액상에서 합성해 직접 원가(COGS)를 50% 이상 절감합니다. 시약·용매도 이론치에 가깝게 최소량만 투입합니다.",
  },
];

export default function TechnologyPage() {
  const breadcrumb = breadcrumbLd([
    { name: "홈", path: "/" },
    { name: "핵심 기술", path: "/technology" },
  ]);
  const faq = faqLd(faqs.map((f) => ({ question: f.question, answer: f.answer })));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <Header />
      <main className="flex-1 pt-32 sm:pt-36">
        <Technology standalone />

        <section className="bg-white pb-20 sm:pb-28">
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
      </main>
      <Footer />
    </>
  );
}
