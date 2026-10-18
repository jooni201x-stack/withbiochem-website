import type { MetadataRoute } from "next";
import { siteSeo } from "@/lib/company";
import { getAllProductSlugs } from "@/lib/products";

const BASE = siteSeo.siteUrl; // https://www.withbiochem.com

/**
 * 실제 페이지만 등록합니다. #fragment 앵커는 구글이 별도 페이지로
 * 보지 않으므로 sitemap에 넣지 않습니다 (SEO 가이드 참고).
 */
const staticPages = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/technology", priority: 0.8, changeFrequency: "monthly" as const },
  {
    path: "/click-chemistry",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  { path: "/products", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/guarantee", priority: 0.8, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const productPages: MetadataRoute.Sitemap = getAllProductSlugs().map(
    (slug) => ({
      url: `${BASE}/products/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      // 맞춤 합성·주요 원료는 상대적으로 높게
      priority: slug === "custom-synthesis" ? 0.9 : 0.85,
    })
  );

  return [...pages, ...productPages];
}
