import React from 'react';
import { useParams } from 'react-router-dom';
import { Footer, Header } from '../component';
import { delhi, delhi2, delhi3, kolkata, kolkata2, kolkata3, noida, noida2, noida3 } from '../assets/images';

const locationData = {
  noida: {
    title: "Noida",
    description: "Noida is a planned city located in the National Capital Region of India, known for its modern infrastructure and rapid urbanization.",
    images: [
      noida,
      noida2,
      noida3,
    ],
    features: [
      "Well-planned urban development",
      "Hub of IT and IT-enabled services",
      "Excellent connectivity with Delhi",
    ],
  },
  delhi: {
    title: "Delhi",
    description: "Delhi is the capital territory of India, and a massive metropolitan area in the country’s north. It is known for its rich history, culture, and landmarks.",
    images: [
      delhi,
      delhi2,
      delhi3,
    ],
    features: [
      "Historic landmarks like the Red Fort and India Gate",
      "Vibrant markets and street food",
      "Cultural diversity and political center",
    ],
  },
  kolkata: {
    title: "Kolkata",
    description: "Kolkata (formerly Calcutta) is the capital of India’s West Bengal state. It is known for its grand colonial architecture, art galleries, and cultural festivals.",
    images: [
      kolkata,
      kolkata2,
      kolkata3,
    ],
    features: [
      "Colonial architecture and historic sites",
      "Cultural festivals like Durga Puja",
      "Hub of art, literature, and education",
    ],
  },
  // Add more locations if needed
};

const LocationDetail = () => {
  const { place } = useParams();
  const location = locationData[place.toLowerCase()];

  if (!location) {
    return <div className="text-center py-20 text-2xl font-bold">Location not found!</div>;
  }

  return (
    <div>
      <Header />
      <div className="max-w-screen-xl mx-auto py-10 px-4">
        {/* Title and Description */}
        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">{location.title}</h1>
        <p className="text-lg mb-8 text-center text-gray-700">{location.description}</p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {location.images.map((image, index) => (
            <div key={index} className="relative h-64 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${image})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {location.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <button className="bg-blue-700 text-white py-2 px-6 rounded-md hover:bg-blue-800 transition-transform transform hover:scale-105">
            View Properties
          </button>
          <button className="bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-800 transition-transform transform hover:scale-105">
            Contact Now
          </button>
        </div>

        {/* Additional Text Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Why Choose {location.title}?</h2>
          <p className="text-lg text-gray-700 mb-4">
            {location.title} is one of the most sought-after locations for real estate investment due to its strategic location, rapid growth, and diverse opportunities. Whether you're looking for residential or commercial properties, {location.title} offers a perfect blend of modern amenities and cultural heritage.
          </p>
          <p className="text-lg text-gray-700">
            Explore a wide range of properties that suit your needs and budget, and take the next step towards owning your dream property in {location.title}.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">Get in Touch</h2>
          <p className="text-center text-gray-700 mb-6">
            If you have any questions or would like to know more about properties in {location.title}, feel free to reach out to us.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-700 text-white py-2 px-6 rounded-md hover:bg-blue-800 transition-transform transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LocationDetail;
