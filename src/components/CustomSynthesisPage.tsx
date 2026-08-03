"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Beaker,
  Building2,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  Handshake,
  Mail,
  Microscope,
  Settings2,
  ShieldAlert,
  Sparkles,
  Wrench,
} from "lucide-react";
import { siteImages } from "@/lib/images";
import { CONTACT_EMAIL, MAILTO_INQUIRY } from "@/lib/mailto";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06 * i,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const synthesisScope = [
  {
    category: "General Commercialized Peptide",
    ko: "일반 상용 펩타이드",
    detail:
      "화장품·연구용 등 상용화된 펩타이드 원료의 합성 및 공정 최적화. 단량 펩타이드 대량·소량 공급.",
    examples: "Palmitoyl Tripeptide-5, Dipeptide-2 등",
  },
  {
    category: "Peptide Modification",
    ko: "펩타이드 수식 · 변형",
    detail:
      "팔미토일화, 아세틸화, C-말단 아미드화 등 구조 수식 및 서열 변형. 고객 사양에 맞춘 유도체 설계.",
    examples: "N/C-terminal modification, lipidation",
  },
  {
    category: "Azide-modified peptide & click chemistry derivatives",
    ko: "아지도 수식 펩타이드 · 클릭 화학 유도체",
    detail:
      "Diazo-transfer 및 아지도 빌딩 블록 기반 클릭 화학 유도체. 바이오컨주게이션용 링커·측쇄 수식.",
    examples: "Ala(N₃), Aha, pAzF, Lys(N₃), conjugation linker",
  },
  {
    category: "Other Organic Compounds",
    ko: "기타 유기화합물",
    detail:
      "맞춤형 유기합성, 불순물·중간체 합성, 신규 화합물 경로 설계 및 Scale-up. 연구·공정 개발 지원.",
    examples: "Custom organic, impurities, intermediates",
  },
];

const expertise = [
  {
    icon: GraduationCap,
    title: "PhD 기반 R&D",
    desc: "유기화학 박사급 연구진이 합성 경로 설계·반응 조건 최적화·정제를 직접 수행합니다.",
  },
  {
    icon: FlaskConical,
    title: "고난도 유기합성",
    desc: "복잡한 구조의 합성 계획부터 선택적 반응 제어, 신규 반응 조건 확립까지 대응합니다.",
  },
  {
    icon: Settings2,
    title: "공정 개선 · 원가 절감",
    desc: "수율·재현성 향상과 재료비 절감을 통해 경쟁력 있는 단가 구조를 만듭니다.",
  },
  {
    icon: Sparkles,
    title: "LPPS · 펩타이드 전문",
    desc: "용액상 펩타이드 합성 기술로 짧은 펩타이드 대량 합성과 핵심 서열 공급을 지원합니다.",
  },
];

const facilities = [
  {
    icon: Beaker,
    title: "합성 · 반응 설비",
    desc: "소량 연구부터 파일럿 Scale-up까지 유연한 반응 규모 대응",
  },
  {
    icon: Microscope,
    title: "분석 · 품질 관리",
    desc: "HPLC, LC-MS, NMR 등 분석으로 순도·구조를 확인",
  },
  {
    icon: Wrench,
    title: "정제 · 분리",
    desc: "컬럼, 결정화 등 정제 전략으로 고순도 제품 확보",
  },
  {
    icon: Building2,
    title: "안정적 공급 체계",
    desc: "국내 합성 기반 신속 출고 · COA 및 규격 협의 지원",
  },
];

const supports = [
  {
    icon: Settings2,
    title: "사양 변경 대응",
    desc: "순도·규격·포장·수량 등 고객 요구 사양에 맞춰 유연하게 조정합니다.",
  },
  {
    icon: Handshake,
    title: "기술 협력",
    desc: "합성 경로 검토, 문헌·특허 조사, 공정 이슈 해결을 연구진이 함께합니다.",
  },
  {
    icon: FlaskConical,
    title: "R&D 맞춤 공급",
    desc: "연구용 mg 단위부터 kg 파일럿까지, Research Use Only 목적의 맞춤 공급.",
  },
];

