"use client";

import { useRef, useEffect, useState } from "react";

export default function Dua() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden bg-white">
      <div
        ref={ref}
        className={`relative max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Ornament top */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/40" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gold/50"
            >
              <path
                d="M12 2L14.09 8.26L20.18 8.27L15.18 12.14L16.81 18.02L12 14.77L7.19 18.02L8.82 12.14L3.82 8.27L9.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/40" />
          </div>
        </div>

        {/* Dua text */}
        <p
          className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 leading-relaxed sm:leading-loose mb-6"
          style={{ fontFamily: "'Amiri', serif" }}
        >
          نسأل الله أن يجعل هذا العمل
          <span className="block text-gold font-bold mt-2">
            خالصًا لوجهه الكريم
          </span>
          <span className="block mt-2">
            ولا تحرمونا من دعوة بظهر الغيب
          </span>
        </p>

        {/* Ornament bottom */}
        <div className="flex justify-center">
          <div className="flex items-center gap-3">
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold/30" />
            <div className="w-2 h-2 bg-gold/40 rounded-full" />
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
