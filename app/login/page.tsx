"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <SiteHeader />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-md">
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.3em] text-[#8A8A8A] uppercase block mb-4">
              My Account
            </span>
            <h1 className="text-3xl md:text-4xl font-thin">Login</h1>
          </div>

          <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-sm">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs tracking-widest text-gray-500 uppercase">
                  メールアドレス
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="例: your@email.com" 
                  className="border-gray-200 focus:border-[#D4C5B0] focus:ring-[#D4C5B0] rounded-none h-12 font-sans"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-xs tracking-widest text-gray-500 uppercase">
                    パスワード
                  </Label>
                  <Link href="#" className="text-[10px] text-gray-400 hover:text-[#1A1A1A] transition-colors">
                    パスワードをお忘れですか？
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  className="border-gray-200 focus:border-[#D4C5B0] focus:ring-[#D4C5B0] rounded-none h-12 font-sans"
                />
              </div>

              <Button className="w-full bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] hover:border-[#1A1A1A] rounded-none h-12 tracking-widest text-xs uppercase transition-all duration-300">
                ログイン
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500 mb-6">アカウントをお持ちでない方は</p>
              <Link href="/register">
                <Button variant="outline" className="w-full border-[#1A1A1A] text-[#1A1A1A] bg-white hover:bg-[#1A1A1A] hover:text-white rounded-none h-12 tracking-widest text-xs uppercase transition-all duration-300">
                  新規会員登録
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

