import React from 'react'
import { Link } from 'react-router-dom'
import "./componentsStyle/Cards.css";

export default function Card({id, thumbnail, name}) {
  return (
    <Link className="charInfoCard" style={{textDecoration:"none"}} to={`/${id}`}>
    <div style={{textAlign: "center"}}>
        <img style={{margin: 10}} src={thumbnail} alt="thumbnail"/>
        <p style={{color: "black", backgroundColor: "white",maxWidth: 300, borderRadius: 50}}>{name}</p>
    </div>
    </Link>
  )
}