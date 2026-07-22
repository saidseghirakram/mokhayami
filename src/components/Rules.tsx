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

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute right-6 sm:right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-primary/20 via-green-primary/40 to-green-primary/20 sm:translate-x-1/2 pointer-events-none" />
          
          <div className="space-y-8 sm:space-y-12">
            {rules.map((rule, index) => {
              const Icon = rule.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative sm:flex sm:items-center">
                  {/* Timeline dot */}
                  <div className="hidden sm:block absolute right-6 sm:right-1/2 w-5 h-5 rounded-full bg-beige-warm border-4 border-green-primary translate-x-1/2 sm:translate-x-1/2 top-3 sm:top-1/2 sm:-translate-y-1/2 z-50" />
                  
                  {isEven ? (
                    <>
                      {/* Card on RIGHT side (even) */}
                      <div className="hidden sm:block sm:w-1/2 sm:pl-12">
                        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${rule.color} rounded-xl flex items-center justify-center shrink-0 shadow-md`}>
                              <Icon size={20} className="text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-green-dark mb-2 text-base">{rule.title}</h4>
                              <p className="text-gray-500 text-sm leading-relaxed">{rule.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Mobile card */}
                      <div className="sm:hidden ml-10">
                        <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 bg-gradient-to-br ${rule.color} rounded-xl flex items-center justify-center shrink-0 shadow-md`}>
                              <Icon size={18} className="text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-green-dark mb-1 text-sm">{rule.title}</h4>
                              <p className="text-gray-500 text-xs leading-relaxed">{rule.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Empty left spacer */}
                      <div className="hidden sm:block sm:w-1/2" />
                    </>
                  ) : (
                    <>
                      {/* Empty right spacer */}
                      <div className="hidden sm:block sm:w-1/2" />
                      {/* Card on LEFT side (odd) */}
                      <div className="hidden sm:block sm:w-1/2 sm:pr-12">
                        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${rule.color} rounded-xl flex items-center justify-center shrink-0 shadow-md`}>
                              <Icon size={20} className="text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-green-dark mb-2 text-base">{rule.title}</h4>
                              <p className="text-gray-500 text-sm leading-relaxed">{rule.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Mobile card */}
                      <div className="sm:hidden ml-10">
                        <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 bg-gradient-to-br ${rule.color} rounded-xl flex items-center justify-center shrink-0 shadow-md`}>
                              <Icon size={18} className="text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-green-dark mb-1 text-sm">{rule.title}</h4>
                              <p className="text-gray-500 text-xs leading-relaxed">{rule.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
