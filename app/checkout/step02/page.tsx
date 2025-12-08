"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/context/cart-context";
import { ChevronRight, Check } from "lucide-react";
import { useState, useEffect } from "react";

interface OrdererInfo {
  email: string;
  lastName: string;
  firstName: string;
  zip: string;
  prefecture: string;
  address1: string;
  address2: string;
  phone: string;
}

export default function CheckoutStep02Page() {
  const { items, subtotal } = useCart();
  const [ordererInfo, setOrdererInfo] = useState<OrdererInfo>({
    email: "",
    lastName: "",
    firstName: "",
    zip: "",
    prefecture: "",
    address1: "",
    address2: "",
    phone: "",
  });
  const [sameAsOrderer, setSameAsOrderer] = useState(true);
  const [shippingMethod, setShippingMethod] = useState<string>("yamato");
  const [deliveryTime, setDeliveryTime] = useState<string>("morning");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [notes, setNotes] = useState("");

  const shippingCost = 930; // ヤマト運輸の送料
  const tax8 = subtotal; // 8%対象
  const tax10 = shippingCost; // 10%対象
  const total = subtotal + shippingCost;
  const points = Math.floor(total * 0.05); // 5%ポイント

  // localStorageから注文者情報を読み込む
  useEffect(() => {
    const saved = localStorage.getItem("checkout_orderer_info");
    if (saved) {
      setOrdererInfo(JSON.parse(saved));
    }
  }, []);

  const handleEditOrderer = () => {
    // step01に戻る
    window.location.href = "/checkout/step01";
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <header className="h-24 flex items-center justify-between px-6 md:px-12 border-b border-gray-100">
        <Link href="/" className="block relative h-8 w-24">
          <Image
            src="https://welabo.jp/wp-content/uploads/logo-header.png"
            alt="we labo"
            fill
            className="object-contain"
            unoptimized
          />
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-full text-center text-[8px] tracking-widest text-gray-500 uppercase">Online Store</span>
        </Link>
        <div className="text-xs tracking-widest text-gray-400">SECURE CHECKOUT</div>
      </header>

      <main className="container mx-auto px-6 md:px-12 py-16">
        {/* Steps Indicator */}
        <div className="flex items-center gap-4 text-xs tracking-widest mb-12 justify-center">
          <span className="text-gray-400">注文者情報入力</span>
          <ChevronRight className="w-3 h-3 text-gray-300" />
          <span className="text-[#1A1A1A]">確認・修正</span>
          <ChevronRight className="w-3 h-3 text-gray-300" />
          <span className="text-gray-400">完了</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Forms */}
          <div className="flex-1">
            <div className="space-y-12">
              {/* Orderer Information */}
              <section className="border-b border-gray-200 pb-8">
                <div className="flex justify-between items-baseline mb-6">
                  <h2 className="text-lg font-light">注文者情報</h2>
                  <button
                    onClick={handleEditOrderer}
                    className="text-xs underline text-gray-500 hover:text-[#1A1A1A] transition-colors"
                  >
                    変更する
                  </button>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">{ordererInfo.lastName} {ordererInfo.firstName}</p>
                  <p className="text-gray-600">{ordererInfo.zip}</p>
                  <p className="text-gray-600">
                    {ordererInfo.prefecture} {ordererInfo.address1} {ordererInfo.address2}
                  </p>
                  <p className="text-gray-600">{ordererInfo.phone}</p>
                  <p className="text-gray-600 mt-2">{ordererInfo.email}</p>
                </div>
              </section>

              {/* Delivery Address */}
              <section className="border-b border-gray-200 pb-8">
                <div className="flex justify-between items-baseline mb-6">
                  <h2 className="text-lg font-light">お届け先</h2>
                </div>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="delivery"
                      checked={sameAsOrderer}
                      onChange={() => setSameAsOrderer(true)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">注文者情報と同じ</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="delivery"
                      checked={!sameAsOrderer}
                      onChange={() => setSameAsOrderer(false)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">別の住所に送る</span>
                  </label>
                </div>
              </section>

              {/* Shipping Method */}
              <section className="border-b border-gray-200 pb-8">
                <div className="flex justify-between items-baseline mb-6">
                  <h2 className="text-lg font-light">配送方法</h2>
                  <button 
                    onClick={() => {
                      const newMethod = shippingMethod === "yamato" ? "sagawa" : "yamato";
                      setShippingMethod(newMethod);
                    }}
                    className="text-xs underline text-gray-500 hover:text-[#1A1A1A] transition-colors"
                  >
                    変更する
                  </button>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">ヤマト運輸</p>
                  <p className="text-gray-600">（送料: 930円）</p>
                  <div className="mt-4 space-y-2">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-start gap-2">
                        <span className="text-gray-600">・{item.name}</span>
                        <span className="text-gray-400">{item.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Delivery Time */}
              <section className="border-b border-gray-200 pb-8">
                <div className="flex justify-between items-baseline mb-6">
                  <h2 className="text-lg font-light">お届け時間帯指定</h2>
                  <button 
                    onClick={() => {
                      const times = ["morning", "afternoon", "evening"];
                      const currentIndex = times.indexOf(deliveryTime);
                      const nextIndex = (currentIndex + 1) % times.length;
                      setDeliveryTime(times[nextIndex]);
                    }}
                    className="text-xs underline text-gray-500 hover:text-[#1A1A1A] transition-colors"
                  >
                    変更する
                  </button>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">
                    {deliveryTime === "morning" && "午前中"}
                    {deliveryTime === "afternoon" && "14時～16時"}
                    {deliveryTime === "evening" && "16時～18時"}
                  </p>
                  <p className="text-gray-600 text-xs mt-2">
                    お届け目安： 商品はご入金確認後、1～3営業日内に発送となります。
                  </p>
                </div>
              </section>

              {/* Payment Method */}
              <section className="border-b border-gray-200 pb-8">
                <h2 className="text-lg font-light mb-6">お支払い方法</h2>
                <div className="space-y-4">
                  <label className="flex items-start gap-4 p-4 border border-gray-200 cursor-pointer hover:border-[#1A1A1A] transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="credit"
                      checked={paymentMethod === "credit"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <span className="text-sm font-medium">クレジットカード</span>
                      <p className="text-xs text-gray-500 mt-1">Visa, Mastercard, JCB, American Express</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-4 p-4 border border-gray-200 cursor-pointer hover:border-[#1A1A1A] transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <span className="text-sm font-medium">銀行振込</span>
                      <p className="text-xs text-gray-500 mt-1">ご注文後、振込先をご案内いたします</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-4 p-4 border border-gray-200 cursor-pointer hover:border-[#1A1A1A] transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <span className="text-sm font-medium">代金引換</span>
                      <p className="text-xs text-gray-500 mt-1">商品到着時に現金でお支払い</p>
                    </div>
                  </label>
                </div>
              </section>

              {/* Notes */}
              <section className="border-b border-gray-200 pb-8">
                <h2 className="text-lg font-light mb-6">備考欄</h2>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="ご要望などがございましたらご記入ください"
                  className="rounded-none border-gray-200 min-h-[100px] resize-none"
                />
              </section>

              {/* Terms */}
              <section className="pb-8">
                <p className="text-xs text-gray-600 leading-relaxed">
                  <Link href="/terms" className="underline hover:text-[#1A1A1A]">
                    特定商取引法に基づく表記
                  </Link>
                  {" "}と{" "}
                  <Link href="/privacy" className="underline hover:text-[#1A1A1A]">
                    個人情報の取り扱いについて
                  </Link>
                  {" "}を必ずご確認の上、ご注文ください。
                </p>
              </section>

              <div className="flex justify-between pt-8">
                <Link href="/checkout/step01">
                  <Button variant="outline" className="bg-white border border-gray-300 text-gray-600 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] h-14 px-8 rounded-none text-xs tracking-[0.2em] uppercase transition-all">
                    戻る
                  </Button>
                </Link>
                <Link href="/checkout/step03">
                  <Button 
                    className="bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] hover:border-[#1A1A1A] h-14 px-8 rounded-none text-xs tracking-[0.2em] uppercase transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!paymentMethod}
                  >
                    注文を確定する
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:w-[400px] shrink-0">
            <div className="bg-[#F9F9F9] p-8 sticky top-8">
              <h3 className="text-sm font-medium uppercase tracking-widest mb-6 text-gray-500">ご注文内容</h3>
              
              <div className="space-y-4 mb-8">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-start pb-4 border-b border-gray-200">
                    <div className="relative w-20 h-20 bg-white border border-gray-100 shrink-0">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover p-1"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-light leading-tight mb-1">{item.name}</h4>
                      {item.name.includes("※") && (
                        <p className="text-xs text-gray-500 mb-1">（※）は軽減税率対象</p>
                      )}
                      <p className="text-xs text-gray-500 mb-2">{item.price.toLocaleString()}円</p>
                      <p className="text-xs text-gray-500">数量: {item.quantity}</p>
                    </div>
                  </div>
                ))}
                {items.length === 0 && (
                  <p className="text-sm text-gray-400 text-center py-4">Cart is empty</p>
                )}
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>商品の小計</span>
                  <span>{subtotal.toLocaleString()}円</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>配送料</span>
                  <span>{shippingCost.toLocaleString()}円</span>
                </div>
                <div className="pt-4 border-t border-gray-200 space-y-1 text-xs text-gray-500">
                  <p>消費税8%対象（税込）：{tax8.toLocaleString()}円</p>
                  <p>消費税10%対象（税込）：{tax10.toLocaleString()}円</p>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-6 pt-6">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-medium">合計</span>
                  <div className="text-right">
                    <span className="text-xl font-medium">{total.toLocaleString()}円</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 text-right mt-2">
                  {points.toLocaleString()}ポイント獲得予定
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
