/**
 * Google Apps Script - مخيم القرآن - عين بوسيف
 *
 * هذا السكربت يستقبل بيانات التسجيل من الموقع الإلكتروني
 * ويضيفها كصف جديد في Google Sheet.
 *
 * طريقة الاستخدام:
 * 1. افتح Google Sheets
 * 2. Extensions > Apps Script
 * 3. الصق هذا الكود
 * 4. انشر كـ Web App: Deploy > New Deployment > Web App
 * 5. اختر "Anyone" لصلاحية الوصول
 * 6. انسخ الرابط الناتج وضعه في متغير SCRIPT_URL في موقع الويب
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // التحقق من وجود صف العناوين
    if (sheet.getLastRow() === 0) {
      const headers = [
        "التاريخ والوقت",
        "الاسم",
        "اللقب",
        "تاريخ الازدياد",
        "مكان الميلاد",
        "المستوى الدراسي",
        "رقم الهاتف",
        "شارك في مخيمات سابقة",
        "تفاصيل المخيمات السابقة",
        "مقدار الحفظ",
        "العنوان",
        "البريد الإلكتروني",
        "مصدر المعلومة"
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      // تنسيق صف العناوين
      sheet.getRange(1, 1, 1, headers.length)
        .setBackground("#1B6B3C")
        .setFontColor("#FFFFFF")
        .setFontWeight("bold")
        .setHorizontalAlignment("center");
    }

    // إضافة الصف الجديد
    const row = [
      new Date(),  // Timestamp
      data.name || "",
      data.lastName || "",
      data.birthDate || "",
      data.birthPlace || "",
      data.educationLevel || "",
      data.phone || "",
      data.previousCamp || "لا",
      data.previousCampDetails || "",
      data.memorizationLevel || "",
      data.address || "",
      data.email || "",
      data.referralSource || ""
    ];

    sheet.appendRow(row);

    // تغليف الاستجابة
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "تم التسجيل بنجاح" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("خادم مخيم القرآن يعمل بشكل صحيح")
    .setMimeType(ContentService.MimeType.TEXT);
}
