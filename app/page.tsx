"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Star,
  Phone,
  Award,
  Layers,
  Wind,
  Hammer,
  Quote,
  ShieldCheck,
  Globe,
  ArrowUpRight,
  Compass,
  Droplets
} from "lucide-react";

export default function LuxuryPortfolio() {
  return (
    <main className="bg-[#FAF7F2] text-[#3D362F] font-light antialiased overflow-x-hidden selection:bg-[#C5A27D] selection:text-white">

      {/* ================= 01. NAVIGATION ================= */}
      <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-8 md:px-20 py-10 mix-blend-multiply">
        <span className="text-2xl font-serif tracking-tighter uppercase cursor-pointer">
          Atelier <span className="italic text-[#A68966] font-serif">Vistara</span>
        </span>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.4em] font-bold">
          <a href="#philosophy" className="hover:text-[#A68966] transition">The Soul</a>
          <a href="#projects" className="hover:text-[#A68966] transition">Folio</a>
          <a href="#process" className="hover:text-[#A68966] transition">Method</a>
          <a href="#contact" className="hover:text-[#A68966] transition">Consult</a>
        </div>
      </nav>

      {/* ================= 02. HERO: THE OPENING ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="z-10"
          >
            <span className="uppercase tracking-[0.6em] text-[10px] mb-8 block text-[#A68966] font-bold">
              Est. 2008 — Architecture & Soul
            </span>
            <h1 className="text-6xl md:text-[7vw] font-serif leading-[1] mb-10">
              The Art of <br />
              <span className="italic font-light text-[#A68966]">Quiet Luxury</span>
            </h1>
            <p className="text-xl text-[#6F665F] max-w-lg leading-relaxed mb-12 italic">
              Designing residences that balance the grandeur of Indian heritage with the clarity of modern minimalism.
            </p>
            <div className="flex items-center gap-10">
              <button className="bg-[#3D362F] text-[#FAF7F2] px-12 py-6 rounded-full text-[10px] uppercase tracking-widest hover:bg-[#A68966] transition-all duration-500 shadow-2xl">
                Explore Selected Works
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-t-[25rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[15px] border-white bg-[#E8DED1]">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
                alt="Luxury Indian Living"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-12 -right-12 bg-[#E8DED1] p-12 rounded-full hidden lg:block border-[10px] border-[#FAF7F2]"
            >
              <Award size={32} className="text-[#3D362F]" />
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ================= 03. THE MANIFESTO (DETAILED) ================= */}
      <section id="philosophy" className="py-40 px-6 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-20 items-start">
            <div className="md:col-span-5">
              <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
                We curate <span className="italic">silence</span> in a loud world.
              </h2>
              <div className="w-24 h-1 bg-[#A68966] mb-8" />
            </div>
            <div className="md:col-span-7 space-y-10 text-[#5F5851] text-lg leading-relaxed font-light">
              <p>
                In the rapid pace of Indian urban life, the home must be more than a status symbol—it must be a thermal and emotional sanctuary. At Atelier Vistara, we practice <strong>Architectural Anthropology</strong>. We study how your family moves, how the morning sun hits your breakfast table, and how to create "Third Spaces" for reflection.
              </p>
              <p>
                Our philosophy is rooted in <strong>Contextual Honesty</strong>. We believe a villa in Jaipur should breathe differently than a penthouse in Mumbai. By using local sandstone, reclaimed teak, and ancient lime-wash techniques, we ensure your home is not just built, but grown from its own soil.
              </p>
              <div className="grid grid-cols-2 gap-10 pt-10 border-t border-[#DED4C7]">
                <div>
                  <h4 className="font-serif text-2xl italic mb-3">Emotional Ergonomics</h4>
                  <p className="text-sm">Design is a sensory experience. We prioritize the 'touch' of a handle and the 'sound' of a room's acoustics.</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl italic mb-3">Sustainable Luxury</h4>
                  <p className="text-sm">Solar integration and rainwater harvesting, hidden behind masterfully crafted facades.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 04. THE MATERIAL PALETTE (DEEP CONTENT) ================= */}
      <section className="py-40 bg-[#2C2622] text-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[#A68966] uppercase tracking-[0.5em] text-[10px] font-bold block mb-4">The Material Soul</span>
            <h2 className="text-5xl font-serif">Handpicked Sovereignty</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-1">
            {[
              { title: "Basalt & Slate", icon: <Layers />, desc: "Volcanic stones sourced from the Deccan traps to ground the home's energy." },
              { title: "Raw Brass", icon: <Star />, desc: "Hand-beaten by artisans in Moradabad, designed to patina beautifully with your life." },
              { title: "Reclaimed Teak", icon: <Hammer />, desc: "Sourced from old structural beams, carrying 100 years of history into your space." },
              { title: "Hand-loomed Silk", icon: <Wind />, desc: "Woven in Varanasi to provide a soft, light-diffusing backdrop for modern art." }
            ].map((item, i) => (
              <div key={i} className="group p-12 border border-white/5 hover:bg-[#3D352F] transition-all duration-700 cursor-default">
                <div className="mb-20 text-[#A68966] group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h3 className="text-2xl font-serif mb-6">{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 05. MASONRY PROJECTS ================= */}
      <section id="projects" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-serif italic mb-24 text-center">The Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-7 group overflow-hidden rounded-3xl relative h-[600px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                alt="Luxury Indian Living Room"
              />              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2622]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 p-12 flex flex-col justify-end text-white">
                <h4 className="text-4xl font-serif mb-6">The Gulmohar Villa, Alibaug</h4>
                <button className="flex items-center gap-3 text-white text-[10px] uppercase tracking-widest font-bold">Read Story <ArrowUpRight size={14} /></button>
              </div>
            </div>
            <div className="md:col-span-5 group overflow-hidden rounded-3xl relative h-[600px] shadow-2xl">
              <img src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt="Kitchen" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2622]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 p-12 flex flex-col justify-end text-white">
                <h4 className="text-3xl font-serif mb-4">Gurgaon Penthouse</h4>
                <button className="flex items-center gap-3 text-white text-[10px] uppercase tracking-widest font-bold">View Gallery <ArrowUpRight size={14} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 06. THE METHOD (DETAILED PROCESS) ================= */}
      <section id="process" className="py-40 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-serif text-center mb-32">The 5-Stage Evolution</h2>
          <div className="space-y-32">
            {[
              { num: "01", title: "Archetypal Discovery", text: "We analyze your family's morning rituals to map the soul of the house." },
              { num: "02", title: "Spatial Prose", text: "We create architectural flows that prioritize sightlines and natural light." },
              { num: "03", title: "Material Curation", text: "A physical workshop where you touch the stones and woods before the first brick is laid." },
              { num: "04", title: "The Craft Phase", text: "Execution with master artisans trained in engineering and heritage preservation." },
              { num: "05", title: "The Handover Ritual", text: "A Home Manual detailing the care for every surface and the lineage of every piece." }
            ].map((stage, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-12 md:items-center group">
                <div className="text-7xl font-serif text-[#E8DED1] group-hover:text-[#A68966] transition-colors duration-500">{stage.num}</div>
                <div>
                  <h3 className="text-3xl font-serif mb-4">{stage.title}</h3>
                  <p className="text-[#6F665F] text-lg leading-relaxed max-w-xl">{stage.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 07. FINAL CALL ================= */}
      <section id="contact" className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-7xl md:text-[9vw] font-serif leading-[1] mb-12">
            Begin Your <br /> <span className="italic text-[#A68966]">Odyssey.</span>
          </h2>
          <button className="bg-[#3D362F] text-white px-20 py-8 rounded-full text-xs uppercase tracking-[0.4em] font-bold hover:bg-[#A68966] transition-all duration-500 shadow-2xl">
            Book Private Consultation
          </button>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8DED1] rounded-full blur-[150px] opacity-40 -z-10" />
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-20 bg-[#3D362F] text-[#FAF7F2]/40 text-[10px] uppercase tracking-[0.4em] px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-12 text-center md:text-left">
          <p className="font-bold">© Designed By WEBSITES CREATORSHUB</p>
          <div className="flex items-center gap-3">
            <MapPin size={12} /> Studios: New Delhi • Udaipur • Mumbai
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-10 right-10 z-[200]">
        <button className="bg-[#3D362F] text-white p-7 rounded-full shadow-2xl hover:bg-[#A68966] transition-all group border-4 border-white">
          <Phone size={28} className="group-hover:rotate-12 transition-transform" />
        </button>
      </div>

    </main>
  );
}