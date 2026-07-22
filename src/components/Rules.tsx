"use client";

import { Clock, BookMarked, UserCheck, Shirt, DoorClosed, Smartphone, Banknote } from "lucide-react";

const rules = [
  {
    icon: Clock,
    title: "الالتزام بالمواعيد",
    description: "الحضور في الوقت المحدد الساعة 6:30، ويُغلق الباب على الساعة 7:00.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: BookMarked,
    title: "احترام المكان",
    description: "احترام المكتبة والمعلمين/المعلمات والأسئلة والأدوات.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: UserCheck,
    title: "تسليم واستلام الطفل",
    description: "الطفل يُسلَّم من طرف الأب عند الدخول، ويُستلم من طرف الأب عند الخروج فقط.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Shirt,
    title: "اللباس الإسلامي",
    description: "الالتزام بلباس إسلامي محتشم.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: DoorClosed,
    title: "ممنوع الخروج",
    description: "ممنوع الخروج من المخيم إلا في حالات الضرورة الطبية.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: Smartphone,
    title: "ممنوع الهاتف والمأكولات",
    description: "يُمنع إحضار الهاتف المحمول والمأكولات والمشروبات.",
    color: "from-slate-500 to-gray-600",
  },
  {
    icon: Banknote,
    title: "مبلغ الاشتراك",
    description: "3000 دج (يُدفع لاحقًا عند التسجيل النهائي بالمسجد).",
    color: "from-green-primary to-green-light",
  },
];

export default function Rules() {
  return (
    <section id="rules" className="py-24 sm:py-32 px-4 sm:px-6 bg-beige-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-green-primary font-bold text-sm bg-green-muted px-5 py-2 rounded-full mb-5 border border-green-primary/10">
            القوانين
          </span>
          <h3 className="text-3xl sm:text-5xl font-black text-green-dark mb-4 leading-tight">
            شروط وقوانين المخيم
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed text-lg">
            يرجى الاطلاع على القوانين التالية قبل التسجيل
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rules.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100/80 hover:shadow-xl hover:border-gray-200/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${rule.color} rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-green-dark mb-1.5 text-base">
                      {rule.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {rule.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
