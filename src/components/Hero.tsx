"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  FlaskConical,
  FileCheck2,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { siteImages } from "@/lib/images";
import { companyInfo } from "@/lib/company";

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

const chips = [
  "96% · COA",
  "국내 합성 · 빠른 납품",
  "50g부터",
  "최저가 납품 보장제",
];

const highlights = [
  { icon: ShieldCheck, title: "96% Purity", sub: "고순도 · 제품별 COA" },
  { icon: Truck, title: "Fast Domestic", sub: "국내 합성 · 빠른 납품" },
  { icon: FlaskConical, title: "Flexible Scale", sub: "50g 소량부터 대응" },
  { icon: FileCheck2, title: "Price Guarantee", sub: "최저가 납품 보장제" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const tryPlay = () => {
      video.play().catch(() => {
        // Autoplay blocked (e.g. iOS low-power mode) — resume on first touch.
        const resume = () => {
          video.play().catch(() => {});
          document.removeEventListener("touchstart", resume);
        };
        document.addEventListener("touchstart", resume, { once: true });
      });
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener("loadeddata", tryPlay, { once: true });
    }

    const onVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-24"
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
              className="text-2xl font-bold leading-snug tracking-tight text-navy sm:text-3xl lg:text-[2.1rem]"
            >
              국내 합성 고순도 화장품 펩타이드 원료
            </motion.h1>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-2 text-4xl font-bold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]"
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
            </motion.p>

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
                국내 합성 고순도 화장품 펩타이드 · 중국산 대비 경쟁 단가 ·
                통관 없이 빠른 공급
              </span>
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-[15px]"
            >
              LPPS 기술로 원가를 낮추고, 통관 없이 빠르게 공급하는 국내 합성
              파트너. 96% 순도 · COA · 50g부터 유연한 공급.
            </motion.p>

            {/* USP chips — compact, restrained */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-5 flex flex-wrap gap-2"
            >
              {chips.map((chip) => (
                <span
                  key={chip}
                  data-text="chip"
                  className="inline-flex items-center rounded-full border border-border bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-600 shadow-sm sm:text-xs"
                >
                  {chip}
                </span>
              ))}
            </motion.div>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-blue to-blue-light px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue/30 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue/40"
              >
                <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">샘플 · 공급 문의</span>
                <ArrowRight
                  size={18}
                  className="relative transition-transform group-hover:translate-x-0.5"
                />
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
                href={companyInfo.brochureUrl}
                download="WITHBIOCHEM_브로셔.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-all hover:border-blue/30 hover:bg-blue-soft"
              >
                <Download size={16} />
                브로셔
              </a>
            </motion.div>
          </div>

          {/* Single hero video */}
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
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src={siteImages.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                webkit-playsinline="true"
                x5-playsinline="true"
                disablePictureInPicture
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
                  { v: "96%", l: "순도" },
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
