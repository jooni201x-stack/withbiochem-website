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

  /** 메인 히어로 영상 — home/hero.mp4 */
  heroVideo: `${IMG}/home/hero.mp4`,

  /** 회사 소개 갤러리 — about/gallery-1~4.jpg */
  aboutGallery1: `${IMG}/about/gallery-1.jpg`,
  aboutGallery2: `${IMG}/about/gallery-2.jpg`,
  aboutGallery3: `${IMG}/about/gallery-3.jpg`,
  aboutGallery4: `${IMG}/about/gallery-4.jpg`,

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
} as const;

/**
 * 파트너 로고 — public/IMG_JOON/partner/
 * 파일 교체·추가 시 아래 목록과 파일명을 맞추면 됩니다.
 */
export const partnerLogos = [
  { id: "bigsell", name: "Bigsell", file: "bigsell.png" },
  { id: "daelim", name: "Daelim University", file: "daelim univ.png" },
  { id: "korea-chem", name: "Korea Chem", file: "korea-chem.png" },
  { id: "korea-b", name: "Korea B", file: "korea_B.png" },
  { id: "korea-medi", name: "Korea Medi", file: "KOREA_medi.png" },
  { id: "oncos", name: "Oncos", file: "oncos.png" },
  { id: "onco", name: "Onco", file: "onco_png.jpg" },
  { id: "un2", name: "UN2", file: "un2.png" },
] as const;

/** 파트너 로고 URL (공백 등 파일명 안전 인코딩) */
export function partnerLogoSrc(file: string): string {
  return `${IMG}/partner/${encodeURIComponent(file)}`;
}
