import React from 'react';
import { useParams } from 'react-router-dom';

const onlineServiceData = {
  'rent-agreement': {
    title: "Online Rent Agreement",
    description: "This service allows users to create, manage, and sign rent agreements online without the need for physical paperwork. It provides a hassle-free and legally compliant way to handle rental agreements from anywhere. You can customize terms, add digital signatures, and share the final document with the concerned parties instantly.",
  },
  'account-status': {
    title: "Online Account Status",
    description: "Track the status of your account in real-time through this service. Whether it's rent payments, property-related transactions, or service subscriptions, you can access your account details, check payment history, and get updates without visiting the office. This service ensures transparency and ease of access to your financial records.",
  },
  'digital-docs': {
    title: "Digital Documentation",
    description: "Securely store, manage, and access all your important property documents online. This service digitizes your paperwork, making it easier to search, retrieve, and share documents when needed. Say goodbye to the hassle of physical storage and enjoy the convenience of cloud-based document management.",
  },
  'virtual-tours': {
    title: "Virtual Property Tours",
    description: "Experience properties from the comfort of your home with virtual property tours. This service provides 360-degree views and immersive experiences of properties, allowing you to explore every detail before making any decisions. It's a great way to shortlist or even finalize properties without needing to visit them in person.",
  },
  // Add more online services if needed
};

const OnlineServices = () => {
  const { service } = useParams();
  const onlineService = onlineServiceData[service.toLowerCase()];

  if (!onlineService) {
    return <div>Service not found!</div>;
  }

  return (
    <div className='max-w-screen-xl mx-auto py-10'>
      <h1 className='text-3xl font-bold mb-4'>{onlineService.title}</h1>
      <p className='text-lg'>{onlineService.description}</p>
    </div>
  );
}

export default OnlineServices;
