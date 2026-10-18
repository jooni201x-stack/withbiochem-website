"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Beaker,
  Building2,
  Recycle,
  Microscope,
  Layers,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { siteImages } from "@/lib/images";

const facilities = [
  {
    no: "01",
    icon: FlaskConical,
    en: "SYNTHESIS LAB",
    ko: "합성 연구실",
    desc: "대용량 재킷 반응기 · 회전증발농축기 · 진공·냉각 시스템",
    image: siteImages.facilitySynthesisLab,
  },
  {
    no: "02",
    icon: Beaker,
    en: "REACTION LAB",
    ko: "반응 연구실",
    desc: "반응 조건 최적화 · 중간체 합성 · 연구진 상주 실험",
    image: siteImages.facilityReactionLab,
  },
  {
    no: "03",
    icon: Building2,
    en: "HEADQUARTERS",
    ko: "본사 · 연구소",
    desc: "경기도 성남 자체 연구소 운영 · 방문 미팅 환영",
    image: siteImages.facilityHeadquarters,
  },
  {
    no: "04",
    icon: Recycle,
    en: "WASTE MANAGEMENT",
    ko: "화학 폐기물 관리 시설",
    desc: "전용 보관 공간 · IBC 탱크 및 용기별 분리 보관으로 안전·환경 관리",
    image: siteImages.facilityWaste,
  },
];

const kpis = [
  {
    icon: Microscope,
    en: "IN-HOUSE LAB",
    title: "자체 연구소 운영",
    desc: "외주 없이 직접 합성",
  },
  {
    icon: Layers,
    en: "SCALE-UP",
    title: "mg → kg 설비",
    desc: "대용량 반응기 보유",
  },
  {
    icon: FlaskConical,
    en: "QUALITY",
    title: "분석 기반 품질관리",
    desc: "HPLC · LC-MS · NMR",
  },
  {
    icon: ShieldCheck,
    en: "SAFETY · ESG",
    title: "폐기물 분리 관리",
    desc: "안전·환경 책임 운영",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Facility() {
  return (
    <section
      id="facility"
      className="relative scroll-mt-32 bg-slate-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="RESEARCH FACILITY · INFRASTRUCTURE"
          title="연구 시설 · 인프라"
          subtitle="직접 합성하고, 직접 관리합니다. 자체 연구소에서 합성·정제·분석을 수행하고, 화학 폐기물까지 전용 공간에서 관리합니다. 원료의 품질은 설비와 운영 체계에서 시작됩니다."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {facilities.map((f) => (
            <motion.div
              key={f.no}
              variants={item}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={f.image}
                  alt={f.ko}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/0 to-transparent" />
                <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-navy shadow-sm backdrop-blur-sm">
                  <f.icon size={18} strokeWidth={1.75} />
                </span>
              </div>
              <div className="p-5">
                <p className="text-[11px] font-bold tracking-widest text-blue">
                  {f.no} · {f.en}
                </p>
                <h3 className="mt-1 text-base font-bold text-navy">{f.ko}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* KPI 스트립 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-8 grid gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm sm:grid-cols-2 sm:gap-4 sm:p-7 lg:grid-cols-4"
        >
          {kpis.map((k) => (
            <div key={k.en} className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                <k.icon size={18} strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-widest text-blue">
                  {k.en}
                </p>
                <p className="text-sm font-bold text-navy">{k.title}</p>
                <p className="text-xs leading-snug text-slate-500">{k.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
