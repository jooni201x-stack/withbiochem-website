"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, GraduationCap, Lightbulb, Cpu } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { siteImages } from "@/lib/images";

const identities = [
  {
    icon: Heart,
    en: "Passion",
    ko: "열정",
    desc: "고객과 함께 제형을 완성하는 따뜻한 전문성",
  },
  {
    icon: GraduationCap,
    en: "Professional",
    ko: "전문",
    desc: "고려대학교 화학 박사급 연구진이 합성을 직접 설계·관리하는 PhD 기반 R&D",
  },
  {
    icon: Lightbulb,
    en: "Smart",
    ko: "스마트",
    desc: "복잡한 펩타이드 과학을 명료하게, 빠른 의사결정 지원",
  },
  {
    icon: Cpu,
    en: "Technology",
    ko: "기술",
    desc: "LPPS 합성 기술, 96% 순도, 국내 양산 역량",
  },
];

const gallery = [
  { src: siteImages.aboutGallery1, alt: "연구실 분석 작업", label: "연구 분석" },
  { src: siteImages.aboutGallery2, alt: "연구진 실험", label: "PhD R&D" },
  { src: siteImages.aboutGallery3, alt: "바이오 실험", label: "품질 관리" },
  { src: siteImages.aboutGallery4, alt: "화장품 원료 제형", label: "원료 제형" },
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

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-32 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="ABOUT WITHBIOCHEM"
          title="회사 소개"
          subtitle="Research-driven Custom Synthesis Partner · Your Trusted Partner in Custom Chemical Innovation"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              위드바이오캠은{" "}
              <span className="font-semibold text-navy">
                유기화학 박사 연구진
              </span>
              으로 구성된{" "}
              <span className="font-semibold text-navy">
                화장품용 고순도 펩타이드 국내 합성·공급 B2B 원료 파트너
              </span>
              입니다. 맞춤형 유기합성(Custom Organic Synthesis)과 펩타이드
              제조를 중심으로, 수입에 의존하던 화장품·의약품 활성 원료를
              국내에서 직접 합성합니다.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-500 sm:text-base">
              신규 화합물 합성·최적화 연구, 고난도 유기 합성, 고객사 사업 니즈를
              반영한 맞춤 서비스까지 — 연구 중심의 파트너로서 안정적인 공급망과
              합리적인 거래 구조를 제공합니다.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { t: "연구 중심", d: "신규 화합물 합성·최적화" },
                { t: "유기합성 전문", d: "고난도 합성·다년 경험" },
                { t: "고객 맞춤", d: "사업 니즈 반영 서비스" },
              ].map((c) => (
                <div
                  key={c.t}
                  className="rounded-xl border border-border bg-slate-50/80 px-3 py-3 text-center"
                >
                  <p className="text-sm font-bold text-navy">{c.t}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-500">
                    {c.d}
                  </p>
                </div>
              ))}
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.55 }}
              className="mt-8 rounded-2xl border border-blue/10 bg-gradient-to-br from-blue-soft/80 to-white p-6 sm:p-8"
            >
              <p className="text-xs font-semibold tracking-widest text-blue">
                OUR MISSION
              </p>
              <p className="mt-3 text-lg font-semibold leading-snug text-navy sm:text-xl">
                “합성의 힘으로, 국내 바이오화학 소재의 새로운 기준을 만든다.”
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                수입을 대체하는 일에서 표준을 만드는 일로.
              </p>
              <p className="mt-2 text-xs italic text-slate-400">
                Setting a new standard for domestic biochemical materials,
                through the power of synthesis.
              </p>
            </motion.blockquote>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {identities.map((id) => (
              <motion.div
                key={id.en}
                variants={item}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group rounded-2xl border border-border bg-slate-50/60 p-5 transition-colors hover:border-blue/25 hover:bg-white hover:shadow-md"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue shadow-sm ring-1 ring-border transition-colors group-hover:bg-blue group-hover:text-white group-hover:ring-blue">
                  <id.icon size={20} strokeWidth={1.75} />
                </div>
                <p className="text-xs font-semibold tracking-wider text-blue">
                  {id.en}
                </p>
                <h3 className="mt-0.5 text-base font-bold text-navy">{id.ko}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {id.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Image gallery */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {gallery.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5"
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
              <p className="absolute bottom-3 left-3 text-sm font-semibold text-white">
                {g.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
