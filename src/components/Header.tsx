"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white/70 backdrop-blur-2xl border-b border-gray-100/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="شعار موعد مع القرآن" className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl object-cover shadow-lg shadow-green-primary/15 group-hover:shadow-green-primary/30 transition-all duration-300 group-hover:scale-105" />
            <div className="hidden sm:block">
              <h1 className="text-base lg:text-lg font-bold text-green-dark leading-tight">موعد مع القرآن</h1>
              <p className="text-[11px] lg:text-xs text-gray-400 font-medium">عين بوسيف</p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <a href="#about" className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-green-primary rounded-xl hover:bg-green-muted/50 transition-all duration-300">عن المخيم</a>
            <a href="#rules" className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-green-primary rounded-xl hover:bg-green-muted/50 transition-all duration-300">القوانين</a>
            <a href="#documents" className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-green-primary rounded-xl hover:bg-green-muted/50 transition-all duration-300">الوثائق</a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#register"
              className="bg-gradient-to-l from-green-primary to-green-light hover:from-green-dark hover:to-green-primary text-white font-bold text-sm py-2.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-green-primary/20 hover:shadow-green-primary/35 hover:-translate-y-0.5"
            >
              سجّل الآن
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-500 hover:text-green-primary hover:bg-green-muted/50 rounded-xl transition-all duration-300"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100/50 bg-white/90 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-1">
            <a href="#about" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-green-primary hover:bg-green-muted/50 rounded-xl transition-all duration-300">عن المخيم</a>
            <a href="#rules" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-green-primary hover:bg-green-muted/50 rounded-xl transition-all duration-300">القوانين</a>
            <a href="#documents" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-green-primary hover:bg-green-muted/50 rounded-xl transition-all duration-300">الوثائق</a>
          </div>
        </div>
      )}
    </header>
  );
}
