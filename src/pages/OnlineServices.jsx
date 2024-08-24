import React from "react";
import { useParams } from "react-router-dom";
import { Footer, Header } from "../component";
import { FaHandPointRight } from "react-icons/fa";
import {
  compre1,
  // compre2,
  custom1,
  manage2,
  manage3,
  manage4,
  manage5,
  manage6,
  management1,
} from "../assets/images";

const serviceContent = {
  service1: {
    title: "Comprehensive Property Management",
    text: "Overview",
    description:
      "At Prophawk, we offer comprehensive property management services designed to cover every aspect of property ownership with precision and care. Our team of experienced professionals is dedicated to ensuring your property operates smoothly and efficiently, providing you with peace of mind and a hassle-free experience.Our services include everything from drafting and managing lease agreements to timely rent collection, ensuring a steady income stream. We prioritize effective communication with tenants, addressing their needs promptly and fostering a positive living environment. Routine maintenance and repairs are handled efficiently, keeping your property in excellent condition and preserving its value. Additionally, we conduct regular property inspections to identify and resolve any issues before they escalate. By choosing Prophawk’s comprehensive property management services, you can focus on other important aspects of your life, knowing that your investment is in capable hands. Let us handle the complexities of property management, so you can enjoy the benefits of property ownership without the headaches.",
    overview:
      "Comprehensive property management offers end-to-end services that cover all aspects of managing a property, from tenant screening and rent collection to maintenance and legal compliance. This approach ensures that property owners can maximize their investment's value without the day-to-day hassles. Key services include regular property inspections, financial reporting, and tailored management plans that cater to specific owner needs. By handling everything from minor repairs to strategic planning, comprehensive property management provides a stress-free experience, allowing owners to focus on other priorities while their property remains well-maintained, profitable, and legally compliant.",
    points: [
      "24/7 Maintenance Support",
      "Tenant Screening and Placement",
      "Regular Property Inspections",
      "Automated Lease Agreement Generation",
      "Online Payment Integration",
      "Tenant Screening Services",
    ],
    image: compre1,
  },
  service2: {
    title: "Custom Property Management Solutions",
    text: "Overview",
    overview:
      "Custom property management solutions offer tailored strategies to meet the unique needs of each property owner. These solutions provide personalized services such as bespoke tenant screenings, customized maintenance plans, and flexible management options. By aligning management practices with the property’s specific requirements and the owner's goals, custom solutions enhance the property's value and appeal. This approach ensures efficient management, effective communication, and a high level of service, providing property owners with a seamless and stress-free experience.",
    description:
      "Custom property management solutions are designed to cater to the unique needs of property owners who require a tailored approach to managing their assets. Unlike standard management services, custom solutions offer a personalized strategy that aligns with specific requirements and preferences. This service typically includes bespoke tenant screenings, customized maintenance plans, and flexible management options, ensuring that each aspect of property management is handled with precision and care.With custom property management, property owners benefit from a dedicated account manager who provides personalized attention and support. This approach allows for more effective communication and faster resolution of issues. Additionally, the management plans are adapted to the unique characteristics of the property and the owner's goals, enhancing the property's value and appeal. Whether it’s adjusting to seasonal changes, addressing specific tenant needs, or implementing unique maintenance protocols, custom property management ensures a high level of service tailored to your property’s distinct requirements. This personalized approach provides peace of mind, knowing that your property is in expert hands.",
    points: [
      "Tailored Service Packages",
      "Flexible Management Options",
      "Dedicated Account Manager",
      "Customizable Solutions",
      "Scalable Service Options",
      "Personalized Support Plans",
    ],
    image: custom1,
  },
  service3: {
    text: "Overview",
    overview:
      "Standard property management services offer a comprehensive solution for landlords looking to streamline the management of their rental properties. These services cover essential tasks such as handling lease agreements, collecting rent, and addressing tenant needs. Routine property inspections and maintenance are also part of the package, ensuring that properties remain in good condition and comply with regulations. By managing these core functions, standard property management services help property owners maintain a hassle-free rental experience, optimize their investment, and keep tenants satisfied.",
    title: "Standard Property Management Services",
    description:
      "Standard property management services provide essential support for maintaining and managing rental properties efficiently. These services typically include managing lease agreements, collecting rent, and handling tenant communications. Standard offerings also encompass routine property inspections, addressing maintenance requests, and ensuring compliance with legal and regulatory requirements. By handling these core responsibilities, property managers help landlords avoid the day-to-day challenges of property management. The goal is to ensure the property remains in good condition, tenants are satisfied, and rental income is maximized. These services are designed to provide a reliable and streamlined approach to property management, allowing property owners to focus on other aspects of their lives while their investment is professionally managed. With a focus on efficiency and tenant satisfaction, standard property management services are a practical choice for many landlords seeking to simplify their property management tasks.",
    points: [
      "Lease Agreement Management",
      "Rent Collection",
      "Tenant Communication",
      "Tenant Relations Management",
      "Rental Payment Processing",
      "Lease Agreement Oversight",
    ],
    image: management1,
  },
  service4: {
    title: "Property Security Services",
    text: "Overview",
    overview:
      "Property security services focus on safeguarding your property from potential threats with a multi-faceted approach. These services typically include 24/7 surveillance through CCTV cameras, alarm systems to detect unauthorized access, and on-site security personnel for immediate response and deterrence. Access control systems further enhance security by managing entry and exit points. Regular security assessments identify and address vulnerabilities. By integrating these elements, property security services aim to create a safe and secure environment, protecting your property from theft, vandalism, and other security risks, and offering peace of mind.",
    description:
      "Property security services provide a comprehensive approach to safeguarding your property against potential threats and ensuring peace of mind. These services include a range of security measures tailored to meet your specific needs, such as 24/7 surveillance through advanced CCTV systems, which monitor and record activity around the clock. Alarm systems are installed to detect unauthorized access and trigger immediate alerts, enhancing your property's protection. On-site security personnel can be deployed to patrol the premises, respond to incidents, and deter criminal activity through a visible security presence. Additionally, property security services often include access control systems to manage who enters and exits the property, and regular security assessments to identify and address potential vulnerabilities. By implementing these measures, property security services aim to prevent theft, vandalism, and other security breaches, ensuring the safety of your property and providing a secure environment for tenants and visitors alike",
    points: [
      "24/7 Security Surveillance",
      "Alarm Systems",
      "On-site Security Personnel",
      "Round-the-Clock Monitoring",
      "Advanced Alarm Technology",
      "In-House Security Staff",
    ],
    image: manage2,
  },
  service5: {
    text: "Overview",
    title: "Rent Management Solutions",
    overview:
      "Rent management solutions streamline the rental process by offering automated tools for collecting rent, tracking payments, and managing multiple properties. These solutions provide landlords with efficient reporting and financial tracking, while tenants benefit from the convenience of online payment options and automated reminders. With features for handling maintenance requests and lease renewals, rent management solutions simplify property management, making the rental experience more efficient and user-friendly for both parties.",
    description:
      "Rent management solutions streamline the rental process, making it easier for both landlords and tenants. These services automate various aspects of rent collection and management, including setting up online payment systems for convenient transactions and tracking rent payments. Automated reminders help ensure timely payments and reduce late fees. Advanced reporting tools offer insights into payment histories and financial performance, aiding landlords in managing their portfolios efficiently. Rent management solutions also handle tenant inquiries, maintenance requests, and lease renewals, simplifying property management tasks. By integrating these solutions, landlords can reduce administrative burdens and improve cash flow management, while tenants benefit from a more convenient and transparent rental experience. Overall, rent management solutions provide a comprehensive approach to managing rental properties, enhancing efficiency and ensuring a smooth and hassle-free rental process for all parties involved.",
    points: [
      "Automated Rent Collection",
      "Online Payment Options",
      "Rent Tracking and Reporting",
      "Effortless Payment Processing",
      "Digital Transaction Management",
      "Real-Time Rent Monitoring",
    ],
    image: manage3,
  },
  service6: {
    text: "Overview",
    title: "Legal Services for Property Management",
    overview:
      "Legal services for property management ensure that property owners and managers adhere to legal requirements and handle disputes efficiently. They provide expert support in drafting and reviewing lease agreements, ensuring compliance with local laws. These services also assist in resolving tenant disputes and managing legal issues, helping to maintain smooth property operations and avoid costly legal challenges. By offering proactive legal guidance and dispute resolution, these services safeguard property interests and ensure compliance with property management regulations.",
    description:
      "Legal services for property management are crucial for navigating the complexities of property law. These services offer expert advice on drafting and reviewing lease agreements to ensure compliance with local regulations and protect your interests. They assist in resolving tenant disputes, whether related to lease violations or maintenance issues, through mediation or legal proceedings. Additionally, they provide guidance on legal compliance, helping property owners adhere to housing laws and regulations. With a focus on preventing and managing legal issues, property management legal services are designed to safeguard your property and minimize risks. Whether you need help with eviction processes, lease negotiations, or addressing legal challenges, these services provide the expertise and support necessary to navigate the legal aspects of property management effectively.",
    points: [
      "Legal Compliance Review",
      "Lease Agreement Drafting",
      "Tenant Dispute Resolution",
      "Eviction Assistance",
      "Lease Agreement Consultation",
      "Tenant Dispute Mediation",
    ],
    image: manage4,
  },
  service7: {
    text: "Overview",
    title: "Tenant Management and Relations",
    overview:
      "Tenant management and relations services focus on maintaining positive and effective communication between landlords and tenants. These services include handling tenant inquiries, addressing concerns, and ensuring lease compliance. They help create a harmonious living environment by promptly resolving issues, conducting regular property inspections, and providing ongoing support. By fostering good tenant relations, these services reduce turnover rates and ensure a stable rental income for property owners.",
    description:
      "Tenant management and relations services are designed to foster positive relationships between property owners and tenants. Effective communication is key to successful tenant management, and these services ensure that tenant inquiries and concerns are promptly addressed. Property managers play a crucial role in maintaining a harmonious living environment by enforcing lease agreements, conducting regular property inspections, and resolving issues in a timely manner. This proactive approach helps prevent conflicts and misunderstandings, leading to higher tenant satisfaction and retention. By prioritizing tenant needs and providing ongoing support, tenant management services contribute to a positive rental experience for all parties involved. Additionally, strong tenant relations can lead to lower turnover rates, reduced vacancies, and a stable rental income for property owners, making tenant management and relations services an essential component of successful property management.",
    points: [
      "Tenant Communication",
      "Issue Resolution",
      "Lease Compliance Monitoring",
      "Tenant Support Services",
      "Tenant Inquiry Handling",
      "Conflict Resolution",
    ],
    image: manage5,
  },
  service8: {
    text: "Overview",
    title: "Property Marketing and Advertising",
    overview:
      "Property marketing and advertising services are essential for attracting potential tenants and minimizing vacancies. These services include professional photography, targeted online advertising, and listing management across multiple platforms. By showcasing your property effectively, these services increase its visibility and appeal, helping to secure quality tenants quickly. Strategic marketing campaigns ensure that your property reaches the right audience, maximizing occupancy rates and rental income.",
    description:
      "Property marketing and advertising services are designed to help property owners attract potential tenants and reduce vacancies by showcasing their properties effectively. These services typically include professional photography and videography to highlight the property's best features, creating visually appealing listings that stand out in a competitive market. In addition, property marketing services leverage online advertising platforms and social media channels to reach a wider audience. By targeting specific demographics and using data-driven strategies, these services ensure that your property is seen by the right people at the right time. Additionally, property marketing includes listing management, where your property is listed on popular rental platforms, and the listings are regularly updated to remain relevant and competitive. With a focus on increasing property visibility and appeal, property marketing and advertising services play a crucial role in attracting quality tenants quickly, minimizing vacancies, and maximizing rental income for property owners.",
    points: [
      "Professional Property Photography",
      "Targeted Online Advertising",
      "Listing Management",
      "Professional Listing Photos",
      "Effective Advertising Campaigns",
      "Property Marketing Services",
    ],
    image: manage6,
  },
};

