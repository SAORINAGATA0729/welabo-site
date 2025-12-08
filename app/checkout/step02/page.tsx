"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/context/cart-context";
import { ChevronRight, Check } from "lucide-react";
import { useState } from "react";

export default function CheckoutStep02Page() {
  const { items, subtotal } = useCart();
  const [shippingMethod, setShippingMethod] = useState<string>("standard");
  const [paymentMethod, setPaymentMethod] = useState<string>("credit");

  const shippingCost = shippingMethod === "standard" ? 0 : shippingMethod === "express" ? 1000 : 500;
  const total = subtotal + shippingCost;

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
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Forms */}
          <div className="flex-1">
            {/* Breadcrumb / Steps */}
            <div className="flex items-center gap-4 text-xs tracking-widest mb-12">
              <Link href="/checkout/step01" className="text-gray-400 hover:text-[#1A1A1A] transition-colors">
                お客様情報
              </Link>
              <ChevronRight className="w-3 h-3 text-gray-300" />
              <span className="text-[#1A1A1A]">配送</span>
              <ChevronRight className="w-3 h-3 text-gray-300" />
              <span className="text-gray-400">お支払い</span>
            </div>

            <div className="space-y-12">
              {/* Shipping Method */}
              <section>
                <h2 className="text-lg font-light mb-6">配送方法</h2>
                <div className="space-y-4">
                  <label className="flex items-start gap-4 p-4 border border-gray-200 cursor-pointer hover:border-[#1A1A1A] transition-colors">
                    <input
                      type="radio"
                      name="shipping"
                      value="standard"
                      checked={shippingMethod === "standard"}
                      onChange={(e) => setShippingMethod(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">通常配送</span>
                        <span className="text-sm">無料</span>
                      </div>
                      <p className="text-xs text-gray-500">3-5営業日でお届け</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-4 p-4 border border-gray-200 cursor-pointer hover:border-[#1A1A1A] transition-colors">
                    <input
                      type="radio"
                      name="shipping"
                      value="express"
                      checked={shippingMethod === "express"}
                      onChange={(e) => setShippingMethod(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">速達配送</span>
                        <span className="text-sm">¥1,000</span>
                      </div>
                      <p className="text-xs text-gray-500">1-2営業日でお届け</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-4 p-4 border border-gray-200 cursor-pointer hover:border-[#1A1A1A] transition-colors">
                    <input
                      type="radio"
                      name="shipping"
                      value="scheduled"
                      checked={shippingMethod === "scheduled"}
                      onChange={(e) => setShippingMethod(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">指定日配送</span>
                        <span className="text-sm">¥500</span>
                      </div>
                      <p className="text-xs text-gray-500">ご希望の日時に配送</p>
                    </div>
                  </label>
                </div>
              </section>

              {/* Payment Method */}
              <section>
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

              {/* Credit Card Details (if credit card selected) */}
              {paymentMethod === "credit" && (
                <section className="pt-8 border-t border-gray-200">
                  <h3 className="text-base font-light mb-6">クレジットカード情報</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber" className="text-xs tracking-widest text-gray-500 uppercase">カード番号</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="h-12 rounded-none border-gray-200" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry" className="text-xs tracking-widest text-gray-500 uppercase">有効期限</Label>
                        <Input id="expiry" placeholder="MM/YY" className="h-12 rounded-none border-gray-200" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv" className="text-xs tracking-widest text-gray-500 uppercase">CVV</Label>
                        <Input id="cvv" placeholder="123" className="h-12 rounded-none border-gray-200" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardName" className="text-xs tracking-widest text-gray-500 uppercase">カード名義人</Label>
                      <Input id="cardName" placeholder="TARO YAMADA" className="h-12 rounded-none border-gray-200" />
                    </div>
                  </div>
                </section>
              )}

              <div className="flex justify-between pt-8">
                <Link href="/checkout/step01">
                  <Button variant="outline" className="bg-white border border-gray-300 text-gray-600 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] h-14 px-8 rounded-none text-xs tracking-[0.2em] uppercase transition-all">
                    戻る
                  </Button>
                </Link>
                <Link href="/checkout/step03">
                  <Button className="bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] hover:border-[#1A1A1A] h-14 px-8 rounded-none text-xs tracking-[0.2em] uppercase transition-all">
                    注文内容を確認
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:w-[400px] shrink-0">
            <div className="bg-[#F9F9F9] p-8 sticky top-8">
              <h3 className="text-sm font-medium uppercase tracking-widest mb-6 text-gray-500">Order Summary</h3>
              
              <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto px-2 py-2">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="relative w-16 h-16 bg-white border border-gray-100 shrink-0">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover p-1"
                        unoptimized
                      />
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 text-white text-[10px] flex items-center justify-center rounded-full">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-light leading-tight mb-1">{item.name}</h4>
                      <p className="text-xs text-gray-500">¥{item.price.toLocaleString()}</p>
                    </div>
                    <div className="text-sm font-medium">
                      ¥{(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
                {items.length === 0 && (
                  <p className="text-sm text-gray-400 text-center py-4">Cart is empty</p>
                )}
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>¥{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span>
                    {shippingCost === 0 ? (
                      <span className="text-xs text-gray-400">無料</span>
                    ) : (
                      <span>¥{shippingCost.toLocaleString()}</span>
                    )}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-6 pt-6 flex justify-between items-baseline">
                <span className="text-base font-medium">Total</span>
                <div className="text-right">
                  <span className="text-xs text-gray-400 mr-2">JPY</span>
                  <span className="text-xl font-medium">¥{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

