import type { MetadataRoute } from "next";
import { siteSeo } from "@/lib/company";

/** 검색엔진용 robots.txt — sitemap 위치 안내 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/home"],
    },
    sitemap: `${siteSeo.siteUrl}/sitemap.xml`,
    host: siteSeo.siteUrl,
  };
}
