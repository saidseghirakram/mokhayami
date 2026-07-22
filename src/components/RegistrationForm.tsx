"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle, User, Phone, MapPin, BookOpen, Mail, HelpCircle, CalendarDays, GraduationCap, ChevronLeft } from "lucide-react";

const SCRIPT_URL = "ضع الرابط هنا";

type FormData = {
  name: string;
  lastName: string;
  birthDate: string;
  birthPlace: string;
  educationLevel: string;
  phone: string;
  previousCamp: string;
  previousCampDetails: string;
  memorizationLevel: string;
  address: string;
  email: string;
  referralSource: string;
  agreeTerms: boolean;
};

const educationLevels = ["ابتدائي", "متوسط", "ثانوي", "جامعي"];

const sections = [
  { id: "personal", icon: User, label: "المعلومات الشخصية" },
  { id: "camp", icon: BookOpen, label: "معلومات المخيم" },
  { id: "contact", icon: MapPin, label: "معلومات الاتصال" },
  { id: "extra", icon: HelpCircle, label: "معلومات إضافية" },
];

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastName: "",
    birthDate: "",
    birthPlace: "",
    educationLevel: "",
    phone: "",
    previousCamp: "لا",
    previousCampDetails: "",
    memorizationLevel: "",
    address: "",
    email: "",
    referralSource: "",
    agreeTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateAlgerianPhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s\-]/g, "");
    return /^0[5-7]\d{8}$/.test(cleaned);
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "الاسم مطلوب";
    if (!formData.lastName.trim()) newErrors.lastName = "اللقب مطلوب";
    if (!formData.birthDate) newErrors.birthDate = "تاريخ الازدياد مطلوب";
    if (!formData.birthPlace.trim()) newErrors.birthPlace = "مكان الميلاد مطلوب";
    if (!formData.educationLevel) newErrors.educationLevel = "المستوى الدراسي مطلوب";
    if (!formData.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب";
    } else if (!validateAlgerianPhone(formData.phone)) {
      newErrors.phone = "الصيغة: 0X XX XX XX XX";
    }
    if (!formData.memorizationLevel.trim()) newErrors.memorizationLevel = "مقدار الحفظ مطلوب";
    if (!formData.address.trim()) newErrors.address = "العنوان مطلوب";
    if (!formData.agreeTerms) newErrors.agreeTerms = "يجب الموافقة على الشروط";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        lastName: formData.lastName,
        birthDate: formData.birthDate,
        birthPlace: formData.birthPlace,
        educationLevel: formData.educationLevel,
        phone: formData.phone,
        previousCamp: formData.previousCamp,
        previousCampDetails: formData.previousCamp === "نعم" ? formData.previousCampDetails : "",
        memorizationLevel: formData.memorizationLevel,
        address: formData.address,
        email: formData.email,
        referralSource: formData.referralSource,
        timestamp: new Date().toLocaleString("ar-DZ"),
      };

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setSubmitMessage({
        type: "success",
        text: "تم استلام طلبكم بنجاح، سيتم التواصل معكم قريبًا. بارك الله فيكم.",
      });

      setFormData({
        name: "",
        lastName: "",
        birthDate: "",
        birthPlace: "",
        educationLevel: "",
        phone: "",
        previousCamp: "لا",
        previousCampDetails: "",
        memorizationLevel: "",
        address: "",
        email: "",
        referralSource: "",
        agreeTerms: false,
      });
    } catch {
      setSubmitMessage({
        type: "error",
        text: "حدث خطأ أثناء الإرسال. يرجى التحقق من اتصال الإنترنت والمحاولة مرة أخرى.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase = "w-full px-4 py-3.5 rounded-2xl border border-gray-200/80 bg-white text-gray-800 text-sm transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300";
  const inputError = "!border-red-400 bg-red-50/50";
  const inputFocus = "focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 focus:shadow-lg focus:shadow-green-primary/5";
  const labelClass = "block text-sm font-bold text-green-dark mb-2.5 flex items-center gap-2";

  const renderIcon = (Icon: React.ComponentType<{ size?: number; className?: string }>) => (
    <Icon size={14} className="text-green-primary" />
  );

  return (
    <section id="register" className="py-24 sm:py-32 px-4 sm:px-6 bg-beige-warm">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-green-primary font-bold text-sm bg-green-muted px-5 py-2 rounded-full mb-5 border border-green-primary/10">
            التسجيل
          </span>
          <h3 className="text-3xl sm:text-5xl font-black text-green-dark mb-4 leading-tight">
            نموذج التسجيل
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed text-lg">
            أكمل النموذج التالي لتسجيل طفلكم في المخيم
          </p>
        </div>

        {/* Success/Error message */}
        {submitMessage && (
          <div
            className={`mb-8 p-5 rounded-2xl flex items-center gap-4 ${
              submitMessage.type === "success"
                ? "bg-green-muted border border-green-primary/20"
                : "bg-red-50 border border-red-200"
            }`}
          >
            {submitMessage.type === "success" ? (
              <CheckCircle2 size={24} className="text-green-primary shrink-0" />
            ) : (
              <AlertCircle size={24} className="text-red-500 shrink-0" />
            )}
            <p className={`font-bold text-sm ${submitMessage.type === "success" ? "text-green-dark" : "text-red-700"}`}>
              {submitMessage.text}
            </p>
          </div>
        )}

        {/* Form layout */}
        <div className="flex flex-col lg:flex-row gap-0 rounded-[2.5rem] overflow-hidden shadow-xl shadow-green-dark/5 border border-gray-100/80">
          {/* Sidebar */}
          <div className="lg:w-80 bg-gradient-to-b from-green-dark via-green-primary to-green-light p-8 sm:p-10 text-white shrink-0">
            <div className="mb-10">
              <h4 className="font-black text-2xl mb-2">سجّل الآن</h4>
              <p className="text-white/50 text-sm leading-relaxed">
                أكمل البيانات التالية وسن التواصل معكم قريبًا
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-1">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-all">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-white/90">{section.label}</p>
                    </div>
                    <ChevronLeft size={16} className="text-white/30 group-hover:text-white/60 transition-colors" />
                  </a>
                );
              })}
            </div>

            {/* Decorative quote */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/30 text-xs leading-relaxed font-amiri" style={{ fontFamily: "'Amiri', serif" }}>
                اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 bg-white p-8 sm:p-10 lg:p-12">
            {/* Section: Personal Info */}
            <div id="personal" className="mb-10">
              <h4 className="text-base font-bold text-green-dark mb-6 flex items-center gap-2.5">
                <div className="w-8 h-8 bg-gradient-to-br from-green-primary to-green-light rounded-xl flex items-center justify-center shadow-sm">
                  <User size={16} className="text-white" />
                </div>
                المعلومات الشخصية
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>{renderIcon(User)} الاسم *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${inputBase} ${inputFocus} ${errors.name ? inputError : ""}`}
                    placeholder="أدخل الاسم"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
                </div>

                <div>
                  <label className={labelClass}>{renderIcon(User)} اللقب *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`${inputBase} ${inputFocus} ${errors.lastName ? inputError : ""}`}
                    placeholder="أدخل اللقب"
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.lastName}</p>}
                </div>

                <div>
                  <label className={labelClass}>{renderIcon(CalendarDays)} تاريخ الازدياد *</label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    className={`${inputBase} ${inputFocus} ${errors.birthDate ? inputError : ""}`}
                  />
                  {errors.birthDate && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.birthDate}</p>}
                </div>

                <div>
                  <label className={labelClass}>{renderIcon(MapPin)} مكان الميلاد *</label>
                  <input
                    type="text"
                    name="birthPlace"
                    value={formData.birthPlace}
                    onChange={handleChange}
                    className={`${inputBase} ${inputFocus} ${errors.birthPlace ? inputError : ""}`}
                    placeholder="أدخل مكان الميلاد"
                  />
                  {errors.birthPlace && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.birthPlace}</p>}
                </div>

                <div>
                  <label className={labelClass}>{renderIcon(GraduationCap)} المستوى الدراسي *</label>
                  <select
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleChange}
                    className={`${inputBase} ${inputFocus} ${errors.educationLevel ? inputError : ""} ${!formData.educationLevel ? "text-gray-400" : ""}`}
                  >
                    <option value="">اختر المستوى</option>
                    {educationLevels.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                  {errors.educationLevel && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.educationLevel}</p>}
                </div>

                <div>
                  <label className={labelClass}>{renderIcon(Phone)} رقم هاتف الأب/الأم *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`${inputBase} ${inputFocus} ${errors.phone ? inputError : ""}`}
                    placeholder="0X XX XX XX XX"
                    dir="ltr"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>}
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-l from-transparent via-gray-200 to-transparent my-10" />

            {/* Section: Camp Info */}
            <div id="camp" className="mb-10">
              <h4 className="text-base font-bold text-green-dark mb-6 flex items-center gap-2.5">
                <div className="w-8 h-8 bg-gradient-to-br from-green-primary to-green-light rounded-xl flex items-center justify-center shadow-sm">
                  <BookOpen size={16} className="text-white" />
                </div>
                معلومات المخيم
              </h4>

              <div className="mb-5">
                <label className={labelClass}>{renderIcon(HelpCircle)} هل سبق أن شاركت في مخيمات أخرى؟</label>
                <div className="flex gap-4">
                  {["نعم", "لا"].map((option) => (
                    <label key={option} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="radio"
                        name="previousCamp"
                        value={option}
                        checked={formData.previousCamp === option}
                        onChange={handleChange}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-green-primary transition-colors duration-300">{option}</span>
                    </label>
                  ))}
                </div>

                {formData.previousCamp === "نعم" && (
                  <div className="mt-3">
                    <input
                      type="text"
                      name="previousCampDetails"
                      value={formData.previousCampDetails}
                      onChange={handleChange}
                      className={`${inputBase} ${inputFocus}`}
                      placeholder="أي المخيمات؟ (اختياري)"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className={labelClass}>{renderIcon(BookOpen)} مقدار الحفظ من القرآن الكريم *</label>
                <input
                  type="text"
                  name="memorizationLevel"
                  value={formData.memorizationLevel}
                  onChange={handleChange}
                  className={`${inputBase} ${inputFocus} ${errors.memorizationLevel ? inputError : ""}`}
                  placeholder="مثال: 5 أجزاء، 10 سور..."
                />
                {errors.memorizationLevel && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.memorizationLevel}</p>}
              </div>
            </div>

            <div className="h-px bg-gradient-to-l from-transparent via-gray-200 to-transparent my-10" />

            {/* Section: Contact Info */}
            <div id="contact" className="mb-10">
              <h4 className="text-base font-bold text-green-dark mb-6 flex items-center gap-2.5">
                <div className="w-8 h-8 bg-gradient-to-br from-green-primary to-green-light rounded-xl flex items-center justify-center shadow-sm">
                  <MapPin size={16} className="text-white" />
                </div>
                معلومات الاتصال
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className={labelClass}>{renderIcon(MapPin)} العنوان الكامل *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className={`${inputBase} ${inputFocus} ${errors.address ? inputError : ""} resize-none`}
                    placeholder="أدخل العنوان الكامل..."
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.address}</p>}
                </div>

                <div>
                  <label className={labelClass}>{renderIcon(Mail)} البريد الإلكتروني (اختياري)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputBase} ${inputFocus}`}
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-l from-transparent via-gray-200 to-transparent my-10" />

            {/* Section: Additional Info */}
            <div id="extra" className="mb-10">
              <h4 className="text-base font-bold text-green-dark mb-6 flex items-center gap-2.5">
                <div className="w-8 h-8 bg-gradient-to-br from-green-primary to-green-light rounded-xl flex items-center justify-center shadow-sm">
                  <HelpCircle size={16} className="text-white" />
                </div>
                معلومات إضافية
              </h4>

              <div className="mb-6">
                <label className={labelClass}>{renderIcon(HelpCircle)} كيف عرفت ببداية التسجيل؟</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["من الأصدقاء/الجيران", "من البوابة (صفحة فيسبوك)", "من المسجد", "وسيلة أخرى"].map(
                    (option) => (
                      <label key={option} className="flex items-center gap-2.5 cursor-pointer group p-3.5 rounded-2xl border border-gray-100/80 hover:border-green-primary/20 hover:bg-green-muted/20 transition-all duration-300">
                        <input
                          type="radio"
                          name="referralSource"
                          value={option}
                          checked={formData.referralSource === option}
                          onChange={handleChange}
                          className="w-4 h-4"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-green-dark transition-colors duration-300">{option}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer group p-4.5 rounded-2xl border border-gray-100/80 hover:border-green-primary/20 hover:bg-green-muted/20 transition-all duration-300">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="w-5 h-5 mt-0.5"
                  />
                  <span className="text-sm text-gray-600 font-medium group-hover:text-green-dark transition-colors duration-300">
                    أوافق على جميع الشروط والقوانين المذكورة أعلاه *
                  </span>
                </label>
                {errors.agreeTerms && <p className="text-red-500 text-xs mt-2 font-medium">{errors.agreeTerms}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-l from-green-primary to-green-light hover:from-green-dark hover:to-green-primary text-white font-extrabold text-base py-4.5 rounded-2xl transition-all duration-300 shadow-xl shadow-green-primary/20 hover:shadow-2xl hover:shadow-green-primary/30 flex items-center justify-center gap-2.5 ${
                isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:-translate-y-0.5"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  جاري الإرسال...
                </>
              ) : (
                <>
                  <Send size={18} />
                  إرسال طلب التسجيل
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
