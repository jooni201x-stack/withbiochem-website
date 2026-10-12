import Image from "next/image";
import { siteImages } from "@/lib/images";
import { companyInfo } from "@/lib/company";

type Props = {
  /** 헤더: sm, 푸터: md 등 */
  size?: "sm" | "md";
  className?: string;
  priority?: boolean;
};

const sizeClass = {
  sm: "h-8 w-auto max-w-[9.5rem] sm:h-9 sm:max-w-[11rem]",
  md: "h-9 w-auto max-w-[11rem] sm:h-10 sm:max-w-[12.5rem]",
} as const;

/**
 * 사이트 브랜드 로고 (public/IMG_JOON/logo/logo_1.png)
 * 파일 교체 시 같은 이름으로 덮어쓰면 반영됩니다.
 */
export default function BrandLogo({
  size = "sm",
  className = "",
  priority = false,
}: Props) {
  return (
    <Image
      src={siteImages.logo}
      alt={companyInfo.displayName}
      width={1060}
      height={148}
      priority={priority}
      className={`${sizeClass[size]} object-contain object-left ${className}`}
    />
  );
}
