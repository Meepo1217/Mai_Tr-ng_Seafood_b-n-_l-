"use client";

import { Truck, Shield, Clock, Award, Leaf, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Tươi Sống",
    description:
      "Hải sản được đánh bắt và vận chuyển trong ngày, đảm bảo độ tươi ngon tuyệt đối.",
    color: "text-sea-green",
    bgColor: "bg-sea-green/10",
  },
  {
    icon: Truck,
    title: "Giao Hàng 2 Giờ",
    description:
      "Đội ngũ shipper chuyên nghiệp, giao hàng nhanh chóng trong 2 giờ nội thành TP.HCM.",
    color: "text-ocean-500",
    bgColor: "bg-ocean-50",
  },
  {
    icon: Shield,
    title: "Cam Kết Chất Lượng",
    description:
      "Hoàn tiền 100% nếu sản phẩm không đạt tiêu chuẩn chất lượng như cam kết.",
    color: "text-coral",
    bgColor: "bg-coral/10",
  },
  {
    icon: Clock,
    title: "Đổi Trả 24H",
    description:
      "Hỗ trợ đổi trả trong vòng 24 giờ kể từ khi nhận hàng, hoàn toàn miễn phí.",
    color: "text-amber",
    bgColor: "bg-amber/10",
  },
  {
    icon: Award,
    title: "Giá Tốt Nhất",
    description:
      "Cam kết mức giá cạnh tranh nhất thị trường, không qua trung gian.",
    color: "text-ocean-600",
    bgColor: "bg-ocean-100",
  },
  {
    icon: HeartHandshake,
    title: "Phục Vụ Tận Tâm",
    description:
      "Đội ngũ tư vấn chuyên nghiệp, hỗ trợ khách hàng 7 ngày trong tuần.",
    color: "text-sea-green",
    bgColor: "bg-sea-green/10",
  },
];

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="py-12 md:py-20 bg-gradient-to-b from-ocean-50 to-background"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Tại Sao Chọn Mai Trọng Seafood?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến trải nghiệm mua sắm hải sản tốt nhất
            với chất lượng và dịch vụ hàng đầu
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-ocean-500 to-coral mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-ocean-500/8 transition-all duration-300 group border border-ocean-100/50 hover:border-ocean-200"
            >
              <div
                className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-ocean-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
