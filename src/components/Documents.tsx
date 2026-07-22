"use client";

import { FileText, Users, Stethoscope, School, PenLine, Camera, Banknote, AlertTriangle } from "lucide-react";

const documents = [
  { icon: FileText, text: "نسخة من شهادة الميلاد" },
  { icon: Users, text: "نسخة من بطاقة العائلة" },
  { icon: Stethoscope, text: "شهادة طبية عامة" },
  { icon: School, text: "شهادة طبية مدرسية" },
  { icon: PenLine, text: "تصريح الأبوين (موافقة خطية)" },
  { icon: Camera, text: "3 صور شمسية" },
  { icon: Banknote, text: "مبلغ الاشتراك: 3000 دج نقدًا" },
];

export default function Documents() {
  return (
    <section id="documents" className="py-24 sm:py-32 px-4 sm:px-6 bg-beige pattern-bg">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-green-primary font-bold text-sm bg-green-muted px-5 py-2 rounded-full mb-5 border border-green-primary/10">
            الوثائق
          </span>
          <h3 className="text-3xl sm:text-5xl font-black text-green-dark mb-4 leading-tight">
            الوثائق المطلوبة عند القبول
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed text-lg">
            يُرجى إحضار الوثائق التالية شخصيًا إلى مقر المسجد بعد قبول الملف
          </p>
        </div>

        {/* Alert box */}
        <div className="relative bg-amber-50/80 border border-amber-200/60 rounded-2xl p-5 sm:p-6 mb-10 flex items-start gap-4 overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-200/30 to-transparent rounded-bl-2xl" />
          <div className="relative w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
            <AlertTriangle size={20} className="text-amber-600" />
          </div>
          <div className="relative">
            <p className="text-amber-800 font-bold text-sm mb-1">تنبيه مهم</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              هذه الوثائق لا تُرفع على الموقع، بل تُقدَّم شخصيًا لاحقًا إلى مقر المسجد بعد قبول طلب التسجيل.
            </p>
          </div>
        </div>

        {/* Documents grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-5 border border-gray-100/80 hover:border-green-primary/15 hover:shadow-lg hover:shadow-green-primary/5 transition-all duration-400 flex items-center gap-4 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 bg-green-muted rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-primary transition-all duration-400">
                  <Icon size={18} className="text-green-primary group-hover:text-white transition-colors duration-400" />
                </div>
                <span className="text-gray-600 font-medium text-sm">{doc.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
