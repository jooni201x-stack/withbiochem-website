"use client";

import { motion } from "framer-motion";
import {
  MessageSquareQuote,
  Compass,
  FlaskConical,
  Microscope,
  TrendingUp,
  Factory,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    step: "01",
    icon: MessageSquareQuote,
    title: "합성 의뢰",
    en: "Inquiry",
    points: [
      "고객 요구사항 · 목표 물질 검토",
      "구조 · 순도 · 규격 확인",
      "일정 및 생산 규모 협의",
    ],
  },
  {
    step: "02",
    icon: Compass,
    title: "합성 설계",
    en: "Route Design",
    points: [
      "문헌 조사 및 특허 검토",
      "최적 합성 경로 설계",
      "원료 및 시약 선정",
    ],
  },
  {
    step: "03",
    icon: FlaskConical,
    title: "합성",
    en: "Synthesis",
    points: [
      "유기합성 및 반응 수행",
      "반응 조건 최적화",
      "중간체 · 최종 화합물 제조",
    ],
  },
  {
    step: "04",
    icon: Microscope,
    title: "정제 및 분석",
    en: "Purification & Analysis",
    points: [
      "컬럼 · 결정화 등 정제",
      "HPLC, LC-MS, NMR 분석",
      "순도 및 품질 확인",
    ],
  },
  {
    step: "05",
    icon: TrendingUp,
    title: "공정 최적화",
    en: "Process Optimization",
    points: [
      "수율 향상 · 반응 조건 개선",
      "비용 절감 및 재현성 확보",
      "생산성 향상",
    ],
  },
  {
    step: "06",
    icon: Factory,
    title: "Scale-up",
    en: "Scale-up Supply",
    points: [
      "mg → g → 규모 확대",
      "파일럿 생산 · kg 지원",
      "고객 요구 규격에 맞춘 공급",
    ],
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-32 overflow-hidden bg-slate-50 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 hex-pattern opacity-60" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="CUSTOM SYNTHESIS PROCESS"
          title="맞춤형 유기합성 의뢰 절차"
          subtitle="의뢰부터 Scale-up 공급까지, 연구진이 설계·합성·분석·공정 최적화를 일관되게 수행합니다."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.07,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="relative rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-soft text-blue">
                  <s.icon size={20} strokeWidth={1.75} />
                </div>
                <span className="text-2xl font-bold tracking-tight text-slate-200">
                  {s.step}
                </span>
              </div>
              <p className="mt-4 text-[11px] font-semibold tracking-widest text-blue">
                {s.en}
              </p>
              <h3 className="mt-0.5 text-lg font-bold text-navy">{s.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-2 text-sm leading-relaxed text-slate-500"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue/50" />
                    {p}
                  </li>
                ))}
              </ul>

              {i < steps.length - 1 && (
                <div
                  className="pointer-events-none absolute -right-2 top-1/2 hidden h-0.5 w-4 -translate-y-1/2 bg-gradient-to-r from-blue/30 to-transparent lg:block"
                  aria-hidden
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 rounded-2xl border border-blue/15 bg-gradient-to-r from-navy to-blue px-6 py-7 text-center text-white sm:px-10"
        >
          <p className="text-sm font-medium text-blue-soft/90 sm:text-base">
            단순히 원료를 공급하는 것을 넘어,
          </p>
          <p className="mt-2 text-lg font-bold leading-snug sm:text-xl">
            고객과의 신뢰를 최우선으로 생각하는 파트너
          </p>
          <p className="mt-2 text-sm text-slate-200">
            차별화된 합성 서비스로 새로운 기준을 제시합니다.
          </p>
          <a
            href="#contact"
            className="mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-blue-soft"
          >
            맞춤 합성 의뢰하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
