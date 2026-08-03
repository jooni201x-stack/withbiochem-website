import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { siteSeo } from "@/lib/company";

/**
 * /home 은 사용하지 않음.
 * 검색엔진·북마크용 진입 시 홈(/)으로 보내고,
 * canonical 도 홈 표준 URL로 고정합니다.
 */
export const metadata: Metadata = {
  title: {
    absolute: siteSeo.titleDefault,
  },
  description: siteSeo.description,
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${siteSeo.siteUrl}/`,
  },
};

export default function HomeAliasPage() {
  redirect("/");
}
