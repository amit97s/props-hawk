import React from "react";
import { NavLink } from "react-router-dom";
import { contactImg } from "../assets/images"; // Adjust the import path as needed
import { Footer, Header } from "../component";

function Login() {
  return (
    <>
      <Header />
      <section className="bg-gray-50 my-3">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Contact Background"
              src={contactImg}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div className="hidden lg:relative lg:block lg:p-12">
              <NavLink to="/" className="block text-white">
                <span className="sr-only">Home</span>
              </NavLink>
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Prophawk
              </h2>
              <p className="mt-4 leading-relaxed text-white/90">
                Fill out the form and we'll contact you as soon as possible.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Us</h2>
              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    placeholder="Enter your full name"
                    className="mt-1 w-full rounded-md border-slate-50 bg-white text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="email"
                    placeholder="Enter your email"
                    className="mt-1 w-full rounded-md border-slate-50 bg-white text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    placeholder="Enter your phone number"
                    className="mt-1 w-full rounded-md border-slate-50 bg-white text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="query"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Query
                  </label>
                  <textarea
                    name="query"
                    id="query"
                    rows="4"
                    placeholder="Enter your query"
                    className="mt-1 w-full rounded-md border-slate-50 bg-white text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  ></textarea>
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>

      <section className="flex justify-center my-10">
      <div className="w-full h-[500px]">  {/* Adjusted height */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.146891236681!2d77.39545831531732!3d28.616789282426853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefee531fd7c3%3A0x672eed1ad4cfe8ab!2sC-355%2C%20Block%20C%2C%20Sector%20122%2C%20Noida%2C%20Uttar%20Pradesh%20201301%2C%20India!5e0!3m2!1sen!2sus!4v1634011893066!5m2!1sen!2sus"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    title="Location Map"
  ></iframe>
</div>

      </section>

      <Footer />
    </>
  );
}

export default Login;
