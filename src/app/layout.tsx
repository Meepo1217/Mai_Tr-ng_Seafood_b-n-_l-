import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mai Trọng Seafood - Hải Sản Tươi Sống Giao Tận Nơi",
  description:
    "Mai Trọng Seafood - Chuyên cung cấp hải sản tươi sống, nhập khẩu. Giao hàng nhanh 2H tại TP.HCM. Tôm, cua, ghẹ, cá hồi, hàu, sò, ốc tươi sống 100%.",
  keywords: [
    "hải sản tươi sống",
    "mua hải sản online",
    "hải sản giao tận nơi",
    "Mai Trọng Seafood",
    "tôm hùm",
    "cá hồi",
    "hàu sữa",
    "ghẹ xanh",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[var(--font-be-vietnam)]">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
