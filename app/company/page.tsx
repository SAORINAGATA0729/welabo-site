"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-serif selection:bg-[#D4C5B0] selection:text-white">
      <SiteHeader />

      <main className="pt-32">
        {/* Header */}
        <section className="container mx-auto px-6 md:px-12 mb-32">
           <div className="text-center max-w-3xl mx-auto">
              <span className="text-[10px] tracking-[0.3em] text-[#8A8A8A] uppercase block mb-6">
                 About Us
              </span>
              <h1 className="text-5xl md:text-7xl font-thin mb-8">Company</h1>
           </div>
        </section>

        {/* Company Info */}
        <section className="px-6 md:px-12 pb-32">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-32">
              {/* Company Details */}
              <div>
                <dl className="space-y-8">
                  <div>
                    <dt className="text-xs tracking-widest uppercase text-gray-500 mb-2">会社名</dt>
                    <dd className="text-base text-gray-800 font-light">株式会社 we labo</dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-widest uppercase text-gray-500 mb-2">所在地</dt>
                    <dd className="text-sm text-gray-800 font-light leading-relaxed">
                      〒104-0061<br />
                      東京都中央区銀座3丁目10番7号<br />
                      銀座京屋ビル8階
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-widest uppercase text-gray-500 mb-2">電話番号</dt>
                    <dd className="text-sm text-gray-800 font-light">
                      <a href="tel:03-6264-3448" className="hover:text-[#1A1A1A] transition-colors">03-6264-3448</a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-widest uppercase text-gray-500 mb-2">事業内容</dt>
                    <dd className="text-sm text-gray-800 font-light leading-relaxed">
                      抗老化に関する研究<br />
                      健康食品・サプリメントの開発と製造<br />
                      健康食品・サプリメントの販売および卸売
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-widest uppercase text-gray-500 mb-2">主要販売先</dt>
                    <dd className="text-sm text-gray-800 font-light leading-relaxed">
                      三越、伊勢丹、京王百貨店、松坂屋、<br />
                      阪神百貨店、あべのハルカス、福屋
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Google Map */}
            <div className="mb-32">
              <div className="mb-6 text-sm text-gray-600 font-light">
                <p className="mb-2">〒104-0061 東京都中央区銀座3丁目10番7号 銀座京屋ビル8階</p>
                <p className="text-xs text-gray-500">
                  東京メトロ銀座線・丸ノ内線・日比谷線「銀座駅」より徒歩3分<br />
                  東京メトロ有楽町線「銀座一丁目駅」より徒歩5分
                </p>
              </div>
              <div className="w-full aspect-video overflow-hidden bg-gray-100 rounded-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.1234567890!2d139.768159!3d35.671252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQwJzE2LjUiTiAxMznCsDQ2JzA1LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp&cid=451804139594713143&q=東京都中央区銀座3丁目10番7号+銀座京屋ビル"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
