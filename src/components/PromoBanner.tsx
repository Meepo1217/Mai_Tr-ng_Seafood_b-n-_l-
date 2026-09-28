"use client";

import { ChevronRight } from "lucide-react";

export function PromoBanner() {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Banner 1 */}
          <a
            href="#fresh"
            className="group relative overflow-hidden rounded-2xl min-h-[200px] md:min-h-[240px] bg-gradient-to-r from-ocean-600 via-ocean-500 to-sea-green flex items-center p-6 md:p-8"
          >
            <div className="absolute inset-0 bg-[url('/images/hero-banner.jpg')] bg-cover bg-center opacity-15 group-hover:opacity-20 transition-opacity group-hover:scale-105 duration-500" />
            <div className="relative z-10 text-white max-w-xs">
              <p className="text-sm font-medium text-white/80 mb-1">
                Tươi từ nguồn
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-2 leading-tight">
                Chạm Mọi Gu
              </h3>
              <p className="text-sm text-white/80 mb-4">
                Hải sản được vận chuyển trực tiếp từ các vùng biển nổi tiếng
                Việt Nam
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
                Khám phá ngay
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
            {/* Decorative circles */}
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-white/10 rounded-full" />
          </a>

          {/* Banner 2 */}
          <a
            href="/khuyen-mai"
            className="group relative overflow-hidden rounded-2xl min-h-[200px] md:min-h-[240px] bg-gradient-to-r from-coral via-coral/90 to-amber flex items-center p-6 md:p-8"
          >
            <div className="absolute inset-0 bg-[url('/images/product-shrimp.jpg')] bg-cover bg-center opacity-15 group-hover:opacity-20 transition-opacity group-hover:scale-105 duration-500" />
            <div className="relative z-10 text-white max-w-xs">
              <p className="text-sm font-medium text-white/80 mb-1">
                Siêu ưu đãi
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-2 leading-tight">
                Giá Bùng Nổ
                <span className="block text-amber-light">Chỉ Từ 59K</span>
              </h3>
              <p className="text-sm text-white/80 mb-4">
                Giao nhanh 2H &bull; Đổi trả miễn phí &bull; Freeship từ 500K
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
                Mua ngay
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
            {/* Decorative circles */}
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-white/10 rounded-full" />
          </a>
        </div>
      </div>
    </section>
  );
}
