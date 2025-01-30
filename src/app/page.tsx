import "animate.css"; // Ensure Animate.css is imported

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen text-white">
      {/* Fixed Background Image (Always Visible) */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: "url('/blackRidge1.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div> {/* Lighter Overlay */}
      </div>

      {/* Main Content (Fades In) */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="w-full h-screen flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg animate__animated animate__fadeIn animate__delay-1.5s">
            EXPERT PEST CONTROL
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--primary)] font-light animate__animated animate__fadeIn animate__delay-1.8s">
            Precision solutions for homes & businesses.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center animate__animated animate__fadeIn animate__delay-1s">
            <a href="/quote" className="btn">
              Get a Free Quote
            </a>
            <a href="tel:123-456-7890" className="btn">
              Call Now: 123-456-7890
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 uppercase text-[var(--primary)]">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { img: "/weevil.jpg", title: "Residential", description: "Protect your home from infestations." },
                { img: "/bug.jpg", title: "Commercial", description: "Custom solutions for business environments." },
                { img: "/beetle.jpg", title: "Termite Control", description: "Prevent long-term structural damage." },
              ].map((item, index) => (
                <div key={index} className="group bg-[var(--foreground-dark)] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                  <img src={item.img} alt={item.title} className="h-24 w-24 mx-auto rounded-full shadow-md" />
                  <h3 className="mt-6 text-xl font-semibold text-white group-hover:text-[var(--primary)] transition">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[var(--primary)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <img src="/about-us.jpg" alt="About Us" className="rounded-lg shadow-lg transform hover:scale-105 transition duration-500" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase text-[var(--primary)]">
                About Us
              </h2>
              <p className="text-lg text-[var(--primary)] mb-6 font-light">
                Delivering cutting-edge pest solutions with precision and expertise.
              </p>
              <a href="/about" className="btn">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 uppercase text-[var(--primary)]">
              Client Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { quote: "Best pest control service I’ve ever used.", name: "Sarah K." },
                { quote: "Incredible results, highly professional team!", name: "John D." },
                { quote: "Fast, reliable, and thorough service.", name: "Emily R." },
              ].map((testimonial, index) => (
                <div key={index} className="bg-[var(--foreground-dark)] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                  <p className="text-lg italic text-[var(--primary)] leading-relaxed">"{testimonial.quote}"</p>
                  <p className="mt-4 text-sm font-medium text-[var(--primary)] text-right">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-black/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 uppercase">
              Get Protected Today
            </h2>
            <p className="text-lg text-[var(--primary)] mb-8">
              Advanced pest control solutions tailored to your needs.
            </p>
            <a href="/quote" className="btn">
              Request a Quote
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
