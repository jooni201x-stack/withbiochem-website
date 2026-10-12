import type { MetadataRoute } from "next";
import { siteSeo } from "@/lib/company";
import { getAllProductSlugs } from "@/lib/products";

const BASE = siteSeo.siteUrl; // https://www.withbiochem.com

/** 홈 페이지 내 주요 섹션 (단일 페이지 앵커) */
const homeSections = [
  { path: "/#about", priority: 0.8 },
  { path: "/#business", priority: 0.7 },
  { path: "/#technology", priority: 0.8 },
  { path: "/#products", priority: 0.9 },
  { path: "/#process", priority: 0.7 },
  { path: "/#strengths", priority: 0.7 },
  { path: "/#contact", priority: 0.8 },
  { path: "/#partnership", priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const sections: MetadataRoute.Sitemap = homeSections.map((s) => ({
    url: `${BASE}${s.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: s.priority,
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

  return [...home, ...sections, ...productPages];
}
