import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Slogan from "../components/Slogan";

const Home = () => {
  return (
    <div className="text-sm md:text-base">
      <Header />
      <Slogan />
      <Products />
    </div>
  );
};

export default Home;
