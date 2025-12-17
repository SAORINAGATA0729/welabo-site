"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/auth-context";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("メールアドレスとパスワードを入力してください。");
      return;
    }

    const success = login(email, password);
    if (success) {
      router.push("/");
    } else {
      setError("メールアドレスまたはパスワードが正しくありません。");
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <SiteHeader />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-md">
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.3em] text-[#8A8A8A] uppercase block mb-4">
              My Account
            </span>
            <h1 className="text-3xl md:text-4xl font-thin">LOGIN</h1>
          </div>

          <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-sm">
            {/* Amazon Login Mock Button */}
            <div className="mb-12 text-center border-b border-gray-100 pb-12">
              <p className="text-xs text-gray-500 mb-6">Amazonアカウントをお持ちの方はこちら</p>
              <Button 
                type="button"
                className="bg-[#FFD814] hover:bg-[#F7CA00] text-[#1A1A1A] w-full max-w-sm mx-auto py-6 rounded shadow-sm flex items-center justify-center gap-2 transition-colors"
                onClick={() => alert("Amazonログイン機能はデモ環境のため動作しません。")}
              >
                <span className="font-bold text-lg">amazon</span>
                <span className="text-xs mt-1">でログイン</span>
              </Button>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-4 rounded">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs tracking-widest text-gray-500 uppercase">
                  メールアドレス
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="例: your@email.com" 
                  className="border-gray-200 focus:border-[#D4C5B0] focus:ring-[#D4C5B0] rounded-none h-12 font-sans"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] hover:border-[#1A1A1A] rounded-none h-12 tracking-widest text-xs uppercase transition-all duration-300">
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

