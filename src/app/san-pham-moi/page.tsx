import type { Metadata } from "next";
import { NewProductsContent } from "./NewProductsContent";

export const metadata: Metadata = {
  title: "Sản Phẩm Mới - Mai Trọng Seafood",
  description:
    "Khám phá các sản phẩm hải sản tươi sống mới nhất vừa cập bến Mai Trọng Seafood với giá thành vô cùng hấp dẫn.",
};

export default function NewProductsPage() {
  return <NewProductsContent />;
}
