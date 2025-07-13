import styles from "./MealsSummary.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";
const DUMMY_MEALS = [
    {
        id:"m1",
        name:"Sushi",
        description:"Finest fish and veggies",
        price:22.99
    },
     {
        id:"m2",
        name:"Schnitzel",
        description:"A german speciality!",
        price:16.5
    },
     {
        id:"m3",
        name:"Barbecue Burger",
        description:"American, raw, meaty",
        price:12.99
    },
     {
        id:"m4",
        name:"Green Bowl",
        description:"Healthy ...and green...",
        price:18.9
    },
]

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <Card key={meal.id}>
            <MealItem key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          </Card>
        ))}
      </ul>
    </section>
  );
}
export default AvailableMeals;