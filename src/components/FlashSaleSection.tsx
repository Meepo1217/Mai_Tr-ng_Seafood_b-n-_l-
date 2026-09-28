"use client";

import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { promotionProducts } from "@/data/products";

function getTimeRemaining() {
  const now = new Date();
  const endOfDay = new Date(now);
  endOfDay.setHours(23, 59, 59, 999);
  const diff = endOfDay.getTime() - now.getTime();

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
}

export function FlashSaleSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <section
      id="flash-sale"
      className="py-8 md:py-12 bg-gradient-to-r from-coral/5 via-coral/10 to-amber-light/30"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-coral rounded-xl flex items-center justify-center animate-pulse-glow">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-coral flex items-center gap-2">
                Flash Sale
                <span className="text-sm font-normal text-muted-foreground">
                  Giá Cực Shock
                </span>
              </h2>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Kết thúc sau:</span>
            <div className="flex items-center gap-1">
              <span className="bg-ocean-800 text-white font-mono font-bold text-sm px-2 py-1 rounded-md min-w-[32px] text-center">
                {pad(timeLeft.hours)}
              </span>
              <span className="text-ocean-800 font-bold">:</span>
              <span className="bg-ocean-800 text-white font-mono font-bold text-sm px-2 py-1 rounded-md min-w-[32px] text-center">
                {pad(timeLeft.minutes)}
              </span>
              <span className="text-ocean-800 font-bold">:</span>
              <span className="bg-coral text-white font-mono font-bold text-sm px-2 py-1 rounded-md min-w-[32px] text-center animate-pulse">
                {pad(timeLeft.seconds)}
              </span>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {promotionProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
