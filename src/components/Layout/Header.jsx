import { Fragment } from "react";
import mealsImage from "../../assets/beautiful-table.webp";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
function Header({ showCartHandle, closeCartHandle }) {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Food Fusion</h1>
        <HeaderCartButton
          showCartHandle={showCartHandle}
          closeCartHandle={closeCartHandle}
        />
      </header>
      <div className={styles.mainImage}>
        <img src={mealsImage} alt="A table full of delicious meal" />
      </div>
    </Fragment>
  );
}
export default Header;
