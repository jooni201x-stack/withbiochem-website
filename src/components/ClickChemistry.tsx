"use client";

import { motion } from "framer-motion";
import { Atom, Beaker, CheckCircle2, Link2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const azides = [
  "Azidoalanine (Ala(N₃))",
  "Azidohomoalanine (Aha)",
  "p-Azido-L-phenylalanine (pAzF)",
  "NH₂-Lys(N₃)-OH",
  "Peptide conjugation linker (N₃)",
];

const orgSkills = [
  "복잡한 구조의 합성 가능",
  "다양한 반응 수행 및 선택적 반응 제어",
  "신규 반응 개발 · 최적 조건 확립",
  "Scale-up 합성 및 공정 개발",
  "고순도 제품 합성 및 정제",
];

const faqs = [
  {
    q: "5-mer 이상 펩타이드도 합성 가능한가요?",
    a: "긴 펩타이드는 구조 검토 후 합성을 지원합니다. 5-mer 이하 짧은 펩타이드는 대량 합성이 가능하며, 긴 서열은 핵심 서열(core peptide) 부분 제공으로 대응하는 경우가 있습니다.",
  },
  {
    q: "아지도 빌딩 블록은 어떤 용도로 쓰이나요?",
    a: "클릭 화학(click chemistry) 기반 펩타이드 컨주게이션, 바이오컨주게이션 연구용 빌딩 블록으로 주로 쓰이며, Diazo-transfer 시약 개발 및 다양한 아지도 화합물 합성을 지원합니다.",
  },
];

export default function ClickChemistry() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          as="h1"
          eyebrow="AZIDE & CLICK CHEMISTRY"
          title="아지도 아미노산 · 클릭 화학 빌딩블록"
          subtitle="Diazo-transfer 시약 개발 및 다양한 아지도 화합물 합성. 펩타이드 컨주게이션 링커부터 클릭 화학 빌딩 블록까지 맞춤 합성으로 공급합니다."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-7"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
              <Atom size={20} />
            </div>
            <h3 className="text-lg font-bold text-navy">
              아지도 화합물 · 빌딩 블록
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Diazo-transfer Reagents 개발 및 다양한 아지도 화합물 합성
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {azides.map((a) => (
                <li
                  key={a}
                  className="rounded-lg border border-border bg-slate-50 px-2.5 py-1.5 font-mono text-xs font-medium text-navy"
                >
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="rounded-2xl border border-border bg-navy p-6 text-white sm:p-7"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-light">
              <Beaker size={20} />
            </div>
            <h3 className="text-lg font-bold">유기합성 핵심 역량</h3>
            <p className="mt-1 text-sm text-slate-300">
              다양한 구조의 합성 계획부터 정제 전략까지
            </p>
            <ul className="mt-4 space-y-2">
              {orgSkills.map((s) => (
                <li key={s} className="flex gap-2 text-sm text-slate-200">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-light" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 rounded-2xl border border-blue/15 bg-blue-soft/40 p-6 sm:p-8"
        >
          <p className="flex items-center gap-2 text-sm font-bold text-navy">
            <Link2 size={16} className="text-blue" />
            클릭 화학 · 펩타이드 컨주게이션 적용
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            아지도(azide) 빌딩 블록은 클릭 화학(Cu-catalyzed 또는
            strain-promoted azide-alkyne cycloaddition) 기반 펩타이드
            컨주게이션, 바이오컨주게이션 연구에 쓰입니다. 맞춤 합성으로
            구조·순도·수량을 협의해 공급합니다.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <h3 className="text-lg font-bold text-navy">자주 묻는 질문</h3>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-xl border border-border bg-slate-50/80 p-5"
              >
                <p className="flex items-start gap-2 text-sm font-bold text-navy">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-blue"
                  />
                  {f.q}
                </p>
                <p className="mt-2 pl-6 text-sm leading-relaxed text-slate-600">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-blue hover:shadow-xl"
          >
            맞춤 합성 문의
          </a>
        </div>
      </div>
    </section>
  );
}
