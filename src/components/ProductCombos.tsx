"use client";

import { motion } from "framer-motion";

const combos = [
  {
    title: "DUAL PEPTIDE",
    subtitle: "PT-5 + PT-1",
    desc: "콜라겐 부스팅 스타 활성 + ECM 전반 베이스 — “프리미엄 듀얼 펩타이드”",
  },
  {
    title: "RECOVERY LINE",
    subtitle: "GHK-Cu + PT-5",
    desc: "시술 후 진정·회복과 콜라겐 재생을 함께 소구하는 프리미엄 라인",
  },
  {
    title: "EYE CONTOUR",
    subtitle: "Dipeptide-2",
    desc: "Acetyl Tetrapeptide-5 계열과 병용한 아이컨투어·모닝 디퍼프 컨셉",
  },
];

/** /products 전용 — 추천 조합 3종 (홈 요약본에는 없음) */
export default function ProductCombos() {
  return (
    <section className="bg-navy-deep pb-20 text-white sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-[#FEE500]">
            RECOMMENDED COMBINATIONS
          </p>
          <h3 className="mt-2 text-lg font-bold tracking-tight text-white sm:text-xl">
            추천 조합 3종
          </h3>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {combos.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-[11px] font-bold tracking-widest text-[#FEE500]">
                  {c.title}
                </p>
                <p className="mt-1 text-base font-bold text-white">
                  {c.subtitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
