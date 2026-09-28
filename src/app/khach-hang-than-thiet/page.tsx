import type { Metadata } from "next";
import { LoyaltyContent } from "./LoyaltyContent";

export const metadata: Metadata = {
  title: "Gói Sao Biển - Mai Trọng Seafood",
  description:
    "Tiết kiệm tối đa, thanh toán tiện lợi và tận hưởng những đặc quyền riêng mà không nơi nào có tại Mai Trọng Seafood.",
};

export default function LoyaltyPage() {
  return <LoyaltyContent />;
}
