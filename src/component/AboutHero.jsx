import React from 'react';
import AboutWallpaper from '../assets/images/AboutWallpaper.jpg'; // Import the image

function AboutHero() {
  return (
    <div className="max-w-screen-xl flex justify-center mx-auto">
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(${AboutWallpaper})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
    </div>
  );
}

export default AboutHero;
