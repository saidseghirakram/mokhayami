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
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-deeper via-green-dark to-green-primary" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative orbs */}
      <div className="absolute top-10 right-[15%] w-64 h-64 bg-gold/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-[10%] w-72 h-72 bg-green-light/10 rounded-full blur-[80px]" />

      <div
        ref={ref}
        className={`relative max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Ornament top */}
        <div className="flex justify-center mb-8">
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gold/30"
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
          className="text-2xl sm:text-3xl lg:text-4xl text-white/80 leading-relaxed sm:leading-loose mb-8"
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
