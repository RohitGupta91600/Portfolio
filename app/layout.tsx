import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Premium Serif for Headings (Sophisticated & Luxurious)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Elegant Serif for Quotes/Italics (Traditional Indian Heritage feel)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

// Clean Sans-serif for Body text (High Readability)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Atelier Vistara | Designing India’s Most Refined Living Spaces",
  description: "Bespoke interior architecture and luxury residential design in Delhi, Mumbai, and Rajasthan. Shaping experiences through light, texture, and heritage.",
  keywords: ["Luxury Interior Design India", "Atelier Vistara", "High-end Home Decor Delhi", "Modern Haveli Design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${inter.variable} 
          ${playfair.variable} 
          ${cormorant.variable} 
          bg-[#FAF7F2] 
          antialiased 
          text-[#3D362F]
        `}
      >
        {/* The smooth background transition starts here */}
        <div className="relative font-inter">
          {children}
        </div>
      </body>
    </html>
  );
}