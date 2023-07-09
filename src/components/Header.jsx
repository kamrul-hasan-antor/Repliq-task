import React from "react";
import Slider from "./Slider";

const Header = () => {
  return (
    <div className="md:flex h-max w-11/12 lg:w- max-w-screen-2xl mx-auto py-6">
      <div className="flex flex-col lg:flex-row w-full">
        {/* slider */}
        <div className="lg:w-2/3 w-full h-full">
          <Slider />
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-4 lg:grid-cols-2 mt-4 lg:mt-0 lg:px-2 gap-2">
          {/* No 1 */}
          <div className="p-2 border border-[#0d7a52]/40 rounded-md text-center py-3">
            <img
              src="https://greenbee-2.myshopify.com/cdn/shop/files/v-1_50x.png?v=1613769214"
              alt=""
              className="inline my-2"
            />
            <div>
              <p className="font-medium">Fresh Fruits</p>
              <small className="text-gray-600 text-xs">
                Apple, Orange, Watermelon, Banana Pineapple, Grapes...
              </small>
            </div>
          </div>

          {/* No 2 */}
          <div className="p-2 border border-[#0d7a52]/40 rounded-md text-center py-3">
            <img
              src="https://greenbee-2.myshopify.com/cdn/shop/files/v-2_50x.png?v=1613769214"
              alt=""
              className="inline my-2"
            />
            <div>
              <p className="font-medium">Vegetables</p>
              <small className="text-gray-600 text-xs">
                Cabbage, Onion, Kale, Parsley Garlic, Asparagus...
              </small>
            </div>
          </div>

          {/* No 3 */}
          <div className="p-2 border border-[#0d7a52]/40 rounded-md text-center py-3">
            <img
              src="https://greenbee-2.myshopify.com/cdn/shop/files/v-4_50x.png?v=1613769214"
              alt=""
              className="inline my-2"
            />
            <div>
              <p className="font-medium">Tea & Coffee</p>
              <small className="text-gray-600 text-xs">
                Leamon tea, Peach tea, Milk tea Weight loss tea, Coffee ...
              </small>
            </div>
          </div>

          {/* No 4 */}
          <div className="p-2 border border-[#0d7a52]/40 rounded-md text-center py-5">
            <img
              src="https://greenbee-2.myshopify.com/cdn/shop/files/v-6_50x.png?v=1613769214"
              alt=""
              className="inline my-2"
            />
            <div>
              <p className="font-medium">Fresh Meats</p>
              <small className="text-gray-600 text-xs">
                Mutton, Beef, Lamb chops, Salmon, Chicken, Sausage...
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
