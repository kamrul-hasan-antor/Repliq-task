import React, { useContext, useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { CartContext } from "../context/CartProvider";

const Modal = ({ modalData, showModal, setShowModal }) => {
  const { addToCart } = useContext(CartContext);
  const { name, price, details, category, imageURL } = modalData;

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div
      className={`${
        showModal ? "fixed" : "hidden"
      } inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center`}
    >
      <div className="relative bg-[#f5f5f5] w-11/12 md:w-3/5 max-w-screen-lg rounded-md py-6 px-2 md:p-6">
        <button
          onClick={() => setShowModal(false)}
          className="absolute right-4 top-4 "
        >
          <RxCrossCircled className="text-[#0d7a52]" size={28} />
        </button>
        <div className="flex">
          <div className="w-1/2 md:pr-3">
            <img className="rounded-md w-full" src={imageURL} alt="" />
          </div>
          <div className="w-1/2 md:pl-3">
            <p className="text-3xl font-semibold">{name}</p>
            <p className="text-sm my-3">{details}</p>
            <p className="text-2xl font-semibold">${price}</p>
            <p className="text-sm my-3">Category: {category}</p>

            <button
              onClick={() => handleAddToCart(modalData)}
              className="bg-[#0d7a52] border border-[#0d7a52] text-white font-semibold text-sm py-3 px-8 rounded-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
