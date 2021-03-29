import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import CheckoutSummaryStyle from './Checkoutsummary.module.css'
const CheckoutSummary = (props) => {
  return (
    <div className={CheckoutSummaryStyle.CheckoutSummary}>
      <h1>We hope it tastes well</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled} text="CANCEL">
      
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}  text="CONTINUE">
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
