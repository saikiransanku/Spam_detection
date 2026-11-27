import "@/styles/globals.css";
import MainLayout from "@/components/layout/MainLayout";

export const metadata = {
  title: "Advanced Spam Detection System",
  description:
    "Frontend foundation for multilingual spam detection research across SMS, Email, and Chat channels.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FFFDD0] text-[#0D0D0D]">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

