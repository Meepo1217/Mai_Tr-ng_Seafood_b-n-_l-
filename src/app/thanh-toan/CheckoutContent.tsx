"use client";

import { useCart } from "@/context/CartContext";
import { ChevronRight, Trash2, Minus, Plus, CreditCard, Ticket, ShieldCheck, MapPin, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

function formatPrice(price: number): string {
  return price.toLocaleString("vi-VN") + "đ";
}

export function CheckoutContent() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const [mounted, setMounted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "pickup">("delivery");
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState<{name: string, address: string} | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  // UI states
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleCheckout = () => {
    setErrorMsg("");

    if (!name.trim()) return setErrorMsg("Vui lòng nhập họ và tên.");
    if (!phone.trim()) return setErrorMsg("Vui lòng nhập số điện thoại.");
    
    if (deliveryMethod === "delivery") {
      if (!address.trim()) return setErrorMsg("Vui lòng nhập địa chỉ giao hàng.");
      if (!city || city === "Tỉnh/TP, Quận/Huyện, Phường/Xã") return setErrorMsg("Vui lòng chọn Tỉnh/Thành phố.");
    } else {
      if (!selectedStore) return setErrorMsg("Vui lòng chọn cửa hàng để đến nhận.");
    }

    if (!termsAccepted) return setErrorMsg("Bạn cần đồng ý với Điều khoản sử dụng & Chính sách bảo mật.");

    // If passed all validations
    setIsSuccessModalOpen(true);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans">
      {/* Header */}
      <header className="bg-ocean-600 p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-white font-bold text-xl tracking-tight">DAOHAISAN</span>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* LEFT COLUMN: FORMS */}
          <div className="w-full lg:w-[55%] space-y-4">
            
            {/* Login banner */}
            <div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between shadow-sm border border-gray-100">
              <span className="text-sm text-gray-600 mb-3 sm:mb-0">Đăng nhập để mua hàng tiện lợi và nhận nhiều ưu đãi hơn nữa</span>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                Đăng nhập
              </button>
            </div>

            {/* Shipping Info */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Thông tin giao hàng</h2>
              
              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-5">
                <button 
                  onClick={() => setDeliveryMethod("delivery")}
                  className={`flex-1 pb-3 font-medium flex items-center justify-center gap-2 border-b-2 transition-colors ${deliveryMethod === "delivery" ? "text-ocean-600 border-ocean-600" : "text-gray-500 border-transparent hover:text-gray-700"}`}
                >
                  <MapPin className="w-4 h-4" />
                  Giao tận nơi
                </button>
                <button 
                  onClick={() => setDeliveryMethod("pickup")}
                  className={`flex-1 pb-3 font-medium flex items-center justify-center gap-2 border-b-2 transition-colors ${deliveryMethod === "pickup" ? "text-ocean-600 border-ocean-600" : "text-gray-500 border-transparent hover:text-gray-700"}`}
                >
                  <MapPin className="w-4 h-4" />
                  Nhận tại cửa hàng
                </button>
              </div>

              {/* Form fields */}
              <div className="space-y-3">
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhập họ và tên" 
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500 transition-all bg-gray-50/50"
                />
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Nhập số điện thoại" 
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500 transition-all bg-gray-50/50"
                />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập email (không bắt buộc)" 
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500 transition-all bg-gray-50/50"
                />
                
                {deliveryMethod === "delivery" ? (
                  <>
                    <div className="pt-2">
                      <input 
                        type="text" 
                        value="Vietnam"
                        disabled
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-gray-100 text-gray-500"
                      />
                    </div>
                    <input 
                      type="text" 
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Địa chỉ, tên đường" 
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500 transition-all bg-gray-50/50"
                    />
                    <select 
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ocean-500 text-gray-500 bg-gray-50/50 appearance-none"
                    >
                      <option value="">Tỉnh/TP, Quận/Huyện, Phường/Xã</option>
                      <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                      <option value="Hà Nội">Hà Nội</option>
                    </select>
                  </>
                ) : (
                  <div className="pt-4 flex flex-col items-center border-t border-gray-100 mt-2">
                    {selectedStore ? (
                      <div className="w-full bg-ocean-50/50 border border-ocean-200 rounded-lg p-4 flex flex-col mb-4 relative">
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className="w-4 h-4 text-ocean-600" />
                          <span className="font-bold text-ocean-900">{selectedStore.name}</span>
                        </div>
                        <span className="text-sm text-gray-600 pl-6">{selectedStore.address}</span>
                        
                        <button 
                          onClick={() => setIsStoreModalOpen(true)}
                          className="absolute top-4 right-4 text-sm text-ocean-600 font-medium hover:underline"
                        >
                          Thay đổi
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => setIsStoreModalOpen(true)}
                        className="flex items-center gap-2 px-8 py-3 bg-ocean-50 hover:bg-ocean-100 text-ocean-700 rounded-lg text-sm font-medium transition-colors border border-ocean-200"
                      >
                        <MapPin className="w-4 h-4" />
                        Chọn cửa hàng
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Shipping Method - Only show for delivery */}
            {deliveryMethod === "delivery" && (
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Phương thức giao hàng</h2>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-500 text-center">
                  Nhập địa chỉ để xem các phương thức giao hàng
                </div>
              </div>
            )}

            {/* Payment Method */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Phương thức thanh toán</h2>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <label className={`flex items-center gap-3 p-4 cursor-pointer transition-colors ${paymentMethod === 'cod' ? 'bg-ocean-50/30' : ''}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="cod" 
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-ocean-600 focus:ring-ocean-500"
                  />
                  <span className="text-sm font-medium text-gray-800">Thanh Toán Khi Nhận Hàng (COD)</span>
                </label>
                
                <label className={`flex items-start gap-3 p-4 border-t border-gray-200 cursor-pointer transition-colors ${paymentMethod === 'vnpay' ? 'bg-ocean-50/30' : ''}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="vnpay"
                    checked={paymentMethod === 'vnpay'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-ocean-600 focus:ring-ocean-500 mt-0.5"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-800 block mb-1">Thanh toán online qua cổng VNPay (ATM/Visa/MasterCard/JCB/QR Pay trên Mobile Banking)</span>
                    <div className="flex gap-1">
                      {/* Fake card icons */}
                      <div className="w-8 h-5 bg-gray-200 rounded text-[8px] flex items-center justify-center font-bold">ATM</div>
                      <div className="w-8 h-5 bg-blue-800 text-white rounded text-[8px] flex items-center justify-center font-bold">VISA</div>
                      <div className="w-8 h-5 bg-red-500 text-white rounded text-[8px] flex items-center justify-center font-bold">MC</div>
                    </div>
                  </div>
                </label>
                
                <label className={`flex items-center gap-3 p-4 border-t border-gray-200 cursor-pointer transition-colors ${paymentMethod === 'momo' ? 'bg-ocean-50/30' : ''}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="momo"
                    checked={paymentMethod === 'momo'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-ocean-600 focus:ring-ocean-500"
                  />
                  <div className="w-6 h-6 bg-pink-600 rounded-md flex items-center justify-center text-[10px] text-white font-bold">MoMo</div>
                  <span className="text-sm font-medium text-gray-800">Thanh toán online qua ví MoMo</span>
                </label>
                
                <label className={`flex items-center gap-3 p-4 border-t border-gray-200 cursor-pointer transition-colors ${paymentMethod === 'transfer' ? 'bg-ocean-50/30' : ''}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="transfer"
                    checked={paymentMethod === 'transfer'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-ocean-600 focus:ring-ocean-500"
                  />
                  <div className="w-6 h-6 border border-gray-300 rounded-md flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-800">Chuyển khoản qua QR (Tiện Hơn)</span>
                </label>
              </div>
            </div>

            {/* E-invoice */}
            <div className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
              <span className="font-bold text-gray-900 text-sm">Hoá đơn điện tử</span>
              <div className="flex items-center gap-1 text-gray-500 text-sm">
                Yêu cầu xuất <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          {/* RIGHT COLUMN: SUMMARY */}
          <div className="w-full lg:w-[45%] space-y-4">
            
            {/* Cart summary */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Giỏ hàng</h2>
              
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.length === 0 ? (
                  <p className="text-sm text-gray-500 text-center py-4">Giỏ hàng trống.</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4 items-start relative pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200 shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900 pr-6 line-clamp-2">{item.name}</h3>
                        <div className="mt-1 flex items-center gap-1 text-xs">
                          <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">Phần</span>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex flex-col">
                            {item.originalPrice && item.originalPrice > item.price && (
                              <span className="text-xs text-gray-400 line-through">{formatPrice(item.originalPrice)}</span>
                            )}
                            <span className="text-sm font-bold text-coral">{formatPrice(item.price)}</span>
                          </div>
                          <div className="flex items-center border border-gray-200 rounded-lg bg-white h-8 w-20">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-full flex items-center justify-center text-gray-500 hover:text-coral transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <input 
                              type="text" 
                              value={item.quantity}
                              readOnly
                              className="flex-1 w-full h-full text-center text-xs font-medium text-gray-900 focus:outline-none"
                            />
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-full flex items-center justify-center text-gray-500 hover:text-ocean-600 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="absolute top-0 right-0 p-1 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Delivery datetime info (Static mimicking original) */}
              <div className="mt-6 pt-4 border-t border-dashed border-gray-200 space-y-2 text-sm text-gray-800">
                <div className="flex items-center gap-2">
                  <span className="font-bold">Ngày giao hàng :</span>
                  <span>{new Date().toLocaleDateString('vi-VN')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Giờ giao hàng :</span>
                  <span>Càng sớm càng tốt</span>
                </div>
              </div>
            </div>

            {/* Promo code */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Mã khuyến mãi</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2">
                    <Ticket className="w-5 h-5" />
                    <span>Chọn mã</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Nhập mã khuyến mãi" 
                    className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ocean-500 transition-colors"
                  />
                  <button className="bg-ocean-600 hover:bg-ocean-700 text-white font-medium px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap">
                    Áp dụng
                  </button>
                </div>
              </div>
            </div>

            {/* Total summary */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Tóm tắt đơn hàng</h2>
              <div className="space-y-3 mb-4 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Tổng tiền hàng</span>
                  <span className="font-medium">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Phí vận chuyển</span>
                  <span>-</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between items-center mb-6">
                <span className="font-bold text-gray-900">Tổng thanh toán</span>
                <span className="text-xl font-bold text-gray-900">{formatPrice(cartTotal)}</span>
              </div>
              
              <label className="flex items-start gap-2 mb-4 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 rounded text-ocean-600 focus:ring-ocean-500" 
                />
                <span className="text-xs text-gray-600 leading-tight">
                  Tôi đã đọc & đồng ý với <Link href="#" className="text-ocean-600 hover:underline">Điều khoản sử dụng</Link> & <Link href="#" className="text-ocean-600 hover:underline">Chính sách bảo mật</Link> của Mai Trọng Seafood.
                </span>
              </label>

              {errorMsg && (
                <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-600 rounded-lg text-sm font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="flex items-center justify-between mt-2">
                <Link href="/gio-hang" className="text-ocean-600 text-sm hover:underline font-medium">
                  Trở về giỏ hàng
                </Link>
                <button 
                  onClick={handleCheckout}
                  className="bg-coral hover:bg-coral/90 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-coral/20 flex items-center gap-2"
                >
                  <ShieldCheck className="w-5 h-5" />
                  ĐẶT HÀNG NGAY
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </main>

      {/* Store Selection Modal */}
      {isStoreModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsStoreModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-lg mx-4 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <button 
                onClick={() => setIsStoreModalOpen(false)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              <h3 className="text-lg font-bold text-gray-900 absolute left-1/2 -translate-x-1/2">Chọn cửa hàng</h3>
              <div className="w-10"></div> {/* Spacer for centering */}
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              {/* Location Selectors */}
              <div className="space-y-3 mb-6">
                <div className="relative">
                  <label className="absolute left-3 top-2 text-[10px] text-gray-500 uppercase tracking-wider">Quốc gia</label>
                  <input type="text" value="Vietnam" readOnly className="w-full border border-gray-200 rounded-xl px-4 pb-2 pt-6 text-sm bg-white" />
                </div>
                <div className="relative">
                  <label className="absolute left-3 top-2 text-[10px] text-gray-500 uppercase tracking-wider">Tỉnh / TP</label>
                  <input type="text" value="Hồ Chí Minh" readOnly className="w-full border border-gray-200 rounded-xl px-4 pb-2 pt-6 text-sm bg-white pr-10" />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-gray-400 text-white rounded-full flex items-center justify-center hover:bg-gray-500">
                    <X className="w-3 h-3" />
                  </button>
                </div>
                <div className="flex gap-3">
                  <input type="text" placeholder="Quận / Huyện" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-ocean-500 transition-colors" />
                  <input type="text" placeholder="Phường / Xã" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50/50" readOnly />
                </div>
              </div>

              {/* Stores List */}
              <div className="bg-gray-50 -mx-4 px-4 py-4 min-h-[200px]">
                <h4 className="font-bold text-gray-900 mb-3">Cửa hàng phù hợp</h4>
                
                <label className="block w-full border border-ocean-500 rounded-xl p-4 cursor-pointer bg-white shadow-sm mb-3">
                  <div className="flex items-start gap-3">
                    <div className="pt-1 shrink-0">
                      <input 
                        type="radio" 
                        name="store" 
                        className="w-5 h-5 text-ocean-600 focus:ring-ocean-500" 
                        defaultChecked 
                      />
                    </div>
                    <div>
                      <h5 className="text-[15px] font-medium text-gray-900 mb-1">Mai Trọng Seafood - Tân Bình</h5>
                      <p className="text-sm text-gray-500 leading-relaxed">15/10 Phạm Văn Hai, Phường 01, Quận Tân Bình, Hồ Chí Minh</p>
                    </div>
                  </div>
                </label>

                <label className="block w-full border border-gray-200 rounded-xl p-4 cursor-pointer bg-white hover:border-ocean-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="pt-1 shrink-0">
                      <input 
                        type="radio" 
                        name="store" 
                        className="w-5 h-5 text-ocean-600 focus:ring-ocean-500" 
                      />
                    </div>
                    <div>
                      <h5 className="text-[15px] font-medium text-gray-900 mb-1">Mai Trọng Seafood - Quận 7</h5>
                      <p className="text-sm text-gray-500 leading-relaxed">45 Nguyễn Thị Thập, Phường Tân Phú, Quận 7, Hồ Chí Minh</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-100 bg-white rounded-b-2xl">
              <button 
                onClick={() => {
                  setSelectedStore({
                    name: "Mai Trọng Seafood - Tân Bình",
                    address: "15/10 Phạm Văn Hai, Phường 01, Quận Tân Bình, Hồ Chí Minh"
                  });
                  setIsStoreModalOpen(false);
                }}
                className="w-full h-12 bg-[#0070f3] hover:bg-blue-600 text-white font-medium rounded-xl transition-colors"
              >
                Xong
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="relative bg-white w-full max-w-sm mx-auto rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Đặt hàng thành công!</h2>
            <p className="text-gray-500 mb-8">
              Cảm ơn <strong>{name}</strong> đã đặt hàng tại Mai Trọng Seafood. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất qua số <strong>{phone}</strong> để xác nhận đơn hàng.
            </p>
            <Link 
              href="/"
              className="w-full h-12 bg-ocean-600 hover:bg-ocean-700 text-white font-bold rounded-xl flex items-center justify-center transition-colors"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af; 
        }
      `}} />
    </div>
  );
}
