import type { Metadata } from "next";
import { CategoryContent } from "./CategoryContent";
import { categoriesMap } from "@/data/database";

export function generateStaticParams() {
  return Object.keys(categoriesMap).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryInfo = categoriesMap[resolvedParams.slug] || {
    title: "Danh Mục Sản Phẩm",
    description: "Khám phá hải sản tươi ngon nhất.",
  };

  return {
    title: `${categoryInfo.title} - Mai Trọng Seafood`,
    description: categoryInfo.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <CategoryContent slug={resolvedParams.slug} />;
}
