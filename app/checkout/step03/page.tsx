"use client";

import Link from "next/link";
import Image from "next/image";

const EC_ORDERIN_URL = "https://shop.welabo.jp/ssl/orderin.html";

export default function CheckoutStep03Page() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      {/* デザイン変更: welabo-site のヘッダー */}
      <header className="h-24 flex items-center justify-between px-6 md:px-12 border-b border-gray-100">
        <Link href="/" className="block relative h-8 w-24">
          <Image
            src="https://welabo.jp/wp-content/uploads/logo-header.png"
            alt="we labo"
            fill
            className="object-contain"
            unoptimized
          />
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-full text-center text-[8px] tracking-widest text-gray-500 uppercase">
            Online Store
          </span>
        </Link>
      </header>

      {/* 全く同じUI: shop.welabo.jp の注文完了ページをそのまま表示 */}
      <main className="w-full">
        <iframe
          src={EC_ORDERIN_URL}
          title="ご注文ありがとうございました"
          className="w-full min-h-[calc(100vh-6rem)] border-0"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      </main>

      {/* デザイン変更: welabo-site のフッター */}
      <footer className="border-t border-gray-200 py-8 text-center">
        <p className="text-xs text-gray-400">© 2025 we labo All Rights Reserved.</p>
      </footer>
    </div>
  );
}
