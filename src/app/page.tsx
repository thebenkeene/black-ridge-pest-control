export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/blackRidge1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"></div>
        <div className="relative z-10 max-w-4xl text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg animate-fadeIn">
            Pest Control You Can Trust
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 drop-shadow-md">
            Safeguard your home and business with our reliable pest solutions.
            Serving Reno, NV with top-notch expertise.
          </p>
          <a
            href="/quote"
            className="mt-8 inline-block px-8 py-4 bg-accent text-white font-medium text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              img: "/weevil.jpg",
              title: "Fast & Reliable",
              description:
                "Our team responds quickly and delivers efficient results every time.",
            },
            {
              img: "/bug.jpg",
              title: "Safe & Effective",
              description:
                "We use eco-friendly methods to ensure safety for your family and pets.",
            },
            {
              img: "/beetle.jpg",
              title: "Expert Team",
              description:
                "Trust our experienced professionals to handle any pest problem.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-24 w-24 mx-auto rounded-full shadow-md"
              />
              <h3 className="mt-6 text-xl font-semibold text-gray-800 group-hover:text-accent transition">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Black Ridge Pest Control saved my home from termites. Fast and professional service!",
                name: "Sarah K.",
              },
              {
                quote:
                  "I’m very impressed with their team. They kept our property pest-free for months!",
                name: "John D.",
              },
              {
                quote:
                  "Highly recommend Black Ridge Pest Control. Reliable and very thorough in their work.",
                name: "Emily R.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <p className="text-lg italic text-gray-300 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="mt-4 text-sm font-medium text-accent text-right">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Protect Your Home?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Reach out today for a free consultation. Let's keep your space pest-free.
          </p>
          <a
            href="/quote"
            className="px-8 py-4 bg-white text-accent font-medium text-lg rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </>
  );
}
