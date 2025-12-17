"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/context/cart-context";
import { MapPin, Phone, ExternalLink, ShoppingBag } from "lucide-react";

// Product Data
const productData: Record<string, any> = {
  "luxury-nmn-15000": {
    name: "LUXURY NMN 15000",
    tagline: "The Pinnacle of Youth",
    description: "NMN（ニコチンアミドモノヌクレオチド）は、ビタミンB3を原料としてつくられる成分で、年齢とともに減少する生体内物質「NAD」の元となります。「LUXURY NMN 15000」は、ヒト臨床試験に基づいた理想的な含有量を配合。さらに、フィセチン、PQQ、コエンザイムQ10との組み合わせで、よりパワフルに、かつてない「実感力」を実現しました。",
    img: "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png",
    gallery: [
      "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png",
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/06/00/1_000000000006.png?1694410542"
    ],
    features: [
      "老化研究の世界基準であるAGING HALLMARKSで示されている、12の老化要因の内、11の要因にアプローチ",
      "ヒト臨床試験に基づいた理想的なNMN含有量 (15,000mg/瓶)",
      "PQQ、コエンザイムQ10、フィセチンによる相乗効果",
      "昭和大学 薬学部 基礎医療薬学講座 佐藤均教授との共同開発",
      "NMN最高純度99.9％、国内GMP認定工場製造"
    ],
    ingredientsSections: [
        {
            title: "NMNとは？",
            subtitle: "Nicotinamide mononucleotide",
            description: "NMNとは、正式名称「ニコチンアミドモノヌクレオチド」。ビタミンB3を原料としてつくられる成分です。ヒトやあらゆる生物に存在し体内で自然に生成されている物質ですが、年齢とともに減少すると考えられています。NMNは体内で、エネルギーを生み出す際に必須な補酵素NAD（ニコチンアミドアデニンジヌクレオチド）に変換されます。"
        },
        {
            title: "そこで「NMN」が重要",
            subtitle: "Replenishing NAD",
            description: "年齢とともに体内で減少するNAD量。減少したNADを補うため、体内でNADに変化されるNMNを摂取することが大切です。NMNはあらゆる生物の細胞に存在しており緑黄色野菜やフルーツなどにも含まれていますが、その含有量はごくわずかです。1瓶に国産NMNを15000mg配合し、NMNの摂取目安量としては、500mg/日 摂ることができます。"
        },
        {
            title: "フィセチン・PQQ・コエンザイムQ10配合",
            subtitle: "Synergistic Ingredients",
            description: "フィセチン（1500mg配合）は、ポリフェノール類の一種で、カラダの内側からキレイにしてくれます。PQQ（1800mg配合）は、ビタミン様物質で、冴えや記憶にかかわる、たんぱく質「NGF」を助けるはたらきがあります。コエンザイムQ10（4500mg配合）は、エネルギーづくりに欠かせない成分です。さらにPQQと一緒に摂ることで、より高いパワーが期待されます。"
        }
    ],
    professor: {
        name: "昭和大学薬学部基礎医療薬学講座 佐藤均教授",
        title: "共同開発",
        description: "「LUXURY NMN」は昭和大学薬学部基礎医療薬学講座の佐藤教授と共同開発したNMNサプリメントです。",
        bio: "1959年生まれ。東京大学薬学系研究科（製剤学教室）修士課程修了後、金沢大学薬学部助手、富山医科薬科大学付属病院薬剤部助手、アメリカ国立衛生研究所（NIH）・癌研究所（NCI）奨励研究員、スイス・バーゼル研究所（Sandoz Pharma）客員研究員を経て、東京大学医学部助教授となる。2000年から昭和大学薬学部教授（臨床分子薬品学教室）。現在は同大学の薬物療法学講座薬物動態学部門を担う。"
    },
    safety: {
        title: "安全性へのこだわり・GMP認証",
        description: "「LUXURY NMN」で使用しているNMN原料は、発酵抽出法で作った国産の99.9％高濃度原料を使用しています。放射能・重金属・微生物検査を実施し、異常がないことを確認しています。また、胃酸や唾液でNMNを損なうことなく、貴重な成分をより効率よく届けるために、耐酸性カプセルを採用しました。製造は、日本国内でも最高水準を誇るGMP認証工場で行われています。"
    },
    agingHallmarks: "老化研究の世界基準であるAGING HALLMARKSで、12の老化要因が示されています。LUXURY NMN 15000は12の内、11の要因にアプローチします。",
    specs: {
      "内容量": "43.8g（120粒×1粒の重量365mg、1粒の内容量290mg）",
      "主要成分": "β-NMN, PQQ, コエンザイムQ10, フィセチン",
      "栄養成分(1粒当たり)": "エネルギー 1.53kcal, たんぱく質 0.08g, 脂質 0.05g, 炭水化物 0.2g, 食塩相当量 0.004g",
      "原産国": "日本"
    },
    usage: "健康補助食品として、1日4粒を、昼食後に水などでお召し上がりください。",
    price: "¥88,560",
    amazonLink: "https://www.amazon.co.jp/",
    stores: {
      east: [
        { name: "伊勢丹 新宿店 B2F", address: "〒160-0022 東京都新宿区新宿3-14-1", tel: "TEL:03-3352-1111" },
        { name: "銀座三越 7F", address: "〒104-8212 東京都中央区銀座4-6-16", tel: "TEL:03-3562-1111" },
        { name: "三越日本橋本店 4F", address: "〒103-8001 東京都中央区日本橋室町1-4-1", tel: "TEL:03-3241-3311" },
        { name: "京王百貨店新宿店 8F", address: "〒160-8321 東京都新宿区西新宿1-1-4", tel: "TEL:0570-022-810" },
        { name: "小田急百貨店 町田店 5F", address: "〒194-8550 東京都町田市原町田6-12-20", tel: "TEL:042-720-4286" },
        { name: "伊勢丹浦和店 6F", address: "〒330-0063 埼玉県さいたま市浦和区高砂1-15-1", tel: "TEL:048-825-3990" },
        { name: "新潟伊勢丹 3F", address: "〒950-8589 新潟県新潟市中央区八千代1-6-1", tel: "TEL:025-242-1111" }
      ],
      west: [
        { name: "ジェイアール京都伊勢丹 B2F", address: "〒600-8555 京都府京都市下京区烏丸通塩小路下ル東塩小路町", tel: "TEL: 075-352-1111" },
        { name: "大丸京都店 B1F", address: "京都府京都市下京区四条通高倉西入立売西町79番地", tel: "TEL:075-251-6566" },
        { name: "阪神梅田本店 B1F", address: "〒530-8224 大阪市北区梅田1-13-13", tel: "TEL:06-6345-1201" },
        { name: "あべのハルカス近鉄本店 ウィング館B2F", address: "〒545-8545 大阪市阿倍野区阿倍野筋1-1-43", tel: "TEL:06-6624-1111" },
        { name: "福屋八丁堀本店 6F", address: "〒730-8548 広島県広島市中区胡町6-26", tel: "TEL:082-246-6111" }
      ]
    }
  },
  "luxury-probiotics": {
    name: "LUXURY PROBIOTICS+",
    tagline: "Inner Flora Balance",
    description: "生きて腸まで届く乳酸菌を配合した、お腹の環境について細部まで拘ったサプリメント。59種類の植物発酵エキス、納豆菌、酢酸、酪酸などの生菌が力を合わせ、きれいな腸内フローラ環境を作ります。",
    img: "https://welabo.jp/wp-content/uploads/LUXURY_PROBIOTICS_00.jpg",
    features: [
      "生きて腸まで届く乳酸菌を配合",
      "59種類の植物発酵エキス、納豆菌、酢酸、酪酸などを配合",
      "AGING HALLMARKSの12の老化要因の内、2つの要因にアプローチ",
      "昭和大学 名誉教授 二木芳人氏 推薦"
    ],
    specs: {
      "内容量": "30包",
      "主要成分": "乳酸菌, 植物発酵エキス, 納豆菌, 酪酸菌",
      "原産国": "日本"
    },
    price: "¥18,360"
  },
  "honsoureishihoushi": {
    name: "本草霊芝胞子",
    tagline: "生薬の質に注目した『本草霊芝胞子』",
    description: "貴重な国産（長野県）霊芝胞子の1包1000mgを主成分に、メシマコブ、アガリクス、冬虫夏草を独自配合しています。",
    img: "https://welabo.jp/wp-content/uploads/honsoureishihoushi_01_0-scaled.jpg",
    gallery: [
      "https://welabo.jp/wp-content/uploads/honsoureishihoushi_02_0-scaled.jpg",
      "https://welabo.jp/wp-content/uploads/honsoureishihoushi_03.jpg",
      "https://welabo.jp/wp-content/uploads/honsoureishihoushi_04.jpg",
      "https://welabo.jp/wp-content/uploads/honsoureishihoushi_img05.jpg"
    ],
    ingredientsSections: [
      {
        title: "霊芝 －免疫T細胞活性化－",
        subtitle: "霊芝胞子（細胞壁破壊）長野県産",
        description: "霊芝胞子の有用成分の種類と含有量が霊芝の「子実体」や「菌糸体」よりも多く、「霊芝の凝縮エッセンス」と呼ばれています。"
      },
      {
        title: "メシマコブ（桑黄） －免疫マクロファージ細胞活性化－",
        subtitle: "メシマコブ（桑黄）菌糸体",
        description: "天然に採取することが難しく、栽培も極めて困難であることから幻のキノコとも呼ばれ、その研究は日本から始まり世界に広がっています。"
      },
      {
        title: "アガリクス（姫松茸） －免疫 NK細胞活性化－",
        subtitle: "アガリクス（姫松茸）菌糸体",
        description: "特に注目すべきは、キノコ特有のβ-グルカンが豊富に含まれていることです。"
      },
      {
        title: "冬虫夏草 －有害成分をアポトーシス－",
        subtitle: "冬虫夏草 子実体",
        description: "冬虫夏草は子嚢菌類のキノコの一種で、中国では昔から漢方素材とされています。"
      }
    ],
    gmp: "GMP（Good Manufacturing Practice）=「適正製造規範」とは、原材料の受入から製品出荷までの全製造工程において、きめ細かく具体的に管理することです。",
    agingHallmarks: "老化研究の世界基準であるAGING HALLMARKS（左図）で、12の老化要因が示されています。本草霊芝胞子は12の内、5つの要因にアプローチします。（右図）",
    usage: "健康補助食品として、1日1包を、水などでお召し上がりください。※寝る1時間くらい前がおすすめです。",
    specs: {
      "内容量": "30包",
      "主要成分": "霊芝胞子, メシマコブ, アガリクス, 冬虫夏草",
      "原産国": "日本"
    },
    price: "¥91,800",
    stores: {
      east: [
        { name: "伊勢丹 新宿店 B2F、伊勢丹 新宿店6F", address: "〒160-0022 東京都新宿区新宿3-14-1", tel: "TEL:03-3352-1111" },
        { name: "銀座三越 7F", address: "〒104-8212 東京都中央区銀座4-6-16", tel: "TEL:03-3562-1111" },
        { name: "三越日本橋本店 4F", address: "〒103-8001 東京都中央区日本橋室町1-4-1", tel: "TEL:03-3241-3311" },
        { name: "京王百貨店新宿店 8F", address: "〒160-8321 東京都新宿区西新宿1-1-4", tel: "TEL:0570-022-810" },
        { name: "小田急百貨店 町田店 5F", address: "〒194-8550 東京都町田市原町田6-12-20", tel: "TEL:042-720-4286" },
        { name: "伊勢丹浦和店 6F", address: "〒330-0063 埼玉県さいたま市浦和区高砂1-15-1", tel: "TEL:048-825-3990" },
        { name: "新潟伊勢丹 3F", address: "〒950-8589 新潟県新潟市中央区八千代1-6-1", tel: "TEL:025-242-1111" }
      ],
      west: [
        { name: "ジェイアール京都伊勢丹 B2F", address: "〒600-8555 京都府京都市下京区烏丸通塩小路下ル東塩小路町", tel: "TEL: 075-352-1111" },
        { name: "大丸京都店 B1F", address: "京都府京都市下京区四条通高倉西入立売西町79番地", tel: "TEL:075-251-6566" },
        { name: "阪神梅田本店 B1F", address: "〒530-8224 大阪市北区梅田1-13-13", tel: "TEL:06-6345-1201" },
        { name: "あべのハルカス近鉄本店 ウィング館B2F", address: "〒545-8545 大阪市阿倍野区阿倍野筋1-1-43", tel: "TEL:06-6624-1111" },
        { name: "福屋八丁堀本店 6F", address: "〒730-8548 広島県広島市中区胡町6-26", tel: "TEL:082-246-6111" }
      ]
    }
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string | undefined;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  if (!slug || !productData[slug]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
          <Link href="/products" className="text-sm underline">Return to Products</Link>
        </div>
      </div>
    );
  }
  
  const product = productData[slug];

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <SiteHeader />

      <main className="pt-24 md:pt-32">
        <div className="container mx-auto px-6 md:px-12">
          {/* Product Header */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 mb-16 md:mb-32">
            {/* Image Gallery */}
            <div className="lg:w-1/2">
              <div className="relative aspect-square w-full bg-[#F5F5F5] mb-4 overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  unoptimized
                />
              </div>
              {/* Thumbnail Gallery */}
              {product.gallery && (
                <div className="grid grid-cols-4 gap-4">
                  {product.gallery.map((thumbImg: string, index: number) => (
                    <div key={index} className="relative aspect-square w-full bg-[#F9F9F9] overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-transparent hover:border-gray-200">
                      <Image
                        src={thumbImg}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-contain p-2"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2 pt-12">
              <span className="text-xs tracking-[0.2em] text-[#D4C5B0] uppercase block mb-6">
                we labo Collection
              </span>
              <h1 className="text-2xl md:text-6xl font-thin mb-4 leading-tight">{product.name}</h1>
              <p className="text-lg text-gray-600 font-light mb-12">{product.tagline}</p>
              
              <div className="mb-12">
                <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify mb-8">
                  {product.description}
                </p>
                {product.features && (
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 font-light">
                    {product.features.map((feature: string, i: number) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 mb-12">
                 <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                     <span className="text-sm font-light">Price</span>
                     <span className="text-xl">{product.price} <span className="text-xs text-gray-400">(inc. tax)</span></span>
                 </div>
                 <Link href={`/shopping/${slug}`}>
                   <Button className="w-full h-14 bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] hover:border-[#1A1A1A] rounded-none text-xs tracking-[0.2em] transition-all">
                      VISIT ONLINE STORE
                   </Button>
                 </Link>
                 {product.amazonLink && (
                    <Link href={product.amazonLink} target="_blank">
                        <Button variant="outline" className="w-full h-14 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white rounded-none text-xs tracking-[0.2em] transition-all">
                            VIEW ON AMAZON
                        </Button>
                    </Link>
                 )}
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="details">
                  <AccordionTrigger className="text-sm tracking-widest font-light uppercase">Details and Specs</AccordionTrigger>
                  <AccordionContent>
                    <dl className="py-4">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="grid grid-cols-3 text-sm font-light border-b border-gray-100 py-3 last:border-0">
                          <dt className="text-gray-400">{key}</dt>
                          <dd className="col-span-2 text-gray-800">{value as string}</dd>
                        </div>
                      ))}
                    </dl>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="usage">
                  <AccordionTrigger className="text-sm tracking-widest font-light uppercase">Usage</AccordionTrigger>
                  <AccordionContent className="text-sm font-light text-gray-600 leading-relaxed py-4">
                    {product.usage}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Ingredient Sections (Common for both) */}
          {product.ingredientsSections && (
            <section className="mb-16 md:mb-32 py-12 md:py-16 border-t border-gray-100">
              <div className="mb-12 md:mb-16">
                <h2 className="text-2xl md:text-3xl font-thin mb-8 md:mb-12">Key Ingredients</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-16">
                  {product.ingredientsSections.map((ingredient: any, index: number) => (
                    <div key={index} className="group">
                      <span className="text-xs text-[#D4C5B0] tracking-widest uppercase block mb-2">{ingredient.subtitle}</span>
                      <h3 className="text-xl font-light mb-4">{ingredient.title}</h3>
                      <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify">
                        {ingredient.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Professor Section */}
          {product.professor && (
            <section className="mb-16 md:mb-32 bg-[#F9F9F9] p-8 md:p-24">
              <div className="max-w-4xl mx-auto">
                <span className="text-xs text-gray-400 tracking-widest uppercase block mb-4 text-center">{product.professor.title}</span>
                <h2 className="text-2xl md:text-3xl font-light mb-8 text-center">{product.professor.name}</h2>
                <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify mb-8">
                  {product.professor.description}
                </p>
                <div className="pl-6 border-l border-[#D4C5B0]">
                  <p className="text-sm leading-[2.4] text-gray-500 font-light italic">
                    {product.professor.bio}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Safety / GMP Section */}
          {(product.gmp || product.safety) && (
             <section className="mb-16 md:mb-32 py-12 md:py-16 border-t border-gray-100">
               <div className="max-w-4xl">
                 <h2 className="text-2xl md:text-3xl font-thin mb-8">{product.safety ? product.safety.title : "安心品質の証「GMP認証」取得工場で製造"}</h2>
                 <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify">
                   {product.safety ? product.safety.description : product.gmp}
                 </p>
               </div>
             </section>
          )}

          {/* Aging Hallmarks Section */}
          {product.agingHallmarks && (
            <section className="mb-16 md:mb-32 py-12 md:py-16 border-t border-gray-100">
              <div className="max-w-4xl">
                <h2 className="text-2xl md:text-3xl font-thin mb-8">AGING HALLMARKS</h2>
                <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify">
                  {product.agingHallmarks}
                </p>
              </div>
            </section>
          )}

          {/* Stores Section */}
          {product.stores && (
            <section className="mb-16 md:mb-32 pt-16 md:pt-24 border-t border-gray-200">
              <div className="text-center mb-12 md:mb-16">
                 <h2 className="text-3xl font-thin mb-4">Shoplist</h2>
                 <p className="text-sm text-gray-500 tracking-widest uppercase">Available Stores</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* East Japan */}
                <div className="bg-gray-50 p-8 md:p-12">
                   <h3 className="text-xl font-light mb-8 flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-[#1A1A1A]"></span>
                      East Japan
                   </h3>
                   <div className="space-y-8">
                     {product.stores.east.map((store: any, index: number) => (
                       <div key={index} className="group">
                         <h4 className="text-sm font-medium mb-2 group-hover:text-[#D4C5B0] transition-colors">{store.name}</h4>
                         <div className="flex items-start gap-2 text-xs text-gray-500 mb-1">
                            <MapPin className="w-3 h-3 mt-0.5 shrink-0" />
                            {store.address}
                         </div>
                         <div className="flex items-center gap-2 text-xs text-gray-400">
                            <Phone className="w-3 h-3" />
                            {store.tel}
                         </div>
                       </div>
                     ))}
                   </div>
                </div>

                {/* West Japan */}
                <div className="bg-gray-50 p-8 md:p-12">
                   <h3 className="text-xl font-light mb-8 flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-[#1A1A1A]"></span>
                      West Japan
                   </h3>
                   <div className="space-y-8">
                     {product.stores.west.map((store: any, index: number) => (
                       <div key={index} className="group">
                         <h4 className="text-sm font-medium mb-2 group-hover:text-[#D4C5B0] transition-colors">{store.name}</h4>
                         <div className="flex items-start gap-2 text-xs text-gray-500 mb-1">
                            <MapPin className="w-3 h-3 mt-0.5 shrink-0" />
                            {store.address}
                         </div>
                         <div className="flex items-center gap-2 text-xs text-gray-400">
                            <Phone className="w-3 h-3" />
                            {store.tel}
                         </div>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            </section>
          )}

          {/* Bottom CTA */}
          <section className="bg-[#1A1A1A] text-white p-8 md:p-24 text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-thin mb-6">Experience {product.name}</h2>
              <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed text-sm">
                 公式オンラインストアで、あなたのライフスタイルに合わせたプランをお選びいただけます。
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                 <Link href={`/shopping/${slug}`}>
                   <Button className="h-14 px-12 bg-white text-[#1A1A1A] border border-white hover:bg-[#1A1A1A] hover:text-white hover:border-white rounded-none text-xs tracking-[0.2em] transition-all">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      ONLINE STORE
                   </Button>
                 </Link>
                 {product.amazonLink && (
                    <Link href={product.amazonLink} target="_blank">
                        <Button variant="outline" className="h-14 px-12 border-white text-white bg-transparent hover:bg-white hover:text-[#1A1A1A] rounded-none text-xs tracking-[0.2em] transition-all">
                           <ExternalLink className="w-4 h-4 mr-2" />
                           AMAZON
                        </Button>
                    </Link>
                 )}
              </div>
          </section>

        </div>

        <SiteFooter />
      </main>
    </div>
  );
}
