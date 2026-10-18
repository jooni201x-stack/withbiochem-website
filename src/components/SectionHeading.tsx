"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  /** 독립 페이지에서 페이지의 유일한 H1로 쓸 때 "h1" 전달 (기본 h2) */
  as?: "h1" | "h2";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  as: Heading = "h2",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
      className={align === "center" ? "text-center" : ""}
    >
      <p
        className={`text-xs font-semibold tracking-[0.2em] sm:text-[13px] ${
          light ? "text-blue-light/90" : "text-blue"
        }`}
      >
        {eyebrow}
      </p>
      <Heading
        className={`product-name mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-[2.1rem] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl text-sm leading-relaxed sm:text-base ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-slate-300" : "text-slate-500"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-0.5 w-12 rounded-full bg-gradient-to-r from-blue to-blue-light ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
