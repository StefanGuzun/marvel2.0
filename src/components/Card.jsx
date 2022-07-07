import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({id, thumbnail, name}) {
  return (
    <Link to={`/${id}`} target>
    <div className='card'>
        <img src={thumbnail} alt="hero image" />
        <h1 className='card-name'>{name}</h1>
    </div>
    </Link>
  )
}
