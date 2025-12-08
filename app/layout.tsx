import type { Metadata } from "next";
import { Playfair_Display, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/context/cart-context";
import { AuthProvider } from "@/lib/context/auth-context";
import { ScrollReset } from "@/components/scroll-reset";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const shippori = Shippori_Mincho({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-shippori",
});

export const metadata: Metadata = {
  title: "we labo | Active Aging",
  description: "年齢を超えて常に躍動し、輝き続ける人生「アクティブエイジング」を価値として提供し続けます",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${shippori.variable} font-serif antialiased bg-stone-50`}
      >
        <AuthProvider>
          <CartProvider>
            <ScrollReset />
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
