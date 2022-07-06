import React, {useState, useEffect} from "react";
import logo from "../../img/marvel-logo.png";
import "./Header.css"

export const Header = () => {

    return(
        <div>
            <div className="headerStyle">
                <img src={logo} alt="marvel-logo" className="logoImage"/>
            </div>
        </div>
    )
}
