"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgePercent,
  ShieldCheck,
  FlaskConical,
  FileCheck2,
  Check,
  AlertTriangle,
} from "lucide-react";
import { companyInfo } from "@/lib/company";
import { siteImages } from "@/lib/images";

const ACCENT = "#FEE500";

const pricePoints = [
  {
    label: "맞춤 납품",
    text: "동일 규격 기준 경쟁 견적보다 높으면 그 가격에 맞춤 납품",
  },
  {
    label: "프로모션",
    text: "타사 정식 견적 제출 시 추가 10% 더 낮은 단가 공급",
    featured: true,
  },
  {
    label: "조건",
    text: "동일 INCI · 순도 · 수량, 유효 정식 견적서",
  },
];

const purityPoints = [
  {
    label: "규격",
    text: "96% 순도, 제품별 COA 기본 제공",
  },
  {
    label: "미달 시",
    text: "순도 미달 시 재공급 또는 협의 보상",
  },
];

const whyPoints = [
  {
    icon: FlaskConical,
    title: "LPPS로 원가 절감",
    text: "LPPS(용액상 합성)로 레진 비용을 제거해 원가를 낮춥니다.",
  },
  {
    icon: FileCheck2,
    title: "품질 기준은 유지",
    text: "단가는 경쟁력 있게, 순도 96% · COA · 분석은 그대로 유지합니다.",
  },
];

const conditions = [
  "동일 INCI · 순도 · 수량 기준",
  "유효한 타사 정식 견적서",
  "96% 순도 · 제품별 COA 기본 제공",
  "프로모션(추가 10%)은 운영 정책에 따라 조기 종료될 수 있음",
];

export default function Guarantee() {
  return (
    <section
      id="guarantee"
      className="relative scroll-mt-32 overflow-hidden bg-slate-50 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 hex-pattern opacity-40" />
      <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-[#FEE500]/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-8 h-64 w-64 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-blue sm:text-[13px]">
            PRICE &amp; PURITY GUARANTEE
          </p>
          <h2 className="product-name mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-[2.1rem]">
            전세계 최저가 보장제 · 순도 96% 보장제
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            가격은 낮추고, 품질은 지킵니다. LPPS로 원가를 낮춘 국내 공급
            파트너.
          </p>
          <div
            className="mt-5 h-0.5 w-12 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${ACCENT}, var(--navy))`,
            }}
          />
        </motion.div>

        {/* 카드 2개 */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-col rounded-2xl border border-[#FEE500]/80 bg-white p-6 shadow-sm ring-1 ring-black/[0.03] sm:p-7"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FEE500] text-[#191600] shadow-sm ring-1 ring-black/5">
              <BadgePercent size={20} strokeWidth={1.75} />
            </div>
            <p className="text-xs font-semibold tracking-widest text-blue">
              LOWEST PRICE
            </p>
            <h3 className="mt-1 text-lg font-bold tracking-tight text-navy sm:text-xl">
              전세계 최저가 보장제
            </h3>

            <ul className="mt-5 flex-1 space-y-3">
              {pricePoints.map((p) => (
                <li
                  key={p.label}
                  className={`rounded-xl px-3.5 py-3 ${
                    p.featured
                      ? "border border-[#FEE500] bg-[#FEE500]/40"
                      : "bg-slate-50"
                  }`}
                >
                  <p
                    className={`text-[11px] font-bold tracking-wide ${
                      p.featured ? "text-[#191600]" : "text-blue"
                    }`}
                  >
                    {p.label}
                    {p.featured ? " · 추가 10%" : ""}
                  </p>
                  <p
                    className={`mt-0.5 text-sm leading-relaxed ${
                      p.featured
                        ? "font-semibold text-[#191600]"
                        : "text-slate-600"
                    }`}
                  >
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-slate-400">
              <AlertTriangle
                size={13}
                className="mt-0.5 shrink-0 text-slate-400"
              />
              프로모션은 운영 정책에 따라 조기 종료될 수 있습니다.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: 0.08,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="flex flex-col rounded-2xl border border-navy/15 bg-navy p-6 text-white shadow-sm sm:p-7"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FEE500] text-[#191600] shadow-sm ring-1 ring-black/5">
              <ShieldCheck size={20} strokeWidth={1.75} />
            </div>
            <p className="text-xs font-semibold tracking-widest text-[#FEE500]">
              96% PURITY
            </p>
            <h3 className="mt-1 text-lg font-bold tracking-tight sm:text-xl">
              순도 96% 보장제
            </h3>

            <ul className="mt-5 flex-1 space-y-3">
              {purityPoints.map((p) => (
                <li
                  key={p.label}
                  className="rounded-xl bg-white/[0.07] px-3.5 py-3 ring-1 ring-white/10"
                >
                  <p className="text-[11px] font-bold tracking-wide text-[#FEE500]">
                    {p.label}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-200">
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs leading-relaxed text-slate-400">
              제품별 분석성적서(COA)를 기본 제공합니다. 순도 기준 미달 시
              재공급 또는 협의 보상으로 대응합니다.
            </p>
          </motion.article>
        </div>

        {/* 왜 가격은 낮은데 품질은 높은가 */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm ring-1 ring-black/[0.03]"
        >
          <div className="border-b border-border bg-navy-deep px-5 py-4 sm:px-7 sm:py-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#FEE500]">
              WHY THE PRICE
            </p>
            <h3 className="mt-1 text-lg font-bold tracking-tight text-white sm:text-xl">
              왜 가격은 낮은데 품질은 높은가?
            </h3>
          </div>

          <div className="grid gap-4 p-5 sm:grid-cols-2 sm:gap-5 sm:p-7">
            {whyPoints.map((item) => (
              <div key={item.title} className="flex gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                  <item.icon size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#FEE500]/70 bg-[#FEE500] px-5 py-4 sm:px-7">
            <p className="text-sm font-bold leading-relaxed text-[#191600] sm:text-[15px]">
              품질을 희생해 낮춘 가격이 아니라, 합성 방식으로 원가를 낮춘
              가격입니다.
            </p>
          </div>
        </motion.div>

        {/* 적용 조건 + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
        >
          <p className="text-xs font-semibold tracking-widest text-blue">
            TERMS
          </p>
          <h3 className="mt-1 text-lg font-bold text-navy">적용 조건 요약</h3>

          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {conditions.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2 text-sm leading-relaxed text-slate-600"
              >
                <Check
                  size={15}
                  strokeWidth={2.5}
                  className="mt-0.5 shrink-0 text-blue"
                />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-navy/15 transition-all hover:bg-blue hover:shadow-xl"
            >
              견적 비교 문의
              <ArrowRight size={16} />
            </a>
            <a
              href={companyInfo.kakaoOpenChat}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FEE500] px-6 py-3.5 text-sm font-bold text-[#191600] shadow-md ring-1 ring-black/5 transition-all hover:scale-[1.02] hover:shadow-lg"
            >
              <Image
                src={siteImages.kakaoTalk}
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
                unoptimized
              />
              카카오 상담
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
