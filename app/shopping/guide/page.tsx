"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ShoppingGuidePage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <SiteHeader />

      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="container mx-auto px-6 md:px-12 mb-20">
           <div className="text-center max-w-3xl mx-auto">
              <span className="text-[10px] tracking-[0.3em] text-[#8A8A8A] uppercase block mb-6">
                 Shopping Guide
              </span>
              <h1 className="text-4xl md:text-5xl font-thin mb-8">お買い物ガイド</h1>
           </div>
        </section>

        <section className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="space-y-16">
            {/* 注文方法 */}
            <div id="order" className="border-b border-gray-200 pb-12">
              <h2 className="text-2xl font-light mb-6 flex items-center gap-4">
                <span className="text-xs tracking-widest text-[#D4C5B0] uppercase border border-[#D4C5B0] px-3 py-1">Order</span>
                ご注文方法
              </h2>
              <div className="text-sm leading-[2.4] text-gray-600 space-y-4">
                <p>
                  インターネットにて24時間受け付けております。<br />
                  ご注文やご質問メールの対応は、土日祝日を除く平日のみとなります。
                </p>
              </div>
            </div>

            {/* 会員登録 */}
            <div id="members" className="border-b border-gray-200 pb-12">
              <h2 className="text-2xl font-light mb-6 flex items-center gap-4">
                <span className="text-xs tracking-widest text-[#D4C5B0] uppercase border border-[#D4C5B0] px-3 py-1">Members</span>
                会員登録・ポイント
              </h2>
              <div className="text-sm leading-[2.4] text-gray-600 space-y-4">
                <div className="bg-[#FAFAFA] p-8 border border-gray-100">
                  <ul className="list-disc pl-5 space-y-2 mb-0">
                    <li><strong className="text-[#1A1A1A]">入会金・年会費無料</strong></li>
                    <li><strong className="text-[#1A1A1A]">新規会員登録で500ポイントプレゼント</strong></li>
                    <li>ご購入金額に応じて<strong className="text-[#1A1A1A]">5%ポイント還元</strong></li>
                  </ul>
                </div>
                <p className="mt-4">
                  ポイントは「お買い上げ金額（税抜）× 1%」（1円＝1ポイント）として付与され、次回のお買い物からご利用いただけます。<br />
                  ポイントの有効期限は最終購入日から1年間となります。
                </p>
              </div>
            </div>

            {/* お支払い */}
            <div id="payment" className="border-b border-gray-200 pb-12">
              <h2 className="text-2xl font-light mb-6 flex items-center gap-4">
                <span className="text-xs tracking-widest text-[#D4C5B0] uppercase border border-[#D4C5B0] px-3 py-1">Payment</span>
                お支払いについて
              </h2>
              <div className="text-sm leading-[2.4] text-gray-600 space-y-6">
                <div>
                  <h3 className="text-base font-medium text-[#1A1A1A] mb-2">クレジットカード決済</h3>
                  <p>VISA / Master Card / JCB / American Express / Diners Club</p>
                  <p className="text-xs text-gray-500 mt-2">※一括払いのみ対応しております。</p>
                </div>
                <div>
                  <h3 className="text-base font-medium text-[#1A1A1A] mb-2">銀行振込</h3>
                  <p>ご注文完了後、7日以内に指定銀行口座へお振り込みください。</p>
                  <p className="text-xs text-gray-500 mt-2">※振込手数料はお客様のご負担となります。</p>
                </div>
              </div>
            </div>

            {/* 配送 */}
            <div id="delivery" className="border-b border-gray-200 pb-12">
              <h2 className="text-2xl font-light mb-6 flex items-center gap-4">
                <span className="text-xs tracking-widest text-[#D4C5B0] uppercase border border-[#D4C5B0] px-3 py-1">Delivery</span>
                配送・送料について
              </h2>
              <div className="text-sm leading-[2.4] text-gray-600 space-y-6">
                <div className="bg-[#1A1A1A] text-white p-4 text-center tracking-widest text-xs">
                  お買い上げ金額 5,000円以上で送料無料
                </div>
                
                <div>
                  <h3 className="text-base font-medium text-[#1A1A1A] mb-4">地域別送料（税込）</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-xs md:text-sm">
                    <div className="flex justify-between border-b border-dotted border-gray-300 pb-2">
                      <span>北海道</span>
                      <span>1,370円</span>
                    </div>
                    <div className="flex justify-between border-b border-dotted border-gray-300 pb-2">
                      <span>北東北（青森・秋田・岩手）</span>
                      <span>1,040円</span>
                    </div>
                    <div className="flex justify-between border-b border-dotted border-gray-300 pb-2">
                      <span>南東北（宮城・山形・福島）</span>
                      <span>930円</span>
                    </div>
                    <div className="flex justify-between border-b border-dotted border-gray-300 pb-2">
                      <span>関東・信越・北陸・中部</span>
                      <span>930円</span>
                    </div>
                    <div className="flex justify-between border-b border-dotted border-gray-300 pb-2">
                      <span>関西</span>
                      <span>930円</span>
                    </div>
                    <div className="flex justify-between border-b border-dotted border-gray-300 pb-2">
                      <span>中国・四国</span>
                      <span>1,040円</span>
                    </div>
                    <div className="flex justify-between border-b border-dotted border-gray-300 pb-2">
                      <span>九州</span>
                      <span>1,150円</span>
                    </div>
                    <div className="flex justify-between border-b border-dotted border-gray-300 pb-2">
                      <span>沖縄</span>
                      <span>1,370円</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">※クール便対象商品は別途手数料がかかる場合がございます。</p>
                </div>
              </div>
            </div>

            {/* 返品・交換 */}
            <div id="return" className="pb-12">
              <h2 className="text-2xl font-light mb-6 flex items-center gap-4">
                <span className="text-xs tracking-widest text-[#D4C5B0] uppercase border border-[#D4C5B0] px-3 py-1">Return</span>
                返品・交換について
              </h2>
              <div className="text-sm leading-[2.4] text-gray-600 space-y-6">
                <p>
                  商品到着後、3日以内にご連絡をお願いいたします。<br />
                  商品の欠陥や不良など当社原因による場合には、返品・交換を受け付けさせていただきます。
                </p>
                <p>
                  なお、お客様都合による返品・交換は受け付けておりませんので、ご了承ください。
                </p>
                <div className="bg-[#FAFAFA] p-6 border border-gray-100 mt-4">
                  <p className="font-medium mb-2 text-[#1A1A1A]">お問い合わせ先</p>
                  <p>メール：shop@welabo.jp</p>
                  <p className="text-xs text-gray-500 mt-2">※メール本文に「お名前」「注文番号」「電話番号」「返品・交換理由」をご記載ください。</p>
                </div>
              </div>
            </div>

            {/* Back to Top */}
            <div className="mt-20 text-center">
              <Link href="/shopping">
                <Button variant="outline" className="rounded-full px-8 py-6 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all text-xs tracking-[0.2em]">
                  Back to Shopping Top
                </Button>
              </Link>
            </div>

          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

