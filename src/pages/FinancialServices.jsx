import React from 'react';
import { useParams } from 'react-router-dom';
import { Footer, Header } from '../component';

const locationData = {
  noida: {
    title: "Noida",
    description: "Noida is a planned city located in the National Capital Region of India.",
    // Add more data as needed
  },
  delhi: {
    title: "Delhi",
    description: "Delhi is the capital territory of India, and a massive metropolitan area in the country’s north.",
    // Add more data as needed
  },
  kolkata: {
    title: "Kolkata",
    description: "Kolkata (formerly Calcutta) is the capital of India’s West Bengal state.",
    // Add more data as needed
  },
  // Add more locations if needed
};

const FinancialServices = () => {
  const { place } = useParams();
  const location = locationData[place.toLowerCase()];

  if (!location) {
    return <div>Location not found!</div>;
  }

  return (

    <div>
        <Header/>
        <div className='max-w-screen-xl mx-auto py-10'>
      <h1 className='text-3xl font-bold mb-4'>{location.title}</h1>
      <p className='text-lg'>{location.description}</p>
    </div>
    <Footer/>
    </div>
  );
}

export default FinancialServices;
