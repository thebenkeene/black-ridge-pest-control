export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/trees.jpg')",
        }}
      >
        {/* Translucent Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 p-6 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
            Reliable Pest Control Services
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl drop-shadow mx-auto leading-relaxed">
            Protecting your home and business from unwanted pests in Reno, NV.
          </p>
          <a
            href="/quote"
            className="mt-8 inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-200 text-lg"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8">
          <div className="flex flex-col items-center text-center">
            <img src="/weevil.jpg" alt="Fast Service" className="h-32 w-32 rounded-full shadow-md" />
            <p className="mt-4 text-xl font-semibold text-gray-700">
              Fast and Reliable Service
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/bug.jpg" alt="Safe Solutions" className="h-32 w-32 rounded-full shadow-md" />
            <p className="mt-4 text-xl font-semibold text-gray-700">
              Safe and Effective Solutions
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/beetle.jpg" alt="Expert Team" className="h-32 w-32 rounded-full shadow-md" />
            <p className="mt-4 text-xl font-semibold text-gray-700">
              Expert Pest Control Team
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-green-600 text-white py-16 px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-green-700 p-6 rounded-lg shadow-md flex flex-col">
            <p className="italic">"Black Ridge Pest Control saved my home from termites. Fast and professional service!"</p>
            <p className="mt-4 font-semibold text-right">- Sarah K.</p>
          </div>
          <div className="bg-green-700 p-6 rounded-lg shadow-md flex flex-col">
            <p className="italic">"I’m very impressed with their team. They kept our property pest-free for months!"</p>
            <p className="mt-4 font-semibold text-right">- John D.</p>
          </div>
          <div className="bg-green-700 p-6 rounded-lg shadow-md flex flex-col">
            <p className="italic">"Highly recommend Black Ridge Pest Control. Reliable and very thorough in their work."</p>
            <p className="mt-4 font-semibold text-right">- Emily R.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 px-4 sm:px-8 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center">Get Started Today!</h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Contact us now for a free consultation and let us help you protect your property.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="/quote"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-200"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </>
  );
}
