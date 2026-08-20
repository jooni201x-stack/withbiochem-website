"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { companyInfo } from "@/lib/company";
import { siteImages } from "@/lib/images";

/** 포인트 컬러 — 선명한 옐로우 */
const ACCENT = "#FEE500";

/** 카운트업 1회 시간 */
const COUNT_MS = 1000;
/** 사이클 주기 (카운트 + 홀드 포함) — 약 3초마다 반복 */
const CYCLE_MS = 3000;

type Metric = {
  target: number;
  suffix: string;
  label: string;
  note: string;
  featured?: boolean;
};

const metrics: Metric[] = [
  {
    target: 70,
    suffix: "%+",
    label: "국내 화장품 원료 수입 의존",
    note: "수입 의존 시장 현실",
    featured: true,
  },
  {
    target: 20,
    suffix: "%",
    label: "20% 이상 더 낮은 단가",
    note: "최저가 납품 보장제",
  },
  {
    target: 96,
    suffix: "%",
    label: "품질 및 순도 96% 보장",
    note: "순도 보장제 · COA",
  },
  {
    target: 7,
    suffix: "일",
    label: "의뢰 후 빠른 납품 목표",
    note: "국내 합성 · 통관 없음",
  },
  {
    target: 50,
    suffix: "g~",
    label: "소량부터 대응",
    note: "샘플 · 시험 배치 가능",
  },
];

/**
 * 섹션이 보일 때 0 → target 카운트업을 약 3초마다 반복.
 * reduced-motion이면 최종값만 표시.
 */
