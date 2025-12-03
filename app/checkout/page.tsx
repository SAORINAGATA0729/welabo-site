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

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  const [sameAsBilling, setSameAsBilling] = useState(true);

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
              <span className="text-[#1A1A1A]">お客様情報</span>
              <ChevronRight className="w-3 h-3 text-gray-300" />
              <span className="text-gray-400">配送</span>
              <ChevronRight className="w-3 h-3 text-gray-300" />
              <span className="text-gray-400">お支払い</span>
            </div>

            <div className="space-y-12">
              {/* Contact Information */}
              <section>
                <div className="flex justify-between items-baseline mb-6">
                  <h2 className="text-lg font-light">連絡先情報</h2>
                  <Link href="/login" className="text-xs underline text-gray-500 hover:text-[#1A1A1A]">
                    アカウントをお持ちの方は ログイン
                  </Link>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs tracking-widest text-gray-500 uppercase">メールアドレス</Label>
                    <Input id="email" type="email" placeholder="例: your@email.com" className="h-12 rounded-none border-gray-200" />
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="newsletter" className="rounded-sm border-gray-300" />
                    <label htmlFor="newsletter" className="text-xs text-gray-600 cursor-pointer">
                      ニュースやオファーを受け取る
                    </label>
                  </div>
                </div>
              </section>

              {/* Shipping Address */}
              <section>
                <h2 className="text-lg font-light mb-6">配送先住所</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-xs tracking-widest text-gray-500 uppercase">姓</Label>
                      <Input id="lastName" className="h-12 rounded-none border-gray-200" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-xs tracking-widest text-gray-500 uppercase">名</Label>
                      <Input id="firstName" className="h-12 rounded-none border-gray-200" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="zip" className="text-xs tracking-widest text-gray-500 uppercase">郵便番号</Label>
                    <Input id="zip" className="h-12 rounded-none border-gray-200 w-40" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="prefecture" className="text-xs tracking-widest text-gray-500 uppercase">都道府県</Label>
                    <Input id="prefecture" className="h-12 rounded-none border-gray-200" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address1" className="text-xs tracking-widest text-gray-500 uppercase">市区町村・番地</Label>
                    <Input id="address1" className="h-12 rounded-none border-gray-200" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address2" className="text-xs tracking-widest text-gray-500 uppercase">建物名・部屋番号</Label>
                    <Input id="address2" className="h-12 rounded-none border-gray-200" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs tracking-widest text-gray-500 uppercase">電話番号</Label>
                    <Input id="phone" type="tel" className="h-12 rounded-none border-gray-200" />
                  </div>
                </div>
              </section>

              <div className="flex justify-end pt-8">
                <Link href="/checkout/shipping">
                  <Button className="bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] hover:border-[#1A1A1A] h-14 px-8 rounded-none text-xs tracking-[0.2em] uppercase transition-all">
                    Continue to Shipping
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
                  <span className="text-xs text-gray-400">Calculated at next step</span>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-6 pt-6 flex justify-between items-baseline">
                <span className="text-base font-medium">Total</span>
                <div className="text-right">
                  <span className="text-xs text-gray-400 mr-2">JPY</span>
                  <span className="text-xl font-medium">¥{subtotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

