import React from "react";

const Slogan = () => {
  return (
    <div className="md:flex h-max w-11/12 lg:w- max-w-screen-2xl mx-auto pt-6">
      <div className=" bg-gradient-to-r from-[#ffedd5]/70 to-[#ffedd5]/30 rounded-lg w-full flex flex-col lg:flex-row justify-between px-6 py-8 items-center text-center lg:text-start">
        <div>
          <h2 className="text-lg md:text-2xl font-semibold pb-1">
            <span className="text-[#0d7a52]">100% Natural Quality</span> Organic
            Product
          </h2>
          <p>
            See Our latest discounted products from here and get a special{" "}
            <span className="text-[#0d7a52]">discount product</span>{" "}
          </p>
        </div>
        <div>
          <button className="px-6 py-2 text-sm text-white rounded-full bg-[#0d7a52] hover:bg-[#0d7a52]/90 mt-6 md:mt-0">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
