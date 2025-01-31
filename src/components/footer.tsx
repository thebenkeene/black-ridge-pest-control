"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo + Brand Information */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <Link href="/" className="mb-4">
            <Image
              src="/BlackRidgeLogoReno.webp"
              alt="Black Ridge Logo"
              width={160}
              height={60}
              className="max-h-24 object-contain"
            />
          </Link>
          <h3 className="text-xl font-bold mb-2">Black Ridge Pest Control</h3>
          <p className="text-gray-400">Trusted pest control services in Reno, NV.</p>
        </div>

        {/* Quick Links */}
        <div className="text-center mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-white hover:text-gray-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white hover:text-gray-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-gray-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">123 Pest Control Lane</p>
          <p className="text-gray-400">Reno, NV 89501</p>
          <p className="text-gray-400">Phone: 123-456-7890</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-8 flex justify-center">
        <a
          href="/quote"
          className="px-8 py-4 bg-white text-black font-semibold text-lg rounded-md shadow-md hover:bg-gray-200 transition"
        >
          Get a Free Quote
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex justify-center mt-6">
        <button
          className="text-white focus:outline-none"
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute bottom-0 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <li>
            <Link href="/about" className="text-white hover:text-gray-400 transition" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-white hover:text-gray-400 transition" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-400 transition" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </footer>
  );
}
