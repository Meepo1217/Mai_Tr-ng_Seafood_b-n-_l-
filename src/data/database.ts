import type { Product } from "./products";

const UNSPLASH = {
  shrimp1: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=400&fit=crop&q=80",
  shrimp2: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=400&h=400&fit=crop&q=80",
  shrimp3: "https://images.unsplash.com/photo-1559742811-822873691df8?w=400&h=400&fit=crop&q=80",
  crab1: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=400&h=400&fit=crop&q=80",
  crab2: "https://images.unsplash.com/photo-1579803815615-1207af728795?w=400&h=400&fit=crop&q=80",
  lobster1: "https://images.unsplash.com/photo-1553659971-f01207815844?w=400&h=400&fit=crop&q=80",
  salmon1: "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=400&h=400&fit=crop&q=80",
  salmon2: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=400&fit=crop&q=80",
  oyster1: "https://images.unsplash.com/photo-1606731219412-3dcc10106f23?w=400&h=400&fit=crop&q=80",
  clam1: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=400&fit=crop&q=80",
  squid1: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400&h=400&fit=crop&q=80",
  squid2: "https://images.unsplash.com/photo-1625965416752-9bc15f0eb749?w=400&h=400&fit=crop&q=80",
  fish1: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop&q=80",
  fish2: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=400&fit=crop&q=80",
  sashimi1: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=400&fit=crop&q=80",
  sushi1: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=400&fit=crop&q=80",
  sushi2: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&h=400&fit=crop&q=80",
  seafood1: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&h=400&fit=crop&q=80",
  frozen1: "https://images.unsplash.com/photo-1583344933939-509a202df149?w=400&h=400&fit=crop&q=80",
};

export const categoriesMap: Record<
  string,
  { title: string; description: string; icon: string }
> = {
  "sushi-sashimi": {
    title: "Sushi & Sashimi",
    description: "Thưởng thức ẩm thực Nhật Bản chuẩn vị ngay tại nhà. Tươi ngon, an toàn, chuẩn vị.",
    icon: "🐟",
  },
  "hai-san-dong-lanh": {
    title: "Hải Sản Đông Lạnh",
    description: "Hải sản được cấp đông chuẩn IQF ngay sau khi đánh bắt, giữ trọn vẹn hương vị và dưỡng chất.",
    icon: "❄️",
  },
  "100-tuoi-song": {
    title: "100% Tươi Sống",
    description: "Cam kết hải sản tươi sống, bơi khỏe, đánh bắt trong ngày và giao ngay trong 2H.",
    icon: "💧",
  },
  "hai-san-nhap-khau": {
    title: "Hải Sản Nhập Khẩu",
    description: "Các loại hải sản cao cấp nhập khẩu trực tiếp từ Na Uy, Mỹ, Canada, Hàn Quốc, Nhật Bản.",
    icon: "✈️",
  },
  "ca-hoi": {
    title: "Cá Hồi",
    description: "Cá hồi Na Uy tươi ngon nhập khẩu hàng tuần, giàu Omega-3, cắt thái theo yêu cầu.",
    icon: "🐟",
  },
  "hau-sua": {
    title: "Hàu Sữa",
    description: "Hàu sữa Pháp, hàu sữa Thái Bình Dương béo ngậy, làm sạch chuẩn an toàn vệ sinh.",
    icon: "🦪",
  },
  "ngao-so-oc": {
    title: "Ngao, Sò, Ốc",
    description: "Ngao hai cồi, sò huyết, ốc hương, ốc móng tay... đủ loại sò ốc tươi sống mỗi ngày.",
    icon: "🥚",
  },
  "cua-ghe": {
    title: "Cua - Ghẹ",
    description: "Cua thịt Cà Mau, cua gạch, ghẹ xanh tươi sống chắc thịt, 1 đổi 1 nếu ốp.",
    icon: "🦀",
  },
  "tom-cac-loai": {
    title: "Tôm Các Loại",
    description: "Tôm sú, tôm thẻ, tôm càng xanh, tôm hùm... đủ loại tươi ngon đáp ứng mọi nhu cầu.",
    icon: "🦐",
  },
  muc: {
    title: "Mực",
    description: "Mực lá, mực ống, mực nang, bạch tuộc tươi xanh từ các vùng biển Nha Trang, Phan Thiết.",
    icon: "🦑",
  },
};

