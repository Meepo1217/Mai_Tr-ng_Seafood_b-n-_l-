"use client";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { useRef } from "react";
import type { Product } from "@/data/products";

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  seeMoreHref?: string;
  bgColor?: string;
  id?: string;
}

export function ProductSection({
  title,
  subtitle,
  products,
  seeMoreHref = "#",
  bgColor = "bg-white",
  id,
}: ProductSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id={id} className={`py-8 md:py-12 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground section-title">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground text-sm mt-2">{subtitle}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 rounded-full border border-ocean-200 flex items-center justify-center text-ocean-500 hover:bg-ocean-50 hover:border-ocean-300 transition-colors hidden md:flex"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 rounded-full border border-ocean-200 flex items-center justify-center text-ocean-500 hover:bg-ocean-50 hover:border-ocean-300 transition-colors hidden md:flex"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <a
              href={seeMoreHref}
              className="flex items-center gap-1 text-sm font-semibold text-ocean-600 hover:text-ocean-700 transition-colors ml-2"
            >
              Xem thêm
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Desktop scrollable grid */}
        <div className="hidden md:block relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[220px] max-w-[220px] shrink-0 snap-start"
              >
                <ProductCard
                  product={product}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* Mobile see more */}
        <div className="mt-4 text-center md:hidden">
          <a
            href={seeMoreHref}
            className="inline-flex items-center gap-1 text-sm font-semibold text-ocean-600 hover:text-ocean-700 border border-ocean-200 hover:border-ocean-300 px-4 py-2 rounded-full transition-colors"
          >
            Xem thêm sản phẩm
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
