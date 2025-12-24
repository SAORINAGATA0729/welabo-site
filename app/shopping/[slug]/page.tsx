"use client";
// Fixed: addToCart now correctly passes quantity as second parameter (not in object)

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import { useCart } from "@/lib/context/cart-context";

// Product Data
const productData: Record<string, any> = {
  "luxury-nmn-15000": {
    name: "LUXURY NMN 15000",
    price: "88,560",
    description: "LUXURY NMN 15000は、高濃度のNMNとあわせて、PQQ・コエンザイムQ10・フィセチンを配合しています。その相乗効果で、より高いパワーが期待されるサプリメントです。",
    images: [
      "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png",
      "https://images.unsplash.com/photo-1617524783361-933385cc7c74?q=80&w=1000&auto=format&fit=crop", // Dummy
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop", // Dummy
      "https://images.unsplash.com/photo-1571781926291-280553fb8566?q=80&w=1000&auto=format&fit=crop", // Dummy
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop", // Dummy
    ],
    specs: {
      name: "NMN含有加工食品",
      ingredients: "β-NMN（国内製造）、コエンザイムQ10、でん粉、デキストリン、ピロロキノリンキノンニナトリウム塩（PQQ）、フィセチン/HPMC、ステアリン酸カルシウム、リン酸三カルシウム、二酸化ケイ素",
      capacity: "43.8g（120粒×1粒の重量365mg、1粒の内容量290mg）",
      expiry: "製品の右側面下部に記載",
      storage: "高温多湿及び直射日光を避け、涼しい所に保存してください。本品のβ-NMNは日本国内で製造したものを使用しています。",
      nutrition: {
        energy: "1.53kcal",
        protein: "0.08g",
        lipid: "0.05g",
        carbohydrate: "0.2g",
        salt: "0.004g"
      }
    },
    usage: "健康補助食品として、1日4粒を、昼食後に水などでお召し上がりください。",
    precautions: [
      "乳幼児の手の届かないところに置いてください。",
      "食物アレルギーのある方、薬を服用したり通院中の方は、お召し上がりになる前にお医者様とご相談ください。",
      "食品のため衛生的な環境でお取り扱いください。",
      "本品は原材料の性質上、外観やにおいに多少の違いが生じる場合がございます。",
      "お気づきの点がございましたら、お客様窓口までご連絡ください。"
    ]
  },
  "luxury-nmn-15000-3set": {
    name: "LUXURY NMN 15000 3個セット",
    price: "239,112",
    description: "【10%OFF】継続してケアしたい方向けのお得な3個セットです。通常購入（88,560円×3＝265,680円）より26,568円お得にお求めいただけます。ご家族やパートナーとのシェアにもおすすめです。",
    images: [
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/06/00/1_000000000006.png?1694410542",
      "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png"
    ],
    specs: {
      name: "NMN含有加工食品",
      ingredients: "β-NMN（国内製造）、コエンザイムQ10、でん粉、デキストリン、ピロロキノリンキノンニナトリウム塩（PQQ）、フィセチン/HPMC、ステアリン酸カルシウム、リン酸三カルシウム、二酸化ケイ素",
      capacity: "43.8g（120粒×1粒の重量365mg、1粒の内容量290mg）× 3個",
      expiry: "製品の右側面下部に記載",
      storage: "高温多湿及び直射日光を避け、涼しい所に保存してください。本品のβ-NMNは日本国内で製造したものを使用しています。",
      nutrition: {
        energy: "1.53kcal",
        protein: "0.08g",
        lipid: "0.05g",
        carbohydrate: "0.2g",
        salt: "0.004g"
      }
    },
    usage: "健康補助食品として、1日4粒を、昼食後に水などでお召し上がりください。",
    precautions: [
      "乳幼児の手の届かないところに置いてください。",
      "食物アレルギーのある方、薬を服用したり通院中の方は、お召し上がりになる前にお医者様とご相談ください。",
      "食品のため衛生的な環境でお取り扱いください。",
      "本品は原材料の性質上、外観やにおいに多少の違いが生じる場合がございます。"
    ]
  },
  "luxury-nmn-15000-bag-2months": {
    name: "LUXURY NMN 15000 袋包装（2か月分）",
    price: "176,040",
    description: "2ヶ月分のLUXURY NMN 15000を袋包装でお届けします。ライフスタイルに合わせて無理なく続けられます。",
    images: [
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/07/00/2_000000000007.png?1707984893",
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/07/00/3_000000000007.png?1707984893",
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/07/00/4_000000000007.png?1707984893",
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/07/00/5_000000000007.png?1707984893"
    ],
    specs: {
      name: "NMN含有加工食品",
      ingredients: "β-NMN（国内製造）、コエンザイムQ10、でん粉、デキストリン、ピロロキノリンキノンニナトリウム塩（PQQ）、フィセチン/HPMC、ステアリン酸カルシウム、リン酸三カルシウム、二酸化ケイ素",
      capacity: "43.8g（120粒×1粒の重量365mg、1粒の内容量290mg）× 2個",
      expiry: "製品の右側面下部に記載",
      storage: "高温多湿及び直射日光を避け、涼しい所に保存してください。本品のβ-NMNは日本国内で製造したものを使用しています。",
      nutrition: {
        energy: "1.53kcal",
        protein: "0.08g",
        lipid: "0.05g",
        carbohydrate: "0.2g",
        salt: "0.004g"
      }
    },
    usage: "健康補助食品として、1日4粒を、昼食後に水などでお召し上がりください。",
    precautions: [
      "乳幼児の手の届かないところに置いてください。",
      "食物アレルギーのある方、薬を服用したり通院中の方は、お召し上がりになる前にお医者様とご相談ください。",
      "食品のため衛生的な環境でお取り扱いください。",
      "本品は原材料の性質上、外観やにおいに多少の違いが生じる場合がございます。"
    ]
  },
  "luxury-probiotics": {
    name: "LUXURY PROBIOTICS+",
    price: "18,360",
    description: "生きて腸まで届く乳酸菌を配合した、お腹の環境について細部まで拘ったサプリメント。59種類の植物発酵エキス、納豆菌、酢酸、酪酸などの生菌が力を合わせ、きれいな腸内フローラ環境を作ります。",
    images: [
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/01/00/1_000000000001.jpg?1678209904",
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/01/00/2_000000000001.jpg?1678209904",
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/01/00/3_000000000001.jpg?1678209904",
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/01/00/4_000000000001.jpg?1678209904",
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/01/00/5_000000000001.png?1678209904",
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/01/00/6_000000000001.png?1678209904",
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/01/00/7_000000000001.png?1678209904",
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/01/00/8_000000000001.png?1678209904",
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/01/00/9_000000000001.jpg?1678209904",
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/01/00/10_000000000001.jpg?1678209904",
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/01/00/11_000000000001.jpg?1678209904",
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/01/00/12_000000000001.jpg?1678209904",
      "https://makeshop-multi-images.akamaized.net/welabo/shopimages/01/00/13_000000000001.jpg?1678209904"
    ],
    specs: {
      name: "乳酸菌含有加工食品",
      ingredients: "植物発酵エキス末（デキストリン、植物発酵エキス）（国内製造）、有胞子性乳酸菌、酪酸菌末、納豆菌末、酢酸菌末／HPMC、結晶セルロース、ステアリン酸カルシウム、微粒二酸化ケイ素、ジェランガム、（一部に乳成分・大豆・リンゴ・バナナ・ヤマイモ・キウイフルーツを含む）",
      capacity: "30包",
      expiry: "製品の枠外下部に記載",
      storage: "高温多湿及び直射日光を避け、涼しい所に保存してください。",
      nutrition: {
        energy: "---",
        protein: "---",
        lipid: "---",
        carbohydrate: "---",
        salt: "---"
      }
    },
    usage: "1日1包を目安に、水またはぬるま湯とともにお召し上がりください。",
    precautions: [
      "乳幼児の手の届かないところに置いてください。",
      "食物アレルギーのある方、薬を服用したり通院中の方は、お召し上がりになる前にお医者様とご相談ください。"
    ]
  },
  "honsoureishihoushi": {
    name: "本草霊芝胞子",
    price: "91,800",
    description: "貴重な国産（長野県）霊芝胞子の1包1000mgを主成分に、メシマコブ、アガリクス、冬虫夏草を独自配合しています。",
    images: [
      "https://welabo.jp/wp-content/uploads/honsoureishihoushi_01_0-scaled.jpg",
      "https://welabo.jp/wp-content/uploads/honsoureishihoushi_02_0-scaled.jpg",
      "https://welabo.jp/wp-content/uploads/honsoureishihoushi_03.jpg",
      "https://welabo.jp/wp-content/uploads/honsoureishihoushi_04.jpg",
      "https://welabo.jp/wp-content/uploads/honsoureishihoushi_img05.jpg"
    ],
    specs: {
      name: "霊芝胞子含有加工食品",
      ingredients: "霊芝胞子末（国内製造）、メシマコブ菌糸体末、アガリクス菌糸体末、冬虫夏草子実体末",
      capacity: "30包",
      expiry: "製品の枠外下部に記載",
      storage: "高温多湿及び直射日光を避け、涼しい所に保存してください。",
      nutrition: {
        energy: "---",
        protein: "---",
        lipid: "---",
        carbohydrate: "---",
        salt: "---"
      }
    },
    usage: "健康補助食品として、1日1包を、水などでお召し上がりください。※寝る1時間くらい前がおすすめです。",
    precautions: [
      "乳幼児の手の届かないところに置いてください。",
      "食物アレルギーのある方、薬を服用したり通院中の方は、お召し上がりになる前にお医者様とご相談ください。"
    ]
  }
};

