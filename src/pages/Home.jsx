import React from "react";
import {
  CallUs,
  Footer,
  Header,
  Hero,
  HomeWhyUs,
  PropAboutHome,
  PropertyLoc,
  PropertyType,
  Slider,
} from "../component";
import { FaHome } from "react-icons/fa";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { MdApartment } from "react-icons/md";
import { SiBandsintown } from "react-icons/si";
import { MdVilla } from "react-icons/md";
//
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { GiHouseKeys } from "react-icons/gi";
import { HiHomeModern } from "react-icons/hi2";

function Home() {
  return (

    <div>
      <Header />
       <Hero />
      <PropertyType
        heading={"Explore Apartment Types"}
        DataProp={[
          <FaHome />,
          <PiBuildingOfficeFill />,
          <MdApartment />,
          <SiBandsintown />,
          <MdVilla />,
        ]}
        names={["House's", "Building", "Apartment's", "TownHome's", "Bungalow"]}
      />
    <Slider/>

      <PropAboutHome />
      <PropertyType
        heading={"Find a Perfect Home"}
        DataProp={[
          <FaUsersViewfinder />,
          <FaUsers />,
          <SiGoogledocs />,
          <GiHouseKeys />,
          <HiHomeModern />,
        ]}
        names={[
          "Find Property",
          "Meet Retailer",
          "Documents",
          "Take the keys",
          "Sweet home",
        ]}
      />
      <HomeWhyUs />
      <CallUs />
      <PropertyLoc />
      <Footer />  
     
    </div>
  );
}

export default Home;
