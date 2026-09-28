"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";
import { useCart } from "@/context/CartContext";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

function formatPrice(price: number): string {
  return price.toLocaleString("vi-VN") + "đ";
}

export function CartContent() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch for localStorage data
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Header />
      <main className="flex-1 bg-ocean-50/30 py-8 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-ocean-900 mb-8 flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-coral" />
            Giỏ hàng của bạn
          </h1>

          {cart.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm border border-ocean-100 p-12 text-center">
              <div className="w-24 h-24 bg-ocean-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-12 h-12 text-ocean-300" />
              </div>
              <h2 className="text-xl font-bold text-ocean-800 mb-2">Giỏ hàng trống</h2>
              <p className="text-muted-foreground mb-8">Bạn chưa thêm sản phẩm nào vào giỏ hàng.</p>
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-coral hover:bg-coral/90 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg shadow-coral/20"
              >
                Tiếp tục mua sắm
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items List */}
              <div className="w-full lg:w-2/3">
                <div className="bg-white rounded-2xl shadow-sm border border-ocean-100 overflow-hidden">
                  <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-ocean-50/50 border-b border-ocean-100 font-medium text-ocean-800 text-sm">
                    <div className="col-span-6">Sản phẩm</div>
                    <div className="col-span-2 text-center">Đơn giá</div>
                    <div className="col-span-2 text-center">Số lượng</div>
                    <div className="col-span-2 text-right">Thành tiền</div>
                  </div>

                  <div className="divide-y divide-ocean-100">
                    {cart.map((item) => (
                      <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center">
                        <div className="col-span-1 md:col-span-6 flex gap-4">
                          <Link href={`/san-pham/${item.slug}`} className="shrink-0">
                            <div className="w-20 h-20 rounded-lg overflow-hidden border border-ocean-100">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                          </Link>
                          <div className="flex flex-col justify-center">
                            <Link href={`/san-pham/${item.slug}`} className="font-medium text-foreground hover:text-ocean-600 transition-colors line-clamp-2">
                              {item.name}
                            </Link>
                            <span className="text-xs text-muted-foreground mt-1">Đvt: {item.unit}</span>
                            {/* Mobile Price */}
                            <div className="md:hidden mt-2 font-bold text-coral">
                              {formatPrice(item.price)}
                            </div>
                          </div>
                        </div>

                        {/* Desktop Price */}
                        <div className="hidden md:block col-span-2 text-center font-medium">
                          {formatPrice(item.price)}
                        </div>

                        {/* Quantity */}
                        <div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-center">
                          <div className="flex items-center border border-ocean-200 rounded-lg h-9 w-24">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-full flex items-center justify-center text-muted-foreground hover:text-coral transition-colors"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <input 
                              type="number" 
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                              className="flex-1 w-full h-full text-center text-sm font-semibold text-foreground focus:outline-none"
                            />
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-full flex items-center justify-center text-muted-foreground hover:text-ocean-600 transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          
                          {/* Mobile Delete */}
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="md:hidden p-2 text-muted-foreground hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Total Price & Desktop Delete */}
                        <div className="hidden md:flex col-span-2 items-center justify-end gap-4">
                          <span className="font-bold text-coral">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="p-1.5 text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                            title="Xóa sản phẩm"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="w-full lg:w-1/3">
                <div className="bg-white rounded-2xl shadow-sm border border-ocean-100 p-6 sticky top-24">
                  <h3 className="text-lg font-bold text-ocean-900 mb-4 pb-4 border-b border-ocean-100">
                    Tổng đơn hàng
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Tạm tính:</span>
                      <span className="font-medium text-foreground">{formatPrice(cartTotal)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Phí giao hàng:</span>
                      <span>Chưa tính</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-ocean-100 pt-4 mb-6">
                    <div className="flex justify-between items-end">
                      <span className="font-medium">Tổng cộng:</span>
                      <span className="text-2xl font-extrabold text-coral">{formatPrice(cartTotal)}</span>
                    </div>
                    <p className="text-xs text-right text-muted-foreground mt-1">(Đã bao gồm VAT nếu có)</p>
                  </div>

                  <Link 
                    href="/thanh-toan"
                    className="w-full h-12 bg-coral hover:bg-coral/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-coral/20 flex items-center justify-center"
                  >
                    TIẾN HÀNH THANH TOÁN
                  </Link>
                  
                  <div className="mt-4 text-center">
                    <Link href="/" className="text-sm text-ocean-600 hover:underline flex items-center justify-center gap-1">
                      Tiếp tục mua sắm
                    </Link>
                  </div>
                </div>
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
