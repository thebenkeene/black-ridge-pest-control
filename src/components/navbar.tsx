"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "animate.css"; // Ensure Animate.css is imported

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Background Panel - Slides Down & Becomes Translucent on Scroll */}
      <div
        className={`absolute top-0 left-0 w-full h-24 backdrop-blur-md transition-all duration-500 ${
          isScrolled
            ? "bg-[#1a1a1a] bg-opacity-80 shadow-lg translate-y-0 opacity-100"
            : "translate-y-[-100%] opacity-0"
        }`}
      ></div>

      {/* Navbar Content - Includes Logo & Menu */}
      <nav className="relative max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center h-24">
        {/* Logo - Properly Sized */}
        <Link href="/" className="flex items-center">
          <Image
            src="/BlackRidgeLogoReno.webp"
            alt="Black Ridge Logo"
            width={200} // Slightly bigger for better visibility
            height={200} // Matches navbar height better
            className="max-h-24 object-contain animate__animated animate__fadeInDown animate__delay-1s"
          />
        </Link>

        {/* Desktop Navigation - Each Item Drops Down */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          <li className="flex items-center animate__animated animate__fadeInDown animate__delay-1.2s">
            <Link href="/" className="text-[var(--primary)] hover:text-[var(--secondary)] transition">
              Home
            </Link>
          </li>
          <li className="flex items-center animate__animated animate__fadeInDown animate__delay-1.4s">
            <Link href="/about" className="text-[var(--primary)] hover:text-[var(--secondary)] transition">
              About Us
            </Link>
          </li>
          <li className="flex items-center animate__animated animate__fadeInDown animate__delay-1.6s">
            <Link href="/services" className="text-[var(--primary)] hover:text-[var(--secondary)] transition">
              Services
            </Link>
          </li>
          <li className="flex items-center animate__animated animate__fadeInDown animate__delay-1.8s">
            <Link href="/quote" className="btn">
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--primary)] focus:outline-none animate__animated animate__fadeInDown animate__delay-2s"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // Close icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger menu
              }
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="absolute top-24 left-0 w-full bg-[var(--background-dark)] bg-opacity-80 backdrop-blur-md text-white flex flex-col items-center space-y-4 py-4 md:hidden animate__animated animate__fadeInDown animate__delay-2.2s">
            <li>
              <Link
                href="/"
                className="hover:text-[var(--secondary)] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[var(--secondary)] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[var(--secondary)] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/quote"
                className="btn"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
