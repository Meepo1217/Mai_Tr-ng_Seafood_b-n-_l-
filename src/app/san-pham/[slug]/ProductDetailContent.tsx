"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";
import { allProducts as products } from "@/data/database";
import { 
  ChevronRight, 
  Home, 
  ShoppingCart, 
  Minus, 
  Plus, 
  CheckCircle2, 
  ShieldCheck, 
  Truck 
} from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";

function formatPrice(price: number): string {
  return price.toLocaleString("vi-VN") + "đ";
}

export function ProductDetailContent({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-ocean-900 mb-4">Sản phẩm không tồn tại</h1>
            <Link href="/" className="text-ocean-600 hover:underline">Quay lại trang chủ</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Related products
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 5);

  return (
    <>
      <Header />

      <main className="flex-1 bg-ocean-50/30 pb-16">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-ocean-100 mb-6">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="flex items-center flex-wrap gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-ocean-600 transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Trang chủ
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href={`/danh-muc/${product.category}`} className="hover:text-ocean-600 transition-colors">
                Danh mục
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-md">
                {product.name}
              </span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-4 md:p-8 shadow-sm border border-ocean-100 mb-8">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
              
              {/* Product Image Gallery */}
              <div className="w-full md:w-1/2 lg:w-5/12">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-ocean-50 border border-ocean-100/50 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.isLive && (
                    <span className="absolute top-4 left-4 badge-fresh flex items-center gap-1 shadow-md">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      Tươi Sống
                    </span>
                  )}
                  {product.discount && product.discount > 0 && (
                    <span className="absolute top-4 right-4 bg-coral text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-md">
                      -{product.discount}%
                    </span>
                  )}
                </div>
                {/* Thumbnails placeholder (just reusing the main image for demo) */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {[1, 2, 3, 4].map((i) => (
                    <button key={i} className={`w-20 h-20 rounded-lg overflow-hidden border-2 shrink-0 ${i === 1 ? 'border-ocean-500' : 'border-transparent hover:border-ocean-200'}`}>
                      <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="text-muted-foreground">Mã SP: <span className="font-medium text-foreground">MTS-{product.id}</span></span>
                  <span className="text-ocean-200">|</span>
                  <span className="text-muted-foreground">
                    Tình trạng: <span className="font-medium text-emerald-600">Còn hàng</span>
                  </span>
                  {product.sold && (
                    <>
                      <span className="text-ocean-200">|</span>
                      <span className="text-muted-foreground flex items-center gap-1">
                        Đã bán: <span className="font-medium">{product.sold}</span>
                      </span>
                    </>
                  )}
                </div>

                {/* Price Section */}
                <div className="bg-ocean-50/50 p-4 rounded-xl border border-ocean-100/50 mb-6 flex flex-wrap items-end gap-3">
                  <span className="text-3xl font-extrabold text-coral">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-lg text-muted-foreground mb-1">/ {product.unit}</span>
                  
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-base text-muted-foreground line-through mb-1 ml-2">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Short Description */}
                <div className="prose prose-sm text-foreground/80 mb-6">
                  <p><strong>Quy cách:</strong> Đóng gói hút chân không an toàn, sạch sẽ.</p>
                  <p><strong>Cam kết:</strong> 100% hải sản tươi ngon, chất lượng tuyệt đối khi giao đến tay khách hàng.</p>
                  <p><strong>Bảo quản:</strong> Ngăn mát tủ lạnh hoặc cấp đông tùy theo loại hải sản.</p>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Cam kết tươi sống 100%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Truck className="w-4 h-4 text-ocean-500 shrink-0" />
                    <span>Giao hàng hỏa tốc 2H</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Miễn phí đổi trả nếu không tươi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-coral shrink-0" />
                    <span>Tích lũy điểm thưởng KHTT</span>
                  </div>
                </div>

                <hr className="border-ocean-100 mb-6" />

                {/* Add to Cart Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <div className="flex items-center border border-ocean-200 rounded-xl bg-white h-12 w-32 shrink-0">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-full flex items-center justify-center text-muted-foreground hover:text-ocean-600 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <input 
                      type="number" 
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="flex-1 w-full h-full text-center font-semibold text-foreground focus:outline-none"
                    />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-full flex items-center justify-center text-muted-foreground hover:text-ocean-600 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button 
                    onClick={() => addToCart(product, quantity)}
                    className="flex-1 h-12 bg-coral hover:bg-coral/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-coral/20 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    THÊM VÀO GIỎ HÀNG
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Description Tabs */}
          <div className="bg-white rounded-2xl shadow-sm border border-ocean-100 mb-12 overflow-hidden">
            <div className="flex border-b border-ocean-100">
              <button className="px-6 py-4 font-bold text-ocean-600 border-b-2 border-ocean-600 bg-ocean-50/30">
                Mô tả sản phẩm
              </button>
              <button className="px-6 py-4 font-medium text-muted-foreground hover:text-ocean-600 transition-colors">
                Chính sách đổi trả
              </button>
            </div>
            <div className="p-6 md:p-8 prose max-w-none text-foreground/80">
              <h3 className="text-xl font-bold text-ocean-800 mb-4">{product.name} tại Mai Trọng Seafood</h3>
              <p>
                Sản phẩm <strong>{product.name}</strong> được Mai Trọng Seafood tuyển chọn kỹ lưỡng từ những nguồn cung cấp uy tín nhất. 
                Chúng tôi áp dụng quy trình kiểm định chất lượng gắt gao nhằm đảm bảo hải sản luôn giữ được độ tươi ngon và hương vị nguyên bản khi đến tay khách hàng.
              </p>
              <p>
                Với phương châm "Sức khỏe của khách hàng là trên hết", mọi sản phẩm đều được sơ chế và đóng gói trong môi trường đạt chuẩn vệ sinh an toàn thực phẩm.
                Bạn có thể hoàn toàn yên tâm chế biến những món ăn ngon, bổ dưỡng cho gia đình từ nguyên liệu thượng hạng này.
              </p>
              
              <div className="mt-8 p-4 bg-ocean-50 rounded-xl border border-ocean-100 text-sm">
                <p className="font-semibold text-ocean-700 mb-2">💡 Gợi ý chế biến:</p>
                <ul className="list-disc pl-5 space-y-1 text-ocean-700/80">
                  <li>Hấp sả, hấp gừng để giữ trọn vị ngọt tự nhiên.</li>
                  <li>Nướng mỡ hành, nướng mọi thơm lừng hấp dẫn.</li>
                  <li>Nấu lẩu hải sản đậm đà, chua cay kích thích vị giác.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-ocean-500 rounded-full"></span>
                Sản phẩm cùng danh mục
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                {relatedProducts.map(p => (
                  <ProductCard
                    key={p.id}
                    product={p}
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
