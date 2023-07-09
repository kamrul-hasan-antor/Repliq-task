import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="md:flex h-[200vh] w-11/12 lg:w- max-w-screen-2xl mx-auto py-6">
      <div className="bg-red-00 w-full">
        <div className="text-center md:w-[45%] mx-auto py-2 pb-6">
          <h2 className="text-lg md:text-2xl font-semibold pb-2">
            Popular Products for{" "}
            <span className="text-[#0d7a52]">Daily Shopping</span>
          </h2>
          <p>
            See all our popular products in this week. You can choose your daily
            needs products from this list and get some special offer with free
            shipping.
          </p>
        </div>

        {/* products */}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 ">
          {products?.products?.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-white border border-gray-500/20 rounded-md shadow-sm group/img"
              >
                <img
                  className="rounded-t-md group-hover/img:scale-100 scale-90 ease-in duration-300"
                  src={product.imageURL}
                  alt=""
                />
                <div className="px-3 pb-3 text-sm">
                  <p>{product.name}</p>
                  <div className="flex justify-between items-center mt-1 ">
                    <p className="text-base md:text-lg font-semibold">
                      ${product.price}
                    </p>
                    <button className="text-x border border-[#0d7a52]/70 rounded-sm p-1.5 hover:bg-[#0d7a52] group/edit">
                      <svg
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1.5em"
                        width="1.5em"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-[#0d7a52] group-hover/edit:fill-white"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
