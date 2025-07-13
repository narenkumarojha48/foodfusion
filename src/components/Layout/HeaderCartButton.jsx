import { useCartContext } from "../contexts/CartContextProvider";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = ({showCartHandle,closeCartHandle}) => {
  const ctx = useCartContext();
  let noOfIems = ctx.cartdata?.cart?.reduce((acc,curr)=>acc+Number(curr.quantity),0);
  return (
    <button className={styles.button} onClick={()=>showCartHandle()}>
        <span className={styles.cart}>
            <FaShoppingCart/>
        </span>
        <span className={styles.cart}>Your Cart</span>
        <div className={styles.badge}>{noOfIems}</div>
    </button>
  )
}

export default HeaderCartButton