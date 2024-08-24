import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { rentagreement1, rentagreement2 } from '../assets/images';
import { Footer, Header } from '../component';

function RentAgreementPage() {
  const [viewMore, setViewMore] = useState(false);

  const toggleViewMore = () => {
    setViewMore(!viewMore);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-6 bg-gray-50">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Rent Agreement</h1>

        {/* Images Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <img
            src={rentagreement1}
            alt="Rent Agreement"
            className="w-full h-auto rounded-xl transition-transform transform hover:scale-105"
          />
          <div className="bg-white p-8 rounded-xl">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Fill Out Your Details</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Content Section with Paragraphs */}
        <div className="bg-white p-5 rounded-xl flex flex-col lg:flex-row mb-10 gap-8">
          <img
            src={rentagreement2}
            alt="Rental Property"
            className="w-full lg:w-1/2 h-auto rounded-xl transition-transform transform hover:scale-101"
          />
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Understanding Your Rent Agreement</h2>
            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              A rent agreement is a legal document that binds the tenant and the landlord to the terms and conditions agreed upon. It specifies the duration, rent amount, and other important clauses that protect both parties.
            </p>
            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              This agreement includes details such as the tenant's and landlord's rights, the lease term, and the maintenance responsibilities. It is crucial to carefully review the document before signing to avoid future disputes.
            </p>
            {viewMore && (
              <div className="additional-content">
                <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                  In a typical rent agreement, the rent amount is agreed upon, and any changes during the lease period are usually not allowed unless mutually agreed. The agreement also outlines the conditions for termination or renewal of the lease.
                </p>
                <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                  Another critical aspect is the security deposit, which the tenant provides to the landlord as a precautionary measure. The amount and terms for returning the deposit are also stated in the rent agreement.
                </p>
              </div>
            )}
            <button
              onClick={toggleViewMore}
              className="mt-4 bg-blue-600 text-white px-5 py-3 rounded-lg"
            >
              {viewMore ? 'View Less' : 'View More'}
            </button>
          </div>
        </div>

        {/* Agreement Terms Section */}
        <div className="bg-gray-100 p-8 rounded-xl mb-10">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Key Agreement Terms</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              Rent Amount: The agreed monthly rent is due on the 1st of each month.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              Lease Duration: The lease term is for 12 months, starting from the date of signing.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              Maintenance: The tenant is responsible for day-to-day maintenance, while the landlord handles major repairs.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              Termination: Either party must give 30 days' notice before terminating the agreement.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              Security Deposit: The tenant will provide a security deposit equivalent to two months' rent.
            </li>
          </ul>
        </div>

        {/* Responsibilities Section */}
        <div className="bg-white p-8 rounded-xl mb-10">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Landlord and Tenant Responsibilities</h2>
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            <strong>Landlord's Responsibilities:</strong> The landlord must ensure that the property is in good condition and handle any major repairs or issues that arise during the tenancy.
          </p>
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            <strong>Tenant's Responsibilities:</strong> The tenant is expected to maintain the property, pay rent on time, and report any issues to the landlord promptly. The tenant should not make significant alterations to the property without the landlord's consent.
          </p>
        </div>
        <Footer />
      </div>
      <footer className="bg-blue-700 w-full mt-1 text-white p-6">
        <p className="text-center">© 2024 Prophawk. All rights reserved.</p>
      </footer>
    </>
  );
}

export default RentAgreementPage;
