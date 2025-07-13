import { useReducer, createContext, useContext } from "react";
const CartContext = createContext({});
const initialCartState = {
  cart: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      let tempCart = [...state.cart, action.payload];
      let tempAmount = tempCart.reduce(
        (acc, curr) => acc + Number(curr.price) * Number(curr?.quantity ?? 1),
        0
      );
      return { cart: tempCart, totalAmount: tempAmount };
    }
    case "REMOVE": {
      let tempCart = state.cart.filter(
        (item) => item.id !== Number(action.payload?.id)
      );
      let tempAmount = tempCart.reduce(
        (acc, curr) => acc + Number(curr.price) * Number(curr?.quantity ?? 1),
        0
      );
      return { cart: tempCart, totalAmount: tempAmount };
    }

    default:
      return state;
  }
};

const CartContextProvider = (props) => {
  const [cartdata, dispatch] = useReducer(cartReducer, initialCartState);
  const addToCart = (e) => {
    dispatch({ type: "ADD", payload: e });
  };
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  return (
    <CartContext.Provider value={{ cartdata, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
export default CartContextProvider;
