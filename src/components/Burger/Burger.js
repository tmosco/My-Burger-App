import React from "react";
import BurgerStyle from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";


const Burger = (props) => {
  let tramsformedIngredients = Object.keys(props.ingredients).map(
    (ingredient) => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => {
        return <BurgerIngredient key={ingredient } type={ingredient} />;
      });
    }
  ).reduce((arr,el) => {
    return arr.concat(el)
  },[]);
if (tramsformedIngredients.length === 0 ){
tramsformedIngredients = <p>Please Start Adding Ingredients!</p>
}
  return (
    <>
      <div className={BurgerStyle.Burger}>
        <BurgerIngredient type="bread-top" />
        {tramsformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
      
    </>
  );
};

export default Burger;
