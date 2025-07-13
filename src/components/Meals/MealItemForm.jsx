import { useRef } from "react";
import Input from "../UI/Input";
import styles from "./MealItem.module.css";

import { useCartContext } from "../contexts/CartContextProvider";
const MealItemForm = (props) => {
  const cartCtx = useCartContext();
  const inputRef = useRef(null);
  const handleSubmit=(e)=>{
    e.preventDefault();
    let id = props.id;
    let name = props.name;
    let description = props.description;
    let price = props.price;
    let qty = inputRef.current.value;
    console.log("cartCtx",cartCtx)
    console.log("props",props)
    cartCtx.addToCart({id:id,name:name,description:description,price:price,quantity:qty});

  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <Input ref={inputRef} label="Amount" input={{type:'number',min:1,max:5,step:1,defaultValues:1}}/>
        <button className={styles.add}>+ Add</button>
    </form>
  )
}

export default MealItemForm;