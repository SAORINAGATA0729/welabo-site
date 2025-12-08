"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <SiteHeader />

      <main>
        {/* Hero Section - Cinematic */}
        <section className="relative h-[110vh] w-full overflow-hidden flex items-center justify-center bg-white">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop')`,
              }}
            />
          </div>
          
          <div className="relative z-10 w-full h-full container mx-auto px-6 flex flex-col justify-center">
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center w-full absolute bottom-32 left-0 px-6 md:px-12">
               <div className="hidden md:block text-white text-[10px] tracking-[0.4em] leading-loose [writing-mode:vertical-rl] h-32 border-r border-white/60 pr-4 drop-shadow-md">
                  SCROLL TO EXPLORE
               </div>
               
               <div className="text-white text-right md:text-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                 <p className="text-xs tracking-[0.4em] mb-6 font-medium uppercase text-white/90">Active Aging</p>
                 <h2 className="text-4xl md:text-7xl lg:text-8xl font-thin tracking-wide leading-[1.1] mb-2">
                   Beyond<br />Age.
                 </h2>
               </div>

               <div className="text-white max-w-xs text-right md:text-left mt-12 md:mt-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  <p className="text-sm font-medium leading-loose tracking-wide text-white/95">
                    年齢を超えて、ただ、美しく。<br />
                    内なる生命力を呼び覚ます、<br />
                    究極のインナーケア。
                  </p>
               </div>
            </div>
          </div>
        </section>

        {/* Concept Section */}
        <section className="py-32 md:py-48 px-6 md:px-12 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <span className="text-[10px] tracking-[0.3em] text-[#8A8A8A] uppercase block mb-6">CONCEPT</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin mb-12 leading-loose tracking-wide">
                年齢を超えて常に躍動し、<br className="hidden md:inline" />
                輝き続ける人生「アクティブエイジング」を<br className="hidden md:inline" />
                価値として提供し続けます
              </h2>
            </div>

            <div className="max-w-4xl mx-auto mb-20">
              <p className="text-sm md:text-base leading-[2.4] text-gray-600 font-light text-justify mb-8">
                we laboは、美と健康を支える「アクティブエイジング」のために、究極のインナーケア製品をお届けします。
                私たちは最新の研究成果に基づき、内なる生命力を活性化させることを追求。
                徹底したエビデンスファーストの姿勢で製品を最適化し、確かな「実感力」を実現しています。
                各分野のエキスパートとともに、美と健康に欠かせない要素を探求し、独自の成分コンプレックスを活用。
                安全性と効果を兼ね備えた理想的な製品を妥協なく作り上げました。
                年齢を超えた輝きと力強さを引き出す、最高峰のインナーケア。新しい可能性に満ちた未来のために、we laboは常に進化を続けます。
              </p>
              <p className="text-sm md:text-base leading-[2.4] text-gray-600 font-light text-justify mb-12">
                人生100年時代において、健康で豊かな時間を過ごすためには、老化のメカニズムを理解し、適切な対策を講じることがますます重要になっています。
                科学の進歩により、老化の過程を解明するために12の老化原因、「エイジングホールマークス」が示されました。
              </p>
              <div className="text-center">
                <Link href="/concept" className="inline-flex items-center gap-2 text-sm tracking-widest text-gray-600 hover:text-[#1A1A1A] transition-colors group">
                  続きを読む <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Aging Hallmarks */}
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-thin mb-6">
                  最先端科学が解明した12の老化要因
                </h3>
                <p className="text-sm text-[#555] leading-[2.4] tracking-wide font-light mb-4">
                  『AGING HALLMARKS（エイジングホールマークス）』とは？
                </p>
                <p className="text-sm text-[#555] leading-[2.4] tracking-wide font-light text-justify max-w-3xl mx-auto">
                  2013年、世界で権威のある老化研究家チームによって作られた、老化の進行に関する生物学的な特徴の共通指標です。さらに2023年に3項目が加わり、老化の要因が9種類から12種類へ更新されました。
                  これらの特徴は、老化の進行や老化に伴う疾患の発生に関わる基本的なメカニズムを示し、老化研究において重要な指標となっています。老化のプロセスを遅らせることができる時代となり、年齢に関係なく、健康で充実した生活を送り続けることを目指す考え方（アクティブエイジング）が今、注目されています。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                   {
                     en: "Genomic Instability",
                     ja: "ゲノムの不安定化",
                     icon: (
                       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M8 7L8 17" strokeLinecap="round"/>
                         <path d="M16 7L16 17" strokeLinecap="round"/>
                       </svg>
                     )
                   },
                   {
                     en: "Telomere Attrition",
                     ja: "テロメアの短縮",
                     icon: (
                       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <path d="M8 4L16 4L20 8L20 16L16 20L8 20L4 16L4 8L8 4Z" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M8 8L16 8" strokeLinecap="round"/>
                         <path d="M8 12L16 12" strokeLinecap="round"/>
                         <path d="M8 16L12 16" strokeLinecap="round"/>
                       </svg>
                     )
                   },
                   {
                     en: "Epigenetic Alterations",
                     ja: "エピジェネティクス変化",
                     icon: (
                       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <circle cx="8" cy="8" r="2"/>
                         <circle cx="16" cy="8" r="2"/>
                         <circle cx="8" cy="16" r="2"/>
                         <circle cx="16" cy="16" r="2"/>
                         <path d="M8 6L8 10" strokeLinecap="round"/>
                         <path d="M16 6L16 10" strokeLinecap="round"/>
                         <path d="M8 14L8 18" strokeLinecap="round"/>
                         <path d="M16 14L16 18" strokeLinecap="round"/>
                         <path d="M6 8L10 8" strokeLinecap="round"/>
                         <path d="M14 8L18 8" strokeLinecap="round"/>
                         <path d="M6 16L10 16" strokeLinecap="round"/>
                         <path d="M14 16L18 16" strokeLinecap="round"/>
                       </svg>
                     )
                   },
                   {
                     en: "Loss of Proteostasis",
                     ja: "タンパク質恒常性の喪失",
                     icon: (
                       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <path d="M4 12L20 12" strokeLinecap="round"/>
                         <path d="M8 6L16 6" strokeLinecap="round"/>
                         <path d="M6 8L18 8" strokeLinecap="round"/>
                         <path d="M7 10L17 10" strokeLinecap="round"/>
                         <path d="M6 14L18 14" strokeLinecap="round"/>
                         <path d="M7 16L17 16" strokeLinecap="round"/>
                         <path d="M8 18L16 18" strokeLinecap="round"/>
                       </svg>
                     )
                   },
                   {
                     en: "Deregulated Nutrient Sensing",
                     ja: "栄養感知の制御不全",
                     icon: (
                       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <circle cx="12" cy="12" r="8"/>
                         <path d="M12 4L12 8" strokeLinecap="round"/>
                         <path d="M12 16L12 20" strokeLinecap="round"/>
                         <path d="M4 12L8 12" strokeLinecap="round"/>
                         <path d="M16 12L20 12" strokeLinecap="round"/>
                         <path d="M8.343 8.343L10.586 10.586" strokeLinecap="round"/>
                         <path d="M13.414 13.414L15.657 15.657" strokeLinecap="round"/>
                         <path d="M8.343 15.657L10.586 13.414" strokeLinecap="round"/>
                         <path d="M13.414 10.586L15.657 8.343" strokeLinecap="round"/>
                       </svg>
                     )
                   },
                   {
                     en: "Mitochondrial Dysfunction",
                     ja: "ミトコンドリアの機能不全",
                     icon: (
                       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <ellipse cx="12" cy="12" rx="6" ry="10"/>
                         <path d="M12 2L12 22" strokeLinecap="round"/>
                         <path d="M6 7L18 7" strokeLinecap="round"/>
                         <path d="M6 17L18 17" strokeLinecap="round"/>
                         <path d="M8 12L16 12" strokeLinecap="round"/>
                       </svg>
                     )
                   },
                   {
                     en: "Cellular Senescence",
                     ja: "細胞老化",
                     icon: (
                       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <circle cx="12" cy="12" r="8"/>
                         <path d="M8 8L16 16" strokeLinecap="round"/>
                         <path d="M16 8L8 16" strokeLinecap="round"/>
                         <circle cx="12" cy="12" r="2" fill="currentColor"/>
                       </svg>
                     )
                   },
                   {
                     en: "Stem Cell Exhaustion",
                     ja: "幹細胞の疲弊",
                     icon: (
                       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <circle cx="8" cy="12" r="3"/>
                         <circle cx="16" cy="12" r="2"/>
                         <path d="M11 12L13 12" strokeLinecap="round"/>
                         <path d="M8 9L8 15" strokeLinecap="round"/>
                         <path d="M16 10L16 14" strokeLinecap="round"/>
                       </svg>
                     )
                   },
                   {
                     en: "Altered Intercellular Communication",
                     ja: "細胞間情報伝達の変調",
                     icon: (
                       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <circle cx="6" cy="12" r="3"/>
                         <circle cx="18" cy="12" r="3"/>
                         <path d="M9 12L15 12" strokeLinecap="round"/>
                         <path d="M9 10L15 14" strokeLinecap="round"/>
                         <path d="M9 14L15 10" strokeLinecap="round"/>
                       </svg>
                     )
                   },
                   {
                     en: "Disabled Macroautophagy",
                     ja: "オートファジー機能低下",
                     icon: (
                       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <circle cx="12" cy="12" r="8"/>
                         <circle cx="12" cy="12" r="4"/>
                         <path d="M8 8L16 16" strokeLinecap="round"/>
                         <path d="M16 8L8 16" strokeLinecap="round"/>
                       </svg>
                     )
                   },
                   {
                     en: "Chronic Inflammation",
                     ja: "慢性炎症",
                     icon: (
                       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <circle cx="12" cy="12" r="6"/>
                         <path d="M12 6L12 18" strokeLinecap="round"/>
                         <path d="M6 12L18 12" strokeLinecap="round"/>
                         <path d="M9 9L15 15" strokeLinecap="round"/>
                         <path d="M15 9L9 15" strokeLinecap="round"/>
                         <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                       </svg>
                     )
                   },
                   {
                     en: "Dysbiosis",
                     ja: "腸内細菌叢の崩れ",
                     icon: (
                       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <circle cx="8" cy="8" r="2"/>
                         <circle cx="16" cy="8" r="2"/>
                         <circle cx="8" cy="16" r="2"/>
                         <circle cx="16" cy="16" r="2"/>
                         <path d="M10 8L14 8" strokeLinecap="round"/>
                         <path d="M10 16L14 16" strokeLinecap="round"/>
                         <path d="M8 10L8 14" strokeLinecap="round"/>
                         <path d="M16 10L16 14" strokeLinecap="round"/>
                       </svg>
                     )
                   }
                 ].map((item, i) => (
                   <div key={i} className="bg-white p-8 border border-gray-100 hover:border-[#D4C5B0] hover:shadow-lg transition-all duration-500 group">
                      <div className="flex items-start justify-between mb-6">
                         <span className="text-xs font-mono text-gray-400 opacity-60 group-hover:opacity-100 transition-opacity">
                            {(i + 1).toString().padStart(2, '0')}
                         </span>
                         <div className="text-gray-400 opacity-60 group-hover:opacity-100 group-hover:text-[#1A1A1A] transition-all">
                            {item.icon}
                         </div>
                      </div>
                      <div className="space-y-2">
                         <h4 className="text-sm font-light tracking-wide text-gray-800 group-hover:text-[#1A1A1A] transition-colors">
                            {item.ja}
                         </h4>
                         <p className="text-xs text-gray-500 font-light tracking-wide">
                            {item.en}
          </p>
        </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-32 md:py-48 bg-[#F9F9F9] text-[#1A1A1A]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-[10px] tracking-[0.3em] text-[#8A8A8A] uppercase block mb-6">PRODUCTS</span>
              <h2 className="text-3xl md:text-4xl font-thin">PRODUCTS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {[
                {
                  id: "luxury-nmn-15000",
                  name: "LUXURY NMN 15000",
                  img: "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png",
                  description: "「NMN」のヒト臨床試験に基づいた理想的な含有量を配合。PQQ、コエンザイムQ10、フィセチンとの組み合わせで、よりパワフルに、かつてない「実感力」を実現しました。"
                },
                {
                  id: "luxury-probiotics",
                  name: "LUXURY PROBIOTICS+",
                  img: "https://welabo.jp/wp-content/uploads/LUXURY_PROBIOTICS_00.jpg",
                  description: "生きて腸まで届く乳酸菌を配合した、お腹の環境について細部まで拘ったサプリメント。59種類の植物発酵エキス、納豆菌、酢酸、酪酸などの生菌が力を合わせ、きれいな腸内フローラ環境を作ります。"
                },
                {
                  id: "honsoureishihoushi",
                  name: "本草霊芝胞子",
                  img: "https://welabo.jp/wp-content/uploads/honsoureishihoushi_01_0-scaled.jpg",
                  description: "190年の歴史を持つ漢方薬局「本草閣」監修・厳選。貴重な国産（長野県）霊芝胞子の1包1000mgを主成分にメシマコブ、アガリクス、冬虫夏草を独自配合しています。"
                }
              ].map((item) => (
                <Link key={item.id} href={`/products/${item.id}`} className="group block bg-white p-8 hover:shadow-xl transition-all duration-500">
                  <div className="relative overflow-hidden mb-6 bg-[#F5F5F5] flex items-center justify-center aspect-[3/4]">
            <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-xl font-light tracking-wide mb-4 text-[#1A1A1A] group-hover:text-[#D4C5B0] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#666] leading-relaxed line-clamp-4 mb-6">
                    {item.description}
                  </p>
                  <span className="text-[10px] tracking-widest text-[#8A8A8A] group-hover:text-[#1A1A1A] transition-colors inline-flex items-center gap-2">
                    商品詳細はこちら <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-32 px-6 md:px-12 bg-white">
          <div className="container mx-auto max-w-4xl">
             <div className="text-center mb-20">
                <span className="text-[10px] tracking-[0.3em] text-[#8A8A8A] uppercase block mb-4">
                  INFORMATION&MEDIA
                </span>
                <h2 className="text-3xl font-light">NEWS</h2>
             </div>

             <div className="space-y-0 border-t border-gray-200">
               {[
                 { date: "2025/11/26", title: "『LUXURY PROBIOTICS＋』三越伊勢丹ベストコスメ2025年間【インナーサポート部門 第1位】を受賞いたしました", tag: "AWARD", id: "1507" },
                 { date: "2025/10/28", title: "「阪神梅田本店 POP UP SHOP 」に出店いたします", tag: "NEWS", id: "1502" },
                 { date: "2025/10/15", title: "「銀座三越 新館7階 GINZA COSME WORLD NEXT➡」に出店いたします", tag: "EVENT", id: "1493" },
                 { date: "2025/08/31", title: "「松坂屋名古屋店 本館6階にてPOP UP イベント」を開催いたします", tag: "EVENT", id: "1471" },
                 { date: "2025/08/29", title: "『LUXURY NMN 15000』が家庭画報.comに掲載されました", tag: "MEDIA", id: "1464" },
               ].map((item, i) => (
                 <Link key={i} href={`/news/${item.id}`} className="group block">
                   <div className="flex flex-col md:flex-row md:items-center gap-4 py-8 border-b border-gray-200 hover:bg-[#FAFAFA] transition-colors px-4">
                      <div className="md:w-32 shrink-0">
                        <span className="text-xs font-serif text-[#8A8A8A]">{item.date}</span>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-base md:text-lg font-light tracking-wide text-[#2C2C2C] group-hover:text-[#1A1A1A] transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                         <ArrowRight className="w-5 h-5 text-[#D4C5B0]" />
                      </div>
                   </div>
                 </Link>
               ))}
             </div>
        </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