function useRepeatingCountUp(
  target: number,
  active: boolean,
  delayMs = 0,
  reduceMotion = false,
) {
  const [value, setValue] = useState(reduceMotion ? target : 0);
  const rafRef = useRef(0);
  const cycleRef = useRef(0);
  const delayRef = useRef(0);

  useEffect(() => {
    if (reduceMotion) {
      setValue(target);
      return;
    }

    if (!active) {
      // 화면 밖이면 최종값 유지 (재진입 시 다시 루프)
      setValue(target);
      return;
    }

    let cancelled = false;

    const clearTimers = () => {
      cancelAnimationFrame(rafRef.current);
      window.clearTimeout(cycleRef.current);
      window.clearTimeout(delayRef.current);
    };

    const animateOnce = (onDone: () => void) => {
      setValue(0);
      const start = performance.now();

      const tick = (now: number) => {
        if (cancelled) return;
        const t = Math.min(1, (now - start) / COUNT_MS);
        const eased = 1 - (1 - t) * (1 - t);
        setValue(Math.round(target * eased));
        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setValue(target);
          onDone();
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    const runLoop = () => {
      if (cancelled) return;
      animateOnce(() => {
        if (cancelled) return;
        // 카운트 후 남은 시간 홀드 → 주기 약 3초
        const hold = Math.max(0, CYCLE_MS - COUNT_MS);
        cycleRef.current = window.setTimeout(runLoop, hold);
      });
    };

    delayRef.current = window.setTimeout(runLoop, delayMs);

    return () => {
      cancelled = true;
      clearTimers();
    };
  }, [active, target, delayMs, reduceMotion]);

  return value;
}

function MetricNumber({
  metric,
  active,
  large,
  delayMs,
  reduceMotion,
}: {
  metric: Metric;
  active: boolean;
  large?: boolean;
  delayMs: number;
  reduceMotion: boolean;
}) {
  const display = useRepeatingCountUp(
    metric.target,
    active,
    delayMs,
    reduceMotion,
  );

  return (
    <p
      className="font-black tabular-nums tracking-tighter"
      style={{
        color: ACCENT,
        fontSize: large
          ? "clamp(4rem, 12vw, 6.5rem)"
          : "clamp(2.5rem, 7vw, 3.5rem)",
        lineHeight: 0.95,
        textShadow: "0 0 48px rgba(254, 229, 0, 0.22)",
      }}
      aria-label={`${metric.target}${metric.suffix}`}
    >
      <span className="inline-block">{display}</span>
      <span>{metric.suffix}</span>
    </p>
  );
}

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  /** 뷰포트에 있을 때만 반복 카운트 (성능·부담 완화) */
  const inView = useInView(sectionRef, { amount: 0.2 });
  const reduceMotion = useReducedMotion() ?? false;

  const lead = metrics[0];
  const rest = metrics.slice(1);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative scroll-mt-32 overflow-hidden bg-navy-deep py-20 text-white sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20 hex-pattern" />
      <div className="pointer-events-none absolute -left-28 top-1/4 h-80 w-80 rounded-full bg-blue/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#FEE500]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p
            className="text-xs font-semibold tracking-[0.2em] sm:text-[13px]"
            style={{ color: ACCENT }}
          >
            WHY WITHBIOCHEM
          </p>
          <h2 className="product-name mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2.1rem]">
            왜 위드바이오캠인가
          </h2>
          <div
            className="mt-5 h-0.5 w-12 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${ACCENT}, transparent)`,
            }}
          />
        </motion.div>

        {/* 후킹 */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.04 }}
          className="mt-8 max-w-3xl space-y-2.5"
        >
          <p className="text-lg font-bold leading-snug text-white sm:text-xl lg:text-[1.4rem]">
            국내 화장품 원료{" "}
            <span style={{ color: ACCENT }}>70%+</span>가 수입에 의존합니다.
          </p>
          <p className="text-base font-semibold leading-relaxed text-slate-200 sm:text-lg">
            위드바이오캠은 국내 펩타이드 시장에{" "}
            <span className="text-white">새로운 솔루션</span>이 됩니다.
          </p>
        </motion.div>

        {/* 숫자 그리드 */}
        <div className="mt-12 grid gap-3 sm:gap-4 lg:grid-cols-[1.15fr_1fr] lg:items-stretch lg:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-col justify-center rounded-2xl border border-[#FEE500]/30 bg-gradient-to-br from-[#FEE500]/15 via-white/[0.03] to-transparent p-6 sm:p-8 lg:p-9"
          >
            <MetricNumber
              metric={lead}
              active={inView}
              large
              delayMs={0}
              reduceMotion={reduceMotion}
            />
            <p className="mt-5 text-base font-bold leading-snug text-white sm:text-lg">
              {lead.label}
            </p>
            <p className="mt-1.5 text-sm text-slate-400">{lead.note}</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {rest.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  delay: 0.06 * (i + 1),
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5"
              >
                <MetricNumber
                  metric={m}
                  active={inView}
                  delayMs={80 + i * 70}
                  reduceMotion={reduceMotion}
                />
                <p className="mt-3 text-sm font-bold leading-snug text-white sm:text-[15px]">
                  {m.label}
                </p>
                <p className="mt-1 text-xs leading-snug text-slate-400 sm:text-[13px]">
                  {m.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 보장 바 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mt-5 rounded-2xl border border-[#FEE500]/20 bg-gradient-to-r from-[#FEE500]/12 via-white/[0.03] to-transparent px-5 py-4 sm:mt-6 sm:px-7 sm:py-5"
        >
          <p className="text-sm font-bold tracking-tight text-white sm:text-base">
            업계 최초 순도 96% 보장 · 최저가 납품 보장제
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
            동일 규격 기준, 더 낮은 정식 견적이 있으면 그 가격에 맞춰
            납품합니다.{" "}
            <a
              href="#guarantee"
              className="font-semibold text-[#FEE500] underline-offset-2 hover:underline"
            >
              보장제 자세히 보기
            </a>
          </p>
        </motion.div>

        {/* 하단 결론 + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-10 border-t border-white/10 pt-10 text-center"
        >
          <p className="mx-auto max-w-2xl text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl lg:text-[1.65rem]">
            최고의 품질은 유지하되, 합리적 가격으로
          </p>
          <p
            className="mx-auto mt-3 max-w-2xl text-base font-bold leading-snug sm:text-lg lg:text-xl"
            style={{ color: ACCENT }}
          >
            국내 펩타이드 시장의 새로운 기준이 되겠습니다.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-navy shadow-lg transition-all hover:bg-slate-100 hover:shadow-xl"
            >
              샘플 · 공급 문의
              <ArrowRight size={16} />
            </a>
            <a
              href={companyInfo.kakaoOpenChat}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FEE500] px-6 py-3.5 text-sm font-bold text-[#191600] shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
            >
              <Image
                src={siteImages.kakaoTalk}
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
                unoptimized
              />
              카카오 빠른 상담
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
