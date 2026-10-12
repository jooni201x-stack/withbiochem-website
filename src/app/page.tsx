import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Guarantee from "@/components/Guarantee";
import About from "@/components/About";
import BusinessAreas from "@/components/BusinessAreas";
import Technology from "@/components/Technology";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Strengths from "@/components/Strengths";
import Contact from "@/components/Contact";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";
import { siteSeo } from "@/lib/company";

export const metadata: Metadata = {
  title: {
    absolute: siteSeo.titleDefault,
  },
  description: siteSeo.description,
  openGraph: {
    title: siteSeo.openGraphTitle,
    description: siteSeo.openGraphDescription,
    type: "website",
    locale: siteSeo.locale,
    url: `${siteSeo.siteUrl}/`,
  },
  // 홈 표준 URL — Google 중복(/home 등) 정리용
  alternates: {
    canonical: `${siteSeo.siteUrl}/`,
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <Guarantee />
        <About />
        <BusinessAreas />
        <Technology />
        <Products />
        <Process />
        <Strengths />
        <Contact />
        <Partnership />
      </main>
      <Footer />
    </>
  );
}
