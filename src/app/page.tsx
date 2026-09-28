import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FlashSaleSection } from "@/components/FlashSaleSection";
import { ProductSection } from "@/components/ProductSection";
import { PromoBanner } from "@/components/PromoBanner";
import { WhyUsSection } from "@/components/WhyUsSection";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";
import {
  bestSellerProducts,
  freshProducts,
  sushiProducts,
  newProducts,
} from "@/data/products";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <HeroSection />

        <CategoryGrid />

        <ProductSection
          id="new-products"
          title="Sản Phẩm Mới"
          subtitle="Khám phá ngay những hải sản mới nhất vừa cập bến Mai Trọng Seafood"
          products={newProducts}
          seeMoreHref="/san-pham-moi"
          bgColor="bg-ocean-50/30"
        />

        <FlashSaleSection />

        <ProductSection
          id="best-sellers"
          title="Hải Sản Bán Chạy"
          subtitle="Sản phẩm được yêu thích nhất tại Mai Trọng Seafood"
          products={bestSellerProducts}
          seeMoreHref="/hai-san-ban-chay"
          bgColor="bg-white"
        />

        <PromoBanner />

        <ProductSection
          id="fresh"
          title="100% Tươi Sống"
          subtitle="Cam kết hải sản tươi sống, đánh bắt trong ngày"
          products={freshProducts}
          seeMoreHref="/danh-muc/100-tuoi-song"
          bgColor="bg-ocean-50/50"
        />

        <ProductSection
          id="sushi"
          title="Sushi & Sashimi Deli"
          subtitle="Thưởng thức ẩm thực Nhật Bản chuẩn vị ngay tại nhà"
          products={sushiProducts}
          seeMoreHref="/danh-muc/sushi-sashimi"
          bgColor="bg-white"
        />

        <WhyUsSection />
      </main>

      <Footer />

      <FloatingWidgets />
    </>
  );
}
