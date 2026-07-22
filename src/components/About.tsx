"use client";

import { BookOpen, GraduationCap, HeartPulse } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "تحفيظ القرآن",
    description: "تحفيظ القرآن الكريم بأجواء روحانية ممتعة",
  },
  {
    icon: GraduationCap,
    title: "أطر مؤهلة",
    description: "معلمون ومعلمات مؤهلون وذوو خبرة في التدريس",
  },
  {
    icon: HeartPulse,
    title: "إشراف طبي",
    description: "طاقم طبي متميز لضمان سلامة المشاركين",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 bg-beige pattern-bg">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-green-primary font-bold text-sm bg-green-muted px-5 py-2 rounded-full mb-5 border border-green-primary/10">
            عن المخيم
          </span>
          <h3 className="text-3xl sm:text-5xl font-black text-green-dark mb-4 leading-tight">
            لماذا مخيم القرآن؟
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed text-lg">
            نقدم لأبناءكم تجربة فريدة تجمع بين التثقيف القرآني والتربية الإسلامية السليمة
          </p>
        </div>

        {/* Content */}
        <div className="relative bg-white rounded-[2rem] p-8 sm:p-12 shadow-sm border border-gray-100/80 mb-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-green-primary/5 to-transparent rounded-bl-full" />
          <p className="relative text-lg sm:text-xl leading-relaxed text-gray-500 text-center max-w-3xl mx-auto">
            يهدف مخيم القرآن الكريم إلى{" "}
            <span className="text-green-primary font-bold">تحفيظ القرآن الكريم</span>{" "}
            وتربيتنا أبناءنا تربية إسلامية صحيحة، تحت إشراف نخبة من{" "}
            <span className="text-green-primary font-bold">المعلمين والمعلمات المؤهلين</span>{" "}
            وطاقم طبي متميز لضمان سلامة المشاركين.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-[1.5rem] p-8 shadow-sm border border-gray-100/80 hover:shadow-xl hover:shadow-green-primary/5 hover:border-green-primary/15 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-primary/5 to-transparent rounded-bl-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-green-primary to-green-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-primary/25 transition-all duration-500">
                  <Icon size={24} className="text-white" />
                </div>
                <h4 className="relative font-bold text-green-dark text-lg mb-2">{feature.title}</h4>
                <p className="relative text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
