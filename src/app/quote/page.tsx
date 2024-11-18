export default function QuotePage() {
    return (
      <div className="w-full bg-gray-50 min-h-screen py-16 px-4 sm:px-8">
        {/* Header Section */}
        <section className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-green-600">Request a Free Quote</h1>
          <p className="mt-4 text-lg text-gray-600">
            Fill out the form below, and we’ll get back to you as soon as possible with your customized pest control quote.
          </p>
        </section>
  
        {/* Form Section */}
        <section className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form className="flex flex-col gap-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
  
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
  
            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
  
            {/* Service Type Field */}
            <div>
              <label htmlFor="service" className="block text-lg font-semibold text-gray-700">
                Select a Service
              </label>
              <select
                id="service"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="" disabled selected>
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
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700">
                Additional Details
              </label>
              <textarea
                id="message"
                placeholder="Tell us more about your pest problem"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white text-lg font-semibold py-3 rounded hover:bg-green-700 transition duration-200"
            >
              Submit Request
            </button>
          </form>
        </section>
  
        {/* Contact Information */}
        <section className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Prefer to talk? Call us at{' '}
            <a href="tel:+1234567890" className="text-green-600 font-semibold hover:underline">
              +1 (234) 567-890
            </a>{' '}
            or email us at{' '}
            <a href="mailto:info@altitudepestcontrol.com" className="text-green-600 font-semibold hover:underline">
              info@altitudepestcontrol.com
            </a>
          </p>
        </section>
      </div>
    );
  }
  