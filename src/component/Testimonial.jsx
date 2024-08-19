import React from 'react';
import Slider from 'react-slick';
import { testimonial1, testimonial2, testimonial3, testimonial4, testimonial5, testimonial6, testimonial7, testimonial8, testimonial9 } from '../assets/images';

function Testimonial() {
  const testimonials = [
    {
      image: testimonial1,
      text: "\"This service is amazing! I had a truly wonderful experience from start to finish. The team was incredibly professional and attentive to my needs. They went above and beyond to ensure everything was perfect, and I felt completely taken care of. Their attention to detail was impeccable, and I am absolutely thrilled with the results. I would highly recommend them to anyone looking for top-quality service and a seamless experience.\"",
      name: "John Doe",
    },
    {
      image: testimonial2,
      text: "\"I can't express how satisfied I am with the service provided. From the very beginning, the team was dedicated to ensuring all my requirements were met. They were highly responsive, professional, and made sure every aspect of the project was handled with care. The final result exceeded my expectations, and I am more than pleased. I will definitely be using their services again in the future.\"",
      name: "Jane Smith",
    },
    {
      image: testimonial3,
      text: "\"Working with this team was an absolute pleasure. They truly care about their clients and go out of their way to make sure everything is perfect. Their expertise and commitment to excellence are evident in every detail of their work. I am incredibly happy with the outcome and feel confident recommending their services to others. If you're looking for a reliable and dedicated team, look no further!\"",
      name: "Emily Johnson",
    },
    {
      image: testimonial4,
      text: "\"This was by far the best experience I’ve had with a service provider. They took the time to understand my needs and delivered results that were beyond my expectations. Their dedication to quality and customer satisfaction is unmatched, and it shows in every aspect of their work. I am incredibly grateful for their hard work and will be returning for future projects without hesitation.\"",
      name: "Michael Brown",
    },
    {
      image: testimonial5,
      text: "\"I was blown away by the level of service I received. The team was professional, attentive, and highly skilled in their work. They kept me informed every step of the way and made sure that everything was done to the highest standard. The final product was even better than I had imagined, and I couldn’t be happier with the results. I highly recommend them to anyone in need of their services.\"",
      name: "Sarah Wilson",
    },
    {
      image: testimonial6,
      text: "\"This service exceeded all my expectations. From the initial consultation to the final delivery, everything was handled with the utmost care and professionalism. The team’s attention to detail and commitment to customer satisfaction is truly impressive. I felt valued as a client, and the results speak for themselves. I wouldn’t hesitate to recommend their services to anyone looking for top-notch quality and outstanding customer service.\"",
      name: "David Lee",
    },
    {
      image: testimonial7,
      text: "\"I had a fantastic experience with this team. They were attentive, responsive, and genuinely cared about delivering the best possible results. Their expertise and professionalism were evident throughout the entire process, and I couldn’t be more pleased with how everything turned out. The final product was exactly what I had envisioned, and I am so grateful for their hard work. I will definitely be a returning customer.\"",
      name: "Laura Martinez",
    },
    {
      image: testimonial8,
      text: "\"Choosing this service was one of the best decisions I’ve made. The team was incredible to work with, always going the extra mile to ensure that everything was perfect. Their dedication to quality and customer satisfaction is truly commendable. I am beyond thrilled with the results and couldn’t have asked for a better experience. I highly recommend them to anyone looking for exceptional service and outstanding results.\"",
      name: "Chris Taylor",
    },
    {
      image: testimonial9,
      text: "\"I am extremely impressed with the level of service I received. The team was professional, efficient, and committed to delivering high-quality results. They kept me informed throughout the entire process, ensuring that I was satisfied with every aspect of the project. The final product was exceptional, and I couldn’t be happier. I would highly recommend their services to anyone looking for reliable and top-notch service.\"",
      name: "Jessica Davis",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1900, // 1.9 seconds
    arrows: false,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-md mx-auto py-12 px-4 flex">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4 py-6 bg-gray-100 shadow-lg rounded-lg">
            <img
              src={testimonial.image}
              alt={`Testimonial ${index + 1}`}
              className="w-32 h-32 rounded-full mb-4"
            />
            <p className="text-lg italic mb-2">{testimonial.text}</p>
            <p className="font-bold text-lg">{testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
