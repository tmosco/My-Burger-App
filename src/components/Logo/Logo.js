import React from 'react';
import burgerLogo from '../../asset/Image/27.1 burger-logo.png.png';
import Logostyle from "./Logo.module.css"

const Logo = (props) => {
    return (
        <div className={Logostyle.Logo}>
            <img src={burgerLogo} alt="My Burger"/>
        </div>
    );
};

export default Logo;