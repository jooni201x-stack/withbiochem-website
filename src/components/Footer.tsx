"use client";

import { motion } from "framer-motion";
import { CONTACT_EMAIL, MAILTO_INQUIRY } from "@/lib/mailto";
import { companyInfo } from "@/lib/company";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between"
        >
          <div>
            <a href="/" className="inline-flex" aria-label="위드바이오캠 홈">
              <BrandLogo size="md" />
            </a>
            <p className="mt-2 text-sm font-semibold text-navy/80">
              {companyInfo.displayName}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
              {companyInfo.tagline}
              <br />
              국내 합성 프리미엄 화장품 펩타이드 원료
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div>
              <p className="font-semibold text-navy">Navigate</p>
              <ul className="mt-2 space-y-1.5 text-slate-500">
                <li>
                  <a href="/#about" className="hover:text-blue">
                    회사 소개
                  </a>
                </li>
                <li>
                  <a href="/#business" className="hover:text-blue">
                    사업 영역
                  </a>
                </li>
                <li>
                  <a href="/#technology" className="hover:text-blue">
                    핵심 기술
                  </a>
                </li>
                <li>
                  <a href="/#products" className="hover:text-blue">
                    주요 제품
                  </a>
                </li>
                <li>
                  <a href="/#process" className="hover:text-blue">
                    의뢰 절차
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="hover:text-blue">
                    문의
                  </a>
                </li>
                <li>
                  <a href="/#partnership" className="hover:text-blue">
                    파트너십
                  </a>
                </li>
              </ul>
            </div>
            <div className="max-w-xs">
              <p className="font-semibold text-navy">Contact</p>
              <ul className="mt-2 space-y-1.5 text-slate-500">
                <li className="font-medium text-navy/70">
                  {companyInfo.displayName}
                </li>
                <li className="leading-relaxed">{companyInfo.address}</li>
                <li>
                  <a
                    href={companyInfo.phoneHref}
                    className="hover:text-blue"
                  >
                    {companyInfo.phone}
                  </a>
                </li>
                <li>
                  <a href={MAILTO_INQUIRY} className="hover:text-blue">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="text-slate-400">B2B / ODM Supply</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-[11px] leading-relaxed text-slate-400 sm:text-xs">
            면책: 본 사이트의 임상·효능 수치는 제조사 기술자료 및 공개 문헌에서
            B2B 참고용으로 정리한 것이며, 자사가 직접 수행한 시험 데이터가
            아닙니다. 제형 확정 전 독립 검증(COA, 자체 자극·안정성 시험)을
            권장합니다. 표기 상품명(SYN-COLL, Matrixyl 등)은 동등 성분 안내
            목적의 예시이며 해당 브랜드 제품이 아닙니다.
          </p>
          <p className="mt-4 text-xs text-slate-400">
            © {new Date().getFullYear()} {companyInfo.displayName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
