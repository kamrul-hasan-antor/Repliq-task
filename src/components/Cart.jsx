import React, { useContext, useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "../context/CartProvider";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { cart, incrementQuantity, decrementQuantity, removeItem } =
    useContext(CartContext);

  console.log(cart.length);

  return (
    <div>
      <div
        onClick={() => setShowCart(!showCart)}
        className="fixed top-1/2 -translate-y-1/2 right-0 cursor-pointer"
      >
        <div className=" bg-[#eef2ff] pt-2 h-28 w-24 rounded-l-md flex flex-col justify-between items-center">
          <BsBagCheck className="text-[#0d7a52]" size={24} />
          <p className="text-sm">
            {cart.reduce((acc, item) => acc + item.quantity, 0)} item
          </p>
          <p className="bg-[#0d7a52] text-white w-full text-center py-2 rounded-b-md">
            $
            {cart
              .reduce((acc, item) => acc + item.quantity * item.price, 0)
              .toFixed(2)}
          </p>
        </div>
      </div>

      {/* side cart */}
      <div
        className={`${
          showCart ? "fixed" : "hidden"
        } inset-0 z-50 bg-black bg-opacity-20 backdrop-blur-sm flex justify-end items-center `}
      >
        <div className="relative bg-[#f5f5f5] w-full md:w-[30%] max-w-screen-lg h-screen flex flex-col">
          <div className="flex justify-between bg-[#eef2ff] px-4">
            <p className="text-xl font-semibold py-5 flex">
              <BsBagCheck className="text-[#0d7a52] mr-2" size={24} /> Shopping
              Cart
            </p>
            <button onClick={() => setShowCart(false)} className="">
              <RxCross2 className="text-[#0d7a52]" size={24} />
            </button>
          </div>

          {/* cart items */}
          <div className="overflow-y-scroll relative h-full scrollbar-none scrollbar-thumb-gray-900 scrollbar-track-gray-100">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between py-2 items-center border-b border-gray-500/25"
              >
                <img className="w-1/5" src={item.imageURL} alt="" />

                <div className="w-1/2">
                  <p className="text- font-medium">{item.name}</p>
                  <p className="my-1 text-xs">Item Price: {item.price}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="w-1/2 flex justify-between items-center px-1">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="p-1.5 hover:text-[#0d7a52]"
                      >
                        <BiMinus size={16} />
                      </button>
                      <p className="font-semibold text-sm">{item.quantity}</p>
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="p-1.5 text-sm hover:text-[#0d7a52]"
                      >
                        <BiPlus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-1/5 text-center">
                  <button onClick={() => removeItem(item.id)}>
                    <RiDeleteBin6Line
                      className="text-red-600 inline"
                      size={22}
                    />
                  </button>
                </div>
              </div>
            ))}
            {cart.length === 0 && (
              <div className="flex flex-col justify-center h-full items-center w-5/6 mx-auto">
                <div className="bg-[#0d7a52]/20 rounded-full p-5">
                  <BsBagCheck className="text-[#0d7a52]" size={30} />
                </div>
                <p className="my-2 text-lg font-semibold">Your cart is empty</p>
                <p className="text-sm text-center">
                  No items added in your cart. Please add product to your cart
                  list.
                </p>
              </div>
            )}
          </div>
          <button className="bg-[#0d7a52] py-3 flex justify-between items-center font-medium px-4 text-white">
            <p>Proceed To Checkout</p>
            <p className="bg-white text-[#0d7a52] p-2 px-4 font-semibold rounded-md">
              $
              {cart
                .reduce((acc, item) => acc + item.quantity * item.price, 0)
                .toFixed(2)}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
