import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import { useCartContext } from '../contexts/CartContextProvider';
const Cart = (props) => {
    const cartCtx = useCartContext();
  return (
    <Modal className={styles.cart}>
      {/* CartItems */}
      
        <div className= {styles.carthead}>
          <div>Name</div>
          <div>description</div>
          <div>quantity</div>
          <div>price</div>
        </div>
      

      {cartCtx.cartdata.cart?.map((item) => {
        return (
          <div key={item.id} className={styles.cartItems}>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{item.quantity}</div>
            <div className={styles.price}>{item.price.toFixed(2)}</div>
          </div>
        );
      })}
     
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{cartCtx.cartdata.totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button
          className={styles.close}
          onClick={() => props.closeCartHandle()}
        >
          Close
        </button>
        <button className={styles.order}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart