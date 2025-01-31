"use client";

import "animate.css"; // Ensure Animate.css is imported
import Image from "next/image"; // Import the Image component

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Hero Section Without Panel */}
      <section className="w-full h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg animate__animated animate__fadeIn animate__delay-1.5s">
          EXPERT PEST CONTROL
        </h1>
        <p className="mt-6 text-lg md:text-xl font-light animate__animated animate__fadeIn animate__delay-1.8s">
          Precision solutions for homes & businesses.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center animate__animated animate__fadeIn animate__delay-1s">
          <a href="/quote" className="btn bg-black/50 text-white hover:bg-black/70 transition duration-300 transform hover:scale-105">
            Get a Free Quote
          </a>
          <a href="tel:123-456-7890" className="btn bg-black/50 text-white hover:bg-black/70 transition duration-300 transform hover:scale-105">
            Call Now: 123-456-7890
          </a>
        </div>
      </section>

      {/* Services Section - Improved Layout */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 uppercase">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { img: "/TermitePestControlReno.jpg", title: "Termite Control", description: "Prevent structural damage with expert termite treatments." },
              { img: "/CockroachPestControlReno.jpg", title: "Cockroach Control", description: "Eradicate infestations with safe and effective solutions." },
              { img: "/BlackWidowPestControlReno.jpg", title: "Spider Control", description: "Protect your home from dangerous black widow spiders." },
            ].map((item, index) => (
              <div key={index} className="bg-black/50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover rounded-md shadow-md"
                />
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section - Adjusted Image Display */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="bg-black/40 p-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <Image
                src="/AboutUsPestControlReno.webp"
                alt="About Us"
                width={500}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto max-h-[500px] object-contain transform hover:scale-105 transition duration-500"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">
                About Us
              </h2>
              <p className="text-lg mb-6 font-light">
                Meet the dedicated team behind Black Ridge Pest Control. With years of expertise, we deliver cutting-edge pest solutions with precision and professionalism.
              </p>
              <a href="/about" className="btn bg-black/50 text-white hover:bg-black/70 transition duration-300 transform hover:scale-105">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 uppercase">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { quote: "Best pest control service I&#39;ve ever used.", name: "Sarah K." },
              { quote: "Incredible results, highly professional team!", name: "John D." },
              { quote: "Fast, reliable, and thorough service.", name: "Emily R." },
            ].map((testimonial, index) => (
              <div key={index} className="bg-black/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                <p className="text-lg italic leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                <p className="mt-4 text-sm font-medium text-right">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 uppercase">
            Get Protected Today
          </h2>
          <p className="text-lg mb-8">
            Advanced pest control solutions tailored to your needs.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="/quote" className="btn bg-black/50 text-white hover:bg-black/70 transition duration-300 transform hover:scale-105">
              Request a Quote
            </a>
            <a href="tel:123-456-7890" className="btn bg-black/50 text-white hover:bg-black/70 transition duration-300 transform hover:scale-105">
              Call Now: 123-456-7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
