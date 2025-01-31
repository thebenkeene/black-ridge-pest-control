"use client";

export default function AboutPage() {
  
  return (
    <div className="relative w-full min-h-screen">
      {/* Hero Section in a Panel */}
      <section className="relative w-full h-[400px] flex justify-center items-center text-center">
        <div className="bg-black/40 p-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            About Black Ridge Pest Control
          </h1>
          <p className="mt-6 text-lg md:text-xl drop-shadow-md">
            Protecting your home and business with trusted, eco-friendly pest solutions in Reno, NV.
          </p>
        </div>
      </section>

      {/* Mission Section in a Panel */}
      <section className="py-16 bg-transparent animate__animated animate__fadeIn">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="bg-black/40 p-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              <div>
                <img
                  src="/ExterminatorReno.webp"
                  alt="Our Mission"
                  className="rounded-lg shadow-lg transform hover:scale-105 transition duration-500 w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
                  Our Mission
                </h2>
                <p className="text-lg mb-6 drop-shadow-md">
                  At Black Ridge Pest Control, our mission is to provide reliable, eco-friendly pest control solutions that protect your home, business, and family.
                </p>
                <a
                  href="/contact"
                  className="btn bg-black/50 text-white font-medium hover:bg-black/70 transition duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Inside Panels */}
      <section className="py-16 bg-transparent animate__animated animate__fadeIn">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 drop-shadow-lg">Meet Our Team</h2>
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
                className="bg-black/40 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full shadow-md transition-transform duration-500 transform hover:scale-110"
                />
                <h3 className="mt-6 text-xl font-semibold">{member.name}</h3>
                <p className="mt-2 text-gray-200">{member.role}</p>
                <p className="mt-4 text-gray-200">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section in a Panel */}
      <section className="py-20 bg-transparent animate__animated animate__fadeIn">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="bg-black/40 p-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 drop-shadow-lg">
              Ready to Protect Your Home or Business?
            </h2>
            <p className="text-lg mb-8 drop-shadow-md">
              Contact us today for a free consultation. Let’s keep your space pest-free!
            </p>
            <a
              href="/contact"
              className="btn bg-black/50 text-white hover:bg-black/70 transition duration-300 transform hover:scale-105"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
