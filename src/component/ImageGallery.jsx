import React from 'react';
import {
  AboutGal1,
  AboutGal2,
  AboutGal3,
  AboutGal4,
  AboutGal5,
  AboutGal6,
  AboutGal7,
  AboutGal8
} from '../assets/images';

function ImageGallery() {
  const images = [
    AboutGal1, AboutGal2, AboutGal3, AboutGal4,
    AboutGal5, AboutGal6, AboutGal7, AboutGal8
  ];

  return (
    <div className="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden group h-64 w-full sm:h-52 sm:w-full md:h-48 lg:h-56 flex items-center justify-center bg-gray-200 rounded-lg"
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-lg">
              <span className="text-white text-lg font-semibold">Image {index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
