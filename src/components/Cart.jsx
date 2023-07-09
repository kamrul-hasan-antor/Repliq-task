import React, { useState } from "react";
import { BsBagCheck } from "react-icons/bs";
const Cart = () => {
  const [showCart, setShowCart] = useState(false);

  //   console.log(showCart);

  return (
    <div>
      <div
        onClick={() => setShowCart(!showCart)}
        className="fixed top-1/2 -translate-y-1/2 right-0 cursor-pointer"
      >
        <div className=" bg-[#eef2ff] pt-2 h-28 w-24 rounded-l-md flex flex-col justify-between items-center">
          <BsBagCheck className="text-[#0d7a52]" size={24} />
          <p className="text-sm">1 item</p>
          <p className="bg-[#0d7a52] text-white w-full text-center py-2 rounded-b-md">
            $1500.00
          </p>
        </div>
      </div>

      <div
        className={`${
          showCart ? "fixed" : "hidden"
        } inset-0 z-50 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center`}
      >
        <div className="relative bg-[#f5f5f5] ring-2 ring-blue-500/20 w-11/12 md:w-3/5 max-w-screen-lg rounded-md py-6 px-2 md:p-6">
          antor
        </div>
      </div>
    </div>
  );
};

export default Cart;
