/**
 * 사이트 이미지 경로 — public/IMG_JOON
 *
 * 파일을 같은 이름으로 교체하면 새로고침 후 바로 반영됩니다.
 * 폴더 구조·파일명은 public/IMG_JOON/README.md 참고.
 *
 * 경로 규칙:
 *   /IMG_JOON/{섹션}/{파일명}
 * 예) Contact 첫 이미지 → public/IMG_JOON/contact/image-1.jpg
 */
const IMG = "/IMG_JOON";

export const siteImages = {
  /** 사이트 로고 — logo/logo_1.png */
  logo: `${IMG}/logo/logo_1.png`,

  /** 카카오톡 상담 아이콘 — logo/kakao-talk.png */
  kakaoTalk: `${IMG}/logo/kakao-talk.png`,

  /** 메인 히어로 영상 — home/hero.mp4 */
  heroVideo: `${IMG}/home/hero.mp4`,

  /** 회사 소개 갤러리 — about/gallery-1~4.jpg */
  aboutGallery1: `${IMG}/about/gallery-1.jpg`,
  aboutGallery2: `${IMG}/about/gallery-2.jpg`,
  aboutGallery3: `${IMG}/about/gallery-3.jpg`,
  aboutGallery4: `${IMG}/about/gallery-4.jpg`,

  /** 연구소 와이드 (브로셔 1016판 p03 추출, 저해상도) — about/lab-wide-extracted.webp */
  aboutLabWide: `${IMG}/about/lab-wide-extracted.webp`,
  /** 고려대 가운 연구진 2인 (브로셔 1016판 p03 추출, 저해상도 · AI 생성 이미지) — about/ku-researchers-extracted.webp */
  aboutKuResearchers: `${IMG}/about/ku-researchers-extracted.webp`,

  /** 연구 시설 · 인프라 (브로셔 1016판 p04 추출, 저해상도) — facility/*-extracted.webp */
  facilitySynthesisLab: `${IMG}/facility/synthesis-lab-extracted.webp`,
  facilityReactionLab: `${IMG}/facility/reaction-lab-extracted.webp`,
  facilityHeadquarters: `${IMG}/facility/headquarters-extracted.webp`,
  facilityWaste: `${IMG}/facility/waste-extracted.webp`,

  /** 제품 / 서비스 — service/product-1~5.jpg */
  product01: `${IMG}/service/product-1.jpg`,
  product02: `${IMG}/service/product-2.jpg`,
  product03: `${IMG}/service/product-3.jpg`,
  product04: `${IMG}/service/product-4.jpg`,
  product05: `${IMG}/service/product-5.jpg`,

  /** 공급 강점 배너 — strengths/banner.jpg */
  strengthsBanner: `${IMG}/strengths/banner.jpg`,

  /** 문의 섹션 — contact/image-1.jpg, image-2.jpg */
  contact1: `${IMG}/contact/image-1.jpg`,
  contact2: `${IMG}/contact/image-2.jpg`,

  /** 핵심 기술 LPPS 비교 — LPPS/LPPS.jpg */
  lppsComparison: `${IMG}/LPPS/LPPS.jpg`,
} as const;

/**
 * 파트너 로고 — public/IMG_JOON/partner/
 * 브로셔(1016판) p17 파트너십 순서 기준. 파일 교체 시 file명만 맞추면 됩니다.
 */
export const partnerLogos = [
  { id: "vaxcell", name: "VAXCELL", file: "bigsell.png" },
  { id: "daelim", name: "대림대학교 (Daelim University)", file: "daelim univ.png" },
  {
    id: "ku-chemistry",
    name: "고려대학교 이과대학 화학과 (Korea University, Dept. of Chemistry)",
    file: "korea-chem.png",
  },
  {
    id: "ku-rbf",
    name: "고려대학교 산학협력단 (Korea University Research and Business Foundation)",
    file: "korea_B.png",
  },
  {
    id: "ku-anam",
    name: "고려대학교 안암병원 (Korea University Anam Hospital)",
    file: "KOREA_medi.png",
  },
  { id: "coson", name: "COSON", file: "oncos.png" },
  { id: "oncocross", name: "ONCOCROSS", file: "onco_png.jpg" },
  { id: "un2-beauty", name: "UN2 BEAUTY", file: "un2.png" },
] as const;

/** 파트너 로고 URL (공백 등 파일명 안전 인코딩) */
export function partnerLogoSrc(file: string): string {
  return `${IMG}/partner/${encodeURIComponent(file)}`;
}
