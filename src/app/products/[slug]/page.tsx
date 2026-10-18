import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Beaker,
  BookOpen,
  FlaskConical,
  LineChart,
  Target,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetailNav from "@/components/ProductDetailNav";
import {
  getAllProductSlugs,
  getProductBySlug,
  products,
} from "@/lib/products";
import { softBreakName } from "@/lib/text";
import { CONTACT_EMAIL, MAILTO_INQUIRY } from "@/lib/mailto";
import { companyInfo } from "@/lib/company";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  // custom-synthesis는 전용 서비스 페이지(products/custom-synthesis) 사용
  return getAllProductSlugs()
    .filter((slug) => slug !== "custom-synthesis")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "custom-synthesis") {
    return {
      title: "맞춤 합성 · Custom Synthesis",
      description:
        "위드바이오캠 맞춤 합성(Custom Synthesis) 서비스. 유기화합물·펩타이드 제조, 공정 개선·원가 절감, 고순도 화장품 펩타이드 원료 Research Use Only.",
    };
  }
  const product = getProductBySlug(slug);
  if (!product) {
    return {
      title: "제품 안내",
      description:
        "위드바이오캠 화장품 펩타이드 원료 및 펩타이드 제조 제품 안내.",
    };
  }
  const title = `${product.name} · 화장품 펩타이드 원료`;
  const description = `${product.name} (${product.brand}) — 위드바이오캠 화장품 펩타이드 원료. ${product.summary} 펩타이드 제조 · 맞춤 합성 · B2B 공급.`;
  return {
    title,
    description,
    keywords: [
      product.name,
      product.brand,
      product.inci,
      "위드바이오캠",
      "화장품 펩타이드 원료",
      "펩타이드 제조",
      "맞춤 합성",
      product.tag,
    ],
    openGraph: {
      title: `${product.name} | 위드바이오캠`,
      description,
      type: "website",
      locale: "ko_KR",
    },
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  // 전용 라우트 우선 — 동적 페이지에서는 맞춤 합성을 렌더하지 않음
  if (slug === "custom-synthesis") notFound();
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const idx = products.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? products[idx - 1] : null;
  const next = idx < products.length - 1 ? products[idx + 1] : null;

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero banner */}
        <section className="relative overflow-hidden bg-navy-deep pt-36 pb-16 text-white sm:pt-40 sm:pb-20">
          <div className="pointer-events-none absolute inset-0 hex-pattern opacity-40" />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              주요 제품 목록
            </Link>

            <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold tracking-widest text-blue-light">
                  {product.code} · {product.channel}
                </p>
                <h1 className="product-name mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem]">
                  {softBreakName(product.name)}
                </h1>
                <p className="product-name mt-2 text-lg font-medium text-blue-light">
                  {softBreakName(product.brand)}
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  {softBreakName(product.summary)}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="product-name rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                    INCI: {softBreakName(product.inci)}
                  </span>
                  {product.cas !== "—" && (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                      CAS: {product.cas}
                    </span>
                  )}
                  <span className="rounded-full bg-blue/30 px-3 py-1 text-xs font-semibold">
                    {product.tag}
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/#contact"
                    className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-blue-soft"
                  >
                    샘플 · 견적 문의
                  </a>
                  <a
                    href={companyInfo.brochureUrl}
                    download="WITHBIOCHEM_브로셔.pdf"
                    className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    브로셔 다운로드
                  </a>
                </div>
              </div>

              <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* 제품 간 상세 바로가기 */}
        <ProductDetailNav currentSlug={product.slug} />

        {/* Content sections */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
              <div className="space-y-10">
                <ContentBlock
                  id="intro"
                  icon={BookOpen}
                  title="제품 소개"
                  eyebrow="INTRODUCTION"
                >
                  <p className="text-[15px] leading-relaxed text-slate-600">
                    {softBreakName(product.introduction)}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {product.highlights.map((h) => (
                      <li
                        key={h}
                        className="product-name rounded-lg border border-border bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {softBreakName(h)}
                      </li>
                    ))}
                  </ul>
                </ContentBlock>

                <ContentBlock
                  id="mechanism"
                  icon={FlaskConical}
                  title="작용 기전"
                  eyebrow="MECHANISM"
                >
                  <ul className="space-y-3">
                    {product.mechanism.map((m) => (
                      <li
                        key={m}
                        className="flex gap-3 text-[15px] leading-relaxed text-slate-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                        {softBreakName(m)}
                      </li>
                    ))}
                  </ul>
                  {product.illustrations && (
                    <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
                      {product.illustrations.map((src, i) => (
                        <div
                          key={src}
                          className="relative aspect-square overflow-hidden rounded-xl border border-border bg-slate-50"
                        >
                          <Image
                            src={src}
                            alt={`${product.name} 작용 기전 그림 ${i + 1}`}
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 768px) 50vw, 340px"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </ContentBlock>

                <ContentBlock
                  id="clinical"
                  icon={LineChart}
                  title="임상 · 근거 데이터"
                  eyebrow="CLINICAL DATA"
                >
                  <ul className="space-y-4">
                    {product.clinical.map((c) => (
                      <li
                        key={c.text}
                        className="rounded-xl border border-border bg-slate-50/80 p-4"
                      >
                        <p className="text-[15px] leading-relaxed text-slate-700">
                          {c.text}
                        </p>
                        {c.source && (
                          <p className="mt-2 text-xs leading-relaxed text-slate-400">
                            ↳ 출처: {c.source}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </ContentBlock>

                <ContentBlock
                  id="positioning"
                  icon={Target}
                  title="시장 포지셔닝 · 판매 키워드"
                  eyebrow="MARKET POSITIONING"
                >
                  <div className="overflow-hidden rounded-xl border border-border">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-border bg-navy text-white">
                          <th className="px-4 py-3 font-semibold">
                            채널 / 시장
                          </th>
                          <th className="px-4 py-3 font-semibold">
                            판매 키워드
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.positioning.map((row, i) => (
                          <tr
                            key={row.channel}
                            className={
                              i % 2 === 0 ? "bg-white" : "bg-slate-50/80"
                            }
                          >
                            <td className="px-4 py-3 font-semibold text-navy">
                              {row.channel}
                            </td>
                            <td className="px-4 py-3 text-slate-600">
                              {row.keywords}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6">
                    <p className="flex items-center gap-2 text-sm font-bold text-navy">
                      <Sparkles size={16} className="text-blue" />
                      컨셉 USP
                    </p>
                    <ul className="mt-3 space-y-2">
                      {product.usp.map((u) => (
                        <li
                          key={u}
                          className="flex gap-2.5 text-sm leading-relaxed text-slate-600"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue" />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ContentBlock>

                <ContentBlock
                  id="formulation"
                  icon={Beaker}
                  title="배합 가이드"
                  eyebrow="FORMULATION GUIDE"
                >
                  <p className="rounded-xl border border-blue/15 bg-blue-soft/40 p-5 text-[15px] leading-relaxed text-navy">
                    {product.formulation}
                  </p>
                  {product.disclaimer && (
                    <p className="mt-4 text-xs leading-relaxed text-slate-400">
                      ※ {product.disclaimer}
                    </p>
                  )}
                </ContentBlock>
              </div>

              {/* Sticky side CTA */}
              <aside className="lg:sticky lg:top-36 lg:self-start">
                <div className="rounded-2xl border border-border bg-slate-50 p-6 shadow-sm">
                  <p className="text-xs font-semibold tracking-widest text-blue">
                    B2B INQUIRY
                  </p>
                  <h2 className="product-name mt-1 text-lg font-bold text-navy">
                    {softBreakName(product.name)}
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    샘플, 견적, 기술 자료가 필요하시면 문의해 주세요.
                  </p>
                  <dl className="mt-4 space-y-2 border-t border-border pt-4 text-xs text-slate-500">
                    <div className="flex justify-between gap-2">
                      <dt className="font-semibold text-slate-600">공급 형태</dt>
                      <dd>순수 분말 · COA</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="font-semibold text-slate-600">순도</dt>
                      <dd>96%</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="font-semibold text-slate-600">MOQ</dt>
                      <dd>50g부터 (협의)</dd>
                    </div>
                  </dl>
                  <a
                    href="/#contact"
                    className="mt-5 flex w-full items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue"
                  >
                    문의하기
                  </a>
                  <a
                    href={MAILTO_INQUIRY}
                    className="mt-2 flex w-full items-center justify-center rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-blue-soft"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <div className="mt-4 rounded-2xl border border-border bg-white p-5">
                  <p className="text-xs font-semibold text-slate-500">
                    다른 제품
                  </p>
                  <ul className="mt-3 space-y-2">
                    {products
                      .filter((p) => p.slug !== product.slug)
                      .map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/products/${p.slug}`}
                            className="product-name text-sm font-medium text-navy transition-colors hover:text-blue"
                          >
                            {softBreakName(p.name)}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </aside>
            </div>

            {/* Prev / Next */}
            <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:justify-between">
              {prev ? (
                <Link
                  href={`/products/${prev.slug}`}
                  className="group flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-4 text-sm font-semibold text-navy transition-all hover:border-blue/30 hover:shadow-sm"
                >
                  <ArrowLeft
                    size={16}
                    className="transition-transform group-hover:-translate-x-0.5"
                  />
                  <span className="product-name min-w-0">
                    <span className="block text-[11px] font-medium text-slate-400">
                      이전 제품
                    </span>
                    {softBreakName(prev.name)}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/products/${next.slug}`}
                  className="group flex items-center justify-end gap-2 rounded-xl border border-border bg-white px-5 py-4 text-sm font-semibold text-navy transition-all hover:border-blue/30 hover:shadow-sm sm:text-right"
                >
                  <span className="product-name min-w-0">
                    <span className="block text-[11px] font-medium text-slate-400">
                      다음 제품
                    </span>
                    {softBreakName(next.name)}
                  </span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              ) : (
                <span />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContentBlock({
  id,
  icon: Icon,
  title,
  eyebrow,
  children,
}: {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-36">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-soft text-blue">
          <Icon size={18} />
        </div>
        <div>
          <p className="text-[11px] font-semibold tracking-widest text-blue">
            {eyebrow}
          </p>
          <h2 className="text-xl font-bold text-navy">{title}</h2>
        </div>
      </div>
      {children}
    </div>
  );
}
