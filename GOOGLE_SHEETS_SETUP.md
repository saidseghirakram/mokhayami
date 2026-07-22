# Google Sheets Integration Guide - تعليمات ربط نموذج التسجيل مع جوجل شيت

## Step 1: Create Google Sheet
### الخطوة 1: إنشاء جدول Google Sheets

1. اذهب إلى https://sheets.google.com
2. اضغط على "+" لإنشاء جدول جديد
3. أعد تسمية الجدول إلى: "تسجيلات المخيم القرآني" أو أي اسم تريده
4. احفظ الجدول (تأكد من أنك دخلت بحسابك على Google)

---

## Step 2: Create Column Headers
### الخطوة 2: إنشاء رؤوس الأعمدة

في الصف الأول (Row 1)، أضف هذه الرؤوس:

| A | B | C | D | E | F | G | H | I | J | K | L | M |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| الوقت | الاسم | اللقب | تاريخ الميلاد | مكان الميلاد | المستوى الدراسي | رقم الهاتف | المخيم السابق | تفاصيل المخيم | مقدار الحفظ | العنوان | البريد الإلكتروني | مصدر التسجيل |

---

## Step 3: Set Up Google Apps Script
### الخطوة 3: إعداد Google Apps Script

1. في جدولك على Google Sheets، اضغط على **"Extensions"** (الإضافات)
2. اختر **"Apps Script"**
3. سيفتح محرر Apps Script في نافذة جديدة

---

## Step 4: Copy and Paste the Script
### الخطوة 4: نسخ ولصق السكريبت

**حذف** الكود الافتراضي وضع هذا الكود:

```javascript
// الحصول على معرّف الجدول من URL
function doPost(e) {
  try {
    // الحصول على البيانات من الطلب
    const data = JSON.parse(e.postData.contents);
    
    // فتح الجدول النشط
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // إضافة البيانات في صف جديد
    sheet.appendRow([
      data.timestamp,           // الوقت
      data.name,                // الاسم
      data.lastName,            // اللقب
      data.birthDate,           // تاريخ الميلاد
      data.birthPlace,          // مكان الميلاد
      data.educationLevel,      // المستوى الدراسي
      data.phone,               // رقم الهاتف
      data.previousCamp,        // المخيم السابق
      data.previousCampDetails, // تفاصيل المخيم
      data.memorizationLevel,   // مقدار الحفظ
      data.address,             // العنوان
      data.email,               // البريد الإلكتروني
      data.referralSource       // مصدر التسجيل
    ]);
    
    // إرسال رد ناجح
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // إرسال رسالة خطأ
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## Step 5: Deploy the Script
### الخطوة 5: نشر السكريبت

1. في أعلى يسار الصفحة، اضغط على **"Deploy"** (نشر) → **"New deployment"** (نشر جديد)
2. اختر **"Type"** → **"Web app"** (تطبيق ويب)
3. ملء البيانات:
   - **Execute as**: اختر حسابك (أو البريد الإداري)
   - **Who has access**: اختر **"Anyone"** (أي شخص)
4. اضغط **"Deploy"** (نشر)
5. **انسخ الـ URL** الذي سيظهر لك (شيء مثل: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercontent`)

---

## Step 6: Update Your Form Code
### الخطوة 6: تحديث كود النموذج

في ملف `src/components/RegistrationForm.tsx`، استبدل:

```javascript
const SCRIPT_URL = "ضع الرابط هنا";
```

بـ:

```javascript
const SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercontent";
```

**استبدل `YOUR_SCRIPT_ID` برابط النشر الكامل الذي نسخته في الخطوة 5**

---

## Step 7: Test the Form
### الخطوة 7: اختبر النموذج

1. انتقل إلى موقعك
2. اذهب إلى قسم التسجيل
3. ملأ النموذج بالبيانات الاختبارية
4. اضغط "إرسال"
5. تحقق من جدول Google Sheets - يجب أن تظهر البيانات تلقائيًا!

---

## Troubleshooting
### حل المشاكل

### المشكلة: البيانات لا تظهر في الجدول
**الحل:**
- تحقق من أن رابط SCRIPT_URL صحيح
- تأكد من أن الدبلويمنت اختارت "Anyone" كـ "Who has access"
- حاول إنشاء نشر جديد (Deploy جديد)

### المشكلة: خطأ CORS
**الحل:**
- هذا طبيعي - Google Apps Script يتعامل معها
- تأكد من أن `mode: "no-cors"` موجود في الكود

### المشكلة: البيانات تظهر في الجدول لكن مشوشة
**الحل:**
- تأكد من ترتيب الأعمدة في السكريبت يطابق ترتيب الرؤوس

---

## Advanced Features (اختياري)
### ميزات متقدمة

### إضافة التنسيق الآلي للجدول:
```javascript
// أضف هذا في نهاية دالة doPost

// تنسيق رؤوس الأعمدة
const headerRange = sheet.getRange(1, 1, 1, 13);
headerRange.setBackground('#1B6B3F')
           .setFontColor('#FFFFFF')
           .setFontWeight('bold');
```

### تفعيل التنبيهات:
```javascript
// أضف هذا لإرسال بريد عند كل تسجيل جديد
MailApp.sendEmail(
  "your-email@gmail.com",
  "تسجيل جديد في المخيم",
  `تم استقبال تسجيل جديد:\n\nالاسم: ${data.name} ${data.lastName}\nالهاتف: ${data.phone}`
);
```

---

## File Structure
### هيكل الملفات بعد التحديث

```
mokhaym-quran/
├── src/
│   └── components/
│       └── RegistrationForm.tsx  ← معدّل (يحتوي على رابط SCRIPT_URL)
├── GOOGLE_SHEETS_SETUP.md        ← هذا الملف (التعليمات)
└── ... (الملفات الأخرى)
```

---

## Summary Checklist
### قائمة التحقق النهائية

- [ ] تم إنشاء جدول Google Sheets جديد
- [ ] تم إضافة رؤوس الأعمدة بالترتيب الصحيح
- [ ] تم نسخ السكريبت إلى Google Apps Script
- [ ] تم نشر السكريبت (Deploy) واختيار "Anyone"
- [ ] تم نسخ رابط النشر
- [ ] تم تحديث SCRIPT_URL في RegistrationForm.tsx
- [ ] تم اختبار النموذج وإرسال بيانات اختبارية
- [ ] ظهرت البيانات في جدول Google Sheets

**تم! كل بيانات التسجيل ستذهب الآن إلى جدول Google Sheets تلقائيًا!** ✅

---

## Support
للمساعدة أو الأسئلة، يمكنك:
1. التحقق من أن جميع خطوات الـ Deploy صحيحة
2. التأكد من تشغيل متصفح حديث
3. مسح ذاكرة التخزين المؤقت (Cache) وإعادة تحميل الصفحة
