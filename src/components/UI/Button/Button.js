import React from 'react';
import Buttonstyle from "./Button.module.css"

const Button = (props) => {
    return (
        <button disabled={props.disabled} className={[Buttonstyle.Success, Buttonstyle[props.btnType]].join(' ')} onClick={props.clicked}>
            {props.text}
        </button>
    );
};

export default Button;