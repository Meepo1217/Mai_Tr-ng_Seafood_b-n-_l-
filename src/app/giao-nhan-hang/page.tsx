import type { Metadata } from "next";
import { DeliveryContent } from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Giao Nhận Hàng - Mai Trọng Seafood",
  description:
    "Chính sách giao nhận hàng siêu tốc 2H tại nội thành phố Hồ Chí Minh và chính sách giao hàng toàn quốc của Mai Trọng Seafood.",
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
