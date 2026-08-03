"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  FlaskConical,
  FileCheck2,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import { siteImages } from "@/lib/images";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + i * 0.1,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const highlights = [
  { icon: ShieldCheck, title: "95%+ Purity", sub: "고순도 95% 이상" },
  { icon: FileCheck2, title: "COA Provided", sub: "제품별 COA 제공" },
  { icon: FlaskConical, title: "Domestic Synthesis", sub: "국내 합성 · 안정 공급" },
  { icon: Handshake, title: "B2B / ODM", sub: "B2B / ODM 원료 공급" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 hex-pattern" />
      <div className="pointer-events-none absolute inset-0 gradient-radial" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue/15 bg-white/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-blue shadow-sm sm:text-[13px]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              CUSTOM ORGANIC SYNTHESIS · PEPTIDE MANUFACTURING · B2B
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl font-bold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]"
            >
              COSMETIC
              <br />
              <span className="bg-gradient-to-r from-blue to-blue-light bg-clip-text text-transparent">
                PEPTIDE
              </span>
              <br />
              <span className="text-[0.72em] font-semibold tracking-[0.18em] text-slate-500">
                RAW MATERIALS
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Your Trusted Partner in Custom Chemical Innovation
              <br />
              <span className="font-medium text-navy/80">
                맞춤 유기합성 · 국내 합성 프리미엄 펩타이드 원료
              </span>
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-[15px]"
            >
              연구 중심의 맞춤 합성 파트너. 고순도 품질, 빠른 공급, mg→kg
              유연한 Scale-up.
              <br className="hidden sm:block" />
              펩타이드·유기합성·클릭 화학으로 고객의 혁신을 지원합니다.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <a
                href="/brochure.pdf"
                download="WITHBIOCHEM_브로셔.pdf"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-blue to-blue-light px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue/30 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue/40"
              >
                <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <Download size={20} className="relative shrink-0" />
                <span className="relative">브로셔 다운로드</span>
              </a>
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy/20 transition-all hover:bg-navy-deep hover:shadow-xl"
              >
                주요 제품 보기
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-all hover:border-blue/30 hover:bg-blue-soft"
              >
                샘플 · 견적 문의
              </a>
            </motion.div>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium tracking-wide text-slate-500 sm:text-[13px]"
            >
              {[
                "CUSTOM SYNTHESIS",
                "PEPTIDE",
                "COSMETIC ACTIVES",
                "CLICK CHEMISTRY",
              ].map((tag, i) => (
                <span key={tag} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="hidden h-3 w-px bg-border sm:inline-block" />
                  )}
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Single hero video (replaces 4 image grid) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy shadow-2xl shadow-navy/20 ring-1 ring-black/5 sm:aspect-[3/4] lg:aspect-[4/5]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={siteImages.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="WITHBIOCHEM 소개 영상"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-navy/10" />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 left-1/2 z-10 w-[88%] -translate-x-1/2 rounded-2xl border border-white/60 bg-white/95 p-3 shadow-xl backdrop-blur-md sm:p-4"
            >
              <div className="flex items-center justify-between gap-2 text-center">
                {[
                  { v: "95%+", l: "순도" },
                  { v: "COA", l: "분석성적서" },
                  { v: "KR", l: "국내 합성" },
                ].map((s) => (
                  <div key={s.l} className="flex-1">
                    <p className="text-sm font-bold text-navy sm:text-base">
                      {s.v}
                    </p>
                    <p className="text-[10px] text-slate-500 sm:text-xs">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.55,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 lg:grid-cols-4"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:p-5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-soft text-blue">
                <item.icon size={20} strokeWidth={1.75} />
              </div>
              <p className="text-sm font-bold tracking-tight text-navy sm:text-[15px]">
                {item.title}
              </p>
              <p className="mt-0.5 text-xs text-slate-500 sm:text-[13px]">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
