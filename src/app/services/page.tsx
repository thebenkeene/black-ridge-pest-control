export default function ServicesPage() {
    return (
      <section className="py-16 px-4 sm:px-8">
        <h2 className="text-3xl font-semibold text-center">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Service Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <h3 className="mt-4 text-xl font-semibold">Termite Control</h3>
            <p className="mt-2 text-gray-600">Comprehensive termite inspection and treatment solutions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <h3 className="mt-4 text-xl font-semibold">Rodent Control</h3>
            <p className="mt-2 text-gray-600">Keep rodents out of your home with safe, effective control.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <h3 className="mt-4 text-xl font-semibold">Mosquito Control</h3>
            <p className="mt-2 text-gray-600">Reduce mosquito populations around your property.</p>
          </div>
        </div>
      </section>
    );
  }
  