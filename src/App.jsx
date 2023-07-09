import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className="relative">
      <Home />
      <Cart />
    </div>
  );
};

export default App;
