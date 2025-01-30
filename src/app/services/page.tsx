import "animate.css"; // Ensure Animate.css is imported

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[400px] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/services-hero.jpg')", // Ensure image fits theme
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-4xl px-6 animate__animated animate__fadeIn animate__delay-1.2s">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Our Pest Control Services
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--gray-text)] drop-shadow-md">
            Protecting your home and business with the most effective and eco-friendly pest solutions.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[var(--background-dark)] text-white animate__animated animate__fadeIn animate__delay-1.5s">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 uppercase text-[var(--gray-text)]">
            Our Professional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: "M5 12l5 5L20 7",
                title: "Termite Control",
                description: "Comprehensive termite inspection and treatment solutions to safeguard your property.",
              },
              {
                icon: "M15 12l-4-4-4 4m4 4l4-4-4-4",
                title: "Rodent Control",
                description: "Safe and effective rodent control solutions for a pest-free home.",
              },
              {
                icon: "M4 4l16 16M4 20L20 4",
                title: "Mosquito Control",
                description: "Effective mosquito control to enjoy your outdoor space without worry.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-[var(--foreground-dark)] p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105"
              >
                <div className="flex justify-center items-center w-16 h-16 bg-white text-black rounded-full mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-[var(--gray-text)] transition">
                  {service.title}
                </h3>
                <p className="mt-4 text-[var(--gray-text)]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-[var(--foreground-dark)] text-white animate__animated animate__fadeIn animate__delay-1.8s">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 uppercase">
            Ready to Protect Your Home?
          </h2>
          <p className="text-lg text-[var(--gray-text)] mb-8">
            Contact us today for a free consultation. Let’s keep your space pest-free!
          </p>
          <a href="/quote" className="btn">
            Get a Free Quote
          </a>
        </div>
      </section>
    </>
  );
}
