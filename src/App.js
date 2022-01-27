import "./App.css";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const cartIsActiveHandler = () => {
    setShowCart(true);
  };

  const cartIsDisabledHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onDeactivate={cartIsDisabledHandler}></Cart>}
      <Header onActivate={cartIsActiveHandler}></Header>
      <Meals></Meals>
    </CartProvider>
  );
}

export default App;
