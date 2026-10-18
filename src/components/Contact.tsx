"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Building2,
  Send,
  CheckCircle2,
  Clock,
  Package,
  FileCheck2,
  Download,
  MapPin,
  Phone,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { siteImages } from "@/lib/images";
import { CONTACT_EMAIL, MAILTO_INQUIRY, buildMailtoHref } from "@/lib/mailto";
import { companyInfo } from "@/lib/company";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    window.location.href = buildMailtoHref({
      subject: `[위드바이오캠] 제품/샘플 문의 — ${company || name || "B2B"}`,
      body: `안녕하세요, 위드바이오캠에 문의드립니다.

■ 성함: ${name}
■ 회사: ${company}
■ 회신 이메일: ${email}
■ 관심 제품 / 샘플:
■ 문의 내용:
${message}

감사합니다.`,
    });
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-32 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="CONTACT"
          title="샘플 · 공급 문의"
          subtitle="샘플, 단가, 납기, 맞춤 합성 — B2B 공급 상담을 남겨 주세요."
        />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 rounded-2xl border border-[#FEE500]/60 bg-[#FEE500] px-4 py-3.5 shadow-sm ring-1 ring-black/5 sm:px-5 sm:py-4"
        >
          <p className="text-sm font-bold text-[#191600] sm:text-[15px]">
            견적 비교 환영
          </p>
          <p className="mt-1 text-xs leading-relaxed text-[#191600]/80 sm:text-sm">
            동일 규격 기준 더 낮은 정식 견적이 있으면 말씀해 주세요. 순도 96%
            보장 · 최저가 납품 보장제를 운영합니다.{" "}
            <a
              href="#guarantee"
              className="font-bold underline underline-offset-2 hover:opacity-80"
            >
              보장제 자세히 보기
            </a>
          </p>
        </motion.div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-5">
          {/* Left column — scrolls normally */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-5 lg:col-span-2"
          >
            <div className="relative h-48 overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 sm:h-56">
              <Image
                src={siteImages.contact1}
                alt="연구소 상담 · 기술 협력"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                B2B Technical Support
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-slate-50/80 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                <Building2 size={20} />
              </div>
              <p className="mt-4 text-xs font-semibold tracking-widest text-blue">
                COMPANY
              </p>
              <h3 className="mt-1 text-lg font-bold text-navy">
                {companyInfo.displayName}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Cosmetic Peptide Raw Materials
                <br />
                B2B / ODM Supply
              </p>
              <div className="mt-4 space-y-3 border-t border-border pt-4">
                <div className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-blue"
                  />
                  <span>{companyInfo.address}</span>
                </div>
                <a
                  href={companyInfo.phoneHref}
                  className="flex items-center gap-2.5 text-sm font-semibold text-navy transition-colors hover:text-blue"
                >
                  <Phone size={16} className="shrink-0 text-blue" />
                  {companyInfo.phone}
                </a>
                <a
                  href={MAILTO_INQUIRY}
                  className="flex items-center gap-2.5 text-sm font-semibold text-navy transition-colors hover:text-blue"
                >
                  <Mail size={16} className="shrink-0 text-blue" />
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <a
              href={MAILTO_INQUIRY}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-white p-6 transition-all hover:border-blue/30 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest text-blue">
                  EMAIL
                </p>
                <p className="mt-1 text-base font-semibold text-navy">
                  {CONTACT_EMAIL}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  견적 · 샘플 · 기술 문의
                </p>
              </div>
            </a>

            <div className="space-y-3 rounded-2xl border border-border bg-white p-5">
              {[
                {
                  icon: Package,
                  title: "샘플 협의",
                  desc: "신규 거래처 샘플 제공 협의 가능",
                },
                {
                  icon: Clock,
                  title: "빠른 회신",
                  desc: "국내 합성 기반 신속한 커뮤니케이션",
                },
                {
                  icon: FileCheck2,
                  title: "COA 동봉",
                  desc: "제품별 분석성적서 기본 제공",
                },
              ].map((row) => (
                <div key={row.title} className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-soft text-blue">
                    <row.icon size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{row.title}</p>
                    <p className="text-xs text-slate-500">{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={companyInfo.brochureUrl}
              download="WITHBIOCHEM_브로셔.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-blue/20 bg-blue-soft/60 px-5 py-4 text-sm font-semibold text-navy transition-all hover:bg-blue hover:text-white"
            >
              <Download size={18} />
              브로셔 PDF 다운로드
            </a>

            <div className="rounded-2xl border border-blue/15 bg-gradient-to-br from-blue-soft to-white p-6">
              <p className="text-sm font-semibold text-navy">
                Your Partner in Peptide Innovation
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                고순도 · 국내 합성 · COA 제공. 안정적인 공급망으로 함께
                성장합니다. 50g 소량부터 kg 단위 양산까지 유연하게 대응합니다.
              </p>
            </div>

            <div className="relative h-40 overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5">
              <Image
                src={siteImages.contact2}
                alt="펩타이드 합성 실험"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <p className="absolute bottom-3 left-4 text-xs font-semibold text-white">
                Domestic Peptide Synthesis
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="rounded-2xl border border-border bg-white p-6 shadow-lg shadow-navy/5 ring-1 ring-black/[0.03] sm:p-8"
            >
              <div className="mb-5 border-b border-border pb-4">
                <p className="text-xs font-semibold tracking-widest text-blue">
                  INQUIRY FORM
                </p>
                <h3 className="mt-1 text-lg font-bold text-navy">
                  샘플 · 공급 상담
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-slate-600">
                    성함
                  </span>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="홍길동"
                    className="w-full rounded-xl border border-border bg-slate-50/50 px-4 py-3 text-sm text-navy outline-none transition focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue/15"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-slate-600">
                    회사명
                  </span>
                  <input
                    name="company"
                    type="text"
                    placeholder="회사 / 기관명"
                    className="w-full rounded-xl border border-border bg-slate-50/50 px-4 py-3 text-sm text-navy outline-none transition focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue/15"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="mb-1.5 block text-xs font-semibold text-slate-600">
                  이메일
                </span>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-border bg-slate-50/50 px-4 py-3 text-sm text-navy outline-none transition focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue/15"
                />
              </label>

              <label className="mt-4 block">
                <span className="mb-1.5 block text-xs font-semibold text-slate-600">
                  문의 내용
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="관심 제품, 수량, 샘플 요청 등을 자유롭게 적어 주세요."
                  className="w-full resize-y rounded-xl border border-border bg-slate-50/50 px-4 py-3 text-sm text-navy outline-none transition focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue/15"
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-navy/15 transition-all hover:bg-blue hover:shadow-xl"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 size={16} />
                      메일 앱 열기
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      문의 보내기
                    </>
                  )}
                </button>
                <p className="text-xs text-slate-400">
                  제출 시 기본 메일 앱이 열립니다 · {CONTACT_EMAIL}
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
