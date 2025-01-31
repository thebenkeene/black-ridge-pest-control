import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Black Ridge Pest Control",
  description: "Reliable pest control services in Reno, NV.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-black`}>
        {/* 🔹 Background Wrapper */}
        <div className="relative w-full min-h-screen">
          {/* ✅ Responsive Full-Screen Background Fix */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed md:bg-cover md:bg-center md:bg-fixed"
            style={{
              backgroundImage: "url('/blackRidge1.jpg')",
            }}
          ></div>

          {/* ✅ Overlay for Readability */}
          <div className="absolute inset-0 bg-black/70 md:bg-black/40"></div>

          {/* 🔹 Page Content */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
