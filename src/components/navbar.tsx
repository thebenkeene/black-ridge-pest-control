import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-50 z-20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold text-white hover:text-green-400">
          Black Ridge Pest Control
        </Link>
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
      </nav>
    </header>
  );
}
