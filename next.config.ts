import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // public/IMG_JOON 파일을 같은 이름으로 교체하면 즉시 반영되도록
    // Next 이미지 최적화 캐시를 사용하지 않습니다.
    unoptimized: true,
  },
  // /home 은 존재하지 않는 중복 경로 — 홈(/)으로 영구 통합
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
