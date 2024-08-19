import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { PiGarageLight } from "react-icons/pi";
import { TbGeometry } from "react-icons/tb";
import {
  propertyImg1,
  propertyimg2,
  propertyimg3,
  propertyimg4,
  propertyimg5,
  propertyimg6,
} from "../assets/images";

function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: (i) => (
      <div className="w-4 h-4 bg-gray-400 rounded-full mt-6"></div>
    ),
    dotsClass: "slick-dots flex justify-center space-x-2",
    responsive: [
      {
        breakpoint: 1080, // At screens smaller than 1080px
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 768, // At screens smaller than 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };

  const sliderData = [
    {
      name: "Mountain View Condos",
      place: "Gaya",
      bedroom: "6 Bedroom",
      bathroom: "3 Bathroom",
      garage: "1 Garage",
      sqFt: "720 sq ft",
      img: propertyImg1,
    },
    {
      name: "Luxury Family Home",
      place: "Gaya",
      bedroom: "4 Bedroom",
      bathroom: "2 Bathroom",
      garage: "2 Garage",
      sqFt: "850 sq ft",
      img: propertyimg2,
    },
    {
      name: "Equestrian Condos",
      place: "Gaya",
      bedroom: "5 Bedroom",
      bathroom: "3 Bathroom",
      garage: "1 Garage",
      sqFt: "780 sq ft",
      img: propertyimg3,
    },
    {
      name: "Modern Home",
      place: "Gaya",
      bedroom: "3 Bedroom",
      bathroom: "2 Bathroom",
      garage: "1 Garage",
      sqFt: "650 sq ft",
      img: propertyimg4,
    },
    {
      name: "Classic Villa",
      place: "Gaya",
      bedroom: "4 Bedroom",
      bathroom: "2 Bathroom",
      garage: "2 Garage",
      sqFt: "900 sq ft",
      img: propertyimg5,
    },
    {
      name: "Urban Living",
      place: "Gaya",
      bedroom: "2 Bedroom",
      bathroom: "1 Bathroom",
      garage: "1 Garage",
      sqFt: "600 sq ft",
      img: propertyimg6,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto my-8">
      <SlickSlider {...settings}>
        {sliderData.map((property, index) => (
          <div key={index} className="p-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                src={property.img}
                alt={property.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-between transition-opacity duration-300 ease-in-out hover:bg-opacity-0">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {property.name}
                  </h3>
                  <p className="text-sm text-gray-300">{property.place}</p>
                </div>
                <div className="text-white text-sm mt-4 grid grid-cols-2 gap-1">
                  <div className="flex items-center mb-1">
                    <IoBedOutline className="mr-2" />
                    {property.bedroom}
                  </div>
                  <div className="flex items-center mb-1">
                    <LuBath className="mr-2" />
                    {property.bathroom}
                  </div>
                  <div className="flex items-center mb-1">
                    <PiGarageLight className="mr-2" />
                    {property.garage}
                  </div>
                  <div className="flex items-center">
                    <TbGeometry className="mr-2" />
                    {property.sqFt}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
}

export default SliderComponent;
