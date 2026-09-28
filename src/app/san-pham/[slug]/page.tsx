import { Metadata } from "next";
import { ProductDetailContent } from "./ProductDetailContent";
import { allProducts as products } from "@/data/database";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);

  return {
    title: product ? `${product.name} - Mai Trọng Seafood` : "Sản Phẩm - Mai Trọng Seafood",
    description: product ? `Mua ${product.name} tươi ngon, chất lượng tại Mai Trọng Seafood.` : "Chi tiết sản phẩm",
  };
}

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <ProductDetailContent slug={resolvedParams.slug} />;
}
