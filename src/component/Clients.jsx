import React from 'react';
import { logo1, logo2, logo3, logo4, logo5 } from '../assets/images';

function Clients() {
  const clientData = [
    { name: 'UrbanEatery', logo: logo1 },
    { name: 'Mac', logo: logo2 },
    { name: 'Blue Ridge', logo: logo3 },
    { name: 'K.P Capital', logo: logo4 },
    { name: 'Ascension', logo: logo5 },
  ];

  return (
    <div className="bg-slate-50 py-20 my-20">
      <div className="max-w-screen-xl mx-auto text-center mb-10">
        <h1 className="text-2xl sm:text-4xl font-semibold text-blue-900">Our Valuable Clients</h1>
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center text-blue-900">
        {clientData.map((client, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center space-y-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4"
          >
            <img 
              src={client.logo} 
              alt={`${client.name} logo`} 
              className="h-16 w-16 sm:h-20 sm:w-20 mix-blend-multiply" 
            />
            <span className="text-sm sm:text-lg font-medium">{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;
