import type { Metadata } from "next";
import { BestSellersContent } from "./BestSellersContent";

export const metadata: Metadata = {
  title: "Hải Sản Bán Chạy - Mai Trọng Seafood",
  description:
    "Khám phá hải sản bán chạy nhất tại Mai Trọng Seafood. Tôm, cua, ghẹ, cá hồi, hàu sữa tươi sống 100%. Giao hàng 2H tại TP.HCM.",
};

export default function BestSellersPage() {
  return <BestSellersContent />;
}
