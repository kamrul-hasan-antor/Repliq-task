import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("cart");
    if (storedProducts) {
      setCart(JSON.parse(storedProducts));
    }
  }, []);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      console.log("Product is already in the cart.");
      return;
    }

    // Add the product to the cart
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // increment quantity of a specific item in cart
  const incrementQuantity = (productId) => {
    const updatedProducts = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  // decrement quantity of a specific item in cart
  const decrementQuantity = (productId) => {
    const updatedProducts = cart.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCart(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  // remove product from cart
  const removeItem = (productId) => {
    const updatedProducts = cart.filter((product) => product.id !== productId);
    setCart(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
