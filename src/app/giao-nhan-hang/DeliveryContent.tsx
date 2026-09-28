"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";
import { ChevronRight, Home, Truck, CreditCard, Store, Plane } from "lucide-react";

export function DeliveryContent() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-ocean-50/30 pb-16">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-ocean-100">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-ocean-600 transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Trang chủ
              </a>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground font-medium">Chính Sách Giao Nhận</span>
            </nav>
          </div>
        </div>

        {/* Page header */}
        <div className="bg-gradient-to-r from-ocean-600 to-ocean-800 text-white">
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
              <Truck className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              CHÍNH SÁCH GIAO NHẬN HÀNG
            </h1>
            <p className="text-ocean-100 max-w-2xl mx-auto text-lg">
              Mai Trọng Seafood cam kết giao hải sản tươi sống hỏa tốc 2H tại TP.HCM, đảm bảo chất lượng hoàn hảo đến tận tay bạn.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          
          {/* Main Info */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-ocean-100 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ocean-50 rounded-bl-full -z-10" />
            
            <h2 className="text-xl font-bold text-ocean-700 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-ocean-100 flex items-center justify-center text-ocean-600 shrink-0">1</span>
              Thời Gian Giao Hàng
            </h2>
            <div className="space-y-4 text-foreground/80 pl-10">
              <p>
                <strong className="text-foreground">Giao hàng hỏa tốc trong 2 giờ</strong> kể từ khi xác nhận đơn hàng thành công.
              </p>
              <p>
                Thời gian xử lý đơn hàng từ <strong>8H - 20H30 (Thứ 2 - Chủ Nhật)</strong>. Các đơn hàng đặt ngoài khung giờ này sẽ được giao vào sáng ngày hôm sau.
              </p>
              <div className="bg-ocean-50 p-4 rounded-xl inline-block mt-2">
                <p className="font-semibold text-ocean-800 mb-1">Khách hàng có thể đặt hàng qua:</p>
                <ul className="list-disc pl-5 space-y-1 text-ocean-700/80">
                  <li>Hotline: <strong className="text-ocean-700">1900 0098</strong></li>
                  <li>Website: <a href="https://daohaisan.vn" className="underline hover:text-ocean-500">https://maitrongseafood.vn</a></li>
                  <li>Messenger: m.me/maitrongseafood</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-ocean-100 mb-8">
            <h2 className="text-xl font-bold text-ocean-700 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-ocean-100 flex items-center justify-center text-ocean-600 shrink-0">2</span>
              Khu Vực Giao Hàng & Phí Ship
            </h2>

            <div className="pl-10 space-y-8">
              {/* HCM */}
              <div>
                <h3 className="font-bold text-lg text-foreground mb-4 border-l-4 border-ocean-500 pl-3">2.1 Giao hàng tại TP. Hồ Chí Minh</h3>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border border-green-100 bg-green-50/30 p-4 rounded-xl">
                    <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                      <Truck className="w-4 h-4" /> [Giao 2H] Khu vực Trung tâm
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">Q1, Q3, Q4, Q5, Q6, Q7, Q10, Q11, Tân Bình, Tân Phú, Phú Nhuận, Bình Thạnh, Gò Vấp</p>
                    <div className="bg-white px-3 py-2 rounded border border-green-100 text-sm">
                      Nhận đơn từ 100K + Ship 30K<br/>
                      <strong className="text-green-600">Miễn phí ship đơn từ 1 Triệu</strong>
                    </div>
                  </div>

                  <div className="border border-orange-100 bg-orange-50/30 p-4 rounded-xl">
                    <h4 className="font-bold text-orange-700 mb-2 flex items-center gap-2">
                      <Truck className="w-4 h-4" /> [Giao 2H] Khu vực Ngoại ô
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">Quận 8, 12, Bình Tân</p>
                    <div className="bg-white px-3 py-2 rounded border border-orange-100 text-sm mt-7">
                      Nhận đơn từ 100K + Ship 30K
                    </div>
                  </div>

                  <div className="border border-blue-100 bg-blue-50/30 p-4 rounded-xl">
                    <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                      <Truck className="w-4 h-4" /> [Giao 2H] Thành phố Thủ Đức
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">Quận 2, Quận 9, Quận Thủ Đức</p>
                    <div className="bg-white px-3 py-2 rounded border border-blue-100 text-sm">
                      Nhận đơn từ 300K + Ship 40K
                    </div>
                  </div>

                  <div className="border border-gray-100 bg-gray-50/50 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <Truck className="w-4 h-4" /> [Giao 2H-3H] Khu vực Huyện
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">Hóc Môn, Nhà Bè, Bình Chánh</p>
                    <div className="bg-white px-3 py-2 rounded border border-gray-100 text-sm">
                      Nhận đơn từ 300K + Ship 50K
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col md:flex-row gap-4">
                  <div className="flex-1 bg-gray-50 p-4 rounded-xl text-sm">
                    <strong>[Giao 2H-3H] Huyện Củ Chi:</strong> Nhận đơn từ 1 Triệu + Ship 150K
                  </div>
                  <div className="flex-1 bg-gray-50 p-4 rounded-xl text-sm">
                    <strong>[Giao 3H-4H] Huyện Cần Giờ:</strong> Nhận đơn từ 1 Triệu + Ship 200K
                  </div>
                </div>
              </div>

              {/* Tinh khac */}
              <div>
                <h3 className="font-bold text-lg text-foreground mb-4 border-l-4 border-ocean-500 pl-3">2.2 Giao hàng ở các tỉnh khác</h3>
                
                <div className="space-y-4">
                  <div className="border border-ocean-100 p-4 rounded-xl flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-ocean-50 flex items-center justify-center shrink-0">
                      <Truck className="w-5 h-5 text-ocean-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Gửi hàng xe khách (Miền Tây, Cao Nguyên, Nam Trung Bộ)</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Nhận giao hàng từ 1 triệu trở lên + Phí đóng thùng (Đơn trên 3 triệu miễn phí thùng) + Phí gửi chành xe (50K - 150K). Khách hàng nhận tại nhà xe hoặc dịch vụ hỏa tốc 24H.
                      </p>
                    </div>
                  </div>

                  <div className="border border-ocean-100 p-4 rounded-xl flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-ocean-50 flex items-center justify-center shrink-0">
                      <Plane className="w-5 h-5 text-ocean-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Gửi hàng đường hàng không (Quảng Ngãi đến Phía Bắc)</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Chỉ nhận giao hàng từ 1 triệu trở lên + Phí đóng thùng (Free từ 3 triệu) + Phí hàng không. Khách nhận tại sân bay hoặc nhận tại nhà (thêm cước từ sân bay về nhà).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-ocean-100">
              <h2 className="text-xl font-bold text-ocean-700 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-ocean-100 flex items-center justify-center text-ocean-600 shrink-0">3</span>
                Thanh Toán Linh Hoạt
              </h2>
              <div className="pl-10">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-muted-foreground" />
                    Thanh toán khi nhận hàng (COD)
                  </li>
                  <li className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-ocean-500" />
                    Chuyển khoản qua mã QR
                  </li>
                  <li className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-pink-500" />
                    Thanh toán Online qua Ví MoMo
                  </li>
                  <li className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-blue-500" />
                    Thanh toán cổng VNPay (ATM/Visa)
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  * Các đơn hàng ngoài khu vực TP.HCM cần thanh toán trước 100% giá trị đơn hàng.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-ocean-100">
              <h2 className="text-xl font-bold text-ocean-700 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-ocean-100 flex items-center justify-center text-ocean-600 shrink-0">4</span>
                Mua Hàng Trực Tiếp
              </h2>
              <div className="pl-10">
                <ul className="space-y-3 mb-4 text-sm text-foreground/80">
                  <li className="flex gap-2">
                    <Store className="w-4 h-4 text-ocean-500 shrink-0 mt-0.5" />
                    A9 Nguyễn Sỹ Sách, P.15, Tân Bình
                  </li>
                  <li className="flex gap-2">
                    <Store className="w-4 h-4 text-ocean-500 shrink-0 mt-0.5" />
                    15/10 Phạm Văn Hai, P.1, Tân Bình
                  </li>
                  <li className="flex gap-2">
                    <Store className="w-4 h-4 text-ocean-500 shrink-0 mt-0.5" />
                    02 Tân Mỹ, P. Tân Phú, Quận 7
                  </li>
                </ul>
                <a href="/he-thong-cua-hang" className="text-ocean-600 font-semibold hover:underline flex items-center gap-1 text-sm">
                  Xem tất cả chi nhánh <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
