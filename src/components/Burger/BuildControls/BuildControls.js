import React from "react";
import BuildControlStyle from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={BuildControlStyle.BuildControls}>
      <p>
        Current Price:<strong> {props.price.toFixed(2)} </strong>
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => {
              props.ingredientAdded(ctrl.type);
            }}
            removed={() => {
              props.ingredientRemoval(ctrl.type);
            }}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
      <button disabled={!props.purchasable} className={BuildControlStyle.OrderButton} onClick={props.ordered}>ORDER NOW</button>
    </div>
  );
};

export default BuildControls;
