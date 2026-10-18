"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Dna,
  Sparkles,
  Link2,
  BadgeCheck,
  Scaling,
  Headphones,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const areas = [
  {
    icon: FlaskConical,
    en: "Custom Organic Synthesis",
    ko: "맞춤형 유기합성",
    desc: "신규 화합물 합성·최적화부터 고난도 유기 합성까지, 고객 사양에 맞춘 연구 중심 합성 서비스",
  },
  {
    icon: Dna,
    en: "Peptide Manufacturing",
    ko: "펩타이드 합성 및 제조",
    desc: "액상 펩타이드 합성(LPPS) 기반 공정으로 짧은 펩타이드 대량 합성과 핵심 서열 공급 지원",
  },
  {
    icon: Sparkles,
    en: "Cosmetic Active Ingredients",
    ko: "화장품 기능성 원료",
    desc: "Palmitoyl Tripeptide-5, GHK-Cu 등 수입 대체형 고순도 화장품 활성 펩타이드 원료",
  },
  {
    icon: Link2,
    en: "Azide & Click Chemistry",
    ko: "아지도 화합물 · 클릭 화학",
    desc: "Diazo-transfer 시약 및 다양한 아지도 빌딩 블록·펩타이드 컨주게이션 링커 합성",
    href: "/click-chemistry",
  },
];

const edges = [
  {
    icon: BadgeCheck,
    title: "고순도 화합물 합성",
    en: "High-purity Synthesis",
    desc: "단계별 정제·분석으로 고순도 원료 품질을 보장합니다.",
  },
  {
    icon: Scaling,
    title: "유연한 생산 규모",
    en: "Flexible Scale-up (mg → kg)",
    desc: "연구용 mg부터 파일럿·kg 양산까지 규모에 맞춰 대응합니다.",
  },
  {
    icon: Headphones,
    title: "신속한 기술 지원",
    en: "Fast Technical Support",
    desc: "합성 설계부터 규격 협의까지 연구진이 직접 커뮤니케이션합니다.",
  },
];

export default function BusinessAreas() {
  return (
    <section
      id="business"
      className="relative scroll-mt-32 overflow-hidden py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-blue-soft/25 to-slate-50" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="BUSINESS AREAS"
          title="주요 산업 · 사업 영역"
          subtitle="맞춤형 유기합성부터 펩타이드 제조, 화장품 기능성 원료, 클릭 화학까지 — Research-driven Custom Synthesis Partner"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a, i) => {
            const card = (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`h-full rounded-2xl border border-border bg-white p-6 shadow-sm ${
                  a.href ? "transition-colors hover:border-blue/30" : ""
                }`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-soft text-blue">
                  <a.icon size={22} strokeWidth={1.75} />
                </div>
                <p className="text-[11px] font-semibold tracking-wide text-blue">
                  {a.en}
                </p>
                <h3 className="mt-1 text-base font-bold text-navy">{a.ko}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {a.desc}
                </p>
              </motion.div>
            );

            return a.href ? (
              <Link key={a.en} href={a.href}>
                {card}
              </Link>
            ) : (
              <div key={a.en}>{card}</div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-10 rounded-2xl border border-border bg-white p-6 sm:p-8"
        >
          <p className="text-xs font-semibold tracking-widest text-blue">
            CORE COMPETITIVENESS
          </p>
          <h3 className="mt-1 text-xl font-bold text-navy">핵심 경쟁력</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {edges.map((e, i) => (
              <motion.div
                key={e.en}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * i, duration: 0.4 }}
                className="flex gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                  <e.icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">{e.title}</p>
                  <p className="text-xs font-medium text-blue">{e.en}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {e.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
