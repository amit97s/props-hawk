import React from "react";
import { Footer, Header } from "../component";
import {
  customProp,
  despute,
  fresh,
  handOnHouse,
  legal,
  propertyManagement,
  rentmanagement,
  secureProp,
  value,
} from "../assets/images";

function OurServices() {
  return (
    <div>
      <Header />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-20">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold my-12 md:my-16 lg:my-24">
          Our Services
        </h1>
        <div>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-9 my-8 md:my-16 lg:my-32">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Comprehensive Property Management
              </h2>
              <p className="text-sm md:text-base lg:text-lg">
                Prophawk offers comprehensive property management services
                tailored to meet your real estate needs. We handle everything
                from tenant placement and rent collection to maintenance and
                financial reporting, ensuring your property runs smoothly and
                efficiently. Our expert team prioritizes maximizing your
                investment while providing exceptional service to both property
                owners and tenants. Trust Prophawk to manage your property with
                professionalism and care.
              </p>
              <button className="px-4 py-2 bg-blue-400 rounded-md text-white m-4 hover:bg-red-500 hover:scale-105 transition-all">
                Load more
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={handOnHouse}
                alt="Comprehensive Property Management"
                className="w-full shadow-xl rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-9 my-8 md:my-16 lg:my-32">
            <div className="w-full md:w-1/2">
              <img
                src={customProp}
                alt="Custom Property Management"
                className="w-full shadow-xl rounded-md"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Custom Property Management
              </h2>
              <p className="text-sm md:text-base lg:text-lg">
                At Prophawk, we specialize in custom property management
                tailored to meet your unique needs. Whether it's residential,
                commercial, or industrial properties, we ensure efficient and
                personalized solutions. Our experienced team handles everything
                from tenant relations to maintenance, maximizing property value
                and ensuring peace of mind. Trust Prophawk for reliable,
                customized property management that prioritizes your investment
                and satisfaction.
              </p>
              <button className="px-4 py-2 bg-blue-400 rounded-md text-white m-4 hover:bg-red-500 hover:scale-105 transition-all">
                Load more
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-9 my-8 md:my-16 lg:my-32">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Property Management Services
              </h2>
              <p className="text-sm md:text-base lg:text-lg">
                At Prophawk, we specialize in comprehensive property management
                services tailored to meet your needs. Our dedicated team ensures
                that your property is well-maintained, tenants are satisfied,
                and operations run smoothly. From regular inspections to prompt
                maintenance and tenant communication, we handle it all with
                professionalism and care. Trust Prophawk to protect your
                investment and provide peace of mind, knowing your property is
                in expert hands.
              </p>
              <button className="px-4 py-2 bg-blue-400 rounded-md text-white m-4 hover:bg-red-500 hover:scale-105 transition-all">
                Load more
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={propertyManagement}
                alt="Property Management Services"
                className="w-full shadow-xl rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-9 my-8 md:my-16 lg:my-32">
            <div className="w-full md:w-1/2">
              <img
                src={secureProp}
                alt="Security of Property"
                className="w-full shadow-xl rounded-md"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Security of Property
              </h2>
              <p className="text-sm md:text-base lg:text-lg">
                At Prophawk, we prioritize the security of your property with
                advanced solutions tailored to safeguard your assets. Our
                cutting-edge technology and comprehensive strategies ensure that
                your property remains protected from potential threats. With a
                dedicated team of experts and a focus on innovation, Prophawk
                delivers peace of mind, allowing you to trust that your
                investments and possessions are in safe hands.
              </p>
              <button className="px-4 py-2 bg-blue-400 rounded-md text-white m-4 hover:bg-red-500 hover:scale-105 transition-all">
                Load more
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-9 my-8 md:my-16 lg:my-32">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Rent Management
              </h2>
              <p className="text-sm md:text-base lg:text-lg">
                Rent management at Prophawk ensures seamless handling of rental
                properties, from tenant screening to payment collection and
                maintenance. Our efficient system provides landlords with peace
                of mind and tenants with a hassle-free experience. With
                Prophawk, property owners can maximize returns and minimize the
                stress associated with property management, while tenants enjoy
                a smooth renting process backed by reliable support.
              </p>
              <button className="px-4 py-2 bg-blue-400 rounded-md text-white m-4 hover:bg-red-500 hover:scale-105 transition-all">
                Load more
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={rentmanagement}
                alt="Rent Management"
                className="w-full shadow-xl rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-9 my-8 md:my-16 lg:my-32">
            <div className="w-full md:w-1/2">
              <img
                src={legal}
                alt="Legal Services"
                className="w-full shadow-xl rounded-md"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Legal Services
              </h2>
              <p className="text-sm md:text-base lg:text-lg">
                At Prophawk, we offer comprehensive legal services tailored to
                your needs. Our experienced team provides expert guidance in
                areas such as corporate law, intellectual property, contracts,
                and dispute resolution. We are dedicated to protecting your
                interests and ensuring legal compliance, helping you navigate
                complex legal landscapes with confidence. Trust Prophawk for
                reliable and effective legal solutions that empower your
                business to thrive.
              </p>
              <button className="px-4 py-2 bg-blue-400 rounded-md text-white m-4 hover:bg-red-500 hover:scale-105 transition-all">
                Load more
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-9 my-8 md:my-16 lg:my-32">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Property Dispute Redressal
              </h2>
              <p className="text-sm md:text-base lg:text-lg">
                Property dispute redressal at Prophawk involves a comprehensive
                approach to resolving conflicts efficiently and fairly. Our
                expert team navigates legal complexities, ensuring your rights
                are protected while minimizing stress. We offer mediation,
                negotiation, and legal support to achieve equitable solutions.
                With Prophawk, you can trust that your property disputes will be
                handled with professionalism and dedication, ensuring swift and
                satisfactory outcomes for all parties involved.
              </p>
              <button className="px-4 py-2 bg-blue-400 rounded-md text-white m-4 hover:bg-red-500 hover:scale-105 transition-all">
                Load more
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={despute}
                alt="Property Dispute Redressal"
                className="w-full shadow-xl rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-9 my-8 md:my-16 lg:my-32">
            <div className="w-full md:w-1/2">
              <img
                src={fresh}
                alt="Fresh Properties"
                className="w-full shadow-xl rounded-md"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Fresh Properties
              </h2>
              <p className="text-sm md:text-base lg:text-lg">
                "Fresh Properties by Prophawk" offers a vibrant and modern
                approach to real estate, specializing in new and emerging
                properties. With a keen eye for detail and a commitment to
                excellence, Prophawk connects clients with the latest
                opportunities in the market. Whether you're seeking residential
                or commercial spaces, Prophawk ensures quality and innovation in
                every deal, making your real estate journey seamless and
                rewarding. Explore freshness with Prophawk.
              </p>
              <button className="px-4 py-2 bg-blue-400 rounded-md text-white m-4 hover:bg-red-500 hover:scale-105 transition-all">
                Load more
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-9 my-8 md:my-16 lg:my-32">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Property Valuation
              </h2>
              <p className="text-sm md:text-base lg:text-lg">
                Property valuation is a crucial process that determines the
                market value of a property based on various factors such as
                location, condition, and market trends. At Prophawk, we
                specialize in providing accurate and reliable property
                valuations to help our clients make informed decisions. Our
                expert team utilizes advanced methods and industry insights to
                assess the true worth of properties, ensuring transparency and
                trust in every transaction.
              </p>
              <button className="px-4 py-2 bg-blue-400 rounded-md text-white m-4 hover:bg-red-500 hover:scale-105 transition-all">
                Load more
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={value}
                alt="Property Valuation"
                className="w-full shadow-xl rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OurServices;
 