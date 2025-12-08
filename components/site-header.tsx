"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Instagram, Facebook, ShoppingBag, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/lib/context/cart-context";

export function SiteHeader() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const isHome = pathname === "/" || pathname === null;
  const isShopping = pathname?.startsWith("/shopping") || 
                     pathname?.startsWith("/cart") || 
                     pathname?.startsWith("/login") || 
                     pathname?.startsWith("/register");

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHome ? 'bg-white/90 backdrop-blur-md border-b border-gray-100' : 'bg-white border-b border-gray-100'}`}>
      <div className="container mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        <Link href={isShopping ? "/shopping" : "/"} className="z-50 group block relative h-10 w-32">
          <Image
            src="https://welabo.jp/wp-content/uploads/logo-header.png"
            alt="we labo"
            fill
            className="object-contain"
            unoptimized
          />
          {isShopping && (
             <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-full text-center text-[8px] tracking-widest text-gray-500 uppercase">Online Store</span>
          )}
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Main Menu Items */}
          <div className="flex items-center gap-10">
            {(isShopping 
              ? ["Products", "Cart", "Guide"] 
              : ["Concept", "Products", "News", "Company", "Shoplist", "Contact"]
            ).map((item) => (
              <Link 
                key={item} 
                href={isShopping 
                  ? (item === "Products" ? "/shopping" : item === "Cart" ? "/cart" : "/shopping/guide")
                  : item === "Shoplist" ? "/stockists" : `/${item.toLowerCase()}`
                } 
                className="text-[11px] uppercase tracking-[0.2em] text-gray-600 hover:text-[#1A1A1A] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#1A1A1A] after:transition-all hover:after:w-full"
              >
                {item}
              </Link>
            ))}
          </div>
          
          {/* Right Side Actions */}
          {isShopping ? (
            <div className="flex items-center gap-6 ml-4 pl-4 border-l border-gray-200">
               <Link href="/login" className="flex flex-col items-center text-gray-600 hover:text-[#1A1A1A] transition-colors group">
                  <User className="w-5 h-5 mb-1" />
                  <span className="text-[9px] tracking-widest">LOGIN</span>
               </Link>
               <Link href="/cart" className="flex flex-col items-center text-gray-600 hover:text-[#1A1A1A] transition-colors group relative">
                  <div className="relative">
                     <ShoppingBag className="w-5 h-5 mb-1" />
                     {totalItems > 0 && (
                       <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#1A1A1A] text-white text-[9px] flex items-center justify-center rounded-full">
                         {totalItems}
                       </span>
                     )}
                  </div>
                  <span className="text-[9px] tracking-widest">CART</span>
              </Link>
            </div>
          ) : (
            <div className="flex items-center ml-10">
              <Link href="/shopping" className="flex items-center justify-center px-8 py-3 border border-[#1A1A1A] bg-white hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] text-[10px] tracking-widest transition-all min-w-[140px]">
                SHOPPING
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full w-12 h-12">
                <Menu className="h-5 w-5 text-gray-800" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-l border-gray-100 w-full sm:max-w-sm pt-20">
               <div className="flex flex-col gap-8 px-8">
                {(isShopping 
                  ? ["Products", "Guide", "Login", "Cart"] 
                  : ["Concept", "Products", "News", "Company", "Shoplist", "Contact"]
                ).map((item, i) => (
                  <Link 
                    key={item} 
                    href={isShopping 
                       ? (item === "Products" ? "/shopping" : `/${item.toLowerCase()}`)
                       : item === "Shoplist" ? "/stockists" : `/${item.toLowerCase()}`
                    }
                    className="text-3xl font-light tracking-widest text-gray-900 hover:text-[#D4C5B0] transition-colors flex items-center gap-4 group"
                  >
                    <span className="text-xs font-normal text-gray-400 group-hover:text-[#D4C5B0]">0{i + 1}</span>
                    {item}
                  </Link>
                ))}
                
                {!isShopping && (
                <Link 
                    href="/shopping"
                    className="text-3xl font-light tracking-widest text-gray-900 hover:text-[#D4C5B0] transition-colors flex items-center gap-4 group border border-gray-200 p-4 justify-center mt-4"
                >
                    <span className="text-xs font-normal text-gray-400 group-hover:text-[#D4C5B0] mr-4">07</span>
                    SHOPPING
                  </Link>
                )}
                
                {isShopping && (
                  <div className="mt-8 pt-8 border-t border-gray-100">
                     <Link href="/" className="text-sm text-gray-400 hover:text-gray-800 block mb-4">
                        &larr; Back to Official Site
                </Link>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