export default function CustomSynthesisPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep pt-24 pb-16 text-white sm:pt-28 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 hex-pattern opacity-30" />
        <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-blue-light/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            주요 서비스 목록
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-bold tracking-widest text-blue-light"
              >
                SERVICE 05 · R&D · 연구용
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="product-name mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
              >
                Custom&nbsp;Synthesis
                <span className="mt-2 block text-2xl font-bold text-blue-light sm:text-3xl">
                  맞춤 합성 서비스
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 }}
                className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
              >
                유기화합물 및 맞춤형 합성 서비스를 기반으로, 공정 개선과 원가
                절감을 통해 고순도 펩타이드·합성 유기물을 신속하고 합리적인
                가격으로 제공합니다.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue/30 transition-all hover:bg-blue-light"
                >
                  문의하기
                  <ArrowRight size={16} />
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/15"
                >
                  샘플 · 견적 문의
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28 }}
                className="mt-8 flex flex-wrap gap-2"
              >
                {[
                  "공정 개선",
                  "원가 절감",
                  "고순도 신속 공급",
                  "Research Use Only",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10"
            >
              <Image
                src={siteImages.product05}
                alt="Custom Synthesis 연구소"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy/20" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-navy/70 p-4 backdrop-blur-md">
                <p className="text-xs font-bold tracking-widest text-blue-light">
                  WITHBIOCHEM
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Research-driven Custom Synthesis Partner
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service intro */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-10 lg:grid-cols-5 lg:gap-14"
          >
            <div className="lg:col-span-2">
              <motion.p
                custom={0}
                variants={fadeUp}
                className="text-xs font-bold tracking-[0.2em] text-blue"
              >
                SERVICE OVERVIEW
              </motion.p>
              <motion.h2
                custom={1}
                variants={fadeUp}
                className="mt-2 text-2xl font-black tracking-tight text-navy sm:text-3xl"
              >
                서비스 소개
              </motion.h2>
              <motion.div
                custom={2}
                variants={fadeUp}
                className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-blue to-blue-light"
              />
            </div>
            <div className="lg:col-span-3">
              <motion.p
                custom={1}
                variants={fadeUp}
                className="text-base leading-relaxed text-slate-600 sm:text-lg"
              >
                위드바이오캠은{" "}
                <span className="font-bold text-navy">
                  유기화합물 및 맞춤형 합성 서비스
                </span>
                를 기반으로,{" "}
                <span className="font-bold text-navy">공정 개선과 원가 절감</span>
                을 통해 고순도 펩타이드 및 합성 유기물을{" "}
                <span className="font-bold text-navy">
                  신속하고 합리적인 가격
                </span>
                으로 제공합니다.
              </motion.p>
              <motion.p
                custom={2}
                variants={fadeUp}
                className="mt-4 text-[15px] leading-relaxed text-slate-500 sm:text-base"
              >
                고객 요구에 따른 사양 변경 및 기술 협력 등 맞춤형 지원을
                제공하며, 연구개발(R&D) 목적의 합성을 중심으로 안정적인 B2B
                파트너십을 지향합니다.
              </motion.p>

              <motion.div
                custom={3}
                variants={fadeUp}
                className="mt-8 grid gap-3 sm:grid-cols-3"
              >
                {[
                  { t: "공정 개선", d: "수율·재현성 최적화" },
                  { t: "원가 절감", d: "합리적 단가 구조" },
                  { t: "고순도 신속 공급", d: "국내 합성 · COA" },
                ].map((c) => (
                  <div
                    key={c.t}
                    className="rounded-2xl border-2 border-blue/15 bg-blue-soft/40 px-4 py-4"
                  >
                    <p className="text-sm font-extrabold text-navy">{c.t}</p>
                    <p className="mt-1 text-xs text-slate-500">{c.d}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise + Facility */}
      <section className="border-y border-border bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
            {/* Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-3xl border-2 border-border bg-white p-7 shadow-sm sm:p-9"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-blue">
                    EXPERTISE
                  </p>
                  <h2 className="text-xl font-black text-navy sm:text-2xl">
                    전문성
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                연구 중심의 맞춤 합성 파트너로서, 설계부터 정제·분석까지 일관된
                기술력을 제공합니다.
              </p>
              <ul className="mt-6 space-y-4">
                {expertise.map((e) => (
                  <li key={e.title} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                      <e.icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy">{e.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-500">
                        {e.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Facility */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="overflow-hidden rounded-3xl border-2 border-navy/20 bg-navy text-white shadow-lg shadow-navy/20"
            >
              <div className="relative h-40 sm:h-44">
                <Image
                  src={siteImages.strengthsBanner}
                  alt="합성 · 분석 설비"
                  fill
                  className="object-cover opacity-70"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3 sm:left-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue text-white">
                    <Building2 size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-blue-light">
                      FACILITY
                    </p>
                    <h2 className="text-xl font-black sm:text-2xl">설비</h2>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 p-7 sm:grid-cols-2 sm:p-8">
                {facilities.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-blue-light">
                      <f.icon size={16} />
                    </div>
                    <p className="mt-3 text-sm font-bold">{f.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Use Only */}
      <section className="bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 rounded-3xl border-2 border-amber-200/80 bg-gradient-to-br from-amber-50 to-white p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <ShieldAlert size={22} />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-amber-700">
                IMPORTANT NOTICE
              </p>
              <h2 className="mt-1 text-xl font-black text-navy">
                Research Use Only
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                본 맞춤 합성 서비스 및 공급 물질은 원칙적으로{" "}
                <strong className="text-navy">연구용(Research Use Only)</strong>
                목적입니다. 인체·임상·의약품 직접 투여 등 규제 대상 용도로의
                사용 여부와 적합성은 고객사에서 확인·책임해야 합니다. 최종 용도,
                표시·광고 규정, 품질 규격은 별도 협의 및 고객 측 검증을
                권장합니다.
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Custom Synthesis · Research Use Only — WITHBIOCHEM
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Synthesis scope table */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-[0.2em] text-blue">
              SYNTHESIS SCOPE
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-navy sm:text-3xl">
              제공 가능한 합성 범위
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
              상용 펩타이드부터 수식·클릭 화학 유도체, 일반 유기화합물까지 —
              고객 프로젝트에 맞춰 범위를 협의합니다.
            </p>
          </motion.div>

          {/* Desktop table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-10 hidden overflow-hidden rounded-2xl border-2 border-border bg-white shadow-sm md:block"
          >
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-navy text-white">
                  <th className="px-6 py-4 font-bold">Category</th>
                  <th className="px-6 py-4 font-bold">설명</th>
                  <th className="px-6 py-4 font-bold">예시 / 범위</th>
                </tr>
              </thead>
              <tbody>
                {synthesisScope.map((row, i) => (
                  <tr
                    key={row.category}
                    className={
                      i % 2 === 0
                        ? "bg-white"
                        : "bg-blue-soft/25"
                    }
                  >
                    <td className="px-6 py-5 align-top">
                      <p className="font-bold text-navy">{row.category}</p>
                      <p className="mt-1 text-xs font-semibold text-blue">
                        {row.ko}
                      </p>
                    </td>
                    <td className="px-6 py-5 align-top leading-relaxed text-slate-600">
                      {row.detail}
                    </td>
                    <td className="px-6 py-5 align-top font-medium text-slate-500">
                      {row.examples}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile cards */}
          <div className="mt-8 space-y-4 md:hidden">
            {synthesisScope.map((row, i) => (
              <motion.div
                key={row.category}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border-2 border-border bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-bold tracking-wide text-blue">
                  {row.ko}
                </p>
                <h3 className="mt-1 text-base font-extrabold text-navy">
                  {row.category}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {row.detail}
                </p>
                <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-500">
                  {row.examples}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer support */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-blue">
              TAILORED SUPPORT
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-navy sm:text-3xl">
              고객 맞춤 지원
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
              사양 변경, 기술 협력, R&D 맞춤 공급 — 프로젝트 단계에 맞춰
              지원합니다.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {supports.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-3xl border-2 border-border bg-slate-50/80 p-6 text-center transition-shadow hover:border-blue/30 hover:bg-white hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white shadow-lg shadow-navy/20">
                  <s.icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 max-w-2xl space-y-2.5 rounded-2xl border border-border bg-blue-soft/30 p-6"
          >
            {[
              "목표 구조 · 순도 · 수량 · 납기 사전 협의",
              "문헌·특허 검토 및 최적 합성 경로 제안",
              "중간 보고 및 규격(COA) 맞춤 제공 가능",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-2.5 text-sm text-slate-600"
              >
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-blue"
                />
                {line}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy-deep py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 hex-pattern opacity-25" />
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-blue/25 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-[0.2em] text-blue-light">
              START YOUR PROJECT
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
              맞춤 합성을 시작해 보세요
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
              구조식, 목표 순도, 예상 수량, 용도(연구용)를 알려 주시면 검토 후
              견적과 일정을 안내드립니다.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue px-8 py-4 text-sm font-extrabold text-white shadow-xl shadow-blue/30 transition-all hover:bg-blue-light sm:w-auto"
              >
                문의하기
                <ArrowRight size={16} />
              </a>
              <a
                href="/#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-sm font-extrabold text-white transition-all hover:bg-white/15 sm:w-auto"
              >
                샘플 · 견적 문의
              </a>
              <a
                href={MAILTO_INQUIRY}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-transparent px-6 py-4 text-sm font-semibold text-blue-light transition-colors hover:text-white sm:w-auto"
              >
                <Mail size={16} />
                {CONTACT_EMAIL}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer nav */}
      <section className="border-t border-border bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-blue"
          >
            <ArrowLeft size={16} />
            주요 펩타이드 서비스
          </Link>
          <Link
            href="/products/dipeptide-2"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-blue"
          >
            이전: Dipeptide-2
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
