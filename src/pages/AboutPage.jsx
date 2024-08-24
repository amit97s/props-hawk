import React from "react";
import {
  AboutHero,
  Clients,
  Footer,
  Header,
  ImageGallery,
  PropAboutHome,
  PropertyType,
} from "../component";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { GiHouseKeys } from "react-icons/gi";
import { HiHomeModern } from "react-icons/hi2";
import { BsBank } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
import { PiHandshakeDuotone } from "react-icons/pi";
import { IoTrophySharp } from "react-icons/io5";
GiHouseKeys;
function AboutPage() {
  return (
    <>
      <Header />
      <AboutHero />
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
        jack={"name"}
      />
      <ImageGallery />
      {/* <Testimonial/> */}
      {/* <TotalSold sold={[<BsBank/>,<SlNotebook/>,<PiHandshakeDuotone/>,<IoTrophySharp/>]}
      count={["500+","710+","840+","20+"]}
        
      /> */}
      <PropertyType
        heading={"Find a Perfect Home"}
        jacks={[
          "Sold Houses",
          "Daily Listings",
          "Expert Agents",
          "Won Awards",
          "Happy housing",
        ]}
        DataProp={[
          <BsBank />,
          <SlNotebook />,
          <PiHandshakeDuotone />,
          <IoTrophySharp />,
          <HiHomeModern />,
        ]}
        names={["500+", "710+", "840+", "20+", "Sweet home"]}
      />
      <Clients />
      <Footer />
    </>
  );
}

export default AboutPage;
