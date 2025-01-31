import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "../components/navbar"; // Ensure the path is correct
import Footer from "../components/footer"; // Import Footer
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
      >
        {/* 🔹 Global Background & Overlay */}
        <div
          className="relative w-full min-h-screen bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/blackRidge1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* 🔻 Dark Overlay for Dimmer Background */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* 🔹 Content Wrapper (Ensures Overlay Doesn’t Cover Page Content) */}
          <div className="relative z-10">
            <Navbar /> {/* Navbar is included here */}
            <main className="min-h-screen">{children}</main>
            <Footer /> {/* Footer is included here */}
          </div>
        </div>
      </body>
    </html>
  );
}
