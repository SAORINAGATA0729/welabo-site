import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#FDFCF8] text-[#1A1A1A] pt-32 pb-12 px-6 md:px-12 border-t border-[#E5E5E5]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
          <div className="lg:col-span-1">
             <h2 className="text-2xl tracking-[0.2em] font-thin mb-8">we labo</h2>
             <p className="text-xs text-[#555] leading-loose tracking-wide">
               〒104-0061<br />
               東京都中央区銀座3丁目10番7号 銀座京屋ビル8階
             </p>
          </div>
          
          <div className="lg:col-span-2 flex flex-col md:flex-row gap-16 md:gap-32">
             <ul className="space-y-6">
               {["Concept", "Products", "News"].map(item => (
                 <li key={item}>
                   <Link href={`/${item.toLowerCase()}`} className="text-sm font-light tracking-[0.1em] hover:text-[#D4C5B0] transition-colors">
                     {item}
                   </Link>
                 </li>
               ))}
             </ul>
             <ul className="space-y-6">
               {["Company", "Stockists", "Contact"].map(item => (
                 <li key={item}>
                   <Link href={`/${item.toLowerCase()}`} className="text-sm font-light tracking-[0.1em] hover:text-[#D4C5B0] transition-colors">
                     {item}
                   </Link>
                 </li>
               ))}
               <li>
                 <Link href="/login" className="text-sm font-light tracking-[0.1em] hover:text-[#D4C5B0] transition-colors">
                   Login
                 </Link>
               </li>
               <li>
                 <Link href="/register" className="text-sm font-light tracking-[0.1em] hover:text-[#D4C5B0] transition-colors">
                   Register
                 </Link>
               </li>
               <li>
                 <Link href="#" className="text-sm font-light tracking-[0.1em] hover:text-[#D4C5B0] transition-colors">
                   Privacy Policy
                 </Link>
               </li>
             </ul>
          </div>

          <div className="lg:col-span-1 flex flex-col justify-between h-full">
             <div className="flex flex-col items-start lg:items-end gap-2">
                <span className="text-xs text-[#8A8A8A] tracking-widest">＼Follow us!／</span>
                <div className="flex gap-4">
                  <Link 
                    href="https://www.instagram.com/ww.weworld/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:border-[#1A1A1A] hover:text-[#1A1A1A] text-gray-400 transition-all cursor-pointer"
                  >
                     <Instagram className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="https://www.facebook.com/ww.weworld" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:border-[#1A1A1A] hover:text-[#1A1A1A] text-gray-400 transition-all cursor-pointer"
                  >
                     <Facebook className="w-4 h-4" />
                  </Link>
                </div>
             </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
           <div className="w-full md:w-auto text-[100px] md:text-[180px] leading-none font-thin text-[#F5F5F5] select-none pointer-events-none -mb-8 -ml-4">
             we labo
           </div>
           <div className="text-[10px] text-[#8A8A8A] tracking-[0.2em] pb-2">
             © 2025 we labo All Rights Reserved.
           </div>
        </div>
      </div>
    </footer>
  );
}

