"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  RefreshCw,
  Layers,
  Eye,
  Beaker,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { products } from "@/lib/products";
import { softBreakName } from "@/lib/text";
import { siteImages } from "@/lib/images";

const iconMap = {
  "01": Sparkles,
  "02": RefreshCw,
  "03": Layers,
  "04": Eye,
  "05": Beaker,
} as const;

const visualMap: Record<
  string,
  {
    bar: string;
    number: string;
    numberGlow: string;
    badge: string;
    tagBg: string;
    iconWrap: string;
    overlay: string;
    borderHover: string;
    shadowHover: string;
    cta: string;
  }
> = {
  "01": {
    bar: "from-[#0ea5e9] via-[#1a6bb5] to-[#0b2b5b]",
    number: "text-blue/20 group-hover:text-blue/35",
    numberGlow: "drop-shadow-none",
    badge: "bg-blue text-white",
    tagBg: "bg-blue text-white",
    iconWrap: "bg-blue text-white shadow-xl shadow-blue/40",
    overlay: "from-[#071f42]/90 via-[#0b2b5b]/50 to-blue/10",
    borderHover: "hover:border-blue",
    shadowHover: "hover:shadow-[0_28px_60px_-18px_rgba(26,107,181,0.5)]",
    cta: "bg-blue group-hover:bg-navy",
  },
  "02": {
    bar: "from-cyan-400 via-blue to-navy",
    number: "text-cyan-500/25 group-hover:text-cyan-500/40",
    numberGlow: "",
    badge: "bg-cyan-600 text-white",
    tagBg: "bg-cyan-600 text-white",
    iconWrap: "bg-cyan-600 text-white shadow-xl shadow-cyan-600/40",
    overlay: "from-slate-950/90 via-cyan-950/45 to-cyan-600/15",
    borderHover: "hover:border-cyan-500",
    shadowHover: "hover:shadow-[0_28px_60px_-18px_rgba(8,145,178,0.45)]",
    cta: "bg-cyan-600 group-hover:bg-navy",
  },
  "03": {
    bar: "from-indigo-400 via-blue-600 to-navy",
    number: "text-indigo-500/25 group-hover:text-indigo-500/40",
    numberGlow: "",
    badge: "bg-indigo-600 text-white",
    tagBg: "bg-indigo-600 text-white",
    iconWrap: "bg-indigo-600 text-white shadow-xl shadow-indigo-600/40",
    overlay: "from-indigo-950/90 via-navy/50 to-indigo-500/15",
    borderHover: "hover:border-indigo-500",
    shadowHover: "hover:shadow-[0_28px_60px_-18px_rgba(79,70,229,0.4)]",
    cta: "bg-indigo-600 group-hover:bg-navy",
  },
  "04": {
    bar: "from-violet-400 via-blue-600 to-navy",
    number: "text-violet-500/25 group-hover:text-violet-500/40",
    numberGlow: "",
    badge: "bg-violet-600 text-white",
    tagBg: "bg-violet-600 text-white",
    iconWrap: "bg-violet-600 text-white shadow-xl shadow-violet-600/40",
    overlay: "from-violet-950/90 via-navy/45 to-violet-500/15",
    borderHover: "hover:border-violet-500",
    shadowHover: "hover:shadow-[0_28px_60px_-18px_rgba(124,58,237,0.4)]",
    cta: "bg-violet-600 group-hover:bg-navy",
  },
  "05": {
    bar: "from-blue-light via-blue to-navy-deep",
    number: "text-white/15 group-hover:text-white/25",
    numberGlow: "",
    badge: "bg-blue text-white",
    tagBg: "bg-blue text-white",
    iconWrap: "bg-white text-navy shadow-xl",
    overlay: "from-navy-deep/95 via-navy/60 to-blue/20",
    borderHover: "hover:border-blue-light",
    shadowHover: "hover:shadow-[0_28px_60px_-14px_rgba(7,31,66,0.55)]",
    cta: "bg-white text-navy group-hover:bg-blue-soft",
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Products({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const featured = products.filter((p) => p.code !== "05");
  const custom = products.find((p) => p.code === "05");

  return (
    <section
      id="products"
      className="relative scroll-mt-32 overflow-hidden bg-navy-deep py-20 text-white sm:py-28"
    >
      {/* 다크 + 옐로우 포인트 — WHY 다음 두 번째 임팩트 구간 */}
      <div className="pointer-events-none absolute inset-0 opacity-20 hex-pattern" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(100%,720px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FEE500]/50 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#FEE500]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            as={standalone ? "h1" : "h2"}
            eyebrow="PRODUCTS & SERVICES"
            title="화장품 펩타이드 원료 제품"
            subtitle="안티에이징·재생·아이케어 핵심 원료를 국내에서 합성·공급합니다. 중국산 대체, 소량 시험, 정기 납품까지 — 상업용 B2B 공급에 대응합니다."
            light
          />
          <motion.p
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden shrink-0 rounded-2xl border-2 border-[#FEE500]/35 bg-white/5 px-5 py-3 text-center backdrop-blur-sm sm:block"
          >
            <span className="block text-3xl font-black tracking-tight text-[#FEE500]">
              05
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300">
              Core Services
            </span>
          </motion.p>
        </div>

        {/* 제품 라인업 배너 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 sm:mt-12"
        >
          <Image
            src={siteImages.productLineup}
            alt="위드바이오캠 펩타이드 원료 5종 라인업"
            width={1200}
            height={488}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </motion.div>

        {/* 2×2 impact grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-2"
        >
          {featured.map((p) => {
            const Icon = iconMap[p.code as keyof typeof iconMap] ?? Beaker;
            const v = visualMap[p.code] ?? visualMap["01"];

            return (
              <motion.div key={p.slug} variants={card}>
                <Link
                  href={`/products/${p.slug}`}
                  className={`group relative block overflow-hidden rounded-[1.75rem] border-[3px] border-slate-200/90 bg-white shadow-[0_12px_40px_-16px_rgba(11,43,91,0.18)] transition-all duration-350 ease-out hover:-translate-y-2.5 ${v.borderHover} ${v.shadowHover}`}
                >
                  {/* Strong top accent */}
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${v.bar}`}
                    aria-hidden
                  />

                  {/* Image + giant number */}
                  <div className="relative h-60 overflow-hidden sm:h-72 lg:h-80">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${v.overlay}`}
                    />

                    {/* GIANT service number */}
                    <span
                      className={`pointer-events-none absolute -right-1 -top-2 select-none font-black leading-none tracking-tighter transition-colors duration-300 sm:-right-2 sm:-top-4 ${v.number}`}
                      style={{
                        fontSize: "clamp(7rem, 18vw, 11rem)",
                        lineHeight: 0.85,
                      }}
                      aria-hidden
                    >
                      {p.code}
                    </span>

                    {/* Small label chip */}
                    <span
                      className={`absolute left-4 top-4 rounded-lg px-3 py-1.5 text-xs font-black tracking-widest shadow-lg sm:left-5 sm:top-5 sm:text-sm ${v.badge}`}
                    >
                      SERVICE {p.code}
                    </span>

                    {/* Keyword on image */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <span
                        className={`product-name inline-block rounded-lg px-3.5 py-2 text-base font-extrabold tracking-tight shadow-lg sm:text-lg ${v.tagBg}`}
                      >
                        {softBreakName(p.tag)}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="relative p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${v.iconWrap}`}
                      >
                        <Icon size={26} strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <h3 className="product-name text-2xl font-black leading-[1.15] tracking-tight text-navy sm:text-[1.65rem]">
                          {softBreakName(p.name)}
                        </h3>
                        <p className="product-name mt-1.5 text-base font-bold text-blue">
                          {softBreakName(p.brand)}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 line-clamp-2 text-[15px] leading-relaxed text-slate-600 sm:text-base">
                      {softBreakName(p.summary)}
                    </p>

                    <p className="mt-3 text-xs font-semibold text-navy/80 sm:text-[13px]">
                      <span className="text-[#b8860b]">수입 대체 · 단가 · 납기에 유리</span>
                    </p>

                    <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-500">
                      진입 추천 채널
                      <span className="text-navy">{p.channel}</span>
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="product-name rounded-full border-2 border-blue/20 bg-blue-soft px-3.5 py-1.5 text-xs font-bold text-navy"
                        >
                          {softBreakName(h)}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex items-center justify-between gap-3 border-t-2 border-slate-100 pt-5">
                      <div className="min-w-0 text-xs leading-relaxed text-slate-500">
                        <p className="truncate font-medium">
                          <span className="font-extrabold text-navy">INCI</span>{" "}
                          {softBreakName(p.inci)}
                        </p>
                        {p.cas !== "—" && (
                          <p className="mt-0.5 truncate font-medium">
                            <span className="font-extrabold text-navy">CAS</span>{" "}
                            {p.cas}
                          </p>
                        )}
                      </div>
                      <span className="relative inline-flex shrink-0 flex-col items-end gap-1">
                        <span className="cta-hint-badge rounded-full bg-[#FEE500] px-2.5 py-0.5 text-[10px] font-extrabold tracking-wide text-[#191600] shadow-sm">
                          Click
                        </span>
                        <span
                          className={`cta-soft-pulse inline-flex items-center gap-1.5 rounded-full bg-navy px-5 py-3 text-sm font-extrabold text-white shadow-lg transition-colors duration-300 group-hover:bg-[#0a2248]`}
                        >
                          상세 보기
                          <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 자세히 보기 — 홈 요약본에서만 노출 */}
        {!standalone && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-10 flex justify-center sm:mt-12"
          >
            <a
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              전체 제품 · 추천 조합 보기
            </a>
          </motion.div>
        )}

        {/* 05 Custom Synthesis — full-width dark impact */}
        {custom && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-6 sm:mt-8"
          >
            <Link
              href={`/products/${custom.slug}`}
              className="group relative block overflow-hidden rounded-[1.75rem] border-[3px] border-white/15 bg-[#0a2248] shadow-[0_20px_50px_-16px_rgba(7,31,66,0.55)] transition-all duration-300 hover:-translate-y-2 hover:border-[#FEE500]/50 hover:shadow-[0_32px_64px_-14px_rgba(254,229,0,0.2)]"
            >
              <div
                className="h-2 w-full bg-gradient-to-r from-[#FEE500] via-blue to-navy"
                aria-hidden
              />

              <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
                <div className="relative h-64 overflow-hidden sm:h-72 md:h-auto md:min-h-[320px]">
                  <Image
                    src={custom.image}
                    alt={custom.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/30 via-navy/50 to-navy-deep md:from-transparent md:via-navy-deep/55 md:to-navy-deep" />

                  {/* Giant 05 on image */}
                  <span
                    className="pointer-events-none absolute bottom-0 left-2 select-none font-black leading-none text-white/20 transition-colors group-hover:text-white/30 sm:left-4"
                    style={{ fontSize: "clamp(8rem, 22vw, 12rem)" }}
                    aria-hidden
                  >
                    05
                  </span>

                  <span className="absolute left-5 top-5 rounded-lg bg-blue px-3.5 py-1.5 text-sm font-black tracking-widest text-white shadow-lg">
                    SERVICE 05
                  </span>
                </div>

                <div className="relative flex flex-col justify-center p-8 text-white sm:p-10 lg:p-12">
                  <div className="absolute right-0 top-0 h-48 w-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-blue/30 blur-3xl" />

                  <span className="relative inline-flex w-fit rounded-lg bg-blue px-3.5 py-2 text-base font-extrabold shadow-lg sm:text-lg">
                    {custom.tag}
                  </span>

                  <div className="relative mt-5 flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-navy shadow-xl transition-transform group-hover:scale-110">
                      <Beaker size={26} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="product-name text-3xl font-black tracking-tight sm:text-4xl">
                        {softBreakName(custom.name)}
                      </h3>
                      <p className="product-name mt-1.5 text-lg font-bold text-blue-light">
                        {softBreakName(custom.brand)}
                      </p>
                    </div>
                  </div>

                  <p className="relative mt-5 max-w-xl text-base leading-relaxed text-slate-300">
                    {softBreakName(custom.summary)}
                  </p>

                  <p className="relative mt-3 text-xs font-semibold text-[#FEE500] sm:text-[13px]">
                    수입 대체 · 단가 · 납기에 유리
                  </p>

                  <ul className="relative mt-4 flex flex-wrap gap-2">
                    {custom.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full border-2 border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-sm"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>

                  <span className="relative mt-8 inline-flex flex-col items-start gap-1.5">
                    <span className="cta-hint-badge rounded-full bg-[#FEE500] px-2.5 py-0.5 text-[10px] font-extrabold tracking-wide text-[#191600] shadow-sm">
                      Click
                    </span>
                    <span className="cta-soft-pulse inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-navy shadow-xl transition-all duration-300 group-hover:bg-[#FEE500] group-hover:scale-[1.02]">
                      맞춤 합성 상세 보기
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-xs leading-relaxed text-slate-400"
        >
          ※ 임상·효능 수치는 제조사 기술자료 및 공개 문헌 기반 B2B 참고용이며,
          자사 직접 수행 데이터가 아닙니다. 표기 상품명(SYN-COLL, Matrixyl 등)은
          동등 성분 안내 목적의 예시입니다.
        </motion.p>
      </div>
    </section>
  );
}
