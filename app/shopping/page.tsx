"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: "luxury-nmn-15000",
    name: "LUXURY NMN 15000",
    price: "¥88,560",
    description: "LUXURY NMN 15000は、高濃度のNMNとあわせて、PQQ・コエンザイムQ10・フィセチンを配合しています。その相乗効果で、より高いパワーが期待されるサプリメントです。",
    img: "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png",
    tagline: "「細胞力」×「実感力」"
  },
  {
    id: "luxury-nmn-15000-3p",
    name: "LUXURY NMN 15000 3本SET 〔3ヶ月体感セット〕",
    price: "¥239,112",
    description: "LUXURY NMN 15000は、高濃度のNMNとあわせて、PQQ・コエンザイムQ10・フィセチンを配合しています。その相乗効果で、より高いパワーが期待されるサプリメントです。",
    img: "https://makeshop-multi-images.akamaized.net/welabo/shopimages/06/00/1_000000000006.png?1694410542",
    tagline: ""
  },
  {
    id: "luxury-nmn-15000-packet",
    name: "LUXURY NMN 15000 袋包装（2か月分）",
    price: "¥176,040",
    description: "2ヶ月分のLUXURY NMN 15000を袋包装でお届けします。ライフスタイルに合わせて無理なく続けられます。",
    img: "https://makeshop-multi-images.akamaized.net/welabo/shopimages/07/00/2_000000000007.png?1707984893",
    tagline: ""
  },
  {
    id: "luxury-probiotics",
    name: "LUXURY PROBIOTICS+",
    price: "¥18,360",
    description: "生きて腸まで届く乳酸菌を配合した、お腹の環境について細部まで拘ったサプリメント。59種類の植物発酵エキス、納豆菌、酢酸、酪酸などの生菌が力を合わせ、きれいな腸内フローラ環境を作ります。",
    img: "https://makeshop-multi-images.akamaized.net/welabo/shopimages/01/00/1_000000000001.jpg?1678209904",
    tagline: "「腸内細菌バランス」×「長寿科学」"
  },
  {
    id: "honsoureishihoushi",
    name: "本草霊芝胞子",
    price: "¥91,800",
    description: "貴重な国産（長野県）霊芝胞子の1包1000mgを主成分にメシマコブ、アガリクス、冬虫夏草を独自配合しています。",
    img: "https://welabo.jp/wp-content/uploads/honsoureishihoushi_01_0-scaled.jpg",
    tagline: "「伝統」×「科学」"
  }
];

export default function ShoppingPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <SiteHeader />

      <main className="pt-24 md:pt-32">
        {/* Header */}
        <section className="container mx-auto px-6 md:px-12 mb-24">
           <div className="text-center max-w-3xl mx-auto">
              <span className="text-[10px] tracking-[0.3em] text-[#8A8A8A] uppercase block mb-6">
                 Online Store
              </span>
              <h1 className="text-3xl md:text-7xl font-thin mb-8">SHOPPING</h1>
              <p className="text-sm leading-[2.4] text-gray-600 font-light">
                we laboの公式オンラインストア
              </p>
           </div>
        </section>

        {/* Product Grid */}
        <section className="container mx-auto px-6 md:px-12 pb-32">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {products.map((product) => (
                   <Link key={product.id} href={`/shopping/${product.id}`} className="group block" prefetch={true} scroll={true}>
                      <div className="relative mb-8 overflow-hidden bg-white" style={{ aspectRatio: '4/4.25' }}>
                         <div 
                           className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-all duration-1000 ease-out group-hover:scale-110`}
                           style={{ 
                             backgroundImage: `url('${product.img}')`,
                             backgroundPosition: 'center center',
                           }}
                         />
                      </div>
                      
                      <div className="text-left pl-2">
                         <h3 className="text-lg font-light tracking-wide mb-2 group-hover:text-[#D4C5B0] transition-colors">
                           {product.name}
                         </h3>
                         <p className="text-sm font-medium mb-4 font-sans">{product.price}<span className="text-xs font-normal text-gray-500 ml-1">（税込）</span></p>
                         <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 font-light">
                           {product.description}
                         </p>
                      </div>
                   </Link>
                ))}
           </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
