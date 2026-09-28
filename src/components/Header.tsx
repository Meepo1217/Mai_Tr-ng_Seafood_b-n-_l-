"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import {
  Search,
  ShoppingCart,
  Phone,
  Truck,
  Menu,
  X,
  ChevronDown,
  Flame,
  Tag,
  Fish,
  Snowflake,
  Droplets,
  Plane,
  Shell,
  Egg,
  Scissors,
  UtensilsCrossed,
  Soup,
  MapPin,
  Star,
} from "lucide-react";

const categories = [
  { name: "Bán Chạy Nhất", icon: Flame, href: "/hai-san-ban-chay" },
  { name: "Khuyến Mãi", icon: Tag, href: "/khuyen-mai" },
  { name: "Sushi & Sashimi", icon: Fish, href: "/danh-muc/sushi-sashimi" },
  { name: "Hải Sản Đông Lạnh", icon: Snowflake, href: "/danh-muc/hai-san-dong-lanh" },
  { name: "100% Tươi Sống", icon: Droplets, href: "/danh-muc/100-tuoi-song" },
  { name: "Hải Sản Nhập Khẩu", icon: Plane, href: "/danh-muc/hai-san-nhap-khau" },
  { name: "Cá Hồi", icon: Fish, href: "/danh-muc/ca-hoi" },
  { name: "Hàu Sữa", icon: Shell, href: "/danh-muc/hau-sua" },
  { name: "Ngao, Sò, Ốc", icon: Egg, href: "/danh-muc/ngao-so-oc" },
  { name: "Cua - Ghẹ", icon: Scissors, href: "/danh-muc/cua-ghe" },
  { name: "Tôm Các Loại", icon: UtensilsCrossed, href: "/danh-muc/tom-cac-loai" },
  { name: "Mực", icon: Soup, href: "/danh-muc/muc" },
];

const navLinks = [
  { name: "Sản Phẩm Mới", href: "/san-pham-moi", badge: "NEW" },
  { name: "Khách Hàng Thân Thiết", href: "/khach-hang-than-thiet", icon: Star },
  { name: "Hệ Thống Cửa Hàng", href: "/he-thong-cua-hang", icon: MapPin },
  { name: "Giao Hàng Từ 100.000đ", href: "/giao-nhan-hang", icon: Truck },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Promo Bar */}
      <div className="bg-ocean-gradient text-white text-center py-2 px-4 text-sm font-medium overflow-hidden relative">
        <div className="animate-shimmer absolute inset-0" />
        <p className="relative z-10 flex items-center justify-center gap-2 flex-wrap">
          <span className="hidden sm:inline">🌊</span>
          <span className="font-bold">MAI TRỌNG SEAFOOD</span>
          <span className="hidden sm:inline">–</span>
          <span>Hải sản tươi sống giao tận nơi trong 2H</span>
          <span className="bg-white/20 rounded-full px-3 py-0.5 text-xs font-bold ml-2 hidden md:inline">
            FREESHIP đơn từ 500K
          </span>
        </p>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-ocean-500/10"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">
            {/* Mobile menu button */}
            <button
              id="mobile-menu-toggle"
              className="lg:hidden p-2 text-ocean-700 hover:bg-ocean-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo */}
            <a href="/" className="flex items-center gap-2 shrink-0" id="logo-link">
              <img
                src="/images/Logo.png"
                alt="Mai Trọng Seafood"
                className="h-10 md:h-14 w-auto object-contain"
              />
            </a>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xl relative">
              <div className="w-full relative group">
                <input
                  id="search-input"
                  type="text"
                  placeholder="Tìm kiếm hải sản tươi sống..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-11 pl-4 pr-12 rounded-full border-2 border-ocean-200 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 outline-none transition-all bg-ocean-50/50 text-sm"
                />
                <button
                  id="search-button"
                  className="absolute right-1 top-1 h-9 w-9 bg-ocean-500 hover:bg-ocean-600 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Hotline & Delivery */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:19000098"
                className="flex items-center gap-2 group"
                id="hotline-link"
              >
                <div className="w-10 h-10 bg-ocean-50 rounded-full flex items-center justify-center group-hover:bg-ocean-100 transition-colors">
                  <Phone className="w-5 h-5 text-ocean-600" />
                </div>
                <div>
                  <p className="text-coral font-bold text-lg leading-none">
                    1900 0098
                  </p>
                  <p className="text-xs text-muted-foreground">
                    8h-21h T2-CN
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-amber-light rounded-full flex items-center justify-center">
                  <Truck className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="text-ocean-700 font-bold text-sm leading-none">
                    Giao Hàng 2H
                  </p>
                  <p className="text-xs text-muted-foreground">Nội thành HCM</p>
                </div>
              </div>
            </div>

            {/* Cart */}
            <div className="flex items-center gap-2">

              <Link
                href="/gio-hang"
                id="cart-button"
                className="relative p-2 text-ocean-700 hover:bg-ocean-50 rounded-lg transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-0.5 -right-0.5 bg-coral text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-3">
            <div className="relative">
              <input
                id="mobile-search-input"
                type="text"
                placeholder="Tìm kiếm hải sản..."
                className="w-full h-10 pl-4 pr-10 rounded-full border-2 border-ocean-200 focus:border-ocean-500 outline-none text-sm bg-ocean-50/50"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-ocean-400" />
            </div>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="hidden lg:block bg-ocean-gradient">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center h-11 gap-1">
              {/* Category dropdown */}
              <div className="relative">
                <button
                  id="category-dropdown-toggle"
                  className="flex items-center gap-2 h-11 px-5 text-white font-semibold text-sm bg-white/10 hover:bg-white/20 transition-colors rounded-t-lg"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                >
                  <Menu className="w-4 h-4" />
                  DANH MỤC
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isCategoryOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Category Dropdown */}
                {isCategoryOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-b-xl shadow-xl shadow-ocean-500/15 py-2 z-50 animate-fade-in">
                    {categories.map((cat) => (
                      <a
                        key={cat.name}
                        href={cat.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-ocean-50 hover:text-ocean-600 transition-colors group"
                      >
                        <cat.icon className="w-5 h-5 text-ocean-400 group-hover:text-ocean-600 transition-colors" />
                        <span className="font-medium">{cat.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Nav Links */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 h-11 px-4 text-white/90 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors"
                >
                  {link.icon && <link.icon className="w-4 h-4" />}
                  {link.name}
                  {link.badge && (
                    <span className="bg-coral text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 w-72 h-full bg-white shadow-xl animate-slide-in-left overflow-y-auto">
            <div className="p-4 bg-ocean-gradient text-white">
              <p className="font-bold text-lg">Danh Mục Sản Phẩm</p>
              <p className="text-white/70 text-sm">Mai Trọng Seafood</p>
            </div>
            <div className="py-2">
              {categories.map((cat) => (
                <a
                  key={cat.name}
                  href={cat.href}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-ocean-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <cat.icon className="w-5 h-5 text-ocean-400" />
                  <span>{cat.name}</span>
                </a>
              ))}
            </div>
            <div className="border-t border-ocean-100 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-ocean-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon && (
                    <link.icon className="w-5 h-5 text-ocean-400" />
                  )}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Category dropdown overlay for desktop */}
      {isCategoryOpen && (
        <div
          className="fixed inset-0 z-30 hidden lg:block"
          onClick={() => setIsCategoryOpen(false)}
        />
      )}
    </>
  );
}
