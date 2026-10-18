"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteImages, partnerLogoSrc } from "@/lib/images";

const gallery = [
  { src: siteImages.aboutGallery1, alt: "연구실 분석 작업", label: "연구 분석" },
  { src: siteImages.aboutGallery2, alt: "연구진 실험", label: "PhD R&D" },
  { src: siteImages.aboutGallery3, alt: "바이오 실험", label: "품질 관리" },
  { src: siteImages.aboutGallery4, alt: "화장품 원료 제형", label: "원료 제형" },
];

/** /about 전용 — 고려대 PhD 블록 + 이미지 갤러리 (홈 요약본에는 없음) */
export default function AboutExtra() {
  return (
    <section className="bg-white pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* 고려대 PhD 블록 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="overflow-hidden rounded-2xl border border-border bg-slate-50/60 shadow-sm"
        >
          <div className="grid gap-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
            <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[260px]">
              <Image
                src={siteImages.aboutKuResearchers}
                alt="고려대학교 PhD급 연구진"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 40vw"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-widest text-blue">
                B2B TECHNICAL SUPPORT
              </p>
              <h3 className="product-name mt-2 text-xl font-bold leading-snug text-navy sm:text-2xl">
                고려대학교 PhD급 연구진이
                <br />
                직접 함께 합니다
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
                합성 설계부터 규격 협의, 배합 가이드까지 — 단순 원료 공급을
                넘어 고객사의 여정에 함께 합니다.
              </p>
              <Image
                src={partnerLogoSrc("korea-chem.png")}
                alt="고려대학교 이과대학 화학과"
                width={180}
                height={42}
                className="mt-5 h-8 w-auto object-contain object-left opacity-90"
                unoptimized
              />
            </div>
          </div>
        </motion.div>

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