const _allProducts: Omit<Product, 'slug'>[] = [
  // ---------------- SUSHI & SASHIMI ----------------
  { id: 201, name: "Set Sashimi Cá Hồi 12 Miếng", price: 259000, originalPrice: 299000, unit: "1 Set", image: UNSPLASH.sashimi1, sold: "12k+", discount: 13, category: "sushi", badges: ["Bán Chạy"] },
  { id: 202, name: "Combo Sushi Tổng Hợp 24 Miếng", price: 399000, originalPrice: 499000, unit: "1 Set", image: UNSPLASH.sushi1, sold: "8k+", discount: 20, category: "sushi", badges: ["Khuyến Mãi"] },
  { id: 203, name: "Trứng Cá Hồi Ikura Nhật Bản", price: 450000, originalPrice: 480000, unit: "100g", image: UNSPLASH.sushi1, sold: "3k+", discount: 6, category: "sushi", badges: ["Nhập khẩu"] },
  { id: 204, name: "Sashimi Sốt Thái & Xwasabi", price: 225000, unit: "Phần", image: UNSPLASH.sashimi1, sold: "4.5k+", category: "sushi", badges: ["Bán Chạy"] },
  { id: 205, name: "Sashimi Tổng Hợp Trúc Đảo", price: 699000, originalPrice: 850000, unit: "Set (3-4 người)", image: UNSPLASH.sashimi1, sold: "1.2k+", discount: 18, category: "sushi", badges: ["Khuyến Mãi", "Bán Chạy"] },
  { id: 206, name: "Sushi Cá Hồi Khè Lửa Phô Mai", price: 185000, unit: "6 Cuộn", image: UNSPLASH.sushi2, sold: "9k+", category: "sushi" },
  { id: 207, name: "Sashimi Sò Đỏ Hokkigai (Nhật)", price: 220000, unit: "10 Miếng", image: UNSPLASH.sashimi1, sold: "2k+", category: "sushi", badges: ["Nhập khẩu"] },
  { id: 208, name: "Nước Tương Kikkoman Nhập Khẩu", price: 65000, unit: "1 Chai 150ml", image: UNSPLASH.sushi2, sold: "35k+", category: "sushi" },

  // ---------------- CÁ HỒI ----------------
  { id: 301, name: "Thân Cá Hồi Phile Tươi (Giao Nhanh 2H)", price: 199000, originalPrice: 220000, unit: "Khay 200g", image: UNSPLASH.salmon1, sold: "19k+", discount: 9, category: "salmon", badges: ["Bán Chạy", "Tươi Sống"] },
  { id: 302, name: "Cá Hồi Nguyên Con Na Uy", price: 349000, originalPrice: 380000, unit: "1Kg", image: UNSPLASH.salmon2, sold: "4k+", discount: 8, category: "salmon", badges: ["Nhập khẩu"] },
  { id: 303, name: "Đầu Cá Hồi Na Uy Tươi", price: 45000, originalPrice: 60000, unit: "1Kg", image: UNSPLASH.salmon1, sold: "12k+", discount: 25, category: "salmon" },
  { id: 304, name: "Lườn Cá Hồi Nhập Khẩu", price: 135000, unit: "500g", image: UNSPLASH.salmon2, sold: "8k+", category: "salmon", badges: ["Bán Chạy"] },
  { id: 305, name: "Xương Cá Hồi Nấu Canh", price: 25000, unit: "1Kg", image: UNSPLASH.salmon1, sold: "20k+", category: "salmon" },
  { id: 306, name: "Cá Hồi Cắt Khúc Lớn", price: 245000, unit: "500g", image: UNSPLASH.salmon2, sold: "3k+", category: "salmon" },

  // ---------------- TÔM ----------------
  { id: 401, name: "Tôm Sú Tươi Sống Size Lớn (15-20 con/kg)", price: 399000, originalPrice: 450000, unit: "1kg", image: "/images/product-shrimp.jpg", sold: "5k+", discount: 11, category: "shrimp", badges: ["Bán Chạy"], isLive: true },
  { id: 402, name: "Tôm Càng Xanh Sống Loại 1", price: 349000, originalPrice: 390000, unit: "1Kg", image: UNSPLASH.shrimp2, sold: "14k+", discount: 11, category: "shrimp", isLive: true },
  { id: 403, name: "Tôm Thẻ Bóc Nõn", price: 185000, unit: "500g", image: UNSPLASH.shrimp1, sold: "6k+", category: "shrimp", badges: ["Đông lạnh"] },
  { id: 404, name: "Tôm Sú Cọp Tự Nhiên Sống", price: 850000, originalPrice: 950000, unit: "1Kg", image: UNSPLASH.shrimp3, sold: "1k+", discount: 10, category: "shrimp", isLive: true, badges: ["Đặc biệt"] },
  { id: 405, name: "Tôm Thẻ Hấp Sẵn Nguyên Con", price: 195000, unit: "500g", image: UNSPLASH.shrimp2, sold: "8k+", category: "shrimp", badges: ["Bán Chạy"] },
  { id: 406, name: "Chả Tôm Biển Dai Ngon", price: 220000, originalPrice: 250000, unit: "500g", image: UNSPLASH.shrimp1, sold: "3k+", discount: 12, category: "shrimp" },
  { id: 407, name: "Tôm Đất Sinh Thái", price: 299000, unit: "1Kg", image: UNSPLASH.shrimp3, sold: "2.5k+", category: "shrimp", isLive: true },

  // ---------------- TÔM HÙM (Nhập khẩu / Tôm) ----------------
  { id: 501, name: "Tôm Hùm Alaska Sống 500g", price: 575000, originalPrice: 745000, unit: "1 Con", image: UNSPLASH.lobster1, sold: "9k+", discount: 23, category: "lobster", badges: ["Nhập khẩu", "Khuyến Mãi"], isLive: true },
  { id: 502, name: "Tôm Hùm Bông Phú Yên Khổng Lồ", price: 1890000, originalPrice: 2200000, unit: "1Kg", image: UNSPLASH.lobster1, sold: "500+", discount: 14, category: "lobster", isLive: true },
  { id: 503, name: "Tôm Hùm Xanh Bơi Sống (Size 3-4 con/kg)", price: 1150000, originalPrice: 1350000, unit: "1Kg", image: UNSPLASH.lobster1, sold: "3k+", discount: 15, category: "lobster", badges: ["Bán Chạy"], isLive: true },
  { id: 504, name: "Đuôi Tôm Hùm Mỹ Đông Lạnh", price: 350000, unit: "2 Đuôi (~300g)", image: UNSPLASH.lobster1, sold: "1.5k+", category: "lobster", badges: ["Đông lạnh", "Nhập khẩu"] },

  // ---------------- CUA - GHẸ ----------------
  { id: 601, name: "Cua Hoàng Đế Đỏ - King Crab Sống", price: 2920000, originalPrice: 2999000, unit: "1 Kg", image: UNSPLASH.crab1, sold: "1k+", discount: 3, category: "crab", badges: ["Bán Chạy", "Nhập khẩu"], isLive: true },
  { id: 602, name: "Cua Thịt Cà Mau Y3 (3 con/kg)", price: 720000, originalPrice: 850000, unit: "1 Kg", image: UNSPLASH.crab1, sold: "15k+", discount: 15, category: "crab", badges: ["Khuyến Mãi"], isLive: true },
  { id: 603, name: "Ghẹ Xanh Tươi Sống Loại 1 (3-4 con/kg)", price: 650000, originalPrice: 750000, unit: "1 Kg", image: UNSPLASH.crab1, sold: "11k+", discount: 13, category: "crab", isLive: true },
  { id: 604, name: "Cua Gạch Cà Mau Hảo Hạng", price: 890000, originalPrice: 990000, unit: "1 Kg", image: UNSPLASH.crab2, sold: "8k+", discount: 10, category: "crab", badges: ["Bán Chạy"], isLive: true },
  { id: 605, name: "Cua Lột Nước Ngọt", price: 320000, unit: "500g", image: UNSPLASH.crab2, sold: "2.1k+", category: "crab", badges: ["Đông lạnh"] },
  { id: 606, name: "Thịt Cua Tươi Gỡ Sẵn", price: 450000, unit: "250g", image: UNSPLASH.crab1, sold: "5k+", category: "crab" },
  { id: 607, name: "Ghẹ Sữa Sạch Lớp Chân", price: 120000, originalPrice: 150000, unit: "500g", image: UNSPLASH.crab2, sold: "7k+", discount: 20, category: "crab" },

  // ---------------- HÀU SỮA ----------------
  { id: 701, name: "Hàu Sữa Pháp Sống Size L", price: 59000, originalPrice: 79000, unit: "1Kg", image: UNSPLASH.oyster1, sold: "45k+", discount: 25, category: "oyster", badges: ["Bán Chạy", "Khuyến Mãi"], isLive: true },
  { id: 702, name: "Ruột Hàu Sữa Làm Sạch", price: 115000, originalPrice: 140000, unit: "500g", image: UNSPLASH.oyster1, sold: "18k+", discount: 18, category: "oyster", badges: ["Bán Chạy"] },
  { id: 703, name: "Hàu Hương (Hàu Sữa Nhật) Nhập Khẩu", price: 290000, unit: "1Kg", image: UNSPLASH.oyster1, sold: "2k+", category: "oyster", badges: ["Nhập khẩu"], isLive: true },
  { id: 704, name: "Set Hàu Nướng Phô Mai Chuẩn Bị Sẵn", price: 155000, unit: "1 Khay (10 con)", image: UNSPLASH.oyster1, sold: "9k+", category: "oyster" },

  // ---------------- NGAO, SÒ, ỐC ----------------
  { id: 801, name: "Ốc Hương Sống Loại Nhỏ (80-100 con/kg)", price: 350000, originalPrice: 420000, unit: "1kg", image: UNSPLASH.clam1, sold: "22k+", discount: 17, category: "clam", badges: ["Khuyến Mãi"], isLive: true },
  { id: 802, name: "Ốc Hương Sống Loại Lớn (40-50 con/kg)", price: 699000, originalPrice: 750000, unit: "1kg", image: UNSPLASH.clam1, sold: "8k+", discount: 7, category: "clam", badges: ["Bán Chạy"], isLive: true },
  { id: 803, name: "Ngao Hai Cồi Sống Nha Trang", price: 289000, unit: "1Kg", image: UNSPLASH.clam1, sold: "14k+", category: "clam", isLive: true },
  { id: 804, name: "Sò Huyết Cồ Kích Thước Khủng", price: 280000, originalPrice: 350000, unit: "1Kg", image: UNSPLASH.clam1, sold: "6k+", discount: 20, category: "clam", badges: ["Bán Chạy"], isLive: true },
  { id: 805, name: "Bào Ngư Hàn Quốc Sống Nhập Khẩu", price: 85000, originalPrice: 99000, unit: "1 Con", image: UNSPLASH.seafood1, sold: "12k+", discount: 14, category: "imported", badges: ["Nhập khẩu"], isLive: true },
  { id: 806, name: "Sò Điệp Nhật Bản Nguyên Vỏ Sống", price: 95000, unit: "1 Con", image: UNSPLASH.clam1, sold: "4k+", category: "imported", badges: ["Nhập khẩu"], isLive: true },
  { id: 807, name: "Ốc Móng Tay Sống Siêu Lớn", price: 160000, unit: "1Kg", image: UNSPLASH.clam1, sold: "10k+", category: "clam", isLive: true },
  { id: 808, name: "Nghêu Trắng (Ngao Sữa) Sống", price: 65000, unit: "1Kg", image: UNSPLASH.clam1, sold: "30k+", category: "clam", isLive: true },

  // ---------------- MỰC ----------------
  { id: 901, name: "Mực Ống Tươi Phan Thiết (3-4 con/kg)", price: 340000, originalPrice: 380000, unit: "1Kg", image: UNSPLASH.squid1, sold: "11k+", discount: 11, category: "squid", isLive: true },
  { id: 902, name: "Chả Mực Hạ Long Giã Tay Đặc Biệt", price: 480000, originalPrice: 550000, unit: "1Kg", image: UNSPLASH.squid2, sold: "9k+", discount: 13, category: "squid", badges: ["Bán Chạy"] },
  { id: 903, name: "Mực Lá Tươi Trọng Lượng Lớn", price: 320000, unit: "1Kg", image: UNSPLASH.squid1, sold: "5k+", category: "squid", isLive: true },
  { id: 904, name: "Bạch Tuộc Khổng Lồ Dai Giòn", price: 290000, originalPrice: 330000, unit: "1Kg", image: UNSPLASH.squid2, sold: "7k+", discount: 12, category: "squid", badges: ["Bán Chạy"], isLive: true },
  { id: 905, name: "Mực Nang Sữa Làm Sạch", price: 190000, unit: "500g", image: UNSPLASH.squid1, sold: "4k+", category: "squid", badges: ["Đông lạnh"] },
  { id: 906, name: "Khô Mực Phú Quốc Hảo Hạng", price: 950000, originalPrice: 1100000, unit: "1Kg", image: UNSPLASH.squid2, sold: "3k+", discount: 14, category: "squid" },

  // ---------------- CÁ BẮT ĐƯỢC ----------------
  { id: 1001, name: "Cá Chẽm Fillet Tươi Cắt Đẹp", price: 149000, unit: "300g", image: UNSPLASH.fish1, sold: "8k+", category: "fish" },
  { id: 1002, name: "Cá Tầm Sống Đà Lạt Bơi Khoe", price: 280000, unit: "1Kg", image: UNSPLASH.fish2, sold: "3k+", category: "fish", isLive: true },
  { id: 1003, name: "Cá Mú Đỏ Tươi Sống Nhập Cao Cấp", price: 950000, originalPrice: 1100000, unit: "1Kg", image: UNSPLASH.fish1, sold: "1k+", discount: 14, category: "fish", badges: ["Bán Chạy"], isLive: true },
  { id: 1004, name: "Cá Thu Cắt Khúc Lớn Biển", price: 290000, unit: "1Kg", image: UNSPLASH.fish2, sold: "6k+", category: "fish" },
  { id: 1005, name: "Cá Bóp Biển Cắt Lát Khúc", price: 320000, unit: "1Kg", image: UNSPLASH.fish1, sold: "5k+", category: "fish" },

  // ---------------- ĐÔNG LẠNH ----------------
  { id: 1101, name: "Cồi Sò Điệp Nhật (Đông Lạnh Size Lớn)", price: 490000, originalPrice: 550000, unit: "500g", image: UNSPLASH.frozen1, sold: "4k+", discount: 11, category: "frozen", badges: ["Đông lạnh", "Nhập khẩu", "Khuyến Mãi"] },
  { id: 1102, name: "Răng Mực Sạch (Đông Lạnh)", price: 140000, unit: "500g", image: UNSPLASH.frozen1, sold: "5k+", category: "frozen", badges: ["Đông lạnh"] },
  { id: 1103, name: "Thịt Lõi Vai Bò Mỹ Cắt Slice", price: 250000, unit: "500g", image: UNSPLASH.frozen1, sold: "9k+", category: "frozen", badges: ["Đông lạnh", "Bán Chạy"] },
  { id: 1104, name: "Sụn Gà Thái Lan Đông Lạnh", price: 155000, originalPrice: 180000, unit: "1Kg", image: UNSPLASH.frozen1, sold: "7k+", discount: 14, category: "frozen", badges: ["Đông lạnh"] },
  { id: 1105, name: "Phi Lê Gà Áp Chảo Cấp Đông", price: 90000, unit: "1Kg", image: UNSPLASH.frozen1, sold: "2k+", category: "frozen", badges: ["Đông lạnh"] },

  // ---------------- COMBO (HỖN HỢP) ----------------
  { id: 1201, name: "Combo Hải Sản Nướng BBQ 6 Người", price: 990000, originalPrice: 1250000, unit: "1 Set", image: UNSPLASH.seafood1, sold: "2.5k+", discount: 21, category: "combo", badges: ["Khuyến Mãi"] },
  { id: 1202, name: "Set Lẩu Thái Hải Sản Tổng Hợp", price: 450000, originalPrice: 520000, unit: "Set 4 Người", image: UNSPLASH.seafood1, sold: "6k+", discount: 13, category: "combo", badges: ["Bán Chạy"] },
  { id: 1203, name: "Combo Nhâm Nhi Ốc Hương & Cua", price: 850000, unit: "1 Set", image: UNSPLASH.seafood1, sold: "1k+", category: "combo" },
];

function slugify(text: string) {
  return text.toString().toLowerCase()
    .normalize('NFD') // split accented characters
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export const allProducts: Product[] = _allProducts.map(p => ({
  ...p,
  slug: slugify(p.name)
}));
