import React from 'react';
import { useParams } from 'react-router-dom';
import { Footer, Header } from '../component';

const OnlineServices = () => {
  const { serviceId } = useParams();

  const renderServiceContent = () => {
    switch (serviceId) {
      case 'service1':
        return (
          <div className='flex flex-col lg:flex-row'>
            <div className='flex-1'>
              <p className='mb-4'>Our comprehensive property management services provide unparalleled attention to detail and professionalism, ensuring that every aspect of your property is meticulously handled. We specialize in a wide range of services, from routine inspections and preventive maintenance to urgent repairs, all tailored to maintain your property in top condition. Our team is dedicated to offering seamless and efficient solutions, addressing every need with precision and care. By choosing us, you gain a trusted partner committed to enhancing the value of your property, offering you peace of mind and confidence that your investment is in capable hands.</p>
              <ul className='list-disc pl-5 mb-4'>
                <li>24/7 support and emergency services</li>
                <li>Routine property inspections</li>
                <li>Maintenance and repair services</li>
              </ul>
              <button className='bg-blue-500 text-white p-2 rounded-lg mb-4'>Learn More</button>
              <div className='flex'>
                <img src="/images/property-management.jpg" alt="Property Management" className='w-full h-auto mr-4'/>
                <img src="/images/logo1.png" alt="Property Management Logo" className='w-24 h-auto'/>
              </div>
            </div>
          </div>
        );
      case 'service2':
        return (
          <div className='flex flex-col lg:flex-row'>
            <div className='flex-1'>
              <p className='mb-4'>Our custom property management services are crafted to address your unique needs and preferences. We understand that every property and owner has distinct requirements, which is why we offer tailored solutions to ensure optimal results. Whether you require specialized maintenance, personalized reporting, or other bespoke services, our team is dedicated to customizing our approach to fit your exact specifications. By working closely with you, we deliver a property management experience that is not only efficient but also aligns perfectly with your goals, providing you with exceptional service and peace of mind.</p>
              <ul className='list-disc pl-5 mb-4'>
                <li>Tailored service plans</li>
                <li>Flexible scheduling options</li>
                <li>Customizable reporting features</li>
              </ul>
              <button className='bg-blue-500 text-white p-2 rounded-lg mb-4'>Get a Quote</button>
              <div className='flex'>
                <img src="/images/custom-management.jpg" alt="Custom Management" className='w-full h-auto mr-4'/>
                <img src="/images/logo2.png" alt="Custom Management Logo" className='w-24 h-auto'/>
              </div>
            </div>
          </div>
        );
      case 'service3':
        return (
          <div className='flex flex-col lg:flex-row'>
            <div className='flex-1'>
              <p className='mb-4'>Our efficient property management services are designed to ensure smooth operations and high tenant satisfaction. We prioritize clear and effective communication, addressing concerns promptly and providing swift solutions to maintain your property in excellent condition. Our approach is centered around proactive management, where we anticipate and address issues before they become problems. By focusing on both the operational efficiency of your property and the satisfaction of your tenants, we create a seamless experience that enhances the value of your investment. Trust us to keep your property running smoothly and to provide a positive living experience for your tenants, ensuring long-term success and peace of mind.</p>
              <ul className='list-disc pl-5 mb-4'>
                <li>Effective tenant communication</li>
                <li>Timely rent collection</li>
                <li>Detailed property reports</li>
              </ul>
              <button className='bg-blue-500 text-white p-2 rounded-lg mb-4'>Contact Us</button>
              <div className='flex'>
                <img src="/images/efficient-management.jpg" alt="Efficient Management" className='w-full h-auto mr-4'/>
                <img src="/images/logo3.png" alt="Efficient Management Logo" className='w-24 h-auto'/>
              </div>
            </div>
          </div>
        );
      case 'service4':
        return (
          <div className='flex flex-col lg:flex-row'>
            <div className='flex-1'>
              <p className='mb-4'>Protect your property with our advanced security services, designed to offer comprehensive safety solutions. We provide a full spectrum of security measures, including state-of-the-art surveillance systems, sophisticated alarm setups, and real-time monitoring to safeguard your property. Our expert team tailors each solution to meet your specific security needs, ensuring robust protection against potential threats. With our proactive approach, we focus on preventing security breaches and providing you with peace of mind. Trust us to deliver reliable, cutting-edge security that keeps your property safe and secure, allowing you to feel confident and protected at all times.</p>
              <ul className='list-disc pl-5 mb-4'>
                <li>24/7 surveillance systems</li>
                <li>Advanced alarm systems</li>
                <li>Regular security audits</li>
              </ul>
              <button className='bg-blue-500 text-white p-2 rounded-lg mb-4'>Request Security Info</button>
              <div className='flex'>
                <img src="/images/security.jpg" alt="Security Services" className='w-full h-auto mr-4'/>
                <img src="/images/logo4.png" alt="Security Services Logo" className='w-24 h-auto'/>
              </div>
            </div>
          </div>
        );
      case 'service5':
        return (
          <div className='flex flex-col lg:flex-row'>
            <div className='flex-1'>
              <p className='mb-4'>Our expert rent management services are designed to maximize your rental income and streamline property management. We offer a comprehensive range of solutions, including thorough tenant screening to ensure high-quality renters, efficient rent collection to ensure timely payments, and detailed financial reporting to keep you informed about your property’s performance. Our approach is tailored to optimize your rental experience, balancing proactive management with attentive care. By handling these crucial aspects with precision, we help you achieve a hassle-free management process, improve tenant satisfaction, and ultimately enhance the profitability of your rental property. Trust us to provide professional and effective management solutions that drive success and deliver peace of mind.</p>
              <ul className='list-disc pl-5 mb-4'>
                <li>Comprehensive tenant screening</li>
                <li>Efficient rent collection</li>
                <li>Detailed financial reporting</li>
              </ul>
              <button className='bg-blue-500 text-white p-2 rounded-lg mb-4'>Start Managing</button>
              <div className='flex'>
                <img src="/images/rent-management.jpg" alt="Rent Management" className='w-full h-auto mr-4'/>
                <img src="/images/logo5.png" alt="Rent Management Logo" className='w-24 h-auto'/>
              </div>
            </div>
          </div>
        );
      case 'service6':
        return (
          <div className='flex flex-col lg:flex-row'>
            <div className='flex-1'>
              <p className='mb-4'>Our legal services for property management cover all aspects of property law. We assist with lease agreements, legal consultations, and dispute resolutions to ensure compliance and protect your interests.</p>
              <ul className='list-disc pl-5 mb-4'>
                <li>Drafting and reviewing lease agreements</li>
                <li>Providing legal consultations</li>
                <li>Handling property disputes</li>
              </ul>
              <button className='bg-blue-500 text-white p-2 rounded-lg mb-4'>Get Legal Help</button>
              <div className='flex'>
                <img src="/images/legal-services.jpg" alt="Legal Services" className='w-full h-auto mr-4'/>
                <img src="/images/logo6.png" alt="Legal Services Logo" className='w-24 h-auto'/>
              </div>
            </div>
          </div>
        );
      case 'service7':
        return (
          <div className='flex flex-col lg:flex-row'>
            <div className='flex-1'>
              <p className='mb-4'>Effectively resolve property disputes with our specialized redressal services, designed to address and settle conflicts with expertise and care. Our comprehensive approach includes professional mediation to facilitate constructive dialogue and negotiations, as well as robust legal support to navigate complex issues and ensure fair outcomes. We understand the nuances of property-related disputes and work diligently to provide tailored solutions that address your specific situation. By offering both mediation and legal assistance, we aim to resolve conflicts efficiently while minimizing stress and disruption. Trust our team to handle disputes with professionalism, ensuring that your property interests are protected and conflicts are resolved effectively, allowing you to move forward with confidence.</p>
              <ul className='list-disc pl-5 mb-4'>
                <li>Conflict resolution services</li>
                <li>Mediation and negotiation</li>
                <li>Legal support for disputes</li>
              </ul>
              <button className='bg-blue-500 text-white p-2 rounded-lg mb-4'>Seek Assistance</button>
              <div className='flex'>
                <img src="/images/dispute-resolution.jpg" alt="Dispute Resolution" className='w-full h-auto mr-4'/>
                <img src="/images/logo7.png" alt="Dispute Resolution Logo" className='w-24 h-auto'/>
              </div>
            </div>
          </div>
        );
      case 'service8':
        return (
          <div className='flex flex-col lg:flex-row'>
            <div className='flex-1'>
              <p className='mb-4'>Discover your ideal property with our comprehensive listings of new and exciting options. Our extensive database features a diverse selection of fresh properties, each accompanied by detailed descriptions and high-quality images to give you a clear understanding of what’s available. We provide real-time updates to ensure you have the most current information, helping you stay ahead in a competitive market. Our user-friendly platform and personalized search tools are designed to make your property search efficient and effective. Whether you’re looking for a new home or investment opportunity, our service offers the insights and accuracy you need to find the perfect match that fits your needs and preferences.</p>
              <ul className='list-disc pl-5 mb-4'>
                <li>Wide selection of new properties</li>
                <li>Detailed property descriptions</li>
                <li>Real-time property updates</li>
              </ul>
              <button className='bg-blue-500 text-white p-2 rounded-lg mb-4'>Browse Properties</button>
              <div className='flex'>
                <img src="/images/fresh-properties.jpg" alt="Fresh Properties" className='w-full h-auto mr-4'/>
                <img src="/images/logo8.png" alt="Fresh Properties Logo" className='w-24 h-auto'/>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div>
            <p>Please select a service from the Online Services menu.</p>
          </div>
        );
    }
  };

  return (
    <>
      <Header/>
      <div className='p-5'>
        <h2 className='text-2xl font-semibold mb-4'>Online Services</h2>
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:w-1/2 w-full lg:h-96 bg-gray-200 mb-4 lg:mb-0'>
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
          <div className='lg:w-1/2 w-full lg:pl-8'>
            <h3 className='text-xl font-medium mb-4'>Contact Us for {serviceId.replace(/^\w/, (c) => c.toUpperCase())}</h3>
            {renderServiceContent()}
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
      <Footer/>
    </>
  );
};

export default OnlineServices;
