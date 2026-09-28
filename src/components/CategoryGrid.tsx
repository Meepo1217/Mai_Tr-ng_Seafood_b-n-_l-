"use client";

import { ChevronRight } from "lucide-react";
import { categoryHighlights } from "@/data/products";

export function CategoryGrid() {
  return (
    <section id="categories" className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground section-title">
              Danh Mục Hải Sản
            </h2>
            <p className="text-muted-foreground text-sm mt-3">
              Khám phá bộ sưu tập hải sản tươi ngon từ biển cả
            </p>
          </div>
          <a
            href="#all-categories"
            className="hidden md:flex items-center gap-1 text-sm font-semibold text-ocean-600 hover:text-ocean-700 transition-colors"
          >
            Xem tất cả
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categoryHighlights.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-60 group-hover:opacity-70 transition-opacity`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                <p className="font-bold text-sm md:text-base drop-shadow-lg">
                  {cat.name}
                </p>
                <p className="text-xs text-white/80">{cat.count}+ sản phẩm</p>
              </div>
              {/* Hover arrow */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
