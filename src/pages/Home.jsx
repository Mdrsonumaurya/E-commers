import React, { useEffect } from "react";
// import HeroImage from "../assets/Images/Hero.jpg";
// import Hero2Image from "../assets/Images/Hero2.jpg";
import SonuImages from "../assets/Images/pk.jpg";
import InfoSection from "../component/InfoSection";
import CategoriesSimple from "../component/CategoriesSimple";
import ShopProduct from "../component/ShopProduct";
import Category from "../component/Category";

const Home = () => {
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <Category />
      <InfoSection />
      <CategoriesSimple />
      <ShopProduct />
    </div>
  );
};

export default Home;
