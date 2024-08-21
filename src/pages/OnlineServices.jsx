import React from 'react';
import { useParams } from 'react-router-dom';
import { Footer, Header } from '../component';

const serviceContent = {
  service1: {
    title: 'Comprehensive Property Management',
    description: 'Our comprehensive property management services ensure your property is well-maintained and efficiently managed. We handle everything from tenant screenings to maintenance requests, ensuring a hassle-free experience for property owners.',
    points: [
      '24/7 Maintenance Support',
      'Tenant Screening and Placement',
      'Regular Property Inspections'
    ],
    image: 'path/to/property-management.jpg'
  },
  service2: {
    title: 'Custom Property Management Solutions',
    description: 'We offer tailored property management solutions to meet your specific needs. Whether you require specialized services or a unique approach, our team is equipped to handle all your property management challenges.',
    points: [
      'Tailored Service Packages',
      'Flexible Management Options',
      'Dedicated Account Manager'
    ],
    image: 'path/to/custom-management.jpg'
  },
  service3: {
    title: 'Standard Property Management Services',
    description: 'Our standard property management services cover all the essentials for efficient property management. From lease agreements to rent collection, we ensure your property operates smoothly and effectively.',
    points: [
      'Lease Agreement Management',
      'Rent Collection',
      'Tenant Communication'
    ],
    image: 'path/to/standard-management.jpg'
  },
  service4: {
    title: 'Property Security Services',
    description: 'Enhance the security of your property with our specialized security services. We provide comprehensive security solutions to protect your property and give you peace of mind.',
    points: [
      '24/7 Security Surveillance',
      'Alarm Systems',
      'On-site Security Personnel'
    ],
    image: 'path/to/security-services.jpg'
  },
  service5: {
    title: 'Rent Management Solutions',
    description: 'Our rent management solutions streamline the rent collection process, making it easier for both landlords and tenants. We offer tools and services to ensure timely and efficient rent management.',
    points: [
      'Automated Rent Collection',
      'Online Payment Options',
      'Rent Tracking and Reporting'
    ],
    image: 'path/to/rent-management.jpg'
  },
  service6: {
    title: 'Legal Services for Property Management',
    description: 'Navigate the legal complexities of property management with our expert legal services. We provide advice and assistance on lease agreements, tenant disputes, and other legal matters.',
    points: [
      'Lease Agreement Review',
      'Tenant Dispute Resolution',
      'Legal Compliance Assistance'
    ],
    image: 'path/to/legal-services.jpg'
  },
  service7: {
    title: 'Property Dispute Redressal',
    description: 'Resolve property-related disputes effectively with our dispute redressal services. We offer mediation and resolution services to address conflicts and ensure a fair outcome.',
    points: [
      'Mediation Services',
      'Conflict Resolution',
      'Legal Guidance'
    ],
    image: 'path/to/dispute-redressal.jpg'
  },
  service8: {
    title: 'Fresh Properties Available',
    description: 'Explore our selection of fresh properties available for rent or purchase. We offer a variety of options to suit your needs and preferences.',
    points: [
      'Wide Range of Properties',
      'Detailed Property Listings',
      'Assistance with Property Selection'
    ],
    image: 'path/to/fresh-properties.jpg'
  }
};

const OnlineServices = () => {
  const { serviceId } = useParams();
  const service = serviceContent[serviceId];

  if (!service) {
    return <p>Service not found. Please select a valid service from the Online Services menu.</p>;
  }

  return (
    <>
      <Header />
      <div className='p-5'>
        <h2 className='text-2xl font-semibold mb-4'>Online Services</h2>
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:w-1/2 w-full lg:pl-8'>
            <h3 className='text-xl font-medium mb-4'>{service.title}</h3>
            <p className='mb-4'>{service.description}</p>
            <ul className='list-disc list-inside mb-4'>
              {service.points.map((point, index) => (
                <li key={index} className='flex items-center mb-2'>
                  <svg className='w-4 h-4 mr-2 text-blue-500' fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12 5.293L16.707 10l1.414-1.414L12 2.707 5.879 8.586l1.414 1.414L12 5.293z'/>
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
            <img src={service.image} alt={service.title} className='w-full h-auto mb-4 rounded-lg shadow-lg' />
          </div>
          <div className='lg:w-1/2 w-full lg:pl-8'>
            <div className='w-full h-96 bg-gray-200 mb-4 lg:mb-0'>
              {/* Embed your map here */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094507!2d144.953736315318!3d-37.81627917975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f7e803%3A0xabcb3e6d1e1e29b1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1634011893066!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
            <form className='mt-6 flex flex-col gap-4'>
              <input 
                type="text" 
                placeholder="Name" 
                className='border border-gray-300 p-2 rounded-lg'
              />
              <input 
                type="text" 
                placeholder="Phone Number" 
                className='border border-gray-300 p-2 rounded-lg'
              />
              <input 
                type="text" 
                placeholder="Subject" 
                className='border border-gray-300 p-2 rounded-lg'
              />
              <textarea 
                placeholder="Message" 
                className='border border-gray-300 p-2 rounded-lg h-32'
              ></textarea>
              <button 
                type="submit" 
                className='bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OnlineServices;
