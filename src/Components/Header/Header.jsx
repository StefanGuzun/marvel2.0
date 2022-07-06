import React, {useState, useEffect} from "react";
import logo from "../../img/marvel-logo.png"
;


export const Header = () => {

    return(
        <header className="center">
            <img src={logo}/>
        </header>
    )
}