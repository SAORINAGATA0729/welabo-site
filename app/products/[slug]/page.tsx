"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Product Data
const productData: Record<string, any> = {
  "luxury-nmn-15000": {
    name: "LUXURY NMN 15000",
    tagline: "The Pinnacle of Youth",
    description: "「NMN」のヒト臨床試験に基づいた理想的な含有量を配合しています。さらに「NMN」の効果を最大限に引き出してくれるPQQ、コエンザイムQ10、フィセチンとの組み合わせで、よりパワフルに、かつてない「実感力」を実現しました。",
    img: "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png",
    features: [
      "老化研究の世界基準であるAGING HALLMARKSで示されている、12の老化要因の内、11の要因にアプローチ",
      "ヒト臨床試験に基づいた理想的なNMN含有量",
      "PQQ、コエンザイムQ10、フィセチンによる相乗効果",
      "昭和大学 薬学部 基礎医療薬学講座 佐藤均教授との共同開発"
    ],
    specs: {
      "内容量": "60粒（30日分）",
      "主要成分": "NMN, PQQ, コエンザイムQ10, フィセチン",
      "原産国": "日本"
    },
    price: "¥00,000"
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
    price: "¥00,000"
  },
  "honsoureishihoushi": {
    name: "本草霊芝胞子",
    tagline: "190年の歴史を持つ漢方薬局「本草閣」監修・厳選",
    description: "生薬の質に注目した『本草霊芝胞子』。貴重な国産（長野県）霊芝胞子の1包1000mgを主成分に、メシマコブ、アガリクス、冬虫夏草を独自配合しています。生薬の質は漢方の命であり、菌種、栽培環境、栽培方法によって薬効性が大きく異なることが長年の研究でわかってきています。本製品は安心・安全の元にお客様に本物を伝えるという本草閣の理念のもとで、漢方の効果が最大限に引き出されるように、厳選した素材と独自配合に徹底的にこだわった商品です。本草閣は1830年に創業された、現存する日本最古の漢方薬局です。第９代目当主秋山あかね氏により創業190年の知恵を用いて原材料から配合まで全てこだわって作った漢方健康食品です。キノコには免疫を高め体にとって有害物質を排除する働きがあることは多くの方に知られていますが、本草閣は優れた４種のキノコ類を本草閣独自の配合により最大限の効果が実感できるように考えて作られています。キノコの菌は土壌のエネルギーや栄養素を取り込んで育ちます。そのため栽培環境がとても大事な要素となっています。本製品に使用しているキノコは、自然環境が豊かな長野県産です。",
    img: "https://welabo.jp/wp-content/uploads/honsoureishihoushi_01_0-scaled.jpg",
    gallery: [
      "https://welabo.jp/wp-content/uploads/honsoureishihoushi_02_0-scaled.jpg",
      "https://welabo.jp/wp-content/uploads/honsoureishihoushi_03.jpg",
      "https://welabo.jp/wp-content/uploads/honsoureishihoushi_04.jpg",
      "https://welabo.jp/wp-content/uploads/honsoureishihoushi_img05.jpg"
    ],
    ingredients: [
      {
        title: "霊芝 －免疫T細胞活性化－",
        subtitle: "霊芝胞子（細胞壁破壊）長野県産",
        description: "霊芝胞子の有用成分の種類と含有量が霊芝の「子実体」や「菌糸体」よりも多く、「霊芝の凝縮エッセンス」と呼ばれています。本草閣が契約している長野県の栽培農家は、霊芝の傘に乗った胞子（霊芝胞子）を手作業で丁寧に採取しており、収穫期間は1年にわずか15日程度という非常に希少な原料です。厚い殻（細胞壁）をまとっている霊芝胞子は、体内に吸収されにくい性質のため、特殊な技術である低温気流物理破壊法を用いて、霊芝胞子の細胞壁を高精度に粉砕し吸収しやすくしています。"
      },
      {
        title: "メシマコブ（桑黄） －免疫マクロファージ細胞活性化－",
        subtitle: "メシマコブ（桑黄）菌糸体",
        description: "メシマコブは、長崎県男女群島の女島（めしま）に自生する桑の木に、コブ状に寄生するキノコであることから名付けられました。天然に採取することが難しく、栽培も極めて困難であることから幻のキノコとも呼ばれ、その研究は日本から始まり世界に広がっています。「メシマコブ菌糸体」は根本部分を培養し粉砕された素材で、この「菌糸体」にはポリフェノールが豊富に含まれており、さらにβグルガン成分は5%以上含まれています。"
      },
      {
        title: "アガリクス（姫松茸） －免疫 NK細胞活性化－",
        subtitle: "アガリクス（姫松茸）菌糸体",
        description: "アガリクスは、ハラタケ科ハラタケ属（アガリクス属）のキノコです。多糖体（β-Dグルガン、βグルガン）・タンパク質・ビタミン・ミネラル・RNAなど、さまざまな栄養素が豊富に含まれています。特に注目すべきは、キノコ特有のβ-グルカンが豊富に含まれていることです。「アガリクス菌糸体」は、キノコの根本部分である菌糸の部分を培養し粉砕した素材で、βグルガンが25%以上含まれている原料を厳選して使用しています。"
      },
      {
        title: "冬虫夏草 －有害成分をアポトーシス－",
        subtitle: "冬虫夏草 子実体",
        description: "冬虫夏草は子嚢菌類のキノコの一種で、中国では昔から漢方素材とされています。「冬虫夏草子実体」は、注目の成分であるコルジセピン成分を1%以上含む原料を厳選して使用しています。コルジセピンは冬虫夏草からのみ採取できる成分です。冬虫夏草子実体からほかにもD-マンニトール・メラトニン・キチン・キトサンなど様々な栄養素が含まれています。"
      }
    ],
    honzokaku: {
      title: "「本草閣」－本草の本物を伝える－",
      subtitle: "1830年創業 和薬・漢方の「本草閣」（本草閣本店は名古屋市認定地域建造物資産に認定）",
      owner: "「本草閣」9代目当主 秋山あかね氏",
      description: "現存する日本最古の漢方薬局です。「お客様のために本物を伝える」その思いは創業当時から引き継がれ、素材に徹底したこだわりを持ち、産地、栽培方法、収穫時期、色、香り、大きさ、刻み方など、長年漢方を取り扱い培ってきた「目利き」により選び抜いています。",
      ownerBio: "1830年創業の和薬・漢方の本草閣を受け継ぐ第九代当主。薬剤師、本草研究家。「医学薬学だけに留まらず東洋の深淵を伝える」という志を持ち、養生方、漢方処方、漢方史、日本伝統文化の他、各国の伝統医学、西洋医学での在宅医療など講演会やセミナーなど基調講演などを多数行っている。"
    },
    gmp: "GMP（Good Manufacturing Practice）=「適正製造規範」とは、原材料の受入から製品出荷までの全製造工程において、きめ細かく具体的に管理することです。第三者機関が品質管理体制を客観的に審査・査察を行い、認められた工場のみが認定されます。「本草霊芝胞子」は、健康食品GMPの認証を受けた日本国内工場で厳重な品質管理、衛生管理のもと、最終包装まで一貫して行っています。",
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
  
  if (!slug) {
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

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
          <Link href="/products" className="text-sm underline">Return to Products</Link>
        </div>
      </div>
    );
  }

  const isHonsoureishihoushi = slug === "honsoureishihoushi";

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <SiteHeader />

      <main className="pt-32">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          {/* Product Header */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-32">
            {/* Image Gallery */}
            <div className="lg:w-1/2">
              <div className="relative aspect-[3/4] w-full bg-[#F5F5F5] mb-4 overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className={isHonsoureishihoushi ? "object-contain p-4" : "object-cover"}
                  unoptimized
                />
              </div>
              {/* Thumbnail Gallery */}
              {isHonsoureishihoushi && product.gallery && (
                <div className="grid grid-cols-2 gap-4">
                  {product.gallery.map((thumbImg: string, index: number) => (
                    <div key={index} className="relative aspect-square w-full bg-[#F9F9F9] overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
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
              <h1 className="text-4xl md:text-6xl font-thin mb-4 leading-tight">{product.name}</h1>
              <p className="text-lg text-gray-600 font-light mb-12">{product.tagline}</p>
              
              <div className="mb-12">
                <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify mb-8">
                  {product.description}
                </p>
              </div>

              <div className="border-t border-b border-gray-100 py-8 mb-12">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs uppercase tracking-widest text-gray-400">Price</span>
                  <span className="text-2xl font-medium">{product.price} <span className="text-xs font-light text-gray-400">(tax included)</span></span>
                </div>
              </div>

              <Button className="w-full bg-[#1A1A1A] text-white hover:bg-gray-800 h-14 rounded-none text-xs tracking-[0.2em] mb-12">
                ADD TO CART
              </Button>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="details">
                  <AccordionTrigger className="text-sm tracking-widest font-light uppercase">Details & Specs</AccordionTrigger>
                  <AccordionContent>
                    <dl className="space-y-4 py-4">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="grid grid-cols-3 text-sm font-light">
                          <dt className="text-gray-400">{key}</dt>
                          <dd className="col-span-2 text-gray-800">{value as React.ReactNode}</dd>
                        </div>
                      ))}
                    </dl>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="usage">
                  <AccordionTrigger className="text-sm tracking-widest font-light uppercase">おすすめのお召し上がり方</AccordionTrigger>
                  <AccordionContent className="text-sm font-light text-gray-600 leading-relaxed py-4">
                    {isHonsoureishihoushi ? product.usage : "健康補助食品として、1日1包を、水などでお召し上がりください。"}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Ingredients Section - Only for honsoureishihoushi */}
          {isHonsoureishihoushi && product.ingredients && (
            <section className="mb-32 py-16 border-t border-gray-100">
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-thin mb-8">配合成分と働きについて</h2>
                <div className="space-y-16">
                  {product.ingredients.map((ingredient: any, index: number) => (
                    <div key={index} className="max-w-4xl">
                      <h3 className="text-xl md:text-2xl font-light mb-2">{ingredient.title}</h3>
                      <p className="text-sm text-gray-500 mb-4">{ingredient.subtitle}</p>
                      <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify">
                        {ingredient.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Honzokaku Section - Only for honsoureishihoushi */}
          {isHonsoureishihoushi && product.honzokaku && (
            <section className="mb-32 py-16 border-t border-gray-100">
              <div className="max-w-4xl">
                <h2 className="text-2xl md:text-3xl font-thin mb-4">{product.honzokaku.title}</h2>
                <p className="text-sm text-gray-500 mb-8">{product.honzokaku.subtitle}</p>
                <p className="text-lg font-light mb-6">{product.honzokaku.owner}</p>
                <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify mb-8">
                  {product.honzokaku.description}
                </p>
                <div className="pl-6 border-l-2 border-[#D4C5B0]">
                  <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify italic">
                    {product.honzokaku.ownerBio}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* GMP Section - Only for honsoureishihoushi */}
          {isHonsoureishihoushi && product.gmp && (
            <section className="mb-32 py-16 border-t border-gray-100">
              <div className="max-w-4xl">
                <h2 className="text-2xl md:text-3xl font-thin mb-8">安心品質の証「GMP認証」取得工場で製造</h2>
                <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify">
                  {product.gmp}
                </p>
              </div>
            </section>
          )}

          {/* Aging Hallmarks Section - Only for honsoureishihoushi */}
          {isHonsoureishihoushi && product.agingHallmarks && (
            <section className="mb-32 py-16 border-t border-gray-100">
              <div className="max-w-4xl">
                <h2 className="text-2xl md:text-3xl font-thin mb-8">AGING HALLMARKSに沿った開発・展開</h2>
                <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify">
                  {product.agingHallmarks}
                </p>
              </div>
            </section>
          )}

          {/* Stores Section - Only for honsoureishihoushi */}
          {isHonsoureishihoushi && product.stores && (
            <section className="mb-32 py-16 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-thin mb-12">販売店舗情報</h2>
              
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-lg font-light mb-8 text-gray-700">東日本地方</h3>
                  <div className="space-y-8">
                    {product.stores.east.map((store: any, index: number) => (
                      <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                        <h4 className="text-sm font-medium mb-2">{store.name}</h4>
                        <p className="text-xs text-gray-600 mb-1">{store.address}</p>
                        <p className="text-xs text-gray-500">{store.tel}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-light mb-8 text-gray-700">西日本地方</h3>
                  <div className="space-y-8">
                    {product.stores.west.map((store: any, index: number) => (
                      <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                        <h4 className="text-sm font-medium mb-2">{store.name}</h4>
                        <p className="text-xs text-gray-600 mb-1">{store.address}</p>
                        <p className="text-xs text-gray-500">{store.tel}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-4">オンラインショップでのご購入はこちら</p>
                <Link href="https://welabo.jp/shopping/honsoureishihoushi/" target="_blank" className="text-sm underline text-[#D4C5B0] hover:text-[#1A1A1A] transition-colors">
                  Amazon製品ページはこちら →
                </Link>
              </div>
            </section>
          )}
        </div>

        <SiteFooter />
      </main>
    </div>
  );
}

