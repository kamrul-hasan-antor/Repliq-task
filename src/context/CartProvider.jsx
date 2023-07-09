import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart data from local storage on component mount
  useEffect(() => {
    const storedProducts = localStorage.getItem("cart");
    if (storedProducts) {
      setCart(JSON.parse(storedProducts));
    }
  }, []);

  // Add a product to the cart
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      console.log("Product is already in the cart.");
      return; // Exit the function if the product is already in the cart
    }

    // Add the product to the cart
    const updatedCart = [...cart, product];
    setCart(updatedCart);

    // Save the updated cart data to local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    console.log("Product added to the cart.");
  };

  // Update quantity of a specific item in cart
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
