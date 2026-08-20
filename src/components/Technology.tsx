"use client";

import { motion } from "framer-motion";
import {
  Beaker,
  Droplets,
  Atom,
  CheckCircle2,
  Sparkles,
  TrendingDown,
  Leaf,
  Globe2,
  ShieldCheck,
  Rocket,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

const comparisons: {
  label: string;
  solid: string;
  liquid: string;
  effect: string;
  EffectIcon: LucideIcon;
}[] = [
  {
    label: "핵심 부자재",
    solid: "고가 특수 레진(Resin) 필수",
    liquid: "레진 미사용 (No Resin)",
    effect: "직접 원가(COGS) 50% 이상 절감",
    EffectIcon: TrendingDown,
  },
  {
    label: "시약 / 용매",
    solid: "과량 투입 (이론치 대비 3~5배)",
    liquid: "최소량 투입 (이론치 근접)",
    effect: "재료비 절감 및 ESG 경영",
    EffectIcon: Leaf,
  },
  {
    label: "공정 확장성",
    solid: "반응기 부피당 생산량 제한적",
    liquid: "대용량 반응기 Scale-up 용이",
    effect: "글로벌 가격 경쟁력 확보",
    EffectIcon: Globe2,
  },
  {
    label: "품질 관리",
    solid: "최종 단계에서만 확인 가능",
    liquid: "단계별 중간체 정제 및 분석",
    effect: "고순도 원료 보장",
    EffectIcon: ShieldCheck,
  },
  {
    label: "시장 진입",
    solid: "높은 원가로 진입 한계",
    liquid: "비용 효율 기반 시장 침투",
    effect: "화장품·식품 등 신규 시장 확대",
    EffectIcon: Rocket,
  },
];

const peptidePoints = [
  "액상 펩타이드 합성 공정 최적화 기술 (LPPS)",
  "5-mer 이하 짧은 펩타이드 대량 합성 가능",
  "긴 펩타이드는 구조 검토 후 합성 지원 · 핵심 서열(core peptide) 부분 제공 가능",
  "Palmitoyl Tripeptide-5, Dipeptide-2 등 화장품 원료 공정 최적화 실적",
  "고려대학교 의과대학 연구용 펩타이드 공급 경험",
  "아이큐어㈜ 프로젝트 수행 (케토프로펜·리도카인 불순물 합성 등)",
];

const azides = [
  "Azidoalanine (Ala(N₃))",
  "Azidohomoalanine (Aha)",
  "p-Azido-L-phenylalanine (pAzF)",
  "NH₂-Lys(N₃)-OH",
  "Peptide conjugation linker (N₃)",
];

const orgSkills = [
  "복잡한 구조의 합성 가능",
  "다양한 반응 수행 및 선택적 반응 제어",
  "신규 반응 개발 · 최적 조건 확립",
  "Scale-up 합성 및 공정 개발",
  "고순도 제품 합성 및 정제",
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative scroll-mt-32 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="CORE TECHNOLOGIES"
          title="핵심 기술"
          subtitle="레진 없는 용액상 합성(LPPS)으로 원가를 절감합니다. 이것이 중국산 대비 경쟁 단가의 근거입니다."
        />

        {/* LPPS comparison — 당사 기술 우위 강조 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 overflow-hidden rounded-2xl border-2 border-blue/25 shadow-lg shadow-blue/10 ring-1 ring-blue/10"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-gradient-to-r from-navy-deep via-navy to-blue px-5 py-5 sm:px-6">
            <div>
              <p className="text-xs font-bold tracking-widest text-blue-light">
                PEPTIDE MANUFACTURING · LPPS
              </p>
              <h3 className="mt-1 text-lg font-black text-white sm:text-xl">
                고체상 vs 용액상(당사) 합성 비교
              </h3>
              <p className="mt-1 text-xs font-medium text-slate-300 sm:text-sm">
                원가 절감 → 경쟁 단가 · 고순도 · Scale-up을 동시에 확보합니다.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-extrabold text-navy shadow-md shadow-navy/20">
                <Sparkles size={13} className="text-blue" strokeWidth={2.5} />
                LPPS
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/15 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                레진 불필요
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-light/90 px-3 py-1.5 text-[11px] font-extrabold tracking-wide text-white shadow-sm">
                당사 기술 우위
              </span>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="w-[14%] bg-slate-50 px-4 py-4 text-xs font-bold uppercase tracking-wide text-slate-400 sm:px-5">
                    구분
                  </th>
                  <th className="w-[24%] bg-slate-100/80 px-4 py-4 text-xs font-semibold text-slate-400 sm:px-5">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-400">
                        <X size={11} strokeWidth={2.5} />
                      </span>
                      고체상 합성 (기존)
                    </span>
                  </th>
                  <th className="w-[30%] bg-gradient-to-b from-blue to-navy px-4 py-4 text-white sm:px-5">
                    <span className="flex flex-col gap-1">
                      <span className="inline-flex w-fit items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold tracking-wider text-blue-soft">
                        OUR METHOD
                      </span>
                      <span className="text-sm font-extrabold tracking-tight sm:text-[15px]">
                        용액상 합성 (당사)
                      </span>
                    </span>
                  </th>
                  <th className="w-[32%] bg-blue-soft px-4 py-4 sm:px-5">
                    <span className="flex flex-col gap-1">
                      <span className="inline-flex w-fit items-center gap-1 rounded-full bg-blue/15 px-2 py-0.5 text-[10px] font-bold tracking-wider text-blue">
                        OUTCOME
                      </span>
                      <span className="text-sm font-extrabold tracking-tight text-navy sm:text-[15px]">
                        기대 효과
                      </span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => {
                  const EffectIcon = row.EffectIcon;
                  return (
                    <tr
                      key={row.label}
                      className={
                        i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                      }
                    >
                      <td className="border-r border-border/60 px-4 py-4 font-bold text-navy sm:px-5">
                        {row.label}
                      </td>
                      <td className="border-r border-border/40 px-4 py-4 text-slate-400 sm:px-5">
                        <span className="line-through decoration-slate-300/90">
                          {row.solid}
                        </span>
                      </td>
                      <td className="border-r border-blue/15 bg-blue-soft/45 px-4 py-4 sm:px-5">
                        <span className="flex items-start gap-2 font-bold text-navy">
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-blue"
                            strokeWidth={2.5}
                          />
                          <span>{row.liquid}</span>
                        </span>
                      </td>
                      <td className="bg-gradient-to-r from-blue-soft/80 to-blue-soft/40 px-4 py-4 sm:px-5">
                        <span className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-2.5 py-1.5 text-[13px] font-extrabold text-blue shadow-sm ring-1 ring-blue/15 sm:text-sm">
                          <EffectIcon
                            size={15}
                            className="shrink-0 text-blue"
                            strokeWidth={2.25}
                          />
                          {row.effect}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="divide-y divide-border md:hidden">
            {comparisons.map((row) => {
              const EffectIcon = row.EffectIcon;
              return (
                <div key={row.label} className="space-y-2.5 p-4">
                  <p className="text-sm font-extrabold text-navy">{row.label}</p>
                  <p className="flex items-start gap-1.5 text-xs text-slate-400">
                    <X size={12} className="mt-0.5 shrink-0 text-slate-300" />
                    <span>
                      <span className="font-medium text-slate-400">기존 </span>
                      <span className="line-through decoration-slate-300">
                        {row.solid}
                      </span>
                    </span>
                  </p>
                  <p className="flex items-start gap-2 rounded-xl border border-blue/20 bg-gradient-to-r from-blue-soft to-blue-soft/50 px-3 py-2.5 text-xs font-bold text-navy shadow-sm">
                    <CheckCircle2
                      size={14}
                      className="mt-0.5 shrink-0 text-blue"
                      strokeWidth={2.5}
                    />
                    <span>
                      <span className="mb-0.5 block text-[10px] font-extrabold tracking-wider text-blue">
                        당사 · 용액상
                      </span>
                      {row.liquid}
                    </span>
                  </p>
                  <p className="flex items-center gap-2 rounded-lg bg-navy px-3 py-2 text-xs font-extrabold text-white shadow-sm">
                    <EffectIcon
                      size={14}
                      className="shrink-0 text-blue-light"
                      strokeWidth={2.25}
                    />
                    {row.effect}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Footer strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-blue/15 bg-blue-soft/30 px-4 py-3 text-center">
            <p className="text-xs font-bold text-navy sm:text-sm">
              <span className="text-blue">용액상 LPPS</span>
              {" · "}
              레진 Zero · 원가 절감 · 고순도 · Scale-up 용이
            </p>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {/* Peptide capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-slate-50/60 p-6 sm:p-7"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-soft text-blue">
              <Droplets size={20} />
            </div>
            <h3 className="text-lg font-bold text-navy">
              펩타이드 합성 범위 · 적용 사례
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              액상 공정 최적화로 원가 절감과 가격 경쟁력을 확보합니다.
            </p>
            <ul className="mt-5 space-y-2.5">
              {peptidePoints.map((p) => (
                <li
                  key={p}
                  className="flex gap-2.5 text-sm leading-relaxed text-slate-600"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-blue"
                  />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Azide + organic skills */}
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="rounded-2xl border border-border bg-white p-6 sm:p-7"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                <Atom size={20} />
              </div>
              <h3 className="text-lg font-bold text-navy">
                아지도 화합물 · 클릭 화학
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Diazo-transfer Reagents 개발 및 다양한 아지도 화합물 합성
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {azides.map((a) => (
                  <li
                    key={a}
                    className="rounded-lg border border-border bg-slate-50 px-2.5 py-1.5 font-mono text-[11px] font-medium text-navy sm:text-xs"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-border bg-navy p-6 text-white sm:p-7"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-light">
                <Beaker size={20} />
              </div>
              <h3 className="text-lg font-bold">유기합성 핵심 역량</h3>
              <p className="mt-1 text-sm text-slate-300">
                다양한 구조의 합성 계획부터 정제 전략까지
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-1">
                {orgSkills.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-slate-200">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-light" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
