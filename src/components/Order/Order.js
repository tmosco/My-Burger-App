import React from "react";
import OrderStyle from "./Order.module.css";

const Order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const displayIngredient = ingredients.map((ig) => {
    return (
      <span
        style={{
          display: "inline-block",
          textTransform: "capitalize",
          margin: "0 8px",
          border: "1px solid #ccc ",
          padding: "5px",
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className={OrderStyle.Order}>
      <p>Ingredients :{displayIngredient}</p>
      <p>
        Price : <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
