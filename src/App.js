import Header from "./components/Layout/Header";
import "./App.css";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/contexts/CartContextProvider";
import { useState } from "react";
function App() {
  const [cartShown, setCartShown] = useState(false);
  const showCartHandle = () => {
    setCartShown(true);
  };
  const closeCartHandle = () => {
    setCartShown(false);
  };
  return (
    <CartContextProvider>
      <div className="App">
        {cartShown && <Cart closeCartHandle={closeCartHandle} />}
        <Header
          showCartHandle={showCartHandle}
          closeCartHandle={closeCartHandle}
        />
        <Meals />
      </div>
    </CartContextProvider>
  );
}

export default App;
