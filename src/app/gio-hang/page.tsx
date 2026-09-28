import { Metadata } from "next";
import { CartContent } from "./CartContent";

export const metadata: Metadata = {
  title: "Giỏ hàng của bạn - Mai Trọng Seafood",
  description: "Xem và quản lý các sản phẩm hải sản tươi sống trong giỏ hàng của bạn tại Mai Trọng Seafood.",
};

export default function CartPage() {
  return <CartContent />;
}
