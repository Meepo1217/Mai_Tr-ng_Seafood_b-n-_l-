"use client";

import { useState, useMemo } from "react";
import {
  ChevronRight,
  SlidersHorizontal,
  Grid3X3,
  LayoutList,
  X,
  Flame,
  ChevronDown,
  Home,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";
import { ProductCard } from "@/components/ProductCard";
import {
  bestSellerFullProducts,
  filterCategories,
  sortOptions,
} from "@/data/bestSellers";

export function BestSellersContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSort, setActiveSort] = useState("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]);
  const [onlyLive, setOnlyLive] = useState(false);
  const [onlyDiscount, setOnlyDiscount] = useState(false);

  const filteredProducts = useMemo(() => {
    let products = [...bestSellerFullProducts];

    // Filter by category
    if (activeCategory !== "all") {
      products = products.filter((p) => p.category === activeCategory);
    }

    // Filter by live
    if (onlyLive) {
      products = products.filter((p) => p.isLive);
    }

    // Filter by discount
    if (onlyDiscount) {
      products = products.filter((p) => p.discount && p.discount > 0);
    }

    // Filter by price
    products = products.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    switch (activeSort) {
      case "price-asc":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        products.sort((a, b) => b.price - a.price);
        break;
      case "discount":
        products.sort((a, b) => (b.discount ?? 0) - (a.discount ?? 0));
        break;
      case "newest":
        products.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return products;
  }, [activeCategory, activeSort, onlyLive, onlyDiscount, priceRange]);

  return (
    <>
      <Header />

      <main className="flex-1 bg-ocean-50/30">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-ocean-100">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <a
                href="/"
                className="hover:text-ocean-600 transition-colors flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5" />
                Trang chủ
              </a>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground font-medium">
                Hải Sản Bán Chạy
              </span>
            </nav>
          </div>
        </div>

        {/* Page header */}
        <div className="bg-ocean-gradient">
          <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl md:text-4xl font-extrabold text-white">
                Hải Sản Bán Chạy
              </h1>
            </div>
            <p className="text-white/80 text-sm md:text-base max-w-2xl">
              Top sản phẩm hải sản được yêu thích nhất tại Mai Trọng Seafood.
              Hơn 300 loại hải sản từ nhập khẩu và trong nước, cùng hơn 60 loại
              Sushi & Sashimi tươi ngon mỗi ngày!
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <div className="flex gap-6">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="bg-white rounded-2xl shadow-sm border border-ocean-100/50 overflow-hidden sticky top-24">
                {/* Categories */}
                <div className="p-5">
                  <h3 className="font-bold text-sm text-foreground mb-3 flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-ocean-500" />
                    Danh mục
                  </h3>
                  <div className="space-y-1">
                    {filterCategories.map((cat) => (
                      <button
                        key={cat.key}
                        onClick={() => setActiveCategory(cat.key)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between ${
                          activeCategory === cat.key
                            ? "bg-ocean-500 text-white font-semibold"
                            : "text-foreground hover:bg-ocean-50"
                        }`}
                      >
                        <span>{cat.label}</span>
                        <span
                          className={`text-xs ${activeCategory === cat.key ? "text-white/70" : "text-muted-foreground"}`}
                        >
                          ({cat.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-ocean-100 mx-5" />

                {/* Quick filters */}
                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-sm text-foreground mb-2">
                    Bộ lọc nhanh
                  </h3>
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={onlyLive}
                      onChange={(e) => setOnlyLive(e.target.checked)}
                      className="w-4 h-4 rounded border-ocean-300 text-ocean-500 focus:ring-ocean-500"
                    />
                    <span className="text-sm text-foreground group-hover:text-ocean-600 transition-colors">
                      🟢 Chỉ tươi sống
                    </span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={onlyDiscount}
                      onChange={(e) => setOnlyDiscount(e.target.checked)}
                      className="w-4 h-4 rounded border-ocean-300 text-ocean-500 focus:ring-ocean-500"
                    />
                    <span className="text-sm text-foreground group-hover:text-ocean-600 transition-colors">
                      🏷️ Đang giảm giá
                    </span>
                  </label>
                </div>

                {/* Divider */}
                <div className="border-t border-ocean-100 mx-5" />

                {/* Price range */}
                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-sm text-foreground mb-2">
                    Khoảng giá
                  </h3>
                  {[
                    { label: "Tất cả", range: [0, 5000000] as [number, number] },
                    { label: "Dưới 100K", range: [0, 100000] as [number, number] },
                    { label: "100K - 300K", range: [100000, 300000] as [number, number] },
                    { label: "300K - 500K", range: [300000, 500000] as [number, number] },
                    { label: "500K - 1 triệu", range: [500000, 1000000] as [number, number] },
                    { label: "Trên 1 triệu", range: [1000000, 5000000] as [number, number] },
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => setPriceRange(option.range)}
                      className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${
                        priceRange[0] === option.range[0] &&
                        priceRange[1] === option.range[1]
                          ? "bg-ocean-100 text-ocean-700 font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-ocean-50"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Toolbar */}
              <div className="bg-white rounded-xl shadow-sm border border-ocean-100/50 p-3 md:p-4 mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* Mobile filter button */}
                  <button
                    id="mobile-filter-toggle"
                    onClick={() => setIsMobileFilterOpen(true)}
                    className="lg:hidden flex items-center gap-2 px-3 py-2 border border-ocean-200 rounded-lg text-sm text-foreground hover:bg-ocean-50 transition-colors"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    Bộ lọc
                  </button>

                  {/* Product count */}
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {filteredProducts.length}
                    </span>{" "}
                    sản phẩm
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {/* Sort */}
                  <div className="relative">
                    <select
                      id="sort-select"
                      value={activeSort}
                      onChange={(e) => setActiveSort(e.target.value)}
                      className="appearance-none pl-3 pr-8 py-2 border border-ocean-200 rounded-lg text-sm bg-white focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500/20 outline-none cursor-pointer"
                    >
                      {sortOptions.map((opt) => (
                        <option key={opt.key} value={opt.key}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>

                  {/* View toggle */}
                  <div className="hidden md:flex items-center border border-ocean-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 transition-colors ${
                        viewMode === "grid"
                          ? "bg-ocean-500 text-white"
                          : "text-muted-foreground hover:bg-ocean-50"
                      }`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 transition-colors ${
                        viewMode === "list"
                          ? "bg-ocean-500 text-white"
                          : "text-muted-foreground hover:bg-ocean-50"
                      }`}
                    >
                      <LayoutList className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active filters */}
              {(activeCategory !== "all" || onlyLive || onlyDiscount || priceRange[0] !== 0 || priceRange[1] !== 5000000) && (
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs text-muted-foreground">
                    Bộ lọc đang áp dụng:
                  </span>
                  {activeCategory !== "all" && (
                    <button
                      onClick={() => setActiveCategory("all")}
                      className="flex items-center gap-1 px-2.5 py-1 bg-ocean-100 text-ocean-700 text-xs font-medium rounded-full hover:bg-ocean-200 transition-colors"
                    >
                      {
                        filterCategories.find(
                          (c) => c.key === activeCategory
                        )?.label
                      }
                      <X className="w-3 h-3" />
                    </button>
                  )}
                  {onlyLive && (
                    <button
                      onClick={() => setOnlyLive(false)}
                      className="flex items-center gap-1 px-2.5 py-1 bg-sea-green/15 text-sea-green text-xs font-medium rounded-full hover:bg-sea-green/25 transition-colors"
                    >
                      Tươi sống
                      <X className="w-3 h-3" />
                    </button>
                  )}
                  {onlyDiscount && (
                    <button
                      onClick={() => setOnlyDiscount(false)}
                      className="flex items-center gap-1 px-2.5 py-1 bg-coral/15 text-coral text-xs font-medium rounded-full hover:bg-coral/25 transition-colors"
                    >
                      Giảm giá
                      <X className="w-3 h-3" />
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setActiveCategory("all");
                      setOnlyLive(false);
                      setOnlyDiscount(false);
                      setPriceRange([0, 5000000]);
                    }}
                    className="text-xs text-ocean-600 hover:text-ocean-700 font-medium underline"
                  >
                    Xóa tất cả
                  </button>
                </div>
              )}

              {/* Product grid */}
              {filteredProducts.length > 0 ? (
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4"
                      : "flex flex-col gap-3"
                  }
                >
                  {filteredProducts.map((product) =>
                    viewMode === "grid" ? (
                      <ProductCard
                        key={product.id}
                        product={product}
                      />
                    ) : (
                      <ListProductCard key={product.id} product={product} />
                    )
                  )}
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-12 text-center">
                  <p className="text-5xl mb-4">🐟</p>
                  <p className="text-lg font-semibold text-foreground mb-2">
                    Không tìm thấy sản phẩm
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Hãy thử điều chỉnh bộ lọc để tìm sản phẩm phù hợp
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory("all");
                      setOnlyLive(false);
                      setOnlyDiscount(false);
                      setPriceRange([0, 5000000]);
                    }}
                    className="px-4 py-2 bg-ocean-500 text-white rounded-lg text-sm font-medium hover:bg-ocean-600 transition-colors"
                  >
                    Xóa bộ lọc
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWidgets />

      {/* Mobile filter overlay */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 w-80 max-w-[85vw] h-full bg-white shadow-xl overflow-y-auto animate-fade-in">
            <div className="p-4 bg-ocean-gradient text-white flex items-center justify-between">
              <h3 className="font-bold text-lg">Bộ lọc sản phẩm</h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Categories */}
            <div className="p-4">
              <h4 className="font-bold text-sm mb-2">Danh mục</h4>
              <div className="space-y-1">
                {filterCategories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => {
                      setActiveCategory(cat.key);
                      setIsMobileFilterOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                      activeCategory === cat.key
                        ? "bg-ocean-500 text-white font-semibold"
                        : "text-foreground hover:bg-ocean-50"
                    }`}
                  >
                    {cat.label} ({cat.count})
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-ocean-100 mx-4" />

            {/* Quick filters */}
            <div className="p-4 space-y-3">
              <h4 className="font-bold text-sm mb-2">Bộ lọc nhanh</h4>
              <label className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={onlyLive}
                  onChange={(e) => setOnlyLive(e.target.checked)}
                  className="w-4 h-4 rounded"
                />
                <span className="text-sm">🟢 Chỉ tươi sống</span>
              </label>
              <label className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={onlyDiscount}
                  onChange={(e) => setOnlyDiscount(e.target.checked)}
                  className="w-4 h-4 rounded"
                />
                <span className="text-sm">🏷️ Đang giảm giá</span>
              </label>
            </div>

            {/* Apply button */}
            <div className="p-4">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3 bg-ocean-500 text-white font-bold rounded-xl hover:bg-ocean-600 transition-colors"
              >
                Áp dụng ({filteredProducts.length} sản phẩm)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* List view product card */
function ListProductCard({ product }: { product: (typeof bestSellerFullProducts)[number] }) {
  return (
    <div className="product-card bg-white rounded-xl overflow-hidden border border-ocean-100/50 flex group cursor-pointer">
      <div className="w-36 md:w-48 shrink-0 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.isLive && (
          <span className="absolute top-2 left-2 badge-fresh flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            Tươi Sống
          </span>
        )}
        {product.discount && product.discount > 0 && (
          <span className="absolute top-2 right-2 bg-coral text-white text-xs font-bold px-2 py-1 rounded-lg">
            -{product.discount}%
          </span>
        )}
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-sm md:text-base text-foreground group-hover:text-ocean-600 transition-colors mb-1">
            {product.name}
          </h3>
          <div className="flex flex-wrap gap-1 mb-2">
            {product.badges?.map((badge) => (
              <span
                key={badge}
                className={
                  badge === "Bán Chạy"
                    ? "badge-hot"
                    : badge === "Khuyến Mãi"
                      ? "badge-sale"
                      : "badge-fresh"
                }
              >
                {badge}
              </span>
            ))}
          </div>
          {product.sold && (
            <p className="text-xs text-muted-foreground">
              Đã bán: {product.sold}
            </p>
          )}
        </div>
        <div className="flex items-end justify-between mt-2">
          <div>
            <span className="text-coral font-bold text-lg">
              {product.price.toLocaleString("vi-VN")}đ
            </span>
            <span className="text-xs text-muted-foreground ml-1">
              / {product.unit}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="block text-xs text-muted-foreground line-through">
                {product.originalPrice.toLocaleString("vi-VN")}đ
              </span>
            )}
          </div>
          <button className="px-4 py-2 bg-ocean-500 hover:bg-ocean-600 text-white text-sm font-semibold rounded-lg transition-colors">
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}
