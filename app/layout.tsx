import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Komivi Assiamua | Personal Platform",
  description: "Business analytics, AI, decision science, and entrepreneurship."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-text">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
