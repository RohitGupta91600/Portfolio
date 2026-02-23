"use client";

import React from "react";
import { motion } from "framer-motion";
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
  ShieldCheck,
  Globe,
  ArrowUpRight
} from "lucide-react";

export default function LuxuryPortfolio() {
  return (
    <main className="bg-[#FAF7F2] text-[#3D362F] font-light antialiased overflow-x-hidden selection:bg-[#C5A27D] selection:text-white">

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-8 md:px-20 py-10">
        <span className="text-2xl font-serif uppercase tracking-tight">
          Atelier <span className="italic text-[#A68966]">Vistara</span>
        </span>
        <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.4em] font-semibold">
          <a href="#philosophy" className="hover:text-[#A68966] transition">Philosophy</a>
          <a href="#projects" className="hover:text-[#A68966] transition">Projects</a>
          <a href="#curation" className="hover:text-[#A68966] transition">Curation</a>
          <a href="#contact" className="hover:text-[#A68966] transition">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="uppercase tracking-[0.6em] text-[10px] mb-6 block text-[#A68966] font-bold">
              Premier Interior Architecture
            </span>

            <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8">
              Homes that <br />
              <span className="italic font-light">breathe</span> warmth.
            </h1>

            <p className="text-lg md:text-xl text-[#6F665F] max-w-lg leading-relaxed mb-10 italic">
              We curate the backdrop for your family’s most cherished memories.
            </p>

            <div className="flex gap-6">
              <button className="bg-[#3D362F] text-[#FAF7F2] px-10 py-5 rounded-full text-xs uppercase tracking-widest hover:bg-[#A68966] transition">
                View Gallery
              </button>

              <button className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold group">
                The Process
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="aspect-[4/5] rounded-t-[20rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
                alt="Luxury Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="py-32 px-6 bg-[#F2EDE4]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-16">
            Rooted in <span className="text-[#A68966]">Heritage</span>, Designed for the Future.
          </h2>

          <div className="grid md:grid-cols-3 gap-16 text-left">

            <div>
              <Wind className="text-[#A68966] mb-4" />
              <h3 className="text-xl font-serif italic mb-3">Natural Ventilation</h3>
              <p className="text-sm text-[#6F665F] leading-relaxed">
                Inspired by traditional Indian courtyards to maintain airflow and light.
              </p>
            </div>

            <div>
              <Layers className="text-[#A68966] mb-4" />
              <h3 className="text-xl font-serif italic mb-3">Tactile Textures</h3>
              <p className="text-sm text-[#6F665F] leading-relaxed">
                From woven fabrics to carved stone — every surface matters.
              </p>
            </div>

            <div>
              <Star className="text-[#A68966] mb-4" />
              <h3 className="text-xl font-serif italic mb-3">Bespoke Curation</h3>
              <p className="text-sm text-[#6F665F] leading-relaxed">
                Custom furniture and heritage accents designed exclusively for you.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <img
            src="https://images.unsplash.com/photo-1600607687940-47a04b629571?q=80&w=2069"
            className="rounded-2xl h-[450px] object-cover"
            alt="Project"
          />
          <img
            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070"
            className="rounded-2xl h-[450px] object-cover"
            alt="Project"
          />
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-32 bg-[#FAF7F2] text-center">
        <Quote size={60} className="mx-auto text-[#A68966] opacity-30 mb-8" />
        <p className="text-3xl font-serif italic max-w-3xl mx-auto leading-snug">
          They understood our family's soul. Coming home feels like a warm embrace.
        </p>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-6 bg-[#3D362F] text-white text-center">
        <h2 className="text-5xl font-serif mb-8">
          Ready to live in Art?
        </h2>
        <button className="bg-white text-black px-16 py-6 rounded-full uppercase tracking-widest font-bold hover:scale-105 transition">
          Book a Consultation
        </button>
      </section>

      {/* FLOATING CALL BUTTON */}
      <div className="fixed bottom-8 right-8 z-[200]">
        <button className="bg-[#3D362F] text-white p-6 rounded-full shadow-2xl hover:bg-[#A68966] transition group border-4 border-white">
          <Phone size={24} className="group-hover:rotate-12 transition-transform" />
        </button>
      </div>

    </main>
  );
}