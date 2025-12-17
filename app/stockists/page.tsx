"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MapPin, Phone } from "lucide-react";

const stores = {
  east: [
    { name: "伊勢丹 新宿店 B2F、6F", address: "〒160-0022 東京都新宿区新宿3-14-1", tel: "03-3352-1111" },
    { name: "銀座三越 7F", address: "〒104-8212 東京都中央区銀座4-6-16", tel: "03-3562-1111" },
    { name: "三越日本橋本店 4F", address: "〒103-8001 東京都中央区日本橋室町1-4-1", tel: "03-3241-3311" },
    { name: "京王百貨店新宿店 8F", address: "〒160-8321 東京都新宿区西新宿1-1-4", tel: "0570-022-810" },
    { name: "小田急百貨店 町田店 5F", address: "〒194-8550 東京都町田市原町田6-12-20", tel: "042-720-4286" },
    { name: "伊勢丹浦和店 6F", address: "〒330-0063 埼玉県さいたま市浦和区高砂1-15-1", tel: "048-825-3990" },
    { name: "新潟伊勢丹 3F", address: "〒950-8589 新潟県新潟市中央区八千代1-6-1", tel: "025-242-1111" }
  ],
  west: [
    { name: "ジェイアール京都伊勢丹 B2F", address: "〒600-8555 京都府京都市下京区烏丸通塩小路下ル東塩小路町", tel: "075-352-1111" },
    { name: "大丸京都店 B1F", address: "〒600-8511 京都府京都市下京区四条通高倉西入立売西町79番地", tel: "075-251-6566" },
    { name: "阪神梅田本店 B1F", address: "〒530-8224 大阪市北区梅田1-13-13", tel: "06-6345-1201" },
    { name: "あべのハルカス近鉄本店 ウィング館B2F", address: "〒545-8545 大阪市阿倍野区阿倍野筋1-1-43", tel: "06-6624-1111" },
    { name: "福屋八丁堀本店 6F", address: "〒730-8548 広島県広島市中区胡町6-26", tel: "082-246-6111" }
  ]
};

export default function StockistsPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <SiteHeader />

      <main className="pt-32">
        {/* Header */}
        <section className="container mx-auto px-6 md:px-12 mb-32">
           <div className="text-center max-w-3xl mx-auto">
              <span className="text-[10px] tracking-[0.3em] text-[#8A8A8A] uppercase block mb-6">
                 Retail Locations
              </span>
              <h1 className="text-5xl md:text-7xl font-thin mb-8">SHOPLIST</h1>
           </div>
        </section>

        {/* Stores List */}
        <section className="px-6 md:px-12 pb-32">
           <div className="container mx-auto max-w-[1000px]">
              {/* East Japan */}
              <div className="mb-24">
                 <h2 className="text-2xl md:text-3xl font-thin mb-12 text-gray-700">東日本地方</h2>
                 <div className="space-y-0 border-t border-gray-200">
                   {stores.east.map((store, i) => (
                     <div key={i} className="group border-b border-gray-200 hover:bg-[#FAFAFA] transition-colors">
                       <div className="flex flex-col md:flex-row md:items-start gap-6 py-12 px-4">
                          {/* Image Placeholder */}
                          <div className="w-20 md:w-32 shrink-0">
                             <div className="w-full aspect-square bg-gray-300"></div>
                          </div>
                          
                          {/* Store Info */}
                          <div className="flex-1">
                             <div className="mb-4">
                                <h3 className="text-lg md:text-xl font-light tracking-wide text-[#1A1A1A] mb-2">
                                  {store.name}
                                </h3>
                             </div>
                             
                             <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                   <MapPin className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
                                   <p className="text-sm text-gray-600 leading-relaxed">{store.address}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                   <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                                   <p className="text-sm text-gray-600">TEL: {store.tel}</p>
                                </div>
                             </div>
                          </div>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>

              {/* West Japan */}
              <div>
                 <h2 className="text-2xl md:text-3xl font-thin mb-12 text-gray-700">西日本地方</h2>
                 <div className="space-y-0 border-t border-gray-200">
                   {stores.west.map((store, i) => (
                     <div key={i} className="group border-b border-gray-200 hover:bg-[#FAFAFA] transition-colors">
                       <div className="flex flex-col md:flex-row md:items-start gap-6 py-12 px-4">
                          {/* Image Placeholder */}
                          <div className="w-20 md:w-32 shrink-0">
                             <div className="w-full aspect-square bg-gray-300"></div>
                          </div>
                          
                          {/* Store Info */}
                          <div className="flex-1">
                             <div className="mb-4">
                                <h3 className="text-lg md:text-xl font-light tracking-wide text-[#1A1A1A] mb-2">
                                  {store.name}
                                </h3>
                             </div>
                             
                             <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                   <MapPin className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
                                   <p className="text-sm text-gray-600 leading-relaxed">{store.address}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                   <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                                   <p className="text-sm text-gray-600">TEL: {store.tel}</p>
                                </div>
                             </div>
                          </div>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
           </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
