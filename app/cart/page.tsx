"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/context/cart-context";

export default function CartPage() {
  const { items: cartItems, updateQuantity, removeFromCart: removeItem, subtotal } = useCart();

  const tax = Math.floor(subtotal * 0.1); // Assuming 10% tax included in price or calculated separately. Usually displayed as included.
  // If price includes tax:
  // const total = subtotal; 
  // If price excludes tax (mock implementation assumes tax included for simplicity or total calculation)
  const total = subtotal;

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <SiteHeader />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] text-[#8A8A8A] uppercase block mb-4">
              Shopping Bag
            </span>
            <h1 className="text-3xl md:text-4xl font-thin">CART</h1>
          </div>

          {cartItems.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Cart Items */}
              <div className="lg:w-2/3">
                <div className="border-b border-gray-200 pb-4 mb-8 hidden md:flex text-xs tracking-widest text-gray-400 uppercase">
                  <div className="w-1/2">商品</div>
                  <div className="w-1/6 text-center">価格</div>
                  <div className="w-1/6 text-center">数量</div>
                  <div className="w-1/6 text-right">小計</div>
                </div>

                <div className="space-y-8 md:space-y-0">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col md:flex-row items-center gap-6 py-6 border-b border-gray-100">
                      <div className="w-full md:w-1/2 flex items-center gap-6">
                        <div className="relative w-24 h-32 bg-[#F5F5F5] shrink-0">
                          <Image
                            src={item.img}
                            alt={item.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-light mb-2">{item.name}</h3>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-xs text-gray-400 hover:text-red-400 flex items-center gap-1 transition-colors"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>削除</span>
                          </button>
                        </div>
                      </div>

                      <div className="w-full md:w-1/6 flex md:justify-center items-center justify-between">
                        <span className="md:hidden text-xs text-gray-400 uppercase">価格:</span>
                        <span className="font-light">¥{item.price.toLocaleString()}</span>
                      </div>

                      <div className="w-full md:w-1/6 flex md:justify-center items-center justify-between">
                        <span className="md:hidden text-xs text-gray-400 uppercase">数量:</span>
                        <div className="flex items-center border border-gray-200">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-10 text-center text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <div className="w-full md:w-1/6 flex md:justify-end items-center justify-between font-medium">
                        <span className="md:hidden text-xs text-gray-400 uppercase">小計:</span>
                        <span>¥{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="lg:w-1/3">
                <div className="bg-[#F9F9F9] p-8 sticky top-32">
                  <h3 className="text-lg font-light mb-8 border-b border-gray-200 pb-4">注文内容</h3>
                  
                  <div className="space-y-4 mb-8 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>小計</span>
                      <span>¥{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>送料</span>
                      <span>無料</span>
                    </div>
                    <div className="flex justify-between font-medium text-lg pt-4 border-t border-gray-200">
                      <span>合計</span>
                      <span>¥{total.toLocaleString()}</span>
                    </div>
                    <p className="text-right text-xs text-gray-400">(税込)</p>
                  </div>

                  <div className="space-y-3">
                    <Link href="/checkout/step01" className="block">
                      <Button className="w-full bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] hover:border-[#1A1A1A] h-14 rounded-none text-xs tracking-[0.2em] uppercase transition-all">
                        ご購入手続きへ
                      </Button>
                    </Link>
                    
                    <div className="text-center py-2">
                       <span className="text-xs text-gray-400 block mb-2">- または -</span>
                       <Button 
                         className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#1A1A1A] h-12 rounded shadow-sm flex items-center justify-center gap-2 transition-colors"
                         onClick={() => alert("Amazon Pay機能はデモ環境のため動作しません。")}
                       >
                         <span className="font-bold">amazon</span>
                         <span className="text-xs">payでお支払い</span>
                       </Button>
                    </div>

                    <Link href="/shopping" className="block">
                      <Button variant="outline" className="w-full bg-white border border-gray-300 text-gray-600 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] h-12 rounded-none text-xs tracking-[0.2em] uppercase transition-all">
                        買い物を続ける
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 bg-[#F9F9F9]">
              <p className="text-gray-500 mb-8 font-light">カートに商品が入っていません。</p>
              <Link href="/shopping">
                <Button className="bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] hover:border-[#1A1A1A] h-12 px-8 rounded-none text-xs tracking-[0.2em] uppercase transition-all">
                  買い物をはじめる
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

