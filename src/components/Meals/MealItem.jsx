import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
    // let price = props.price?.toFixed(2)
  return (
    <li className={styles.meals}>
         <div>
            <h3>{props.name}</h3>
            <div className={styles.desc}>{props.description}</div>
            <div className={styles.price}>{'$'+props.price?.toFixed(2)}</div>
         </div>
         <div>
           <MealItemForm id={props.id} name={props.name} description={props.description} price={props.price} />
         </div>
    </li>
   
  )
}

export default MealItem;