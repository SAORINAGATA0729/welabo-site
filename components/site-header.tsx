"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Instagram, Facebook } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === null;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHome ? 'bg-white/90 backdrop-blur-md border-b border-gray-100' : 'bg-white border-b border-gray-100'}`}>
      <div className="container mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        <Link href="/" className="z-50 group block relative h-10 w-32">
          <Image
            src="https://welabo.jp/wp-content/uploads/logo-header.png"
            alt="we labo"
            fill
            className="object-contain"
            unoptimized
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-10">
            {["Concept", "Products", "News", "Company", "Stockists", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase()}`} 
                className="text-[11px] uppercase tracking-[0.2em] text-gray-600 hover:text-[#1A1A1A] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#1A1A1A] after:transition-all hover:after:w-full"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="w-[1px] h-4 bg-gray-300 mx-2"></div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-[9px] text-gray-400 tracking-widest whitespace-nowrap">＼Follow us!／</span>
            <div className="flex items-center gap-4">
              <Link href="https://www.instagram.com/welabo_official/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1A1A1A] transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="https://www.facebook.com/welabo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1A1A1A] transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full w-12 h-12">
                <Menu className="h-5 w-5 text-gray-800" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-l border-gray-100 w-full sm:max-w-sm pt-20">
               <div className="flex flex-col gap-10 px-8">
                {["Concept", "Products", "News", "Company", "Stockists", "Contact"].map((item, i) => (
                  <Link 
                    key={item} 
                    href={`/${item.toLowerCase()}`}
                    className="text-3xl font-light tracking-widest text-gray-900 hover:text-[#D4C5B0] transition-colors flex items-center gap-4 group"
                  >
                    <span className="text-xs font-normal text-gray-400 group-hover:text-[#D4C5B0]">0{i + 1}</span>
                    {item}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

