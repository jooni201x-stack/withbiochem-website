"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { partnerLogos, partnerLogoSrc } from "@/lib/images";

/**
 * 파트너 로고 — 무한 스크롤 마퀴
 *
 * 로고 교체: public/IMG_JOON/partner/ 안 파일 (같은 이름 덮어쓰기)
 */
export type Partner = {
  id: string;
  name: string;
  logoSrc: string;
};

const partners: Partner[] = partnerLogos.map((p) => ({
  id: p.id,
  name: p.name,
  logoSrc: partnerLogoSrc(p.file),
}));

function PartnerLogo({ partner }: { partner: Partner }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="partner-logo-slot group relative flex h-16 w-40 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white px-4 shadow-sm transition-shadow hover:shadow-md sm:h-[4.5rem] sm:w-48 sm:px-5">
      {failed ? (
        <span className="select-none text-sm font-semibold tracking-wide text-slate-400">
          {partner.name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={partner.logoSrc}
          alt={partner.name}
          className="h-9 w-auto max-w-[88%] object-contain object-center opacity-90 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-10"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function Partnership() {
  // 끊김 없는 루프용 — 로고 목록을 한 번 복제
  const track = [...partners, ...partners];

  return (
    <section
      id="partnership"
      className="relative scroll-mt-20 overflow-hidden border-t border-border bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="PARTNERSHIP"
          title="위드바이오캠 파트너십"
          subtitle="함께 성장하는 B2B 파트너들과 안정적인 공급 네트워크를 만듭니다."
          align="center"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto mt-12 max-w-6xl sm:mt-14"
      >
        {/* 레이아웃 폭 유지 — max-w-6xl 안에서만 흐름 */}
        <div className="relative overflow-hidden px-0">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-slate-50 to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-slate-50 to-transparent sm:w-16" />

          <div className="flex w-max gap-4 animate-marquee sm:gap-5">
            {track.map((p, i) => (
              <PartnerLogo key={`${p.id}-${i}`} partner={p} />
            ))}
          </div>
        </div>
      </motion.div>

      <p className="mx-auto mt-8 max-w-xl px-5 text-center text-xs leading-relaxed text-slate-400 sm:px-8">
        로고 파일:{" "}
        <code className="rounded bg-white px-1.5 py-0.5 text-[11px] text-slate-500">
          public/IMG_JOON/partner/
        </code>
      </p>
    </section>
  );
}
