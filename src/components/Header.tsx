"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { products } from "@/lib/products";

const navItems = [
  { href: "/#about", label: "회사 소개" },
  { href: "/#business", label: "사업 영역" },
  { href: "/#technology", label: "핵심 기술" },
  { href: "/#process", label: "의뢰 절차" },
] as const;

/** 주요 제품 서브메뉴 — 실제 상세 페이지 */
const productLinks = products.map((p) => ({
  href: `/products/${p.slug}`,
  label: p.name,
  code: p.code,
}));

const linkClass =
  "rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-soft hover:text-navy lg:px-4";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) setMobileProductsOpen(false);
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border/80 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
        <a
          href="/"
          className="group flex shrink-0 items-center"
          aria-label="위드바이오캠 홈"
        >
          <BrandLogo size="sm" priority />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex lg:gap-1">
          {/* WHY — 유일한 옐로우 강조 메뉴 */}
          <a
            href="/#why-us"
            className="mr-1 inline-flex items-center rounded-full bg-[#FEE500] px-3.5 py-2 text-[13px] font-bold leading-tight text-[#191600] shadow-sm ring-1 ring-black/5 transition-all hover:scale-[1.02] hover:bg-[#ffe566] hover:shadow-md lg:px-4 lg:text-sm"
          >
            왜 위드바이오캠인가
          </a>

          {navItems.slice(0, 3).map((item) => (
            <a key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}

          {/* 주요 제품 — 드롭다운 힌트 강화 (옐로우 소포인트) */}
          <div className="group relative">
            <a
              href="/#products"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-navy transition-colors hover:bg-[#FEE500]/25 group-hover:bg-[#FEE500]/25 lg:px-4"
              aria-haspopup="menu"
            >
              주요 제품
              <span className="inline-flex items-center justify-center rounded-md bg-[#FEE500] px-1 py-0.5 shadow-sm ring-1 ring-black/5 transition-all group-hover:scale-105 group-hover:shadow-md">
                <ChevronDown
                  size={14}
                  strokeWidth={3}
                  className="text-[#191600] transition-transform duration-200 group-hover:rotate-180"
                  aria-hidden
                />
              </span>
            </a>
            {/* 호버 브릿지 + 패널 */}
            <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div
                className="overflow-hidden rounded-2xl border border-border bg-white py-2 shadow-xl shadow-navy/10 ring-1 ring-black/[0.03]"
                role="menu"
              >
                <a
                  href="/#products"
                  className="block border-b border-border/80 px-4 py-2.5 text-xs font-semibold tracking-wide text-blue hover:bg-blue-soft/50"
                  role="menuitem"
                >
                  전체 제품 보기
                </a>
                {productLinks.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="flex items-start gap-2.5 px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-blue-soft hover:text-navy"
                    role="menuitem"
                  >
                    <span className="mt-0.5 shrink-0 rounded bg-navy/5 px-1.5 py-0.5 text-[10px] font-bold text-navy">
                      {p.code}
                    </span>
                    <span className="product-name font-medium leading-snug">
                      {p.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {navItems.slice(3).map((item) => (
            <a key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}

          <a
            href="/#contact"
            className="ml-1.5 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue hover:shadow-md lg:ml-2 lg:px-5"
          >
            샘플 · 공급 문의
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/80 text-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <nav className="flex max-h-[min(75vh,32rem)] flex-col gap-1 overflow-y-auto px-5 py-4">
              {/* WHY — 모바일 옐로우 강조 */}
              <a
                href="/#why-us"
                onClick={() => setOpen(false)}
                className="mb-1 rounded-xl bg-[#FEE500] px-4 py-3.5 text-center text-base font-bold text-[#191600] shadow-sm ring-1 ring-black/5"
              >
                왜 위드바이오캠인가
              </a>

              {navItems.slice(0, 3).map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className="rounded-xl px-4 py-3 text-base font-medium text-navy hover:bg-blue-soft"
                >
                  {item.label}
                </motion.a>
              ))}

              {/* 모바일: 탭으로 서브메뉴 토글 */}
              <div className="rounded-xl">
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen((v) => !v)}
                  aria-expanded={mobileProductsOpen}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold text-navy hover:bg-[#FEE500]/20"
                >
                  <span className="inline-flex items-center gap-2">
                    주요 제품
                    <span className="rounded-md bg-[#FEE500] px-1.5 py-0.5 text-[10px] font-bold text-[#191600] shadow-sm">
                      {mobileProductsOpen ? "접기" : "펼침"}
                    </span>
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#FEE500] shadow-sm ring-1 ring-black/5">
                    <ChevronDown
                      size={18}
                      strokeWidth={2.75}
                      className={`text-[#191600] transition-transform duration-200 ${
                        mobileProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <div className="mb-1 ml-2 space-y-0.5 border-l-2 border-blue/20 py-1 pl-3">
                        <a
                          href="/#products"
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm font-semibold text-blue hover:bg-blue-soft"
                        >
                          전체 제품 보기
                        </a>
                        {productLinks.map((p) => (
                          <a
                            key={p.href}
                            href={p.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-blue-soft hover:text-navy"
                          >
                            <span className="mr-1.5 text-[10px] font-bold text-navy/50">
                              {p.code}
                            </span>
                            <span className="product-name font-medium">
                              {p.label}
                            </span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItems.slice(3).map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * (i + 4) }}
                  className="rounded-xl px-4 py-3 text-base font-medium text-navy hover:bg-blue-soft"
                >
                  {item.label}
                </motion.a>
              ))}

              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-navy px-4 py-3 text-center text-base font-semibold text-white"
              >
                샘플 · 공급 문의
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
