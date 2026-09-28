import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Camera,
  Play,
} from "lucide-react";

const footerLinks = {
  about: [
    { name: "Giới thiệu Mai Trọng Seafood", href: "#about" },
    { name: "Hệ thống cửa hàng", href: "/he-thong-cua-hang" },
    { name: "Tuyển dụng", href: "#careers" },
    { name: "Liên hệ hợp tác", href: "#contact" },
    { name: "Blog hải sản", href: "#blog" },
  ],
  support: [
    { name: "Hướng dẫn mua hàng", href: "#guide" },
    { name: "Chính sách đổi trả", href: "#return-policy" },
    { name: "Chính sách giao hàng", href: "/giao-nhan-hang" },
    { name: "Chính sách bảo mật", href: "#privacy-policy" },
    { name: "Câu hỏi thường gặp", href: "#faq" },
  ],
  categories: [
    { name: "Tôm các loại", href: "/danh-muc/tom-cac-loai" },
    { name: "Cua - Ghẹ", href: "/danh-muc/cua-ghe" },
    { name: "Cá hồi", href: "/danh-muc/ca-hoi" },
    { name: "Hàu sữa", href: "/danh-muc/hau-sua" },
    { name: "Sushi & Sashimi", href: "/danh-muc/sushi-sashimi" },
    { name: "Hải sản nhập khẩu", href: "/danh-muc/hai-san-nhap-khau" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ocean-900 text-white">
      {/* Newsletter */}
      <div className="bg-ocean-gradient">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Đăng ký nhận ưu đãi
              </h3>
              <p className="text-white/70 text-sm">
                Nhận ngay voucher giảm 50K cho đơn hàng đầu tiên
              </p>
            </div>
            <div className="flex w-full max-w-md">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Nhập email của bạn..."
                className="flex-1 h-12 px-4 rounded-l-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 text-sm"
              />
              <button
                id="newsletter-submit"
                className="h-12 px-6 bg-coral hover:bg-coral/90 text-white font-semibold rounded-r-xl transition-colors text-sm whitespace-nowrap"
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/images/Logo.png"
              alt="Mai Trọng Seafood"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Mai Trọng Seafood - Chuyên cung cấp hải sản tươi sống, nhập khẩu
              chất lượng cao. Giao hàng nhanh 2H tại TP.HCM.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-ocean-300" />
                <span>123 Nguyễn Văn Linh, Q.7, TP.HCM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="w-4 h-4 shrink-0 text-ocean-300" />
                <a
                  href="tel:19000098"
                  className="hover:text-white transition-colors"
                >
                  1900 0098
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="w-4 h-4 shrink-0 text-ocean-300" />
                <a
                  href="mailto:info@maitrongseafood.vn"
                  className="hover:text-white transition-colors"
                >
                  info@maitrongseafood.vn
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Clock className="w-4 h-4 shrink-0 text-ocean-300" />
                <span>8:00 - 21:00 (T2 - CN)</span>
              </div>
            </div>
          </div>

          {/* About links */}
          <div>
            <h4 className="font-bold text-base mb-4">Về chúng tôi</h4>
            <ul className="space-y-2.5">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 className="font-bold text-base mb-4">Hỗ trợ khách hàng</h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Category links */}
          <div>
            <h4 className="font-bold text-base mb-4">Danh mục sản phẩm</h4>
            <ul className="space-y-2.5">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <div className="mt-6">
              <h4 className="font-bold text-sm mb-3">Kết nối với chúng tôi</h4>
              <div className="flex gap-3">
                <a
                  href="#facebook"
                  className="w-9 h-9 bg-white/10 hover:bg-ocean-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href="#instagram"
                  className="w-9 h-9 bg-white/10 hover:bg-ocean-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Camera className="w-4 h-4" />
                </a>
                <a
                  href="#youtube"
                  className="w-9 h-9 bg-white/10 hover:bg-ocean-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Play className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>© 2024 Mai Trọng Seafood. Tất cả quyền được bảo lưu.</p>
            <p>
              GPKD số: 0123456789 do Sở KH&ĐT TP.HCM cấp ngày 01/01/2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
