import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bright Smile Dental Clinic | AI Chatbot Assistant",
  description: "Modern dental clinic website with AI-powered chatbot assistant. Book appointments, learn about services, and get dental care information.",
  keywords: "dental clinic, teeth cleaning, orthodontics, dental implants, chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
