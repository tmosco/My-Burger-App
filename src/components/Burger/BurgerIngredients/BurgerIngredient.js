import React from "react";
import BurgerIngredientStyle from "./BurgerIngredient.module.css";
import PropTypes from 'prop-types';


const BurgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={BurgerIngredientStyle.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={BurgerIngredientStyle.BreadTop}>
          <div className={BurgerIngredientStyle.Seeds1}> </div>
          <div className={BurgerIngredientStyle.Seeds2}> </div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={BurgerIngredientStyle.Meat}></div>;
      break;
    case "cheese":
      ingredient = <div className={BurgerIngredientStyle.Cheese}></div>;
      break;
    case "salad":
      ingredient = <div className={BurgerIngredientStyle.Salad}></div>;
      break;
    case "bacon":
      ingredient = <div className={BurgerIngredientStyle.Bacon}></div>;
      break;
      default:
          ingredient= null

  }
  return ingredient;
};

export default BurgerIngredient;


BurgerIngredient.propTypes={
    type :PropTypes.string.isRequired
}