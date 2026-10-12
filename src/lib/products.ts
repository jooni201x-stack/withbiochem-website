import { siteImages } from "@/lib/images";

export type ProductDetail = {
  slug: string;
  code: string;
  name: string;
  brand: string;
  inci: string;
  cas: string;
  tag: string;
  channel: string;
  summary: string;
  highlights: string[];
  use: string;
  image: string;
  accent: string;
  iconBg: string;
  /** 제품 소개 */
  introduction: string;
  /** 작용 기전 */
  mechanism: string[];
  /** 임상 · 근거 데이터 */
  clinical: { text: string; source?: string }[];
  /** 시장 포지셔닝 */
  positioning: { channel: string; keywords: string }[];
  /** 컨셉 USP */
  usp: string[];
  /** 배합 가이드 */
  formulation: string;
  /** 주의 · 면책 */
  disclaimer?: string;
};

export const products: ProductDetail[] = [
  {
    slug: "palmitoyl-tripeptide-5",
    code: "01",
    name: "Palmitoyl Tripeptide-5",
    brand: "Pal-KVK구성",
    inci: "Palmitoyl Tripeptide-5",
    cas: "623172-56-5",
    tag: "콜라겐 부스팅 / 주름·탄력",
    channel: "안티에이징 스킨케어",
    summary:
      "피부가 스스로 콜라겐을 더 만들도록 “신호”를 보내는 콜라겐 부스팅 펩타이드. TGF-β 경로를 활성화하고 MMP-1·MMP-3를 억제합니다.",
    highlights: [
      "TGF-β 콜라겐 시그널",
      "주름·모공 동시 소구",
      "GHK-Cu 병용 프리미엄 라인",
    ],
    use: "최종 제형 1~30 ppm (통상 10 ppm) · 프리믹스 1~5%",
    image: siteImages.product01,
    accent: "from-sky-500/10 to-blue-600/5",
    iconBg: "bg-sky-50 text-sky-600",
    introduction:
      "피부가 스스로 콜라겐을 더 만들도록 “신호”를 보내는 콜라겐 부스팅 펩타이드입니다. INCI: Palmitoyl Tripeptide-5, CAS 623172-56-5, 상품명 Pal-KVK구성. 프리미엄 안티에이징 스킨케어의 메인 활성으로 포지셔닝됩니다.",
    mechanism: [
      "피부 속 콜라겐 합성을 켜는 스위치 역할을 하는 단백질(TSP-1)의 일부 구조를 모방한 펩타이드입니다.",
      "TGF-β 성장인자 신호를 활성화해 진피 섬유아세포가 제1형 콜라겐을 더 만들도록 유도합니다.",
      "콜라겐 분해효소(MMP-1·MMP-3)를 억제하여 콜라겐 분해를 줄이는 데 기여합니다.",
    ],
    clinical: [
      {
        text: "제조사 인체적용시험 (45명, 1일 2회, 84일): 농도에 따라 주름 약 7% 감소 ~ 약 12% 감소",
        source:
          "Pentapharm/DSM 제조사 in-vivo 시험 (INCIDecoder)",
      },
      {
        text: "별도 임상 (33명 여성, 4주): 77%가 탄력·단단함 개선 인지, 60%가 모공 크기 감소 인지",
        source: "ChemicalBook / INCIDecoder 정리",
      },
      {
        text: "60명 12주 시험: 2.5% 제형에서 주름 깊이 15~30% 감소 (3D 표면 이미징)",
        source: "Relatable Science 정리",
      },
      {
        text: "콜라겐 유도 효율: 팔미토일 펜타펩타이드 대비 약 60% 우수",
        source: "제조사 비교 데이터 (Schneider AL, 2010; CorePeptides 정리)",
      },
    ],
    positioning: [
      {
        channel: "프리미엄 스킨케어",
        keywords:
          "콜라겐 부스터, 펩타이드 안티에이징, 탄력·리프팅, 주름 개선 기능성",
      },
      {
        channel: "더마 / 코스메슈티컬",
        keywords:
          "TGF-β 콜라겐 시그널, MMP 억제 안티에이징, 클리니컬 펩타이드",
      },
      {
        channel: "대리점 / 유통",
        keywords:
          "Matrixyl·SYN-COLL 동등 국내 원료, 수입 대체 콜라겐 펩타이드",
      },
    ],
    usp: [
      "“콜라겐 케어 / 탄력 집중” 안티에이징 세럼·크림의 메인 활성",
      "모공·주름 동시 소구 제품",
      "표정주름 타깃 제품에서 Argireline 계열과 병용 — 구조 주름 + 표정 주름 동시 공략",
      "GHK-Cu와 병용한 프리미엄 콜라겐 라인",
    ],
    formulation:
      "활성 기준 최종 제형 내 1~30 ppm(통상 10 ppm). 상용 프리믹스(활성 2.5%) 기준 제형에 1~5% 투입. 눈에 띄는 주름 개선을 보인 제품은 통상 1~2.5% 농도 사용. 수상에 40℃ 이하, 마지막 단계 투입. 수용성. 냉공정 가능.",
    disclaimer:
      "임상 수치는 대부분 제조사 인체적용시험·공개 문헌 기반이며, 자사 직접 수행 데이터가 아닙니다. 2.5% 초과 영역은 공개 안전성 데이터가 없습니다. 표기 상품명(SYN-COLL, Matrixyl 등)은 동등 성분 안내 목적의 예시입니다.",
  },
  {
    slug: "ghk-cu",
    code: "02",
    name: "Copper Tripeptide-1 (GHK-Cu)",
    brand: "GHK-Cu",
    inci: "Copper Tripeptide-1",
    cas: "89030-95-5",
    tag: "재생·회복 / 두피·모발",
    channel: "더마 · 헤어 · 시술후 케어",
    summary:
      "상처 치유에서 출발한 재생·회복 신호 펩타이드. 피부 재생과 두피·모발 양쪽에 쓰이는 멀티 활성 원료입니다.",
    highlights: [
      "리커버리 · 시술 후 진정",
      "두피·헤어 덴시티 케어",
      "레티놀 대안 안티에이징",
    ],
    use: "통상 0.01~0.1% · 시작 권장 0.05~0.1% · pH 5~7",
    image: siteImages.product02,
    accent: "from-cyan-500/10 to-teal-600/5",
    iconBg: "bg-cyan-50 text-cyan-700",
    introduction:
      "상처 치유에서 출발한 재생·회복 신호 펩타이드입니다. INCI: Copper Tripeptide-1, CAS 89030-95-5, 청색 분말. 피부 재생과 두피·모발 양쪽에 쓰이는 멀티 활성으로, 더마·시술후케어·헤어케어 채널에 적합합니다.",
    mechanism: [
      "인체 혈장에 자연 존재하는 구리 결합 펩타이드로, 나이가 들수록 체내 농도가 감소합니다(20대 고농도 → 60대 약 80ng/mL 수준으로 감소).",
      "콜라겐 생성을 자극하며, 12주 국소 도포 시 콜라겐 개선 응답률이 비타민C·레티노산 대비 유리한 비교 데이터가 보고되어 있습니다.",
      "in vitro 상처 모델에서 콜라겐 합성 자극이 비콜라겐 단백질의 약 2배, 제1형·제3형 콜라겐 mRNA 증가가 보고됩니다.",
    ],
    clinical: [
      {
        text: "12주 국소 도포 비교: 콜라겐 개선 응답 GHK-Cu 70% vs 비타민 C 50% vs 레티노산 40%",
        source:
          "Abdulghani et al., 1999 (Pickart & Margolina, Int J Mol Sci 2018;19(7):1987)",
      },
      {
        text: "in vitro 상처 모델: 콜라겐 합성 자극이 비콜라겐 단백질의 2배, 제1형·제3형 콜라겐 mRNA 증가",
        source: "Maquart FX et al., FEBS Lett 1988;238(2):343",
      },
      {
        text: "0.05% 세럼 split-face 12주 (60명, 40~65세): 탄력 +22%, 잔주름 개선 보고",
        source: "Grand Ingredients 정리 (2023 double-blind study)",
      },
    ],
    positioning: [
      {
        channel: "탈모 / 두피 케어",
        keywords:
          "두피 강화 스칼프 세럼, 헤어 덴시티/볼륨, 비호르몬 두피 솔루션, 두피·모발 케어 지원",
      },
      {
        channel: "더마 / 시술후케어",
        keywords: "리커버리·재생, 시술 후 진정, 상처 장벽 회복, 코퍼펩타이드",
      },
      {
        channel: "프리미엄 스킨케어",
        keywords: "블루 코퍼펩타이드, 콜라겐·탄력 재생, 레티놀 대안 안티에이징",
      },
      {
        channel: "대리점 / 유통",
        keywords: "수입 대체 GHK-Cu, 듀얼 펩타이드(스킨/스칼프)",
      },
    ],
    usp: [
      "“리커버리 / 재생” 더마 코스메틱 — 시술 후 진정·회복 라인",
      "두피·헤어케어 — GHK-Cu + Acetyl Tetrapeptide-3 조합",
      "안티에이징 스킨케어 — GHK-Cu + Palmitoyl Tripeptide-1 & Palmitoyl Tetrapeptide-7 조합",
      "마이크로니들링 연계 제품 — 침투 시너지",
    ],
    formulation:
      "통상 0.01~0.1%(w/w), 시작 권장 0.05~0.1%. 타깃 트리트먼트 0.2~2%. pH 5~7 수계 최적. AHA·강산 병용 금지, EDTA 고농도 회피. 산화 민감 → 항산화 + 차광 포장. 권장 안전 한도 0.05~1%.",
    disclaimer:
      "「탈모 치료/발모」 등은 의약품·기능성 표현으로, 일반 화장품은 「두피·모발 케어 지원」 수준으로 포지셔닝하는 것이 안전합니다(국내 표시·광고 규정 확인 필요). 안면 사용 시 잔털 가능성 고려. 임상 수치는 공개 문헌 기반 B2B 참고용입니다.",
  },
  {
    slug: "palmitoyl-tripeptide-1",
    code: "03",
    name: "Palmitoyl Tripeptide-1",
    brand: "Matrixyl 3000 구성",
    inci: "Palmitoyl Tripeptide-1",
    cas: "—",
    tag: "콜라겐 신호 / 멀티펩타이드 베이스",
    channel: "안티에이징 스킨케어",
    summary:
      "콜라겐·엘라스틴·히알루론산 등 ECM 전반을 자극하는 신호 펩타이드. 멀티펩타이드 제형의 검증된 베이스 원료입니다.",
    highlights: [
      "ECM 부스팅 베이스",
      "PT-5와 듀얼 펩타이드",
      "데일리 안티에이징",
    ],
    use: "활성 기준 통상 10 ppm 미만 · 수상 40~50℃ 이하",
    image: siteImages.product03,
    accent: "from-indigo-500/10 to-violet-600/5",
    iconBg: "bg-indigo-50 text-indigo-600",
    introduction:
      "콜라겐을 비롯한 피부 매트릭스 단백질 생성을 자극하는 신호 펩타이드입니다. 구 INCI: Palmitoyl Oligopeptide. Matrixyl 3000의 주요 구성 성분으로, 멀티펩타이드 제형의 검증된 기본 구성입니다.",
    mechanism: [
      "팔미토일화된 GHK 신호 펩타이드로, 섬유아세포 활성을 높여 세포외기질(ECM) 단백질 합성을 자극합니다.",
      "콜라겐뿐 아니라 엘라스틴·히알루론산·글리코사미노글리칸·피브로넥틴 생성을 촉진해 주름 개선과 탄력에 기여합니다.",
    ],
    clinical: [
      {
        text: "스킨케어 연구에서 GHK-Cu, Palmitoyl Tetrapeptide-7과 함께 집중 복합체로 검증",
        source:
          "PLU Laboratories 정리 / Li et al., J Cosmet Dermatol 2023 (doi:10.1111/jocd.15849)",
      },
      {
        text: "안전성: 통상 사용 농도(10 ppm 미만)에서 CIR 안전 결론. 100 ppm 원료가 토끼 안자극 시험서 경미한 자극(고농도 매트릭스 효과)",
        source: "CIR Tripeptide-1/Hexapeptide-12 안전성 평가서, 2018",
      },
    ],
    positioning: [
      {
        channel: "프리미엄 스킨케어",
        keywords:
          "Matrixyl 3000 동등 원료, 멀티펩타이드 콤플렉스, 콜라겐·탄력",
      },
      {
        channel: "더마 / 데일리 안티에이징",
        keywords: "ECM 부스팅, 펩타이드 베이스 안티에이징, 듀얼 펩타이드",
      },
      {
        channel: "대리점 / 유통",
        keywords: "수입 대체 팔미토일 펩타이드, 조합용 베이스 원료",
      },
    ],
    usp: [
      "“멀티펩타이드 안티에이징”의 베이스 활성 — 단독보다 복합 구성에서 강점",
      "콜라겐·탄력 데일리 케어(크림·세럼·아이케어)",
      "PT-5는 콜라겐 부스팅 스타 활성, PT-1은 ECM 전반을 넓게 자극하는 검증된 베이스 → “프리미엄 듀얼 펩타이드” 스토리 구성",
    ],
    formulation:
      "활성 기준 통상 10 ppm 미만 (보고 범위 1~30 ppm). 수상에 40~50℃ 이하 투입.",
    disclaimer:
      "표기 상품명(Matrixyl 등)은 동등 성분 안내 목적의 예시이며 해당 브랜드 제품이 아닙니다. 임상·안전성 수치는 공개 문헌·CIR 기반 B2B 참고용입니다.",
  },
  {
    slug: "dipeptide-2",
    code: "04",
    name: "Dipeptide-2",
    brand: "Val-Trp (VW)",
    inci: "Dipeptide-2",
    cas: "—",
    tag: "눈가 부기 · 다크서클",
    channel: "아이케어",
    summary:
      "콜라겐 계열과 다른 눈가 전용 펩타이드. ACE 억제 활성으로 림프 배수를 촉진하고 체액 정체를 줄입니다.",
    highlights: [
      "아이컨투어 · 디퍼프",
      "Eyeseryl 병용 구성",
      "모닝 디퍼프 컨셉",
    ],
    use: "아이세럼·크림 저농도 (ppm~약 0.1%)",
    image: siteImages.product04,
    accent: "from-violet-500/10 to-fuchsia-600/5",
    iconBg: "bg-violet-50 text-violet-600",
    introduction:
      "콜라겐 펩타이드와는 계열이 다른 눈가 전용 펩타이드입니다. Val-Trp(“VW” / Dipeptide VW). 부기·다크서클을 겨냥한 아이컨투어 활성으로 포지셔닝됩니다.",
    mechanism: [
      "안지오텐신 전환효소(ACE) 억제제로 동정된 펩타이드입니다.",
      "눈가의 림프 배수를 촉진하고 체액 정체를 줄입니다.",
      "콜라겐 합성과는 무관하며, 포지셔닝은 아이컨투어(부기·다크서클)입니다.",
    ],
    clinical: [
      {
        text: "ACE 억제 활성으로 동정 — 눈가 림프 배수 촉진·체액 정체 감소에 사용",
        source:
          "Li et al., J Cosmet Dermatol 2023 (Dipeptide-2 = Val-Trp, ACE 억제제 동정)",
      },
      {
        text: "통상 Acetyl Tetrapeptide-5(Eyeseryl) 계열과 병용해 아이컨투어 활성으로 구성",
        source: "제형 관행 (공급사 TDS 기반)",
      },
    ],
    positioning: [
      {
        channel: "아이케어",
        keywords:
          "아이컨투어, 부기·다크서클 케어, 모닝 디퍼프(de-puff), 눈가 전용",
      },
      {
        channel: "대리점 / 유통",
        keywords: "Eyeseryl 병용 아이세럼 원료, 림프 배수 펩타이드",
      },
    ],
    usp: [
      "아이세럼·아이크림의 부기·다크서클 소구 활성",
      "Acetyl Tetrapeptide-5 계열과 병용한 아이컨투어 라인",
      "“모닝 디퍼프” 컨셉 제품",
    ],
    formulation:
      "아이세럼·아이크림에 저농도 투입(통상 ppm~약 0.1%). 정확한 농도는 공급사 TDS 확인 및 자체 제형 검증 권장.",
    disclaimer:
      "4개 성분 중 공개 용량-반응 자료가 가장 적습니다. 명확한 효능 소구보다 “보조 활성”으로 포지셔닝하는 것을 권장합니다. 공개 문헌 기반 B2B 참고용입니다.",
  },
  {
    slug: "custom-synthesis",
    code: "05",
    name: "Custom Synthesis",
    brand: "맞춤 합성 서비스",
    inci: "Research Use Only",
    cas: "—",
    tag: "맞춤 합성 (Custom Synthesis)",
    channel: "R&D · 연구용",
    summary:
      "유기화합물 및 맞춤형 합성 서비스로 공정 개선·원가 절감을 지원합니다. 고순도 펩타이드 및 합성 유기물을 신속하고 합리적인 가격으로 제공합니다.",
    highlights: ["사양 변경 대응", "기술 협력 지원", "R&D 맞춤 공급"],
    use: "고객 요구 사양에 따른 협의 · 견적",
    image: siteImages.product05,
    accent: "from-slate-500/10 to-navy/5",
    iconBg: "bg-slate-100 text-navy",
    introduction:
      "Custom Synthesis · Research Use Only. 유기화합물 및 맞춤형 합성 서비스를 기반으로 공정 개선과 원가 절감을 통해 고순도 펩타이드 및 합성 유기물을 신속하고 합리적인 가격으로 제공합니다. 고객 요구에 따른 사양 변경 및 기술 협력 등 맞춤형 지원을 제공합니다.",
    mechanism: [
      "문헌·특허 검토를 통한 최적 합성 경로 설계",
      "유기합성 반응 수행 및 중간체·최종 화합물 제조",
      "컬럼·결정화 정제 및 HPLC, LC-MS, NMR 등 분석",
      "수율·재현성 개선을 위한 공정 최적화 및 mg→kg Scale-up",
    ],
    clinical: [
      {
        text: "고려대학교 의과대학과 연구용 펩타이드 공급 경험",
      },
      {
        text: "아이큐어㈜ 프로젝트 수행 경험 (케토프로펜 및 리도카인 불순물 합성 등)",
      },
      {
        text: "Palmitoyl Tripeptide-5, Dipeptide-2 등 펩타이드 화장품 원료 공정 최적화 실적",
      },
    ],
    positioning: [
      {
        channel: "R&D · 연구용",
        keywords: "맞춤 합성, 불순물 합성, 신규 화합물, 공정 최적화",
      },
      {
        channel: "화장품 · 바이오 원료",
        keywords: "액상 펩타이드 합성, 원가 절감, kg 파일럿 생산",
      },
    ],
    usp: [
      "의뢰 → 설계 → 합성 → 정제·분석 → 공정 최적화 → Scale-up 일관 수행",
      "용액상 펩타이드 합성(LPPS) 기반 원가 경쟁력",
      "아지도 화합물·클릭 화학 빌딩 블록 합성 가능",
    ],
    formulation:
      "고객 요구 사양(구조·순도·규격·수량)에 따라 협의 후 견적. 연구용(Research Use Only) 및 원료 공급 목적에 맞춰 납기·포장·COA를 조율합니다.",
    disclaimer:
      "연구·B2B 용도 안내이며, 최종 용도·규제 적합성은 고객사에서 확인이 필요합니다.",
  },
];

export function getProductBySlug(slug: string): ProductDetail | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
