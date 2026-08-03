# IMG_JOON — 사이트 이미지 관리

이 폴더의 파일을 **같은 파일명으로 덮어쓰기**하면 사이트에 반영됩니다.  
**코드 수정은 필요 없습니다.**

반영이 안 보이면 브라우저에서 **강력 새로고침** (`Ctrl + Shift + R`) 하세요.

---

## 폴더 구조 (실제 사용 파일만)

```
public/IMG_JOON/
├── home/
│   └── hero.mp4
├── about/
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   └── gallery-4.jpg
├── service/
│   ├── product-1.jpg
│   ├── product-2.jpg
│   ├── product-3.jpg
│   ├── product-4.jpg
│   └── product-5.jpg
├── strengths/
│   └── banner.jpg
├── contact/
│   ├── image-1.jpg
│   └── image-2.jpg
└── partner/
    ├── bigsell.png
    ├── daelim univ.png
    ├── korea-chem.png
    ├── korea_B.png
    ├── KOREA_medi.png
    ├── oncos.png
    ├── onco_png.jpg
    └── un2.png
```

---

## 섹션별 파일 설명

| 폴더 | 파일 | 사용 위치 |
|------|------|-----------|
| `home/` | `hero.mp4` | 메인 Hero 영상 |
| `about/` | `gallery-1.jpg` ~ `gallery-4.jpg` | 회사 소개 갤러리 |
| `service/` | `product-1.jpg` | Palmitoyl Tripeptide-5 (카드·상세) |
| `service/` | `product-2.jpg` | GHK-Cu (카드·상세) |
| `service/` | `product-3.jpg` | Palmitoyl Tripeptide-1 (카드·상세) |
| `service/` | `product-4.jpg` | Dipeptide-2 (카드·상세) |
| `service/` | `product-5.jpg` | Custom Synthesis (카드·상세·전용 페이지) |
| `strengths/` | `banner.jpg` | 공급 강점 배너 |
| `contact/` | `image-1.jpg`, `image-2.jpg` | 문의 섹션 |
| `partner/` | 아래 로고 파일들 | 파트너십 마퀴 |

---

## 교체 예시

Contact 첫 이미지 바꾸기:

1. `public/IMG_JOON/contact/image-1.jpg` 를 **같은 이름**으로 덮어쓰기  
2. 브라우저에서 `Ctrl + Shift + R`

제품 1번 이미지 바꾸기:

1. `public/IMG_JOON/service/product-1.jpg` 덮어쓰기  
2. 강력 새로고침

---

## 권장 형식

- 사진: `.jpg` / `.png` / `.webp` (가로 1200px 이상 권장)
- 로고: 투명 배경 `.png`
- 영상: `.mp4` (무음 자동재생)

**파일명을 바꾸지 마세요.** 이름·확장자가 바뀌면 화면에 안 나옵니다.
