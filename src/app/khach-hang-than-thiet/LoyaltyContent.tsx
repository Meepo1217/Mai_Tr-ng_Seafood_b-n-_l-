"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";
import { CheckCircle2, ChevronRight, Home, Star, ShieldCheck, Gift, CreditCard } from "lucide-react";

export function LoyaltyContent() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-ocean-50/30">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-ocean-100">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-ocean-600 transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Trang chủ
              </a>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground font-medium">Khách Hàng Thân Thiết</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-ocean-900 text-white overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
              alt="Gói Sao Biển"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ocean-900 to-ocean-900/60" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold tracking-wider uppercase text-yellow-400">
                Gói Sao Biển
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              MUA GÓI SAO BIỂN <br /> HƯỞNG ĐẶC QUYỀN RIÊNG
            </h1>
            <p className="text-lg md:text-xl text-ocean-100 max-w-2xl mx-auto mb-10">
              Tiết kiệm tối đa, thanh toán tiện lợi và tận hưởng những đặc quyền VIP mà không nơi nào có tại Mai Trọng Seafood.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              4 ĐẶC QUYỀN VƯỢT TRỘI
            </h2>
            <div className="w-24 h-1 bg-ocean-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Gift,
                title: "TIẾT KIỆM TỐI ĐA",
                desc: "Nạp trước nhận thêm đến 15% (tương đương 4,5 triệu) vào tài khoản điểm thưởng.",
                color: "text-rose-500",
                bg: "bg-rose-50"
              },
              {
                icon: CreditCard,
                title: "THANH TOÁN TIỆN LỢI",
                desc: "Dùng điểm trực tiếp thay tiền mặt khi mua sắm tại mọi kênh của Mai Trọng Seafood.",
                color: "text-blue-500",
                bg: "bg-blue-50"
              },
              {
                icon: Star,
                title: "ĐẶC QUYỀN VIP",
                desc: "Trải nghiệm sản phẩm mới, dịch vụ quà tặng VIP, Chef at home độc quyền.",
                color: "text-amber-500",
                bg: "bg-amber-50"
              },
              {
                icon: ShieldCheck,
                title: "AN TÂM TUYỆT ĐỐI",
                desc: "Hạn mức linh hoạt, đảm bảo an toàn tuyệt đối, gia hạn tự động đối với số dư.",
                color: "text-emerald-500",
                bg: "bg-emerald-50"
              }
            ].map((f, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-ocean-100/50 hover:shadow-lg transition-shadow text-center group">
                <div className={`w-16 h-16 mx-auto rounded-2xl ${f.bg} flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform`}>
                  <f.icon className={`w-8 h-8 ${f.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="bg-white py-12 md:py-20 border-t border-ocean-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                CHỌN GÓI THÀNH VIÊN CỦA BẠN
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Các gói thẻ trả trước mang lại sự tiện lợi và vô vàn lợi ích cho khách hàng thường xuyên thưởng thức hải sản.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Basic */}
              <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col">
                <div className="bg-gray-100 p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 tracking-wider">BASIC</h3>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">
                      Giải pháp linh hoạt cho nhu cầu hằng ngày, tiết kiệm hơn.
                    </p>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      5.000.000<span className="text-lg text-muted-foreground font-normal ml-1">VNĐ</span>
                    </div>
                    <div className="bg-green-50 text-green-700 text-sm font-semibold py-2 px-4 rounded-full">
                      Tặng 7% (350.000 VNĐ)
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
                      <span>Quà tặng sinh nhật trị giá 200k</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
                      <span>Ưu tiên mua hải sản quý hiếm</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
                      <span>Nhận thông tin ưu đãi sớm nhất</span>
                    </li>
                  </ul>

                  <button className="w-full py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-colors">
                    MUA GÓI BASIC
                  </button>
                </div>
              </div>

              {/* Standard */}
              <div className="bg-white rounded-3xl border-2 border-ocean-500 overflow-hidden shadow-lg relative transform md:-translate-y-4 flex flex-col">
                <div className="absolute top-0 inset-x-0 h-1 bg-ocean-500" />
                <div className="absolute top-4 right-4 bg-ocean-100 text-ocean-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Phổ biến nhất
                </div>
                <div className="bg-ocean-50 p-6 text-center pt-10">
                  <h3 className="text-xl font-bold text-ocean-600 tracking-wider">STANDARD</h3>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">
                      Lựa chọn hoàn hảo với ưu đãi hấp dẫn và giao hàng ưu tiên.
                    </p>
                    <div className="text-3xl font-bold text-ocean-600 mb-2">
                      10.000.000<span className="text-lg text-ocean-600/60 font-normal ml-1">VNĐ</span>
                    </div>
                    <div className="bg-ocean-100 text-ocean-700 text-sm font-semibold py-2 px-4 rounded-full">
                      Tặng 10% (1.000.000 VNĐ)
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-ocean-500 shrink-0" />
                      <span className="font-medium">Quà tặng sinh nhật trị giá 500k</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-ocean-500 shrink-0" />
                      <span>Ưu tiên mua hải sản quý hiếm</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-ocean-500 shrink-0" />
                      <span>Nhận thông tin ưu đãi sớm nhất</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-ocean-500 shrink-0" />
                      <span>Quà tặng trải nghiệm SP mới</span>
                    </li>
                  </ul>

                  <button className="w-full py-3.5 bg-ocean-500 hover:bg-ocean-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-ocean-500/20">
                    MUA GÓI STANDARD
                  </button>
                </div>
              </div>

              {/* Premier */}
              <div className="bg-white rounded-3xl border border-amber-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col">
                <div className="bg-amber-50 p-6 text-center">
                  <h3 className="text-xl font-bold text-amber-600 tracking-wider">PREMIER</h3>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">
                      Đặc quyền cao cấp, dịch vụ ưu tiên và quyền lợi VIP trọn vẹn.
                    </p>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      30.000.000<span className="text-lg text-muted-foreground font-normal ml-1">VNĐ</span>
                    </div>
                    <div className="bg-amber-100 text-amber-700 text-sm font-semibold py-2 px-4 rounded-full">
                      Tặng 15% (4.500.000 VNĐ)
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                      <span className="font-medium">Quà sinh nhật cao cấp (1 triệu)</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                      <span className="font-medium">Miễn phí 100% phí giao hàng</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                      <span>Dịch vụ Chef At Home miễn phí</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                      <span>Mọi quyền lợi của gói Standard</span>
                    </li>
                  </ul>

                  <button className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-amber-500/20">
                    MUA GÓI PREMIER
                  </button>
                </div>
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
