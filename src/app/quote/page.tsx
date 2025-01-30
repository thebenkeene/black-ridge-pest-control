import "animate.css"; // Ensure Animate.css is imported

export default function QuotePage() {
  return (
    <div className="relative w-full min-h-screen text-white">
      {/* Background Image (Same as Homepage) */}
      <section
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/blackRidge1.jpg')", // Same high-contrast snow mountain image
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </section>

      {/* Main Content (Fades In) */}
      <div className="relative z-10 max-w-4xl mx-auto py-20 px-6 animate__animated animate__fadeIn animate__delay-1.2s">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Request a Free Quote</h1>
          <p className="mt-4 text-lg text-[var(--gray-text)]">
            Fill out the form below, and we’ll get back to you as soon as possible with your customized pest control quote.
          </p>
        </section>

        {/* Form Section */}
        <section className="bg-[var(--foreground-dark)] p-8 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-1.5s">
          <form className="flex flex-col gap-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-white">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full mt-2 px-4 py-3 border border-[var(--gray-text)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-[var(--background-dark)] text-white"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-white">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full mt-2 px-4 py-3 border border-[var(--gray-text)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-[var(--background-dark)] text-white"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="block text-lg font-semibold text-white">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full mt-2 px-4 py-3 border border-[var(--gray-text)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-[var(--background-dark)] text-white"
              />
            </div>

            {/* Service Type Field */}
            <div>
              <label htmlFor="service" className="block text-lg font-semibold text-white">
                Select a Service
              </label>
              <select
                id="service"
                defaultValue=""
                className="w-full mt-2 px-4 py-3 border border-[var(--gray-text)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-[var(--background-dark)] text-white"
              >
                <option value="" disabled>
                  Choose a service
                </option>
                <option value="termite">Termite Control</option>
                <option value="rodent">Rodent Control</option>
                <option value="mosquito">Mosquito Control</option>
                <option value="general">General Pest Control</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-white">
                Additional Details
              </label>
              <textarea
                id="message"
                placeholder="Tell us more about your pest problem"
                className="w-full mt-2 px-4 py-3 border border-[var(--gray-text)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-[var(--background-dark)] text-white h-32"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn w-full">
              Submit Request
            </button>
          </form>
        </section>

        {/* Contact Information */}
        <section className="mt-12 text-center animate__animated animate__fadeIn animate__delay-1.8s">
          <p className="text-[var(--gray-text)] text-lg">
            Prefer to talk? Call us at{" "}
            <a href="tel:+1234567890" className="text-[var(--primary)] font-semibold hover:underline">
              +1 (234) 567-890
            </a>{" "}
            or email us at{" "}
            <a href="mailto:info@blackridgepestcontrol.com" className="text-[var(--primary)] font-semibold hover:underline">
              info@blackridgepestcontrol.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
