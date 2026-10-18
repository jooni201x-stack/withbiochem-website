import { companyInfo, siteSeo } from "@/lib/company";
import type { ProductDetail } from "@/lib/products";

/** 전역 Organization 구조화 데이터 */
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.nameKo,
    alternateName: companyInfo.nameEn,
    url: siteSeo.siteUrl,
    logo: `${siteSeo.siteUrl}/IMG_JOON/logo/logo_1.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address,
      addressCountry: "KR",
    },
    telephone: companyInfo.phone,
    email: companyInfo.email,
    sameAs: [companyInfo.kakaoOpenChat],
  };
}

/** 전역 WebSite 구조화 데이터 */
export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteSeo.siteName,
    url: siteSeo.siteUrl,
  };
}

/** 제품 상세 페이지 Product 구조화 데이터 — 가격·리뷰·평점은 실제 데이터가 없어 넣지 않음 */
export function productLd(product: ProductDetail) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    image: `${siteSeo.siteUrl}${product.image}`,
    brand: {
      "@type": "Brand",
      name: companyInfo.nameEn,
    },
    sku: product.code,
    additionalProperty: [
      product.cas !== "—" && {
        "@type": "PropertyValue",
        name: "CAS",
        value: product.cas,
      },
      {
        "@type": "PropertyValue",
        name: "INCI",
        value: product.inci,
      },
      {
        "@type": "PropertyValue",
        name: "Purity",
        value: "96%",
      },
      {
        "@type": "PropertyValue",
        name: "MOQ",
        value: "50g",
      },
    ].filter(Boolean),
  };
}

/** 하위 페이지 BreadcrumbList 구조화 데이터 */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteSeo.siteUrl}${item.path}`,
    })),
  };
}

/** FAQPage 구조화 데이터 — 브로셔 내용 기반 Q&A만 사용 */
export function faqLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
