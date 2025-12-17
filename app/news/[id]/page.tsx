"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

// News Data (from scraped markdown files)
const newsData: Record<string, any> = {
  "1507": {
    date: "2025.11.26",
    title: "『LUXURY PROBIOTICS＋』三越伊勢丹ベストコスメ2025年間【インナーサポート部門 第1位】を受賞いたしました",
    tag: "AWARD",
    content: `いつも当社商品をご愛顧頂き、誠にありがとうございます。
株式会社we laboが展開する、エイジングインナーケアブランド「we world」の常識を超えた乳酸菌サプリメント『LUXURY PROBIOTICS＋』が、三越伊勢丹が選出する「ISETAN BEAYTY ベストコスメセレクション2025 年間」において、【インナーサポート部門 第1位】を受賞いたしました。

「ISETAN BEAUTY ベストコスメセレクション2025 年間」は、伊勢丹新宿店および 「ISETAN BEAUTY Online」での年間を通した購買データ（売上金額と販売数）をもとに選出されるアワードです。

『LUXURY PROBIOTICS＋』は、多くのお客様に支持されている製品としてその実績と信頼性が認められました。
前回（2025年6月）に第1位を受賞した同ブランドの『LUXURY NMN 15000』に続き、2回連続での第1位受賞となります。

腸からのエイジングケアに特化した乳酸菌サプリメント

『LUXURY PROBIOTICS+』は、従来の腸活・腸内ケアを超え、エイジング研究の世界的基準である「エイジングホールマーク」が示す12の老化要因の中でも、近年注目が高まる「腸内細菌バランスの崩れ」に着目して開発されたサプリメントです。

＜製品特徴＞
小腸〜大腸まで届く4種の生きた善玉菌と、善玉菌の定着を助ける3種のプレバイオティクス（善玉菌の栄養素）を独自配合しております。
腸の救世主と呼ばれる「短鎖脂肪酸の産生」「善玉菌の増加と定着」に着目

老化要因の中でも、特に以下にアプローチが期待できます。
・腸内細菌バランスの乱れ
・慢性炎症‧栄養感知能力の低下

最先端長寿研究や専門家の知見を基に、配合内容だけでなく安全性‧製造工程にも徹底的にこだわり、高い実感性を求めるユーザーから支持を集めています。

今後とも「LUXURY PROBIOTICS＋」及び弊社製品を宜しくお願い申し上げます。`
  },
  "1502": {
    date: "2025.10.28",
    title: "「阪神梅田本店 POP UP SHOP 」に出店いたします",
    tag: "EVENT",
    content: `いつも当社ホームページをご覧頂き、誠にありがとうございます。
「阪神梅田本店 / 2階 C.CUBEイベントスペース POP UP SHOP 」に出店いたします。

＜販売期間＞
2025年10月29日（水）～11月4日（火）午前10時〜午後8時（最終日は午後6時まで）

＜販売予定商品＞
「LUXURY NMN 15000」
「LUXURY PROBIOTICS＋」
「本草霊芝胞子」

皆様のご来場を心よりお待ち申し上げております。

＜阪神梅田本店 店舗情報＞
住所 〒530-8224 大阪市北区梅田1-13-13
TEL: 06-6345-1201
営業時間 午前10時～午後8時`
  },
  "1493": {
    date: "2025.10.15",
    title: "「銀座三越 新館7階 GINZA COSME WORLD NEXT➡」に出店いたします",
    tag: "EVENT",
    content: `銀座三越 新館7階 GINZA COSME WORLD NEXT➡に出店いたします。
詳細は後日お知らせいたします。`
  },
  "1471": {
    date: "2025.08.31",
    title: "「松坂屋名古屋店 本館6階にてPOP UP イベント」を開催いたします",
    tag: "EVENT",
    content: `松坂屋名古屋店 本館6階にてPOP UP イベントを開催いたします。
詳細は後日お知らせいたします。`
  },
  "1464": {
    date: "2025.08.29",
    title: "『LUXURY NMN 15000』が家庭画報.comに掲載されました",
    tag: "MEDIA",
    content: `『LUXURY NMN 15000』が家庭画報.comに掲載されました。
詳細は後日お知らせいたします。`
  },
  "1438": {
    date: "2025.08.01",
    title: "夏季休業のお知らせ",
    tag: "INFO",
    content: `夏季休業期間のお知らせです。
詳細は後日お知らせいたします。`
  }
};

export default function NewsDetailPage() {
  const params = useParams();
  const id = params?.id as string | undefined;
  
  if (!id) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Article Not Found</h1>
          <Link href="/news" className="text-sm underline">RETURN TO NEWS</Link>
        </div>
      </div>
    );
  }
  
  const article = newsData[id];
  
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Article Not Found</h1>
          <Link href="/news" className="text-sm underline">RETURN TO NEWS</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <SiteHeader />

      <main className="pt-32">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl pb-32">
          {/* Back Button */}
          <Link href="/news" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1A1A1A] transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            BACK TO NEWS
          </Link>

          {/* Article Header */}
          <header className="mb-16 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] tracking-widest text-[#D4C5B0] uppercase px-3 py-1 border border-[#D4C5B0]">
                {article.tag}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
            </div>
            <h1 className="text-xl md:text-2xl font-thin leading-tight tracking-wide mb-4">
              {article.title}
            </h1>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-sm md:text-base leading-[2.4] text-gray-700 font-light whitespace-pre-line">
              {article.content.split('\n').map((paragraph: string, i: number) => {
                if (paragraph.trim() === '') return <br key={i} />;
                
                // 見出し処理
                if (paragraph.startsWith('＜') && paragraph.endsWith('＞')) {
                  return (
                    <h3 key={i} className="text-lg font-medium mt-12 mb-6 text-[#1A1A1A]">
                      {paragraph}
                    </h3>
                  );
                }
                
                // 特定の見出し（腸からの...）
                if (paragraph.includes('腸からのエイジングケアに特化した乳酸菌サプリメント')) {
                  return (
                    <h3 key={i} className="text-lg font-medium mt-12 mb-6 text-[#1A1A1A]">
                      {paragraph}
                    </h3>
                  );
                }

                // リスト処理
                if (paragraph.startsWith('・')) {
                  return (
                    <li key={i} className="ml-6 mb-2 list-none">
                       {/* 記号が2つある場合の修正 */}
                      {paragraph.replace(/・+/g, '・')}
                    </li>
                  );
                }
                
                return (
                  <p key={i} className="mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </article>

          {/* Navigation */}
          <div className="mt-20 pt-12 border-t border-gray-200 flex justify-between items-center">
            <Link href="/news">
              <Button variant="outline" className="rounded-full px-8 py-6 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all text-xs tracking-[0.2em]">
                <ArrowLeft className="mr-2 w-4 h-4" />
                ALL NEWS
              </Button>
            </Link>
          </div>
        </div>

        <SiteFooter />
      </main>
    </div>
  );
}
