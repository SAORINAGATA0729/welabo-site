"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。");
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <SiteHeader />

      <main className="pt-32">
        {/* Header */}
        <section className="container mx-auto px-6 md:px-12 mb-32">
           <div className="text-center max-w-3xl mx-auto">
              <span className="text-[10px] tracking-[0.3em] text-[#8A8A8A] uppercase block mb-6">
                 Get in Touch
              </span>
              <h1 className="text-5xl md:text-7xl font-thin mb-8">Contact</h1>
              <p className="text-sm leading-[2.4] text-gray-600 font-light">
                お問い合わせ、ご質問がございましたら、<br />
                お気軽にご連絡ください。
              </p>
           </div>
        </section>

        <div className="container mx-auto px-6 md:px-12 max-w-2xl pb-32">
          {/* Contact Form */}
          <div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <Label htmlFor="company" className="text-xs tracking-widest uppercase mb-2 block">
                    会社名
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="rounded-none border-gray-300 focus:border-[#1A1A1A] focus:ring-0 bg-white"
                    placeholder="株式会社○○"
                  />
                </div>

                <div>
                  <Label htmlFor="name" className="text-xs tracking-widest uppercase mb-2 block">
                    お名前 <span className="text-red-500">※必須</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-none border-gray-300 focus:border-[#1A1A1A] focus:ring-0 bg-white"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-xs tracking-widest uppercase mb-2 block">
                    メールアドレス <span className="text-red-500">※必須</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-none border-gray-300 focus:border-[#1A1A1A] focus:ring-0 bg-white"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-xs tracking-widest uppercase mb-2 block">
                    電話番号
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="rounded-none border-gray-300 focus:border-[#1A1A1A] focus:ring-0 bg-white"
                    placeholder="090-1234-5678"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-xs tracking-widest uppercase mb-2 block">
                    お問い合わせ内容 <span className="text-red-500">※必須</span>
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-none border-gray-300 focus:border-[#1A1A1A] focus:ring-0 bg-white min-h-[200px] resize-none"
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <input
                    type="checkbox"
                    id="confirm"
                    required
                    className="mt-1 w-4 h-4 border-gray-300 rounded focus:ring-[#1A1A1A]"
                  />
                  <label htmlFor="confirm" className="text-xs text-gray-600 font-light leading-relaxed cursor-pointer">
                    上記内容でよろしければチェックを入れて送信してください。
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] hover:border-[#1A1A1A] h-14 rounded-none text-xs tracking-[0.2em] mt-8 transition-all duration-300"
                >
                  送信する
                </Button>
              </form>
          </div>
        </div>

        <SiteFooter />
      </main>
    </div>
  );
}

