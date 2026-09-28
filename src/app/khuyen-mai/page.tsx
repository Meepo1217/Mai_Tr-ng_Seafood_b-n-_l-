import type { Metadata } from "next";
import { PromotionsContent } from "./PromotionsContent";

export const metadata: Metadata = {
  title: "Khuyến Mãi - Mai Trọng Seafood",
  description:
    "Cập nhật những chương trình khuyến mãi và flash sale hấp dẫn nhất từ Mai Trọng Seafood. Hải sản tươi sống, giá cả phải chăng, giao hàng 2H tại TP.HCM.",
};

export default function PromotionsPage() {
  return <PromotionsContent />;
}
