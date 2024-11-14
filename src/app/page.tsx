import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center text-center bg-[url('/hero-background.jpg')] bg-cover bg-center py-20 px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
          Reliable Pest Control Services
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl drop-shadow">
          Protecting your home and business from unwanted pests in Reno, NV.
        </p>
        <a
          href="#contact"
          className="mt-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-200"
        >
          Get a Free Quote
        </a>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 px-4 sm:px-8">
        <h2 className="text-3xl font-semibold text-center">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ServiceCard
            imageSrc="/beetle.jpg"
            title="Termite Control"
            description="Comprehensive termite inspection and treatment solutions."
          />
          <ServiceCard
            imageSrc="/bug.jpg"
            title="Rodent Control"
            description="Keep rodents out of your home with safe, effective control."
          />
          <ServiceCard
            imageSrc="/weevil.jpg"
            title="Mosquito Control"
            description="Reduce mosquito populations around your property."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-green-600 text-white py-16 px-4 sm:px-8">
        <h2 className="text-3xl font-semibold text-center">Customer Testimonials</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Testimonial
            name="John D."
            text="Altitude Cleaning Crew did an amazing job keeping our property pest-free. Their team was professional and efficient."
          />
          <Testimonial
            name="Sarah K."
            text="I was worried about termites in my home, but their service was quick and thorough. Highly recommend!"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 px-4 sm:px-8 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center">Contact Us</h2>
        <p className="mt-4 text-center text-lg">Ready to solve your pest problems? Contact us for a free consultation!</p>
        <form className="mt-8 max-w-lg mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 border rounded focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 border rounded focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-3 border rounded focus:outline-none h-32"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-gray-600">
        © 2024 Altitude Pest Control | All Rights Reserved
      </footer>
    </div>
  );
}

type ServiceCardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

function ServiceCard({ imageSrc, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <Image src={imageSrc} alt={title} width={300} height={200} className="rounded-lg" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

type TestimonialProps = {
  name: string;
  text: string;
};

function Testimonial({ name, text }: TestimonialProps) {
  return (
    <div className="bg-green-700 p-6 rounded-lg shadow-md">
      <p className="italic">"{text}"</p>
      <p className="mt-4 font-semibold text-right">- {name}</p>
    </div>
  );
}
