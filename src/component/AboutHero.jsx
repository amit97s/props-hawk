import React from "react";
import AboutWallpaper from "../assets/images/AboutWallpaper.jpg"; // Import the image
import { signup } from "../assets/images";

function AboutHero() {
  return (
    <div className="max-w-screen-xl flex justify-center mx-auto">
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(${signup})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "contain",
        }}
      ></div>
    </div>
  );
}

export default AboutHero;
