"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
      <SiteHeader />

      <main className="pt-32 pb-20">
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shopping">
                <Button className="bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] hover:border-[#1A1A1A] h-14 px-8 rounded-none text-xs tracking-[0.2em] uppercase transition-all">
                  買い物を続ける
                </Button>
              </Link>
              <Link href="/mypage/orders">
                <Button variant="outline" className="bg-white border border-gray-300 text-gray-600 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] h-14 px-8 rounded-none text-xs tracking-[0.2em] uppercase transition-all">
                  注文履歴を見る
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

