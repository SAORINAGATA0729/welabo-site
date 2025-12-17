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
import { Check } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    lastNameKana: "",
    firstNameKana: "",
    email: "",
    password: "",
    phone: "",
    zip: "",
    prefecture: "",
    city: "",
    building: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddressSearch = async () => {
    if (!formData.zip || formData.zip.length < 7) return;
    
    setLoading(true);
    try {
      const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${formData.zip}`);
      const data = await response.json();
      
      if (data.results && data.results[0]) {
        const result = data.results[0];
        setFormData(prev => ({
          ...prev,
          prefecture: result.address1,
          city: result.address2 + result.address3,
        }));
      } else {
        alert("住所が見つかりませんでした。");
      }
    } catch (error) {
      console.error("Address search failed", error);
      alert("住所検索に失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.lastName || !formData.firstName || !formData.lastNameKana || !formData.firstNameKana || 
        !formData.email || !formData.password || !formData.phone || !formData.zip || 
        !formData.prefecture || !formData.city) {
      setError("必須項目をすべて入力してください。");
      return;
    }

    if (formData.password.length < 8) {
      setError("パスワードは8文字以上で入力してください。");
      return;
    }

    // Check agreement checkbox
    const agreementCheckbox = document.getElementById("agreement") as HTMLInputElement;
    if (!agreementCheckbox?.checked) {
      setError("利用規約に同意してください。");
      return;
    }

    const success = register({
      lastName: formData.lastName,
      firstName: formData.firstName,
      lastNameKana: formData.lastNameKana,
      firstNameKana: formData.firstNameKana,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      zip: formData.zip,
      prefecture: formData.prefecture,
      city: formData.city,
      building: formData.building,
    });

    if (success) {
      alert("会員登録が完了しました！");
      router.push("/");
    } else {
      setError("このメールアドレスは既に登録されています。");
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <SiteHeader />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-2xl">
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.3em] text-[#8A8A8A] uppercase block mb-4">
              MEMBERSHIP
            </span>
            <h1 className="text-3xl md:text-4xl font-thin">REGISTER</h1>
            <p className="text-xs text-gray-500 mt-4 tracking-wide">
              会員登録して、スムーズなお買い物をお楽しみください。
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-sm">
            {/* Amazon Pay Mock Button */}
            <div className="mb-12 text-center border-b border-gray-100 pb-12">
              <p className="text-xs text-gray-500 mb-6">Amazonアカウントをお持ちの方はこちら</p>
              <Button 
                type="button"
                className="bg-[#FFD814] hover:bg-[#F7CA00] text-[#1A1A1A] w-full max-w-sm mx-auto py-6 rounded shadow-sm flex items-center justify-center gap-2 transition-colors"
                onClick={() => alert("Amazonログイン機能はデモ環境のため動作しません。")}
              >
                <span className="font-bold text-lg">amazon</span>
                <span className="text-xs mt-1">アカウントでログイン</span>
              </Button>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-4 rounded">
                  {error}
                </div>
              )}

              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-xs tracking-widest text-gray-500 uppercase">
                    姓 <span className="text-red-400">*</span>
                  </Label>
                  <Input 
                    id="last-name" 
                    placeholder="山田" 
                    className="border-gray-200 rounded-none h-12 font-sans"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="text-xs tracking-widest text-gray-500 uppercase">
                    名 <span className="text-red-400">*</span>
                  </Label>
                  <Input 
                    id="first-name" 
                    placeholder="花子" 
                    className="border-gray-200 rounded-none h-12 font-sans"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    required
                  />
                </div>
              </div>

              {/* Furigana */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="last-name-kana" className="text-xs tracking-widest text-gray-500 uppercase">
                    セイ <span className="text-red-400">*</span>
                  </Label>
                  <Input 
                    id="last-name-kana" 
                    placeholder="ヤマダ" 
                    className="border-gray-200 rounded-none h-12 font-sans"
                    value={formData.lastNameKana}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastNameKana: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="first-name-kana" className="text-xs tracking-widest text-gray-500 uppercase">
                    メイ <span className="text-red-400">*</span>
                  </Label>
                  <Input 
                    id="first-name-kana" 
                    placeholder="ハナコ" 
                    className="border-gray-200 rounded-none h-12 font-sans"
                    value={formData.firstNameKana}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstNameKana: e.target.value }))}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs tracking-widest text-gray-500 uppercase">
                  メールアドレス <span className="text-red-400">*</span>
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  className="border-gray-200 rounded-none h-12 font-sans"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-xs tracking-widest text-gray-500 uppercase">
                  パスワード <span className="text-red-400">*</span>
                </Label>
                <Input 
                  id="password" 
                  type="password" 
                  className="border-gray-200 rounded-none h-12 font-sans"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  required
                  minLength={8}
                />
                <p className="text-[10px] text-gray-400">半角英数字8文字以上で入力してください。</p>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs tracking-widest text-gray-500 uppercase">
                  電話番号 <span className="text-red-400">*</span>
                </Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="090-1234-5678" 
                  className="border-gray-200 rounded-none h-12 font-sans"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  required
                />
              </div>

              <div className="w-full h-[1px] bg-gray-100 my-8" />

              {/* Address */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="zip" className="text-xs tracking-widest text-gray-500 uppercase">
                    郵便番号 <span className="text-red-400">*</span>
                  </Label>
                  <div className="flex gap-4">
                    <Input 
                      id="zip" 
                      placeholder="1040061" 
                      className="border-gray-200 rounded-none h-12 font-sans w-40" 
                      value={formData.zip}
                      onChange={(e) => setFormData(prev => ({ ...prev, zip: e.target.value }))}
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="h-12 rounded-none border-gray-200 text-xs"
                      onClick={handleAddressSearch}
                      disabled={loading}
                    >
                      {loading ? "検索中..." : "住所検索"}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prefecture" className="text-xs tracking-widest text-gray-500 uppercase">
                    都道府県 <span className="text-red-400">*</span>
                  </Label>
                  <Input 
                    id="prefecture" 
                    placeholder="東京都" 
                    className="border-gray-200 rounded-none h-12 font-sans" 
                    value={formData.prefecture}
                    onChange={(e) => setFormData(prev => ({ ...prev, prefecture: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="text-xs tracking-widest text-gray-500 uppercase">
                    市区町村・番地 <span className="text-red-400">*</span>
                  </Label>
                  <Input 
                    id="city" 
                    placeholder="中央区銀座3丁目10番7号" 
                    className="border-gray-200 rounded-none h-12 font-sans" 
                    value={formData.city}
                    onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="building" className="text-xs tracking-widest text-gray-500 uppercase">
                    建物名・部屋番号
                  </Label>
                  <Input 
                    id="building" 
                    placeholder="銀座京屋ビル8階" 
                    className="border-gray-200 rounded-none h-12 font-sans"
                    value={formData.building}
                    onChange={(e) => setFormData(prev => ({ ...prev, building: e.target.value }))}
                  />
                </div>
              </div>

              {/* Agreements */}
              <div className="bg-gray-50 p-6 mt-8 space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input 
                      id="agreement"
                      type="checkbox" 
                      className="peer h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-[#1A1A1A] checked:border-[#1A1A1A] appearance-none transition-colors cursor-pointer" 
                      required
                    />
                    <Check className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                  </div>
                  <span className="text-xs text-gray-600 pt-0.5">
                    <Link href="#" className="underline hover:text-[#1A1A1A]">利用規約</Link>
                    および
                    <Link href="#" className="underline hover:text-[#1A1A1A]">プライバシーポリシー</Link>
                    に同意します
                  </span>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="checkbox" className="peer h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-[#1A1A1A] checked:border-[#1A1A1A] appearance-none transition-colors cursor-pointer" defaultChecked />
                    <Check className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                  </div>
                  <span className="text-xs text-gray-600 pt-0.5">
                    お得な情報やキャンペーンのお知らせを受け取る
                  </span>
                </label>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] hover:border-[#1A1A1A] rounded-none h-14 tracking-widest text-xs uppercase transition-all duration-300">
                  アカウント登録
                </Button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500 mb-4">すでにアカウントをお持ちですか？</p>
              <Link href="/login" className="text-xs underline hover:text-[#D4C5B0] transition-colors tracking-wide">
                ログインに戻る
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

