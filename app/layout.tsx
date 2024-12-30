import type { Metadata } from "next";
import "@/app/global.css";
import Navbar from "./_components/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subjects: ["latin"] });

export const metadata: Metadata = {
  title: "Belajar next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
