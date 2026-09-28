"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Truck, Shield, Clock, Award } from "lucide-react";

const bannerSlides = [
  {
    id: 1,
    title: "Hải Sản Tươi Sống",
    subtitle: "Từ biển đến bàn ăn chỉ trong 2 giờ",
    description: "Cam kết 100% tươi sống - Đổi trả miễn phí nếu không hài lòng",
    bgClass: "bg-hero-gradient",
    cta: "Mua Ngay",
    ctaLink: "#best-sellers",
  },
  {
    id: 2,
    title: "Ưu Đãi Cuối Tuần",
    subtitle: "Giảm đến 30% tất cả hải sản nhập khẩu",
    description: "Tôm hùm Alaska, Cá hồi Na Uy, Bào ngư Úc với giá tốt nhất",
    bgClass: "bg-gradient-to-r from-ocean-800 via-ocean-600 to-ocean-500",
    cta: "Xem Ưu Đãi",
    ctaLink: "#promotions",
  },
  {
    id: 3,
    title: "Combo Gia Đình",
    subtitle: "Set hải sản cho 4-6 người chỉ từ 599K",
    description: "Tiết kiệm đến 40% so với mua lẻ - Giao hàng miễn phí",
    bgClass: "bg-gradient-to-br from-ocean-700 via-ocean-500 to-sea-green",
    cta: "Đặt Combo",
    ctaLink: "#combo",
  },
];

const trustBadges = [
  { icon: Truck, label: "Giao hàng 2H", sublabel: "Nội thành HCM" },
  { icon: Shield, label: "100% Tươi Sống", sublabel: "Cam kết chất lượng" },
  { icon: Clock, label: "Đổi trả 24H", sublabel: "Miễn phí hoàn tiền" },
  { icon: Award, label: "Uy tín #1", sublabel: "Top hải sản online" },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="hero" className="relative">
      {/* Main Banner Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bannerSlides.map((slide) => (
            <div
              key={slide.id}
              className={`w-full shrink-0 ${slide.bgClass} relative min-h-[300px] md:min-h-[420px] lg:min-h-[480px]`}
            >
              {/* Background image overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "url('/images/hero-banner.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  mixBlendMode: "overlay",
                }}
              />
              {/* Wave pattern overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />

              <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-white text-center md:text-left">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl font-medium mb-3 text-white/90 drop-shadow">
                    {slide.subtitle}
                  </p>
                  <p className="text-sm md:text-base text-white/75 mb-8 max-w-lg mx-auto md:mx-0">
                    {slide.description}
                  </p>
                  <a
                    href={slide.ctaLink}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-coral hover:bg-coral/90 text-white font-bold rounded-full shadow-lg shadow-coral/30 transition-all hover:scale-105 text-sm md:text-base"
                  >
                    {slide.cta}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="flex-1 hidden lg:block">
                  <img
                    src="/images/hero-banner.jpg"
                    alt="Hải sản tươi sống Mai Trọng Seafood"
                    className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl shadow-black/20 transform hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide controls */}
        <button
          id="hero-prev"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-20"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          id="hero-next"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-20"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {bannerSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="max-w-7xl mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl shadow-ocean-500/8 p-4 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-ocean-50 transition-colors group cursor-default"
            >
              <div className="w-12 h-12 bg-ocean-50 group-hover:bg-ocean-100 rounded-xl flex items-center justify-center transition-colors shrink-0">
                <badge.icon className="w-6 h-6 text-ocean-500" />
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">
                  {badge.label}
                </p>
                <p className="text-xs text-muted-foreground">
                  {badge.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
