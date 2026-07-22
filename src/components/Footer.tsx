"use client";

import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-green-deeper text-white relative">
      {/* Back to top */}
      <div className="flex justify-center -mt-6">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-green-primary hover:bg-green-light rounded-full flex items-center justify-center shadow-lg shadow-green-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          aria-label="العودة للأعلى"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="شعار موعد مع القرآن" className="w-10 h-10 rounded-xl object-cover border border-white/10" />
              <div>
                <h4 className="font-bold text-white text-lg">موعد مع القرآن</h4>
                <p className="text-white/30 text-sm">عين بوسيف</p>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-md">
              مخيم قرآني تكويني يهدف إلى تحفيظ القرآن الكريم وتربيتنا أبناءنا تربية إسلامية صحيحة.
            </p>
          </div>

          {/* Links */}
          <div>
            <h5 className="font-bold text-white mb-4 text-sm">روابط سريعة</h5>
            <ul className="space-y-2.5">
              <li><a href="#about" className="text-white/30 hover:text-gold text-sm transition-colors duration-300">عن المخيم</a></li>
              <li><a href="#rules" className="text-white/30 hover:text-gold text-sm transition-colors duration-300">القوانين</a></li>
              <li><a href="#documents" className="text-white/30 hover:text-gold text-sm transition-colors duration-300">الوثائق المطلوبة</a></li>
              <li><a href="#register" className="text-white/30 hover:text-gold text-sm transition-colors duration-300">التسجيل</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs flex items-center gap-1">
            صُنع بـ <Heart size={12} className="text-red-400 fill-red-400" /> لجمعية عين بوسيف
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/40"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
