"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";
import { ChevronRight, Home, MapPin, Phone, Clock, Store } from "lucide-react";

const stores = [
  {
    id: 1,
    name: "Cửa Hàng Tân Mỹ Quận 7",
    address: "02 Tân Mỹ, Phường Tân Phú, Quận 7, TP.HCM",
    time: "7H - 20H30 (T2 - CN)",
    hotline: "1900 0098",
    type: "store",
    mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15679.822428034877!2d106.70933842356078!3d10.737904962257087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f010426e225%3A0x384e185de9e07653!2zxJDhuqJPIEjhuqJJIFPhuqJOIC0gVMOCTiBN4bu4!5e0!3m2!1svi!2s!4v1677855578188!5m2!1svi!2s",
  },
  {
    id: 2,
    name: "Cửa Hàng Nguyễn Sỹ Sách, Tân Bình",
    address: "A9 Nguyễn Sỹ Sách, Phường 15, Tân Bình, TP.HCM (Đối diện CC Ruby Garden)",
    time: "7H - 20H30 (T2 - CN)",
    hotline: "1900 0098",
    type: "store",
    mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.910508546425!2d106.63008481411678!3d10.818160361381791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175296128a3e3d5%3A0xf149d8f0d1f0b058!2zxJDhuqNvIEjhuqNpIFPhuqNu!5e0!3m2!1svi!2s!4v1558542079983!5m2!1svi!2s",
  },
  {
    id: 3,
    name: "Cửa Hàng Phạm Văn Hai, Tân Bình",
    address: "15/10 Phạm Văn Hai, Phường 1, Quận Tân Bình, TP.HCM (Đầu hẻm 25 Phạm Văn Hai)",
    time: "7H - 20H30 (T2 - CN)",
    hotline: "1900 0098",
    type: "store",
    mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1994159256174!2d106.66263911480094!3d10.796033492308197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2f58fb394b5a0bb4!2zxJDhuqNvIEjhuqNpIFPhuqNu!5e0!3m2!1svi!2s!4v1558542109697!5m2!1svi!2s",
  },
  {
    id: 4,
    name: "Điểm Bán AEON Bình Dương - TTTM",
    address: "Số 01 Đại lộ Bình Dương, Khu phố Bình Giao, Thuận An, Bình Dương (Tầng Trệt)",
    time: "9H - 22H (T2 - CN)",
    hotline: "1900 0098",
    type: "kiosk",
    mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4103931884474!2d106.70979974913539!3d10.932339959250598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175281ca7aa9583%3A0xbd4e60821b659919!2zQUVPTiBNQUxMIELDrG5oIETGsMahbmcgQ2FuYXJ5!5e0!3m2!1svi!2s!4v1586707251460!5m2!1svi!2s",
  },
  {
    id: 5,
    name: "Điểm Bán AEON Tân Phú - TTTM",
    address: "30 Bờ Bao Tân Thắng, P. Sơn Kỳ, Quận Tân Phú, TP.HCM (Tầng Trệt)",
    time: "9H - 22H (T2 - CN)",
    hotline: "1900 0098",
    type: "kiosk",
    mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1647.7923684997015!2d106.61550992502183!3d10.801138124704522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bad625180f3%3A0x36d5da88e966311!2zU2nDqnUgdGjhu4sgQWVvbiBUw6JuIFBow7o!5e0!3m2!1svi!2s!4v1731161554692!5m2!1svi!2s",
  },
  {
    id: 6,
    name: "Điểm Bán AEON Mall Bình Tân - TTTM",
    address: "Số 1 Đường Số 17A, Khu phố 11, Bình Tân, TP.HCM (Tầng Trệt)",
    time: "9H - 22H (T2 - CN)",
    hotline: "1900 0098",
    type: "kiosk",
    mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8908947812247!2d106.60984941469907!3d10.742891562749584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752dcece7b50db%3A0xf53f7643a9134531!2zQWVvbiBtYWxsIGLDrG5oIHTDom4!5e0!3m2!1svi!2s!4v1571934606182!5m2!1svi!2s",
  }
];

export function StoresContent() {
  const [activeStoreId, setActiveStoreId] = useState(stores[0].id);

  const activeStore = stores.find((s) => s.id === activeStoreId) || stores[0];

  return (
    <>
      <Header />

      <main className="flex-1 bg-ocean-50/30">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-ocean-100">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-ocean-600 transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Trang chủ
              </a>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground font-medium">Hệ Thống Cửa Hàng</span>
            </nav>
          </div>
        </div>

        {/* Page header */}
        <div className="bg-gradient-to-r from-ocean-600 to-ocean-800">
          <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Store className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl md:text-4xl font-extrabold text-white">
                Hệ Thống Cửa Hàng
              </h1>
            </div>
            <p className="text-white/90 text-sm md:text-base max-w-2xl">
              Đến trực tiếp các cửa hàng hoặc điểm bán của Mai Trọng Seafood để tự tay chọn lựa những loại hải sản tươi sống nhất.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Store List */}
            <div className="w-full lg:w-1/3 flex flex-col h-[500px] md:h-[650px]">
              <div className="bg-white rounded-t-2xl border border-ocean-100/50 p-4 shadow-sm z-10 flex-shrink-0">
                <h2 className="font-bold text-lg text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-ocean-500" />
                  Danh sách cửa hàng
                </h2>
              </div>
              <div className="bg-white rounded-b-2xl border-x border-b border-ocean-100/50 shadow-sm flex-1 overflow-y-auto overflow-x-hidden p-2 hide-scrollbar">
                <div className="space-y-2">
                  {stores.map((store) => (
                    <div
                      key={store.id}
                      onClick={() => setActiveStoreId(store.id)}
                      className={`p-4 rounded-xl cursor-pointer transition-all border-2 ${
                        activeStoreId === store.id
                          ? "border-ocean-500 bg-ocean-50/50 shadow-md"
                          : "border-transparent hover:border-ocean-200 hover:bg-gray-50"
                      }`}
                    >
                      <h3 className={`font-bold mb-2 ${activeStoreId === store.id ? 'text-ocean-700' : 'text-foreground'}`}>
                        {store.name}
                      </h3>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex gap-2 text-muted-foreground items-start">
                          <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>{store.address}</span>
                        </div>
                        <div className="flex gap-2 text-muted-foreground items-center">
                          <Clock className="w-4 h-4 shrink-0" />
                          <span>{store.time}</span>
                        </div>
                        <div className="flex gap-2 text-ocean-600 font-medium items-center">
                          <Phone className="w-4 h-4 shrink-0" />
                          <span>Hotline: {store.hotline}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Area */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-sm border border-ocean-100/50 overflow-hidden h-[500px] md:h-[650px] relative">
                {/* Active Store floating card on desktop map */}
                <div className="absolute top-4 left-4 right-4 md:right-auto md:w-80 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-ocean-100/50 z-10 animate-fade-in">
                  <h3 className="font-bold text-ocean-700 mb-2">{activeStore.name}</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p className="flex items-start gap-1.5"><MapPin className="w-4 h-4 shrink-0 mt-0.5" />{activeStore.address}</p>
                    <p className="flex items-center gap-1.5"><Clock className="w-4 h-4 shrink-0" />{activeStore.time}</p>
                  </div>
                </div>
                
                <iframe 
                  src={activeStore.mapIframe} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingWidgets />

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .hide-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .hide-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
      `}} />
    </>
  );
}
