import React, { useState } from 'react'
import Grid from '../components/Grid'
import Container from '../components/Container'
import Card from '../components/Card'
import SearchBar from "../components/SearchBar"

const IMAGE_SIZE = "standart_fantastic"

export default function Homes() {
    const [heroes, setHeroes] = useState([])

    let cards;

    if (heroes){
        cards = heroes.map((hero) => {
            <Card
            name={hero.name} 
            id={hero.id}
            key={hero.id}
            thumbnail={`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`}
            />
        })
    }

  return (
    <Container>
        <h1>marvel heroes</h1>
        <Grid>
            {cards ? cards : ""}
        </Grid>
    </Container>
  )
}
