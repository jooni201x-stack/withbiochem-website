"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Zap,
  SlidersHorizontal,
  Package,
  Scale,
  Truck,
  CreditCard,
  Box,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { siteImages } from "@/lib/images";

const strengths = [
  {
    icon: BadgeCheck,
    title: "Quality",
    ko: "품질",
    points: [
      "95% 이상 순도 (제품별 고순도 관리)",
      "제품별 COA(분석성적서) 기본 제공",
      "요청 시 안정성·중금속 시험 데이터 지원",
    ],
  },
  {
    icon: Zap,
    title: "Speed",
    ko: "속도",
    points: [
      "국내 합성·출고로 수입 리드타임(2~4주) 제거",
      "소량 시험 배치부터 kg 단위 양산까지 대응",
      "빠른 커뮤니케이션 · 의사결정 지원",
    ],
  },
  {
    icon: SlidersHorizontal,
    title: "Flexibility",
    ko: "유연성",
    points: [
      "50g 단위 소량 주문 가능",
      "신규 거래처 샘플 협의",
      "단일 성분 또는 멀티펩타이드 패키지 구성",
    ],
  },
];

const tradeInfo = [
  {
    icon: Package,
    label: "공급 형태",
    value: "순수 분말(Powder), 95% 이상 순도, 제품별 COA",
  },
  {
    icon: Scale,
    label: "최소 주문",
    value: "50g부터 (제품별 협의 가능)",
  },
  {
    icon: Truck,
    label: "납기",
    value: "주문 확정 후 수량에 따라 협의",
  },
  {
    icon: CreditCard,
    label: "결제 조건",
    value: "발주 시 50% / 출고 시 50% (또는 협의), VAT 별도",
  },
  {
    icon: Box,
    label: "포장",
    value: "차광·밀폐 용기, 냉장/냉동 보관 권장 (제품별 상이)",
  },
];

export default function Strengths() {
  return (
    <section
      id="strengths"
      className="relative scroll-mt-20 overflow-hidden bg-navy-deep py-20 text-white sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 hex-pattern" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-blue-light/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="WHY DOMESTIC SUPPLY"
          title="공급 강점"
          subtitle="국내에서 직접 합성하는 화장품 활성 펩타이드 원료. 수입 의존도가 높은 핵심 펩타이드를 국내 공급으로 대체합니다."
          light
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative mt-10 h-44 overflow-hidden rounded-2xl sm:h-56"
        >
          <Image
            src={siteImages.strengthsBanner}
            alt="국내 합성 연구 시설"
            fill
            className="object-cover opacity-80"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-navy-deep/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-widest text-blue-light">
              DOMESTIC SYNTHESIS
            </p>
            <p className="mt-1 max-w-md text-lg font-bold text-white sm:text-xl">
              수입 리드타임 없이, 국내에서 바로 공급
            </p>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-7"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue/20 text-blue-light">
                <s.icon size={22} strokeWidth={1.75} />
              </div>
              <p className="text-xs font-semibold tracking-widest text-blue-light">
                {s.title}
              </p>
              <h3 className="mt-1 text-xl font-bold">{s.ko}</h3>
              <ul className="mt-4 space-y-2.5">
                {s.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-relaxed text-slate-300"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-light" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
        >
          <h3 className="text-lg font-bold tracking-tight sm:text-xl">
            거래 정보
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            1kg↑ 대량·정기 거래는 별도 단가 협의 · 신규 거래처 샘플 제공 협의
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tradeInfo.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                className="flex gap-3 rounded-xl bg-white/[0.04] p-4 ring-1 ring-white/5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue/15 text-blue-light">
                  <t.icon size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-light">
                    {t.label}
                  </p>
                  <p className="mt-0.5 text-sm leading-snug text-slate-200">
                    {t.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
