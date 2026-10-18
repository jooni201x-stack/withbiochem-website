import Link from "next/link";
import { ChevronRight } from "lucide-react";

/**
 * 헤더 바로 아래 풀폭 슬림 띠배너.
 * 배경 #FEE500 · 글씨 #191600, PC·모바일 동일 레이아웃.
 */
export default function GuaranteeBanner() {
  return (
    <div className="bg-[#FEE500] text-[#191600]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2.5 gap-y-1 px-3 py-1.5 sm:px-8">
        <p className="min-w-0 text-center text-[11px] font-semibold leading-snug tracking-tight sm:text-xs">
          전세계 최저가 보장제 · 순도 96% 보장제 운영 중 — 동일 규격 더 낮은
          견적 시 맞춤 납품
        </p>
        <Link
          href="/guarantee"
          className="inline-flex shrink-0 items-center gap-0.5 rounded-full bg-[#191600] px-2.5 py-1 text-[10px] font-bold text-[#FEE500] transition-opacity hover:opacity-85 sm:px-3 sm:text-[11px]"
        >
          보장제 자세히 보기
          <ChevronRight size={12} strokeWidth={2.75} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
