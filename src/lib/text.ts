/**
 * 화면 표시용 줄바꿈 보정
 * - 일반 하이픈(-) → non-breaking hyphen (U+2011): Tripeptide-1, GHK-Cu 등이 중간에서 끊기지 않음
 * - " (" → non-breaking space + "(" : 약어 괄호가 단독으로 다음 줄에 가지 않도록
 */
export function softBreakName(text: string): string {
  return text
    .replace(/-/g, "\u2011")
    .replace(/ \(/g, "\u00A0(");
}
