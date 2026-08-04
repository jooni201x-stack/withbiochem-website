"use client";

import Image from "next/image";
import { siteImages } from "@/lib/images";

const KAKAO_OPEN_CHAT = "https://open.kakao.com/o/sfvTefHi";

/**
 * 카카오톡 빠른 상담 플로팅 버튼
 * - PC/모바일 공통 fixed (오른쪽 하단)
 * - 클릭 시 오픈채팅 새 탭
 */
export default function FloatingContactButton() {
  return (
    <a
      href={KAKAO_OPEN_CHAT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="카카오톡 빠른 상담"
      className="group fixed right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-1 sm:right-6"
    >
      <span className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full bg-[#FEE500] shadow-lg shadow-black/15 ring-1 ring-black/5 transition-transform group-hover:scale-105 group-active:scale-95 sm:h-16 sm:w-16">
        <Image
          src={siteImages.kakaoTalk}
          alt="카카오톡"
          width={40}
          height={40}
          className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          unoptimized
        />
      </span>
      <span className="rounded-full bg-[#FEE500] px-2.5 py-0.5 text-[11px] font-bold leading-tight text-[#191600] shadow-sm ring-1 ring-black/5 sm:text-xs">
        빠른 상담
      </span>
    </a>
  );
}
