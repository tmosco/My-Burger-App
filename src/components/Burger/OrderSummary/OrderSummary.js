import React from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {


  const ingredientSummary = Object.keys(props.ingredients).map((igKey, i) => {
    return (
      <li key={i}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <>
      <h3> Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p style={{ padding: " 0, 2px" }}>Total Price: {props.price}</p>
      <p>Continue to checkout</p>
      <Button btnType={"Danger"} text={"CANCEL"} clicked={props.purchaseCancelled} />
      <Button btnType={"Success"} text={"CONTINUE"} clicked={props.purchaseContinued} />
    </>
  );
};

export default OrderSummary;
