"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ConceptPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <SiteHeader />

      <main className="pt-32">
        {/* Header Section */}
        <section className="container mx-auto px-6 md:px-12 mb-32">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-12 mb-20">
            <h1 className="text-3xl md:text-9xl font-thin tracking-wide leading-[0.8]">
              CONCEPT
            </h1>
            <div className="w-full h-[1px] bg-[#1A1A1A] md:flex-1 mb-6" />
            <p className="text-xs tracking-[0.2em] uppercase mb-6 text-gray-500">
              Active Aging
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/2">
               <h2 className="text-2xl md:text-4xl font-normal leading-relaxed mb-12">
                 年齢を超えて常に躍動し、<br />
                 輝き続ける人生<br />
                 「アクティブエイジング」<br />
                 を価値として提供し続けます
               </h2>
               <div className="w-12 h-[1px] bg-[#D4C5B0] mb-12" />
            </div>
            <div className="lg:w-1/2 relative">
               <div className="aspect-video w-full bg-gray-300"></div>
            </div>
          </div>
          <div className="mt-12 lg:w-full">
            <div className="space-y-6">
              <p className="text-sm leading-[2.4] text-gray-600 font-light">
                we laboは、美と健康を支える「アクティブエイジング」のために、こだわり抜いたインナーケア製品をお届けします。最新の知見に基づき、内側からの健やかさを支えることを追求。徹底したエビデンスファーストの姿勢のもと、"実感"頂ける製品づくりを大切にしております。各分野のエキスパートと連携し、美と健康に欠かせない要素を探求。独自の成分コンプレックスを活かしながら、上質さと安全性の両立を追求し、理想的な製品づくりに妥協なく取り組んでいます。年齢を超え、自分らしく輝き続けるために、洗練された品質のインナーケアをお届けします。新しい可能性に満ちた未来のために、we laboはこれからも進化を続けます。
              </p>
              <p className="text-sm leading-[2.4] text-gray-600 font-light">
                人生100年時代において、健康で豊かな時間を過ごすためには、老化のメカニズムを理解し、適切な対策を講じることがますます重要になっています。科学の進歩により、老化の過程を解明するために12の老化原因、「エイジングホールマークス」が明らかになりました。
              </p>
            </div>
          </div>
        </section>

        {/* Aging Hallmarks Section */}
        <section className="py-16 md:py-32 bg-[#F9F9F9]">
           <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-4xl mx-auto text-center mb-12 md:mb-24">
                 <span className="text-[10px] tracking-[0.3em] text-[#8A8A8A] uppercase block mb-6">
                    Scientific Approach
                 </span>
                 <h3 className="text-3xl md:text-5xl font-thin mb-6">最先端科学が解明した12の老化要因</h3>
                 <p className="text-sm text-[#555] leading-[2.4] tracking-wide font-bold mb-4">
                   『AGING HALLMARKS（エイジングホールマークス）』とは？
                 </p>
                 <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify max-w-3xl mx-auto">
                   2013年、世界で権威のある老化研究家チームによって作られた、老化の進行に関する生物学的な特徴の共通指標です。さらに2023年に3項目が加わり、老化の要因が9種類から12種類へ更新されました。これらの特徴は、老化の進行や老化に伴う疾患の発生に関わる基本的なメカニズムを示し、老化研究において重要な指標となっています。老化のプロセスを遅らせることができる時代となり、年齢に関係なく、健康で充実した生活を送り続けることを目指す考え方（アクティブエイジング）が今、注目されています。
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
        </section>

        {/* Product Development Section */}
        <section className="py-32 px-6 md:px-12 bg-white">
           <div className="container mx-auto">
              <div className="text-center mb-20">
                 <span className="text-[10px] tracking-[0.3em] text-[#8A8A8A] uppercase block mb-6">
                    Product Development
                 </span>
                 <h3 className="text-3xl md:text-4xl font-thin mb-8">製品開発</h3>
                 <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify max-w-4xl mx-auto">
                   we laboはすべての製品づくりにおいて最先端科学が解明した老化要因にアプローチし、最先端の科学と確かなエビデンスに基づいて、内なる生命力を最大限に引き出す製品を開発しています。私たちは、妥協のない品質と実感力を追求することで、一人ひとりが豊かで健康な人生を歩むためのサポートをお届けします。
                 </p>
              </div>

              <div className="space-y-16">
                 {/* LUXURY NMN 15000 */}
                 <div>
                    <h3 className="text-2xl md:text-3xl font-light mb-8">
                       <Link href="/products/luxury-nmn-15000" className="hover:text-[#D4C5B0] transition-colors">
                         LUXURY NMN 15000
                       </Link>
                    </h3>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                       <div className="md:w-1/2">
                          <Image
                             src="https://welabo.jp/wp-content/uploads/concept02.jpg"
                             alt="LUXURY NMN 15000"
                             width={800}
                             height={500}
                             className="w-full h-auto"
                             unoptimized
                          />
                       </div>
                       <div className="md:w-1/2">
                          <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify mb-4">
                            「NMN」に関する国内外の研究エビデンスをもとに理想的な含有量を配合しています。<br />
                            さらに、PQQ・コエンザイムQ10・フィセチンなど、近年の老化研究で注目される成分を厳選配合しており、日々の変化を実感いただけるように設計しました。
                          </p>
                          <p className="text-xs text-gray-500 font-light">
                            共同開発：昭和大学 薬学部 基礎医療薬学講座　佐藤均教授
                          </p>
                       </div>
                    </div>
                 </div>

                 <hr className="border-gray-200" />

                 {/* LUXURY PROBIOTICS+ */}
                 <div>
                    <h3 className="text-2xl md:text-3xl font-light mb-8">
                       <Link href="/products/luxury-probiotics" className="hover:text-[#D4C5B0] transition-colors">
                         LUXURY PROBIOTICS<sup>+</sup>
                       </Link>
                    </h3>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                       <div className="md:w-1/2">
                          <Image
                             src="https://welabo.jp/wp-content/uploads/concept03.jpg"
                             alt="LUXURY PROBIOTICS+"
                             width={800}
                             height={500}
                             className="w-full h-auto"
                             unoptimized
                          />
                       </div>
                       <div className="md:w-1/2">
                          <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify mb-4">
                            生きて腸まで届く乳酸菌を配合した、お腹の環境について細部まで拘ったサプリメント。<br />
                            4種の生きた善玉菌（納豆菌、ビフィズス菌、有胞子乳酸菌、酪酸菌）に加え、３類の善玉菌の栄養素（59種の植物発酵エキス、オリゴ糖、食物繊維）を独自配合。日々のリズムに寄り添い、軽やかで心地よい日々をサポートします。
                          </p>
                          <p className="text-xs text-gray-500 font-light">
                            推薦：昭和大学 名誉教授　二木芳人氏 推薦
                          </p>
                       </div>
                    </div>
                 </div>

                 <hr className="border-gray-200" />

                 {/* 本草霊芝胞子 */}
                 <div>
                    <h3 className="text-2xl md:text-3xl font-light mb-8">
                       <Link href="/products/honsoureishihoushi" className="hover:text-[#D4C5B0] transition-colors">
                         本草霊芝胞子
                       </Link>
                    </h3>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                       <div className="md:w-1/2">
                          <Image
                             src="https://welabo.jp/wp-content/uploads/concept06.jpg"
                             alt="本草霊芝胞子"
                             width={800}
                             height={500}
                             className="w-full h-auto"
                             unoptimized
                          />
                       </div>
                       <div className="md:w-1/2">
                          <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify">
                            産地と栽培環境によって大きく差が出るとされる生薬の「質」と「量」に着目し、こだわり抜いた漢方発想のサプリメントです。主成分には、希少な国産（長野県）霊芝胞子を1包あたり1000mg配合。さらに、メシマコブ・アガリクス・冬虫夏草を独自のバランスで組み合わせました。素材本来の力を大切にしながら、日々のコンディションに寄り添う設計を目指しています。
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Quality & Safety Section */}
        <section className="py-16 md:py-32 px-6 md:px-12 bg-white">
           <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-normal mb-12 md:mb-20">
                安全性
              </h2>
              
              <div className="space-y-16">
                 {/* 安全な原料 */}
                 <div>
                    <h3 className="text-2xl md:text-3xl font-light mb-8">安全な原料</h3>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                       <div className="md:w-1/2">
                          <Image
                             src="https://welabo.jp/wp-content/uploads/concept04.png"
                             alt="安全な原料"
                             width={800}
                             height={500}
                             className="w-full h-auto"
                             unoptimized
                          />
                       </div>
                       <div className="md:w-1/2">
                          <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify">
                            原料の品質に徹底的にこだわっています。数ある候補の中から、厳しい品質基準をクリアしたものだけを厳選し、使用しています。さらに、安全性を確保するため、放射能検査、重金属検査、そして微生物検査を実施し、全ての製品が安全基準を満たしていることを確認しています。
                          </p>
                       </div>
                    </div>
                 </div>

                 <hr className="border-gray-200" />

                 {/* 製造工場 */}
                 <div>
                    <h3 className="text-2xl md:text-3xl font-light mb-8">製造工場</h3>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                       <div className="md:w-1/2">
                          <Image
                             src="https://welabo.jp/wp-content/uploads/concept05.jpg"
                             alt="製造工場"
                             width={800}
                             height={591}
                             className="w-full h-auto"
                             unoptimized
                          />
                       </div>
                       <div className="md:w-1/2">
                          <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify">
                            製造は、日本国内でも最高水準を誇るGMP（Good Manufacturing Practice）認証を取得した工場で一貫して行われています。この認証は、製品の品質と安全性を保つための厳格な規定を満たしている証です。原料の受け入れから製品化まで、一切の妥協を許さない品質管理体制を整えています。
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
