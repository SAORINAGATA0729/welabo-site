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
    description: "NMN（ニコチンアミドモノヌクレオチド）は、ビタミンB3を原料としてつくられる成分で、年齢とともに減少する生体内物質「NAD」の元となります。「LUXURY NMN 15000」は、ヒト臨床試験に基づいた理想的な含有量を配合。さらに、PQQ、コエンザイムQ10、フィセチンとの組み合わせで、よりパワフルに、かつてない「実感力」を実現しました。",
    img: "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png",
    gallery: [
      "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png",
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/06/00/1_000000000006.png?1694410542",
      "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png",
      "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png"
    ],
    features: [
      "老化研究の世界基準であるAGING HALLMARKSで示されている、12の老化要因の内、11の要因にアプローチ",
      "ヒト臨床試験に基づいた理想的なNMN含有量 (15,000mg/瓶)",
      "PQQ、コエンザイムQ10、フィセチンによる相乗効果",
      "昭和大学 薬学部 基礎医療薬学講座 佐藤均教授との共同開発",
      "国産の天然成分から発酵抽出した、最高純度99.9％のNMN原料を使用",
      "国内GMP認定工場にて製造、さらに製品のGMP認証を取得"
    ],
    ingredientsSections: [
        {
            title: "NMNとは？",
            subtitle: "Nicotinamide mononucleotide",
            description: "NMNとは、正式名称「ニコチンアミドモノヌクレオチド」。ビタミンB3を原料としてつくられる成分です。ヒトやあらゆる生物に存在し体内で自然に生成されている物質ですが、年齢とともに減少すると考えられています。NMNは体内で、エネルギーを生み出す際に必須な補酵素NAD（ニコチンアミドアデニンジヌクレオチド）に変換されます。",
            image: "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png"
        },
        {
            title: "そこで「NMN」が重要",
            subtitle: "Replenishing NAD",
            description: "年齢とともに体内で減少するNAD量。減少したNADを補うため、体内でNADに変化されるNMNを摂取することが大切です。NMNはあらゆる生物の細胞に存在しており緑黄色野菜やフルーツなどにも含まれていますが、その含有量はごくわずかです。1瓶に国産NMNを15000mg配合し、NMNの摂取目安量としては、500mg/日 摂ることができます。また、セノリティクスに注目されている成分フィセチンを1500mg、そら豆や枝豆に含まれるハッキリ成分PQQを1800mg、若々しさをサポートするコエンザイムQ10を4500mg配合しています。快適な毎日をサポートします。",
            image: "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png"
        },
        {
            title: "PQQ・コエンザイムQ10・フィセチン配合",
            subtitle: "Synergistic Ingredients",
            description: "フィセチン（1500mg配合）は、ポリフェノール類の一種で、カラダの内側からキレイにしてくれます。PQQ（1800mg配合）は、ビタミン様物質で、冴えや記憶にかかわる、たんぱく質「NGF」を助けるはたらきがあります。コエンザイムQ10（4500mg配合）は、エネルギーづくりに欠かせない成分です。さらにPQQと一緒に摂ることで、より高いパワーが期待されます。",
            image: "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png"
        },
        {
            title: "胃酸に強い耐酸性カプセル使用",
            subtitle: "Acid-Resistant Capsule",
            description: "胃酸や唾液でNMNを損なうことなく、貴重な成分をより効率よく届けるために、耐酸性カプセルを採用しました。胃酸からNMNを保護し、NMNを腸まで届けます。",
            image: "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png"
        }
    ],
    professor: {
        title: "大学教授と共同開発",
        description: "「LUXURY NMN 15000」は昭和大学薬学部基礎医療薬学講座の佐藤均教授と共同開発したNMNサプリメントです。",
        name: "昭和大学薬学部基礎医療薬学講座 佐藤均",
        bio: "1959年生まれ。東京大学薬学系研究科（製剤学教室）修士課程修了後、金沢大学薬学部助手、富山医科薬科大学付属病院薬剤部助手、アメリカ国立衛生研究所（NIH）・癌研究所（NCI）奨励研究員、スイス・バーゼル研究所（Sandoz Pharma）客員研究員を経て、東京大学医学部助教授となる。2000年から昭和大学薬学部教授（臨床分子薬品学教室）。現在は同大学の薬物療法学講座薬物動態学部門を担う。"
    },
    safety: {
        sections: [
            {
                title: "安全な原料",
                description: "「LUXURY NMN 15000」で使用しているNMN原料は、発酵抽出法で作った国産の99.9％高濃度原料を使用しています。放射能・重金属・微生物検査を実施し、異常がないことを確認しています。また、胃酸や唾液でNMNを損なうことなく、貴重な成分をより効率よく届けるために、耐酸性カプセルを採用しました。",
                image: "https://welabo.jp/wp-content/uploads/concept04.png"
            },
            {
                title: "製造工場",
                description: "お客様に安全で高品質な製品をお届けするため、工場と製品の両方で「GMP認証」を取得しています。GMP（Good Manufacturing Practice）=「適正製造規範」とは、製品の原材料受け入れから最終出荷に至るすべての工程を細かく管理する厳格な基準です。第三者機関が品質管理体制を客観的に審査・査察し、基準を満たした工場と製品だけが認証を受けられます。「LUXURY NMN 15000」は、日本国内でも最高水準を誇るGMP認証工場で、厳密な品質管理と衛生管理のもと製造されています。さらに、製品のGMP認証を取得し、高い品質と安全性を保証しています。製造から最終包装まで一貫して行うことで、安心してご利用いただける信頼の一品をお届けします。",
                image: "https://welabo.jp/wp-content/uploads/concept05.jpg"
            }
        ]
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
      "昭和大学 名誉教授 二木芳人氏 推薦",
      "国内GMP認定工場にて製造"
    ],
    specs: {
      "内容量": "30包",
      "主要成分": "乳酸菌, 植物発酵エキス, 納豆菌, 酪酸菌",
      "原産国": "日本"
    },
    usage: "1日1包を目安に、水またはぬるま湯とともにお召し上がりください。",
    agingHallmarks: "老化研究の世界基準であるAGING HALLMARKSで、12の老化要因が示されています。LUXURY PROBIOTICS+は12の内、2つの要因にアプローチします。",
    safety: {
      title: "安全性へのこだわり・GMP認証",
      description: "国内GMP認定工場にて製造。原材料の受入から製品出荷までの全製造工程において、きめ細かく具体的に管理しています。"
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
    agingHallmarks: "老化研究の世界基準であるAGING HALLMARKSで、12の老化要因が示されています。本草霊芝胞子は12の内、5つの要因にアプローチします。",
    safety: {
      title: "安全性へのこだわり・GMP認証",
      description: "GMP（Good Manufacturing Practice）=「適正製造規範」とは、原材料の受入から製品出荷までの全製造工程において、きめ細かく具体的に管理することです。国内GMP認定工場にて製造しています。"
    },
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
              <h1 className="text-2xl md:text-6xl font-thin mb-4 leading-tight">{product.name}</h1>
              
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
                     <span className="text-sm font-light">価格</span>
                     <span className="text-xl">{product.price} <span className="text-xs text-gray-400">(税込)</span></span>
                 </div>
                 <Link href={`/shopping/${slug}`}>
                   <Button className="w-full h-14 bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] hover:border-[#1A1A1A] rounded-none text-xs tracking-[0.2em] transition-all">
                      オンラインストアで購入
                   </Button>
                 </Link>
                 {product.amazonLink && (
                    <Link href={product.amazonLink} target="_blank">
                        <Button variant="outline" className="w-full h-14 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white rounded-none text-xs tracking-[0.2em] transition-all">
                           Amazonで見る
                        </Button>
                    </Link>
                 )}
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="details">
                  <AccordionTrigger className="text-sm tracking-widest font-light uppercase">詳細・仕様</AccordionTrigger>
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
                {product.usage && (
                  <AccordionItem value="usage">
                    <AccordionTrigger className="text-sm tracking-widest font-light uppercase">お召し上がり方</AccordionTrigger>
                    <AccordionContent className="text-sm font-light text-gray-600 leading-relaxed py-4">
                      {product.usage}
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </div>
          </div>

          {/* Ingredient Sections (Common for both) */}
          {product.ingredientsSections && (
            <section className="mb-16 md:mb-32 py-12 md:py-16 border-t border-gray-100">
              <div className="space-y-16 md:space-y-24">
                {product.ingredientsSections.map((ingredient: any, index: number) => (
                  <div key={index} className="border-b border-gray-100 pb-16 md:pb-24 last:border-0">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                      {/* Left: Text */}
                      <div className="flex-1 lg:flex-[2]">
                        <h2 className="text-2xl md:text-3xl font-thin mb-6">{ingredient.title}</h2>
                        <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify">
                          {ingredient.description}
                        </p>
                      </div>
                      {/* Right: Image Placeholder (Gray Background Only) - Same width as button (w-full) */}
                      <div className="w-full lg:w-1/2">
                        <div className="relative w-full aspect-[3/2] bg-[#F5F5F5] overflow-hidden">
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Professor Section */}
          {product.professor && (
            <section className="mb-16 md:mb-32 py-12 md:py-16 border-t border-gray-100">
              <div className="border-b border-gray-100 pb-16 md:pb-24">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                  {/* Left: Text */}
                  <div className="flex-1 lg:flex-[2]">
                    <h2 className="text-2xl md:text-3xl font-thin mb-6">{product.professor.title}</h2>
                    {product.professor.description && (
                      <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify mb-8">
                        {product.professor.description}
                      </p>
                    )}
                    {product.professor.name && (
                      <p className="text-sm font-medium text-[#1A1A1A] mb-4">
                        {product.professor.name}
                      </p>
                    )}
                    <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify">
                      {product.professor.bio}
                    </p>
                  </div>
                  {/* Right: Image Placeholder (Gray Background Only) - Half height */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative w-full aspect-[2/1] bg-[#F5F5F5] overflow-hidden">
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Safety / GMP Section */}
          {product.safety && product.safety.sections && (
             <section className="mb-16 md:mb-32 py-12 md:py-16 border-t border-gray-100">
               <div className="container mx-auto px-6 md:px-12">
                 <h2 className="text-3xl md:text-4xl font-normal mb-12 md:mb-20">
                   安全性
                 </h2>
                 
                 <div className="space-y-16">
                   {product.safety.sections.map((safetySection: any, index: number) => (
                     <div key={index}>
                       <h3 className="text-2xl md:text-3xl font-light mb-8">{safetySection.title}</h3>
                       <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                         <div className="md:w-1/2">
                           <Image
                             src={safetySection.image}
                             alt={safetySection.title}
                             width={800}
                             height={500}
                             className="w-full h-auto"
                             unoptimized
                           />
                         </div>
                         <div className="md:w-1/2">
                           <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify">
                             {safetySection.description}
                           </p>
                         </div>
                       </div>
                       {index < product.safety.sections.length - 1 && (
                         <hr className="border-gray-200 mt-16" />
                       )}
                     </div>
                   ))}
                 </div>
               </div>
             </section>
          )}

          {/* Aging Hallmarks Section */}
          {product.agingHallmarks && (
            <section className="mb-16 md:mb-32 py-12 md:py-16 border-t border-gray-100">
              <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-2xl md:text-3xl font-thin mb-8">AGING HALLMARKSに沿った開発・展開</h2>
                <p className="text-sm leading-[2.4] text-gray-600 font-light whitespace-nowrap mb-12">
                  老化研究の世界基準であるAGING HALLMARKSで、12の老化要因が示されています。LUXURY NMN 15000は12の内、11の要因にアプローチします。
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Image */}
                  <div>
                    <div className="relative w-full aspect-square bg-[#F5F5F5] overflow-hidden mb-4">
                    </div>
                    <p className="text-sm text-gray-600 font-light text-center">LUXURY NMN 15000</p>
                  </div>
                  {/* Right Image */}
                  <div>
                    <div className="relative w-full aspect-square bg-[#F5F5F5] overflow-hidden mb-4">
                    </div>
                    <p className="text-sm text-gray-600 font-light text-center">老化研究の世界基準であるAGING</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Stores Section */}
          {product.stores && (
            <section className="mb-16 md:mb-32 pt-16 md:pt-24 border-t border-gray-200">
              <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-12 md:mb-16">
                   <span className="text-[10px] tracking-[0.3em] text-[#8A8A8A] uppercase block mb-6">
                      Retail Locations
                   </span>
                   <h2 className="text-3xl md:text-7xl font-thin mb-8">SHOPLIST</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                  {/* East Japan (Left) */}
                  <div>
                     <h3 className="text-2xl md:text-3xl font-thin mb-12 text-gray-700">東日本地方</h3>
                     <div className="space-y-0 border-t border-gray-200">
                       {product.stores.east.map((store: any, index: number) => (
                         <div key={index} className="group border-b border-gray-200 hover:bg-[#FAFAFA] transition-colors">
                           <div className="flex flex-col md:flex-row md:items-start gap-6 py-12 px-4">
                              {/* Image Placeholder */}
                              <div className="w-20 md:w-32 shrink-0">
                                 <div className="w-full aspect-square bg-gray-300"></div>
                              </div>
                              
                              {/* Store Info */}
                              <div className="flex-1">
                                 <div className="mb-4">
                                    <h4 className="text-lg md:text-xl font-light tracking-wide text-[#1A1A1A] mb-2">
                                      {store.name}
                                    </h4>
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

                  {/* West Japan (Right) */}
                  <div>
                     <h3 className="text-2xl md:text-3xl font-thin mb-12 text-gray-700">西日本地方</h3>
                     <div className="space-y-0 border-t border-gray-200">
                       {product.stores.west.map((store: any, index: number) => (
                         <div key={index} className="group border-b border-gray-200 hover:bg-[#FAFAFA] transition-colors">
                           <div className="flex flex-col md:flex-row md:items-start gap-6 py-12 px-4">
                              {/* Image Placeholder */}
                              <div className="w-20 md:w-32 shrink-0">
                                 <div className="w-full aspect-square bg-gray-300"></div>
                              </div>
                              
                              {/* Store Info */}
                              <div className="flex-1">
                                 <div className="mb-4">
                                    <h4 className="text-lg md:text-xl font-light tracking-wide text-[#1A1A1A] mb-2">
                                      {store.name}
                                    </h4>
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
              </div>
            </section>
          )}

          {/* Bottom CTA */}
          <section className="bg-[#1A1A1A] text-white p-8 md:p-24 text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-thin mb-6">{product.name}を体験</h2>
              <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed text-sm">
                 公式オンラインストアで、あなたのライフスタイルに合わせたプランをお選びいただけます。
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                 <Link href={`/shopping/${slug}`}>
                   <Button className="h-14 px-12 bg-white text-[#1A1A1A] border border-white hover:bg-[#1A1A1A] hover:text-white hover:border-white rounded-none text-xs tracking-[0.2em] transition-all whitespace-nowrap">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      ONLINE STORE
                   </Button>
                 </Link>
                 {product.amazonLink && (
                    <Link href={product.amazonLink} target="_blank">
                        <Button variant="outline" className="h-14 px-12 border-white text-white bg-transparent hover:bg-white hover:text-[#1A1A1A] rounded-none text-xs tracking-[0.2em] transition-all whitespace-nowrap">
                           <ExternalLink className="w-4 h-4 mr-2" />
                           amazon
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
