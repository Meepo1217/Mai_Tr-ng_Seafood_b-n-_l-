import { Metadata } from "next";
import { CheckoutContent } from "./CheckoutContent";

export const metadata: Metadata = {
  title: "Thanh toán - Mai Trọng Seafood",
  description: "Trang thanh toán an toàn của Mai Trọng Seafood.",
};

export default function CheckoutPage() {
  return <CheckoutContent />;
}
