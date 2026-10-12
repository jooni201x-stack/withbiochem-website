import { companyInfo } from "@/lib/company";

/** 문의 이메일 */
export const CONTACT_EMAIL = companyInfo.email;

const DEFAULT_SUBJECT = "[위드바이오캠] 제품/샘플 문의";

const DEFAULT_BODY = `안녕하세요, 위드바이오캠에 문의드립니다.

■ 회사명:
■ 담당자:
■ 연락처:
■ 관심 제품 / 샘플:
■ 문의 내용:


감사합니다.`;

/**
 * 기본 메일 앱에서 문의 메일 작성 창을 여는 mailto URL
 * (제목·본문 프리필 — PC/모바일 모두 동일)
 */
export function buildMailtoHref(options?: {
  subject?: string;
  body?: string;
}): string {
  const subject = encodeURIComponent(options?.subject ?? DEFAULT_SUBJECT);
  const body = encodeURIComponent(options?.body ?? DEFAULT_BODY);
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

/** 사이트 공통 문의 mailto (제목·본문 포함) */
export const MAILTO_INQUIRY = buildMailtoHref();
