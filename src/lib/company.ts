/** 회사·연락처 공통 정보 (푸터 / 문의 / SEO) */
export const companyInfo = {
  nameKo: "위드바이오캠",
  nameEn: "WithBioChem",
  displayName: "위드바이오캠 (WithBioChem)",
  brand: "WITHBIOCHEM",
  tagline: "Your Partner in Peptide Innovation",
  address: "경기도 성남시 중원구 둔천대로 388번길 24 우림라이온스벨리 3차 511호",
  phone: "010-8793-9997",
  phoneHref: "tel:01087939997",
  email: "ace@withbiochem.com",
  /** 카카오톡 오픈채팅 — 빠른 상담 */
  kakaoOpenChat: "https://open.kakao.com/o/sfvTefHi",
  /** 브로셔 PDF — 버전 쿼리로 캐시 무효화 (교체 시 날짜만 갱신) */
  brochureUrl: "/brochure.pdf?v=20261016",
} as const;

export const siteSeo = {
  /** 사이트 표준 호스트 (canonical / Open Graph 기준) */
  siteUrl: "https://www.withbiochem.com",
  siteName: "위드바이오캠 | WithBioChem",
  titleDefault:
    "위드바이오캠 | 화장품 펩타이드 원료 · 펩타이드 제조 · 맞춤 합성",
  description:
    "위드바이오캠 | 국내 펩타이드 제조·화장품 원료 공급. LPPS 고순도 합성, 맞춤 합성, B2B 안정 공급",
  keywords: [
    "위드바이오캠",
    "WithBioChem",
    "WITHBIOCHEM",
    "펩타이드 제조",
    "화장품 펩타이드 원료",
    "맞춤 합성",
    "Custom Synthesis",
    "LPPS",
    "용액상 펩타이드 합성",
    "기능성 화장품 원료",
    "Palmitoyl Tripeptide-5",
    "GHK-Cu",
    "B2B",
    "ODM",
    "국내 합성",
  ],
  openGraphTitle:
    "위드바이오캠 | 펩타이드 제조 · 화장품 펩타이드 원료 · 맞춤 합성",
  openGraphDescription:
    "위드바이오캠 — 화장품 펩타이드 원료 · 펩타이드 제조 · 맞춤 합성. 고순도 LPPS, COA 제공, B2B 안정 공급.",
  locale: "ko_KR",
  /** 공유 미리보기 이미지 (1200x630) — og:image / twitter:image 공통 */
  ogImage: "/og/og-ko.png",
} as const;

/** openGraph.images / twitter.images에 그대로 넣는 공유 이미지 헬퍼 */
export function ogImages(alt: string) {
  return [
    {
      url: siteSeo.ogImage,
      width: 1200,
      height: 630,
      alt,
    },
  ];
}
