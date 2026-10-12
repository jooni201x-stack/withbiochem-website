import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { products } from "@/lib/products";
import { softBreakName } from "@/lib/text";

type Props = {
  /** 현재 상세 페이지 slug */
  currentSlug: string;
};

/** 버튼용 짧은 라벨 */
function shortLabel(slug: string, name: string, brand: string, code: string) {
  if (slug === "custom-synthesis") return "Custom Synthesis";
  if (slug === "ghk-cu") return "GHK-Cu";
  if (slug === "dipeptide-2") return "Dipeptide-2";
  if (slug === "palmitoyl-tripeptide-5") return "PT-5";
  if (slug === "palmitoyl-tripeptide-1") return "PT-1";
  // fallback
  return brand.length <= 18 ? brand : name;
}

/**
 * 제품 상세 공통 네비 — 히어로 배너 바로 아래
 * 뒤로가기 1 + 다른 제품/서비스 4 (현재 페이지 제외)
 */
export default function ProductDetailNav({ currentSlug }: Props) {
  const others = products.filter((p) => p.slug !== currentSlug);

  return (
    <nav
      aria-label="제품 상세 바로가기"
      className="border-b border-border bg-slate-50"
    >
      <div className="mx-auto max-w-6xl px-5 py-3 sm:px-8 sm:py-3.5">
        <p className="mb-2 text-[11px] font-semibold tracking-wide text-slate-400">
          상세 페이지로 이동
        </p>

        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 scrollbar-thin sm:flex-wrap sm:overflow-visible">
          {/* 뒤로가기 → 주요 제품 목록 */}
          <Link
            href="/#products"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-navy/15 bg-navy px-3.5 py-2 text-xs font-bold text-white shadow-sm transition-colors hover:bg-blue sm:text-[13px]"
          >
            <ArrowLeft size={14} strokeWidth={2.5} />
            주요 제품 목록
          </Link>

          {others.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              title={`${p.name} 상세 페이지`}
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#FEE500]/80 bg-[#FEE500] px-3.5 py-2 text-xs font-bold text-[#191600] shadow-sm ring-1 ring-black/5 transition-all hover:bg-[#ffe566] hover:shadow-md sm:text-[13px]"
            >
              <span className="rounded bg-black/10 px-1.5 py-0.5 text-[10px] font-bold text-[#191600]/80">
                {p.code}
              </span>
              <span className="product-name max-w-[9.5rem] truncate sm:max-w-none">
                {softBreakName(
                  shortLabel(p.slug, p.name, p.brand, p.code),
                )}
              </span>
              <ExternalLink
                size={12}
                className="shrink-0 text-[#191600]/50 transition-colors group-hover:text-[#191600]"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
