import React from "react";
import ControlStyle from "./BuildControl.module.css";

const BuildControl = (props) => {
  return (
    <div className={ControlStyle.BuildControl}>
      <div className={ControlStyle.Label}>{props.label}</div>
      <button
        className={ControlStyle.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={ControlStyle.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
