"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

function formatPrice(price: number): string {
  return price.toLocaleString("vi-VN") + "đ";
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const slug = product.slug || "#";

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  return (
    <div className="product-card bg-white rounded-xl overflow-hidden border border-ocean-100/50 group hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <Link href={`/san-pham/${slug}`} className="block relative aspect-square overflow-hidden bg-ocean-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isLive && (
            <span className="badge-fresh flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Tươi Sống
            </span>
          )}
          {(product.badges || []).map((badge) => (
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
        {/* Discount badge */}
        {product.discount && product.discount > 0 && (
          <span className="absolute top-2 right-2 bg-coral text-white text-xs font-bold px-2 py-1 rounded-lg">
            -{product.discount}%
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-3 md:p-4 flex flex-col flex-1">
        <Link href={`/san-pham/${slug}`} className="block">
          <h3 className="font-medium text-sm text-foreground line-clamp-2 min-h-[2.5rem] group-hover:text-ocean-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="mt-2 flex items-end gap-2">
          <span className="text-coral font-bold text-base md:text-lg">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-muted-foreground">/ {product.unit}</span>
        </div>
        {product.originalPrice && product.originalPrice > product.price && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          </div>
        )}
        
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {product.sold ? `Đã bán: ${product.sold}` : ""}
          </span>
          <button 
            onClick={handleAddToCart}
            className="w-8 h-8 rounded-full bg-ocean-100 hover:bg-coral text-ocean-600 hover:text-white flex items-center justify-center transition-colors relative z-10"
            title="Thêm vào giỏ hàng"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
