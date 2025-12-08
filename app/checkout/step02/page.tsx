"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/context/cart-context";
import { ChevronRight, Check, HelpCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface OrdererInfo {
  email: string;
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  zip: string;
  prefecture: string;
  address1: string;
  address2: string;
  phone: string;
}

interface DeliveryInfo {
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  zip: string;
  prefecture: string;
  city: string;
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
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [creditCardType, setCreditCardType] = useState<"registered" | "new">("new");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardName, setCardName] = useState("");
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
                <div className="flex justify-between items-baseline mb-6">
                  <h2 className="text-lg font-light">お支払い方法</h2>
                  <button
                    onClick={() => setPaymentModalOpen(true)}
                    className="text-xs underline text-gray-500 hover:text-[#1A1A1A] transition-colors"
                  >
                    変更する
                  </button>
                </div>
                {paymentMethod ? (
                  <div className="space-y-2 text-sm">
                    {paymentMethod === "amazon" && (
                      <>
                        <p className="font-medium">Amazon Pay</p>
                        <p className="text-gray-600">Amazonアカウントでお支払い</p>
                      </>
                    )}
                    {paymentMethod === "credit" && (
                      <>
                        <p className="font-medium">クレジットカード</p>
                        {creditCardType === "registered" ? (
                          <p className="text-gray-600">登録済みのカードを利用</p>
                        ) : (
                          <p className="text-gray-600">新しいカードを利用</p>
                        )}
                      </>
                    )}
                    {paymentMethod === "bank" && (
                      <>
                        <p className="font-medium">銀行振込</p>
                        <div className="text-gray-600 text-xs mt-2 space-y-1">
                          <p>楽天銀行 第三営業支店 普通口座</p>
                          <p>口座番号: 7295115</p>
                          <p>口座名義: 株式会社we labo</p>
                        </div>
                      </>
                    )}
                    {paymentMethod === "cod" && (
                      <>
                        <p className="font-medium">代金引換</p>
                        <p className="text-gray-600">商品到着時に現金でお支払い</p>
                      </>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => setPaymentModalOpen(true)}
                    className="text-sm text-gray-500 hover:text-[#1A1A1A] transition-colors underline"
                  >
                    お支払い方法を選ぶ
                  </button>
                )}
              </section>

              {/* Payment Method Modal */}
              <Dialog open={paymentModalOpen} onOpenChange={setPaymentModalOpen}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-light">お支払い方法</DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-4 mt-6">
                    {/* Amazon Pay */}
                    <label className="flex items-start gap-4 p-4 border border-gray-200 cursor-pointer hover:border-[#1A1A1A] transition-colors">
                      <input
                        type="radio"
                        name="payment-modal"
                        value="amazon"
                        checked={paymentMethod === "amazon"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mt-1 w-4 h-4"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium">amazon pay</span>
                          <div className="w-12 h-6 bg-orange-100 rounded flex items-center justify-center">
                            <span className="text-xs font-bold text-orange-600">amazon</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">Amazonアカウントでお支払い</p>
                        <p className="text-xs text-gray-500 mt-1">Amazonアカウントにご登録の住所・支払手段を利用して簡単にご注文。</p>
                      </div>
                    </label>

                    {/* Credit Card */}
                    <label className="flex items-start gap-4 p-4 border border-gray-200 cursor-pointer hover:border-[#1A1A1A] transition-colors">
                      <input
                        type="radio"
                        name="payment-modal"
                        value="credit"
                        checked={paymentMethod === "credit"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mt-1 w-4 h-4"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium">クレジットカード</span>
                          <div className="flex gap-1">
                            <div className="w-8 h-5 bg-blue-600 rounded text-white text-[8px] flex items-center justify-center font-bold">VISA</div>
                            <div className="w-8 h-5 bg-orange-500 rounded text-white text-[8px] flex items-center justify-center font-bold">MC</div>
                          </div>
                        </div>
                        {paymentMethod === "credit" && (
                          <div className="mt-4 space-y-4 border-t border-gray-200 pt-4">
                            <div className="space-y-3">
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="radio"
                                  name="card-type"
                                  value="registered"
                                  checked={creditCardType === "registered"}
                                  onChange={(e) => setCreditCardType("registered")}
                                  className="w-4 h-4"
                                />
                                <span className="text-sm">登録済みのカードを利用する</span>
                              </label>
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="radio"
                                  name="card-type"
                                  value="new"
                                  checked={creditCardType === "new"}
                                  onChange={(e) => setCreditCardType("new")}
                                  className="w-4 h-4"
                                />
                                <span className="text-sm">新しいカードを利用する</span>
                              </label>
                            </div>
                            {creditCardType === "new" && (
                              <div className="space-y-4 pt-4">
                                <div className="space-y-2">
                                  <Label htmlFor="card-number" className="text-xs tracking-widest text-gray-500 uppercase">カード番号</Label>
                                  <Input
                                    id="card-number"
                                    placeholder="カード番号 (ハイフンなし)"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    className="h-12 rounded-none border-gray-200"
                                  />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="card-expiry" className="text-xs tracking-widest text-gray-500 uppercase">有効期限</Label>
                                    <Input
                                      id="card-expiry"
                                      placeholder="有効期限(月/年)"
                                      value={cardExpiry}
                                      onChange={(e) => setCardExpiry(e.target.value)}
                                      className="h-12 rounded-none border-gray-200"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                      <Label htmlFor="card-cvv" className="text-xs tracking-widest text-gray-500 uppercase">セキュリティコード</Label>
                                      <HelpCircle className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <Input
                                      id="card-cvv"
                                      placeholder="セキュリティコード"
                                      value={cardCvv}
                                      onChange={(e) => setCardCvv(e.target.value)}
                                      className="h-12 rounded-none border-gray-200"
                                    />
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="card-name" className="text-xs tracking-widest text-gray-500 uppercase">カード名義人</Label>
                                  <Input
                                    id="card-name"
                                    placeholder="カード名義人"
                                    value={cardName}
                                    onChange={(e) => setCardName(e.target.value)}
                                    className="h-12 rounded-none border-gray-200"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </label>

                    {/* Bank Transfer */}
                    <label className="flex items-start gap-4 p-4 border border-gray-200 cursor-pointer hover:border-[#1A1A1A] transition-colors">
                      <input
                        type="radio"
                        name="payment-modal"
                        value="bank"
                        checked={paymentMethod === "bank"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mt-1 w-4 h-4"
                      />
                      <div className="flex-1">
                        <span className="text-sm font-medium">銀行振込</span>
                        {paymentMethod === "bank" && (
                          <div className="mt-4 space-y-2 text-xs text-gray-600 border-t border-gray-200 pt-4">
                            <p><span className="font-medium">銀行名:</span> 楽天銀行</p>
                            <p><span className="font-medium">支店名:</span> 第三営業支店</p>
                            <p><span className="font-medium">口座種別:</span> 普通口座</p>
                            <p><span className="font-medium">口座番号:</span> 7295115</p>
                            <p><span className="font-medium">口座名義:</span> 株式会社we labo</p>
                            <p className="mt-3 text-gray-500">お振込確認後、商品を発送いたします。</p>
                            <p className="text-gray-500">※ご注文完了後、5日以内に指定銀行口座へお振り込みください。</p>
                            <p className="text-gray-500">恐れ入りますが、振込手数料はお客様にご負担いただいております。</p>
                            <p className="text-gray-500 mt-2">
                              <Link href="/shopping/guide" className="underline hover:text-[#1A1A1A]">
                                お支払い時期について
                              </Link>
                            </p>
                          </div>
                        )}
                      </div>
                    </label>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Button
                      onClick={() => setPaymentModalOpen(false)}
                      className="w-full bg-gray-800 text-white border border-gray-800 hover:bg-gray-700 h-12 rounded-none text-sm transition-all"
                    >
                      この内容で変更する
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-2">(注文はまだ完了していません)</p>
                  </div>
                </DialogContent>
              </Dialog>

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
