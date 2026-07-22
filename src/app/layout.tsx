import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "موعد مع القرآن – مخيم قرآني بعين بوسيف",
  description: "سجل أبناءك الآن في مخيم القرآن الكريم بمنطقة عين بوسيف. تثقيف وتربية إسلامية تحت إشراف معلمين مؤهلين.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
