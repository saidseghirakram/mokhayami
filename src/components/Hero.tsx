"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-deeper via-green-dark to-green-primary" />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Decorative orbs */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-gold/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-green-light/10 rounded-full blur-[100px]" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-sm font-semibold px-5 py-2.5 rounded-full mb-10">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            مخيم قرآني تكويني
          </div>

          {/* Main title */}
          <h2 className="animate-fade-in-up delay-100 text-4xl sm:text-6xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight whitespace-nowrap">
            موعد مع{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-gold-light via-gold to-gold-light">
              القرآن
            </span>
          </h2>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-200 text-xl sm:text-2xl text-white/50 font-medium mb-4 tracking-wide">
            بمنطقة عين بوسيف
          </p>

          {/* Hadith quote */}
          <div className="animate-fade-in-up delay-300 max-w-3xl mx-auto mb-10">
            <div className="relative py-8 px-8">
              {/* Decorative corners */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/30 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/30 rounded-bl-2xl" />

              {/* Ornament top */}
              <div className="flex justify-center mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/50" />
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold/60">
                    <path d="M12 2L14.09 8.26L20.18 8.27L15.18 12.14L16.81 18.02L12 14.77L7.19 18.02L8.82 12.14L3.82 8.27L9.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/50" />
                </div>
              </div>

              <p className="font-amiri text-2xl sm:text-3xl lg:text-4xl text-white/80 leading-relaxed sm:leading-relaxed text-center" style={{ fontFamily: "'Amiri', serif" }}>
                اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي
                <span className="block text-gold font-bold mt-1">يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ</span>
              </p>

              {/* Ornament bottom */}
              <div className="flex justify-center mt-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/50" />
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gold/40">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                  </svg>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/50" />
                </div>
              </div>

              {/* Attribution */}
              <p className="text-center text-white/25 text-sm mt-3 font-medium">— حديث نبوي شريف —</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href="#register"
              className="group relative bg-gold hover:bg-gold-light text-green-dark font-extrabold text-lg py-4.5 px-12 rounded-2xl transition-all duration-300 shadow-2xl shadow-black/20 hover:shadow-gold/30 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                سجّل الآن
                <ArrowDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
              </span>
            </a>
            <a
              href="#about"
              className="text-white/50 hover:text-white font-medium text-base py-4.5 px-8 rounded-2xl border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-300"
            >
              تعرّف على المزيد
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 60L60 55C120 50 240 40 360 40C480 40 600 50 720 55C840 60 960 60 1080 55C1200 50 1320 40 1380 35L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FAF8F4"/>
        </svg>
      </div>
    </section>
  );
}
