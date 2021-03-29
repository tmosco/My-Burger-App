import React from "react";
import InputStyle from "./Input.module.css";

const Input = (props) => {
  let inputElement = null;
  const inputStyling =[InputStyle.Input]


  if(props.invalid && props.shouldValidate && props.touched){
    inputStyling.push(InputStyle.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputStyling.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputStyling.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    case "select":
      inputElement = (
        <select className={inputStyling.join(' ')} value={props.value}  onChange={props.changed}>
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
         
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={inputStyling.join(' ')}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
  }

  return (
    <div className={inputStyling.join(' ')}>
      <label className={InputStyle.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
