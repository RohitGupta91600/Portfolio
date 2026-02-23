"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MapPin,
  Star,
  Phone,
  Award,
  CheckCircle,
  Layers,
  Wind,
  Hammer,
  Quote,
  MoveRight,
  ShieldCheck,
  Globe,
  ArrowUpRight
} from "lucide-react";

/**
 * ATELIER VISTARA: THE ULTIMATE INDIAN LUXURY EXPERIENCE
 * Theme: Soft Sand, Warm Wood, Champagne Accents
 * Feel: Professional, Warm, Inviting, World-Class
 */

export default function LuxuryPortfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  return (
    <main className="bg-[#FAF7F2] text-[#3D362F] font-light antialiased overflow-x-hidden selection:bg-[#C5A27D] selection:text-white">
      
      {/* ================= 01. NAVIGATION ================= */}
      <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-8 md:px-20 py-10 pointer-events-none">
        <span className="text-2xl font-serif tracking-tighter uppercase pointer-events-auto cursor-pointer">
          Atelier <span className="italic text-[#A68966]">Vistara</span>
        </span>
        <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.4em] font-semibold pointer-events-auto">
          <a href="#philosophy" className="hover:text-[#A68966] transition">Philosophy</a>
          <a href="#projects" className="hover:text-[#A68966] transition">Projects</a>
          <a href="#curation" className="hover:text-[#A68966] transition">Curation</a>
          <a href="#contact" className="hover:text-[#A68966] transition">Contact</a>
        </div>
      </nav>

      {/* ================= 02. HERO: SOFT & INVITING ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="z-10"
          >
            <span className="uppercase tracking-[0.6em] text-[10px] mb-6 block text-[#A68966] font-bold">
              Premier Interior Architecture
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8">
              Homes that <br /> 
              <span className="italic font-light">breathe</span> warmth.
            </h1>
            <p className="text-lg md:text-xl text-[#6F665F] max-w-lg leading-relaxed mb-10 font-serif italic">
              "We don't just design rooms; we curate the backdrop for your family's most cherished memories."
            </p>
            <div className="flex gap-6">
              <button className="bg-[#3D362F] text-[#FAF7F2] px-10 py-5 rounded-full text-xs uppercase tracking-widest hover:bg-[#A68966] transition-colors duration-500">
                View Gallery
              </button>
              <button className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold group">
                The Process <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-t-[20rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
                alt="Luxury Indian Living" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-[#E8DED1] p-10 rounded-full hidden md:block border-8 border-[#FAF7F2]">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-center">15 Years of <br/> Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= 03. PHILOSOPHY: WARMTH & SOUL ================= */}
      <section id="philosophy" className="py-40 px-6 bg-[#F2EDE4]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-16 leading-snug">
            Rooted in <span className="text-[#A68966]">Heritage</span>, <br />Designed for the Future.
          </h2>
          <div className="grid md:grid-cols-3 gap-16 text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#A68966] shadow-sm">
                <Wind size={20} />
              </div>
              <h3 className="text-xl font-serif italic">Natural Ventilation</h3>
              <p className="text-sm leading-relaxed text-[#6F665F]">Inspired by traditional Indian courtyards, we optimize airflow to keep luxury homes naturally cool and vibrant.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#A68966] shadow-sm">
                <Layers size={20} />
              </div>
              <h3 className="text-xl font-serif italic">Tactile Textures</h3>
              <p className="text-sm leading-relaxed text-[#6F665F]">From hand-woven silks to rough-cut Jodhpur stone, we prioritize the feeling of every surface you touch.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#A68966] shadow-sm">
                <Star size={20} />
              </div>
              <h3 className="text-xl font-serif italic">Bespoke Curation</h3>
              <p className="text-sm leading-relaxed text-[#6F665F]">Every piece of furniture is either an antique with a story or a custom-made masterpiece created for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 04. MASONRY PORTFOLIO: VISUAL WOW ================= */}
      <section id="projects" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <h2 className="text-5xl font-serif">Selected Works</h2>
            <p className="max-w-xs text-sm italic text-[#6F665F]">A glimpse into our portfolio of residences across Delhi, Mumbai, and Rajasthan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group overflow-hidden rounded-2xl relative">
              <img src="https://images.unsplash.com/photo-1600607687940-47a04b629571?q=80&w=2069" className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110" alt="Living Room" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex flex-col justify-end">
                <h4 className="text-white text-2xl font-serif">The Gulmohar Villa, Alibaug</h4>
              </div>
            </div>
            <div className="md:col-span-4 group overflow-hidden rounded-2xl relative">
              <img src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070" className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110" alt="Kitchen" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex flex-col justify-end">
                <h4 className="text-white text-2xl font-serif">Minimalist Penthouse, Gurgaon</h4>
              </div>
            </div>
            <div className="md:col-span-4 group overflow-hidden rounded-2xl relative">
              <img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1780" className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110" alt="Bedroom" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex flex-col justify-end">
                <h4 className="text-white text-2xl font-serif">Heritage Suite, Udaipur</h4>
              </div>
            </div>
            <div className="md:col-span-8 group overflow-hidden rounded-2xl relative">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070" className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110" alt="Dining" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex flex-col justify-end">
                <h4 className="text-white text-2xl font-serif">The Sky Garden, Bangalore</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 05. TESTIMONIAL: EMOTIONAL CONNECT ================= */}
      <section className="py-40 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="mx-auto text-[#A68966] opacity-30 mb-10" size={60} />
          <h2 className="text-3xl md:text-5xl font-serif italic leading-snug mb-12">
            "They didn't just build a house; they understood our family's soul. Coming home now feels like a warm embrace every single day."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-[#E8DED1]">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888" className="w-full h-full object-cover" alt="Client" />
            </div>
            <p className="font-bold uppercase tracking-[0.2em] text-xs">Priya & Vikram Sethi</p>
            <p className="text-[10px] text-[#A68966] mt-1 uppercase tracking-widest font-bold">Delhi Civil Lines</p>
          </div>
        </div>
      </section>

      {/* ================= 06. MATERIAL CURATION: DEEP DETAIL ================= */}
      <section id="curation" className="py-40 px-6 bg-[#2C2622] text-[#FAF7F2]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <span className="text-[#A68966] uppercase tracking-[0.4em] text-[10px] block mb-8 font-bold">The Atelier Standard</span>
            <h2 className="text-5xl font-serif mb-10 leading-tight">Mastering the <br />Alchemy of Materials</h2>
            <p className="text-[#A39A91] leading-relaxed mb-12 max-w-md">
              We source global materials with an Indian heart. Whether it's Italian marble treated with traditional honey-wax or German kitchens fitted with handcrafted brass handles from Aligarh.
            </p>
            <div className="space-y-6">
              <div className="flex gap-6 items-start border-b border-white/10 pb-6">
                <Hammer className="text-[#A68966]" />
                <div>
                  <h4 className="text-xl font-serif">Ethical Teakwood</h4>
                  <p className="text-sm opacity-60">Sourced from sustainable plantations in Kerala.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start border-b border-white/10 pb-6">
                <Globe className="text-[#A68966]" />
                <div>
                  <h4 className="text-xl font-serif">Global Accents</h4>
                  <p className="text-sm opacity-60">Handpicked artifacts from Parisian flea markets and Jaipur’s hidden lanes.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070" className="rounded-2xl h-80 w-full object-cover" alt="Marble" />
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070" className="rounded-2xl h-80 w-full object-cover mt-12" alt="Brass" />
          </div>
        </div>
      </section>

      {/* ================= 07. STATS: TRUST ================= */}
      <section className="py-24 bg-[#E8DED1]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-5xl font-serif mb-2">120+</p>
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Homes Perfected</p>
          </div>
          <div>
            <p className="text-5xl font-serif mb-2">18</p>
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Cities Reimagined</p>
          </div>
          <div>
            <p className="text-5xl font-serif mb-2">45</p>
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Master Craftsmen</p>
          </div>
          <div>
            <p className="text-5xl font-serif mb-2">15+</p>
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Design Awards</p>
          </div>
        </div>
      </section>

      {/* ================= 08. FINAL CTA ================= */}
      <section id="contact" className="relative py-40 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-tight">
            Ready to live in <br />
            <span className="italic text-[#A68966]">Art?</span>
          </h2>
          <p className="text-xl text-[#6F665F] mb-12 max-w-2xl mx-auto font-serif">
            We are currently accepting a limited number of commissions for 2026/27. Let's begin the conversation.
          </p>
          <button className="bg-[#3D362F] text-white px-16 py-7 rounded-full text-xs uppercase tracking-[0.3em] font-bold hover:scale-105 transition-all shadow-2xl">
            Book a Consultation
          </button>
        </div>
        
        {/* Soft decorative circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8DED1] rounded-full blur-[120px] -z-10 opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F2EDE4] rounded-full blur-[100px] -z-10 opacity-50" />
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-20 bg-white border-t border-[#E8DED1]">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12 items-start">
          <div className="col-span-2">
             <span className="text-2xl font-serif tracking-tighter uppercase mb-6 block">
                Atelier <span className="italic text-[#A68966]">Vistara</span>
             </span>
             <p className="text-sm text-[#6F665F] leading-relaxed max-w-sm italic">
                Crafting meaningful spaces that tell the story of the people who inhabit them. A studio dedicated to the art of fine living.
             </p>
          </div>
          <div>
            <h5 className="font-bold text-[10px] uppercase tracking-widest mb-6">Contact</h5>
            <p className="text-sm mb-2">+91 98765 43210</p>
            <p className="text-sm">hello@ateliervistara.com</p>
          </div>
          <div>
            <h5 className="font-bold text-[10px] uppercase tracking-widest mb-6">Offices</h5>
            <p className="text-sm mb-2 text-[#A68966] font-bold">New Delhi</p>
            <p className="text-xs text-[#6F665F]">12th Floor, DLF Cyber City, Gurgaon</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-[#F2EDE4] flex justify-between items-center text-[10px] uppercase tracking-widest opacity-50">
            <p>© 2026 Atelier Vistara</p>
            <div className="flex gap-6">
                <span>Instagram</span>
                <span>LinkedIn</span>
            </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-[200]">
        <button className="bg-[#3D362F] text-white p-6 rounded-full shadow-2xl hover:bg-[#A68966] transition-all group border-4 border-white">
          <Phone size={24} className="group-hover:rotate-12 transition-transform" />
        </button>
      </div>

    </main>
  );
}