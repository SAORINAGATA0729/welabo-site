"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    id: "luxury-nmn-15000",
    name: "LUXURY NMN 15000",
    tagline: "「細胞力」×「実感力」",
    description: "「NMN」のヒト臨床試験に基づいた理想的な含有量を配合。PQQ、コエンザイムQ10、フィセチンとの組み合わせで、よりパワフルに、かつてない「実感力」を実現しました。",
    img: "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png"
  },
  {
    id: "luxury-probiotics",
    name: "LUXURY PROBIOTICS+",
    tagline: "「腸内細菌バランス」×「長寿科学」",
    description: "生きて腸まで届く乳酸菌を配合した、お腹の環境について細部まで拘ったサプリメント。59種類の植物発酵エキス、納豆菌、酢酸、酪酸などの生菌が力を合わせ、きれいな腸内フローラ環境を作ります。",
    img: "https://welabo.jp/wp-content/uploads/LUXURY_PROBIOTICS_00.jpg"
  },
  {
    id: "honsoureishihoushi",
    name: "本草霊芝胞子",
    tagline: "「伝統」×「科学」",
    description: "貴重な国産（長野県）霊芝胞子の1包1000mgを主成分にメシマコブ、アガリクス、冬虫夏草を独自配合しています。",
    img: "https://welabo.jp/wp-content/uploads/honsoureishihoushi_01_0-scaled.jpg"
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <SiteHeader />

      <main className="pt-32">
        {/* Header */}
        <section className="mb-32">
           <div className="container mx-auto px-6 md:px-12">
           <div className="text-center max-w-3xl mx-auto">
              <span className="text-[10px] tracking-[0.3em] text-[#8A8A8A] uppercase block mb-6">
                 Collection
              </span>
              <h1 className="text-3xl md:text-7xl font-thin mb-8">PRODUCTS</h1>
              <p className="text-sm leading-[2.4] text-gray-600 font-light whitespace-pre-line">
                輝き続ける人生を支える「アクティブエイジング」<br />
                we laboは、最新の研究成果に基づいたエイジングケア製品を展開しています。
              </p>
           </div>
           </div>
        </section>

        {/* Product List */}
        <section className="pb-32">
           <div className="container mx-auto px-6 md:px-12 space-y-40">
              {products.map((product, index) => (
                 <div key={product.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}>
                    <div className="w-full lg:w-1/2 aspect-[4/5] relative bg-[#F5F5F5] overflow-hidden group cursor-pointer">
                       <Link href={`/products/${product.id}`}>
                          <div 
                            className={`absolute inset-0 transition-transform duration-[1.5s] group-hover:scale-105 ${
                              ['honsoureishihoushi', 'luxury-nmn-15000', 'luxury-probiotics'].includes(product.id)
                                ? 'bg-cover bg-center' 
                                : 'bg-contain bg-no-repeat bg-center p-8'
                            }`}
                            style={{ backgroundImage: `url('${product.img}')` }}
                          />
                       </Link>
                    </div>
                    
                    <div className="w-full lg:w-1/2">
                       <h2 className="text-3xl md:text-5xl font-thin mb-4">{product.name}</h2>
                       <p className="text-sm leading-[2.4] text-gray-600 font-light mb-12 text-justify max-w-md">
                          {product.description}
                       </p>
                       <div className="flex flex-col sm:flex-row gap-4">
                         <Link href={`/products/${product.id}`} className="w-full sm:w-auto">
                            <Button variant="outline" className="w-full sm:w-auto rounded-full px-10 py-6 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all text-xs tracking-[0.2em]">
                               詳細を見る
                            </Button>
                         </Link>
                         <Link href={`/shopping/${product.id}`} className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto rounded-full px-10 py-6 bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-all text-xs tracking-[0.2em]">
                               オンラインで購入
                            </Button>
                         </Link>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
