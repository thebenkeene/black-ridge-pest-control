'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-90 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold text-white hover:text-green-400">
          Black Ridge Pest Control
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="/" className="text-white hover:text-green-400 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-green-400 font-medium">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-white hover:text-green-400 font-medium">
              Services
            </Link>
          </li>
          <li>
            <Link href="/quote" className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700">
              Get Quote
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
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
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center space-y-4 py-4 md:hidden">
            <li>
              <Link href="/" className="hover:text-green-400 font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-400 font-medium" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-green-400 font-medium" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/quote"
                className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
