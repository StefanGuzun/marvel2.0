import React from "react";
import "./CharacterCard.css";

const CharInfoCard = (props) => {
    return(
        <div className="card__body">
            <div className="cb__char-image">
                <img src={props.img} alt={props.name} />
            </div>
            <div className="cb__text">
                <p className="cb__char-name">{props.name}</p>
                <p className="cb__char-info">{props.info}</p>
            </div>
        </div>
    )
}

export default CharInfoCard;