const OnlineServices = () => {
  const { serviceId } = useParams();
  const service = serviceContent[serviceId];

  if (!service) {
    return (
      <p>
        Service not found. Please select a valid service from the Online
        Services menu.
      </p>
    );
  }

  return (
    <>
      <Header />
      <div className="p-5 max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 underline px-3 mt-7">
          Online Services
        </h2>
        <div className="">
          <div className="">
            <div className="flex flex-col lg:flex-row my-8 gap-5 px-3">
              <div className="lg:w-1/2">
                <h3 className="font-semibold text-2xl mb-4">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
              </div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto lg:w-1/2 mb-4 rounded-lg"
              />
            </div>

            <ul className="list-disc list-inside my-8">
              {service.points.map((point, index) => (
                <li key={index} className="flex items-center mb-2 px-3 gap-3">
                  <FaHandPointRight className="text-orange-500 text-xl lg:text-2xl" />
                  <span className="text-base lg:text-lg">{point}</span>
                </li>
              ))}
            </ul>

            <div className="my-14 gap-5 px-3 flex flex-col lg:flex-row">
              <div className="lg:w-full text-center">
                <h2 className="text-2xl lg:text-3xl px-3 mb-10 text-center font-bold">
                  {service.text}
                </h2>
                <p className="px-3">{service.overview}</p>
              </div>
            </div>
          </div>

          <div className="mx-auto flex flex-col lg:flex-row items-center gap-4 lg:pl-8 max-w-screen-xl">
            <div className="w-full lg:w-1/2 h-96 bg-gray-200 mt-12 lg:mt-0">
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
            <form className="mt-6 w-full lg:w-1/2 flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 p-2 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 p-2 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 p-2 rounded-lg w-full"
              />
              <textarea
                placeholder="Message"
                className="border border-gray-300 p-2 rounded-lg h-32 w-full"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 w-full"
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
