"use client";

import Image from "next/image";
import { companyInfo } from "@/lib/company";
import { siteImages } from "@/lib/images";

/**
 * 카카오톡 빠른 상담 플로팅 버튼
 * - PC·모바일 공통 fixed (화면 오른쪽 세로 중앙)
 * - 스크롤 시 항상 따라다님
 * - 문의 폼 sticky와 겹치지 않도록 z-40 유지 (진입점 역할)
 */
export default function FloatingContactButton() {
  return (
    <a
      href={companyInfo.kakaoOpenChat}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="카카오톡 빠른 상담 — 새 창으로 열기"
      className="group fixed right-3 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-1.5 sm:right-5"
    >
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#FEE500] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.28)] ring-1 ring-black/5 transition-transform duration-200 group-hover:scale-105 group-active:scale-95 sm:h-16 sm:w-16">
        <span
          className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#FEE500]/35 opacity-30 [animation-duration:2.6s]"
          aria-hidden
        />
        <Image
          src={siteImages.kakaoTalk}
          alt="카카오톡 TALK"
          width={40}
          height={40}
          className="relative h-8 w-8 object-contain sm:h-10 sm:w-10"
          unoptimized
          priority
        />
      </span>
      <span className="rounded-full bg-[#FEE500] px-2.5 py-1 text-[10px] font-bold leading-none text-[#191600] shadow-sm ring-1 ring-black/5 sm:text-[11px]">
        빠른 상담
      </span>
    </a>
  );
}
