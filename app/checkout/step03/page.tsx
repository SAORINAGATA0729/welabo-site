"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CheckoutStep03Page() {
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    // Generate order number (format: P + timestamp + random)
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000);
    setOrderNumber(`P${timestamp}${random}`);
  }, []);

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
      </header>

      <main className="pt-16 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-2xl">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-thin mb-8">
              ご注文ありがとうございました
            </h1>

            <div className="space-y-6 mb-12">
              <p className="text-base text-gray-600">
                注文番号は <span className="font-medium text-[#1A1A1A]">{orderNumber}</span> です。
              </p>
              <p className="text-base text-gray-600">
                ご注文状況は{" "}
                <Link href="/mypage/orders" className="underline hover:text-[#1A1A1A] transition-colors">
                  注文履歴
                </Link>
                {" "}をご覧ください。
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <Link href="/shopping">
                <Button className="bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] hover:border-[#1A1A1A] h-14 px-16 rounded-none text-xs tracking-[0.2em] uppercase transition-all">
                  TOPへ戻る
                </Button>
              </Link>
            </div>

            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                <Link href="/terms" className="underline hover:text-[#1A1A1A]">
                  特定商取引法に基づく表記
                </Link>
                {" "}と{" "}
                <Link href="/privacy" className="underline hover:text-[#1A1A1A]">
                  個人情報の取り扱いについて
                </Link>
                {" "}を必ずご確認の上、ご注文ください。
              </p>
              <p className="text-xs text-gray-400">
                © 2025 we labo All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

