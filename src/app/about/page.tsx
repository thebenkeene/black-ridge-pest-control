export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[400px] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/about-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl px-6 animate__animated animate__fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground-dark)] drop-shadow-lg">
            About Black Ridge Pest Control
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--gray-text)] drop-shadow-md">
            Protecting your home and business with trusted, eco-friendly pest solutions in Reno, NV.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-[var(--background-dark)] text-[var(--foreground-dark)] animate__animated animate__fadeIn">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="/mission.jpg"
              alt="Our Mission"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground-dark)] mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-[var(--gray-text)] mb-6">
              At Black Ridge Pest Control, our mission is to provide reliable, eco-friendly pest control solutions that protect your home, business, and family.
            </p>
            <a
              href="/contact"
              className="btn bg-[var(--accent)] text-[var(--background-dark)] font-medium hover:bg-[var(--accent-hover)] transition duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[var(--background-dark)] text-[var(--foreground-dark)] animate__animated animate__fadeIn">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: "/team-member-1.jpg",
                name: "John Doe",
                role: "Founder & CEO",
                bio: "With over 15 years of experience in pest control, John ensures our services meet the highest standards.",
              },
              {
                img: "/team-member-2.jpg",
                name: "Jane Smith",
                role: "Lead Technician",
                bio: "Jane specializes in eco-friendly pest solutions and customer education.",
              },
              {
                img: "/team-member-3.jpg",
                name: "Mike Johnson",
                role: "Operations Manager",
                bio: "Mike oversees our field operations to ensure timely and efficient service delivery.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-[var(--background-light)] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full shadow-md transition-transform duration-500 transform hover:scale-110"
                />
                <h3 className="mt-6 text-xl font-semibold text-[var(--foreground-light)]">
                  {member.name}
                </h3>
                <p className="mt-2 text-[var(--gray-text)]">{member.role}</p>
                <p className="mt-4 text-[var(--gray-text)]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-[var(--background-light)] text-[var(--foreground-light)] animate__animated animate__fadeIn">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Protect Your Home or Business?
          </h2>
          <p className="text-lg text-[var(--gray-text)] mb-8">
            Contact us today for a free consultation. Let’s keep your space pest-free!
          </p>
          <a
            href="/contact"
            className="btn bg-[var(--background-dark)] text-[var(--foreground-dark)] hover:bg-[var(--gray-text)] transition duration-300 transform hover:scale-105"
          >
            Get a Free Quote
          </a>
        </div>
      </section>
    </>
  );
}
