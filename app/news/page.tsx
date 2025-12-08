"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  { date: "2025.11.26", title: "『LUXURY PROBIOTICS＋』三越伊勢丹ベストコスメ2025年間【インナーサポート部門 第1位】を受賞いたしました", tag: "AWARD", id: "1507" },
  { date: "2025.10.28", title: "「阪神梅田本店 POP UP SHOP 」に出店いたします", tag: "NEWS", id: "1502" },
  { date: "2025.10.15", title: "「銀座三越 新館7階 GINZA COSME WORLD NEXT➡」に出店いたします", tag: "EVENT", id: "1493" },
  { date: "2025.08.31", title: "「松坂屋名古屋店 本館6階にてPOP UP イベント」を開催いたします", tag: "EVENT", id: "1471" },
  { date: "2025.08.29", title: "『LUXURY NMN 15000』が家庭画報.comに掲載されました", tag: "MEDIA", id: "1464" },
  { date: "2025.08.01", title: "夏季休業のお知らせ", tag: "INFO", id: "1438" },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <SiteHeader />

      <main className="pt-32">
        {/* Header */}
        <section className="container mx-auto px-6 md:px-12 mb-32">
           <div className="text-center max-w-3xl mx-auto">
              <span className="text-[10px] tracking-[0.3em] text-[#8A8A8A] uppercase block mb-6">
                 Information and Media
              </span>
              <h1 className="text-5xl md:text-7xl font-thin mb-8">News</h1>
           </div>
        </section>

        {/* News List */}
        <section className="px-6 md:px-12 pb-32">
           <div className="container mx-auto max-w-[1000px]">
              <div className="space-y-0 border-t border-gray-200">
               {newsItems.map((item, i) => (
                 <Link key={i} href={`/news/${item.id}`} className="group block">
                   <div className="flex flex-col md:flex-row md:items-center gap-6 py-12 border-b border-gray-200 hover:bg-[#FAFAFA] transition-colors px-4 relative">
                      <div className="md:w-40 shrink-0">
                        <span className="text-sm font-serif text-gray-500">{item.date}</span>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-sm md:text-base font-light tracking-wide text-[#1A1A1A] group-hover:translate-x-2 transition-transform duration-300">
                          {item.title}
                        </h4>
                      </div>
                      
                      <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
                         <ArrowRight className="w-5 h-5 text-[#D4C5B0]" />
                      </div>
                   </div>
                 </Link>
               ))}
              </div>
              
              <div className="mt-20 flex justify-center gap-4">
                 <Button variant="outline" disabled className="rounded-full w-12 h-12 p-0 border-gray-200 text-gray-300">
                    1
                 </Button>
                 <Button variant="outline" className="rounded-full w-12 h-12 p-0 border-gray-200 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-colors">
                    2
                 </Button>
                 <Button variant="outline" className="rounded-full w-12 h-12 p-0 border-gray-200 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-colors">
                    3
                 </Button>
              </div>
           </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

