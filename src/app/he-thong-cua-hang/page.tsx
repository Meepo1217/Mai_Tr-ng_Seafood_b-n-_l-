import type { Metadata } from "next";
import { StoresContent } from "./StoresContent";

export const metadata: Metadata = {
  title: "Hệ Thống Cửa Hàng - Mai Trọng Seafood",
  description:
    "Đến trực tiếp các cửa hàng hoặc điểm bán của Mai Trọng Seafood để tự tay chọn lựa những loại hải sản tươi sống nhất.",
};

export default function StoresPage() {
  return <StoresContent />;
}