export default function ShoppingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string | undefined;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
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

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <SiteHeader />

      <main className="pt-24 md:pt-32">
        <div className="container mx-auto px-6 md:px-12 pb-32 mt-8 md:mt-0">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <div className="relative aspect-square w-full bg-[#F5F5F5] mb-4 overflow-hidden group">
                <Image
                  src={product.images[selectedImageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-500"
                  unoptimized
                />
                
                {/* Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button 
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
                    >
                      <ChevronRight className="w-6 h-6 rotate-180 text-gray-800" />
                    </button>
                    <button 
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>
                  </>
                )}
              </div>
              
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-5 gap-4">
                  {product.images.map((img: string, i: number) => (
                    <div 
                      key={i} 
                      className={`relative aspect-square bg-[#F9F9F9] cursor-pointer transition-all duration-300 ${
                        selectedImageIndex === i ? 'ring-1 ring-[#1A1A1A] opacity-100' : 'opacity-60 hover:opacity-100'
                      }`}
                      onClick={() => setSelectedImageIndex(i)}
                    >
                       <Image
                        src={img}
                        alt={`${product.name} ${i+1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info Section */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-light mb-2">{product.name}</h1>
              <div className="text-2xl font-medium mb-8">
                {product.price}円 <span className="text-xs font-normal text-gray-500">(税込)</span>
              </div>

              <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify mb-8">
                {product.description}
              </p>

              {/* Member Benefits */}
              <div className="bg-[#F9F9F9] p-8 mb-12 border border-gray-100">
                <h3 className="text-sm font-medium tracking-widest uppercase mb-6 text-center">【会員登録特典】</h3>
                <ul className="space-y-4 text-sm font-light text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D4C5B0] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    送料無料
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D4C5B0] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    新規登録時に500ポイントプレゼント
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D4C5B0] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    商品価格（税込）の5％ポイント還元
                  </li>
                </ul>
                <div className="mt-8 space-y-3">
                  <Link href="/register" className="block w-full text-center text-xs tracking-widest py-3 border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all">
                    新規会員登録はこちら
                  </Link>
                  <Link href="/login" className="block w-full text-center text-xs tracking-widest py-3 text-gray-500 hover:text-[#1A1A1A] transition-colors">
                    登録済みの方はこちらからログイン
                  </Link>
                </div>
              </div>

              {/* Quantity & Cart */}
              <div className="flex gap-4 mb-8">
                <div className="w-24 border border-gray-200 flex items-center justify-center">
                  <input 
                    type="number" 
                    min="1" 
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full h-14 text-center border-none focus:ring-0 text-lg font-light"
                  />
                </div>
                <Button 
                  onClick={async () => {
                    // Add item to cart with explicit variables
                    const itemToAdd = {
                      id: product.id || slug,
                      name: product.name,
                      price: parseInt(product.price.replace(/[^0-9]/g, '')),
                      img: product.images[0]
                    };
                    addToCart(itemToAdd, quantity);
                    
                    await router.push('/cart');
                    window.scrollTo(0, 0);
                  }}
                  className="flex-1 h-14 bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] hover:border-[#1A1A1A] rounded-none text-xs tracking-[0.2em] transition-all duration-300"
                >
                  カートに入れる
                </Button>
              </div>

              {/* Specs */}
              <div className="border-t border-gray-200 pt-12">
                <h3 className="text-lg font-light mb-8">商品仕様</h3>
                <dl className="space-y-6 text-sm font-light leading-relaxed">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <dt className="text-gray-500 font-medium">名称</dt>
                    <dd className="md:col-span-2 text-gray-800">{product.specs.name}</dd>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <dt className="text-gray-500 font-medium">原材料名</dt>
                    <dd className="md:col-span-2 text-gray-800">{product.specs.ingredients}</dd>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <dt className="text-gray-500 font-medium">内容量</dt>
                    <dd className="md:col-span-2 text-gray-800">{product.specs.capacity}</dd>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <dt className="text-gray-500 font-medium">賞味期限</dt>
                    <dd className="md:col-span-2 text-gray-800">{product.specs.expiry}</dd>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <dt className="text-gray-500 font-medium">保存方法</dt>
                    <dd className="md:col-span-2 text-gray-800">{product.specs.storage}</dd>
                  </div>
                </dl>

                {product.specs.nutrition && (
                  <div className="mt-8 bg-gray-50 p-6">
                    <h4 className="text-sm font-medium mb-4">栄養成分表示（1粒380mg当たり）</h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs text-gray-600">
                      <div>
                        <span className="block text-gray-400 mb-1">エネルギー</span>
                        {product.specs.nutrition.energy}
                      </div>
                      <div>
                        <span className="block text-gray-400 mb-1">たんぱく質</span>
                        {product.specs.nutrition.protein}
                      </div>
                      <div>
                        <span className="block text-gray-400 mb-1">脂質</span>
                        {product.specs.nutrition.lipid}
                      </div>
                      <div>
                        <span className="block text-gray-400 mb-1">炭水化物</span>
                        {product.specs.nutrition.carbohydrate}
                      </div>
                      <div>
                        <span className="block text-gray-400 mb-1">食塩相当量</span>
                        {product.specs.nutrition.salt}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Description & Usage */}
              <div className="border-t border-gray-200 mt-12 pt-12">
                <h3 className="text-lg font-light mb-8">商品説明</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-medium mb-4">おすすめのお召し上がり方</h4>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      {product.usage}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-4">ご注意</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 font-light leading-relaxed">
                      {product.precautions.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-4">健康補助食品</h4>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      食生活は、主食、主菜、副菜を基本に、食事のバランスを。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <SiteFooter />
      </main>
    </div>
  );
}
