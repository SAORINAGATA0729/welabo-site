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
    description: "「LUXURY PROBIOTICS+」は、生きて腸まで届く乳酸菌を※配合した、お腹の環境について細部まで拘ったサプリメントです。※有胞子乳酸菌",
    img: "https://welabo.jp/wp-content/uploads/LUXURY_PROBIOTICS_00.jpg",
    features: [
      "生きて腸まで届く乳酸菌を配合",
      "59種類の植物発酵エキス、納豆菌、酢酸、酪酸などを配合",
      "AGING HALLMARKSの12の老化要因の内、2つの要因にアプローチ",
      "昭和大学 名誉教授 二木芳人氏 推薦",
      "国内GMP認定工場にて製造"
    ],
    ingredientsSections: [
      {
        title: "植物発酵エキス末",
        description: "59種類の植物性原料を使用し、3年間かけて発酵・熟成させたエキス末です。植物はアブラナ科の野菜を中心に、旬の収穫・露地栽培にこだわり、科学肥料や農薬を使わず育てられたものを採用しています。"
      },
      {
        title: "納豆菌",
        description: "納豆菌（枯草菌）は、納豆を作るのに欠かせないもの。脂肪やタンパク質を強力に分解する酵素をつくる有用菌です。胃酸に強く腸まで届き、消化を助けながらアミノ酸などの栄養生成をサポートします。腸内環境を整える働きし、代謝やスッキリに役立つ菌として注目されています。"
      },
      {
        title: "ビフィズス菌B-3",
        description: "ヒトや動物の腸内に存在する乳酸菌の仲間で、腸内で働く代表的な善玉菌で、特に腸内バランスを整える働きが高く、スッキリ感や健康維持に役立つ菌として注目されています。乳酸や酪酸などの短鎖脂肪酸をつくって悪玉菌の増殖をしっかり抑える力が特長です。"
      },
      {
        title: "有胞子乳酸菌",
        description: "普通の乳酸菌と異なり、強い殻で守られた「胞子」という状態になるのが特徴です。熱や酸に非常に強く、しっかり腸まで届く乳酸菌です。腸内では悪玉菌を抑える短鎖脂肪酸である乳酸をつくり、ビフィズス菌など善玉菌の働きを力強くサポートします。確かな働きを発揮する機能性乳酸菌です。"
      },
      {
        title: "酪酸菌",
        description: "酪酸菌は、腸の健康に欠かせない短鎖脂肪酸「酪酸」を唯一つくり出せる特別な菌です。酪酸は腸のエネルギー源となり、腸内環境のバランス維持やバリア機能のサポートにも関わります。乳酸菌やビフィズス菌では生み出せない酪酸を補うことで、腸のコンディションをより根本から整えることが期待できます。"
      },
      {
        title: "生菌を腸まで届けるカプセル",
        description: "文言はアテデス文言はアテデス文言はアテデス文言はアテデス文言はアテデス文言はアテデス文言はアテデス文言はアテデス文言はアテデス文言はアテデス文言はアテデス文言はアテデス文言はアテデス"
      }
    ],
    professor: {
      title: "推薦の言葉",
      name: "昭和大学 名誉教授 二木芳人",
      description: "「良好な腸内環境を維持する事は、健康な生活の基本です」",
      bio: "昭和大学 名誉教授 1976年川崎医科大学卒業。同大学呼吸器内科を経て、1988年から米国ニューヨーク・Memorial Sloan-Kettering Cancer Centerに留学。1990年に帰国後は、川崎医科大学、倉敷第一病院呼吸器センターを経て、2006年より昭和大学医学部 臨床感染症学講座 教授。2017年より同特任教授、2020年より同客員教授、2024年より現職。日本化学療法学会、日本感染症学会、日本呼吸器学会等、多数の学会に所属。"
    },
    specs: {
      "内容量": "30包",
      "主要成分": "乳酸菌, 植物発酵エキス, 納豆菌, 酪酸菌",
      "原産国": "日本"
    },
    usage: "健康補助食品として、1日3粒（1袋）を、就寝前に水などでお召し上がりください。※寝る1時間くらい前がおすすめです。",
    agingHallmarks: "HALLMARKS に示される 12 の要因に着目し、その多くの要因にアプローチすることが期待される成分構成を目指しています。",
    price: "¥18,360",
    amazonLink: "https://www.amazon.co.jp/",
    stores: {
      east: [
        { name: "伊勢丹 新宿店 B2F", address: "〒160-0022 東京都新宿区新宿3-14-1", tel: "03-3352-1111" },
        { name: "銀座三越 7F", address: "〒104-8212 東京都中央区銀座4-6-16", tel: "03-3562-1111" },
        { name: "三越日本橋本店 4F", address: "〒103-8001 東京都中央区日本橋室町1-4-1", tel: "03-3241-3311" },
        { name: "京王百貨店新宿店 8F", address: "〒160-8321 東京都新宿区西新宿1-1-4", tel: "0570-022-810" },
        { name: "伊勢丹浦和店 6F", address: "〒330-0063 埼玉県さいたま市浦和区高砂1-15-1", tel: "048-825-3990" },
        { name: "新潟伊勢丹 3F", address: "〒950-8589 新潟県新潟市中央区八千代1-6-1", tel: "025-242-1111" }
      ],
      west: [
        { name: "松坂屋名古屋店 本館7F", address: "〒460-8430 愛知県名古屋市中区栄3-16-1", tel: "052-251-1111" },
        { name: "阪神梅田本店 B1F", address: "〒530-8224 大阪市北区梅田1-13-13", tel: "06-6345-1201" },
        { name: "ジェイアール京都伊勢丹 B2F", address: "〒600-8555 京都府京都市下京区烏丸通塩小路下ル東塩小路町", tel: "075-352-1111" },
        { name: "あべのハルカス近鉄本店 ウィング館B2F", address: "〒545-8545 大阪市阿倍野区阿倍野筋1-1-43", tel: "06-6624-1111" },
        { name: "福屋八丁堀本店 6F", address: "〒730-8548 広島県広島市中区胡町6-26", tel: "082-246-6111" }
      ]
    }
  },
  "honsoureishihoushi": {
    name: "本草霊芝胞子",
    description: "産地と栽培環境によって大きく差が出るとされる生薬の素材の「質」と「量」に着目し、こだわり抜いた漢方発想のサプリメントです。貴重な国産（長野県）霊芝胞子の1包1000mgを主成分にメシマコブ、アガリクス、冬虫夏草を独自配合しています。素材本来の力を大切にしながら、日々のコンディションに寄り添う設計を目指しています。主成分には、国内でも希少価値の高い長野県産霊芝胞子を1包あたり1000mgという贅沢な量で配合。さらに、メシマコブ・アガリクス・冬虫夏草という、古来より尊ばれてきた４種のキノコを独自の比率で配合しました。素材が育つ土壌・水・空気といった環境の質がそのまま力に現れます。本製品は自然の恵みが最も美しく宿る長野県の豊かな環境で育ったものを厳選しております。本物の素材が松奥深いパワー、確かな品質を追求した逸品です。４つの成分が上質に調和し、繊細でありながら、力強いバランスで日々の巡りをサポートし、年齢によるゆらぎ、よりクリアで軽やかな日々を寄り添います。",
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
        description: "霊芝胞子（長野県産）霊芝の胞子は、子実体や菌糸体より有用成分の種類と含有量が豊富で、「霊芝のエッセンスが凝縮した部分」と呼ばれる素材です。長野県の自然豊かな環境で育った霊芝から、傘に付着した胞子を手作業で丁寧に採取しており、収穫できる期間は1年間でわずか15日ほどとされる非常に希少価値が高い原料です。霊芝胞子は、厚い殻という細胞壁に包まれているため、そのままでは吸収されにくいという特性があります。本製品では「低温気流物理破砕法」という特殊技術を用い、霊芝胞子の細胞壁を高精度に粉砕、熱をかけずに貴重な成分を守りながら、体内で働きやすい状態に仕上げています。"
      },
      {
        title: "メシマコブ（桑黄） －免疫マクロファージ細胞活性化－",
        description: "メシマコブは、桑の木に寄生するキノコで、天然に採取することが難しく、栽培も極めて困難であることから幻のキノコとも呼ばれています。その研究は日本から始まり世界に広がっています。メシマコブには、免疫マクロファージ細胞を活性化させる働きがあるとされ、古来より健康維持に役立つ素材として珍重されてきました。"
      },
      {
        title: "アガリクス（姫松茸） －免疫 NK細胞活性化－",
        description: "アガリクス（姫松茸）は、ブラジル原産のキノコで、特に注目すべきは、キノコ特有のβ-グルカンが豊富に含まれていることです。β-グルカンは、免疫NK細胞を活性化させる働きがあるとされ、健康維持に役立つ成分として知られています。本製品では、厳選されたアガリクスを配合し、その有効成分を最大限に活かしています。"
      },
      {
        title: "冬虫夏草 －有害成分をアポトーシス－",
        description: "冬虫夏草は子嚢菌類のキノコの一種で、中国では昔から漢方素材として珍重されてきました。冬虫夏草には、有害成分をアポトーシス（細胞の自然死）に導く働きがあるとされ、健康維持に役立つ素材として注目されています。本製品では、厳選された冬虫夏草を配合し、その有効成分を最大限に活かしています。"
      }
    ],
    agingHallmarks: "老化研究の世界基準であるAGING HALLMARKSで、12の老化要因に着目し、その多くの要因にアプローチすることが期待される成分構成を目指しています。",
    safety: {
      title: "安心品質の証「GMP認証」取得工場で製造",
      sections: [
        {
          title: "",
          description: "GMP（Good Manufacturing Practice）=「適正製造規範」とは、原材料の受入から製品出荷までの全製造工程において、きめ細かく具体的に管理することです。第三者機関が品質管理体制を客観的に審査・査察を行い、認められた工場のみが認定されます。",
          image: "https://welabo.jp/wp-content/uploads/concept04.png"
        }
      ]
    },
    usage: "健康補助食品として、1日1包を、水などでお召し上がりください。※寝る1時間くらい前がおすすめです。",
    specs: {
      "内容量": "30包",
      "主要成分": "霊芝胞子, メシマコブ, アガリクス, 冬虫夏草",
      "原産国": "日本"
    },
    price: "¥91,800",
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
  "luxury-nmn-15000-packet": {
    name: "LUXURY NMN 15000 袋包装（2か月分）",
    description: "NMN（ニコチンアミドモノヌクレオチド）は、ビタミンB3を原料としてつくられる成分で、年齢とともに減少する生体内物質「NAD」の元となります。「LUXURY NMN 15000」は、ヒト臨床試験に基づいた理想的な含有量を配合。さらに、PQQ、コエンザイムQ10、フィセチンとの組み合わせで、よりパワフルに、かつてない「実感力」を実現しました。",
    img: "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png",
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
        description: "NMNとは、正式名称「ニコチンアミドモノヌクレオチド」。ビタミンB3を原料としてつくられる成分です。ヒトやあらゆる生物に存在し体内で自然に生成されている物質ですが、年齢とともに減少すると考えられています。NMNは体内で、エネルギーを生み出す際に必須な補酵素NAD（ニコチンアミドアデニンジヌクレオチド）に変換されます。"
      },
      {
        title: "そこで「NMN」が重要",
        description: "年齢とともに体内で減少するNAD量。減少したNADを補うため、体内でNADに変化されるNMNを摂取することが大切です。NMNはあらゆる生物の細胞に存在しており緑黄色野菜やフルーツなどにも含まれていますが、その含有量はごくわずかです。1瓶に国産NMNを15000mg配合し、NMNの摂取目安量としては、500mg/日 摂ることができます。また、セノリティクスに注目されている成分フィセチンを1500mg、そら豆や枝豆に含まれるハッキリ成分PQQを1800mg、若々しさをサポートするコエンザイムQ10を4500mg配合しています。快適な毎日をサポートします。"
      },
      {
        title: "PQQ・コエンザイムQ10・フィセチン配合",
        description: "フィセチン（1500mg配合）は、ポリフェノール類の一種で、カラダの内側からキレイにしてくれます。PQQ（1800mg配合）は、ビタミン様物質で、冴えや記憶にかかわる、たんぱく質「NGF」を助けるはたらきがあります。コエンザイムQ10（4500mg配合）は、エネルギーづくりに欠かせない成分です。さらにPQQと一緒に摂ることで、より高いパワーが期待されます。"
      },
      {
        title: "胃酸に強い耐酸性カプセル使用",
        description: "胃酸や唾液でNMNを損なうことなく、貴重な成分をより効率よく届けるために、耐酸性カプセルを採用しました。胃酸からNMNを保護し、NMNを腸まで届けます。"
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
      "内容量": "87.6g（120粒×2袋×1粒の重量365mg、1粒の内容量290mg）",
      "主要成分": "β-NMN, PQQ, コエンザイムQ10, フィセチン",
      "栄養成分(1粒当たり)": "エネルギー 1.53kcal, たんぱく質 0.08g, 脂質 0.05g, 炭水化物 0.2g, 食塩相当量 0.004g",
      "原産国": "日本"
    },
    usage: "健康補助食品として、1日4粒を、昼食後に水などでお召し上がりください。",
    price: "¥176,040",
    amazonLink: "https://www.amazon.co.jp/",
    stores: {
      east: [
        { name: "伊勢丹 新宿店 6F", address: "〒160-0022 東京都新宿区新宿3-14-1", tel: "03-3352-1111" },
        { name: "銀座三越 7F", address: "〒104-8212 東京都中央区銀座4-6-16", tel: "03-3562-1111" }
      ],
      west: []
    }
  },
  "luxury-nmn-15000-3p": {
    name: "LUXURY NMN 15000 3本SET 〔3ヶ月体感セット〕",
    description: "NMN（ニコチンアミドモノヌクレオチド）は、ビタミンB3を原料としてつくられる成分で、年齢とともに減少する生体内物質「NAD」の元となります。「LUXURY NMN 15000」は、ヒト臨床試験に基づいた理想的な含有量を配合。さらに、PQQ、コエンザイムQ10、フィセチンとの組み合わせで、よりパワフルに、かつてない「実感力」を実現しました。",
    img: "https://welabo.jp/wp-content/uploads/LUXURY_NMN_15000_01.png",
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
        description: "NMNとは、正式名称「ニコチンアミドモノヌクレオチド」。ビタミンB3を原料としてつくられる成分です。ヒトやあらゆる生物に存在し体内で自然に生成されている物質ですが、年齢とともに減少すると考えられています。NMNは体内で、エネルギーを生み出す際に必須な補酵素NAD（ニコチンアミドアデニンジヌクレオチド）に変換されます。"
      },
      {
        title: "そこで「NMN」が重要",
        description: "年齢とともに体内で減少するNAD量。減少したNADを補うため、体内でNADに変化されるNMNを摂取することが大切です。NMNはあらゆる生物の細胞に存在しており緑黄色野菜やフルーツなどにも含まれていますが、その含有量はごくわずかです。1瓶に国産NMNを15000mg配合し、NMNの摂取目安量としては、500mg/日 摂ることができます。また、セノリティクスに注目されている成分フィセチンを1500mg、そら豆や枝豆に含まれるハッキリ成分PQQを1800mg、若々しさをサポートするコエンザイムQ10を4500mg配合しています。快適な毎日をサポートします。"
      },
      {
        title: "PQQ・コエンザイムQ10・フィセチン配合",
        description: "フィセチン（1500mg配合）は、ポリフェノール類の一種で、カラダの内側からキレイにしてくれます。PQQ（1800mg配合）は、ビタミン様物質で、冴えや記憶にかかわる、たんぱく質「NGF」を助けるはたらきがあります。コエンザイムQ10（4500mg配合）は、エネルギーづくりに欠かせない成分です。さらにPQQと一緒に摂ることで、より高いパワーが期待されます。"
      },
      {
        title: "胃酸に強い耐酸性カプセル使用",
        description: "胃酸や唾液でNMNを損なうことなく、貴重な成分をより効率よく届けるために、耐酸性カプセルを採用しました。胃酸からNMNを保護し、NMNを腸まで届けます。"
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
      "内容量": "131.4g（120粒×3瓶×1粒の重量365mg、1粒の内容量290mg）",
      "主要成分": "β-NMN, PQQ, コエンザイムQ10, フィセチン",
      "栄養成分(1粒当たり)": "エネルギー 1.53kcal, たんぱく質 0.08g, 脂質 0.05g, 炭水化物 0.2g, 食塩相当量 0.004g",
      "原産国": "日本"
    },
    usage: "健康補助食品として、1日4粒を、昼食後に水などでお召し上がりください。",
    price: "¥239,112",
    amazonLink: "https://www.amazon.co.jp/",
    stores: {
      east: [
        { name: "伊勢丹 新宿店 B2F", address: "〒160-0022 東京都新宿区新宿3-14-1", tel: "03-3352-1111" },
        { name: "銀座三越 7F", address: "〒104-8212 東京都中央区銀座4-6-16", tel: "03-3562-1111" },
        { name: "三越日本橋本店 4F", address: "〒103-8001 東京都中央区日本橋室町1-4-1", tel: "03-3241-3311" },
        { name: "京王百貨店新宿店 8F", address: "〒160-8321 東京都新宿区西新宿1-1-4", tel: "0570-022-810" },
        { name: "伊勢丹浦和店 6F", address: "〒330-0063 埼玉県さいたま市浦和区高砂1-15-1", tel: "048-825-3990" },
        { name: "新潟伊勢丹 3F", address: "〒950-8589 新潟県新潟市中央区八千代1-6-1", tel: "025-242-1111" }
      ],
      west: [
        { name: "松坂屋名古屋店 本館7F", address: "〒460-8430 愛知県名古屋市中区栄3-16-1", tel: "052-251-1111" },
        { name: "阪神梅田本店 B1F", address: "〒530-8224 大阪市北区梅田1-13-13", tel: "06-6345-1201" },
        { name: "ジェイアール京都伊勢丹 B2F", address: "〒600-8555 京都府京都市下京区烏丸通塩小路下ル東塩小路町", tel: "075-352-1111" },
        { name: "あべのハルカス近鉄本店 ウィング館B2F", address: "〒545-8545 大阪市阿倍野区阿倍野筋1-1-43", tel: "06-6624-1111" },
        { name: "福屋八丁堀本店 6F", address: "〒730-8548 広島県広島市中区胡町6-26", tel: "082-246-6111" }
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

      <main className="pt-32 md:pt-32">
        <div className="container mx-auto px-6 md:px-12">
          {/* Product Header */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 mb-16 md:mb-32">
            {/* Product Info - Mobile: Top, Desktop: Right */}
            <div className="lg:w-1/2 lg:pt-12 order-1 lg:order-2">
              <h1 className="text-2xl md:text-6xl font-thin mb-6 md:mb-4 leading-tight">{product.name}</h1>
              
              {/* Image Gallery - Mobile: After Title, Desktop: Left */}
              <div className="lg:hidden mb-6">
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

            {/* Image Gallery - Desktop: Left (Hidden on Mobile) */}
            <div className="hidden lg:block lg:w-1/2 order-2 lg:order-1">
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
          </div>

          {/* Ingredient Sections (Common for both) */}
          {product.ingredientsSections && (
            <section className="mb-12 md:mb-24 py-12 md:py-16 border-t border-gray-100">
              {(slug === "honsoureishihoushi" || slug === "luxury-probiotics") && (
                <h2 className="text-2xl md:text-3xl font-thin mb-12">
                  {slug === "honsoureishihoushi" ? "配合成分と働きについて" : "配合成分と各菌の働きについて"}
                </h2>
              )}
              <div className="space-y-12 md:space-y-24">
                {product.ingredientsSections.map((ingredient: any, index: number) => {
                  const isSporeLacticAcid = slug === "luxury-probiotics" && ingredient.title === "有胞子乳酸菌";
                  const isAfterSporeLacticAcid = slug === "luxury-probiotics" && index > 0 && product.ingredientsSections[index - 1].title === "有胞子乳酸菌";
                  const shouldShowBorderBottom = isSporeLacticAcid ? false : (index < product.ingredientsSections.length - 1);
                  const shouldShowBorderTop = isAfterSporeLacticAcid || (index > 0 && !isSporeLacticAcid && slug !== "luxury-probiotics");
                  return (
                    <div key={index}>
                      <div className={`${shouldShowBorderTop ? 'border-t border-gray-100 pt-12 md:pt-24' : ''} ${shouldShowBorderBottom ? 'border-b border-gray-100 pb-12 md:pb-24' : (index < product.ingredientsSections.length - 1 ? 'pb-12 md:pb-24' : 'pb-0 md:pb-0')} last:border-0`}>
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                          {/* Left: Text */}
                          <div className="flex-1 lg:flex-[2]">
                            {(slug === "honsoureishihoushi" || slug === "luxury-probiotics") ? (
                              <h3 className="text-2xl md:text-3xl font-thin mb-6">{ingredient.title}</h3>
                            ) : (
                              <h2 className="text-2xl md:text-3xl font-thin mb-6">{ingredient.title}</h2>
                            )}
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
                      {/* Special wide images after "有胞子乳酸菌" section for luxury-probiotics */}
                      {slug === "luxury-probiotics" && ingredient.title === "有胞子乳酸菌" && (
                        <div className="mt-12 md:mt-24 space-y-8 md:space-y-12">
                          <div className="relative w-full aspect-[16/9] bg-[#F5F5F5] overflow-hidden">
                          </div>
                          <div className="relative w-full aspect-[16/9] bg-[#F5F5F5] overflow-hidden">
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Professor Section */}
          {product.professor && (
            <section className="mb-12 md:mb-24 py-12 md:py-16 border-t border-gray-100">
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
            </section>
          )}

          {/* Safety / GMP Section */}
          {product.safety && product.safety.sections && (
             <section className="mb-12 md:mb-24 py-12 md:py-16 border-t border-gray-100">
               {product.safety.title && (
                 <h2 className="text-2xl md:text-3xl font-thin mb-12">{product.safety.title}</h2>
               )}
               <div className="space-y-12 md:space-y-24">
                 {product.safety.sections.map((safetySection: any, index: number) => (
                   <div key={index} className={`${index < product.safety.sections.length - 1 ? 'border-b border-gray-100 pb-12 md:pb-24' : 'pb-0 md:pb-0'}`}>
                     <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                       {/* Left: Text */}
                       <div className="flex-1 lg:flex-[2]">
                         {safetySection.title && (
                           <h2 className="text-2xl md:text-3xl font-thin mb-6">{safetySection.title}</h2>
                         )}
                         <p className="text-sm leading-[2.4] text-gray-600 font-light text-justify">
                           {safetySection.description}
                         </p>
                       </div>
                       {/* Right: Image Placeholder (Gray Background Only) - Same width as button */}
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

          {/* Aging Hallmarks Section */}
          {product.agingHallmarks && (
            <section className="mb-12 md:mb-24 py-12 md:py-16 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-thin mb-8">AGING HALLMARKSに沿った開発・展開</h2>
              <p className="text-sm leading-[2.4] text-gray-600 font-light mb-12">
                {product.agingHallmarks}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Image */}
                <div>
                  <div className="relative w-full aspect-square bg-[#F5F5F5] overflow-hidden mb-4">
                  </div>
                  <p className="text-sm text-gray-600 font-light text-center">
                    {slug === "honsoureishihoushi" ? "老化研究の世界基準であるAGING" : slug === "luxury-probiotics" ? "LUXURY PROBIOTICS+" : "LUXURY NMN 15000"}
                  </p>
                </div>
                {/* Right Image */}
                <div>
                  <div className="relative w-full aspect-square bg-[#F5F5F5] overflow-hidden mb-4">
                  </div>
                  <p className="text-sm text-gray-600 font-light text-center">
                    {slug === "honsoureishihoushi" ? "本草霊芝胞子" : "老化研究の世界基準であるAGING"}
                  </p>
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
                     <h3 className="text-xl md:text-3xl font-thin mb-6 text-gray-700">東日本地方</h3>
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
                     <h3 className="text-xl md:text-3xl font-thin mb-6 text-gray-700">西日本地方</h3>
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
                 あなたのライフスタイルに合わせて商品を<br className="md:hidden" />
                 お選びいただけます。
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                 <Link href={`/shopping/${slug}`} className="w-full md:w-auto md:min-w-[280px]">
                   <Button className="h-14 w-full md:w-[280px] px-12 bg-white text-[#1A1A1A] border border-white hover:bg-[#1A1A1A] hover:text-white hover:border-white rounded-none text-xs tracking-[0.2em] transition-all whitespace-nowrap">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      ONLINE STORE
                   </Button>
                 </Link>
                 {product.amazonLink && (
                    <Link href={product.amazonLink} target="_blank" className="w-full md:w-auto md:min-w-[280px]">
                        <Button variant="outline" className="h-14 w-full md:w-[280px] px-12 border-white text-white bg-transparent hover:bg-white hover:text-[#1A1A1A] rounded-none text-xs tracking-[0.2em] transition-all whitespace-nowrap">
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
