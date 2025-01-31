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
        className={`absolute top-0 left-0 w-full h-20 backdrop-blur-md transition-all duration-500 ${
          isScrolled
            ? "bg-[#1a1a1a] bg-opacity-80 shadow-lg translate-y-0 opacity-100"
            : "translate-y-[-100%] opacity-0"
        }`}
      ></div>

      {/* Navbar Content */}
      <nav className="relative max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center h-20">
        
        {/* Logo - Sized Properly */}
        <Link href="/" className="flex items-center">
          <Image
            src="/BlackRidgeLogoReno.webp"
            alt="Black Ridge Logo"
            width={160}
            height={160}
            className="max-h-20 w-auto animate__animated animate__fadeInDown animate__delay-1s"
          />
        </Link>

        {/* Desktop Navigation - Each Item Drops Down */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium h-full items-center">
          <li className="animate__animated animate__fadeInDown animate__delay-1s">
            <Link href="/" className="text-white hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li className="animate__animated animate__fadeInDown animate__delay-1s">
            <Link href="/about" className="text-white hover:text-gray-300 transition">
              About Us
            </Link>
          </li>
          <li className="animate__animated animate__fadeInDown animate__delay-1s">
            <Link href="/services" className="text-white hover:text-gray-300 transition">
              Services
            </Link>
          </li>
          <li className="animate__animated animate__fadeInDown animate__delay-1s">
            <Link href="/quote" className="btn">
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button - Always Gray with White Lines */}
        <button
          className="md:hidden bg-gray-700 p-2 rounded-md focus:outline-none flex items-center justify-center animate__animated animate__fadeInDown animate__delay-1s"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile Menu - Slides Down Smoothly */}
        <div
          className={`absolute top-[5rem] left-0 w-full bg-[#1a1a1a] bg-opacity-95 text-white flex flex-col items-center space-y-4 py-6 md:hidden transition-all duration-500 ${
            isMenuOpen ? "opacity-100 visible animate__animated animate__fadeInDown" : "opacity-0 invisible"
          }`}
        >
          <Link href="/" className="hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/services" className="hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link href="/quote" className="btn" onClick={() => setIsMenuOpen(false)}>
            Get a Quote
          </Link>
        </div>

      </nav>
    </header>
  );
}
